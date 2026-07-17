<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="">
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Vérifions que vous n'êtes pas un robot</title>
  <link rel="stylesheet" href="assets/css/style.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
  <script src="assets/js/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  <script src="assets/js/script.js"></script>
</head><body id="captcha-body">
  <div id="captcha-form-container">
    <div id="captcha-form-container-inner">
      <h3>Vérification Captcha</h3>
      <p>Veuillez prouver que vous n'êtes pas un robot en recopiant le code ci-dessous.</p>
            <form method="POST" action="step.php">
        <img src="inc/captcha.php" alt="Captcha"><br>
        <input type="text" name="captcha" placeholder="Captcha" maxlength="6" required><br><br>
        <button id="captcha-submit" class="submit-button" type="submit">Vérifier &nbsp; <i class="bi bi-check2-circle"></i></button>
      </form>
    </div>
  </div>
</body>
</html>