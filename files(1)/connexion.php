<?php
// ============================================================
//  CONNEXION MySQL — famille_registre
//  Modifier les paramètres selon votre hébergeur
// ============================================================

define('DB_HOST',     'localhost');       // Hôte MySQL (souvent localhost)
define('DB_NAME',     'famille_registre'); // Nom de la base de données
define('DB_USER',     'root');            // Utilisateur MySQL
define('DB_PASS',     '');                // Mot de passe MySQL
define('DB_CHARSET',  'utf8mb4');

// Clé secrète pour l'authentification admin (JWT simplifié)
define('SECRET_KEY',  'famille_secret_2025_change_moi');

// Durée de session admin en secondes (8 heures)
define('SESSION_DUREE', 28800);

// ── Connexion PDO ──────────────────────────────────────────
function getDB(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
        } catch (PDOException $e) {
            repondreErreur('Connexion base de données impossible : ' . $e->getMessage(), 500);
        }
    }
    return $pdo;
}

// ── Headers CORS + JSON ────────────────────────────────────
function initHeaders(): void {
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
}

// ── Réponses JSON standardisées ────────────────────────────
function repondreOK(mixed $data, int $code = 200): void {
    http_response_code($code);
    echo json_encode(['succes' => true, 'data' => $data], JSON_UNESCAPED_UNICODE);
    exit;
}

function repondreErreur(string $message, int $code = 400): void {
    http_response_code($code);
    echo json_encode(['succes' => false, 'erreur' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// ── Lire le corps JSON de la requête ──────────────────────
function lireJSON(): array {
    $corps = file_get_contents('php://input');
    $data  = json_decode($corps, true);
    return is_array($data) ? $data : [];
}

// ── Générer un ID unique ───────────────────────────────────
function generId(): string {
    return substr(base_convert(uniqid('', true), 16, 36), 0, 15);
}

// ── Token admin (session simple par cookie sécurisé) ──────
function genererToken(int $adminId): string {
    $payload = $adminId . '|' . time() . '|' . SESSION_DUREE;
    return base64_encode($payload . '|' . hash_hmac('sha256', $payload, SECRET_KEY));
}

function verifierToken(?string $token): ?int {
    if (!$token) return null;
    $parts = explode('|', base64_decode($token));
    if (count($parts) !== 4) return null;
    [$adminId, $timestamp, $duree, $sig] = $parts;
    $payload = "$adminId|$timestamp|$duree";
    if (!hash_equals(hash_hmac('sha256', $payload, SECRET_KEY), $sig)) return null;
    if ((time() - (int)$timestamp) > (int)$duree) return null;
    return (int)$adminId;
}

function tokenDepuisHeaders(): ?string {
    $headers = getallheaders();
    $auth    = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    if (str_starts_with($auth, 'Bearer ')) return substr($auth, 7);
    return null;
}

function exigerAdmin(): int {
    $token   = tokenDepuisHeaders();
    $adminId = verifierToken($token);
    if (!$adminId) repondreErreur('Accès non autorisé.', 401);
    return $adminId;
}
