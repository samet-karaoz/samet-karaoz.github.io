/**
 * Samet Karaöz - Portfolyo Web Sitesi
 * Animasyonlar ve Etkileşimler (animations.js)
 * Tüm cihazlarda ve işletim sistemi ayarlarında kusursuz çalışan animasyon motoru
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal (Kademeli ve Akıcı Ekrana Geliş)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // İlk ekranda (Hero alanı vb.) yer alan öğeleri anında tetikle
    setTimeout(() => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);
  }

  // 2. Yetenek Çubukları (Skill Bars) Animasyonu
  const skillFills = document.querySelectorAll('.skill-fill');
  if (skillFills.length > 0) {
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
      threshold: 0.2
    });

    skillFills.forEach(fill => skillObserver.observe(fill));
  }

  // 3. Daktilo Efekti (Typing Effect - Hero Alanı)
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const titles = [
      'Yazılım Geliştirici',
      'Frontend & Mobil Geliştirici',
      'React & Flutter Geliştirici'
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 70;

    const typeLoop = () => {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        typingElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 35;
      } else {
        typingElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 65;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        typingDelay = 1500; // Kelime tamamlandığında bekleme
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingDelay = 250; // Yeni kelimeye geçmeden önceki mola
      }

      setTimeout(typeLoop, typingDelay);
    };

    // Sayfa yüklendikten hemen sonra başlat
    setTimeout(typeLoop, 200);
  }

  // 4. Profil Etrafında Dönen Parlayan Işık Halkası (Kesintisiz Dönüş Motoru)
  const orbitContainer = document.querySelector('.avatar-orbit-container');
  if (orbitContainer) {
    let angle = 0;
    let lastTime = performance.now();
    const speed = 360 / 2200; // 2.2 saniyede tam tur (hızlı & akıcı)

    function stepOrbit(now) {
      const delta = now - lastTime;
      lastTime = now;
      angle = (angle + speed * delta) % 360;
      orbitContainer.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(stepOrbit);
    }
    requestAnimationFrame(stepOrbit);
  }
});
