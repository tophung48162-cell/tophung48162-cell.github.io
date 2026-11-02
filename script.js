(() => {
  'use strict';
  document.documentElement.classList.add('has-js');
  document.querySelector('#year').textContent = new Date().getFullYear();

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  menu.hidden = false;
  const setMenu = (open, restoreFocus = false) => {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    nav.classList.toggle('is-open', open);
    if (restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header') && menu.getAttribute('aria-expanded') === 'true') setMenu(false);
  });
  matchMedia('(min-width: 701px)').addEventListener('change', () => setMenu(false));
  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  function markCurrent(hash) {
    navLinks.forEach(link => {
      if (link.hash === hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link && navLinks.some(item => item.hash === link.hash)) markCurrent(link.hash);
  });
  window.addEventListener('hashchange', () => markCurrent(location.hash || '#home'));
  markCurrent(location.hash || '#home');

  const search = document.querySelector('#article-search');
  const articles = [...document.querySelectorAll('.article-row')];
  const filters = [...document.querySelectorAll('button[data-category]')];
  const status = document.querySelector('#search-status');
  const emptyState = document.querySelector('#empty-state');
  let category = 'all';
  document.querySelector('.writing-tools').hidden = false;
  function filterArticles() {
    const query = search.value.trim().normalize('NFKC').toLocaleLowerCase();
    let visible = 0;
    for (const article of articles) {
      const text = `${article.textContent} ${article.dataset.keywords}`.normalize('NFKC').toLocaleLowerCase();
      const match = (category === 'all' || article.dataset.category === category) && (!query || text.includes(query));
      article.hidden = !match;
      if (match) visible++;
    }
    emptyState.hidden = visible !== 0;
    status.textContent = `找到 ${visible} 篇文章`;
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
  }
  search.addEventListener('input', filterArticles);
  filters.forEach(button => button.addEventListener('click', () => { category = button.dataset.category; filterArticles(); }));
  document.querySelector('.reset-search').addEventListener('click', () => { category = 'all'; search.value = ''; filterArticles(); search.focus(); });

  const copy = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  if (navigator.clipboard && window.isSecureContext) {
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText('tophung48162@gmail.com'); copyStatus.textContent = '邮箱已复制'; }
      catch { copyStatus.textContent = '复制未成功，可选中邮箱地址手动复制。'; }
    });
  }
})();
