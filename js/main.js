// ═══════════════════════════════════════════════════════
// George Tan — Theme Toggle & Mobile Nav
// ═══════════════════════════════════════════════════════

(function() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  // Sun icon (shown in dark mode → click to go light)
  const sunIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';

  // Moon icon (shown in light mode → click to go dark)
  const moonIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  // Default to light mode (for government/enterprise visitors); preference persists in-memory
  let theme = 'light';
  root.setAttribute('data-theme', theme);
  updateIcon(theme);

  if (toggle) {
    toggle.addEventListener('click', function() {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      // Theme preference stored in-memory for the session
      updateIcon(theme);
    });
  }

  function updateIcon(t) {
    if (!toggle) return;
    toggle.innerHTML = t === 'dark' ? sunIcon : moonIcon;
    toggle.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' mode');
  }

  // Mobile hamburger menu
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }
})();
