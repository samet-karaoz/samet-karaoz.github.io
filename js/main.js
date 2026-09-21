/**
 * Samet Karaöz - Portfolyo Web Sitesi
 * Genel Fonksiyonlar (main.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Kaydırma Durumu (Scrolled Glassmorphism)
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Sayfa yüklendiğinde kontrol
  }

  // 2. Mobil Menü (Hamburger Toggle & Drawer)
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Menü bağlantılarına tıklandığında menüyü kapat
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Menü dışına tıklandığında kapat
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    // Escape tuşuna basıldığında kapat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // 3. Formspree İletişim Formu (AJAX Gönderim & Bildirim)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Gönderiliyor...</span>';
      formStatus.style.display = 'none';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.style.display = 'block';
          formStatus.style.background = 'rgba(100, 255, 218, 0.12)';
          formStatus.style.border = '1px solid var(--green)';
          formStatus.style.color = 'var(--green)';
          formStatus.innerHTML = '✅ Mesajınız başarıyla iletildi! En kısa sürede geri dönüş yapacağım.';
          contactForm.reset();
        } else {
          const data = await response.json();
          formStatus.style.display = 'block';
          formStatus.style.background = 'rgba(255, 99, 132, 0.12)';
          formStatus.style.border = '1px solid #ff6384';
          formStatus.style.color = '#ff99ad';
          formStatus.innerHTML = data.errors ? data.errors.map(err => err.message).join(', ') : '⚠️ Bir sorun oluştu. Lütfen doğrudan e-posta ile ulaşın.';
        }
      } catch (error) {
        formStatus.style.display = 'block';
        formStatus.style.background = 'rgba(255, 99, 132, 0.12)';
        formStatus.style.border = '1px solid #ff6384';
        formStatus.style.color = '#ff99ad';
        formStatus.innerHTML = '⚠️ Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyin.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    });
  }
});

