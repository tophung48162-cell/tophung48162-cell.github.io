const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const gallery = document.getElementById('focus-gallery');
const previous = document.getElementById('gallery-prev');
const next = document.getElementById('gallery-next');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (gallery && previous && next) {
  const updateControls = () => {
    previous.disabled = gallery.scrollLeft <= 2;
    next.disabled = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2;
  };
  const move = direction => {
    const card = gallery.querySelector('.feature-card');
    const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
    gallery.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  gallery.addEventListener('scroll', updateControls, { passive: true });
  gallery.addEventListener('keydown', event => {
    if (event.target !== gallery) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  window.addEventListener('resize', updateControls, { passive: true });
  updateControls();
}
