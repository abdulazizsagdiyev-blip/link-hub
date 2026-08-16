# 🔗 Link Hub — Personal Micro-Landing Page

Zamonaviy, tezkor va dinamik konfiguratsiyali personal Link Hub (Linktree analogi) mikro-landing sahifa.

---

## ✨ Xususiyatlar

| Xususiyat | Tavsif |
|---|---|
| 🎨 **Gradient + Dark/Light Mode** | Tizim sozlamasiga qarab avtomatik, qo'lda almashtirish ham mumkin |
| 🖼️ **Bento Grid** | Katta va kichik kartalar, gradient fon, hover animatsiyalar |
| 🌐 **Ijtimoiy Tarmoqlar** | Telegram, Instagram, YouTube, TikTok, LinkedIn ikonkalar paneli |
| 👤 **Kontaktni Saqlash** | `.vcf` vCard fayl avtomatik yuklanadi |
| 🔗 **Profilni Ulashish** | QR-kod + URL nusxalash modal oynasi |
| 📋 **Clipboard Copy** | Telefon, email ustiga bosilganda Toast bildirishnoma bilan nusxa olish |
| ⚡ **Tez Yuklanish** | Hech qanday build tool kerak emas — faqat HTML/CSS/JS |
| 📱 **Mobile-First** | 320px dan 2560px gacha mukammal ko'rinish |
| 🔍 **Full SEO** | OpenGraph, Twitter Card, canonical URL, meta description |
| ♿ **Accessibility** | ARIA labels, keyboard navigation, focus states |

---

## 🗂️ Fayl Tuzilmasi

```
link-hub/
├── index.html          ← Asosiy sahifa (barcha kod)
├── profile.config.js   ← ⭐ FAQAT SHU FAYLNI TAHRIRLANG
├── avatar.webp         ← Profil rasmi (almashtiring)
├── og-image.webp       ← Social preview rasmi (almashtiring)
└── README.md
```

---

## ⚙️ Sozlash (5 daqiqa)

### 1. Profil ma'lumotlarini o'zgartirish

**`profile.config.js`** faylini oching va quyidagilarni o'zgartiring:

```js
const profileConfig = {
  name: "Ismingiz",           // ← To'liq ismingiz
  username: "@username",      // ← Username
  tagline: "Kasbingiz",       // ← Qisqa tavsif
  bio: "Bio matn...",         // ← Biroz uzunroq tavsif
  avatar: "avatar.webp",      // ← Rasm fayli nomi
  verified: true,             // ← false qilsangiz, badge yo'qoladi

  seo: {
    title: "Ism — Link Hub",  // ← Browser tab sarlavhasi
    siteUrl: "https://...",   // ← Saytingiz URL (muhim!)
  },
  // ... va hokazo
};
```

### 2. Havolalarni qo'shish / o'chirish

`links` massivini tahrirlang:

```js
links: [
  {
    id: "unique-id",          // ← Noyob ID
    title: "Sarlavha",
    subtitle: "Qisqa tavsif",
    url: "https://...",
    isFeatured: true,         // ← true = katta (full-width) karta
    badge: "Yangi",           // ← null qoldirsangiz, badge yo'q
    icon: "shop",             // ← shop, youtube, portfolio, chat, course, link...
    gradient: "from-violet-500 to-purple-700",
  },
]
```

#### Mavjud icon kalit so'zlari:
`shop`, `youtube`, `portfolio`, `chat`, `course`, `link`, `music`, `photo`, `code`, `star`

#### Mavjud gradient variantlari:
```
from-violet-500 to-purple-700   (binafsha)
from-red-500 to-rose-700        (qizil)
from-blue-500 to-cyan-600       (ko'k)
from-emerald-500 to-teal-600    (yashil)
from-amber-500 to-orange-600    (sariq-to'q sariq)
```

### 3. Ijtimoiy tarmoqlarni sozlash

`socials` massivini tahrirlang:

```js
socials: [
  { platform: "telegram", label: "Telegram", url: "https://t.me/USERNAME", icon: "telegram", color: "#229ED9" },
  // Keraklisini qoldiring, kerakmaganini o'chiring
]
```

#### Mavjud platform ikonkalar: `telegram`, `instagram`, `youtube`, `tiktok`, `linkedin`, `twitter`

### 4. Rasm qo'shish

- `avatar.webp` ni o'z rasm faylingiz bilan almashtiring (256×256px, `.webp` yoki `.jpg`)
- `og-image.webp` ni o'zingizniki bilan almashtiring (1200×630px, Telegram/WhatsApp preview uchun)

---

## 🚀 Ishga Tushirish

**Hech qanday server kerak emas!** `index.html` ni to'g'ridan-to'g'ri brauzerda oching:

```
Fayl → Ochish → index.html
```

Yoki VS Code bilan:
1. **Live Server** extension o'rnating
2. `index.html` → right click → **Open with Live Server**

---

## 🌐 Hosting (Bepul)

| Platform | Qo'llanma |
|---|---|
| **GitHub Pages** | Reponi yarating → Settings → Pages → `main` branch |
| **Netlify** | netlify.com → Drag & Drop papkani |
| **Vercel** | vercel.com → Import repo |
| **Cloudflare Pages** | pages.cloudflare.com → Connect GitHub |

---

## 📊 Analitika Qo'shish

`index.html` `<head>` qismiga Google Analytics kodni joylashtiring:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Barcha tugmalar bosilishi avtomatik kuzatiladi (`link_click`, `save_contact` eventlari).

---

## 📋 Tekshiruv Ro'yxati (Go-Live)

- [ ] `profile.config.js` da barcha havolalar to'g'ri
- [ ] `seo.siteUrl` to'liq URL qo'yilgan (`https://...`)
- [ ] `avatar.webp` va `og-image.webp` almashtirilgan
- [ ] Barcha ijtimoiy tarmoq havolalari ishlamoqda
- [ ] vCard ma'lumotlari to'g'ri (telefon, email)
- [ ] Mobil telefondan test qilingan
- [ ] Dark va Light mode ikkalasi ham tekshirilgan

---

**Made with ❤️ — Link Hub v1.0**
