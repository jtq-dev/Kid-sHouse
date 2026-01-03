export type Lang = "en" | "fr";

export const dict = {
  en: {
    schoolName: "Your School",
    location: "Douala, Cameroon",
    admissions: "Admissions",
    contact: "Contact",
    calendar: "Calendar",
    about: "About",
    learning: "Learning",
    childProtection: "Child Protection",
    newsletter: "Newsletter",
    newsletterDesc: "Receive school updates and announcements.",
    join: "Join",
    heroBadge: "Douala • Kindergarten & Primary",
    heroTitle: "A School Built on Excellence, Care, and Community.",
    heroSubtitle: "Replace this hero text with your school’s real message (short, confident, specific).",
    apply: "Apply / Admissions",
    aboutSchool: "About the School",
  },
  fr: {
    schoolName: "Votre École",
    location: "Douala, Cameroun",
    admissions: "Admissions",
    contact: "Contact",
    calendar: "Calendrier",
    about: "À propos",
    learning: "Apprentissage",
    childProtection: "Protection de l’enfant",
    newsletter: "Newsletter",
    newsletterDesc: "Recevez les annonces et actualités de l’école.",
    join: "S’inscrire",
    heroBadge: "Douala • Maternelle & Primaire",
    heroTitle: "Une école fondée sur l’excellence, le soin et la communauté.",
    heroSubtitle: "Remplacez ce texte par le vrai message de votre école (court, clair, convaincant).",
    apply: "Candidature / Admissions",
    aboutSchool: "À propos de l’école",
  },
} as const;

export function getDict(lang: Lang) {
  return dict[lang] ?? dict.en;
}
