// src/data/nav.ts
export type NavIcon =
  | "target"
  | "school"
  | "users"
  | "landmark"
  | "history"
  | "building"
  | "calendar"
  | "shield"
  | "award";

export type NavItem = {
  key: string;          // ✅ translation key id
  href: string;
  icon: NavIcon;
};

export type Featured = {
  key: string;          // ✅ translation key id
  href: string;
  imageSrc: string;
};

export type NavGroup = {
  key: string;          // ✅ translation key id
  featured?: Featured;
  items: NavItem[];
};

export const NAV: NavGroup[] = [
  {
    key: "about",
    featured: { key: "aboutFeatured", href: "/about", imageSrc: "/images/menus/about_image.jpeg" },
    items: [
      { key: "aboutSchool", href: "/about", icon: "landmark" },
      { key: "missionVision", href: "/about/our-mission-and-vision", icon: "target" },
      { key: "leadership", href: "/about/leadership", icon: "users" },
      { key: "campus", href: "/about/our-campus", icon: "building" },
      { key: "history", href: "/about/history", icon: "history" },
      { key: "childProtection", href: "/about/child-protection", icon: "shield" },
    ],
  },
  {
    key: "admissions",
    featured: { key: "admissionsFeatured", href: "/admissions", imageSrc: "/images/menus/admissions.jpeg" },
    items: [
      { key: "apply", href: "/admissions", icon: "award" },
      { key: "criteria", href: "/admissions/admissions-criteria", icon: "target" },
      { key: "process", href: "/admissions/application-process", icon: "school" },
      { key: "fees", href: "/admissions/tuition-fees", icon: "building" },
      { key: "faqs", href: "/admissions/faqs", icon: "users" },
    ],
  },
  {
    key: "learning",
    featured: { key: "learningFeatured", href: "/learning", imageSrc: "/images/menus/learning.jpeg" },
    items: [
      { key: "learningHome", href: "/learning", icon: "school" },
      { key: "earlyYears", href: "/learning/early-years", icon: "school" },
      { key: "primary", href: "/learning/primary", icon: "school" },
      { key: "bilingual", href: "/learning/bilingual-section", icon: "users" },
    ],
  },
];
