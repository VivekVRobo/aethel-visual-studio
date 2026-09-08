(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-nav]').forEach(link => {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
    if (href === path || (href !== '/' && path.startsWith(href))) link.classList.add('active');
  });

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveal.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveal.forEach(el => io.observe(el));
  } else {
    reveal.forEach(el => el.classList.add('visible'));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  document.querySelectorAll('.footer-bottom').forEach(footer => {
    if (footer.querySelector('.legal-links')) return;
    const legal = document.createElement('span');
    legal.className = 'legal-links';
    legal.innerHTML = '<a href="/terms" style="color:inherit;text-decoration:none">Terms</a> · <a href="/privacy" style="color:inherit;text-decoration:none">Privacy</a>';
    footer.appendChild(legal);
  });
})();
