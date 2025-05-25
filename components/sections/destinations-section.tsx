"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Users, 
  Building, 
  Check,
  MapPin,
  Calendar
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function DestinationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

const destinations = [
  {
    country: "Turkey",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/hero_image_1%20(1).jpg?updatedAt=1747622959864",
    universities: "15+ Universities",
    description: "Experience rich cultural heritage while studying in top institutions",
    flag: "🇹🇷",
    websiteUrl: "https://turkey.yourcompany.com",
    studentCount: "5,000+ Students",
    features: ["Affordable tuition", "STEM programs", "Scholarships available"],
    year: "Fall 2025 Open"
  },
  {
    country: "United States",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/home-valuation.webp?updatedAt=1747622883700",
    universities: "30+ Universities",
    description: "World-leading research and diverse opportunities",
    flag: "🇺🇸",
    websiteUrl: "https://usa.yourcompany.com",
    studentCount: "12,000+ Students",
    features: ["Top global rankings", "Optional Practical Training", "Research focus"],
    year: "Fall 2025 Open"
  },
  {
    country: "United Kingdom",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/GettyImages-1176968994.jpg?updatedAt=1747622305612",
    universities: "15+ Universities",
    description: "High-quality education in a multicultural environment",
    flag: "🇬🇧",
    websiteUrl: "https://uk.yourcompany.com",
    studentCount: "8,500+ Students",
    features: ["Post-study work rights", "Healthcare included", "Safe environment"],
    year: "Winter 2025 Open"
  },
  {
    country: "Kazakhstan",
    image: "https://ik.imagekit.io/pcet3dvcu/nobelcampus/Kazakhstan%20(1)%20(1).jpg?updatedAt=1747622551162",
    universities: "25+ Universities",
    description: "Affordable education with growing international appeal",
    flag: "🇰🇿",
    websiteUrl: "https://kazakhstan.yourcompany.com",
    studentCount: "3,000+ Students",
    features: ["English-taught programs", "Low cost of living", "Modern campuses"],
    year: "Spring 2025 Open"
  }
];


  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Background elements - unchanged */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Animated elements - unchanged */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge className="mb-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium text-sm">
            <Globe className="h-3.5 w-3.5 mr-1" />
            GLOBAL EDUCATION NETWORK
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Select Your <span className="text-teal-600">Destination</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore country-specific portals featuring detailed information about universities, programs, admissions, and student life.
          </p>
        </motion.div>

        {/* Modified flex layout with refined card sizing */}
        <div className="flex flex-wrap justify-center gap-4">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 w-full sm:w-80 md:w-64 lg:w-72"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Image with overlay - unchanged design */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                
                <Image
                  src={destination.image}
                  alt={destination.country}
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                  loading="lazy" // بدلاً من eager
                />
                
                {/* Location Badge - unchanged design */}
                <div className="absolute top-3 left-3 z-20">
                  <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    <MapPin className="h-3 w-3 text-yellow-500" /> 
                    {destination.country}
                  </div>
                </div>
                
                {/* Year Badge - unchanged design */}
                <div className="absolute top-3 right-3 z-20">
                  <div className="bg-teal-50 text-teal-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {destination.year}
                  </div>
                </div>

                {/* Bottom info - unchanged design */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-20">
                  <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    <Building className="h-3 w-3 text-teal-500" />
                    {destination.universities}
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    <Users className="h-3 w-3 text-teal-500" />
                    {destination.studentCount}
                  </div>
                </div>
              </div>
              
              {/* Card Content - slightly adjusted padding for elegance */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-lg font-semibold mb-3 text-gray-800">
                  <span className="text-xl">{destination.flag}</span>
                  {destination.country}
                </div>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                
                {/* Features - unchanged design */}
                <div className="space-y-2 mb-5">
                  {destination.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <div className="bg-teal-50 p-1 rounded-full">
                        <Check className="h-2.5 w-2.5 text-teal-500" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Button - unchanged design */}
                <a 
                  href={destination.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium py-2 px-3 rounded-lg transition-all text-sm border border-teal-100"
                >
                  Explore {destination.country}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - unchanged */}
        <div className="text-center mt-12">
          <a 
            href="/destinations" 
            className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-lg shadow-sm border border-gray-100 hover:shadow hover:border-yellow-200 transition-all font-medium group text-gray-700 text-sm"
          >
            <Globe className="h-4 w-4 text-yellow-600" />
            <span>Explore All Study Destinations</span>
            <ArrowRight className="h-4 w-4 text-yellow-600" />
          </a>
          <p className="mt-4 text-sm text-gray-500 max-w-lg mx-auto">
            Our portals provide information about admission requirements, visa processes, accommodation, and student support services.
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
}
