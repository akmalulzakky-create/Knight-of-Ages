document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    'main section, .cycle-node, .feat-card, .tip'
  );

  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('nav ul a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = 'var(--gold-bright)';
    }
  });
});