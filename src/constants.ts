import { Smartphone, Globe, Layout, Database, Code, Palette, Film } from 'lucide-react';
import { ExpertiseItem, ProjectItem, TimelineItem, TestimonialItem } from './types';

export const EXPERTISE: ExpertiseItem[] = [
  {
    id: 1,
    title: "Graphic Design & Branding",
    description: "Adobe Photoshop & Illustrator Mastery. Creating impactful visual identities, logos, and marketing materials that communicate clearly.",
    icon: Palette,
  },
  {
    id: 2,
    title: "Video Editing & Motion",
    description: "Premiere Pro & After Effects. Transforming raw footage into engaging stories for promos, events, and digital campaigns.",
    icon: Film, // Updated to Film icon
  },
  {
    id: 3,
    title: "Full Stack Engineering",
    description: "Flutter, React, & Python. Building cross-platform mobile apps and responsive web solutions with clean code.",
    icon: Code,
  },
  {
    id: 4,
    title: "UI/UX Strategy",
    description: "Figma to Functional Product. Designing intuitive user experiences, wireframes, and high-fidelity prototypes.",
    icon: Layout,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "ZappQ Platform",
    description: "Flagship product development for Quadvare Technologies. A comprehensive digital solution combining intuitive UI with robust backend performance.",
    tags: ["Flutter", "Product Design", "Startup Growth"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Kolooz Branding",
    description: "Innovative visual content creation and motion graphics for digital campaigns, focusing on audience engagement and brand consistency.",
    tags: ["Branding", "Motion Graphics", "Adobe Suite"],
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Interactive Learning",
    description: "Mentorship program curriculum and visual aids designed to train the next generation of graphic designers and UI/UX professionals.",
    tags: ["Education", "Design Systems", "Mentorship"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

export const MAIN_WORKS = [
  `${import.meta.env.BASE_URL}works/Main Works/1.png`,
  `${import.meta.env.BASE_URL}works/Main Works/Adsin-Xmas-25-Post.png`,
  `${import.meta.env.BASE_URL}works/Main Works/Hiris ad1.png`,
  `${import.meta.env.BASE_URL}works/Main Works/Rami_06_VIP Card copy.jpg`,
  `${import.meta.env.BASE_URL}works/Main Works/adsin off pin posters@0.75x@0.75x@0.75x@0.75x.png`,
  `${import.meta.env.BASE_URL}works/Main Works/birora poster 1.png`,
  `${import.meta.env.BASE_URL}works/Main Works/kalamkaval adsin.png`,
  `${import.meta.env.BASE_URL}works/Main Works/kolooz indep day 25.png`,
  `${import.meta.env.BASE_URL}works/Main Works/relax copy.jpg`,
  `${import.meta.env.BASE_URL}works/Main Works/rr app launch copy.jpg`,
];

export const OTHER_WORKS = [
  `${import.meta.env.BASE_URL}works/Other Works/4.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Adsin League.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Artboard 1.png`,
  `${import.meta.env.BASE_URL}works/Other Works/CV - UAE.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Diwali Poster 25 storywqqqswwdxw.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Free_A4_Brochure_Mockup_1 copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/Hero Poster copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/LYNQ - Entrepreneurship day.png`,
  `${import.meta.env.BASE_URL}works/Other Works/LYNQ - Friendship Day 2 copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/LYNQ - Onboarding Offline Human page1.png`,
  `${import.meta.env.BASE_URL}works/Other Works/LYNQ - Rockey Roger.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Poster Package.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Rakin Hiring.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Rakin Services.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Rami_04_teeth ara.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/Rami_07 Full body offers.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Stranger Things Adsin.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Talent coming copy.png`,
  `${import.meta.env.BASE_URL}works/Other Works/Talent friendship day copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/adsin 2 copy.png`,
  `${import.meta.env.BASE_URL}works/Other Works/b school pin posters12.png`,
  `${import.meta.env.BASE_URL}works/Other Works/branding - 4444 (2).png`,
  `${import.meta.env.BASE_URL}works/Other Works/carousel 1.png`,
  `${import.meta.env.BASE_URL}works/Other Works/carousel 2.png`,
  `${import.meta.env.BASE_URL}works/Other Works/citas hiring 1.png`,
  `${import.meta.env.BASE_URL}works/Other Works/creatives pin poster.png`,
  `${import.meta.env.BASE_URL}works/Other Works/emirates.png`,
  `${import.meta.env.BASE_URL}works/Other Works/final.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/force urbania copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/hana v - on board copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/ideal banner.png`,
  `${import.meta.env.BASE_URL}works/Other Works/ideal bsc poster.png`,
  `${import.meta.env.BASE_URL}works/Other Works/kerala piravi adsin31.png`,
  `${import.meta.env.BASE_URL}works/Other Works/medarab eid 2025 2.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/orfila-gmap offer copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/posters poster.png`,
  `${import.meta.env.BASE_URL}works/Other Works/rr-calicut coming copy.png`,
  `${import.meta.env.BASE_URL}works/Other Works/rr-env copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/rr-irctc copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/rr-offer copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/saudi poster copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/spo2.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/thai veg salad.png`,
  `${import.meta.env.BASE_URL}works/Other Works/turbit clt.png`,
  `${import.meta.env.BASE_URL}works/Other Works/turbit eid 2025.png`,
  `${import.meta.env.BASE_URL}works/Other Works/woodbine onam poster 2025 colr.png`,
  `${import.meta.env.BASE_URL}works/Other Works/woodbine-3-manjeri copy.jpg`,
  `${import.meta.env.BASE_URL}works/Other Works/woodbine-7-onam sadhya.png`,
];

export const ALL_WORKS = [...MAIN_WORKS, ...OTHER_WORKS];
export const RECENT_WORKS = ALL_WORKS; // Keep for backward compatibility if needed

export const TIMELINE: TimelineItem[] = [
  {
    id: 1,
    year: "2020-2024",
    title: "Graphic Designer",
    company: "Creatido Designing Studio",
    description: "Freelance designer creating diverse, impactful designs for global clients across India, GCC, and the UK.",
  },
  {
    id: 2,
    year: "2023-2025",
    title: "Head of Design",
    company: "Quadvare Technologies",
    description: "Contributed to the development of ZappQ and provided creative leadership for the startup's growth trajectory.",
  },
  {
    id: 3,
    year: "2025",
    title: "Graphic Designer",
    company: "Kolooz Brands Design",
    description: "Designed engaging visual content and motion graphics for digital campaigns and brand innovation.",
  },
  {
    id: 4,
    year: "Present",
    title: "Graphic Designing Mentor",
    company: "Adsin The Learning Hub",
    description: "Training students in Graphic Designing and UI/UX, guiding them through practical projects and industry standards.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Muhammed Shahid",
    role: "Quadvare Technologies",
    quote: "Muhsin provided exceptional creative support for our startup's growth, blending technical insight with design leadership.",
    image: "https://ui-avatars.com/api/?name=Muhammed+Shahid&background=0D8ABC&color=fff",
  },
  {
    id: 2,
    name: "Mr. Unneenkutty",
    role: "Kolooz Brands",
    quote: "His innovation in visual content and motion graphics significantly boosted our audience engagement.",
    image: "https://ui-avatars.com/api/?name=Unneenkutty&background=ff6b00&color=fff",
  },
  {
    id: 3,
    name: "Ahmad Sinan",
    role: "Collaborator",
    quote: "A versatile professional who seamlessly bridges the gap between creative vision and technical execution.",
    image: "https://ui-avatars.com/api/?name=Ahmad+Sinan&background=64ffda&color=000",
  },
];