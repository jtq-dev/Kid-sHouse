import type { Locale } from "./locales";
type Tone = "blue" | "red";

/**
 * IMPORTANT:
 * - Do NOT use `as const` here, otherwise TS will force FR values to be the exact same literal strings.
 * - FR must have the same SHAPE (keys) as EN.
 */

export const EN = {
  
  nav: {
    about: "About",
    admissions: "Admissions",
    learning: "Learning",
    calendar: "Calendar",
    contact: "Contact",
  },
  quickLinks: {
  admissionsTitle: "Admissions",
  admissionsDesc: "How to apply, documents, fees.",
  calendarTitle: "Calendar",
  calendarDesc: "Important dates & events.",
  childProtectionTitle: "Child Protection",
  childProtectionDesc: "Safety & reporting.",
  learningTitle: "Learning",
  learningDesc: "Programs & support.",
},

  campusHero: {
  crestAlt: "School Crest",

  // contact block
  line1:
    "PO Box 4672 Douala • Tel: +237 677331043 • WhatsApp: +237 699038487 • Mail: tchuileng2007@gmail.com",
  courierLabel: "Courier Address:",
  courierAddress:
    "Situe a Kambo Boko lieu dit 1ere entree Cogefar, P14, Douala, – Republic of Cameroon, Central Africa",

  // links
  childProtection: "Child Protection Policy",
  questions: "Questions?",
  paymentTerms: "Payment Terms",

  // badge
  badgeTitle: "Our Campus",
  badgeDesc: "Safe, modern learning spaces.",

  // aria labels (optional but nice)
  social: {
    facebook: "Facebook",
    twitter: "Twitter",
    youtube: "YouTube",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },
},

  footer: {
  schoolTitle: "Your School",
  schoolDesc:
    "Kids House is a bilingual (English & French) kindergarten and primary school in Douala. We nurture confident learners through safe routines, caring educators, strong foundations, and close partnership with families.",
  quickLinksTitle: "Quick Links",
  policiesTitle: "Policies",
  newsletterTitle: "Newsletter",
  newsletterDesc: "Receive school updates and announcements.",
  rights: "All rights reserved.",
  privacy: "Privacy Notice",
  payments: "Payment Terms",
  childProtection: "Child Protection",
},

  hero: {
  badge: "Douala • Kindergarten & Primary",
  title: "A School Built on Excellence, Care, and Community.",
  subtitle:
    "Where Curiosity Becomes Confidence.\nKid’s House is a bilingual (English/French) school in Douala providing strong academics, caring educators, and a calm environment for every child.",
  ctaApply: "Apply / Admissions",
  ctaAbout: "About the School",
  stats: {
    grades: "Grades",
    teachers: "Teachers",
    campus: "Campus",
    learning: "Learning",
    gradesV: "K–P6",
    teachersV: "Qualified",
    campusV: "Safe",
    learningV: "Strong",
  },
},

menu: {
  explore: "Explore →",
  bottomText: "Want a visit or quick info? Put your WhatsApp/phone CTA here.",
  contactCta: "Contact →",

  groups: {
    about: "About",
    admissions: "Admissions",
    learning: "Learning",
  },

  featured: {
    aboutFeatured: { title: "Discover Kids House", subtitle: "Mission, campus, leadership, and values." },
    admissionsFeatured: { title: "Join Kids House", subtitle: "Start admissions and plan your visit." },
    learningFeatured: { title: "Learning at Kids House", subtitle: "Programs and student support." },
  },

  items: {
    aboutSchool: { title: "About Kids’ House", desc: "Who we are and what we stand for." },
    missionVision: { title: "Mission & Vision", desc: "Our educational purpose and goals." },
    leadership: { title: "Leadership", desc: "Meet our school leadership team." },
    campus: { title: "Our Campus", desc: "See the learning environment and facilities." },
    history: { title: "Our History", desc: "How Kids House started and grew." },
    childProtection: { title: "Child Protection", desc: "Safeguarding and child safety policy." },

    apply: { title: "Apply", desc: "Begin your admissions process." },
    criteria: { title: "Admissions Criteria", desc: "Requirements and eligibility." },
    process: { title: "Application Process", desc: "Steps and documents needed." },
    fees: { title: "Tuition & Fees", desc: "Fees, payment and key information." },
    faqs: { title: "FAQs", desc: "Quick answers to common questions." },

    learningHome: { title: "Learning Overview", desc: "Explore programs and outcomes." },
    earlyYears: { title: "Early Years", desc: "Pre-K programs and early development." },
    primary: { title: "Primary", desc: "Class 1 to Class 6 foundations." },
    bilingual: { title: "Bilingual Sections", desc: "English and French learning tracks." },
  },
},

  bilingualSectionsPage: {
  kicker: "LEARNING",
  title: "Bilingual Sections",
  subtitle: "English & French Programs (Kids House)",

  intro:
    "Kids House is proudly bilingual. Families can choose between our English Section and French Section. Both sections share the same core values: a safe learning environment, strong foundations, caring educators, and a positive view of every child.",

  highlightEnglishTitle: "English Section",
  highlightEnglishCta: "Explore →",
  highlightEnglishDesc:
    "Nursery + Primary pathway with strong literacy, numeracy, and character development.",
  highlightEnglishBullets: [
    "Pre-Nursery / Nursery (early years)",
    "Primary: Class 1 to Class 6",
    "Hands-on learning, STEM & creative activities",
  ],

  highlightFrenchTitle: "French Section",
  highlightFrenchCta: "Explore →",
  highlightFrenchDesc:
    "Maternal + Primary cycle with structured routines and strong fundamentals.",
  highlightFrenchBullets: [
    "Crèche / Maternelle (Petite, Moyenne, Grande Section)",
    "Primaire: SIL → Cours Moyen (CM)",
    "Progressive learning + discipline + confidence",
  ],

  flyerTitle: "Program Overview (Flyer)",
  flyerAlt: "Kids House bilingual information sheet",

  englishTitle: "English Section",
  englishText:
    "Our English Section supports children through early years and primary levels, with a focus on building strong foundations in reading, writing, math, science, and social skills.",
  englishLevelsTitle: "Levels",
  englishLevelsBullets: ["Pre-Nursery / Nursery", "Primary: Class 1 → Class 6"],
  englishLoveTitle: "What Families Love",
  englishLoveBullets: [
    "Quality teaching and caring staff",
    "Calm and secure environment",
    "Small class focus and personalized support",
  ],

  frenchTitle: "French Section",
  frenchText:
    "Our French Section supports children from early childhood through primary school, with strong fundamentals, good learning habits, and steady progress adapted to each age.",
  frenchLevelsTitle: "Levels",
  frenchLevelsBullets: [
    "Crèche / Maternelle: Petite, Moyenne, Grande Section",
    "Primaire: SIL → CM (depending on the school's organization)",
  ],
  frenchStrengthsTitle: "Strengths",
  frenchStrengthsBullets: [
    "Structured and caring supervision",
    "Progressive and well-organized learning",
    "Academic follow-up and positive discipline",
  ],

  chooseTitle: "How to Choose the Right Section",
  chooseText:
    "Many families choose based on the language spoken at home or the learning pathway they prefer. If you’re unsure, we can guide you with a quick conversation and recommend the best fit for your child.",

  helpTitle: "Need Help?",
  helpText:
    "Contact us to learn more about placements, admissions, and program details.",
  helpButton: "Contact Us",

  onThisPage: "ON THIS PAGE",

  ctaTitle: "Bilingual Education at Kids House",
  ctaText:
    "Choose the English or French section—both offer a caring environment, strong foundations, and supportive teachers.",
  ctaButton: "Admissions",

  photoEnglishAlt: "English section class",
  photoFrenchAlt: "French section class",
},

  grade5Page: {
  kicker: "ELEMENTARY SCHOOL",
  title: "Grade 5",
  subtitle: "",

  h1: "Transitioning from Lower to Upper Elementary at Kid's House",
  p1:
    "The move to upper elementary (Grades 3–5) at Kid's House is a major milestone in a child’s academic journey. During this exciting phase, students dive into more complex learning while building the skills and confidence needed for middle school.",

  expectTitle: "What to Expect",
  expectText:
    "Upper elementary brings increased academic expectations and greater independence. Our curriculum, grounded in the AERO Common Core Standards, supports deeper thinking across all subjects.",

  mathLabel: "Math",
  mathText:
    "Math In Focus encourages problem-solving and visual learning, covering topics like fractions, decimals, and geometry.",

  literacyLabel: "Literacy",
  literacyText:
    "Into Reading builds strong comprehension, writing skills, and a lifelong love for books.",

  scienceLabel: "Science",
  scienceText:
    "Aligned with Next Generation Science Standards, students explore topics like ecosystems and physics through hands-on, inquiry-based learning.",

  digitalTitle: "Building Digital Skills",
  digitalText:
    "Technology is fully integrated into daily lessons. Students use digital tools for math games, research projects, and collaborative learning—developing essential digital literacy for the future.",

  leadersTitle: "Growing as Leaders",
  leadersIntro: "We focus on character and leadership development:",
  leadersBullets: [
    "Students take on roles in group projects and class activities",
    "Monthly elections for classroom leadership",
    "Public speaking opportunities through speeches and presentations",
  ],
  leadersOutro:
    "They also lead community service projects—supporting local wildlife centers, helping orphanages, and fundraising for sick children—fostering empathy and global awareness.",

  envTitle: "A Dynamic Learning Environment",
  envIntro: "Our classrooms are designed for collaboration and creativity, featuring:",
  envBullets: [
    "Flexible seating and modern technology",
    "Project-based learning across subjects",
    "Specialized programs in STEM, arts, and languages",
  ],
  envOutro: "These opportunities help students discover new passions and build real-world skills.",

  beyondTitle: "Life Beyond the Classroom",
  beyondText:
    "From sports teams to after-school clubs, students stay active and involved. Participation in competitions and extracurriculars promotes teamwork, leadership, and school spirit.",

  parentsTitle: "Partnering with Parents",
  parentsText:
    "We know that strong home-school connections make a big difference. Kids House provides:",
  parentsBullets: [
    "Study tips and homework guidelines",
    "Opportunities to volunteer in classrooms and attend school events",
  ],
  parentsOutro: "Together, we support every child’s growth and success.",

  nextTitle: "Ready for What’s Next?",
  nextText:
    "The transition to upper elementary at Kid's House is more than academic—it’s about growing in confidence, curiosity, and character. Our students leave prepared not only for middle school, but for the world beyond.",

  ctaTitle: "Grade 5",
  ctaText:
    "Let’s work together to nurture your child’s potential and set them on a path to a successful future!",
  ctaButton: "Contact Us",

  photoLeftAlt: "Grade 5 students",
  photoRightAlt: "Grade 5 learning activity",
},

  upperElementaryPage: {
  bannerKicker: "ELEMENTARY SCHOOL",
  bannerTitle: "Upper Elementary",
  bannerSubtitle: "Grade 3 - Grade 4",

  p1:
    "As your child transitions from lower to upper elementary education, we are excited to embark on this journey with you. In Upper Elementary (Grades 3-5), we focus on nurturing independence and critical thinking skills. Here, students shift from learning to read to reading to learn, which is a pivotal moment in their educational journey. At Kid's House, we maximize this crucial time by fostering well-rounded learners equipped with the foundational skills necessary for their continued education and life.",

  h2a: "Curriculum Highlights: Engaging Minds and Expanding Horizons",
  p2:
    "Our robust, hands-on curriculum is tailored to meet the academic and personal needs of each upper elementary student. We offer advanced subjects in math, literacy, and science, utilizing proven programs such as Singapore Math: Math in Focus, Into Reading, and FOSS Science. Each program is thoughtfully modified to meet AERO standards while integrating technology and inquiry-based learning to enhance student engagement and comprehension.",

  h2b: "Character Development and Leadership: Building Tomorrow’s Leaders",
  p3:
    "At Kid's House, we believe that education goes beyond academics. Our core values of ethics, responsibility, and global citizenship permeate every lesson and subject. We are dedicated to fostering leadership skills and encouraging community involvement, ensuring our students not only excel in their studies but also grow into strong, model citizens.",

  h2c: "A Dynamic Learning Environment: Collaboration and Innovation",
  p4:
    "In today’s rapidly changing world, collaboration and teamwork are essential skills. Our Upper Elementary classrooms are designed to promote innovation and group work, where students tackle real-world problems together. Our specialized programs, including STEM, arts, and language initiatives, prepare students for the complexities of the future.",

  h2d: "Extracurricular Activities: Explore, Engage, Excel!",
  p5b: "Learning doesn’t stop at the classroom door!",
  p5:
    "Our extracurricular offerings provide students with opportunities to explore their passions and develop new skills. From Chess Club and Classical Ballet to Taekwondo and Musical Theatre, there’s something for everyone!",
  p6:
    "These activities encourage teamwork, creativity, and physical fitness, enriching the overall educational experience. Please contact us for specific details on fees and maximum participants.",

  h2e: "Parent Resources: Partnering for Success",
  p7:
    "At Kid's House, we maintain high expectations for our students. Our rigorous curriculum is designed to challenge and inspire. Homework assignments serve as an extension of classroom learning, allowing students to practice and hone their skills. We encourage parents to engage with their children’s academic development and become involved in our school community through various initiatives.",
  p8:
    "As a school-wide initiative, all classrooms offer home connection support through Google Classroom, enabling families to stay engaged with their child’s learning and access resources seamlessly.",

  h2f: "Testimonials: Stories of Success",
  p9:
    "Don’t just take our word for it! Hear from our students about their inspiring journeys and achievements, and read insights from parents about the profound impact Kid's House has had on their children. These testimonials underscore our commitment to excellence in education and the nurturing environment we provide.",

  h2g: "Join Us at Kid's House!",
  p10:
    "Are you ready to take the next step in your child’s education? Explore the countless opportunities that await your child in our Upper Elementary program at the School of future of Douala. Together, let’s prepare them for a bright and successful future!",

  contactLink: "Contact Us Today",
  contactTail: "to learn more and become part of our vibrant school community!",

  ctaTitle: "Upper Elementary",
  ctaText:
    "Are you ready to take the next step in your child’s education? Explore the countless opportunities that await your child. Together, let’s prepare them for a bright and successful future!",
  ctaButton: "Contact Us",

  photoLeftAlt: "Upper Elementary students",
  photoRightAlt: "Upper Elementary learning activity",
},

  lowerElementaryPage: {
  // Banner
  kicker: "ELEMENTARY SCHOOL",
  title: "Lower Elementary",
  subtitle: "Kindergarten - Grade 2",

  // Quick nav labels (for THIS page)
  quickNav: {
    learning: "Learning",
    earlyChildhood: "Early Childhood",
    elementarySchool: "Elementary School",
    studentSupport: "Student Support Services",
    serviceLearning: "Service Learning",
  },

  // Body
  intro:
    "At Kid's House, we believe that a strong foundational education is the key to a successful future. Our Lower Elementary program nurtures young learners in a warm and engaging environment, where curiosity is celebrated and learning is a joyful adventure.",

  curriculumTitle: "Discover Our Curriculum",
  curriculumP1:
    "In lower elementary, we build on the experiences of Kindergarten, allowing children to play, explore, and collaborate with their peers. Our carefully crafted routines establish positive behavior for learning, while English immersion ensures that children expand their vocabulary and express their wonderings. We encourage them to ask questions because every inquiry leads to new learning for everyone in the class.",
  curriculumP2:
    "Our core subjects—reading, writing, math, science, and social studies— are designed to intertwine with integrated learning areas such as art, music, and physical education. Hands-on experiences and play-based activities ensure that learning is not just effective but also enjoyable.",

  readingTitle: "Reading and Language Arts",
  readingText:
    "We utilize the Journeys program to develop essential reading skills. Students will learn phonetic skills to decode words, gradually extending their reading abilities and focusing on comprehension. Writing is integrated into their experiences, encouraging children to reflect on tangible events rather than abstract concepts. This hands-on approach to language arts cultivates both their grammatical understanding and their ability to communicate effectively.",

  mathTitle: "Mathematics",
  mathText:
    "Our mathematics instruction is guided by the Math in Focus (Singapore Math) curriculum. This program emphasizes problem-solving with language-rich word problems, covering concepts from basic numbers to more complex operations up to 100. Children will explore concepts of time, measurement, geometry, and statistics, all while enjoying a playful and engaging approach to math.",

  integratedTitle: "Integrated Learning Areas",
  integratedText:
    "In addition to core subjects, our Lower Elementary students benefit from integrated learning experiences in art, music, and physical education. We believe that hands-on learning and play-based activities are pivotal in nurturing a well-rounded education.",

  characterTitle: "Character Development",
  characterText:
    "At Kid's House, we prioritize social-emotional learning (SEL) alongside academic achievement. Our initiatives focus on instilling values such as respect, responsibility, and kindness. Through activities like Circle Time, students learn to express their thoughts and solve problems collaboratively, ensuring a supportive classroom environment. Our Think-Pair-Share approach encourages active listening and respectful dialogue, fostering a sense of community among students.",

  dynamicTitle: "A Dynamic Learning Environment",
  dynamicText:
    "Our classrooms are designed to foster creativity, collaboration, and focused learning. With a low student-to-teacher ratio, currently 12:1, every child receives personalized attention from dedicated educators and assistants. Our learning spaces are tailored to support diverse activities, whether it’s guided teaching sessions or playful exploration.",

  extracurricularTitle: "Extracurricular Opportunities",
  extracurricularText:
    "We believe that education extends beyond the classroom. Our Lower Elementary students have access to a variety of extracurricular activities, including drama, football, dance, taekwondo, yoga, and coding. We also encourage parental involvement through our PTA Committee, where parents can share their expertise and engage in community events.",

  parentsTitle: "Resources for Parents",
  parentsIntro:
    "Supporting your child’s learning at home is vital to their success. Here are some tips to make reading and math enjoyable:",

  readingCardTitle: "Reading Together",
  readingBullets: [
    "Make reading a fun and shared experience. Take turns reading or enjoy being read to.",
    "Discuss pictures in books, sing songs, and create your own rhymes.",
    "Model a love for reading by sharing your interests and discussing stories together.",
  ],

  mathCardTitle: "Exploring Math",
  mathBullets: [
    "Use everyday activities to find numbers and shapes around your home and neighborhood.",
    "Play counting games and create patterns with claps or movements.",
    "Engage in fun math stories and comparisons, connecting activities to daily routines.",
  ],

  joinTitle: "Join Us on This Exciting Journey!",
  joinText:
    "We invite you to explore the enriching world of Lower Elementary at Kid's House. Here, your child will lay the groundwork for a lifetime of learning in a supportive and inspiring environment.",

  readyTextBeforeLink: "Ready to embark on this adventure?",
  readyLinkText: "Contact Us Today",
  readyTextAfterLink:
    "to learn more about our program and to schedule a visit. Let’s build a brighter future together!",

  // CTA band
  ctaTitle: "Lower Elementary",
  ctaText:
    "Let’s work together to nurture your child’s potential and set them on a path to a successful future!",
  ctaButton: "Contact Us",

  // Photo alts
  photoLeftAlt: "Lower Elementary students",
  photoRightAlt: "Lower Elementary learning activity",
},

  primaryPage: {
  kicker: "LEARNING",
  title: "Elementary School",
  subtitle: "",

  intro:
    "The Elementary School at Kid’s House seeks to nurture and develop students from diverse backgrounds and experiences who will make a difference in their communities. We value strong home-school partnership with parents, and a warm, caring atmosphere where students collaborate constructively, think creatively, reason critically, and communicate effectively.",

  tiles: {
    lowerTitle: "Lower Elementary",
    lowerSubtitle: "Kindergarten - Grade 2",
    lowerAlt: "Lower Elementary",

    upperTitle: "Upper Elementary",
    upperSubtitle: "Grade 3 - Grade 4",
    upperAlt: "Upper Elementary",

    grade5Title: "Grade 5",
    grade5Subtitle: "",
    grade5Alt: "Grade 5",
  },

  ctaTitle: "Elementary School",
  ctaText:
    "Are you ready to take the next step in your child’s education? Explore the countless opportunities that await your child in our Elementary Program. Together, let’s prepare them for a bright and successful future!",
  ctaButton: "Contact Us",
},

  preK34Page: {
  quickNav: {
    learning: "Learning",
    earlyYears: "Early Years",
    preK2: "Pre-K2",
    preK34: "Pre-K3 & Pre-K4",
  },

  banner: {
    kicker: "EARLY CHILDHOOD",
    title: "Pre-K3 & Pre-K4",
    subtitle: "Nurturing Young Minds",
  },

  main: {
    title: "Nurturing Young Minds for a Bright Future",
    intro:
      "At Kid's House, we believe that the early years of a child’s life are crucial for laying the groundwork for future academic and social success. Our Early Learning Program serves children aged 3 to 4, focusing specifically on Pre-school (K3) and Pre Kindergarten (K4). Research shows that quality early childhood education significantly impacts cognitive and social development, setting the stage for lifelong learning and success.",

    philosophyTitle: "Our Educational Philosophy",
    philosophyText:
      "We embrace a play-based and inquiry-driven approach to learning, where children engage in activities that promote exploration and creativity. Our nurturing, inclusive, and diverse environment fosters a sense of belonging, allowing each child to thrive. Our curriculum is designed to spark curiosity and instill a lifelong love for learning through hands-on projects and collaborative play.",

    curriculumTitle: "Comprehensive Curriculum Overview",
    curriculumIntro: "Our curriculum covers essential subjects such as:",
    subjects: [
      "Language Arts",
      "Math",
      "Science",
      "Social Studies",
      "Art",
      "Music",
      "Physical Education",
    ],
    curriculumText:
      "Subjects are integrated and taught through thematic units, allowing for connections between concepts. For instance, a unit on “Seasons” may include related stories, science experiments, and art projects. Outdoor learning initiatives, such as gardening, enhance experiential learning, and our STEM activities introduce foundational concepts of science, technology, and math in playful contexts.",

    goalsTitle: "Developmental Goals",
    goalsIntro: "Our program is designed with specific developmental goals in mind:",
    goals: [
      { label: "Social Skills", desc: "Cooperation and sharing" },
      { label: "Emotional Intelligence", desc: "Recognizing and expressing feelings" },
      { label: "Cognitive Skills", desc: "Problem-solving and critical thinking" },
      { label: "Physical Development", desc: "Fine and gross motor skills" },
    ],
    goalsText:
      "These goals guide our teaching practices and daily activities, ensuring that each child’s development is prioritized.",

    envTitle: "Engaging Learning Environment",
    envText:
      "Our classrooms are safe, engaging, and stimulating, featuring varied learning stations and outdoor spaces that include gardens and playgrounds. Programs like nature explorations and gardening teach children about the environment and responsibility, promoting active exploration.",

    staffTitle: "Dedicated Faculty and Staff",
    staffText:
      "Our educators are highly qualified, with degrees in early childhood education and years of experience. We maintain a low student-to-teacher ratio of 6 to 1, allowing for personalized attention and stronger relationships between teachers and students.",

    parentsTitle: "Partnering with Parents",
    parentsText:
      "At Kid's House, we believe that parents are vital partners in their child’s education. We offer numerous opportunities for involvement, including volunteering in classrooms, organizing activities, and participating in parent-teacher conferences.",

    diversityTitle: "Celebrating Diversity and Community",
    diversityText:
      "Our curriculum reflects the diverse backgrounds of our families, incorporating multicultural perspectives into our lessons. We’re committed to community involvement, contributing food and basic needs to local orphanages, and fostering a culture of service among our students.",

    extraTitle: "Extracurricular Activities",
    extraText:
      "Our early learners enjoy a variety of extracurricular activities, including music classes, art workshops, and physical education. While field trips are limited for our youngest learners, we prioritize special events and experiences that enrich their educational journey.",

    familiesTitle: "Hear from Our Families",
    familiesText:
      "Don’t just take our word for it! Our families have shared heartwarming testimonials about the positive impact our program has had on their children’s development and their own engagement in the school community. Stories of student achievements and milestones highlight the transformative experience at Kid's House.",

    readyTitle: "Ready to Join Us?",
    readyText:
      "If you’re considering Kid's House for your child’s early learning journey, we invite you to reach out for more information or to schedule a visit. Our enrollment process is straightforward, and we’re here to guide you every step of the way.",

    contactLink: "Contact Us Today!",
  },

  cta: {
    title: "Ready to Join Us?",
    text: "Schedule a visit or contact our admissions team for more information.",
    button: "Contact Us Today",
  },

  photos: {
    leftAlt: "Pre-K3 & Pre-K4 learning activity",
    rightAlt: "Pre-K3 & Pre-K4 classroom",
  },
},

  preK2Page: {
  kicker: "EARLY CHILDHOOD",
  title: "Pre-K2",
  subtitle: "Nurturing Young Minds",

  h1: "Nurturing Young Minds for a Bright Future",
  p1:
    "At Kid's House, we believe that the early years of a child’s life are crucial for laying the groundwork for future academic and social success. Our Early Learning Program serves children aged 3 to 4, focusing specifically on Pre-school (K3) and Pre Kindergarten (K4). Research shows that quality early childhood education significantly impacts cognitive and social development, setting the stage for lifelong learning and success.",

  s1Title: "Our Educational Philosophy",
  s1Text:
    "We embrace a play-based and inquiry-driven approach to learning, where children engage in activities that promote exploration and creativity. Our nurturing, inclusive, and diverse environment fosters a sense of belonging, allowing each child to thrive. Our curriculum is designed to spark curiosity and instill a lifelong love for learning through hands-on projects and collaborative play.",

  s2Title: "Comprehensive Curriculum Overview",
  s2Intro: "Our curriculum covers essential subjects such as:",
  s2List: [
    "Language Arts",
    "Math",
    "Science",
    "Social Studies",
    "Art",
    "Music",
    "Physical Education",
  ],
  s2Text:
    "Subjects are integrated and taught through thematic units, allowing for connections between concepts. For instance, a unit on “Seasons” may include related stories, science experiments, and art projects. Outdoor learning initiatives, such as gardening, enhance experiential learning, and our STEM activities introduce foundational concepts of science, technology, and math in playful contexts.",

  s3Title: "Developmental Goals",
  s3Intro: "Our program is designed with specific developmental goals in mind:",
  s3Bullets: [
    { label: "Social Skills", desc: "Cooperation and sharing" },
    { label: "Emotional Intelligence", desc: "Recognizing and expressing feelings" },
    { label: "Cognitive Skills", desc: "Problem-solving and critical thinking" },
    { label: "Physical Development", desc: "Fine and gross motor skills" },
  ],
  s3Text:
    "These goals guide our teaching practices and daily activities, ensuring that each child’s development is prioritized.",

  s4Title: "Engaging Learning Environment",
  s4Text:
    "Our classrooms are safe, engaging, and stimulating, featuring varied learning stations and outdoor spaces that include gardens and playgrounds. Programs like nature explorations and gardening teach children about the environment and responsibility, promoting active exploration.",

  s5Title: "Dedicated Faculty and Staff",
  s5Text:
    "Our educators are highly qualified, with degrees in early childhood education and years of experience. We maintain a low student-to-teacher ratio of 6 to 1, allowing for personalized attention and stronger relationships between teachers and students.",

  s6Title: "Partnering with Parents",
  s6Text:
    "At Kid's House, we believe that parents are vital partners in their child’s education. We offer numerous opportunities for involvement, including volunteering in classrooms, organizing activities, and participating in parent-teacher conferences.",

  s7Title: "Celebrating Diversity and Community",
  s7Text:
    "Our curriculum reflects the diverse backgrounds of our families, incorporating multicultural perspectives into our lessons. We’re committed to community involvement, contributing food and basic needs to local orphanages, and fostering a culture of service among our students.",

  s8Title: "Extracurricular Activities",
  s8Text:
    "Our early learners enjoy a variety of extracurricular activities, including music classes, art workshops, and physical education. While field trips are limited for our youngest learners, we prioritize special events and experiences that enrich their educational journey.",

  s9Title: "Hear from Our Families",
  s9Text:
    "Don’t just take our word for it! Our families have shared heartwarming testimonials about the positive impact our program has had on their children’s development and their own engagement in the school community. Stories of student achievements and milestones highlight the transformative experience at Kid's House.",

  s10Title: "Ready to Join Us?",
  s10Text:
    "If you’re considering Kid's House for your child’s early learning journey, we invite you to reach out for more information or to schedule a visit. Our enrollment process is straightforward, and we’re here to guide you every step of the way.",

  contactLink: "Contact Us Today!",

  ctaTitle: "Ready to Join Us?",
  ctaText: "Schedule a visit or contact our admissions team for more information.",
  ctaButton: "Contact Us Today",

  photoLeftAlt: "Pre-K2 learning activity",
  photoRightAlt: "Pre-K2 classroom",
},

  // ✅ add inside EN
earlyYearsPage: {
  kicker: "LEARNING",
  title: "Early Childhood",
  subtitle: "Pre-K2 to Pre-K4",

  heading: "Nurturing Young Minds for a Bright Future",
  intro:
    "At Kid’s House, we believe the early years are crucial for building confidence, curiosity, and strong learning foundations. Our Early Childhood program blends play-based learning with structure, early literacy, numeracy, social-emotional growth, and hands-on discovery.",

  tilePreK2Title: "Pre-K2",
  tilePreK2Alt: "Pre-K2 students",
  tilePreK34Title: "Pre-K3 & Pre-K4",
  tilePreK34Alt: "Pre-K3 and Pre-K4 students",

  ctaTitle: "Early Childhood",
  ctaText:
    "Let’s work together to nurture your child’s potential and set them on a path to a successful future!",
  ctaButton: "Contact Us",

  photoLeftAlt: "Early years activity",
  photoRightAlt: "Children learning",
},

  contactForm: {
  namePlaceholder: "Name",
  phonePlaceholder: "Phone",
  messagePlaceholder: "Message",
  sending: "Sending...",
  send: "Send",
  successMsg: "Message sent! We will contact you soon.",
  errorFallback: "Something went wrong.",
  errorSendFail: "Failed to send message.",
  whatsappLinkText: "Or contact us on WhatsApp",
},

    contactPage: {
    title: "Contact",
    quickNav: {
      details: "Contact Details",
      map: "Map",
      form: "Message Form",
    },

    details: {
      kicker: "Contact",
      title: "Contact Details",
      phoneLabel: "Phone",
      emailLabel: "Email",
      addressLabel: "Address",
    },

    map: {
      kicker: "Contact",
      title: "Location Map",
      iframeTitle: "map",
    },

    form: {
      kicker: "Contact",
      title: "Message Form",
      desc: "Wire it later to email (Resend) or WhatsApp.",
    },
  },

    calendar: {
    datesToRememberTitle: "Dates to Remember",

    categories: {
      general: "General Events",
      quarter: "Quarter Begins/Ends",
      progress: "Progress Reports",
      ptc: "Parent Teacher Conferences",
      holiday: "School / Public Holidays",
      firstlast: "First Day/Last Day of School",
    },

    dowShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    events: {
      firstDayOfSchool: "First Day of School",
      progress01: "Progress Reports - 01",
      wellnessDay: "Wellness Day",
      pdDay: "PD Day",
      endFirstQuarter: "End of First Quarter",
      fallBreak: "Fall Break",
      q2Begins: "2nd Quarter Begins",
      ptcNov: "Parent Teacher Conference",
      progress02: "Progress Reports - 02",
      winterBreakBegins: "Winter Break Begins",
      schoolResumes: "School Resumes",
      endSecondQuarter: "End of 2nd Quarter",
      q3Begins: "3rd Quarter Begins",
      progress03: "Progress Reports - 03",
      endThirdQuarter: "End of 3rd Quarter",
      q4Begins: "4th Quarter Begins",
      ptcApr: "Parent Teacher Conference",
      labourDayObserved: "Labour Day Observed",
      cameroonNationalDay: "Cameroon National Day",
      lastDayOfSchool: "Last Day of School",
    },
  },

    calendarPage: {
    kicker: " ",
    title: "Calendar",
    subtitle:
      "Explore important dates and events. Replace text with your school’s calendar summary.",

    yearRange: "2025 - 2026",
    intro:
      "Your school calendar includes academic dates, holidays, events, and conferences. Use the legend below to understand the categories.",

    bandTitle: "About the Calendar",
    bandP1:
      "Replace this paragraph with your school calendar policy: what is included, how parents get updates, and where to ask questions.",
    bandP2: "You can also note how schedule changes will be communicated.",
    bandDownload: "DOWNLOAD 2025-2026 CALENDAR",

    quickNav: {
      about: "About",
      mission: "Our Mission and Vision",
      leadership: "Leadership",
      board: "Board Members",
      history: "History",
      campus: "Our Campus",
      calendar: "Calendar",
      childProtection: "Child Protection",
      awards: "Awards & Accreditations",
    },
  },

    admissionsHome: {
    title: "Admissions",
    subtitle: "Clear steps, required documents, and helpful FAQs.",

    quickNav: {
      apply: "How to Apply",
      documents: "Required Documents",
      fees: "Fees & Payment",
      faqs: "FAQs",
    },

    howToApply: {
      kicker: "Admissions",
      title: "How to Apply",
      step1t: "1) Visit",
      step1d: "Schedule a visit to see the campus and meet our team.",
      step2t: "2) Apply",
      step2d: "Submit your enrollment request and required documents.",
      step3t: "3) Confirm",
      step3d: "Receive confirmation and complete fee payment to secure a seat.",

      ctaContact: "Contact Admissions",
      ctaProcess: "View Application Process",
    },

    previewProcess: {
      title: "Application Process",
      text:
        "Our admissions process is simple and supportive. We guide families step-by-step from first contact to enrollment confirmation.",
      imgAlt: "Kids House admissions process",
      button: "Open Application Process",
    },

    documents: {
      kicker: "Admissions",
      title: "Required Documents",

      previewTitle: "Documents you need",
      previewText:
        "Prepare a few key documents to complete enrollment. Having everything ready helps us process your request quickly.",
      previewImgAlt: "Kids House required documents",
      previewButton: "See Required Documents",

      commonTitle: "Common requirements",
      item1: "Birth certificate (copy)",
      item2: "Passport-size photos (if requested)",
      item3: "Report card / school record (if applicable)",
      item4: "Vaccination / medical record (if applicable)",
      item5: "Parent/Guardian ID",
      viewFull: "View full list",
    },

    fees: {
      kicker: "Admissions",
      title: "Fees & Payment",

      previewTitle: "Tuition structure & payment schedule",
      previewText:
        "Kids House tuition is organized by section and class level. View the official fee sheet and installment schedule.",
      previewImgAlt: "Kids House tuition and fees",
      previewButton: "View Tuition & Fees",

      note:
        "Tuition is generally paid as Registration + installments. For the most accurate information, please refer to the official fee sheet on the Tuition & Fees page or contact the office.",
      ctaOpen: "Open Tuition & Fees",
      ctaAsk: "Ask about fees",
    },

    faqs: {
      kicker: "Admissions",
      title: "FAQs",

      previewTitle: "Answers for parents",
      previewText:
        "Find quick answers about age groups, class placement, school routines, uniforms, and communication with families.",
      previewImgAlt: "Kids House admissions FAQs",
      previewButton: "Read FAQs",

      mostAsked: "Most asked",

      q1: "When can we apply?",
      a1: "Applications are accepted during enrollment periods and as seats are available.",

      q2: "Do you offer English & French sections?",
      a2: "Yes. Kids House offers both sections. Placement depends on the child’s level and availability.",

      q3: "How do we schedule a visit?",
      a3: "Use the contact form or WhatsApp to book a tour.",

      viewAll: "View all FAQs",
    },
  },

    admissionsTuition: {
    kicker: "ADMISSIONS",
    title: "Tuition & Fees",
    subtitle: "Find tuition information and payment schedules for the current school year.",

    quickNav: {
      admissions: "Admissions",
      criteria: "Admissions Criteria",
      process: "Application Process",
      campus: "Our Campus",
      tuition: "Tuition & Fees",
      store: "School Store",
      faqs: "FAQs",
    },

    band: {
      title: "Tuition & Fees",
      importantTitle: "Important Information",
      p1: "Tuition at Kids House is paid as Registration + Installments for both the English and French sections, according to the official fee sheet.",
      p2: "Fees paid to the school administration are not refundable. Kids House may adjust fee arrangements when necessary and parents will be informed accordingly.",
      cta: "Admissions",
    },
  },

    admissionsRequiredDocs: {
    kicker: "ADMISSIONS",
    title: "Required Documents",
    subtitle: "What you need to prepare before submitting your application.",

    intro:
      "To keep the admissions process smooth, please prepare the documents below. If you’re unsure about a specific item, contact Admissions and we’ll guide you.",

    quickNav: {
      admission: "Admission",
      criteria: "Admissions Criteria",
      process: "Application Process",
      required: "Required Documents",
      campus: "Our Campus",
      fees: "Tuition & Fees",
      faqs: "FAQs",
    },

    sections: [
      {
        title: "Core Documents (All Applicants)",
        items: [
          { label: "Birth Certificate / Proof of Age", desc: "Certified copy or official document." },
          { label: "Parent/Guardian ID", desc: "Passport or national ID card." },
          { label: "2 Recent Passport Photos", desc: "Child’s photos (if required by your school)." },
          { label: "Health/Vaccination Record", desc: "Up-to-date vaccination card or medical record." },
          { label: "Emergency Contacts", desc: "Names and phone numbers for emergency pickup." },
        ],
      },
      {
        title: "Academic Documents",
        items: [
          { label: "Previous School Report Cards", desc: "Most recent report card(s) / progress reports." },
          { label: "Transcripts (if applicable)", desc: "For upper grades or transferring students." },
          { label: "Teacher Recommendation (optional)", desc: "If requested by Admissions for placement." },
        ],
      },
      {
        title: "Transfer / International Students (If Applicable)",
        items: [
          { label: "Transfer Letter", desc: "From previous school (good standing / clearance letter)." },
          { label: "Language Support Info (optional)", desc: "Any learning support plans or language reports." },
          { label: "Residence/Permit Documents (optional)", desc: "Only if your policy requires it." },
        ],
      },
      {
        title: "Payment / Sponsorship (If Applicable)",
        items: [
          { label: "Employer/Sponsor Letter", desc: "If employer or sponsor covers tuition." },
          { label: "Financial Standing Record", desc: "If required by your admissions policy." },
        ],
      },
    ],

    noteTitle: "Note",
    noteBullets: [
      "Documents may vary by grade level and student status.",
      "Non-English/French documents may require translation (only if your policy requires it).",
      "Bring originals when asked; we may keep copies for your file.",
    ],

    photos: {
      leftAlt: "Admissions support",
      rightAlt: "Student learning",
    },

    cta: {
      title: "Need Help?",
      text: "If you have questions about required documents, contact Admissions and we’ll assist you.",
      buttonLabel: "Contact Form",
    },
  },

  aboutPage: {
  kicker: "About",
  title: "About",
  subtitle: "Discover who we are, what we stand for, and how we support every child’s growth.",

  mission: {
    sectionTitle: "Mission & Vision",
    cardTitle: "Our purpose and our promise",
    cardText:
      "Kids House is a bilingual (English & French) primary and kindergarten school in Douala. Our mission is to give every child a strong foundation—academically, socially, and emotionally—through structured learning, caring guidance, and strong values.",
    imgAlt: "Kids House mission",
    button: "Read Mission & Vision",
  },

  leadership: {
    sectionTitle: "Leadership",
    cardTitle: "A dedicated team that cares",
    cardText:
      "Our leadership and educators work closely with families to create a safe, respectful environment where children feel confident to learn, explore, and grow.",
    imgAlt: "Kids House leadership",
    button: "Meet the Leadership",
  },

  campus: {
    sectionTitle: "Campus",
    cardTitle: "A safe and welcoming learning space",
    cardText:
      "Our campus supports learning through bright classrooms, structured routines, and spaces that encourage curiosity and play. We keep safety, cleanliness, and student wellbeing at the center of everything.",
    imgAlt: "Kids House campus",
    button: "Explore Our Campus",
  },

  facts: {
    sectionTitle: "Quick Facts",
    locationK: "Location",
    locationV: "Douala, Cameroon",
    sectionsK: "Sections",
    sectionsV: "English & French",
    levelsK: "Levels",
    levelsV: "Kindergarten + Primary",
    focusK: "Focus",
    focusV: "Strong foundation + values",
    ctaLearning: "Explore Learning",
    ctaAdmissions: "Admissions",
    ctaContact: "Contact Us",
  },

  sidebar: {
    onThisPage: "ON THIS PAGE",
    mission: "Mission & Vision",
    leadership: "Leadership",
    campus: "Campus",
    quickFacts: "Quick Facts",
    needHelpTitle: "Need help?",
    needHelpText: "Contact us for admissions and school visits.",
    contactAdmissions: "Contact Admissions",
  },
},

  schoolProfile: {
  kicker: "School and community",
  title: "School Profile",
  subtitle:
    "Kid’s House is a calm, clean, and welcoming school environment built to support every child with a positive and caring approach. We encourage families to visit, experience our community, and judge for themselves. The school highlights a successful partnership (“pairing”) with Anne Hébert School (Canada/Québec) and promotes a supportive learning culture for young children through primary level.",

  sections: {
    organizationTitle: "Organization",
    organizationText:
      "Kid’s House is supported by a dedicated administration and a qualified, dynamic, and committed team focused on children’s education and well-being. We also recognize that families sometimes face challenges, and the school can provide supportive arrangements when needed to help maintain a strong home-school relationship.",

    accreditationsTitle: "Accreditations & Membership",
    accreditationsText:
      "Kid’s House highlights a successful partnership with Anne Hébert School in Canada (Québec). (If you have formal accreditations, you can add them here later—this is the only official “membership/partnership” mentioned on the poster.)",

    schoolYearTitle: "School Year",
    schoolYearText:
      "The 2025/2026 school year begins with registration starting 07 July 2025 (Monday–Saturday, 8:00am–3:00pm). The school year is planned to start on 01 September 2025. Kid’s House also offers Holiday Classes from 28 July 2025 to 29 August 2025.",

    curriculumTitle: "Curriculum",
    curriculumIntro:
      "Kid’s House offers a complete pathway from early years to primary, with:",
    curriculumBullets: [
      "Nursery / Early Learning (including day care and nursery levels)",
      "Primary (Class 1 to Class 6)",
    ],
    curriculumOutro:
      "The program emphasizes concrete bilingualism, educational games, a calm and secure learning environment, and practical learning opportunities including access to a computer laboratory.",

    facultyTitle: "Faculty",
    facultyText:
      "Our teaching and support staff are described as highly qualified, dynamic, and dedicated to children’s education. To protect learning quality, Kid’s House maintains limited class sizes (limited number of places in classes), allowing more attention and better follow-up for each child.",

    enrollmentTitle: "Enrollment",
    enrollmentText:
      "Enrollment is limited to maintain quality and a calm learning environment. Registration opens 07 July 2025, with a limited number of places available. Returning learners may be contacted first, and families who register early may receive a discount (as noted on the poster).",

    facilitiesTitle: "Facilities",
    facilitiesIntro: "Kid’s House provides a calm and secure environment with:",
    facilitiesBullets: [
      "Well-ventilated classrooms",
      "A multimedia room",
      "An operational computer laboratory",
      "A fully covered recreation/play area",
      "Hand-washing water taps to support hygiene and safety",
    ],
  },

  campusTourTitle: "Campus Tour",
  campusTourText:
    "Come visit Kids House in Douala! Meet our team, explore our classrooms and play areas, and see how we support learning in both English and French. We’ll gladly answer your questions and guide you through admissions.",

  galleryAlt1: "Students activity",
  galleryAlt2: "Classroom activity",
},

  valuesInfographic: {
  kicker: "Values",
  items: [
    {
      title: "Global Citizenship",
      description:
        "I have a responsibility to my community and the world beyond. I actively seek to understand and respect the cultures and beliefs of others.",
      tone: "blue" as Tone,
    },
    {
      title: "Critical Thinking",
      description: "I analyze and evaluate claims to form reasoned judgments.",
      tone: "red" as Tone,
    },
    {
      title: "Curiosity",
      description: "I always ask why and understand that there is always more to learn.",
      tone: "blue" as Tone,
    },
    {
      title: "Confidence",
      description: "I boldly face challenges and communicate my ideas.",
      tone: "red" as Tone,
    },
    {
      title: "Creativity",
      description: "I use imagination to develop original ideas and express myself.",
      tone: "blue" as Tone,
    },
    {
      title: "Resilience",
      description: "I embrace failure as an opportunity to learn.",
      tone: "red" as Tone,
    },
    {
      title: "Risk Taking",
      description: "I explore new ideas and innovative strategies.",
      tone: "blue" as Tone,
    },
    {
      title: "Self Awareness",
      description:
        "I reflect on my beliefs, values, and actions to better understand how they affect me and those around me.",
      tone: "red" as Tone,
    },
  ],
},

graduateProfile: {
  kicker: "Graduate Profile",
  title: "Graduate Profile",
  intro:
    "All our Graduates due to our amazing program are efficient in highschool.",
  items: [
    {
      title: "Curiosity & Confidence",
      description:
        "Graduates eagerly explore new subjects, ideas, and experiences. They communicate clearly and confidently engage in meaningful dialogue with kindness and concern.",
    },
    {
      title: "Creativity & Critical Thinking",
      description:
        "Graduates innovate with ingenuity and solve problems by analyzing information, evaluating arguments, and synthesizing diverse perspectives.",
    },
    {
      title: "Self-Awareness & Global Citizenship",
      description:
        "Graduates prioritize holistic well-being, reflect on strengths and goals, and demonstrate empathy and prosocial behaviors that positively impact their community.",
    },
    {
      title: "Risk-Taking & Resilience",
      description:
        "Graduates embrace uncertainty with courage, viewing challenges as opportunities for growth. They thrive in dynamic environments and learn from mistakes.",
    },
  ],
},

  missionVision: {
  title: "Our Mission and Vision",

  breadcrumbAbout: "About",
  breadcrumbCurrent: "Our Mission and Vision",

  quickNav: {
    vision: "Vision",
    values: "Values",
    graduateProfile: "Graduate Profile",
  },

  vision: {
    kicker: "Vision",
    title: "Vision",
    statement: "Inspiring lifelong curiosity to solve the challenges of tomorrow.",
  },
},

      campus: {
    title: "Our Campus",
    subtitle:
      "Kid’s House provides a calm, clean, and welcoming campus designed for early learners and primary pupils. Our spaces are organized to support comfort, learning, play, and safety—so children feel secure, supported, and ready to explore every day.",

    navFacilities: "Facilities",
    navSafety: "Safety",
    navActivities: "Activities",
    navLocation: "Location",

    kicker: "Campus",

    facilitiesTitle: "Facilities",
    facilitiesText:
      "Our campus includes bright, well-ventilated classrooms that are set up for learning, creativity, and collaboration. We also offer a multimedia room and an operational computer laboratory to support digital learning in an age-appropriate way. Hygiene and daily routines are reinforced through hand-washing stations and a clean, child-friendly environment.",

    safetyTitle: "Safety",
    safetyText:
      "Safety is at the center of our school culture. Kid’s House maintains a calm and secure environment with clear routines, supervised spaces, and staff who prioritize children’s well-being. We also support healthy habits through hand-washing routines and clean shared areas, helping children learn responsibility while staying protected.",

    activitiesTitle: "Activities & Spaces",
    activitiesText:
      "Children learn best through movement and play, so we provide a fully covered recreation/play area where they can enjoy active time in comfort. Our activity spaces support group play, creativity, and discovery—helping children build confidence, social skills, and independence. From structured class activities to supervised play, the campus encourages safe exploration every day.",

    locationTitle: "Location",
  },

    leadership: {
    kicker: "ABOUT",
    title: "Leadership",
    subtitle:
      "Kids’ House is led by a caring and committed team focused on what matters most: your child’s safety, growth, and happiness. Our leadership works closely with teachers and families to create a warm, structured learning environment where children feel confident to explore, play, and learn every day. From classroom routines to learning programs and family communication, we aim for consistency, trust, and continuous improvement—so every child can thrive from kindergarten through primary school.",

    managementTitle: "School Management Team",
    managementText:
      "The Kid’s House Management Team supports the school’s daily operations and long-term development. Working in partnership with educators and parents, the team ensures that our learning programs remain strong, our facilities stay safe and welcoming, and our community continues to grow. We are committed to maintaining high standards in early childhood and primary education—while keeping Kid’s House a place where children are known, cared for, and encouraged to become their best selves.",

    adminTeamTitle: "Admin Leadership Team",
     board: {
      imageAlt: "Board of Directors",
      title: "Board of Directors",
      text: "Let's meet Kid's House Board who make the school running.",
      button: "MEET THE BOARD",
    },
  },

  historyPage: {
  applyNow: "Apply Now",

  banner: {
    kicker: "History",
    title: "History of Kid’s House",
    subtitle: "A look back at the milestones that shaped our school community.",
  },

  blocks: {
    b1Text:
      "Kid’s House began with a simple goal: create a warm, safe, and inspiring place where children learn through play and grow with confidence. From our earliest days, we built our program around care, creativity, and strong partnerships with families.",
    b1Alt1: "Early years – photo 1",
    b1Alt2: "Early years – photo 2",

    b2Text:
      "As our community grew, Kid’s House expanded learning spaces and resources to better support children’s development. Each step forward was guided by one priority: making sure every child feels seen, supported, and excited to learn.",
    b2Alt1: "First building / first classrooms",
    b2Alt2: "First cohort of learners",

    b3Text:
      "We continuously improved our environment and routines—adding age-appropriate learning areas, structured activities, and creative play experiences—while keeping a nurturing atmosphere at the heart of everything we do.",
    b3Alt1: "Outdoor play",
    b3Alt2: "Classroom learning",

    b4Text:
      "Over the years, Kid’s House introduced new learning tools and experiences—reading corners, art exploration, hands-on activities, and early skills development—while keeping our values consistent: safety, joy, and growth.",
    b4Alt1: "Milestone photo",
    b4Alt2: "Milestone photo",
    b4Alt3: "Milestone photo",
    b4Alt4: "Milestone photo",

    b5Text:
      "Our community culture strengthened through family events, celebrations, and school traditions—helping children and parents feel deeply connected to Kid’s House.",
    b5Alt1: "Community moment",
    b5Alt2: "Community event",
    b5Alt3: "Celebration / memory",

    endAlt: "Kid’s House building today",
    endText:
      "Today, Kid’s House stands as a reflection of years of dedication—built on trust, care, and a shared belief that early childhood is the foundation for lifelong learning.",
  },

  today: {
    title: "Kid’s House Today",
    text:
      "Today, Kid’s House continues to grow with purpose—strengthening early learning, supporting families, and creating a safe environment where every child can thrive.",
    alt1: "Kid’s House today – view 1",
    alt2: "Kid’s House today – view 2",
  },
},

  applicationProcess: {
  kicker: "ADMISSIONS",
  title: "Application Process",
  subtitle: "(K2 to Grade 12)",

  intro:
    "We’re excited that you’re considering our school for your child’s education. Our application process is designed to be clear and supportive, so you have everything you need as you begin.",

  stepsTitle: "Step-by-Step Application Process",
  steps: [
    "Fill out the inquiry/contact form",
    "Gather required documents",
    "Complete and submit the enrollment form",
    "Admissions decision",
  ],

  s1Title: "1. Fill out the inquiry form",
  s1Text:
    "Please contact our admissions office by filling out the form at the link below.",
  s1Link: "Please fill the Contact Form",

  s2Title: "2. Gather required documents",
  s2Text:
    "Before starting the application, please ensure you have the following documents ready:",
  docs: [
    { label: "Proof of Date of Birth", desc: "Birth certificate (or equivalent)" },
    { label: "School Records", desc: "Report cards/transcripts (as applicable)" },
    { label: "Recent Photographs", desc: "Passport-size photos (if required)" },
    { label: "Health Record", desc: "Vaccination/health form (if required)" },
    { label: "Guardian/Parent ID", desc: "Valid identification" },
  ],

  s3Title: "3. Complete the Enrollment Form",
  s3Text:
    "After steps 1 and 2, our admissions team will share the enrollment form and guide you through submission.",

  s4Title: "4. Admissions Decision",
  s4Text:
    "Following review (and interview/placement if needed), you’ll receive an admissions decision and next steps for registration.",

  enrollTitle: "Enrollment & Registration",
  enrollText:
    "Upon acceptance, finalize registration by submitting any remaining documents and paying applicable enrollment fees. Detailed instructions will be provided by our office.",

  contactTitle: "Contact Us",
  contactText: "If you have any questions, please reach out:",
  contactEmail: "Email",
  contactPhone: "Phone / WhatsApp",

  ctaTitle: "Contact Form",
  ctaText: "Please contact our admissions office by filling out the contact form.",
  ctaButton: "Contact Form",

  photoAlt1: "Students",
  photoAlt2: "Learning activity",
},

  about: {
    quickNavTitle: "Quick Navigation",
    aboutHome: "About Kids’ House",
    mission: "Our Mission and Vision",
    leadership: "Leadership",
    profile: "School Profile",
    campus: "Our Campus",
    calendar: "Calendar",
    childProtection: "Child Protection",
    boardMembers: "Board Members",
    history: "History",
    awards: "Awards & Accreditations",
  },

  childProtection: {
    kicker: "CHILD PROTECTION POLICY",
    title: "Child Protection Policy",
    subtitle:
      "Kids’ House is committed to providing a safe, respectful, and nurturing environment for every child.",

    intro1:
      "At Kids’ House, safeguarding children is a shared responsibility. We work closely with families, staff, and the wider community to promote child safety, prevent harm, and respond quickly and responsibly to any concern.",
    intro2:
      "This page provides an overview of our child protection approach, reporting steps, and what families can expect from us. You can replace all text with your official policy wording later.",

    manual: {
      title: "Child Protection Policy Manual",
      text: [
        "At Kids’ House, the safety and well-being of children is our top priority.",
        "This manual outlines our safeguarding approach, reporting procedures, and responsibilities for staff and families.",
        "To access the full Child Protection Policy Manual, click below:",
      ],
      buttonLabel: "Child Protection Policy Manual",
    },

    photos: {
      leftAlt: "Kids at Kids’ House",
      rightAlt: "Teacher supporting children",
    },

    sections: {

      abuseTitle: "What is child abuse?",
      abuseText:
        "Child abuse is any action or neglect that harms a child’s physical, emotional, or psychological well-being. Abuse can occur in different forms:",
      abuseBullets: [
        {
          label: "Neglect",
          desc: "Not meeting a child’s basic physical, medical, emotional, or supervision needs.",
        },
        {
          label: "Emotional abuse",
          desc: "Persistent patterns that harm a child’s self-worth (threats, humiliation, isolation).",
        },
        { label: "Physical abuse", desc: "Intentional physical harm or injury." },
        { label: "Sexual abuse", desc: "Any sexual contact or exploitation." },
        {
          label: "Bullying & cyberbullying",
          desc: "Repeated aggression in person or online.",
        },
      ],

      reportingTitle: "Our reporting process",
      reportingText:
        "Any staff member who observes or receives a concern should report it immediately to the Child Protection Lead (or designated safeguarding team member). We act quickly, document concerns, and follow confidentiality principles while prioritizing the child’s best interests.",
      reportingSteps: [
        "Receive a concern (student disclosure, observation, or report).",
        "Record key facts accurately (who/what/when/where).",
        "Report to the Child Protection Lead the same day.",
        "Assess risk and take immediate steps if urgent safety is needed.",
        "Engage parents/guardians where appropriate and safe.",
        "Refer to local services/authorities when necessary.",
      ],

      afterTitle: "Steps after confirmation of abuse",
      afterText:
        "If a case is confirmed, Kids’ House takes immediate action to ensure safety, supports the child and family, and coordinates with the appropriate services. Follow-up may include check-ins, learning adjustments, and ongoing safeguarding oversight.",

      proactiveTitle: "Proactive measures",
      proactiveBullets: [
        { label: "Safe recruitment", desc: "Reference checks and background checks where applicable." },
        { label: "Staff training", desc: "Safeguarding awareness and response training." },
        { label: "Student guidance", desc: "Age-appropriate lessons on boundaries and seeking help." },
        { label: "Code of conduct", desc: "Clear professional expectations for all adults on campus." },
        { label: "Parent partnership", desc: "Open communication and safety guidance." },
      ],

      cyberTitle: "Technology and cyberbullying",
      cyberText:
        "We promote responsible technology use and teach children safe behavior online (age-appropriate). We encourage families to supervise devices at home and to report any online concerns.",

      safeTitle: "A safe haven for every child",
      safeText:
        "Kids’ House is committed to creating a safe, welcoming environment for every child. We take all concerns seriously and respond with care, respect, and urgency.",

      contactTitle: "Contact us",
      contactText:
        "For questions or to report a concern, please contact the Kids’ House Child Protection Lead.",

      teamTitle: "Child Protection Team Members",
        teamRows: [
    { name: "Child Protection Lead (Judith Guibasi)", location: "Administration Office" },
    { name: "Designated Safeguarding Staff (Njuichange Divine)", location: "Primary Wing" },
    { name: "Designated Safeguarding Staff (Djomo Liliane)", location: "Kindergarten Wing" },
  ],
    },
  },
  admissionsFaq: {
  kicker: "ADMISSIONS",
  title: "Frequently Asked Questions (FAQ)",
  subtitle: "Find quick answers to common questions about admissions, curriculum, and school life.",

  quickNav: {
    admission: "Admission",
    criteria: "Admissions Criteria",
    process: "Application Process",
    campus: "Our Campus",
    fees: "Tuition & Fees",
    store: "School Store",
    faqs: "FAQs",
  },

  faqs: [
    {
      q: "Who owns the school?",
      a: "Kids’ House is a community-focused school. The founder and school leadership oversee daily operations, guided by the school’s mission and values.",
    },
    {
      q: "Is the school only for Cameroonian students?",
      a: "No. Kids’ House welcomes children from diverse nationalities and backgrounds, and we celebrate multicultural learning.",
    },
    {
      q: "What curriculum do you follow?",
      a: "We provide a balanced, child-centered program focused on strong foundations in literacy, numeracy, creativity, and social development.",
    },
    {
      q: "Do you offer after-school activities?",
      a: "Yes. We offer age-appropriate enrichment activities (subject to availability) such as arts, sports, and clubs.",
    },
    {
      q: "Can families schedule a tour?",
      a: "Absolutely. Families are encouraged to schedule a visit to meet staff, see classrooms, and ask questions about the program.",
    },
  ],
},

  stillQuestions: {
  title: "Still have questions?",
  text1: "We’re happy to help with admissions, fees, or programs.",
  text2: "Contact us and we’ll respond as soon as possible.",
  phoneLabel: "Phone",
  emailLabel: "Email",
  buttonLabel: "Contact Us",
},

  common: {
    admissionsCta: "Admissions",
  },

  learning: {
    title: "Learning",
    subtitle: "Programs, outcomes, and student support.",
    early: "Early Years",
    primary: "Primary",
    bilingual: "Bilingual Sections",
    activities: "Activities",
  },

  home: {
    // Welcome section
    welcomeKicker: "Welcome",
    welcomeTitle: "Message from the Founder & Director",
    welcomeDesc: "A personal welcome to families joining Kids House in Douala.",

    founderName: "Guibasi Wasibamo Judith Joelle",
    founderRole: "Founder & Director, Kids House",
    founderMeta: "Douala, Cameroon",
    since: "Since 2012",

    msgEn1:
      "Welcome to Kids House. We created this school with one promise: every child deserves a strong start—academically and emotionally. Our classrooms are calm, structured, and joyful. We help children build confidence, language, and strong foundations through daily routines, play-based learning, and caring guidance.",

    msgEn2:
      "We believe in positive discipline, personal follow-up, and strong collaboration with parents.",

    // Pills
    pill1: "Two Sections: English & French",
    pill2: "Safe routines & clear expectations",
    pill3: "Qualified, caring educators",
    pill4: "Small-class support",
    pill5: "Learning through play + projects",
    pill6: "Parent partnership",

    signatureLine: "“A positive view of each child.”",

    // CTAs
    ctaVisit: "Schedule a Visit",
    ctaBilingual: "Explore English & French",

    // Why section
    whyKicker: "Admissions",
    whyTitle: "Why choose our school?",
    why1: "Qualified and caring teachers",
    why2: "Strong learning outcomes",
    why3: "Safe routines and clear expectations",
    why4: "Small class support and attention",
    why5: "Activities and enrichment",
    why6: "Parent communication that matters",
    whySub: "Replace with 1–2 lines explaining this point.",

    // About section
    aboutKicker: "About",
    aboutTitle: "About our school",
    aboutText:
      "Kids House is a bilingual (English & French) primary and kindergarten school in Douala, Cameroon. Since 2012, we’ve helped young learners build strong foundations in literacy, numeracy, and character in a safe, calm, and structured environment. We value respectful discipline, caring educators, and a strong partnership with parents—because every child deserves the support to grow with confidence.",

    readMore: "Read more",
    apply: "Apply",

    // Facts section
    factsKicker: "Quick facts",
    factsTitle: "At a glance",
    factFounded: "Founded",
    factGrades: "Grades",
    factCampus: "Campus",
    factActivities: "Activities",
  },
};

