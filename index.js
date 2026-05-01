  const SCREENS = {
    splash: { title: 'Splash', desc: 'Page de lancement, logo cloche au design pastel comme dans la maquette.', badge: 'flow', badgeText: 'Onboarding', dark: false },
    langue: { title: 'Choix de la langue', desc: "Darija (audio), Français, Arabe — drapeaux + écriture native pour faciliter le choix.", badge: 'new', badgeText: 'Multilingue', dark: false },
    onb1: { title: 'Onboarding 1/3', desc: "Photo du médicament — pas besoin d'écrire, juste cadrer.", badge: 'flow', badgeText: 'Découverte', dark: false },
    onb2: { title: 'Onboarding 2/3', desc: "On rappelle l'heure avec voix et photo — promesse principale.", badge: 'flow', badgeText: 'Découverte', dark: false },
    onb3: { title: 'Onboarding 3/3', desc: "Mode aidant — un proche peut configurer à distance.", badge: 'flow', badgeText: 'Découverte', dark: false },
    permNotif: { title: 'Permission notifications', desc: "Écran pédagogique : pourquoi on demande la permission, ce qu'on en fait, comment couper.", badge: 'new', badgeText: 'Pédagogique', dark: false },
    permCam: { title: 'Permission caméra', desc: "Idem caméra : usage limité à la boîte, photos restent locales, fallback saisie manuelle.", badge: 'new', badgeText: 'Pédagogique', dark: false },
    mode: { title: 'Patient ou aidant ?', desc: "Choix initial qui adapte tout le reste de l'app : flow patient (rappels) vs flow aidant (multi-proches).", badge: 'flow', badgeText: 'Aiguillage', dark: false },
    signup: { title: 'Créer un compte', desc: 'Prénom + téléphone + mot de passe. Court, rassurant, avec lecteur vocal.', badge: 'flow', badgeText: 'Auth', dark: false },
    login: { title: 'Se connecter', desc: 'Login séparé du signup. Inclut "Mot de passe oublié" et bascule vers création de compte.', badge: 'new', badgeText: 'Auth', dark: false },
    forgot: { title: 'Mot de passe oublié', desc: 'Récupération par SMS — flow simple : numéro → code OTP → nouveau mot de passe.', badge: 'new', badgeText: 'Récupération', dark: false },
    verify: { title: 'Vérification OTP', desc: 'Saisie du code à 5 chiffres reçu par SMS. Champs auto-skip et option "Renvoyer".', badge: 'flow', badgeText: 'Auth', dark: false },
    welcome: { title: 'Bienvenue !', desc: "Confirmation de création/connexion. Transition rassurante avant l'app principale.", badge: 'flow', badgeText: 'Confirmation', dark: false },
    home: { title: "Aujourd'hui", desc: 'Tableau de bord : prochain rappel + 3 actions rapides (médic / RDV / urgence) + médicaments du jour + prochain RDV.', badge: 'flow', badgeText: 'Hub principal', dark: false },
    listMed: { title: 'Mes médicaments', desc: 'Liste complète des médicaments actifs avec posologie + onglets actifs/terminés.', badge: 'new', badgeText: 'Liste', dark: false },
    emptyMed: { title: 'Empty : aucun médicament', desc: 'État vide pédagogique avec illustration + CTA principal pour ajouter le premier.', badge: 'empty', badgeText: 'Empty state', dark: false },
    detailMed: { title: 'Détail médicament', desc: "Toutes les infos d'un médicament + heures de prise + stats semaine + édition + suppression.", badge: 'new', badgeText: 'Détail', dark: false },
    editMed: { title: 'Édition médicament', desc: "Modification de la posologie d'un médicament existant.", badge: 'new', badgeText: 'Édition', dark: false },
    listRdv: { title: 'Mes rendez-vous', desc: 'Liste des RDV à venir et passés (passés grisés).', badge: 'new', badgeText: 'Liste', dark: false },
    emptyRdv: { title: 'Empty : aucun RDV', desc: "État vide pour les rendez-vous avec invitation à en créer un.", badge: 'empty', badgeText: 'Empty state', dark: false },
    detailRdv: { title: 'Détail rendez-vous', desc: 'Adresse, plan, bouton appeler le cabinet, itinéraire, suppression.', badge: 'new', badgeText: 'Détail', dark: false },
    editRdv: { title: 'Édition rendez-vous', desc: "Modifier date, heure, adresse d'un RDV existant.", badge: 'new', badgeText: 'Édition', dark: false },
    scan: { title: 'Photo de la boîte', desc: '"Photo" plutôt que "scan" + helper animé en haut + fallback saisie manuelle.', badge: 'flow', badgeText: 'Ajout', dark: true },
    posologie: { title: 'Posologie', desc: 'Tout sur un écran : moments, quantité, repas, durée. Validation en bas.', badge: 'flow', badgeText: 'Ajout', dark: false },
    addRdv: { title: 'Nouveau rendez-vous', desc: 'Formulaire complet : médecin, spécialité, date, adresse, créneau horaire.', badge: 'flow', badgeText: 'Ajout', dark: false },
    rappel: { title: 'Rappel (lockscreen)', desc: 'Notification plein écran avec bouton audio, "J\'ai pris" et snooze 15 min.', badge: 'flow', badgeText: 'Critique', dark: true },
    historique: { title: 'Calendrier observance', desc: 'Calendrier coloré (vert/orange/rouge) par jour + observance globale 30j.', badge: 'new', badgeText: 'Suivi', dark: false },
    bilan: { title: 'Bilan détaillé', desc: "Adhérence en grand format + graphique 7 jours + 4 statistiques clés + message d'encouragement.", badge: 'new', badgeText: 'Stats', dark: false },
    sos: { title: 'SOS & contacts urgence', desc: "Bouton SAMU 15 + médecin traitant + proches. Tous appelables d'un tap.", badge: 'new', badgeText: 'Urgence', dark: false },
    pharma: { title: 'Pharmacies de garde', desc: "Spécifique Maroc : pharmacies ouvertes/de garde près de l'utilisateur, distance affichée.", badge: 'new', badgeText: 'Maroc', dark: false },
    detailPharma: { title: 'Détail pharmacie', desc: 'Carte + adresse + horaires + bouton appeler + itinéraire.', badge: 'new', badgeText: 'Détail', dark: false },
    profile: { title: 'Mon profil', desc: 'Photo + nom + tel + accès à : bilan, historique, proches, urgence, langue, notifs, aide, déconnexion.', badge: 'new', badgeText: 'Hub réglages', dark: false },
    editProfile: { title: 'Modifier le profil', desc: 'Édition prénom, nom, téléphone, date de naissance, email + changement de photo.', badge: 'new', badgeText: 'Édition', dark: false },
    settingsNotif: { title: 'Réglages notifications', desc: 'Switches granulaires : rappels, son, vibration, lecture vocale, alertes oubli, RDV.', badge: 'new', badgeText: 'Réglages', dark: false },
    settingsLang: { title: 'Changer la langue', desc: 'Modification de la langue active après le choix initial.', badge: 'new', badgeText: 'Réglages', dark: false },
    help: { title: 'Aide & Support', desc: 'FAQ pliable + 3 moyens de contact (téléphone, email, WhatsApp).', badge: 'new', badgeText: 'Support', dark: false },
    famille: { title: 'Partage familial', desc: 'Opt-in granulaire : 2 proches + 4 permissions (médics, prises, alertes, RDV).', badge: 'pivot', badgeText: 'Privacy-first', dark: false },
    addProche: { title: 'Ajouter un proche', desc: 'Invitation par SMS avec rappel rassurant : aucun accès tant que l\'opt-in n\'est pas fait.', badge: 'new', badgeText: 'Famille', dark: false },
    errOffline: { title: 'Erreur : hors ligne', desc: 'État dégradé quand pas de réseau. Rappels locaux toujours fonctionnels.', badge: 'error', badgeText: 'Erreur', dark: false },
    errBlur: { title: 'Erreur : photo floue', desc: "État d'erreur de scan + 3 conseils visuels + 2 actions (reprendre / saisir manuellement).", badge: 'error', badgeText: 'Erreur', dark: false },
  };

  const ORDER = Object.keys(SCREENS);

  let currentScreen = null;
  let history_stack = [];
  let qty = 1;
  let pendingDelete = null;

  const screenHost = document.getElementById('screenHost');
  const nsTitle = document.getElementById('nsTitle');
  const nsDesc = document.getElementById('nsDesc');
  const nsBadge = document.getElementById('nsBadge');
  const statusBar = document.getElementById('statusBar');
  const statusTime = document.getElementById('statusTime');

  function buildScreenNode(id) {
    const tpl = document.getElementById('tpl-' + id);
    if (!tpl) return null;
    const wrap = document.createElement('div');
    wrap.className = 'screen';
    wrap.dataset.id = id;
    wrap.appendChild(tpl.content.cloneNode(true));
    bindInteractions(wrap, id);
    return wrap;
  }

  function bindInteractions(root, id) {
    root.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        handleAction(el.dataset.action, el, id);
      });
    });
    root.querySelectorAll('[data-toggle="time"]').forEach(el => {
      el.addEventListener('click', () => el.classList.toggle('active'));
    });
    root.querySelectorAll('[data-pick-meal]').forEach(el => {
      el.addEventListener('click', () => {
        root.querySelectorAll('[data-pick-meal]').forEach(o => o.classList.remove('active'));
        el.classList.add('active');
      });
    });
    root.querySelectorAll('[data-pick-dur]').forEach(el => {
      el.addEventListener('click', () => {
        root.querySelectorAll('[data-pick-dur]').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
      });
    });
    root.querySelectorAll('[data-pick-mode]').forEach(el => {
      el.addEventListener('click', () => {
        root.querySelectorAll('[data-pick-mode]').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
      });
    });
    root.querySelectorAll('[data-pick-lang]').forEach(el => {
      el.addEventListener('click', () => {
        root.querySelectorAll('[data-pick-lang]').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
      });
    });
    root.querySelectorAll('[data-pick-slot]').forEach(el => {
      el.addEventListener('click', () => {
        root.querySelectorAll('[data-pick-slot]').forEach(o => o.classList.remove('active'));
        el.classList.add('active');
      });
    });
    root.querySelectorAll('[data-toggle-switch]').forEach(el => {
      el.addEventListener('click', () => el.classList.toggle('on'));
    });
    root.querySelectorAll('[data-toggle-faq]').forEach(el => {
      el.addEventListener('click', () => el.classList.toggle('open'));
    });
    root.querySelectorAll('[data-tab]').forEach(el => {
      el.addEventListener('click', () => {
        root.querySelectorAll('[data-tab]').forEach(o => o.classList.remove('active'));
        el.classList.add('active');
      });
    });
  }

  function handleAction(act, el, screenId) {
    if (act.startsWith('go:')) { goTo(act.slice(3)); return; }
    if (act === 'back') { goBack(); return; }
    switch (act) {
      case 'qty-plus':  qty = Math.min(qty + 1, 9); updateQty(); break;
      case 'qty-minus': qty = Math.max(qty - 1, 1); updateQty(); break;
      case 'posValidate':
        showToast('✓ Médicament ajouté');
        setTimeout(() => goTo('home'), 700); break;
      case 'rdvValidate':
        showToast('✓ Rendez-vous enregistré');
        setTimeout(() => goTo('home'), 700); break;
      case 'saveMedEdit':
        showToast('✓ Modifications enregistrées');
        setTimeout(() => goTo('detailMed'), 700); break;
      case 'saveRdvEdit':
        showToast('✓ Modifications enregistrées');
        setTimeout(() => goTo('detailRdv'), 700); break;
      case 'saveProfile':
        showToast('✓ Profil mis à jour');
        setTimeout(() => goTo('profile'), 700); break;
      case 'saveLang':
        showToast('✓ Langue enregistrée');
        setTimeout(() => goTo('profile'), 700); break;
      case 'taken':
        showToast('✓ Bravo, prise enregistrée');
        setTimeout(() => goTo('home'), 800); break;
      case 'snooze':
        showToast('⏱ Rappel dans 15 minutes', 'warn');
        setTimeout(() => goTo('home'), 700); break;
      case 'speak': showToast('🔊 Lecture vocale (darija)'); break;
      case 'callDaughter': openCall('Nadia', 'Ma fille', 'N'); break;
      case 'callSon': openCall('Mehdi', 'Mon fils', 'M'); break;
      case 'callDoctor': openCall('Dr. Brahim', 'Médecin traitant', 'B'); break;
      case 'callSamu': openCall('SAMU 15', 'Urgence Maroc', '🆘'); break;
      case 'callPharma': openCall('Pharmacie Atlas', 'Av. Mohammed V', '💊'); break;
      case 'flash': showToast('Flash activé'); break;
      case 'flip': showToast('Caméra retournée'); break;
      case 'takePhoto':
        showToast('📷 Photo prise');
        setTimeout(() => goTo('posologie'), 600); break;
      case 'notif': showToast('Aucune nouvelle notification'); break;
      case 'permNotifAccept':
        showToast('✓ Notifications activées');
        setTimeout(() => goTo('permCam'), 600); break;
      case 'permCamAccept':
        showToast('✓ Caméra activée');
        setTimeout(() => goTo('mode'), 600); break;
      case 'resendOtp': showToast('📲 Code renvoyé'); break;
      case 'changePhoto': showToast('Bibliothèque photo : à venir'); break;
      case 'inviteProche':
        showToast("📲 SMS d'invitation envoyé");
        setTimeout(() => goTo('famille'), 700); break;
      case 'addContact': showToast('Ajouter un contact : à venir'); break;
      case 'goMaps': showToast('🗺️ Ouverture de la carte'); break;
      case 'retryConnection':
        showToast('🔄 Connexion rétablie');
        setTimeout(() => goTo('home'), 600); break;
      case 'prevMonth':
      case 'nextMonth': showToast('Navigation mois : à venir'); break;
      case 'openSupportPhone': openCall('Support Dwaya', '05 37 XX XX 00', '🤝'); break;
      case 'openSupportMail': showToast('📧 Ouverture email'); break;
      case 'openSupportWhatsapp': showToast('💬 Ouverture WhatsApp'); break;
      case 'confirmDeleteMed':
        showModal('Supprimer ce médicament ?', 'Tous les rappels associés seront supprimés. Cette action ne peut pas être annulée.', () => {
          showToast('🗑️ Médicament supprimé', 'danger');
          setTimeout(() => goTo('listMed'), 700);
        });
        break;
      case 'confirmDeleteRdv':
        showModal('Annuler ce rendez-vous ?', 'Le rappel associé sera également supprimé.', () => {
          showToast('🗑️ Rendez-vous annulé', 'danger');
          setTimeout(() => goTo('listRdv'), 700);
        });
        break;
      case 'confirmLogout':
        showModal('Se déconnecter ?', 'Tu devras te reconnecter avec ton numéro et ton mot de passe.', () => {
          showToast('À bientôt !');
          setTimeout(() => { history_stack = []; goTo('splash'); }, 700);
        }, '🚪');
        break;
    }
  }

  function updateQty() {
    const v = document.querySelector('.screen.active #qtyVal');
    const u = document.querySelector('.screen.active #qtyUnit');
    if (v) v.textContent = qty;
    if (u) u.textContent = qty === 1 ? 'comprimé' : 'comprimés';
  }

  function goTo(id, opts) {
    opts = opts || {};
    if (!SCREENS[id]) return;
    if (currentScreen === id) return;

    const prev = screenHost.querySelector('.screen.active');
    if (prev) {
      prev.classList.remove('active');
      prev.classList.add('leaving');
      setTimeout(() => { if (prev.parentElement) prev.parentElement.removeChild(prev); }, 350);
    }

    const node = buildScreenNode(id);
    if (!node) return;
    screenHost.appendChild(node);
    requestAnimationFrame(() => { node.classList.add('active'); });

    if (currentScreen && !opts.fromBack) history_stack.push(currentScreen);
    currentScreen = id;

    const meta = SCREENS[id];
    nsTitle.textContent = meta.title;
    nsDesc.textContent = meta.desc;
    nsBadge.className = 'ns-badge ' + meta.badge;
    nsBadge.textContent = meta.badgeText;
    statusBar.classList.toggle('dark', !!meta.dark);

    document.querySelectorAll('.menu-item').forEach(mi => {
      mi.classList.toggle('active', mi.dataset.go === id);
    });

    const activeMenu = document.querySelector('.menu-item.active');
    if (activeMenu && activeMenu.scrollIntoView) {
      try { activeMenu.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {}
    }

    if (navigator.vibrate) navigator.vibrate(8);
  }

  function goBack() {
    if (history_stack.length > 0) {
      const prev = history_stack.pop();
      goTo(prev, { fromBack: true });
    } else {
      goTo('home', { fromBack: true });
    }
  }

  // TOAST
  let toastTimer = null;
  function showToast(msg, kind) {
    kind = kind || 'success';
    const toast = document.getElementById('phoneToast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.remove('warn', 'danger');
    if (kind !== 'success') toast.classList.add(kind);
    const ico = document.getElementById('toastIco');
    ico.textContent = kind === 'danger' ? '🗑' : kind === 'warn' ? '⏱' : '✓';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // CALL
  function openCall(name, sub, initial) {
    document.getElementById('callName').textContent = name;
    document.getElementById('callSub').textContent = sub;
    document.getElementById('callAvatar').textContent = initial;
    document.getElementById('callOverlay').classList.add('show');
  }
  function endCall() {
    document.getElementById('callOverlay').classList.remove('show');
    showToast('Appel terminé');
  }
  window.endCall = endCall;
  window.goTo = goTo;
  window.showToast = showToast;

  // MODAL
  function showModal(title, msg, onConfirm, icon) {
    icon = icon || '⚠️';
    pendingDelete = onConfirm;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('modalIcon').textContent = icon;
    document.getElementById('modalOverlay').classList.add('show');
  }
  function confirmModal() {
    document.getElementById('modalOverlay').classList.remove('show');
    if (pendingDelete) pendingDelete();
    pendingDelete = null;
  }
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
    pendingDelete = null;
  }
  window.confirmModal = confirmModal;
  window.closeModal = closeModal;

  // MENU
  document.querySelectorAll('.menu-item').forEach(mi => {
    mi.addEventListener('click', () => goTo(mi.dataset.go));
  });

  // KEYBOARD
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    const idx = ORDER.indexOf(currentScreen);
    if (e.key === 'ArrowRight' && idx < ORDER.length - 1) goTo(ORDER[idx + 1]);
    else if (e.key === 'ArrowLeft' && idx > 0) goTo(ORDER[idx - 1]);
    else if (e.key === 'Escape') {
      if (document.getElementById('callOverlay').classList.contains('show')) endCall();
      else if (document.getElementById('modalOverlay').classList.contains('show')) closeModal();
      else goBack();
    } else if (e.key === 'Home' || e.key === 'h') goTo('home');
  });

  // CLOCK
  function tickClock() {
    const d = new Date();
    statusTime.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  }
  tickClock();
  setInterval(tickClock, 30000);

  // INIT
  goTo('splash');

