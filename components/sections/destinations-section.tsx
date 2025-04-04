"use client";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Users, 
  Building, 
  Check,
  MapPin,
  GraduationCap,
  Calendar
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";

export function DestinationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const destinations = [
    {
      country: "Turkey",
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
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
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
      universities: "30+ Universities",
      description: "World-leading research and diverse opportunities",
      flag: "🇺🇸",
      websiteUrl: "https://usa.yourcompany.com",
      studentCount: "12,000+ Students",
      features: ["Top global rankings", "Optional Practical Training", "Research focus"],
      year: "Fall 2025 Open"
    },
    {
      country: "Australia",
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
      universities: "15+ Universities",
      description: "High-quality education in a multicultural environment",
      flag: "🇦🇺",
      websiteUrl: "https://australia.yourcompany.com",
      studentCount: "8,500+ Students",
      features: ["Post-study work rights", "Healthcare included", "Safe environment"],
      year: "Winter 2025 Open"
    },
    {
      country: "Canada",
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg",
      universities: "25+ Universities",
      description: "Excellence in education with work opportunities",
      flag: "🇨🇦",
      websiteUrl: "https://canada.yourcompany.com",
      studentCount: "10,200+ Students",
      features: ["Immigration pathways", "Co-op programs", "Multicultural cities"],
      year: "Spring 2025 Open"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-yellow-400/20 particle" style={{ animationDuration: '25s' }} />
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-teal-400/20 particle" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 rounded-full bg-yellow-400/20 particle" style={{ animationDuration: '22s', animationDelay: '5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full font-medium text-sm border border-yellow-200">
            <Globe className="h-3.5 w-3.5 mr-1" />
            GLOBAL EDUCATION NETWORK
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Select Your <span className="text-teal-600">Destination</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore country-specific portals featuring detailed information about universities, programs, admissions, and student life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl border-gray-100 border`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Image with overlay */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    <MapPin className="h-3.5 w-3.5 text-yellow-500" /> 
                    {destination.country}
                  </div>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-md">
                    <Calendar className="h-3 w-3" />
                    {destination.year}
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                  <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    <Building className="h-3 w-3 text-teal-500" />
                    {destination.universities}
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    <Users className="h-3 w-3 text-teal-500" />
                    {destination.studentCount}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-800">
                  <span className="text-2xl">{destination.flag}</span>
                  {destination.country}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{destination.description}</p>
                
                <div className="space-y-2.5 mb-6">
                  {destination.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="bg-teal-50 p-1 rounded-full">
                        <Check className="h-3 w-3 text-teal-500" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a 
                  href={destination.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium py-2.5 px-4 rounded-full transition-all text-sm border border-teal-100"
                >
                  Explore {destination.country}
                  <ExternalLink className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/destinations" 
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all font-medium group text-gray-700"
          >
            <div className="bg-yellow-50 p-1.5 rounded-full">
              <Globe className="h-4 w-4 text-yellow-600" />
            </div>
            <span>Explore All Study Destinations</span>
            <ArrowRight className="h-4 w-4 text-yellow-600 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-5 text-sm text-gray-500 max-w-lg mx-auto">
            Our portals provide in-depth information about admission requirements, visa processes, accommodation, and student support services.
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes particle {
          0% { transform: translate(0, 0); opacity: 0.6; }
          25% { transform: translate(50px, -30px); opacity: 0.8; }
          50% { transform: translate(100px, 0); opacity: 0.6; }
          75% { transform: translate(50px, 30px); opacity: 0.8; }
          100% { transform: translate(0, 0); opacity: 0.6; }
        }
        
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        
        .particle {
          animation-name: particle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
}