/* ============================================================
   Riderjet Logistics – main.js
   Scroll Reveal + minor UI interactions
============================================================ */

'use strict';

/* ============================================================
   1. SCROLL REVEAL
   Uses IntersectionObserver to animate elements with class
   .reveal into view as they enter the viewport.
============================================================ */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once only
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ============================================================
   2. STICKY HEADER – add shadow class on scroll
============================================================ */
(function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ============================================================
   3. SMOOTH ANCHOR SCROLL (fallback for older browsers)
============================================================ */
(function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
