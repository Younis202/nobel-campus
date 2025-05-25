import { RegionData } from "@/types/destinations";

export const regionPaths: { [key: string]: string } = {
  "/destinations/europe": "Europe",
  "/destinations/asia": "Asia",
  "/destinations/middle-east": "Middle East"
};

export const mainNavItems = [
  {
    label: "Destinations",
    href: "/destinations",
    icon: "Globe",
    isDestinations: true
  },
  {
    label: "Programs",
    href: "/",
    icon: "GraduationCap"
  },
  {
    label: "About",
    href: "/",
    icon: "Info"
  },
];

export const trendingDestinations = [
  {
    name: "Paris, France",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/france.jpeg?updatedAt=1747611577387",
    link: "/destinations/europe/france/paris"
  },
  {
    name: "Tokyo, Japan",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/japan.jpeg?updatedAt=1747611579688",
    link: "/destinations/asia/japan/tokyo"
  },
  {
    name: "Dubai, UAE",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/emirates.jpeg?updatedAt=1747611577202",
    link: "/destinations/middle-east/uae/dubai"
  },
  {
    name: "Barcelona, Spain",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/spain.jpeg?updatedAt=1747611578297",
    link: "/destinations/europe/spain/barcelona"
  }
];

export const destinationsData: RegionData[] = [
  {
    region: "Europe",
    featured: {
      name: "Italy",
      image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/italy.jpeg?updatedAt=1747611578715",
      link: "/destinations/europe/italy",
      tags: ["Top Universities", "Culture", "History"]
    },
    countries: [
      {
        name: "France",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/france.jpeg?updatedAt=1747611577387",
        cities: ["Paris", "Lyon", "Nice", "Bordeaux"]
      },
      {
        name: "Italy",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/italy.jpeg?updatedAt=1747611578715",
        cities: ["Rome", "Florence", "Venice", "Milan"]
      },
      {
        name: "Spain",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/spain.jpeg?updatedAt=1747611578297",
        cities: ["Barcelona", "Madrid", "Seville", "Valencia"]
      }
    ]
  },
  {
    region: "Asia",
    featured: {
      name: "Tokyo, Japan",
      image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/japan.jpeg?updatedAt=1747611579688",
      link: "/destinations/asia/japan/tokyo",
      tags: ["Technology", "Innovation", "Tradition"]
    },
    countries: [
      {
        name: "Japan",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/japan.jpeg?updatedAt=1747611579688",
        cities: ["Tokyo", "Kyoto", "Osaka", "Sapporo"]
      },
      {
        name: "South Korea",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/South%20Korea.jpg?updatedAt=1747611572553",
        cities: ["Seoul", "Busan", "Incheon", "Daegu"]
      },
      {
        name: "China",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/china.jpg?updatedAt=1747611571545",
        cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"]
      }
    ]
  },
  {
    region: "Middle East",
    featured: {
      name: "Cairo, Egypt",
      image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/egypt.jpg?updatedAt=1747612277969",
      link: "/destinations/middle-east/egypt/cairo",
      tags: ["History", "Innovation", "Culture"]
    },
    countries: [
      {
        name: "Egypt",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/egypt.jpg?updatedAt=1747612277969",
        cities: ["Cairo", "Giza", "Alexandria", "October"]
      },
      {
        name: "Qatar",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/qatar.jpeg?updatedAt=1747611571614",
        cities: ["Doha", "Al Wakrah", "Al Khor", "Dukhan"]
      },
      {
        name: "Saudi Arabia",
        image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/Saudi-Arabia-Riyadh.jpg?updatedAt=1747611579247",
        cities: ["Riyadh", "Jeddah", "Mecca", "Medina"]
      }
    ]
  }
];
