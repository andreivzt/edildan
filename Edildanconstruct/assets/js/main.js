/**
 * Edildanconstruct SRL - Script principal
 * Funcționalități:
 * 1. Meniu mobil accesibil
 * 2. Carusel proiecte pe pagina principală
 * 3. Filtrare categorii & Lightbox pe pagina Proiecte
 * 4. Anul curent în footer
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initProjectCarousel();
  initProjectFilters();
  initLightbox();
  initCurrentYear();
});

/* 1. Meniu mobil */
function initMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Închide meniul' : 'Deschide meniul');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

/* 2. Carusel proiecte (pagina principală) */
function initProjectCarousel() {
  const carousel = document.querySelector('[data-projects-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('[data-carousel-track]');
  const cards = Array.from(track.querySelectorAll('.project-card'));
  const prevBtn = document.querySelector('[data-carousel-prev]');
  const nextBtn = document.querySelector('[data-carousel-next]');

  if (cards.length <= 1) return;

  let startIndex = 0;

  const getVisibleCount = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const render = () => {
    const visibleCount = getVisibleCount();
    const maxStart = Math.max(0, cards.length - visibleCount);
    if (startIndex > maxStart) startIndex = maxStart;

    cards.forEach((card, index) => {
      const visible = index >= startIndex && index < startIndex + visibleCount;
      card.style.display = visible ? 'flex' : 'none';
    });

    if (prevBtn) prevBtn.disabled = startIndex === 0;
    if (nextBtn) nextBtn.disabled = startIndex >= maxStart;
  };

  prevBtn?.addEventListener('click', () => {
    startIndex = Math.max(0, startIndex - 1);
    render();
  });

  nextBtn?.addEventListener('click', () => {
    const visibleCount = getVisibleCount();
    const maxStart = Math.max(0, cards.length - visibleCount);
    startIndex = Math.min(maxStart, startIndex + 1);
    render();
  });

  window.addEventListener('resize', render);
  render();
}

/* 3. Filtrare proiecte (pagina Proiecte) */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-project-category]');
  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      projectCards.forEach((card) => {
        const cardCat = card.getAttribute('data-project-category');
        const matches = category === 'toate' || cardCat === category;
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });
}

/* 4. Lightbox galerie proiecte */
function initLightbox() {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;

  const imgEl = lightbox.querySelector('[data-lightbox-img]');
  const titleEl = lightbox.querySelector('[data-lightbox-title]');
  const descEl = lightbox.querySelector('[data-lightbox-desc]');
  const closeBtn = lightbox.querySelector('[data-lightbox-close]');
  const triggers = document.querySelectorAll('[data-lightbox-trigger]');

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      const img = card?.querySelector('img');
      const title = card?.querySelector('h3')?.textContent || '';
      const desc = card?.querySelector('p')?.textContent || '';

      if (img && imgEl) {
        imgEl.src = img.src;
        imgEl.alt = img.alt;
      }
      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;

      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
    });
  });

  closeBtn?.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

/* 5. Anul curent în footer */
function initCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}
