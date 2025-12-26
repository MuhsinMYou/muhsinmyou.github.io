import { LucideIcon } from 'lucide-react';

export interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company?: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}
