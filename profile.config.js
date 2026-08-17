/**
 * =====================================================
 *  LINK HUB — Profile Configuration
 *  Barcha ma'lumotlarni shu fayldan boshqaring.
 *  Kodni o'zgartirmasdan, faqat shu faylni tahrirlang.
 * =====================================================
 */
const profileConfig = {
  // ─── Asosiy Ma'lumotlar ───────────────────────────
  name: "Abdulaziz Sagdiyev",
  username: "@sagdiyev_abdulaziz",
  tagline: "Videograf · Fotograf · Marketing · AI Mutaxassisi",
  bio: "Videograf, Fotograf, SMM va AI sohasidagi mutaxassis. 🎬",
  avatar: "avatar.webp",      // public/ papkasiga qo'ying
  verified: true,
  status: "🟢 Online · Ish vaqti: 10:00 - 18:00 (Du-Sha)",

  // ─── Teglar & Statistika ──────────────────────────
  tags: ["Videograf", "Fotograf", "SMM", "AI Tools", "Marketing", "Kontent Maker"],
  stats: [
    { num: "3+", label: "Yil tajriba" },
    { num: "10:00-18:00", label: "Du - Sha (Ish vaqti)" },
  ],

  // ─── SEO & OpenGraph ─────────────────────────────
  seo: {
    title: "Abdulaziz Sagdiyev — Videograf, Fotograf & SMM",
    description: "Videograf, Fotograf, Marketing va AI mutaxassisi. Barcha havolalar, ijtimoiy tarmoqlar va aloqa ma'lumotlari.",
    ogImage: "og-image.webp",
    siteUrl: "https://sagdiyevabdulaziz.uz",
    themeColor: "#6C63FF",
  },

  // ─── vCard (Kontaktni Saqlash) ────────────────────
  vcard: {
    firstName: "Abdulaziz",
    lastName: "Sagdiyev",
    phone: "+998910090419",
    email: "abdulazizsagdiyev@gmail.com",
    website: "https://sagdiyevabdulaziz.uz",
    org: "Sagdiyev Media",
    title: "Videograf · Fotograf · Marketing · AI Mutaxassisi",
    telegram: "sagdiyev_abdulaziz",
    instagram: "sagdiyev_abdulaziz",
  },

  // ─── Ijtimoiy Tarmoqlar (Social Bar) ─────────────
  socials: [
    {
      platform: "telegram",
      label: "Telegram",
      url: "https://t.me/sagdiyev_abdulaziz",
      icon: "telegram",
      color: "#229ED9",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/sagdiyev_abdulaziz?igsh=MTd4bnM0a3dldXBldw==",
      icon: "instagram",
      color: "#E1306C",
    },
    {
      platform: "youtube",
      label: "YouTube",
      url: "https://youtube.com/@sagdiyev_abdulaziz?si=BzhWF-FQzjlg-yl9",
      icon: "youtube",
      color: "#FF0000",
    },
  ],

  // ─── Asosiy Havolalar (Bento Cards) ──────────────
  links: [
    {
      id: "portfolio",
      title: "📁 Portfolio (Loyihalar)",
      subtitle: "Mening eng saralangan portfolio va ishlarim",
      url: "https://t.me/Sagdiyev_Abdulaziz_portfolio",
      isFeatured: true,       // Katta karta
      badge: "✨ Portfolio",
      icon: "star",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: "telegram",
      title: "📢 Telegram Kanal",
      subtitle: "Marketing, AI va kontent bo'yicha foydali postlar",
      url: "https://t.me/sagdiyev_abdulaziz",
      isFeatured: true,
      badge: "🔥 Obuna bo'ling",
      icon: "chat",
      gradient: "from-violet-500 to-purple-700",
    },
    {
      id: "youtube",
      title: "▶️ YouTube Kanal",
      subtitle: "Video darsliklar va amaliy qo'llanmalar",
      url: "https://youtube.com/@sagdiyev_abdulaziz?si=BzhWF-FQzjlg-yl9",
      isFeatured: false,
      badge: null,
      icon: "youtube",
      gradient: "from-red-500 to-rose-700",
    },
    {
      id: "instagram",
      title: "📸 Instagram",
      subtitle: "Kundalik hayot, ishlar va loyihalar",
      url: "https://www.instagram.com/sagdiyev_abdulaziz?igsh=MTd4bnM0a3dldXBldw==",
      isFeatured: false,
      badge: null,
      icon: "photo",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: "contact",
      title: "💬 Aloqa & Hamkorlik",
      subtitle: "Telegram orqali to'g'ridan-to'g'ri murojaat qiling",
      url: "https://t.me/sagdiyev_abdulaziz",
      isFeatured: false,
      badge: null,
      icon: "chat",
      gradient: "from-emerald-500 to-teal-600",
    },
  ],

  // ─── Birga Ishlaydigan Brendlar ────────────────────
  brands: [
    {
      id: "abdulloh-barber",
      name: "Abdulloh Barber",
      subtitle: "Shaxsiy Brend",
      url: "https://www.instagram.com/sagdiyev_abdulloh?igsh=aHZuZHJkMHd0amJ4&igsi=aHZuZHJkMHd0amJ4",
      image: "brand-abdulloh.png",
      badge: null,
    },
    {
      id: "photobuy-uz",
      name: "Photobuy.uz",
      subtitle: "",
      url: "https://www.instagram.com/photobuy.uz?igsh=MmJlZG9pamE1dWE3&igsi=MmJlZG9pamE1dWE3",
      image: "brand-photobuy.png",
      badge: null,
    },
  ],

  // ─── Kriptovalyuta / To'lov ───────────────────────
  // Null qoldirilsa, blok ko'rsatilmaydi
  crypto: null,
  // crypto: {
  //   label: "USDT (TRC-20)",
  //   address: "TXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  // },

  // ─── Aloqa Ma'lumotlari ───────────────────────────
  contact: {
    phone: "+998 91 009 04 19",
    email: "abdulazizsagdiyev@gmail.com",
    location: "Toshkent, O'zbekiston 🇺🇿",
  },

  // ─── Footer ──────────────────────────────────────
  footer: {
    copyright: "© 2026 Abdulaziz Sagdiyev",
    shareText: "Profilni ulashish",
  },
};

// Export (modullar ishlatilmasa ham global o'zgaruvchi sifatida ishlaydi)
if (typeof module !== "undefined") {
  module.exports = profileConfig;
}
