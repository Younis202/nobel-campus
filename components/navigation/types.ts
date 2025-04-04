import { DivideIcon as LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  megaMenu?: 'programs' | 'destinations';
}

export interface ContactInfo {
  icon: LucideIcon;
  text: string;
  href: string;
}

export interface Program {
  name: string;
  icon: LucideIcon;
  description: string;
  href: string;
}