export type Messages = typeof EN;

export const FR: Messages = {
  nav: {
    about: "À propos",
    admissions: "Admissions",
    learning: "Apprentissage",
    calendar: "Calendrier",
    contact: "Contact",
  },
  quickLinks: {
  admissionsTitle: "Admissions",
  admissionsDesc: "Comment s’inscrire, documents, frais.",
  calendarTitle: "Calendrier",
  calendarDesc: "Dates importantes & événements.",
  childProtectionTitle: "Protection de l’enfant",
  childProtectionDesc: "Sécurité & signalement.",
  learningTitle: "Apprentissage",
  learningDesc: "Programmes & accompagnement.",
},

  campusHero: {
  crestAlt: "Logo de l’école",

  line1:
    "BP 4672 Douala • Tél : +237 677331043 • WhatsApp : +237 699038487 • Email : tchuileng2007@gmail.com",
  courierLabel: "Adresse courrier :",
  courierAddress:
    "Situé à Kambo Boko, lieu-dit 1ère entrée Cogefar, P14, Douala, – République du Cameroun, Afrique centrale",

  childProtection: "Politique de protection de l’enfant",
  questions: "Des questions ?",
  paymentTerms: "Conditions de paiement",

  badgeTitle: "Notre campus",
  badgeDesc: "Des espaces d’apprentissage sûrs et modernes.",

  social: {
    facebook: "Facebook",
    twitter: "Twitter",
    youtube: "YouTube",
    instagram: "Instagram",
    linkedin: "LinkedIn",
  },
},

  footer: {
  schoolTitle: "Notre école",
  schoolDesc:
    "Kids House est une école bilingue (Anglais & Français) de maternelle et primaire à Douala. Nous aidons les enfants à devenir confiants grâce à des routines sûres, des éducateurs bienveillants, de solides bases et un partenariat étroit avec les familles.",
  quickLinksTitle: "Liens rapides",
  policiesTitle: "Politiques",
  newsletterTitle: "Newsletter",
  newsletterDesc: "Recevez les actualités et annonces de l’école.",
  rights: "Tous droits réservés.",
  privacy: "Politique de confidentialité",
  payments: "Conditions de paiement",
  childProtection: "Protection de l’enfant",
},

  hero: {
  badge: "Douala • Maternelle & Primaire",
  title: "Une école fondée sur l’excellence, le soin et la communauté.",
  subtitle:
    "Là où la curiosité devient confiance.\nKids House est une école bilingue (Anglais/Français) à Douala, offrant de solides apprentissages, des éducateurs bienveillants et un environnement calme pour chaque enfant.",
  ctaApply: "Candidater / Admissions",
  ctaAbout: "À propos de l’école",
  stats: {
    grades: "Niveaux",
    teachers: "Enseignants",
    campus: "Campus",
    learning: "Apprentissage",
    gradesV: "K–P6",
    teachersV: "Qualifiés",
    campusV: "Sécurisé",
    learningV: "Solide",
  },
},

menu: {
  explore: "Découvrir →",
  bottomText: "Envie d’une visite ou d’infos rapides ? Ajoutez ici votre CTA WhatsApp/téléphone.",
  contactCta: "Contact →",

  groups: {
    about: "À propos",
    admissions: "Admissions",
    learning: "Apprentissage",
  },

  featured: {
    aboutFeatured: { title: "Découvrir Kids House", subtitle: "Mission, campus, direction et valeurs." },
    admissionsFeatured: { title: "Rejoindre Kids House", subtitle: "Démarrer l’inscription et planifier une visite." },
    learningFeatured: { title: "Apprendre à Kids House", subtitle: "Programmes et accompagnement." },
  },

  items: {
    aboutSchool: { title: "À propos de Kids’ House", desc: "Qui nous sommes et nos valeurs." },
    missionVision: { title: "Mission & Vision", desc: "Notre objectif éducatif." },
    leadership: { title: "Direction", desc: "Rencontrez l’équipe de direction." },
    campus: { title: "Notre campus", desc: "Cadre d’apprentissage et installations." },
    history: { title: "Notre histoire", desc: "Comment Kids House a commencé." },
    childProtection: { title: "Protection de l’enfant", desc: "Politique de sécurité et protection." },

    apply: { title: "S’inscrire", desc: "Démarrer la procédure d’admission." },
    criteria: { title: "Critères d’admission", desc: "Conditions et éligibilité." },
    process: { title: "Procédure d’inscription", desc: "Étapes et documents nécessaires." },
    fees: { title: "Frais de scolarité", desc: "Frais, paiement et infos clés." },
    faqs: { title: "FAQ", desc: "Réponses aux questions fréquentes." },

    learningHome: { title: "Aperçu des programmes", desc: "Explorer les programmes et objectifs." },
    earlyYears: { title: "Petite enfance", desc: "Pré-K et développement précoce." },
    primary: { title: "Primaire", desc: "Bases solides du CP au CM." },
    bilingual: { title: "Sections bilingues", desc: "Parcours Anglais et Français." },
  },
},

  bilingualSectionsPage: {
  kicker: "APPRENTISSAGE",
  title: "Sections bilingues",
  subtitle: "Programmes Anglais & Français (Kids House)",

  intro:
    "Kids House est fièrement bilingue. Les familles peuvent choisir entre notre section anglaise et notre section française. Les deux sections partagent les mêmes valeurs : un cadre d’apprentissage sûr, des bases solides, des éducateurs bienveillants et un regard positif sur chaque enfant.",

  highlightEnglishTitle: "Section anglaise",
  highlightEnglishCta: "Découvrir →",
  highlightEnglishDesc:
    "Parcours Nursery + Primary avec une forte base en lecture, mathématiques et développement du caractère.",
  highlightEnglishBullets: [
    "Pre-Nursery / Nursery (petite enfance)",
    "Primary : Class 1 à Class 6",
    "Apprentissage pratique, STEM & activités créatives",
  ],

  highlightFrenchTitle: "Section française",
  highlightFrenchCta: "Découvrir →",
  highlightFrenchDesc:
    "Cycle maternel + primaire avec des routines structurées et des fondamentaux solides.",
  highlightFrenchBullets: [
    "Crèche / Maternelle (Petite, Moyenne, Grande Section)",
    "Primaire : SIL → Cours Moyen (CM)",
    "Progression + discipline positive + confiance",
  ],

  flyerTitle: "Aperçu du programme (Flyer)",
  flyerAlt: "Fiche d’information bilingue Kids House",

  englishTitle: "Section anglaise",
  englishText:
    "La section anglaise accompagne l’enfant de la petite enfance au primaire, en développant des bases solides en lecture, écriture, mathématiques, sciences et compétences sociales.",
  englishLevelsTitle: "Niveaux",
  englishLevelsBullets: ["Pre-Nursery / Nursery", "Primary : Class 1 → Class 6"],
  englishLoveTitle: "Ce que les familles apprécient",
  englishLoveBullets: [
    "Enseignement de qualité et personnel attentionné",
    "Environnement calme et sécurisé",
    "Petits effectifs et accompagnement personnalisé",
  ],

  frenchTitle: "Section française",
  frenchText:
    "La section française accompagne l’enfant de la petite enfance jusqu’au primaire, avec des bases solides, de bonnes habitudes de travail et une progression régulière adaptée à l’âge.",
  frenchLevelsTitle: "Niveaux",
  frenchLevelsBullets: [
    "Crèche / Maternelle : Petite, Moyenne, Grande Section",
    "Primaire : SIL → CM (selon l’organisation de l’établissement)",
  ],
  frenchStrengthsTitle: "Points forts",
  frenchStrengthsBullets: [
    "Encadrement sérieux et bienveillant",
    "Apprentissages progressifs et structurés",
    "Suivi pédagogique et discipline positive",
  ],

  chooseTitle: "Comment choisir la bonne section",
  chooseText:
    "Beaucoup de familles choisissent selon la langue parlée à la maison ou le parcours souhaité. Si vous hésitez, nous pouvons vous conseiller rapidement et recommander la meilleure option pour votre enfant.",

  helpTitle: "Besoin d’aide ?",
  helpText:
    "Contactez-nous pour en savoir plus sur les admissions, les affectations et les détails des programmes.",
  helpButton: "Nous contacter",

  onThisPage: "SUR CETTE PAGE",

  ctaTitle: "L’éducation bilingue à Kids House",
  ctaText:
    "Choisissez la section anglaise ou française : les deux offrent un environnement bienveillant, des bases solides et des enseignants attentifs.",
  ctaButton: "Admissions",

  photoEnglishAlt: "Classe de la section anglaise",
  photoFrenchAlt: "Classe de la section française",
},

  grade5Page: {
  kicker: "ÉCOLE PRIMAIRE",
  title: "CM1 (Grade 5)",
  subtitle: "",

  h1: "Passer du cycle inférieur au cycle supérieur à Kids House",
  p1:
    "Le passage au cycle supérieur (niveaux 3 à 5) à Kids House est une étape importante dans le parcours scolaire d’un enfant. Durant cette période, les élèves abordent des apprentissages plus exigeants tout en développant les compétences et la confiance nécessaires pour le collège.",

  expectTitle: "À quoi s’attendre",
  expectText:
    "Le cycle supérieur implique des attentes académiques plus élevées et davantage d’autonomie. Notre programme, basé sur les standards AERO Common Core, favorise une réflexion plus approfondie dans toutes les matières.",

  mathLabel: "Mathématiques",
  mathText:
    "Math In Focus encourage la résolution de problèmes et l’apprentissage visuel, avec des notions comme les fractions, les décimales et la géométrie.",

  literacyLabel: "Lecture & écriture",
  literacyText:
    "Into Reading renforce la compréhension, l’expression écrite et le plaisir durable de lire.",

  scienceLabel: "Sciences",
  scienceText:
    "Alignés sur les Next Generation Science Standards, les élèves explorent des thèmes comme les écosystèmes et la physique grâce à des activités pratiques et une démarche d’investigation.",

  digitalTitle: "Développer les compétences numériques",
  digitalText:
    "La technologie est intégrée aux cours. Les élèves utilisent des outils numériques pour des jeux mathématiques, des recherches et des travaux collaboratifs—développant une culture numérique essentielle.",

  leadersTitle: "Grandir comme leaders",
  leadersIntro: "Nous mettons l’accent sur le caractère et le leadership :",
  leadersBullets: [
    "Les élèves prennent des rôles dans les projets de groupe et les activités de classe",
    "Élections mensuelles pour les responsabilités de classe",
    "Prise de parole en public via discours et présentations",
  ],
  leadersOutro:
    "Ils mènent aussi des actions de service communautaire—soutien à des centres de protection de la faune, aide à des orphelinats, collectes pour des enfants malades—favorisant l’empathie et l’ouverture au monde.",

  envTitle: "Un environnement d’apprentissage dynamique",
  envIntro: "Nos salles de classe sont pensées pour la collaboration et la créativité, avec :",
  envBullets: [
    "Assises flexibles et outils technologiques modernes",
    "Apprentissage par projets dans plusieurs matières",
    "Programmes spécialisés en STEM, arts et langues",
  ],
  envOutro: "Ces opportunités aident les élèves à découvrir de nouvelles passions et des compétences concrètes.",

  beyondTitle: "Au-delà de la salle de classe",
  beyondText:
    "Entre sports et clubs, les élèves restent actifs et engagés. Les compétitions et activités parascolaires développent l’esprit d’équipe, le leadership et la fierté scolaire.",

  parentsTitle: "Travailler avec les parents",
  parentsText:
    "Nous savons que le lien école-famille est essentiel. Kids House propose :",
  parentsBullets: [
    "Conseils de travail et règles pour les devoirs",
    "Occasions de bénévolat en classe et participation aux événements",
  ],
  parentsOutro: "Ensemble, nous soutenons la réussite et l’épanouissement de chaque enfant.",

  nextTitle: "Prêt pour la suite ?",
  nextText:
    "La transition vers le cycle supérieur à Kids House va au-delà des cours : elle construit la confiance, la curiosité et le caractère. Nos élèves sont prêts pour le collège, et pour le monde.",

  ctaTitle: "CM1 (Grade 5)",
  ctaText:
    "Ensemble, développons le potentiel de votre enfant et mettons-le sur la voie de la réussite !",
  ctaButton: "Nous contacter",

  photoLeftAlt: "Élèves de CM1",
  photoRightAlt: "Activité d’apprentissage en CM1",
},

  upperElementaryPage: {
  bannerKicker: "ÉCOLE PRIMAIRE",
  bannerTitle: "Primaire supérieur",
  bannerSubtitle: "CM1 - CM2 (Grade 3 - Grade 4)",

  p1:
    "Lorsque votre enfant passe du primaire inférieur au primaire supérieur, nous sommes ravis de faire ce chemin avec vous. Au Primaire supérieur (Grades 3 à 5), nous développons l’autonomie et l’esprit critique. Les élèves passent progressivement de « apprendre à lire » à « lire pour apprendre », une étape clé de leur parcours. À Kids House, nous mettons ce moment à profit en formant des élèves complets, dotés des bases nécessaires pour la suite de leur scolarité et pour la vie.",

  h2a: "Points forts du programme : éveiller l’esprit et élargir les horizons",
  p2:
    "Notre programme, riche et concret, est adapté aux besoins scolaires et personnels de chaque élève. Nous renforçons les apprentissages en mathématiques, lecture-écriture et sciences, en nous appuyant sur des ressources éprouvées. Les contenus sont ajustés pour répondre aux standards (type AERO) et intègrent la technologie ainsi qu’une approche par investigation afin d’améliorer l’engagement et la compréhension.",

  h2b: "Caractère et leadership : former les leaders de demain",
  p3:
    "À Kids House, l’éducation ne se limite pas aux résultats académiques. Nos valeurs — éthique, responsabilité et citoyenneté mondiale — se retrouvent dans chaque activité. Nous encourageons le leadership et l’implication communautaire pour que nos élèves réussissent à l’école tout en devenant des citoyens exemplaires.",

  h2c: "Un environnement dynamique : collaboration et innovation",
  p4:
    "Dans un monde qui évolue rapidement, la collaboration et le travail d’équipe sont essentiels. Nos classes de primaire supérieur favorisent l’innovation et les projets en groupe, où les élèves résolvent ensemble des problèmes concrets. Nos initiatives (STEM, arts, langues, etc.) préparent les élèves aux défis de l’avenir.",

  h2d: "Activités extrascolaires : explorer, s’impliquer, réussir !",
  p5b: "L’apprentissage ne s’arrête pas à la porte de la classe !",
  p5:
    "Nos activités extrascolaires permettent aux élèves d’explorer leurs passions et de développer de nouvelles compétences. Club d’échecs, ballet classique, taekwondo, théâtre musical… il y en a pour tous les goûts !",
  p6:
    "Ces activités renforcent l’esprit d’équipe, la créativité et la forme physique, tout en enrichissant l’expérience scolaire. Contactez-nous pour les détails (frais et nombre maximum de participants).",

  h2e: "Ressources pour les parents : un partenariat pour la réussite",
  p7:
    "À Kids House, nous avons des attentes élevées et un programme exigeant, conçu pour stimuler et inspirer. Les devoirs prolongent les apprentissages en classe et permettent aux élèves de s’entraîner. Nous encourageons les parents à accompagner la progression scolaire de leur enfant et à s’impliquer dans la vie de l’école.",
  p8:
    "Dans le cadre d’une initiative globale, toutes les classes utilisent Google Classroom pour renforcer le lien école-maison, faciliter l’accès aux ressources et permettre aux familles de suivre l’apprentissage de leur enfant.",

  h2f: "Témoignages : des histoires de réussite",
  p9:
    "Ne nous croyez pas sur parole ! Découvrez les parcours et réussites de nos élèves, ainsi que les retours des parents sur l’impact positif de Kids House. Ces témoignages reflètent notre engagement pour l’excellence et l’environnement bienveillant que nous offrons.",

  h2g: "Rejoignez Kids House !",
  p10:
    "Prêt(e) à franchir une nouvelle étape dans la scolarité de votre enfant ? Explorez les nombreuses opportunités offertes par notre programme de primaire supérieur à Douala. Ensemble, préparons-le à un avenir brillant et réussi !",

  contactLink: "Contactez-nous dès aujourd’hui",
  contactTail: "pour en savoir plus et rejoindre notre belle communauté scolaire !",

  ctaTitle: "Primaire supérieur",
  ctaText:
    "Prêt(e) à franchir une nouvelle étape dans la scolarité de votre enfant ? Découvrez les nombreuses opportunités qui l’attendent. Ensemble, préparons-le à un avenir brillant et réussi !",
  ctaButton: "Nous contacter",

  photoLeftAlt: "Élèves du primaire supérieur",
  photoRightAlt: "Activité d’apprentissage au primaire supérieur",
},

  lowerElementaryPage: {
  kicker: "ÉCOLE PRIMAIRE",
  title: "Cycle Élémentaire (1)",
  subtitle: "Maternelle - CE2",

  quickNav: {
    learning: "Apprentissage",
    earlyChildhood: "Petite enfance",
    elementarySchool: "École primaire",
    studentSupport: "Soutien aux élèves",
    serviceLearning: "Apprentissage par le service",
  },

  intro:
    "À Kids House, nous croyons qu’une base scolaire solide est la clé d’un avenir réussi. Notre programme du cycle élémentaire accompagne les jeunes apprenants dans un environnement chaleureux et stimulant, où la curiosité est encouragée et où apprendre devient une aventure joyeuse.",

  curriculumTitle: "Découvrir notre programme",
  curriculumP1:
    "Au cycle élémentaire, nous prolongeons les acquis de la maternelle en permettant aux enfants de jouer, d’explorer et de collaborer avec leurs camarades. Nos routines, soigneusement établies, favorisent un comportement positif pour apprendre. L’immersion en anglais aide les enfants à enrichir leur vocabulaire et à exprimer leurs idées. Nous les encourageons à poser des questions, car chaque question ouvre la porte à de nouveaux apprentissages pour toute la classe.",
  curriculumP2:
    "Nos matières principales — lecture, écriture, mathématiques, sciences et sciences sociales — sont conçues pour s’articuler avec des domaines intégrés comme l’art, la musique et l’éducation physique. Les activités pratiques et l’apprentissage par le jeu rendent les apprentissages à la fois efficaces et agréables.",

  readingTitle: "Lecture et langage",
  readingText:
    "Nous utilisons le programme Journeys pour développer les compétences essentielles en lecture. Les élèves apprennent les bases phonétiques pour décoder les mots, puis progressent vers une lecture plus autonome axée sur la compréhension. L’écriture est intégrée aux expériences vécues : les enfants écrivent à partir d’événements concrets plutôt que de notions abstraites. Cette approche pratique développe leur maîtrise de la langue et leur capacité à communiquer avec clarté.",

  mathTitle: "Mathématiques",
  mathText:
    "Notre enseignement des mathématiques s’appuie sur Math in Focus (Singapore Math). Ce programme met l’accent sur la résolution de problèmes à travers des situations riches en langage, et couvre des notions allant des nombres de base aux opérations plus complexes jusqu’à 100. Les enfants explorent aussi le temps, les mesures, la géométrie et la statistique, dans une approche ludique et motivante.",

  integratedTitle: "Domaines d’apprentissage intégrés",
  integratedText:
    "En plus des matières principales, nos élèves bénéficient d’apprentissages intégrés en arts, musique et éducation physique. Nous pensons que les expériences concrètes et l’apprentissage par le jeu sont essentiels pour une éducation complète et équilibrée.",

  characterTitle: "Développement du caractère",
  characterText:
    "À Kids House, nous mettons autant l’accent sur les compétences socio-émotionnelles (SEL) que sur la réussite scolaire. Nos actions visent à transmettre des valeurs comme le respect, la responsabilité et la bienveillance. Grâce à des activités comme le “Circle Time”, les élèves apprennent à exprimer leurs idées et à résoudre des problèmes ensemble, dans un climat de classe positif. Notre méthode “Think-Pair-Share” encourage l’écoute active et un dialogue respectueux, renforçant l’esprit de communauté.",

  dynamicTitle: "Un environnement d’apprentissage dynamique",
  dynamicText:
    "Nos classes sont pensées pour favoriser la créativité, la collaboration et la concentration. Avec un faible ratio élèves/enseignant (actuellement 12:1), chaque enfant bénéficie d’une attention personnalisée de la part d’éducateurs et d’assistants engagés. Les espaces d’apprentissage s’adaptent à différents moments : enseignement guidé ou exploration par le jeu.",

  extracurricularTitle: "Activités extrascolaires",
  extracurricularText:
    "Nous croyons que l’éducation dépasse la salle de classe. Nos élèves ont accès à diverses activités : théâtre, football, danse, taekwondo, yoga et coding. Nous encourageons également l’implication des parents via le comité PTA, où les familles peuvent partager leurs compétences et participer à la vie communautaire.",

  parentsTitle: "Ressources pour les parents",
  parentsIntro:
    "Accompagner l’apprentissage à la maison est essentiel. Voici quelques idées pour rendre la lecture et les mathématiques plus agréables :",

  readingCardTitle: "Lire ensemble",
  readingBullets: [
    "Faites de la lecture un moment agréable à partager : lisez à tour de rôle, ou laissez votre enfant vous lire.",
    "Discutez des images, chantez des chansons et inventez des rimes.",
    "Montrez l’exemple : partagez vos lectures et échangez sur les histoires ensemble.",
  ],

  mathCardTitle: "Explorer les maths",
  mathBullets: [
    "Profitez du quotidien pour repérer les nombres et les formes à la maison et dans le quartier.",
    "Jouez à compter et créez des motifs (claquements, mouvements, objets).",
    "Racontez des petites histoires de maths et comparez des quantités en lien avec les routines.",
  ],

  joinTitle: "Rejoignez cette belle aventure !",
  joinText:
    "Nous vous invitons à découvrir l’univers enrichissant du cycle élémentaire à Kids House. Ici, votre enfant posera les bases d’un apprentissage durable dans un environnement bienveillant et inspirant.",

  readyTextBeforeLink: "Prêt(e) à commencer cette aventure ?",
  readyLinkText: "Contactez-nous dès aujourd’hui",
  readyTextAfterLink:
    "pour en savoir plus sur notre programme et planifier une visite. Construisons ensemble un avenir meilleur !",

  ctaTitle: "Cycle Élémentaire (1)",
  ctaText:
    "Ensemble, développons le potentiel de votre enfant et mettons-le sur la voie de la réussite !",
  ctaButton: "Nous contacter",

  photoLeftAlt: "Élèves du cycle élémentaire",
  photoRightAlt: "Activité d’apprentissage au cycle élémentaire",
},

  primaryPage: {
  kicker: "APPRENTISSAGE",
  title: "École primaire",
  subtitle: "",

  intro:
    "L’école primaire de Kids House vise à accompagner des élèves issus de milieux et d’expériences variés afin qu’ils puissent avoir un impact positif dans leur communauté. Nous valorisons un partenariat solide entre la famille et l’école, ainsi qu’un climat chaleureux et bienveillant où les élèves collaborent, pensent de manière créative, raisonnent avec esprit critique et communiquent efficacement.",

  tiles: {
    lowerTitle: "Primaire – Cycle 1",
    lowerSubtitle: "Maternelle – 2e année",
    lowerAlt: "Primaire – Cycle 1",

    upperTitle: "Primaire – Cycle 2",
    upperSubtitle: "3e – 4e année",
    upperAlt: "Primaire – Cycle 2",

    grade5Title: "5e année",
    grade5Subtitle: "",
    grade5Alt: "5e année",
  },

  ctaTitle: "École primaire",
  ctaText:
    "Prêt(e) à franchir la prochaine étape dans l’éducation de votre enfant ? Découvrez les nombreuses opportunités offertes par notre programme primaire. Ensemble, préparons-le à un avenir brillant et réussi !",
  ctaButton: "Nous contacter",
},

  preK34Page: {
  quickNav: {
    learning: "Apprentissage",
    earlyYears: "Petite section",
    preK2: "Pré-K2",
    preK34: "Pré-K3 & Pré-K4",
  },

  banner: {
    kicker: "PETITE ENFANCE",
    title: "Pré-K3 & Pré-K4",
    subtitle: "Éveiller les jeunes esprits",
  },

  main: {
    title: "Éveiller les jeunes esprits pour un avenir lumineux",
    intro:
      "À Kids House, nous pensons que les premières années de la vie d’un enfant sont essentielles pour poser les bases de la réussite scolaire et sociale. Notre programme accueille les enfants de 3 à 4 ans, avec un focus sur la Pré-scolarisation (K3) et la Pré-maternelle (K4). Les recherches montrent qu’une éducation préscolaire de qualité influence fortement le développement cognitif et social, et prépare l’enfant à apprendre tout au long de sa vie.",

    philosophyTitle: "Notre philosophie éducative",
    philosophyText:
      "Nous adoptons une approche centrée sur le jeu et l’exploration, où les enfants participent à des activités qui encouragent la curiosité et la créativité. Notre environnement bienveillant, inclusif et diversifié crée un sentiment d’appartenance et permet à chaque enfant de s’épanouir. Notre programme vise à éveiller la curiosité et à développer le plaisir d’apprendre grâce à des projets concrets et au jeu collaboratif.",

    curriculumTitle: "Aperçu du programme",
    curriculumIntro: "Notre programme couvre les domaines essentiels suivants :",
    subjects: [
      "Langage / Pré-lecture",
      "Mathématiques",
      "Sciences",
      "Éveil / Découverte du monde",
      "Arts plastiques",
      "Musique",
      "Éducation physique",
    ],
    curriculumText:
      "Les apprentissages sont intégrés au travers de thèmes, afin de relier les notions entre elles. Par exemple, un thème sur « les saisons » peut inclure des histoires, des expériences scientifiques et des activités artistiques. Les activités extérieures (comme le jardinage) renforcent l’apprentissage par l’expérience, et nos activités STEM introduisent les bases des sciences, de la technologie et des mathématiques dans un contexte ludique.",

    goalsTitle: "Objectifs de développement",
    goalsIntro: "Notre programme vise des objectifs précis :",
    goals: [
      { label: "Compétences sociales", desc: "Coopérer et partager" },
      { label: "Intelligence émotionnelle", desc: "Reconnaître et exprimer ses émotions" },
      { label: "Compétences cognitives", desc: "Résoudre des problèmes et développer l’esprit critique" },
      { label: "Développement physique", desc: "Motricité fine et globale" },
    ],
    goalsText:
      "Ces objectifs guident nos pratiques pédagogiques et nos activités quotidiennes, afin de prioriser le développement de chaque enfant.",

    envTitle: "Un environnement d’apprentissage stimulant",
    envText:
      "Nos classes sont sûres, attrayantes et stimulantes, avec des espaces variés et des zones extérieures (jardins, aire de jeux). Des activités comme l’exploration de la nature et le jardinage sensibilisent les enfants à l’environnement et à la responsabilité, tout en favorisant la découverte active.",

    staffTitle: "Une équipe éducative engagée",
    staffText:
      "Nos éducateurs sont hautement qualifiés, formés à la petite enfance et expérimentés. Nous maintenons un faible ratio élèves-enseignant de 6 pour 1, ce qui permet un suivi personnalisé et des relations plus solides entre enseignants et enfants.",

    parentsTitle: "Un partenariat avec les parents",
    parentsText:
      "À Kids House, nous considérons les parents comme des partenaires essentiels. Nous proposons plusieurs formes d’implication : participation en classe, organisation d’activités et rencontres parents-enseignants.",

    diversityTitle: "Diversité et esprit communautaire",
    diversityText:
      "Notre programme reflète la diversité de nos familles et intègre des perspectives multiculturelles dans les apprentissages. Nous nous engageons aussi dans des actions communautaires (dons alimentaires et besoins de base à des orphelinats locaux) afin de développer une culture du service chez nos élèves.",

    extraTitle: "Activités extrascolaires",
    extraText:
      "Nos jeunes apprenants profitent d’activités variées : musique, ateliers d’art et éducation physique. Les sorties étant limitées pour les plus petits, nous privilégions des événements et expériences spéciales qui enrichissent leur parcours.",

    familiesTitle: "Paroles de familles",
    familiesText:
      "Ne nous croyez pas sur parole ! Nos familles partagent des témoignages touchants sur l’impact positif du programme sur le développement des enfants et sur leur engagement dans la communauté scolaire. Les réussites et progrès des élèves illustrent l’expérience transformative vécue à Kids House.",

    readyTitle: "Prêt(e) à nous rejoindre ?",
    readyText:
      "Si vous envisagez Kids House pour le parcours préscolaire de votre enfant, contactez-nous pour plus d’informations ou pour planifier une visite. Notre processus d’inscription est simple, et nous vous accompagnons à chaque étape.",

    contactLink: "Contactez-nous dès aujourd’hui !",
  },

  cta: {
    title: "Prêt(e) à nous rejoindre ?",
    text: "Planifiez une visite ou contactez notre équipe admissions pour plus d’informations.",
    button: "Contactez-nous",
  },

  photos: {
    leftAlt: "Activité d’apprentissage Pré-K3 & Pré-K4",
    rightAlt: "Salle de classe Pré-K3 & Pré-K4",
  },
},

  preK2Page: {
  kicker: "PETITE ENFANCE",
  title: "Pré-K2",
  subtitle: "Éveiller les jeunes esprits",

  h1: "Éveiller les jeunes esprits pour un avenir prometteur",
  p1:
    "À Kid's House, nous pensons que les premières années de vie d’un enfant sont essentielles pour poser les bases de sa réussite scolaire et sociale. Notre programme d’apprentissage précoce accueille des enfants de 3 à 4 ans, avec un focus sur la maternelle (K3) et la pré-maternelle (K4). Les recherches montrent qu’une éducation de qualité en petite enfance a un impact important sur le développement cognitif et social, et prépare l’enfant à apprendre toute sa vie.",

  s1Title: "Notre philosophie éducative",
  s1Text:
    "Nous adoptons une approche basée sur le jeu et la découverte (inquiry), où les enfants participent à des activités qui favorisent l’exploration et la créativité. Notre environnement bienveillant, inclusif et diversifié renforce le sentiment d’appartenance et permet à chaque enfant de s’épanouir. Notre curriculum est conçu pour stimuler la curiosité et développer le goût d’apprendre grâce à des projets pratiques et au jeu collaboratif.",

  s2Title: "Aperçu complet du programme",
  s2Intro: "Notre programme couvre des matières essentielles telles que :",
  s2List: [
    "Langage / Lecture",
    "Mathématiques",
    "Sciences",
    "Études sociales",
    "Arts",
    "Musique",
    "Éducation physique",
  ],
  s2Text:
    "Les matières sont intégrées et abordées à travers des thèmes, afin de créer des liens entre les concepts. Par exemple, un thème sur « les saisons » peut inclure des histoires, des expériences scientifiques et des projets artistiques. Les activités en plein air, comme le jardinage, renforcent l’apprentissage expérientiel, et nos activités STEM introduisent les bases des sciences, de la technologie et des maths dans un contexte ludique.",

  s3Title: "Objectifs de développement",
  s3Intro: "Notre programme vise des objectifs de développement précis :",
  s3Bullets: [
    { label: "Compétences sociales", desc: "Coopération et partage" },
    { label: "Intelligence émotionnelle", desc: "Reconnaître et exprimer ses émotions" },
    { label: "Compétences cognitives", desc: "Résolution de problèmes et pensée critique" },
    { label: "Développement physique", desc: "Motricité fine et motricité globale" },
  ],
  s3Text:
    "Ces objectifs orientent nos pratiques pédagogiques et les activités quotidiennes, afin de prioriser le développement de chaque enfant.",

  s4Title: "Un environnement d’apprentissage stimulant",
  s4Text:
    "Nos classes sont sûres, stimulantes et motivantes, avec des ateliers variés et des espaces extérieurs incluant jardins et aires de jeux. Des programmes comme les explorations de la nature et le jardinage apprennent aux enfants le respect de l’environnement et le sens des responsabilités.",

  s5Title: "Une équipe éducative dédiée",
  s5Text:
    "Nos éducateurs sont hautement qualifiés, diplômés en petite enfance et expérimentés. Nous maintenons un faible ratio élèves/enseignant de 6 pour 1, permettant un accompagnement personnalisé et des relations plus fortes entre enseignants et élèves.",

  s6Title: "Un partenariat fort avec les parents",
  s6Text:
    "À Kid's House, nous croyons que les parents sont des partenaires essentiels dans l’éducation de leur enfant. Nous proposons plusieurs façons de s’impliquer : aide en classe, organisation d’activités et participation aux rencontres parents-enseignants.",

  s7Title: "Célébrer la diversité et la communauté",
  s7Text:
    "Notre programme reflète la diversité de nos familles et intègre des perspectives multiculturelles. Nous nous engageons aussi dans la communauté, en soutenant des orphelinats par des dons alimentaires et de première nécessité, et en cultivant l’esprit de service chez nos élèves.",

  s8Title: "Activités extrascolaires",
  s8Text:
    "Nos plus jeunes apprenants profitent d’activités variées : musique, ateliers d’arts et éducation physique. Les sorties étant limitées pour les plus petits, nous privilégions des événements et expériences spéciales qui enrichissent leur parcours.",

  s9Title: "Témoignages de nos familles",
  s9Text:
    "Ne nous croyez pas sur parole ! Nos familles partagent de beaux témoignages sur l’impact positif du programme sur le développement de leurs enfants et sur leur engagement dans la communauté scolaire. Les réussites et progrès des élèves illustrent l’expérience transformatrice à Kid's House.",

  s10Title: "Prêt(e) à nous rejoindre ?",
  s10Text:
    "Si vous envisagez Kid's House pour le parcours d’apprentissage précoce de votre enfant, contactez-nous pour plus d’informations ou pour planifier une visite. Notre processus d’inscription est simple, et nous vous accompagnons à chaque étape.",

  contactLink: "Contactez-nous dès aujourd’hui !",

  ctaTitle: "Prêt(e) à nous rejoindre ?",
  ctaText: "Planifiez une visite ou contactez notre équipe admissions pour plus d’informations.",
  ctaButton: "Contactez-nous",

  photoLeftAlt: "Activité d’apprentissage en Pré-K2",
  photoRightAlt: "Salle de classe Pré-K2",
},

  // ✅ add inside FR (same keys, translated)
earlyYearsPage: {
  kicker: "APPRENTISSAGE",
  title: "Petite enfance",
  subtitle: "Pré-K2 à Pré-K4",

  heading: "Éveiller les jeunes esprits pour un avenir lumineux",
  intro:
    "À Kids House, nous pensons que les premières années sont essentielles pour développer la confiance, la curiosité et de solides bases d’apprentissage. Notre programme de petite enfance combine l’apprentissage par le jeu et une structure adaptée : pré-lecture, pré-maths, développement socio-émotionnel et découvertes pratiques.",

  tilePreK2Title: "Pré-K2",
  tilePreK2Alt: "Élèves de Pré-K2",
  tilePreK34Title: "Pré-K3 & Pré-K4",
  tilePreK34Alt: "Élèves de Pré-K3 et Pré-K4",

  ctaTitle: "Petite enfance",
  ctaText:
    "Ensemble, développons le potentiel de votre enfant et mettons-le sur la voie de la réussite !",
  ctaButton: "Nous contacter",

  photoLeftAlt: "Activité en petite enfance",
  photoRightAlt: "Enfants en apprentissage",
},

  contactForm: {
  namePlaceholder: "Nom",
  phonePlaceholder: "Téléphone",
  messagePlaceholder: "Message",
  sending: "Envoi...",
  send: "Envoyer",
  successMsg: "Message envoyé ! Nous vous contacterons bientôt.",
  errorFallback: "Une erreur est survenue.",
  errorSendFail: "Échec de l’envoi du message.",
  whatsappLinkText: "Ou contactez-nous sur WhatsApp",
},

    contactPage: {
    title: "Contact",
    quickNav: {
      details: "Coordonnées",
      map: "Carte",
      form: "Formulaire",
    },

    details: {
      kicker: "Contact",
      title: "Coordonnées",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      addressLabel: "Adresse",
    },

    map: {
      kicker: "Contact",
      title: "Carte / Localisation",
      iframeTitle: "carte",
    },

    form: {
      kicker: "Contact",
      title: "Formulaire de message",
      desc: "À connecter plus tard à email (Resend) ou WhatsApp.",
    },
  },

    calendar: {
    datesToRememberTitle: "Dates à retenir",

    categories: {
      general: "Événements généraux",
      quarter: "Début / fin de trimestre",
      progress: "Bulletins / rapports",
      ptc: "Rencontres parents-professeurs",
      holiday: "Congés scolaires / jours fériés",
      firstlast: "Premier / dernier jour d’école",
    },

    dowShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],

    events: {
      firstDayOfSchool: "Rentrée scolaire",
      progress01: "Bulletins - 01",
      wellnessDay: "Journée bien-être",
      pdDay: "Journée pédagogique",
      endFirstQuarter: "Fin du 1er trimestre",
      fallBreak: "Vacances d’automne",
      q2Begins: "Début du 2e trimestre",
      ptcNov: "Rencontre parents-professeurs",
      progress02: "Bulletins - 02",
      winterBreakBegins: "Début des vacances de Noël",
      schoolResumes: "Reprise des cours",
      endSecondQuarter: "Fin du 2e trimestre",
      q3Begins: "Début du 3e trimestre",
      progress03: "Bulletins - 03",
      endThirdQuarter: "Fin du 3e trimestre",
      q4Begins: "Début du 4e trimestre",
      ptcApr: "Rencontre parents-professeurs",
      labourDayObserved: "Fête du Travail (observée)",
      cameroonNationalDay: "Fête nationale du Cameroun",
      lastDayOfSchool: "Dernier jour d’école",
    },
  },

    calendarPage: {
    kicker: " ",
    title: "Calendrier",
    subtitle:
      "Consultez les dates et événements importants. Remplacez ce texte par le résumé du calendrier de votre école.",

    yearRange: "2025 - 2026",
    intro:
      "Le calendrier scolaire inclut les dates académiques, les congés, les événements et les réunions. Utilisez la légende ci-dessous pour comprendre les catégories.",

    bandTitle: "À propos du calendrier",
    bandP1:
      "Remplacez ce paragraphe par votre politique de calendrier : ce qui est inclus, comment les parents reçoivent les mises à jour, et où poser des questions.",
    bandP2:
      "Vous pouvez aussi indiquer comment les changements d’horaire seront communiqués.",
    bandDownload: "TÉLÉCHARGER LE CALENDRIER 2025-2026",

    quickNav: {
      about: "À propos",
      mission: "Notre mission et vision",
      leadership: "Direction",
      board: "Membres du conseil",
      history: "Historique",
      campus: "Notre campus",
      calendar: "Calendrier",
      childProtection: "Protection de l’enfant",
      awards: "Récompenses & accréditations",
    },
  },

    admissionsHome: {
    title: "Admissions",
    subtitle: "Des étapes claires, les documents requis et des FAQ utiles.",

    quickNav: {
      apply: "Comment s’inscrire",
      documents: "Documents requis",
      fees: "Frais & paiement",
      faqs: "FAQ",
    },

    howToApply: {
      kicker: "Admissions",
      title: "Comment s’inscrire",
      step1t: "1) Visiter",
      step1d: "Planifiez une visite pour découvrir le campus et rencontrer l’équipe.",
      step2t: "2) S’inscrire",
      step2d: "Soumettez votre demande d’inscription et les documents requis.",
      step3t: "3) Confirmer",
      step3d: "Recevez la confirmation et finalisez le paiement pour réserver une place.",

      ctaContact: "Contacter les admissions",
      ctaProcess: "Voir la procédure d’inscription",
    },

    previewProcess: {
      title: "Procédure d’inscription",
      text:
        "Notre procédure est simple et accompagnée. Nous guidons les familles étape par étape, du premier contact à la confirmation d’inscription.",
      imgAlt: "Procédure d’inscription Kids House",
      button: "Ouvrir la procédure",
    },

    documents: {
      kicker: "Admissions",
      title: "Documents requis",

      previewTitle: "Documents nécessaires",
      previewText:
        "Préparez quelques documents essentiels pour finaliser l’inscription. Avoir tout prêt accélère le traitement.",
      previewImgAlt: "Documents requis Kids House",
      previewButton: "Voir les documents requis",

      commonTitle: "Exigences courantes",
      item1: "Acte de naissance (copie)",
      item2: "Photos d’identité (si demandées)",
      item3: "Bulletin / dossier scolaire (si applicable)",
      item4: "Carnet de vaccination / dossier médical (si applicable)",
      item5: "Pièce d’identité du parent/tuteur",
      viewFull: "Voir la liste complète",
    },

    fees: {
      kicker: "Admissions",
      title: "Frais & paiement",

      previewTitle: "Structure des frais & calendrier de paiement",
      previewText:
        "Les frais de Kids House sont organisés par section et niveau. Consultez la fiche officielle et l’échéancier des paiements.",
      previewImgAlt: "Frais de scolarité Kids House",
      previewButton: "Voir les frais",

      note:
        "Les frais sont généralement payés sous forme d’inscription + mensualités (ou tranches). Pour l’information la plus exacte, consultez la fiche officielle sur la page Frais de scolarité ou contactez le bureau.",
      ctaOpen: "Ouvrir les frais",
      ctaAsk: "Question sur les frais",
    },

    faqs: {
      kicker: "Admissions",
      title: "FAQ",

      previewTitle: "Réponses pour les parents",
      previewText:
        "Des réponses rapides sur les âges, le placement, les routines, les uniformes et la communication avec les familles.",
      previewImgAlt: "FAQ admissions Kids House",
      previewButton: "Lire la FAQ",

      mostAsked: "Les plus demandées",

      q1: "Quand peut-on s’inscrire ?",
      a1: "Les inscriptions sont acceptées pendant les périodes d’inscription et selon les places disponibles.",

      q2: "Avez-vous des sections Anglaise et Française ?",
      a2: "Oui. Kids House propose les deux sections. Le placement dépend du niveau de l’enfant et des disponibilités.",

      q3: "Comment planifier une visite ?",
      a3: "Utilisez le formulaire de contact ou WhatsApp pour réserver une visite.",

      viewAll: "Voir toutes les FAQ",
    },
  },

    admissionsTuition: {
    kicker: "ADMISSIONS",
    title: "Frais de scolarité",
    subtitle: "Consultez les frais et le calendrier de paiement pour l’année scolaire en cours.",

    quickNav: {
      admissions: "Admissions",
      criteria: "Critères d’admission",
      process: "Procédure d’inscription",
      campus: "Notre campus",
      tuition: "Frais de scolarité",
      store: "Boutique scolaire",
      faqs: "FAQ",
    },

    band: {
      title: "Frais de scolarité",
      importantTitle: "Informations importantes",
      p1: "Les frais de Kids House sont payés sous forme d’inscription + mensualités (ou tranches) pour les sections Anglaise et Française, selon la fiche officielle des frais.",
      p2: "Les frais versés à l’administration ne sont pas remboursables. Kids House peut ajuster les modalités de paiement si nécessaire et les parents seront informés en conséquence.",
      cta: "Admissions",
    },
  },

    admissionsRequiredDocs: {
    kicker: "ADMISSIONS",
    title: "Documents requis",
    subtitle: "Ce qu’il faut préparer avant de soumettre votre demande.",

    intro:
      "Pour faciliter le processus d’admission, veuillez préparer les documents ci-dessous. Si vous avez un doute sur un élément, contactez les Admissions — nous vous guiderons.",

    quickNav: {
      admission: "Admissions",
      criteria: "Critères d’admission",
      process: "Procédure d’inscription",
      required: "Documents requis",
      campus: "Notre campus",
      fees: "Frais de scolarité",
      faqs: "FAQ",
    },

    sections: [
      {
        title: "Documents essentiels (tous les candidats)",
        items: [
          { label: "Acte de naissance / preuve d’âge", desc: "Copie certifiée conforme ou document officiel." },
          { label: "Pièce d’identité du parent/tuteur", desc: "Passeport ou carte nationale d’identité." },
          { label: "2 photos d’identité récentes", desc: "Photos de l’enfant (si exigé par l’école)." },
          { label: "Carnet de santé / vaccinations", desc: "Carnet de vaccination à jour ou dossier médical." },
          { label: "Contacts d’urgence", desc: "Noms et numéros pour le retrait en cas d’urgence." },
        ],
      },
      {
        title: "Documents scolaires",
        items: [
          { label: "Bulletins scolaires précédents", desc: "Dernier(s) bulletin(s) / relevés de suivi." },
          { label: "Relevés de notes (si applicable)", desc: "Pour les classes supérieures ou les transferts." },
          { label: "Recommandation d’un enseignant (optionnel)", desc: "Si demandée par les Admissions pour le placement." },
        ],
      },
      {
        title: "Transfert / élèves internationaux (si applicable)",
        items: [
          { label: "Lettre de transfert", desc: "Émise par l’école précédente (attestation de bonne conduite / quitus)." },
          { label: "Infos de soutien linguistique (optionnel)", desc: "Plans d’aide, bilans, ou rapports linguistiques." },
          { label: "Documents de résidence / permis (optionnel)", desc: "Uniquement si votre politique l’exige." },
        ],
      },
      {
        title: "Paiement / parrainage (si applicable)",
        items: [
          { label: "Lettre de l’employeur / sponsor", desc: "Si l’employeur ou un sponsor prend en charge les frais." },
          { label: "Justificatif de solvabilité", desc: "Si exigé par votre politique d’admission." },
        ],
      },
    ],

    noteTitle: "Note",
    noteBullets: [
      "Les documents peuvent varier selon le niveau et le statut de l’élève.",
      "Les documents non rédigés en anglais/français peuvent nécessiter une traduction (si votre politique l’exige).",
      "Apportez les originaux lorsque demandé ; nous pouvons conserver des copies.",
    ],

    photos: {
      leftAlt: "Accompagnement aux admissions",
      rightAlt: "Apprentissage des élèves",
    },

    cta: {
      title: "Besoin d’aide ?",
      text: "Si vous avez des questions sur les documents requis, contactez les Admissions — nous vous aiderons.",
      buttonLabel: "Formulaire de contact",
    },
  },

  aboutPage: {
  kicker: "À propos",
  title: "À propos",
  subtitle:
    "Découvrez qui nous sommes, nos valeurs et comment nous accompagnons chaque enfant dans sa croissance.",

  mission: {
    sectionTitle: "Mission & Vision",
    cardTitle: "Notre objectif et notre promesse",
    cardText:
      "Kids House est une école bilingue (Anglais & Français) de maternelle et primaire à Douala. Notre mission est d’offrir à chaque enfant une base solide — sur le plan scolaire, social et émotionnel — grâce à un apprentissage structuré, un encadrement bienveillant et des valeurs fortes.",
    imgAlt: "Mission de Kids House",
    button: "Lire Mission & Vision",
  },

  leadership: {
    sectionTitle: "Direction",
    cardTitle: "Une équipe engagée et bienveillante",
    cardText:
      "La direction et les éducateurs travaillent avec les familles pour offrir un environnement sûr et respectueux, où les enfants se sentent confiants pour apprendre, explorer et grandir.",
    imgAlt: "Direction de Kids House",
    button: "Découvrir la Direction",
  },

  campus: {
    sectionTitle: "Campus",
    cardTitle: "Un espace d’apprentissage sûr et accueillant",
    cardText:
      "Notre campus favorise l’apprentissage grâce à des classes lumineuses, des routines structurées et des espaces qui encouragent la curiosité et le jeu. La sécurité, la propreté et le bien-être des élèves sont au cœur de tout.",
    imgAlt: "Campus de Kids House",
    button: "Explorer notre Campus",
  },

  facts: {
    sectionTitle: "Infos clés",
    locationK: "Localisation",
    locationV: "Douala, Cameroun",
    sectionsK: "Sections",
    sectionsV: "Anglais & Français",
    levelsK: "Niveaux",
    levelsV: "Maternelle + Primaire",
    focusK: "Priorités",
    focusV: "Bases solides + valeurs",
    ctaLearning: "Découvrir l’Apprentissage",
    ctaAdmissions: "Admissions",
    ctaContact: "Nous contacter",
  },

  sidebar: {
    onThisPage: "SUR CETTE PAGE",
    mission: "Mission & Vision",
    leadership: "Direction",
    campus: "Campus",
    quickFacts: "Infos clés",
    needHelpTitle: "Besoin d’aide ?",
    needHelpText: "Contactez-nous pour l’admission et les visites.",
    contactAdmissions: "Contacter l’admission",
  },
},

  schoolProfile: {
  kicker: "École et communauté",
  title: "Profil de l’école",
  subtitle:
    "Kids’ House est un environnement scolaire calme, propre et accueillant, conçu pour accompagner chaque enfant avec une approche positive et bienveillante. Nous encourageons les familles à venir visiter, découvrir notre communauté et se faire leur propre avis. L’école met en avant un partenariat (« jumelage ») avec l’École Anne Hébert (Canada/Québec) et promeut une culture d’apprentissage favorable de la petite enfance jusqu’au primaire.",

  sections: {
    organizationTitle: "Organisation",
    organizationText:
      "Kids’ House est soutenue par une administration dédiée et une équipe qualifiée, dynamique et engagée, centrée sur l’éducation et le bien-être des enfants. Nous reconnaissons aussi que certaines familles peuvent rencontrer des difficultés, et l’école peut proposer des aménagements de soutien lorsque nécessaire afin de maintenir une relation solide entre l’école et la maison.",

    accreditationsTitle: "Accréditations & adhésions",
    accreditationsText:
      "Kids’ House met en avant un partenariat réussi avec l’École Anne Hébert au Canada (Québec). (Si vous disposez d’accréditations officielles, vous pourrez les ajouter ici plus tard — c’est la seule « adhésion/partenariat » mentionnée sur l’affiche.)",

    schoolYearTitle: "Année scolaire",
    schoolYearText:
      "L’année scolaire 2025/2026 débute avec les inscriptions à partir du 07 juillet 2025 (lundi–samedi, 8h00–15h00). La rentrée est prévue le 01 septembre 2025. Kids’ House propose également des cours de vacances du 28 juillet 2025 au 29 août 2025.",

    curriculumTitle: "Programme",
    curriculumIntro:
      "Kids’ House propose un parcours complet de la petite enfance au primaire, avec :",
    curriculumBullets: [
      "Maternelle / Petite enfance (incluant garderie et niveaux de maternelle)",
      "Primaire (Class 1 à Class 6)",
    ],
    curriculumOutro:
      "Le programme met l’accent sur un bilinguisme concret, des jeux éducatifs, un environnement calme et sécurisé, ainsi que des apprentissages pratiques, notamment grâce à l’accès à un laboratoire informatique.",

    facultyTitle: "Corps enseignant",
    facultyText:
      "Notre équipe pédagogique et le personnel de soutien sont décrits comme hautement qualifiés, dynamiques et dédiés à l’éducation des enfants. Pour préserver la qualité, Kids’ House maintient des effectifs limités (nombre de places limité en classe), permettant plus d’attention et un meilleur suivi pour chaque enfant.",

    enrollmentTitle: "Inscriptions",
    enrollmentText:
      "Les inscriptions sont limitées afin de garantir la qualité et un cadre d’apprentissage calme. Elles ouvrent le 07 juillet 2025, avec un nombre de places limité. Les élèves déjà inscrits peuvent être contactés en priorité, et les familles qui s’inscrivent tôt peuvent bénéficier d’une réduction (comme indiqué sur l’affiche).",

    facilitiesTitle: "Infrastructures",
    facilitiesIntro: "Kids’ House offre un environnement calme et sécurisé avec :",
    facilitiesBullets: [
      "Des salles de classe bien ventilées",
      "Une salle multimédia",
      "Un laboratoire informatique opérationnel",
      "Une aire de jeux/récréation entièrement couverte",
      "Des points d’eau pour le lavage des mains (hygiène et sécurité)",
    ],
  },

  campusTourTitle: "Visite du campus",
  campusTourText:
    "Venez visiter Kids House à Douala ! Rencontrez notre équipe, découvrez nos salles de classe et nos espaces de jeux, et voyez comment nous soutenons l’apprentissage en anglais et en français. Nous répondrons à vos questions et vous guiderons pour l’admission.",

  galleryAlt1: "Activité des élèves",
  galleryAlt2: "Activité en classe",
},

  valuesInfographic: {
  kicker: "Valeurs",
  items: [
    {
      title: "Citoyenneté mondiale",
      description:
        "J’ai une responsabilité envers ma communauté et le monde. Je cherche activement à comprendre et à respecter les cultures et les croyances des autres.",
      tone: "blue" as Tone,
    },
    {
      title: "Pensée critique",
      description: "J’analyse et j’évalue les affirmations afin de porter un jugement raisonné.",
      tone: "red" as Tone,
    },
    {
      title: "Curiosité",
      description:
        "Je demande toujours pourquoi et je comprends qu’il y a toujours plus à apprendre.",
      tone: "blue" as Tone,
    },
    {
      title: "Confiance",
      description: "J’affronte les défis avec assurance et je communique mes idées.",
      tone: "red" as Tone,
    },
    {
      title: "Créativité",
      description: "J’utilise mon imagination pour créer des idées originales et m’exprimer.",
      tone: "blue" as Tone,
    },
    {
      title: "Résilience",
      description: "J’accepte l’échec comme une occasion d’apprendre.",
      tone: "red" as Tone,
    },
    {
      title: "Prise de risque",
      description: "J’explore de nouvelles idées et des stratégies innovantes.",
      tone: "blue" as Tone,
    },
    {
      title: "Conscience de soi",
      description:
        "Je réfléchis à mes croyances, mes valeurs et mes actions pour mieux comprendre leur impact sur moi et sur les autres.",
      tone: "red" as Tone,
    },
  ],
},

