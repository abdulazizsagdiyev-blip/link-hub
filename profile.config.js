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
  tagline: "Videograf · Marketing · AI Mutaxassisi",
  bio: "SMM, AI va videografiya sohasidagi mutaxassis. Biznesingizni raqamli dunyoga olib chiqaman. 🎬",
  avatar: "avatar.webp",      // public/ papkasiga qo'ying
  verified: true,
  status: "🟢 Online · Hamkorlikka tayyorman",

  // ─── SEO & OpenGraph ─────────────────────────────
  seo: {
    title: "Abdulaziz Sagdiyev — Videograf & SMM",
    description: "Videograf, Marketing va AI mutaxassisi. Barcha havolalar, ijtimoiy tarmoqlar va aloqa ma'lumotlari.",
    ogImage: "og-image.webp",
    siteUrl: "https://t.me/sagdiyev_abdulaziz",
    themeColor: "#6C63FF",
  },

  // ─── vCard (Kontaktni Saqlash) ────────────────────
  vcard: {
    firstName: "Abdulaziz",
    lastName: "Sagdiyev",
    phone: "+998910090419",
    email: "abdulazizsagdiyev@gmail.com",
    website: "https://t.me/sagdiyev_abdulaziz",
    org: "Sagdiyev Media",
    title: "Videograf · Marketing · AI Mutaxassisi",
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
      url: "https://instagram.com/sagdiyev_abdulaziz",
      icon: "instagram",
      color: "#E1306C",
    },
    {
      platform: "youtube",
      label: "YouTube",
      url: "https://youtube.com/@sagdiyev_abdulaziz",
      icon: "youtube",
      color: "#FF0000",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      url: "https://tiktok.com/@sagdiyev_abdulaziz",
      icon: "tiktok",
      color: "#010101",
    },
  ],

  // ─── Asosiy Havolalar (Bento Cards) ──────────────
  links: [
    {
      id: "telegram",
      title: "📢 Telegram Kanal",
      subtitle: "Marketing, AI va kontent bo'yicha foydali postlar",
      url: "https://t.me/sagdiyev_abdulaziz",
      isFeatured: true,       // Katta karta
      badge: "🔥 Obuna bo'ling",
      icon: "chat",
      gradient: "from-violet-500 to-purple-700",
    },
    {
      id: "youtube",
      title: "▶️ YouTube Kanal",
      subtitle: "Video darsliklar va amaliy qo'llanmalar",
      url: "https://youtube.com/@sagdiyev_abdulaziz",
      isFeatured: true,
      badge: null,
      icon: "youtube",
      gradient: "from-red-500 to-rose-700",
    },
    {
      id: "instagram",
      title: "📸 Instagram",
      subtitle: "Kundalik hayot, ishlar va loyihalar",
      url: "https://instagram.com/sagdiyev_abdulaziz",
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
      badge: "24/7",
      icon: "chat",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: "smm",
      title: "📊 SMM Xizmatlari",
      subtitle: "Ijtimoiy tarmoqlaringizni professional boshqarish",
      url: "https://t.me/sagdiyev_abdulaziz",
      isFeatured: false,
      badge: "🤝 Hamkorlik",
      icon: "star",
      gradient: "from-blue-500 to-cyan-600",
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
    copyright: "© 2025 Abdulaziz Sagdiyev",
    shareText: "Profilni ulashish",
  },
};

// Export (modullar ishlatilmasa ham global o'zgaruvchi sifatida ishlaydi)
if (typeof module !== "undefined") {
  module.exports = profileConfig;
}
