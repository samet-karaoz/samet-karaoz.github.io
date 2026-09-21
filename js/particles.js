/**
 * Samet Karaöz - Portfolyo Web Sitesi
 * Akıcı, Dingin ve Zarif Parçacık Sistemi (particles.js)
 * Emil Kowalski & Modern Web Motion standartlarına uygun, düşük CPU yükü
 */

(() => {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let particles = [];
  let animationFrameId;
  const PARTICLE_COUNT = 42; // Akıcı ve gözü yormayan dengeli miktar
  const MAX_DISTANCE = 115;
  const MOUSE_RADIUS = 130;

  // Fare konumu ve etkileşim durumu
  const mouse = {
    x: null,
    y: null,
    active: false,
    radius: MOUSE_RADIUS
  };

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isCyan = Math.random() > 0.6;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Canlı ve akıcı hareket hızları
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        baseRadius: Math.random() * 1.5 + 0.8,
        radius: Math.random() * 1.5 + 0.8,
        // Renk paleti (Mor ve Turkuaz tonları)
        color: isCyan ? 'rgba(0, 200, 255,' : 'rgba(108, 99, 255,',
        baseAlpha: Math.random() * 0.35 + 0.25,
        pulseSpeed: Math.random() * 0.035 + 0.015,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Parçacıklar arası ağ çizgileri
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DISTANCE) {
          const alpha = 0.08 * (1 - dist / MAX_DISTANCE);
          ctx.strokeStyle = `rgba(108, 99, 255, ${alpha})`;
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }

      // Fare ile parçacıklar arasındaki ince bağlantı
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          const mAlpha = 0.16 * (1 - mDist / mouse.radius);
          ctx.strokeStyle = `rgba(0, 200, 255, ${mAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // Parçacık noktaları
    particles.forEach(p => {
      // Hafif nefes alma efekti
      p.pulseVal += p.pulseSpeed;
      const currentRadius = p.baseRadius + Math.sin(p.pulseVal) * 0.3;
      const currentAlpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.1;

      ctx.fillStyle = `${p.color} ${Math.max(0.1, currentAlpha)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function update() {
    particles.forEach(p => {
      // Doğal yavaş hareket
      p.x += p.vx;
      p.y += p.vy;

      // Fare etkileşimi: Nazik itme kuvveti
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const pushX = (dx / dist) * force * 0.6;
          const pushY = (dy / dist) * force * 0.6;
          p.x += pushX;
          p.y += pushY;
        }
      }

      // Kenarlardan yumuşak sekme
      if (p.x < 0) {
        p.x = 0;
        p.vx *= -1;
      } else if (p.x > canvas.width) {
        p.x = canvas.width;
        p.vx *= -1;
      }

      if (p.y < 0) {
        p.y = 0;
        p.vy *= -1;
      } else if (p.y > canvas.height) {
        p.y = canvas.height;
        p.vy *= -1;
      }
    });
  }

  function loop() {
    update();
    draw();
    animationFrameId = requestAnimationFrame(loop);
  }

  // Başlatma
  resizeCanvas();
  initParticles();

  if (isReducedMotion) {
    draw(); // Erişilebilirlik için tek sabit kare
  } else {
    loop();
  }

  // Fare Hareketi Dinleyicileri (Sadece masaüstü / pointer aygıtları için)
  const heroSection = canvas.closest('.hero') || window;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  // Yeniden Boyutlandırma
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resizeCanvas();
      initParticles();
      if (isReducedMotion) {
        draw();
      }
    }, 150);
  }, { passive: true });
})();
