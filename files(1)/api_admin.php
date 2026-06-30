<?php
// ============================================================
//  API ADMIN — /api/api_admin.php
//  POST /api_admin.php?action=login    → connexion admin
//  POST /api_admin.php?action=logout   → déconnexion
//  GET  /api_admin.php?action=verifier → vérifier le token
//  GET  /api_admin.php?action=logs     → journal des connexions
//  POST /api_admin.php?action=vider    → vider tout le registre
//  POST /api_admin.php?action=importer → importer des membres JSON
//  GET  /api_admin.php?action=exporter → exporter en JSON
// ============================================================

require_once __DIR__ . '/connexion.php';
initHeaders();

$methode = $_SERVER['REQUEST_METHOD'];
$action  = $_GET['action'] ?? '';

// ── LOGIN ────────────────────────────────────────────────────
if ($action === 'login' && $methode === 'POST') {
    $d    = lireJSON();
    $user = trim($d['identifiant'] ?? '');
    $pass = trim($d['motDePasse']  ?? '');

    if (!$user || !$pass) repondreErreur('Identifiant et mot de passe requis.');

    $db   = getDB();
    $stmt = $db->prepare('SELECT * FROM admin_users WHERE identifiant = ? AND actif = 1');
    $stmt->execute([$user]);
    $admin = $stmt->fetch();

    $passHash = hash('sha256', $pass);
    $ok = $admin && hash_equals($admin['mot_de_passe'], $passHash);

    // Journaliser la tentative
    if ($admin) {
        $db->prepare('INSERT INTO connexions_log (admin_id, ip_adresse, succes) VALUES (?, ?, ?)')
           ->execute([$admin['id'], $_SERVER['REMOTE_ADDR'] ?? null, $ok ? 1 : 0]);
    }

    if (!$ok) {
        repondreErreur('Identifiant ou mot de passe incorrect.', 401);
    }

    // Mettre à jour la date de dernière connexion
    $db->prepare('UPDATE admin_users SET derniere_connexion = NOW() WHERE id = ?')
       ->execute([$admin['id']]);

    $token = genererToken($admin['id']);
    repondreOK([
        'token'      => $token,
        'admin'      => ['id' => $admin['id'], 'nom' => $admin['nom_complet']],
        'expire_dans' => SESSION_DUREE,
    ]);
}

// ── VÉRIFIER TOKEN ────────────────────────────────────────────
if ($action === 'verifier' && $methode === 'GET') {
    $adminId = exigerAdmin();
    $db      = getDB();
    $stmt    = $db->prepare('SELECT id, identifiant, nom_complet FROM admin_users WHERE id = ?');
    $stmt->execute([$adminId]);
    repondreOK($stmt->fetch());
}

// ── LOGS ─────────────────────────────────────────────────────
if ($action === 'logs' && $methode === 'GET') {
    exigerAdmin();
    $db   = getDB();
    $stmt = $db->query('
        SELECT l.date_connexion, l.ip_adresse, l.succes, a.identifiant
        FROM connexions_log l
        JOIN admin_users a ON a.id = l.admin_id
        ORDER BY l.date_connexion DESC
        LIMIT 50
    ');
    repondreOK($stmt->fetchAll());
}

// ── VIDER LE REGISTRE ────────────────────────────────────────
if ($action === 'vider' && $methode === 'POST') {
    exigerAdmin();
    $db = getDB();
    $n  = $db->query('SELECT COUNT(*) FROM membres')->fetchColumn();
    $db->exec('DELETE FROM membres');
    repondreOK(['message' => "$n membre(s) supprimé(s).", 'supprime' => (int)$n]);
}

// ── EXPORTER ─────────────────────────────────────────────────
if ($action === 'exporter' && $methode === 'GET') {
    exigerAdmin();
    $db      = getDB();
    $membres = $db->query('SELECT * FROM membres')->fetchAll();
    $export  = [
        'version'    => 1,
        'date'       => date('d/m/Y'),
        'nb_membres' => count($membres),
        'membres'    => $membres,
    ];
    header('Content-Type: application/json; charset=utf-8');
    header('Content-Disposition: attachment; filename="registre_famille_' . date('Ymd') . '.json"');
    echo json_encode($export, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

// ── IMPORTER ─────────────────────────────────────────────────
if ($action === 'importer' && $methode === 'POST') {
    exigerAdmin();
    $d       = lireJSON();
    $membres = $d['membres'] ?? (is_array($d) ? $d : []);

    if (empty($membres)) repondreErreur('Aucun membre à importer.');

    $db    = getDB();
    $nb_ok = 0;
    $nb_err= 0;

    $stmt = $db->prepare('
        INSERT IGNORE INTO membres
          (id, prenom, nom, age, telephone, lieu, profession,
           niveau_etude, nom_pere, nom_mere, bio, cv_nom, cv_donnees, date_inscription)
        VALUES
          (:id, :prenom, :nom, :age, :telephone, :lieu, :profession,
           :niveau, :pere, :mere, :bio, :cv_nom, :cv_data, :date)
    ');

    foreach ($membres as $m) {
        try {
            $stmt->execute([
                ':id'         => $m['id']           ?? generId(),
                ':prenom'     => $m['prenom']        ?? '',
                ':nom'        => strtoupper($m['nom'] ?? ''),
                ':age'        => (int)($m['age']     ?? 0),
                ':telephone'  => $m['telephone']     ?? '',
                ':lieu'       => $m['lieu']          ?? '',
                ':profession' => $m['profession']    ?? '',
                ':niveau'     => $m['niveauEtude']   ?? $m['niveau_etude'] ?? null,
                ':pere'       => $m['pere']          ?? $m['nom_pere']     ?? null,
                ':mere'       => $m['mere']          ?? $m['nom_mere']     ?? null,
                ':bio'        => $m['bio']           ?? null,
                ':cv_nom'     => $m['cvNom']         ?? $m['cv_nom']       ?? null,
                ':cv_data'    => $m['cv']            ?? $m['cv_donnees']   ?? null,
                ':date'       => $m['dateInscription'] ?? date('Y-m-d'),
            ]);
            $nb_ok++;
        } catch (Exception $e) {
            $nb_err++;
        }
    }

    repondreOK([
        'message'  => "$nb_ok membre(s) importé(s).",
        'importe'  => $nb_ok,
        'erreurs'  => $nb_err,
    ]);
}

// ── CHANGER MOT DE PASSE ──────────────────────────────────────
if ($action === 'changer_mdp' && $methode === 'POST') {
    $adminId = exigerAdmin();
    $d = lireJSON();
    $ancien  = trim($d['ancien']  ?? '');
    $nouveau = trim($d['nouveau'] ?? '');

    if (!$ancien || !$nouveau) repondreErreur('Anciens et nouveaux mots de passe requis.');
    if (strlen($nouveau) < 6)  repondreErreur('Le nouveau mot de passe doit faire au moins 6 caractères.');

    $db   = getDB();
    $stmt = $db->prepare('SELECT mot_de_passe FROM admin_users WHERE id = ?');
    $stmt->execute([$adminId]);
    $admin = $stmt->fetch();

    if (!hash_equals($admin['mot_de_passe'], hash('sha256', $ancien))) {
        repondreErreur('Ancien mot de passe incorrect.', 403);
    }

    $db->prepare('UPDATE admin_users SET mot_de_passe = ? WHERE id = ?')
       ->execute([hash('sha256', $nouveau), $adminId]);

    repondreOK(['message' => 'Mot de passe modifié avec succès.']);
}

repondreErreur('Action non reconnue.', 404);
