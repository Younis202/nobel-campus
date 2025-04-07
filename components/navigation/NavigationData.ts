import { RegionData } from "@/types/destinations";

export const regionPaths: { [key: string]: string } = {
  "/destinations/europe": "Europe",
  "/destinations/asia": "Asia",
  "/destinations/middle-east": "Middle East"
};

export const mainNavItems = [
  {
    label: "Home",
    href: "/",
    icon: "Home"
  },
  {
    label: "Destinations",
    href: "/destinations",
    icon: "Globe",
    isDestinations: true
  },
  {
    label: "Programs",
    href: "/programs",
    icon: "GraduationCap"
  },
  {
    label: "About",
    href: "/about",
    icon: "Info"
  },
  {
    label: "Blog",
    href: "/blog",
    icon: "BookOpen"
  }
];

export const trendingDestinations = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    link: "/destinations/europe/france/paris"
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    link: "/destinations/asia/japan/tokyo"
  },
  {
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    link: "/destinations/middle-east/uae/dubai"
  },
  {
    name: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    link: "/destinations/europe/spain/barcelona"
  }
];

export const destinationsData: RegionData[] = [
  {
    region: "Europe",
    featured: {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      link: "/destinations/europe/france/paris",
      tags: ["Top Universities", "Culture", "History"]
    },
    countries: [
      {
        name: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Paris", "Lyon", "Nice", "Bordeaux"]
      },
      {
        name: "Italy",
        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Rome", "Florence", "Venice", "Milan"]
      },
      {
        name: "Spain",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Barcelona", "Madrid", "Seville", "Valencia"]
      }
    ]
  },
  {
    region: "Asia",
    featured: {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      link: "/destinations/asia/japan/tokyo",
      tags: ["Technology", "Innovation", "Tradition"]
    },
    countries: [
      {
        name: "Japan",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Tokyo", "Kyoto", "Osaka", "Sapporo"]
      },
      {
        name: "South Korea",
        image: "https://images.unsplash.com/photo-1538485399081-7c8070d2b843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Seoul", "Busan", "Incheon", "Daegu"]
      },
      {
        name: "China",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"]
      }
    ]
  },
  {
    region: "Middle East",
    featured: {
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      link: "/destinations/middle-east/uae/dubai",
      tags: ["Business", "Innovation", "Culture"]
    },
    countries: [
      {
        name: "UAE",
        image: "https://images.unsplash.com/photo-1548003693-b55d51032288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"]
      },
      {
        name: "Qatar",
        image: "https://images.unsplash.com/photo-1544032527-042957c6f7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Doha", "Al Wakrah", "Al Khor", "Dukhan"]
      },
      {
        name: "Saudi Arabia",
        image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        cities: ["Riyadh", "Jeddah", "Mecca", "Medina"]
      }
    ]
  }
];