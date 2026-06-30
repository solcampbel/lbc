/**
 * ============================================================
 *  REGISTRE FAMILIAL — Client API
 *  Fichier : registre.js
 *  Rôle    : Connecte les pages HTML à l'API PHP/MySQL
 *  Modifier API_BASE si votre dossier api/ est ailleurs
 * ============================================================
 */

const Registre = (() => {

  // ── ⚙️  URL de base de l'API (à adapter selon hébergeur) ──
  const API_BASE    = './api';
  const API_MEMBRES = API_BASE + '/api_membres.php';
  const API_ADMIN   = API_BASE + '/api_admin.php';

  // ── Clé de stockage du token admin ──────────────────────
  const TOKEN_KEY = 'famille_admin_token';

  // ── Helpers HTTP ─────────────────────────────────────────
  async function _get(url) {
    const headers = { 'Content-Type': 'application/json' };
    const token   = localStorage.getItem(TOKEN_KEY);
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res  = await fetch(url, { headers });
    const json = await res.json();
    if (!json.succes) throw new Error(json.erreur || 'Erreur serveur');
    return json.data;
  }

  async function _post(url, body) {
    const headers = { 'Content-Type': 'application/json' };
    const token   = localStorage.getItem(TOKEN_KEY);
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res  = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
    const json = await res.json();
    if (!json.succes) throw new Error(json.erreur || 'Erreur serveur');
    return json.data;
  }

  async function _put(url, body) {
    const headers = { 'Content-Type': 'application/json' };
    const token   = localStorage.getItem(TOKEN_KEY);
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res  = await fetch(url, { method: 'PUT', headers, body: JSON.stringify(body) });
    const json = await res.json();
    if (!json.succes) throw new Error(json.erreur || 'Erreur serveur');
    return json.data;
  }

  async function _delete(url) {
    const headers = { 'Content-Type': 'application/json' };
    const token   = localStorage.getItem(TOKEN_KEY);
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const res  = await fetch(url, { method: 'DELETE', headers });
    const json = await res.json();
    if (!json.succes) throw new Error(json.erreur || 'Erreur serveur');
    return json.data;
  }

  // ── MEMBRES ───────────────────────────────────────────────

  async function lireTous() {
    return await _get(API_MEMBRES);
  }

  async function lireParId(id) {
    return await _get(API_MEMBRES + '?id=' + encodeURIComponent(id));
  }

  async function rechercher(terme, tri = 'date_desc') {
    const params = new URLSearchParams();
    if (terme) params.set('q', terme);
    params.set('tri', tri);
    return await _get(API_MEMBRES + '?' + params.toString());
  }

  async function compter() {
    const liste = await lireTous();
    return liste.length;
  }

  async function ajouter(membre) {
    try {
      const data = await _post(API_MEMBRES, membre);
      return { succes: true, membre: data };
    } catch (e) {
      return { succes: false, erreur: e.message };
    }
  }

  async function modifier(id, miseAJour) {
    try {
      const data = await _put(API_MEMBRES, { id, ...miseAJour });
      return { succes: true, membre: data };
    } catch (e) {
      return { succes: false, erreur: e.message };
    }
  }

  async function supprimer(id) {
    try {
      await _delete(API_MEMBRES + '?id=' + encodeURIComponent(id));
      return { succes: true };
    } catch (e) {
      return { succes: false, erreur: e.message };
    }
  }

  async function statistiques() {
    return await _get(API_MEMBRES + '?stats=1');
  }

  // ── ADMIN ─────────────────────────────────────────────────

  async function login(identifiant, motDePasse) {
    try {
      const data = await _post(API_ADMIN + '?action=login', { identifiant, motDePasse });
      localStorage.setItem(TOKEN_KEY, data.token);
      return { succes: true, admin: data.admin };
    } catch (e) {
      return { succes: false, erreur: e.message };
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  async function verifierAdmin() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return false;
    try {
      await _get(API_ADMIN + '?action=verifier');
      return true;
    } catch {
      localStorage.removeItem(TOKEN_KEY);
      return false;
    }
  }

  async function vider() {
    try {
      const data = await _post(API_ADMIN + '?action=vider', {});
      return { succes: true, ...data };
    } catch (e) {
      return { succes: false, erreur: e.message };
    }
  }

  async function exporter() {
    const token = localStorage.getItem(TOKEN_KEY);
    const url   = API_ADMIN + '?action=exporter';
    const a     = document.createElement('a');
    // Appel direct pour déclencher le téléchargement
    const res   = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const blob  = await res.blob();
    a.href      = URL.createObjectURL(blob);
    a.download  = 'registre_famille_' + Date.now() + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function importer(fichier, callback) {
    const reader = new FileReader();
    reader.onload = async e => {
      try {
        const data = JSON.parse(e.target.result);
        const res  = await _post(API_ADMIN + '?action=importer', data);
        if (typeof callback === 'function') callback({ succes: true, nb: res.importe });
      } catch (err) {
        if (typeof callback === 'function') callback({ succes: false, erreur: err.message });
      }
    };
    reader.readAsText(fichier);
  }

  async function changerMotDePasse(ancien, nouveau) {
    try {
      const data = await _post(API_ADMIN + '?action=changer_mdp', { ancien, nouveau });
      return { succes: true, message: data.message };
    } catch (e) {
      return { succes: false, erreur: e.message };
    }
  }

  async function getLogs() {
    return await _get(API_ADMIN + '?action=logs');
  }

  // ── API publique ──────────────────────────────────────────
  return {
    lireTous,
    lireParId,
    rechercher,
    compter,
    ajouter,
    modifier,
    supprimer,
    statistiques,
    login,
    logout,
    verifierAdmin,
    vider,
    exporter,
    importer,
    changerMotDePasse,
    getLogs,
  };

})();

window.Registre = Registre;
