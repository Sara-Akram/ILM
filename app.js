/* ============================================================
   ILM — App Controller
   ============================================================ */

const ILM = (() => {

  let currentRole = 'teacher';

  const splash       = document.getElementById('splash');
  const app          = document.getElementById('app');
  const pageContent  = document.getElementById('page-content');
  const signinPanel  = document.getElementById('signin-panel');

  /* ── Role toggle on sign in screen ── */
  window.selectRole = (role, el) => {
    currentRole = role;
    document.querySelectorAll('.role-option').forEach(r => r.classList.remove('selected'));
    el.classList.add('selected');
  };

  /* ── Sign in → enter app ── */
  function doSignIn() {
    const role = currentRole;

    // Update nav badge
    const badge = document.getElementById('nav-role-badge');
    const labels = { teacher: 'Teacher', student: 'Student', admin: 'Admin' };
    if (badge) badge.textContent = labels[role];

    // Update nav tabs per role
    const navTabs = document.getElementById('nav-tabs');
    if (navTabs) {
      if (role === 'student') {
        navTabs.innerHTML = `
          <button class="nav-tab active" data-page="student">Dashboard</button>
          <button class="nav-tab" data-page="sessions">Sessions</button>
          <button class="nav-tab" data-page="classroom">Classroom</button>
          <button class="nav-tab" data-page="messages">Messages</button>`;
      } else if (role === 'admin') {
        navTabs.innerHTML = `
          <button class="nav-tab active" data-page="admin">Dashboard</button>
          <button class="nav-tab" data-page="students">Users</button>
          <button class="nav-tab" data-page="sessions">Sessions</button>
          <button class="nav-tab" data-page="settings">Settings</button>`;
      } else {
        navTabs.innerHTML = `
          <button class="nav-tab active" data-page="dashboard">Dashboard</button>
          <button class="nav-tab" data-page="sessions">Sessions</button>
          <button class="nav-tab" data-page="students">Students</button>
          <button class="nav-tab" data-page="earnings">Earnings</button>`;
      }
    }

    // Transition out splash
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      app.removeAttribute('aria-hidden');
      app.classList.add('visible');

      const home = role === 'student' ? 'student' : role === 'admin' ? 'admin' : 'dashboard';
      render(home);
      syncNav(home);
    }, 900);
  }

  /* ── Show sign in after video ── */
  function showSignIn() {
    if (signinPanel) signinPanel.classList.add('visible');
    const vid = document.getElementById('splash-video');
    if (vid) vid.pause();
  }

  /* ── Navigate ── */
  function navigate(page) {
    if (!ILM_PAGES[page]) {
      console.warn('Page not found:', page);
      return;
    }
    render(page);
    syncNav(page);
    if (pageContent) pageContent.scrollTop = 0;
  }

  /* ── Render ── */
  function render(page) {
    if (!ILM_PAGES[page]) return;
    pageContent.innerHTML = ILM_PAGES[page]();
    // Execute any inline scripts
    pageContent.querySelectorAll('script').forEach(old => {
      const s = document.createElement('script');
      s.textContent = old.textContent;
      old.parentNode.replaceChild(s, old);
    });
  }

  /* ── Sync active state ── */
  function syncNav(page) {
    document.querySelectorAll('.nav-tab, .sidebar-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
  }

  /* ── Global click handler for nav ── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-page]');
    if (!btn) return;
    if (splash && !splash.classList.contains('fade-out') && splash.style.display !== 'none') return;
    navigate(btn.dataset.page);
  });

  /* ── Init ── */
  const vid = document.getElementById('splash-video');
  if (vid) {
    vid.addEventListener('ended', showSignIn);
    // Fallback: show sign in after 7s even if video doesn't end
    setTimeout(showSignIn, 7000);
    // If video fails to load, show sign in immediately
    vid.addEventListener('error', showSignIn);
  } else {
    showSignIn();
  }

  return { doSignIn, navigate, selectRole: window.selectRole };

})();
