/**
 * Samet Karaöz - Portfolyo Web Sitesi
 * Zarif Arka Plan Parçacık Efekti (particles.js)
 */

(() => {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let particles = [];
  let animationFrameId;
  const PARTICLE_COUNT = 38; // Sade ve göz yormayan miktar
  const MAX_DISTANCE = 110;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Çizgi Bağlantıları
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DISTANCE) {
          const alpha = 0.09 * (1 - dist / MAX_DISTANCE);
          ctx.strokeStyle = `rgba(108, 99, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Parçacık Noktaları
    particles.forEach(p => {
      ctx.fillStyle = 'rgba(108, 99, 255, 0.45)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function update() {
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
  }

  function loop() {
    update();
    draw();
    animationFrameId = requestAnimationFrame(loop);
  }

  // İlk Başlatma
  resizeCanvas();
  initParticles();

  if (isReducedMotion) {
    draw(); // Yalnızca statik bir kare çiz
  } else {
    loop();
  }

  // Yeniden Boyutlandırma Dinleyicisi
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
