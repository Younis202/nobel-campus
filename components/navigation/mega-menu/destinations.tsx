"use client";

import { useState, useEffect, useRef } from "react";
import { MapPinned, Globe, ArrowRight, Compass, Flag, TrendingUp, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface DestinationsMegaMenuProps {
  onClose: () => void;
}

const regionLabels: { [key: string]: string } = {
  europe: 'Europe',
  americas: 'Americas',
  asia: 'Asia',
  oceania: 'Oceania',
  africa: 'Africa'
};

const destinations = {
  europe: [
    { name: 'Turkey', flag: '🇹🇷', featured: true, popular: true, href: '/destinations/turkey' },
    { name: 'Germany', flag: '🇩🇪', featured: true, popular: true, href: '/destinations/germany' },
    { name: 'Italy', flag: '🇮🇹', popular: true, href: '/destinations/italy' },
    { name: 'Spain', flag: '🇪🇸', popular: true, href: '/destinations/spain' },
    { name: 'France', flag: '🇫🇷', href: '/destinations/france' },
    { name: 'United Kingdom', flag: '🇬🇧', href: '/destinations/uk' },
    { name: 'Switzerland', flag: '🇨🇭', href: '/destinations/switzerland' },
    { name: 'Netherlands', flag: '🇳🇱', href: '/destinations/netherlands' },
  ],
  asia: [
    { name: 'Japan', flag: '🇯🇵', featured: true, popular: true, href: '/destinations/japan' },
    { name: 'Kazakhstan', flag: '🇰🇿', featured: true, popular: true, href: '/destinations/kazakhstan' },
    { name: 'Saudi Arabia', flag: '🇸🇦', featured: true, popular: true, href: '/destinations/saudiarabia' },
    { name: 'China', flag: '🇨🇳', featured: true, href: '/destinations/china' },
    { name: 'South Korea', flag: '🇰🇷', href: '/destinations/south-korea' },
    { name: 'Singapore', flag: '🇸🇬', href: '/destinations/singapore' },
    { name: 'Malaysia', flag: '🇲🇾', href: '/destinations/malaysia' },
    { name: 'India', flag: '🇮🇳', href: '/destinations/india' },
  ],
  africa: [
    { name: 'Egypt', flag: '🇪🇬', featured: true, popular: true, href: '/destinations/egypt' },
    { name: 'South Africa', flag: '🇿🇦', featured: true, href: '/destinations/south-africa' },
    { name: 'Morocco', flag: '🇲🇦', href: '/destinations/morocco' },
    { name: 'Ghana', flag: '🇬🇭', href: '/destinations/ghana' },
    { name: 'Kenya', flag: '🇰🇪', href: '/destinations/kenya' },
    { name: 'Nigeria', flag: '🇳🇬', href: '/destinations/nigeria' },
  ],
  americas: [
    { name: 'United States', flag: '🇺🇸', featured: true, popular: true, href: '/destinations/usa' },
    { name: 'Canada', flag: '🇨🇦', featured: true, popular: true, href: '/destinations/canada' },
    { name: 'Brazil', flag: '🇧🇷', href: '/destinations/brazil' },
    { name: 'Mexico', flag: '🇲🇽', href: '/destinations/mexico' },
    { name: 'Argentina', flag: '🇦🇷', href: '/destinations/argentina' },
    { name: 'Colombia', flag: '🇨🇴', href: '/destinations/colombia' },
  ],
  oceania: [
    { name: 'Australia', flag: '🇦🇺', featured: true, popular: true, href: '/destinations/australia' },
    { name: 'New Zealand', flag: '🇳🇿', href: '/destinations/new-zealand' },
    { name: 'Fiji', flag: '🇫🇯', href: '/destinations/fiji' },
  ],
};

const featuredImages = {
  europe: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/destination_europe.jpg",
  asia: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/destination_asia.jpg",
  americas: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/destination_americas.jpg",
  africa: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/destination_africa.jpg",
  oceania: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/destination_oceania.jpg",
};

export function DestinationsMegaMenu({ onClose }: DestinationsMegaMenuProps) {
  const [selectedRegion, setSelectedRegion] = useState("europe");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const regionDescriptions = useRef({
    europe: "Explore historic universities, diverse cultures, and innovative educational approaches across European destinations.",
    asia: "Experience ancient traditions alongside cutting-edge technology in Asia's dynamic educational environments.",
    americas: "Discover world-class universities and vibrant campus cultures across North and South America.",
    africa: "Connect with rich heritage and emerging educational opportunities throughout the African continent.",
    oceania: "Study in the natural paradise of Oceania with its world-renowned research institutions and quality of life.",
  });

  useEffect(() => {
    setIsLoading(true);
    // Simulate image loading
    const timer = setTimeout(() => {
      setFeaturedImage(featuredImages[selectedRegion as keyof typeof featuredImages] || featuredImages.europe);
      setIsLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [selectedRegion]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  const getDestinationColumns = () => {
    const items = destinations[selectedRegion as keyof typeof destinations];
    const itemCount = items.length;
    // Determine optimal column layout
    return itemCount <= 4 ? "grid-cols-2" : 
           itemCount <= 8 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : 
           "grid-cols-2 md:grid-cols-4";
  };

  return (
    <div className="absolute left-0 w-full bg-white border-t border-yellow-100 shadow-xl z-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Subtle gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-teal-400 to-yellow-400 opacity-50" />
      
      <div className="container mx-auto px-4 py-8 relative">
        {/* Region Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center space-x-1 p-1.5 bg-yellow-50/50 rounded-xl">
            {Object.keys(regionLabels).map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                  selectedRegion === region 
                    ? 'bg-white text-teal-600 shadow-sm' 
                    : 'text-gray-600 hover:text-teal-500 hover:bg-white/50'
                }`}
              >
                <Globe className={`h-3.5 w-3.5 mr-2 ${
                  selectedRegion === region ? 'text-yellow-500' : 'text-teal-400'
                }`} />
                {regionLabels[region]}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Destinations Grid with Improved Animation */}
          <motion.div 
            className="md:col-span-8"
            key={selectedRegion}
            initial="hidden"
            animate="show"
            variants={container}
          >
            <h3 className="font-medium text-gray-700 mb-5 flex items-center">
              <Flag className="h-4 w-4 mr-2 text-teal-500" />
              Study Destinations in {regionLabels[selectedRegion]}
            </h3>
            
            <div className={`grid ${getDestinationColumns()} gap-x-6 gap-y-4`}>
              {destinations[selectedRegion as keyof typeof destinations].map((destination, idx) => (
                <motion.div key={idx} variants={item}>
                  <Link
                    href={destination.href}
                    className="group block"
                    onClick={onClose}
                  >
                    <div className="p-3 rounded-lg transition-all duration-300 group-hover:bg-yellow-50 group-hover:shadow-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 text-xl flex justify-center">{destination.flag}</div>
                        <span className={`font-medium group-hover:text-teal-600 transition-colors duration-200 ml-2 ${
                          destination.popular ? 'text-gray-800' : 'text-gray-600'
                        }`}>
                          {destination.name}
                        </span>
                      </div>
                      
                      {destination.popular && (
                        <div className="mt-2 flex">
                          <span className="ml-8 px-2 py-0.5 text-xs badge-yellow text-xs flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="ml-8 mt-2 h-0.5 w-0 group-hover:w-2/3 bg-gradient-to-r from-yellow-400 to-teal-400 transition-all duration-300 rounded-full"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Featured Destination with Loading State */}
          <div className="md:col-span-4">
            <motion.div 
              className="card-yellow overflow-hidden h-full"
              key={`featured-${selectedRegion}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Compass className="h-5 w-5 mr-2 text-yellow-500" />
                  Featured Destination
                </h3>
                
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-md group">
                  {isLoading ? (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  ) : (
                    <>
                      <Image 
                        src={featuredImage}
                        alt={`Study in ${regionLabels[selectedRegion]}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <div className="badge-teal inline-block mb-2 flex items-center">
                      <MapPin className="h-3 w-3 mr-1.5" /> Discover
                    </div>
                    <p className="text-white font-medium text-lg flex items-center">
                      Study in {regionLabels[selectedRegion]}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-5 line-clamp-3">
                  {regionDescriptions.current[selectedRegion as keyof typeof regionDescriptions.current]}
                </p>
                
                <div className="flex space-x-3 mb-5">
                  {destinations[selectedRegion as keyof typeof destinations]
                    .filter(d => d.popular)
                    .slice(0, 3)
                    .map((popularDest, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-lg mr-1">{popularDest.flag}</span>
                        <span className="text-xs text-gray-600">{popularDest.name}</span>
                      </div>
                    ))}
                  <div className="flex items-center text-teal-600 text-xs">
                    <span>+more</span>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full btn-teal flex items-center justify-center"
                  asChild
                >
                  <Link 
                    href={`/destinations/${selectedRegion}`}
                    onClick={onClose}
                  >
                    Explore {regionLabels[selectedRegion]} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}