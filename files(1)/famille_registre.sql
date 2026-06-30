-- ============================================================
--  REGISTRE FAMILIAL — Script MySQL
--  Base de données : famille_registre
--  Création complète : tables, index, vues, procédures
-- ============================================================

-- ── Création et sélection de la base ──────────────────────
CREATE DATABASE IF NOT EXISTS famille_registre
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE famille_registre;

-- ============================================================
--  TABLE : membres
--  Stocke toutes les informations de chaque membre
-- ============================================================
CREATE TABLE IF NOT EXISTS membres (
  id                  VARCHAR(20)   NOT NULL,
  prenom              VARCHAR(100)  NOT NULL,
  nom                 VARCHAR(100)  NOT NULL,
  age                 TINYINT       UNSIGNED NOT NULL,
  telephone           VARCHAR(30)   NOT NULL,
  lieu                VARCHAR(200)  NOT NULL,
  profession          VARCHAR(150)  NOT NULL,
  niveau_etude        VARCHAR(100)  DEFAULT NULL,
  nom_pere            VARCHAR(200)  DEFAULT NULL,
  nom_mere            VARCHAR(200)  DEFAULT NULL,
  bio                 TEXT          DEFAULT NULL,
  cv_nom              VARCHAR(255)  DEFAULT NULL,
  cv_donnees          LONGTEXT      DEFAULT NULL,   -- fichier encodé en base64
  date_inscription    DATE          NOT NULL DEFAULT (CURRENT_DATE),
  date_modification   DATETIME      DEFAULT NULL,
  PRIMARY KEY (id),
  INDEX idx_nom       (nom),
  INDEX idx_prenom    (prenom),
  INDEX idx_lieu      (lieu(50)),
  INDEX idx_profession(profession(50)),
  INDEX idx_niveau    (niveau_etude(50)),
  INDEX idx_date      (date_inscription)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci
  COMMENT='Registre des membres de la famille';


-- ============================================================
--  TABLE : admin_users
--  Comptes administrateurs (mot de passe haché)
-- ============================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id              INT           UNSIGNED NOT NULL AUTO_INCREMENT,
  identifiant     VARCHAR(50)   NOT NULL UNIQUE,
  mot_de_passe    VARCHAR(255)  NOT NULL,   -- bcrypt / sha2
  nom_complet     VARCHAR(150)  DEFAULT NULL,
  derniere_connexion DATETIME   DEFAULT NULL,
  actif           TINYINT(1)    NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci
  COMMENT='Comptes administrateurs';

-- Compte admin par défaut
-- identifiant : admin | mot de passe : Famille2025
-- (remplacer le hash par un vrai hash bcrypt en production)
INSERT INTO admin_users (identifiant, mot_de_passe, nom_complet)
VALUES (
  'admin',
  SHA2('Famille2025', 256),
  'Administrateur Famille'
) ON DUPLICATE KEY UPDATE identifiant = identifiant;


-- ============================================================
--  TABLE : connexions_log
--  Journal des connexions à l'espace admin
-- ============================================================
CREATE TABLE IF NOT EXISTS connexions_log (
  id              INT           UNSIGNED NOT NULL AUTO_INCREMENT,
  admin_id        INT           UNSIGNED NOT NULL,
  ip_adresse      VARCHAR(45)   DEFAULT NULL,
  date_connexion  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  succes          TINYINT(1)    NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  FOREIGN KEY (admin_id) REFERENCES admin_users(id) ON DELETE CASCADE,
  INDEX idx_date  (date_connexion)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci
  COMMENT='Journal des connexions admin';


-- ============================================================
--  VUE : v_membres_sans_cv
--  Membres sans les données binaires du CV (pour listings)
-- ============================================================
CREATE OR REPLACE VIEW v_membres_sans_cv AS
  SELECT
    id,
    prenom,
    nom,
    age,
    telephone,
    lieu,
    profession,
    niveau_etude,
    nom_pere,
    nom_mere,
    bio,
    cv_nom,
    CASE WHEN cv_donnees IS NOT NULL THEN 1 ELSE 0 END AS a_un_cv,
    date_inscription,
    date_modification
  FROM membres
  ORDER BY date_inscription DESC;


-- ============================================================
--  VUE : v_statistiques
--  Statistiques générales du registre
-- ============================================================
CREATE OR REPLACE VIEW v_statistiques AS
  SELECT
    COUNT(*)                        AS total_membres,
    ROUND(AVG(age), 0)              AS age_moyen,
    MIN(age)                        AS age_min,
    MAX(age)                        AS age_max,
    SUM(cv_donnees IS NOT NULL)     AS membres_avec_cv,
    COUNT(DISTINCT lieu)            AS nb_villes,
    COUNT(DISTINCT profession)      AS nb_professions,
    COUNT(DISTINCT niveau_etude)    AS nb_niveaux
  FROM membres;


-- ============================================================
--  PROCÉDURE : p_rechercher_membres
--  Recherche libre dans le registre
--  Usage : CALL p_rechercher_membres('Jean');
-- ============================================================
DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS p_rechercher_membres(
  IN p_terme VARCHAR(200)
)
BEGIN
  IF p_terme IS NULL OR p_terme = '' THEN
    SELECT * FROM v_membres_sans_cv;
  ELSE
    SELECT * FROM v_membres_sans_cv
    WHERE
      prenom      LIKE CONCAT('%', p_terme, '%') OR
      nom         LIKE CONCAT('%', p_terme, '%') OR
      lieu        LIKE CONCAT('%', p_terme, '%') OR
      profession  LIKE CONCAT('%', p_terme, '%') OR
      niveau_etude LIKE CONCAT('%', p_terme, '%') OR
      nom_pere    LIKE CONCAT('%', p_terme, '%') OR
      nom_mere    LIKE CONCAT('%', p_terme, '%');
  END IF;
END$$

DELIMITER ;


-- ============================================================
--  PROCÉDURE : p_ajouter_membre
--  Ajoute un nouveau membre avec vérification de doublon
--  Usage :
--    CALL p_ajouter_membre(
--      'id123','Jean','DUPONT',30,'+225 07 00 00 00',
--      'Abidjan','Ingénieur','Bac +5','Pierre DUPONT',
--      'Marie DUPONT','Ma biographie',NULL,NULL,@resultat
--    );
--    SELECT @resultat;
-- ============================================================
DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS p_ajouter_membre(
  IN  p_id          VARCHAR(20),
  IN  p_prenom      VARCHAR(100),
  IN  p_nom         VARCHAR(100),
  IN  p_age         TINYINT UNSIGNED,
  IN  p_telephone   VARCHAR(30),
  IN  p_lieu        VARCHAR(200),
  IN  p_profession  VARCHAR(150),
  IN  p_niveau      VARCHAR(100),
  IN  p_pere        VARCHAR(200),
  IN  p_mere        VARCHAR(200),
  IN  p_bio         TEXT,
  IN  p_cv_nom      VARCHAR(255),
  IN  p_cv_data     LONGTEXT,
  OUT p_resultat    VARCHAR(200)
)
BEGIN
  DECLARE v_doublon INT DEFAULT 0;

  SELECT COUNT(*) INTO v_doublon
  FROM membres
  WHERE LOWER(prenom) = LOWER(p_prenom)
    AND LOWER(nom)    = LOWER(p_nom);

  IF v_doublon > 0 THEN
    SET p_resultat = CONCAT('ERREUR: ', p_prenom, ' ', p_nom, ' est déjà inscrit(e).');
  ELSE
    INSERT INTO membres (
      id, prenom, nom, age, telephone, lieu, profession,
      niveau_etude, nom_pere, nom_mere, bio,
      cv_nom, cv_donnees, date_inscription
    ) VALUES (
      p_id, p_prenom, UPPER(p_nom), p_age, p_telephone, p_lieu, p_profession,
      NULLIF(p_niveau,''), NULLIF(p_pere,''), NULLIF(p_mere,''), NULLIF(p_bio,''),
      NULLIF(p_cv_nom,''), NULLIF(p_cv_data,''), CURDATE()
    );
    SET p_resultat = CONCAT('OK: ', p_prenom, ' ', UPPER(p_nom), ' inscrit(e) avec succès.');
  END IF;
END$$

DELIMITER ;


-- ============================================================
--  PROCÉDURE : p_modifier_membre
--  Met à jour un membre existant
-- ============================================================
DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS p_modifier_membre(
  IN  p_id          VARCHAR(20),
  IN  p_prenom      VARCHAR(100),
  IN  p_nom         VARCHAR(100),
  IN  p_age         TINYINT UNSIGNED,
  IN  p_telephone   VARCHAR(30),
  IN  p_lieu        VARCHAR(200),
  IN  p_profession  VARCHAR(150),
  IN  p_niveau      VARCHAR(100),
  IN  p_pere        VARCHAR(200),
  IN  p_mere        VARCHAR(200),
  IN  p_bio         TEXT,
  OUT p_resultat    VARCHAR(200)
)
BEGIN
  DECLARE v_existe INT DEFAULT 0;

  SELECT COUNT(*) INTO v_existe FROM membres WHERE id = p_id;

  IF v_existe = 0 THEN
    SET p_resultat = 'ERREUR: Membre introuvable.';
  ELSE
    UPDATE membres SET
      prenom            = p_prenom,
      nom               = UPPER(p_nom),
      age               = p_age,
      telephone         = p_telephone,
      lieu              = p_lieu,
      profession        = p_profession,
      niveau_etude      = NULLIF(p_niveau,''),
      nom_pere          = NULLIF(p_pere,''),
      nom_mere          = NULLIF(p_mere,''),
      bio               = NULLIF(p_bio,''),
      date_modification = NOW()
    WHERE id = p_id;
    SET p_resultat = CONCAT('OK: ', p_prenom, ' ', UPPER(p_nom), ' mis(e) à jour.');
  END IF;
END$$

DELIMITER ;


-- ============================================================
--  PROCÉDURE : p_supprimer_membre
--  Supprime un membre par son id
-- ============================================================
DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS p_supprimer_membre(
  IN  p_id        VARCHAR(20),
  OUT p_resultat  VARCHAR(200)
)
BEGIN
  DECLARE v_existe INT DEFAULT 0;
  SELECT COUNT(*) INTO v_existe FROM membres WHERE id = p_id;
  IF v_existe = 0 THEN
    SET p_resultat = 'ERREUR: Membre introuvable.';
  ELSE
    DELETE FROM membres WHERE id = p_id;
    SET p_resultat = 'OK: Membre supprimé.';
  END IF;
END$$

DELIMITER ;


-- ============================================================
--  PROCÉDURE : p_repartition_niveaux
--  Répartition des membres par niveau d'étude
-- ============================================================
DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS p_repartition_niveaux()
BEGIN
  SELECT
    COALESCE(niveau_etude, 'Non renseigné') AS niveau,
    COUNT(*)                                AS nb_membres,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM membres), 1) AS pourcentage
  FROM membres
  GROUP BY niveau_etude
  ORDER BY nb_membres DESC;
