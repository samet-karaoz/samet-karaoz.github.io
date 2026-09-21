# 🚀 Samet Karaöz - Kişisel Portfolyo Web Sitesi

Bu proje, **Samet Karaöz** için özel olarak tasarlanmış ve kodlanmış modern, karanlık temalı (Dark Theme), yüksek performanslı ve çok sayfalı kişisel portfolyo web sitesidir.

🌐 **Canlı Site:** [https://samet-karaoz.github.io/](https://samet-karaoz.github.io/)

Herhangi bir harici kütüphane veya ağır framework (React, Vue, Tailwind vb.) gerektirmeden, **saf ve modern web standartları (Vanilla HTML5, CSS3, ES6+ JavaScript)** ile sıfırdan inşa edilmiştir.

---

## 📁 Proje Dizin Yapısı

```
Portfolyo/
├── index.html              # Ana Sayfa: Hero alanı, interaktif parçacık arka planı, daktilo animasyonu
├── about.html              # Hakkımda: Biyografi, çalışma prensipleri, animasyonlu yetenek çubukları
├── experience.html         # Deneyim: İş/proje tecrübeleri ve eğitim zaman çizelgesi (Timeline)
├── projects.html           # Projeler: GitHub projeleri (Motor Galerisi, Asphera Website vb.)
├── blog.html               # Blog: Yazılım notları ve teknik yazılar listesi
├── contact.html            # İletişim: İletişim bilgileri ve işlevsel iletişim formu
├── css/
│   ├── style.css           # Ana stil dosyası, CSS Custom Properties (değişkenler), tipografi, bileşenler
│   ├── animations.css      # Scroll reveal, hover efektleri, keyframes, prefers-reduced-motion desteği
│   └── responsive.css      # Mobil, tablet ve masaüstü duyarlı kırılım noktaları (Media queries)
├── js/
│   ├── main.js             # Sticky/glassmorphism navbar mantığı, mobil çekmece menü (hamburger)
│   ├── animations.js       # IntersectionObserver scroll reveal, yetenek çubukları animasyonu, daktilo efekti
│   └── particles.js        # Hero alanında çalışan zarif, düşük CPU tüketen HTML5 Canvas parçacık efekti
├── README.md               # Proje genel tanıtımı ve çalıştırma kılavuzu
└── PROJECT_GUIDE_AI.md     # Yapay zekalar ve geliştiriciler için detaylı teknik el kitabı
```

---

## 🎨 Tasarım Sistemi & Özellikler

- **Renk Paleti:** Koyu arka plan (`#0b0b10`), derin kartlar (`#16161f`), mor vurgu (`#6c63ff`), turkuaz aksan (`#00c8ff`).
- **Glassmorphism Navbar:** Sayfa kaydırıldığında arka planı şeffaf ve buzlu cam efektine dönüştüren yapışkan menü.
- **Doğal ve İnsansı Dil:** Aşırı yapay zeka jargonu barındırmayan, samimi ve profesyonel Türkçe içerik.
- **Duyarlı (Responsive):** 360px mobilden 4K geniş ekranlara kadar tam uyumlu mobil menü ve ızgara yapıları.
- **Performans & Erişilebilirlik:**
  - Sıfır bağımlılık (Zero-dependency)
  - `prefers-reduced-motion` desteği (harekete duyarlı kullanıcılar için animasyonları otomatik yumuşatma)
  - Google Fonts `preconnect` optimizasyonu

---

## 💻 Yerelde Çalıştırma ve Önizleme

Projeyi bilgisayarınızda çalıştırmak için herhangi bir kurulum (npm/node) zorunlu değildir:

1. Klasördeki `index.html` dosyasını çift tıklayarak doğrudan herhangi bir tarayıcıda (Chrome, Edge, Firefox, Brave) açabilirsiniz.
2. Ya da VS Code kullanıyorsanız **Live Server** eklentisiyle `index.html` üzerinde sağ tıklayıp **"Open with Live Server"** seçeneğini kullanabilirsiniz.
3. Node.js terminali üzerinden hızlı sunucu başlatmak isterseniz:
   ```bash
   npx serve .
   ```

---

## 🌐 GitHub Pages ile Ücretsiz Yayınlama (Hosting)

Bu site tamamen statik olduğu için GitHub Pages üzerinde 2 dakikada ücretsiz yayınlanabilir:

1. GitHub hesabınızda (`samet-karaoz`) yeni bir public repository oluşturun (örneğin: `samet-karaoz.github.io` veya `portfolio`).
2. Masaüstündeki bu klasörde terminali açıp şu komutları çalıştırın:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio web sitesi ilk sürüm"
   git branch -M main
   git remote add origin https://github.com/samet-karaoz/<REPO_ADINIZ>.git
   git push -u origin main
   ```
3. GitHub repository sayfanızda **Settings > Pages** sekmesine gidin.
4. **Branch** kısmından `main` ve `/ (root)` seçip **Save** deyin.
5. Siteniz birkaç dakika içinde `https://samet-karaoz.github.io/` adresinde yayına girecektir!

---

## ✉️ İletişim Formu (Aktif & Bağlandı)

`contact.html` sayfasındaki form doğrudan Formspree (`https://formspree.io/f/xzezejwb`) uç noktasına bağlanmıştır.
- Ziyaretçiler formu doldurup gönderdiğinde sayfa yenilenmeden (AJAX ile) anında bildirim alır.
- Gönderilen mesajlar doğrudan `sametkaraozo@gmail.com` e-posta adresinize düşecektir.

---

## 👤 İletişim & Sosyal Medya
- **Geliştirici:** Samet Karaöz
- **GitHub:** [@samet-karaoz](https://github.com/samet-karaoz)
- **E-posta:** sametkaraozo@gmail.com
- **Telefon:** +90 539 713 03 57