graduateProfile: {
  kicker: "Profil du diplômé",
  title: "Profil du diplômé",
  intro:
    "Grâce à notre programme exceptionnel, tous nos diplômés réussissent bien au lycée.",
  items: [
    {
      title: "Curiosité & confiance",
      description:
        "Les diplômés explorent avec enthousiasme de nouveaux sujets, idées et expériences. Ils communiquent clairement et participent à des échanges constructifs avec bienveillance et respect.",
    },
    {
      title: "Créativité & pensée critique",
      description:
        "Les diplômés innovent avec ingéniosité et résolvent des problèmes en analysant l’information, en évaluant les arguments et en combinant différentes perspectives.",
    },
    {
      title: "Conscience de soi & citoyenneté mondiale",
      description:
        "Les diplômés privilégient le bien-être global, réfléchissent à leurs forces et objectifs, et démontrent de l’empathie ainsi que des comportements prosociaux qui ont un impact positif sur leur communauté.",
    },
    {
      title: "Prise de risque & résilience",
      description:
        "Les diplômés acceptent l’incertitude avec courage et considèrent les défis comme des opportunités de grandir. Ils s’adaptent à des environnements dynamiques et apprennent de leurs erreurs.",
    },
  ],
},

  missionVision: {
  title: "Notre mission et notre vision",

  breadcrumbAbout: "À propos",
  breadcrumbCurrent: "Notre mission et notre vision",

  quickNav: {
    vision: "Vision",
    values: "Valeurs",
    graduateProfile: "Profil du diplômé",
  },

  vision: {
    kicker: "Vision",
    title: "Vision",
    statement: "Inspirer une curiosité durable pour relever les défis de demain.",
  },
},

    campus: {
    title: "Notre campus",
    subtitle:
      "Kids House offre un campus calme, propre et accueillant, conçu pour les tout-petits et les élèves du primaire. Nos espaces sont organisés pour favoriser le confort, l’apprentissage, le jeu et la sécurité — afin que les enfants se sentent en confiance, accompagnés et prêts à explorer chaque jour.",

    navFacilities: "Infrastructures",
    navSafety: "Sécurité",
    navActivities: "Activités",
    navLocation: "Localisation",

    kicker: "Campus",

    facilitiesTitle: "Infrastructures",
    facilitiesText:
      "Notre campus comprend des salles de classe lumineuses et bien ventilées, aménagées pour apprendre, créer et collaborer. Nous disposons également d’une salle multimédia et d’un laboratoire informatique opérationnel pour soutenir l’apprentissage numérique de manière adaptée à l’âge. L’hygiène et les routines quotidiennes sont renforcées par des points de lavage des mains et un environnement propre et pensé pour les enfants.",

    safetyTitle: "Sécurité",
    safetyText:
      "La sécurité est au cœur de notre culture scolaire. Kids House maintient un environnement calme et sécurisé grâce à des routines claires, des espaces surveillés et un personnel attentif au bien-être des enfants. Nous encourageons aussi de bonnes habitudes (lavage des mains, propreté des espaces partagés), afin d’apprendre la responsabilité tout en restant protégés.",

    activitiesTitle: "Activités & espaces",
    activitiesText:
      "Les enfants apprennent mieux en bougeant et en jouant : c’est pourquoi nous mettons à leur disposition un espace récréatif/aire de jeux entièrement couvert, pour profiter d’activités physiques dans le confort. Nos espaces d’activités favorisent le jeu en groupe, la créativité et la découverte — en développant la confiance, les compétences sociales et l’autonomie. Entre activités encadrées et jeux surveillés, le campus encourage une exploration sûre au quotidien.",

    locationTitle: "Localisation",
  },

    leadership: {
    kicker: "À PROPOS",
    title: "Direction",
    subtitle:
      "Kids’ House est dirigée par une équipe attentionnée et engagée, centrée sur l’essentiel : la sécurité, l’épanouissement et le bonheur de votre enfant. La direction travaille en collaboration avec les enseignants et les familles pour créer un environnement chaleureux et structuré, où les enfants se sentent en confiance pour explorer, jouer et apprendre chaque jour. Des routines de classe aux programmes d’apprentissage et à la communication avec les parents, nous visons la cohérence, la confiance et l’amélioration continue — afin que chaque enfant s’épanouisse de la maternelle au primaire.",

    managementTitle: "Équipe de direction",
    managementText:
      "L’équipe de direction de Kids’ House accompagne le fonctionnement quotidien de l’école et son développement à long terme. En partenariat avec les éducateurs et les parents, elle veille à la qualité des apprentissages, au bon entretien d’un cadre sûr et accueillant, et à la croissance de notre communauté. Nous nous engageons à maintenir des standards élevés en maternelle et au primaire — tout en faisant de Kids’ House un lieu où chaque enfant est connu, accompagné et encouragé à donner le meilleur de lui-même.",

    adminTeamTitle: "Équipe administrative",
    board: {
      imageAlt: "Conseil de direction",
      title: "Conseil de direction",
      text: "Découvrez l’équipe qui accompagne Kids’ House et contribue au bon fonctionnement de l’école.",
      button: "RENCONTRER LE CONSEIL",
    },
  },

  historyPage: {
  applyNow: "S’inscrire",

  banner: {
    kicker: "Histoire",
    title: "Histoire de Kids’ House",
    subtitle: "Retour sur les étapes clés qui ont façonné notre communauté scolaire.",
  },

  blocks: {
    b1Text:
      "Kids’ House est née d’un objectif simple : créer un lieu chaleureux, sûr et inspirant où les enfants apprennent par le jeu et grandissent avec confiance. Dès le début, notre programme s’est construit autour de la bienveillance, de la créativité et d’un partenariat fort avec les familles.",
    b1Alt1: "Premières années – photo 1",
    b1Alt2: "Premières années – photo 2",

    b2Text:
      "À mesure que notre communauté grandissait, Kids’ House a élargi ses espaces et ses ressources pour mieux soutenir le développement des enfants. Chaque étape a été guidée par une priorité : que chaque enfant se sente vu, soutenu et heureux d’apprendre.",
    b2Alt1: "Premier bâtiment / premières classes",
    b2Alt2: "Première cohorte d’élèves",

    b3Text:
      "Nous avons continuellement amélioré notre environnement et nos routines — en ajoutant des espaces adaptés à l’âge, des activités structurées et des expériences de jeu créatif — tout en gardant une atmosphère bienveillante au cœur de tout ce que nous faisons.",
    b3Alt1: "Jeux en extérieur",
    b3Alt2: "Apprentissage en classe",

    b4Text:
      "Au fil des années, Kids’ House a introduit de nouveaux outils et expériences — coins lecture, activités artistiques, ateliers pratiques et développement des compétences — tout en restant fidèle à nos valeurs : sécurité, joie et progression.",
    b4Alt1: "Photo marquante",
    b4Alt2: "Photo marquante",
    b4Alt3: "Photo marquante",
    b4Alt4: "Photo marquante",

    b5Text:
      "Notre culture communautaire s’est renforcée grâce aux événements familiaux, aux célébrations et aux traditions de l’école — créant un lien fort entre les enfants, les parents et Kids’ House.",
    b5Alt1: "Moment communautaire",
    b5Alt2: "Événement",
    b5Alt3: "Célébration / souvenir",

    endAlt: "Bâtiment de Kids’ House aujourd’hui",
    endText:
      "Aujourd’hui, Kids’ House reflète des années d’engagement — fondées sur la confiance, la bienveillance et la conviction que la petite enfance est la base d’un apprentissage durable.",
  },

  today: {
    title: "Kids’ House aujourd’hui",
    text:
      "Aujourd’hui, Kids’ House continue de grandir avec sens — en renforçant les apprentissages, en accompagnant les familles et en créant un environnement sûr où chaque enfant peut s’épanouir.",
    alt1: "Kids’ House aujourd’hui – vue 1",
    alt2: "Kids’ House aujourd’hui – vue 2",
  },
},

  applicationProcess: {
  kicker: "ADMISSIONS",
  title: "Procédure d’inscription",
  subtitle: "(K2 à la 12e année)",

  intro:
    "Nous sommes ravis que vous envisagiez Kids’ House pour l’éducation de votre enfant. Notre procédure d’inscription est conçue pour être claire et accompagnée, afin que vous ayez toutes les informations nécessaires dès le départ.",

  stepsTitle: "Étapes de la procédure d’inscription",
  steps: [
    "Remplir le formulaire de contact",
    "Préparer les documents requis",
    "Compléter et soumettre le formulaire d’inscription",
    "Décision d’admission",
  ],

  s1Title: "1. Remplir le formulaire de contact",
  s1Text:
    "Veuillez contacter notre service des admissions en remplissant le formulaire via le lien ci-dessous.",
  s1Link: "Remplir le formulaire de contact",

  s2Title: "2. Préparer les documents requis",
  s2Text:
    "Avant de commencer la demande, assurez-vous d’avoir les documents suivants prêts :",
  docs: [
    { label: "Preuve de date de naissance", desc: "Acte de naissance (ou équivalent)" },
    { label: "Dossiers scolaires", desc: "Bulletins/relevés (si applicable)" },
    { label: "Photos récentes", desc: "Photos format passeport (si requis)" },
    { label: "Dossier de santé", desc: "Carnet de vaccination/fiche santé (si requis)" },
    { label: "Pièce d’identité du parent/tuteur", desc: "Pièce d’identité valide" },
  ],

  s3Title: "3. Compléter le formulaire d’inscription",
  s3Text:
    "Après les étapes 1 et 2, notre équipe admissions vous transmettra le formulaire d’inscription et vous guidera pour la soumission.",

  s4Title: "4. Décision d’admission",
  s4Text:
    "Après étude du dossier (et entretien/évaluation si nécessaire), vous recevrez la décision d’admission ainsi que les prochaines étapes pour finaliser l’inscription.",

  enrollTitle: "Inscription & Enregistrement",
  enrollText:
    "Après acceptation, finalisez l’inscription en soumettant les documents restants et en réglant les frais d’inscription applicables. Les instructions détaillées seront fournies par notre bureau.",

  contactTitle: "Nous contacter",
  contactText: "Si vous avez des questions, contactez-nous :",
  contactEmail: "Email",
  contactPhone: "Téléphone / WhatsApp",

  ctaTitle: "Formulaire de contact",
  ctaText: "Veuillez contacter notre service des admissions en remplissant le formulaire de contact.",
  ctaButton: "Formulaire de contact",

  photoAlt1: "Élèves",
  photoAlt2: "Activité d’apprentissage",
},

  about: {
    quickNavTitle: "Navigation rapide",
    aboutHome: "À propos de Kids’ House",
    mission: "Notre mission et vision",
    leadership: "Direction",
    profile: "Profil de l’école",
    campus: "Notre campus",
    calendar: "Calendrier",
    childProtection: "Protection de l’enfant",
    boardMembers: "Membres du conseil",
    history: "Histoire",
    awards: "Prix & Accréditations",

  },

  childProtection: {
    kicker: "POLITIQUE DE PROTECTION DE L’ENFANT",
    title: "Politique de Protection de l’Enfant",
    subtitle:
      "Kids’ House s’engage à offrir un environnement sûr, respectueux et bienveillant à chaque enfant.",

    intro1:
      "À Kids’ House, la protection des enfants est une responsabilité partagée. Nous travaillons avec les familles, le personnel et la communauté pour assurer la sécurité, prévenir tout risque et réagir rapidement et avec sérieux à toute préoccupation.",
    intro2:
      "Cette page présente un aperçu de notre approche, des étapes de signalement et de ce que les familles peuvent attendre de nous. Vous pourrez remplacer le texte par la version officielle de votre politique plus tard.",

    manual: {
      title: "Manuel de Protection de l’Enfant",
      text: [
        "À Kids’ House, la sécurité et le bien-être des enfants sont notre priorité.",
        "Ce manuel décrit notre approche, les procédures de signalement et les responsabilités du personnel et des familles.",
        "Pour accéder au manuel complet, cliquez ci-dessous :",
      ],
      buttonLabel: "Manuel de Protection de l’Enfant",
    },

    photos: {
      leftAlt: "Enfants à Kids’ House",
      rightAlt: "Enseignant accompagnant les enfants",
    },

    sections: {

      abuseTitle: "Qu’est-ce que la maltraitance ?",
      abuseText:
        "La maltraitance est toute action ou négligence qui nuit au bien-être physique, émotionnel ou psychologique d’un enfant. Elle peut prendre plusieurs formes :",
      abuseBullets: [
        {
          label: "Négligence",
          desc: "Ne pas répondre aux besoins essentiels : santé, sécurité, encadrement, soutien émotionnel.",
        },
        {
          label: "Maltraitance émotionnelle",
          desc: "Comportements répétés qui dévalorisent l’enfant (menaces, humiliation, isolement).",
        },
        { label: "Violence physique", desc: "Tout acte provoquant une blessure ou une douleur." },
        { label: "Abus sexuel", desc: "Tout contact ou exploitation à caractère sexuel." },
        {
          label: "Harcèlement & cyberharcèlement",
          desc: "Agressions répétées en personne ou en ligne.",
        },
      ],

      reportingTitle: "Notre procédure de signalement",
      reportingText:
        "Tout membre du personnel qui observe une situation préoccupante ou reçoit un signalement doit en informer immédiatement le Responsable Protection de l’Enfant (ou un membre désigné). Nous agissons vite, documentons les faits et respectons la confidentialité tout en priorisant l’intérêt de l’enfant.",
      reportingSteps: [
        "Recevoir une alerte (confidence, observation ou signalement).",
        "Noter les faits clés (qui/quoi/quand/où).",
        "Signaler au Responsable le jour même.",
        "Évaluer le risque et agir immédiatement si l’enfant est en danger.",
        "Impliquer les parents/tuteurs si cela est approprié et sans danger.",
        "Orienter vers les services/autorités compétents si nécessaire.",
      ],

      afterTitle: "Après confirmation d’une situation",
      afterText:
        "Si un cas est confirmé, Kids’ House agit immédiatement pour assurer la sécurité, accompagner l’enfant et la famille, et coordonner avec les services appropriés. Un suivi peut inclure des points réguliers, des aménagements scolaires et une vigilance continue.",

      proactiveTitle: "Mesures de prévention",
      proactiveBullets: [
        { label: "Recrutement sécurisé", desc: "Vérifications de références et antécédents si applicable." },
        { label: "Formation du personnel", desc: "Sensibilisation et formation aux procédures." },
        { label: "Sensibilisation des élèves", desc: "Leçons adaptées à l’âge (limites, demander de l’aide)." },
        { label: "Code de conduite", desc: "Attentes professionnelles claires pour tous les adultes." },
        { label: "Partenariat parents-école", desc: "Communication ouverte et conseils de sécurité." },
      ],

      cyberTitle: "Technologie et cyberharcèlement",
      cyberText:
        "Nous encourageons l’usage responsable du numérique et enseignons des comportements sûrs en ligne (selon l’âge). Nous recommandons aux familles de superviser les appareils à la maison et de signaler toute préoccupation.",

      safeTitle: "Un refuge sûr pour chaque enfant",
      safeText:
        "Kids’ House s’engage à créer un environnement accueillant et sécurisé pour tous. Nous prenons chaque signalement au sérieux et réagissons avec respect, soin et urgence.",

      contactTitle: "Nous contacter",
      contactText:
        "Pour toute question ou pour signaler une situation, contactez le Responsable Protection de l’Enfant.",

      teamTitle: "Équipe Protection de l’Enfant",
      teamRows: [
    { name: "Responsable Protection de l’Enfance (Judith Guibasi)", location: "Bureau administratif" },
    { name: "Référente Protection (Njuichange Divine)", location: "Aile Primaire" },
    { name: "Référente Protection (Djomo Liliane)", location: "Aile Maternelle" },
  ],
    },
  },
  admissionsFaq: {
  kicker: "ADMISSIONS",
  title: "Questions fréquentes (FAQ)",
  subtitle: "Des réponses rapides aux questions courantes sur l’admission, le programme et la vie scolaire.",

  quickNav: {
    admission: "Admissions",
    criteria: "Critères d’admission",
    process: "Procédure d’inscription",
    campus: "Notre campus",
    fees: "Frais de scolarité",
    store: "Boutique",
    faqs: "FAQ",
  },

  faqs: [
    {
      q: "Qui est propriétaire de l’école ?",
      a: "Kids’ House est une école à vocation communautaire. La fondatrice et l’équipe de direction assurent le pilotage quotidien, selon la mission et les valeurs de l’établissement.",
    },
    {
      q: "L’école est-elle réservée aux élèves camerounais ?",
      a: "Non. Kids’ House accueille des enfants de différentes nationalités et cultures, et valorise la diversité.",
    },
    {
      q: "Quel programme suivez-vous ?",
      a: "Nous proposons un enseignement équilibré et centré sur l’enfant : lecture, mathématiques, créativité et développement social.",
    },
    {
      q: "Proposez-vous des activités après l’école ?",
      a: "Oui. Nous proposons des activités d’enrichissement adaptées à l’âge (selon disponibilité) : arts, sports, clubs, etc.",
    },
    {
      q: "Peut-on programmer une visite ?",
      a: "Bien sûr. Les familles peuvent programmer une visite pour rencontrer l’équipe, découvrir les classes et poser leurs questions.",
    },
  ],
},

  stillQuestions: {
  title: "Vous avez encore des questions ?",
  text1: "Nous sommes là pour vous aider (admissions, frais, programmes).",
  text2: "Contactez-nous et nous vous répondrons rapidement.",
  phoneLabel: "Téléphone",
  emailLabel: "Email",
  buttonLabel: "Nous contacter",
},

  common: {
    admissionsCta: "Admissions",
  },

  learning: {
    title: "Apprentissage",
    subtitle: "Programmes, résultats et accompagnement.",
    early: "Petite section",
    primary: "Primaire",
    bilingual: "Sections bilingues",
    activities: "Activités",
  },

  home: {
    // Welcome section
    welcomeKicker: "Bienvenue",
    welcomeTitle: "Message de la Fondatrice & Directrice",
    welcomeDesc: "Un mot de bienvenue aux familles qui rejoignent Kids House à Douala.",

    founderName: "Guibasi Wasibamo Judith Joelle",
    founderRole: "Fondatrice & Directrice, Kids House",
    founderMeta: "Douala, Cameroun",
    since: "Depuis 2012",

    msgEn1:
      "Bienvenue à Kids House. Nous avons créé cette école avec une promesse : chaque enfant mérite un excellent départ — sur le plan scolaire et émotionnel. Nos classes sont calmes, structurées et joyeuses. Nous aidons les enfants à développer la confiance, le langage et de solides bases grâce aux routines, à l’apprentissage par le jeu et à un encadrement bienveillant.",

    msgEn2:
      "Nous croyons à une discipline positive, à un suivi personnalisé et à une forte collaboration avec les parents.",

    // Pills
    pill1: "Deux sections : Anglais & Français",
    pill2: "Routines sûres & attentes claires",
    pill3: "Éducateurs qualifiés et bienveillants",
    pill4: "Petits effectifs",
    pill5: "Apprendre par le jeu & les projets",
    pill6: "Partenariat avec les parents",

    signatureLine: "« Un regard positif sur chaque enfant. »",

    // CTAs
    ctaVisit: "Planifier une visite",
    ctaBilingual: "Découvrir Anglais & Français",

    // Why section
    whyKicker: "Admissions",
    whyTitle: "Pourquoi choisir notre école ?",
    why1: "Enseignants qualifiés et bienveillants",
    why2: "Bons résultats d’apprentissage",
    why3: "Routines sûres et attentes claires",
    why4: "Petits effectifs et attention",
    why5: "Activités et enrichissement",
    why6: "Communication parents-école",
    whySub: "Remplacez par 1–2 lignes d’explication.",

    // About section
    aboutKicker: "À propos",
    aboutTitle: "À propos de Kids House",
    aboutText:
      "Kids House est une école bilingue (Anglais & Français) de maternelle et primaire à Douala, Cameroun. Depuis 2012, nous aidons les enfants à construire de solides bases en lecture, mathématiques et comportement dans un environnement sûr, calme et structuré. Nous valorisons la discipline respectueuse, des éducateurs bienveillants et un partenariat fort avec les parents — parce que chaque enfant mérite de grandir avec confiance.",

    readMore: "En savoir plus",
    apply: "S’inscrire",

    // Facts section
    factsKicker: "Infos clés",
    factsTitle: "En bref",
    factFounded: "Fondée",
    factGrades: "Niveaux",
    factCampus: "Campus",
    factActivities: "Activités",
  },
};

export function getMessages(locale: Locale): Messages {
  return locale === "fr" ? FR : EN;
}