END$$

DELIMITER ;


-- ============================================================
--  PROCÉDURE : p_repartition_villes
--  Répartition des membres par ville
-- ============================================================
DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS p_repartition_villes()
BEGIN
  SELECT
    lieu            AS ville,
    COUNT(*)        AS nb_membres,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM membres), 1) AS pourcentage
  FROM membres
  GROUP BY lieu
  ORDER BY nb_membres DESC;
END$$

DELIMITER ;


-- ============================================================
--  REQUÊTES UTILES (exemples)
-- ============================================================

-- Lister tous les membres (sans CV) :
-- SELECT * FROM v_membres_sans_cv;

-- Lister les membres triés par nom :
-- SELECT * FROM v_membres_sans_cv ORDER BY nom ASC;

-- Rechercher un membre :
-- CALL p_rechercher_membres('Abidjan');

-- Récupérer un membre complet avec son CV :
-- SELECT * FROM membres WHERE id = 'xxx';

-- Voir les statistiques :
-- SELECT * FROM v_statistiques;

-- Répartition par niveau d'étude :
-- CALL p_repartition_niveaux();

-- Répartition par ville :
-- CALL p_repartition_villes();

-- Compter les membres avec CV :
-- SELECT COUNT(*) FROM membres WHERE cv_donnees IS NOT NULL;

-- Modifier le mot de passe admin :
-- UPDATE admin_users SET mot_de_passe = SHA2('NouveauMotDePasse', 256) WHERE identifiant = 'admin';

-- ============================================================
--  FIN DU SCRIPT
-- ============================================================
SELECT 'Base de données famille_registre créée avec succès !' AS message;
