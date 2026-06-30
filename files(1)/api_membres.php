<?php
// ============================================================
//  API MEMBRES — /api/api_membres.php
//  GET    /api_membres.php          → liste tous les membres
//  GET    /api_membres.php?id=xxx   → un membre par ID
//  GET    /api_membres.php?q=terme  → recherche
//  GET    /api_membres.php?stats=1  → statistiques
//  POST   /api_membres.php          → ajouter un membre
//  PUT    /api_membres.php          → modifier un membre (admin)
//  DELETE /api_membres.php?id=xxx   → supprimer un membre (admin)
// ============================================================

require_once __DIR__ . '/connexion.php';
initHeaders();

$methode = $_SERVER['REQUEST_METHOD'];

// ── GET ─────────────────────────────────────────────────────
if ($methode === 'GET') {

    // Statistiques
    if (isset($_GET['stats'])) {
        $db   = getDB();
        $stmt = $db->query('SELECT * FROM v_statistiques');
        $stats = $stmt->fetch();

        // Top villes
        $villes = $db->query('
            SELECT lieu AS label, COUNT(*) AS total
            FROM membres GROUP BY lieu ORDER BY total DESC LIMIT 5
        ')->fetchAll();

        // Top professions
        $profs = $db->query('
            SELECT profession AS label, COUNT(*) AS total
            FROM membres GROUP BY profession ORDER BY total DESC LIMIT 5
        ')->fetchAll();

        // Répartition niveaux
        $niveaux = $db->query('
            SELECT COALESCE(niveau_etude,"Non renseigné") AS label, COUNT(*) AS total
            FROM membres GROUP BY niveau_etude ORDER BY total DESC
        ')->fetchAll();

        // Tranches d\'âge
        $ages = $db->query("
            SELECT
              CASE
                WHEN age < 18  THEN '0–17'
                WHEN age <= 25 THEN '18–25'
                WHEN age <= 35 THEN '26–35'
                WHEN age <= 50 THEN '36–50'
                WHEN age <= 65 THEN '51–65'
                ELSE '65+'
              END AS label,
              COUNT(*) AS total
            FROM membres
            GROUP BY label ORDER BY MIN(age)
        ")->fetchAll();

        repondreOK([
            'resume'     => $stats,
            'villes'     => $villes,
            'professions'=> $profs,
            'niveaux'    => $niveaux,
            'ages'       => $ages,
        ]);
    }

    // Un membre par ID (avec CV)
    if (isset($_GET['id'])) {
        $db   = getDB();
        $stmt = $db->prepare('SELECT * FROM membres WHERE id = ?');
        $stmt->execute([$_GET['id']]);
        $membre = $stmt->fetch();
        if (!$membre) repondreErreur('Membre introuvable.', 404);
        repondreOK($membre);
    }

    // Recherche ou liste complète (sans données CV pour performance)
    $db    = getDB();
    $terme = trim($_GET['q'] ?? '');
    $tri   = $_GET['tri'] ?? 'date_desc';

    $orderBy = match($tri) {
        'nom_asc'   => 'nom ASC',
        'nom_desc'  => 'nom DESC',
        'age_asc'   => 'age ASC',
        'age_desc'  => 'age DESC',
        'date_asc'  => 'date_inscription ASC',
        default     => 'date_inscription DESC',
    };

    if ($terme !== '') {
        $like = '%' . $terme . '%';
        $stmt = $db->prepare("
            SELECT * FROM v_membres_sans_cv
            WHERE prenom      LIKE ?
               OR nom         LIKE ?
               OR lieu        LIKE ?
               OR profession  LIKE ?
               OR niveau_etude LIKE ?
               OR nom_pere    LIKE ?
               OR nom_mere    LIKE ?
            ORDER BY $orderBy
        ");
        $stmt->execute([$like, $like, $like, $like, $like, $like, $like]);
    } else {
        $stmt = $db->query("SELECT * FROM v_membres_sans_cv ORDER BY $orderBy");
    }

    repondreOK($stmt->fetchAll());
}

// ── POST — Ajouter ──────────────────────────────────────────
if ($methode === 'POST') {
    $d = lireJSON();

    // Validation champs obligatoires
    $requis = ['prenom','nom','age','telephone','lieu','profession'];
    foreach ($requis as $champ) {
        if (empty(trim($d[$champ] ?? ''))) {
            repondreErreur("Champ requis manquant : $champ");
        }
    }

    $db = getDB();

    // Vérification doublon
    $stmt = $db->prepare('SELECT COUNT(*) FROM membres WHERE LOWER(prenom)=LOWER(?) AND LOWER(nom)=LOWER(?)');
    $stmt->execute([$d['prenom'], $d['nom']]);
    if ($stmt->fetchColumn() > 0) {
        repondreErreur(trim($d['prenom']) . ' ' . strtoupper(trim($d['nom'])) . ' est déjà inscrit(e).');
    }

    $id   = generId();
    $stmt = $db->prepare('
        INSERT INTO membres
          (id, prenom, nom, age, telephone, lieu, profession,
           niveau_etude, nom_pere, nom_mere, bio, cv_nom, cv_donnees, date_inscription)
        VALUES
          (:id, :prenom, :nom, :age, :telephone, :lieu, :profession,
           :niveau, :pere, :mere, :bio, :cv_nom, :cv_data, CURDATE())
    ');

    $stmt->execute([
        ':id'         => $id,
        ':prenom'     => trim($d['prenom']),
        ':nom'        => strtoupper(trim($d['nom'])),
        ':age'        => (int)$d['age'],
        ':telephone'  => trim($d['telephone']),
        ':lieu'       => trim($d['lieu']),
        ':profession' => trim($d['profession']),
        ':niveau'     => trim($d['niveauEtude'] ?? '') ?: null,
        ':pere'       => trim($d['pere'] ?? '')  ?: null,
        ':mere'       => trim($d['mere'] ?? '')  ?: null,
        ':bio'        => trim($d['bio'] ?? '')   ?: null,
        ':cv_nom'     => trim($d['cvNom'] ?? '') ?: null,
        ':cv_data'    => $d['cv'] ?? null,
    ]);

    $stmt2 = $db->prepare('SELECT * FROM v_membres_sans_cv WHERE id = ?');
    $stmt2->execute([$id]);
    repondreOK($stmt2->fetch(), 201);
}

// ── PUT — Modifier (admin requis) ────────────────────────────
if ($methode === 'PUT') {
    exigerAdmin();
    $d = lireJSON();

    if (empty($d['id'])) repondreErreur('ID manquant.');

    $db   = getDB();
    $stmt = $db->prepare('SELECT COUNT(*) FROM membres WHERE id = ?');
    $stmt->execute([$d['id']]);
    if ($stmt->fetchColumn() == 0) repondreErreur('Membre introuvable.', 404);

    $stmt = $db->prepare('
        UPDATE membres SET
          prenom            = :prenom,
          nom               = :nom,
          age               = :age,
          telephone         = :telephone,
          lieu              = :lieu,
          profession        = :profession,
          niveau_etude      = :niveau,
          nom_pere          = :pere,
          nom_mere          = :mere,
          bio               = :bio,
          date_modification = NOW()
        WHERE id = :id
    ');

    $stmt->execute([
        ':id'         => $d['id'],
        ':prenom'     => trim($d['prenom']),
        ':nom'        => strtoupper(trim($d['nom'])),
        ':age'        => (int)$d['age'],
        ':telephone'  => trim($d['telephone']),
        ':lieu'       => trim($d['lieu']),
        ':profession' => trim($d['profession']),
        ':niveau'     => trim($d['niveauEtude'] ?? '') ?: null,
        ':pere'       => trim($d['pere'] ?? '')  ?: null,
        ':mere'       => trim($d['mere'] ?? '')  ?: null,
        ':bio'        => trim($d['bio'] ?? '')   ?: null,
    ]);

    $stmt2 = $db->prepare('SELECT * FROM v_membres_sans_cv WHERE id = ?');
    $stmt2->execute([$d['id']]);
    repondreOK($stmt2->fetch());
}

// ── DELETE — Supprimer (admin requis) ────────────────────────
if ($methode === 'DELETE') {
    exigerAdmin();
    $id = $_GET['id'] ?? (lireJSON()['id'] ?? '');
    if (!$id) repondreErreur('ID manquant.');

    $db   = getDB();
    $stmt = $db->prepare('SELECT COUNT(*) FROM membres WHERE id = ?');
    $stmt->execute([$id]);
    if ($stmt->fetchColumn() == 0) repondreErreur('Membre introuvable.', 404);

    $db->prepare('DELETE FROM membres WHERE id = ?')->execute([$id]);
    repondreOK(['message' => 'Membre supprimé avec succès.']);
}

repondreErreur('Méthode non autorisée.', 405);
