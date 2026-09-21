# 🤖 YAPAY ZEKA & GELİŞTİRİCİ ÇALIŞMA EL KİTABI (AI HANDOVER MANUAL)

> **DİKKAT (BU DOSYAYI OKUYAN YAPAY ZEKA MODELİ VEYA GELİŞTİRİCİ İÇİN):**  
> Bu belge, Samet Karaöz'ün portfolyo projesinin mimarisini, tasarım kurallarını, mevcut durumunu ve gelecekte yapılabilecek geliştirmeleri eksiksiz açıklar. Bir oturum kesintisi veya yeni bir yapay zeka modeline geçiş durumunda projeyi kaldığı yerden kusursuz sürdürebilmek için buradaki prensiplere sadık kalınız.

---

## 1. KULLANICI PROFİLİ VE PROJE HEDEFLERİ

- **Kullanıcı Adı:** Samet Karaöz
- **Unvan / Rol:** Frontend Developer / Web Geliştirici
- **E-posta:** `sametkaraoz0@gmail.com`
- **GitHub Profili:** `https://github.com/samet-karaoz`
- **Mevcut Gerçek Projeleri:**
  1. `motor-galerisi` (HTML, CSS, Bootstrap - Motor galerisi arayüzü)
  2. `asphera-website` (JavaScript, HTML, CSS - Canlı demo: `asphera-website.vercel.app`)
- **Tasarım Tercihleri:**
  - **Doğallık Prensibi:** Sitenin aşırı yapay zeka jargonu (örn. "vizyoner ve tutkulu inovasyon lideri") kokmaması; samimi, sade, gerçekçi ama modern ve özenli olması şart koşulmuştur.
  - **Teknoloji Tercihi:** Sıfır bağımlılık (Vanilla HTML5, CSS3, ES6+ JS). Framework yükü eklenmemelidir (React, Tailwind, Node bağımlılığı vb. gereksizdir).
  - **Görsel Tema:** Koyu tema (Dark Mode), zarif mor/turkuaz vurgular, glassmorphism navbar, yumuşak kaydırma animasyonları.

---

## 2. DOSYA VE MİMARİ HARİTASI

```
c:\Users\Samet\Desktop\Portfolyo\
│
├── index.html          # Ana Sayfa: Hero, Canvas parçacık efekti, daktilo başlık yazısı
├── about.html          # Hakkımda: Biyografi, öne çıkan özellikler, animasyonlu bar yetenekler
├── experience.html     # Deneyim & Eğitim: İki ayrı dikey zaman çizelgesi (timeline)
├── projects.html       # Projeler: Kart ızgarası, etiketler, GitHub ve Canlı linkler
├── contact.html        # İletişim: İletişim kartı, Formspree uyumlu form
│
├── css/
│   ├── style.css       # Ana tasarım sistemi, CSS değişkenleri, temel bileşenler
│   ├── animations.css  # Scroll reveal, keyframe'ler, prefers-reduced-motion
│   └── responsive.css  # 992px, 768px, 480px duyarlı medya sorguları
│
└── js/
    ├── main.js         # Scrolled navbar kontrolü, mobil hamburger menü aç/kapa
    ├── animations.js   # IntersectionObserver scroll reveal, skill bar animasyonu, typing effect
    └── particles.js    # Canvas üzerinde hafif, düşük kaynak tüketen parçacık ağı
```

---

## 3. TASARIM SİSTEMİ VE CSS DEĞİŞKENLERİ (`css/style.css`)

Yeni bir sayfa veya bileşen eklerken DAİMA aşağıdaki değişkenleri kullanın:

```css
--bg: #0b0b10;              /* Ana sayfa arka planı */
--bg-secondary: #111118;    /* İkincil arka plan, mobil çekmece menü */
--bg-card: #16161f;         /* Kart bileşenleri arka planı */
--bg-card-hover: #1e1e2a;   /* Kart hover arka planı */
--accent: #6c63ff;          /* Birincil mor vurgu rengi */
--accent-hover: #5a52d5;    /* Mor buton hover rengi */
--accent-glow: rgba(108, 99, 255, 0.15); /* Hafif mor parlama/arka plan */
--cyan: #00c8ff;            /* İkincil turkuaz aksan rengi */
--green: #64ffda;           /* Başarı rengi */
--text: #b4b8c4;            /* Gövde metin rengi (yumuşak gri) */
--text-bright: #f0f2f7;     /* Başlık ve vurgulu metinler (parlak açık gri) */
--text-muted: #6b7280;      /* İkincil soluk metinler */
--border: rgba(255, 255, 255, 0.08); /* Kart ve çizgi kenarlığı */
--glass-bg: rgba(11, 11, 16, 0.85);  /* Navbar buzlu cam arka planı */
--glass-border: rgba(255, 255, 255, 0.1);
--radius: 10px;             /* Standart köşe yuvarlaklığı */
--radius-lg: 16px;          /* Kart köşe yuvarlaklığı */
```

