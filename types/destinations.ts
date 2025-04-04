export interface Destination {
  name: string;
  flag: string;
  featured?: boolean;
  popular?: boolean;
  href: string;
  image?: string;
  universities?: string;
  studentCount?: string;
  description?: string;
  features?: string[];
}

export interface Destinations {
  [key: string]: Destination[];
}

export const regionLabels: { [key: string]: string } = {
  europe: 'Europe',
  americas: 'Americas',
  asia: 'Asia',
  oceania: 'Oceania',
  africa: 'Africa'
};

export const destinations: Destinations = {
  europe: [
    { name: 'Turkey', flag: '🇹🇷', featured: true, popular: true, href: '/destinations/turkey' },
    { name: 'Germany', flag: '🇩🇪', featured: true, popular: true, href: '/destinations/germany' },
    { name: 'Italy', flag: '🇮🇹', popular: true, href: '/destinations/italy' },
    { name: 'Spain', flag: '🇪🇸', popular: true, href: '/destinations/spain' },
  ],
  asia: [
    { name: 'Japan', flag: '🇯🇵', featured: true, popular: true, href: '/destinations/japan' },
    { name: 'Kazakhstan', flag: '🇰🇿', featured: true, popular: true, href: '/destinations/kazakhstan' },
    { name: 'Saudi Arabia', flag: '🇸🇦', featured: true, popular: true, href: '/destinations/saudiarabia' },
    { name: 'China', flag: '🇨🇳', featured: true, href: '/destinations/china' },
  ],
  africa: [
    { name: 'Egypt', flag: '🇪🇬', featured: true, popular: true, href: '/destinations/egypt' },
    { name: 'South Africa', flag: '🇿🇦', featured: true, href: '/destinations/south-africa' },
  ],
  americas: [
    { name: 'United States', flag: '🇺🇸', featured: true, popular: true, href: '/destinations/usa' },
    { name: 'Canada', flag: '🇨🇦', featured: true, popular: true, href: '/destinations/canada' },
  ],
  oceania: [
    { name: 'Australia', flag: '🇦🇺', featured: true, popular: true, href: '/destinations/australia' },
  ],
};