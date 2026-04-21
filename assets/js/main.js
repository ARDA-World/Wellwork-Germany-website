/* Wellwork Germany — Light progressive-enhancement JS
   - Mobile nav toggle
   - Job filter (client-side) + expand details
*/

(function () {
  // Mobile nav
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('.nav__links a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Job filters
  const filters = document.querySelectorAll('.job-filter');
  const jobs = document.querySelectorAll('.job');
  filters.forEach(f => {
    f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      const tag = f.dataset.filter;
      jobs.forEach(j => {
        const match = tag === 'all' || (j.dataset.tags || '').split(',').includes(tag);
        j.style.display = match ? '' : 'none';
      });
    });
  });

  // Expand job detail
  jobs.forEach(j => {
    const header = j.querySelector('.job__main');
    if (header) header.addEventListener('click', () => j.classList.toggle('open'));
  });

  // Smooth in-view fade
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
  }
})();
