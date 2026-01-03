export type Person = {
  name: string;
  role: string;
  image?: string;
};

export const ADMIN_TEAM: Person[] = [
  { name: "Judith Guibasi", role: "Founder", image: "/images/leadership/founder.jpeg" },
  { name: "Tchuileng Rigobert", role: "co-Founder", image: "/images/leadership/co-founder.jpeg" },
  { name: "Njukange Divine", role: "Director", image: "/images/leadership/director.jpeg" },
  { name: "Djomo Liliane", role: "Marketing and Communication", image: "/images/leadership/marketing.png" },
  { name: "Tchuileng Quentin", role: "ICT", image: "/images/leadership/me.jpg" },
  { name: "Ghislaine Kamdem", role: "Reception and Registrar", image: "/images/leadership/receptionist.png" }, // no image -> navy tile always
];
