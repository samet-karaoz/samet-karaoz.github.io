/**
 * Samet Karaöz - Portfolyo Web Sitesi
 * Animasyonlar ve Etkileşimler (animations.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Scroll Reveal (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    if (isReducedMotion) {
      revealElements.forEach(el => el.classList.add('visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
    }
  }

  // 2. Yetenek Çubukları (Skill Bars) Animasyonu
  const skillFills = document.querySelectorAll('.skill-fill');
  if (skillFills.length > 0) {
    if (isReducedMotion) {
      skillFills.forEach(fill => {
        fill.style.width = (fill.getAttribute('data-width') || '0') + '%';
      });
    } else {
      const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const targetWidth = fill.getAttribute('data-width') || '0';
            fill.style.width = targetWidth + '%';
            observer.unobserve(fill);
          }
        });
      }, {
        threshold: 0.25
      });

      skillFills.forEach(fill => skillObserver.observe(fill));
    }
  }

  // 3. Daktilo Efekti (Typing Effect - Yalnızca Hero Alanında)
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const titles = [
      'Yazılım Geliştirici',
      'Frontend & Mobil Geliştirici',
      'React & Flutter Geliştirici'
    ];

    if (isReducedMotion) {
      typingElement.textContent = titles[0];
    } else {
      let titleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingDelay = 110;

      const typeLoop = () => {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
          typingElement.textContent = currentTitle.substring(0, charIndex - 1);
          charIndex--;
          typingDelay = 50;
        } else {
          typingElement.textContent = currentTitle.substring(0, charIndex + 1);
          charIndex++;
          typingDelay = 100;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
          typingDelay = 2200; // Kelime bittiğinde bekleme
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
          typingDelay = 400; // Yeni kelimeye geçmeden önce kısa mola
        }

        setTimeout(typeLoop, typingDelay);
      };

      // Küçük bir gecikmeyle başlat
      setTimeout(typeLoop, 400);
    }
  }
});
