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

export const RECENT_WORKS = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1635326444826-06c8f85d2634?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
];

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