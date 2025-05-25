export interface Program {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  href: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href: string;
}

export const programs: Program[] = [
  { 
    name: 'Undergraduate Study',
    icon: School,
    description: 'Bachelor degrees worldwide',
    href: '/programs/undergraduate'
  },
  {
    name: 'Graduate Programs',
    icon: Building2,
    description: 'Master & PhD opportunities',
    href: '/programs/graduate'
  },
  {
    name: 'Internships Abroad',
    icon: HeartHandshake,
    description: 'Professional development globally',
    href: '/programs/internships'
  },
  {
    name: 'Exchange Programs',
    icon: PlaneTakeoff,
    description: 'Cultural exchange opportunities',
    href: '/programs/exchange'
  },
  {
    name: 'PhD',
    icon: GraduationCap,
    description: 'Doctoral research opportunities',
    href: '/programs/phd'
  }
];

export const contactInfo: ContactInfo[] = [
  { icon: MapPin, text: 'Cairo, EG', href: 'https://maps.google.com/?q=Cairo,Egypt' },
  { icon: Phone, text: '(323) 794-7221', href: 'tel:(323)794-7221' },
  { icon: Mail, text: 'info@nobelcampus.com', href: 'mailto:info@nobelcampus.com' }
];

import { 
  School, 
  Building2, 
  HeartHandshake, 
  PlaneTakeoff, 
  GraduationCap,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';