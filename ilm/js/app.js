/* ============================================================
   ILM — App Controller
   Handles splash → app transition, page routing, nav state
   ============================================================ */

const ILM = (() => {

  /* ── State ── */
  let currentPage = 'dashboard';

  /* ── DOM refs ── */
  const splash      = document.getElementById('splash');
  const app         = document.getElementById('app');
  const pageContent = document.getElementById('page-content');

  /* ── Splash → App transition ── */
  function showApp() {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      app.removeAttribute('aria-hidden');
      app.classList.add('visible');
      render('dashboard');
    }, 900);
  }

  /* ── Navigate to a page ── */
  function navigate(page) {
    if (!ILM_PAGES[page]) return;
    currentPage = page;
    render(page);
    syncNav(page);
  }

  /* ── Render page content ── */
  function render(page) {
    const html = ILM_PAGES[page] ? ILM_PAGES[page]() : '<p>Page not found.</p>';
    pageContent.innerHTML = html;

    // Run any inline <script> tags injected by page templates
    pageContent.querySelectorAll('script').forEach(oldScript => {
      const newScript = document.createElement('script');
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

  /* ── Sync active state on nav tabs + sidebar ── */
  function syncNav(page) {
    document.querySelectorAll('.nav-tab, .sidebar-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
  }

  /* ── Bind all nav buttons (tabs + sidebar) ── */
  function bindNav() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-page]');
      if (!btn) return;

      // Skip if inside splash
      if (splash.contains(btn)) return;

      navigate(btn.dataset.page);
    });
  }

  /* ── Init ── */
  function init() {
    bindNav();

    // Auto-advance splash after animation completes (~5.2s)
    setTimeout(showApp, 5200);
  }

  init();

  // Expose public API
  return { showApp, navigate };

})();