### Standart HTML Bileşen Sınıfları:
- Başlık: `<h1 class="section-heading reveal">Başlık</h1>`
- Alt Başlık: `<p class="section-subtitle reveal">Açıklama</p>`
- Kart: `<div class="card reveal" data-delay="100">...</div>`
- Buton: `<a href="..." class="btn btn-primary">İşlem</a>` veya `.btn-outline`
- Etiket (Tag): `<span class="tag">JavaScript</span>`
- Animasyon Gecikmeleri: `data-delay="100"`, `data-delay="200"`, `data-delay="300"`

---

## 4. SAYFALAR ARASI BAĞLANTI VE NAVİGASYON KURALI

Tüm HTML sayfalarında `<nav class="navbar" id="navbar">` bulunur. Aktif olan sayfanın menü bağlantısında `active` sınıfı olmalıdır:

```html
<!-- Örnek: projects.html için -->
<li><a href="projects.html" class="nav-link active">Projeler</a></li>
```

---

## 5. İÇERİK GÜNCELLEME REHBERİ

### Yeni Proje Eklemek İçin (`projects.html`):
`<div class="projects-grid">` içine yeni bir kart ekleyin:
```html
<article class="project-card card reveal" data-delay="200">
  <div class="project-card-image" style="background: linear-gradient(135deg, var(--bg-card), var(--bg-card-hover)); height: 200px; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
    <!-- İkon veya emoji (örn: 💻, 📱, 🛒) ya da <img> -->
    💻
  </div>
  <div class="project-card-content">
    <h3 class="project-card-title">Proje Adı</h3>
    <p class="project-card-desc">Projenin amacı ve çözdüğü problem (1-2 samimi cümle).</p>
    <div class="project-card-tags">
      <span class="tag">HTML</span>
      <span class="tag">CSS</span>
      <span class="tag">JavaScript</span>
    </div>
    <div class="project-card-links">
      <a href="https://github.com/samet-karaoz/..." class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://..." class="project-link" target="_blank" rel="noopener noreferrer">Canlı Önizleme</a>
    </div>
  </div>
</article>
```

### Yeni Bir Yetenek Eklemek İçin (`about.html`):
`<div class="skills-grid">` içerisine:
```html
<div class="skill-item reveal" data-delay="200">
  <div class="skill-header">
    <span>TypeScript</span>
    <span>60%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-fill" data-width="60"></div>
  </div>
</div>
```

---

## 6. GELECEKTE YAPILABİLECEK GELİŞTİRMELER (BACKLOG)

Kullanıcı ileride ek isteklerde bulunursa sırayla yapılması önerilenler:

1. **Blog Detay Sayfası / Markdown Render:** Blog yazılarına tıklandığında tam yazıyı açacak bir şablon (`post.html`).
2. **Karanlık/Aydınlık Tema Geçiş Butonu (Light Mode Toggle):** İstenirse `color-scheme: light dark` ile bir güneş/ay butonu eklenebilir (ancak kullanıcının birincil isteği modern dark temadır).
3. **Gerçek Proje Ekran Görüntüleri:** Placeholder ikonlar yerine `assets/images/` dizini açılarak projelerin gerçek ekran görüntüleri `<img>` olarak yerleştirilebilir.
4. **CV İndirme Butonu:** `about.html` içerisine `cv.pdf` indirme bağlantısı eklenebilir.

---

## 7. KONTROL LİSTESİ (TAMAMLANAN ADIMLAR)

- [x] Tüm HTML sayfaları oluşturuldu (index, about, experience, projects, blog, contact)
- [x] Modüler CSS yapısı tamamlandı (style, animations, responsive)
- [x] Vanilla JS mekanizmaları yazıldı (main navbar & mobil menü, animations observer & typing, particles canvas)
- [x] Samet Karaöz'ün gerçek bilgileri ve GitHub projeleri entegre edildi
- [x] İnsansı, abartısız, samimi ve kaliteli bir dil tonu uygulandı
- [x] Tam responsive uyumluluk sağlandı
- [x] Yapay zeka ve geliştirici aktarım dokümantasyonu (README & PROJECT_GUIDE_AI) tamamlandı
- [x] Emil Kowalski tasarım mühendisliği becerileri (`.agents/skills`) yüklendi ve mikro-etkileşimler entegre edildi

---

## 8. EMIL KOWALSKI TASARIM & ANİMASYON BECERİLERİ (`.agents/skills`)

Projede Emil Kowalski'nin tasarım mühendisliği ilkeleri entegre edilmiştir. Bu beceriler `.agents/skills/` klasöründe yer almaktadır:
- `emil-design-eng`: Arayüz cilalama, mikro-etkileşimler ve görünmeyen detaylar felsefesi.
- `improve-animations`: Animasyon kararları ve easing (yaylanma/akıcılık) optimizasyonları.
- `animation-vocabulary`: Doğru fizik ve zamanlama terminolojisi.

**Uygulanan Standartlar:**
- Butonlara basıldığında anında fiziksel hissiyat veren `:active { transform: scale(0.97); }` mikro-etkileşimi.
- Ağır `transition: all` yerine donanım hızlandırmalı açık özellikler (`transform`, `box-shadow`, `background-color`).
- Snappy ve canlı tepki veren `cubic-bezier(0.16, 1, 0.3, 1)` geçiş eğrileri.

