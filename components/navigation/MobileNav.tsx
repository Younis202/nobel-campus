"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronDown, Globe } from "lucide-react";
import { mainNavItems, destinationsData } from "./NavigationData";
import Image from "next/image";

const MobileDestinationsMenu = ({ setIsOpen }: { setIsOpen: (open: boolean) => void }) => {
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  const handleRegionClick = (region: string) => {
    setExpandedRegion(expandedRegion === region ? null : region);
    setExpandedCountry(null);
  };

  const handleCountryClick = (country: string) => {
    setExpandedCountry(expandedCountry === country ? null : country);
  };

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden mt-2 mb-4">
      {destinationsData.map((regionData) => (
        <div key={regionData.region} className="border-b border-gray-100 last:border-none">
          <div
            className="flex items-center justify-between p-3 cursor-pointer"
            onClick={() => handleRegionClick(regionData.region)}
          >
            <div className="font-medium text-gray-800">{regionData.region}</div>
            <ChevronDown 
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                expandedRegion === regionData.region ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          {expandedRegion === regionData.region && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pl-3 pr-1 pb-3"
            >
              <Link 
                href={`/destinations/${regionData.region.toLowerCase().replace(' & ', '-')}`}
                className="flex items-center justify-between py-2 px-2 text-sm text-teal-600"
                onClick={() => setIsOpen(false)}
              >
                <span>View all in {regionData.region}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              
              {regionData.featured && (
                <Link 
                  href={regionData.featured.link}
                  className="block mb-3 mt-1"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative h-24 rounded-lg overflow-hidden">
                    <Image 
                      src={regionData.featured.image} 
                      alt={regionData.featured.name}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                      loading="lazy" // بدلاً من eager
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                      <div className="text-white font-medium">{regionData.featured.name}</div>
                    </div>
                  </div>
                </Link>
              )}
              
              {regionData.countries.map((country) => (
                <div key={country.name} className="border-t border-gray-100 first:border-none">
                  <div
                    className="flex items-center justify-between py-2 px-2 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCountryClick(country.name);
                    }}
                  >
                    <div className="flex items-center">
                      {country.image && (
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-2 bg-gray-200">
                          <Image 
                            src={country.image} 
                            alt={country.name} 
                            width={24} 
                            height={24}
                            className="w-full h-full object-cover"
                            loading="lazy" // بدلاً من eager
                          />
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-800">{country.name}</span>
                    </div>
                    <ChevronDown 
                      className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                        expandedCountry === country.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  
                  {expandedCountry === country.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-8 pr-2 pb-2"
                    >
                      <Link 
                        href={`/destinations/${regionData.region.toLowerCase().replace(' & ', '-')}/${country.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center justify-between py-2 text-xs text-teal-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>View all in {country.name}</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                      
                      {country.cities.map((city) => (
                        <Link 
                          key={city}
                          href={`/destinations/${regionData.region.toLowerCase().replace(' & ', '-')}/${country.name.toLowerCase().replace(' ', '-')}/${city.toLowerCase().replace(' ', '-')}`}
                          className="block py-1.5 text-sm text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {city}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

const MobileNav = ({ 
  isOpen, 
  setIsOpen, 
  isActive 
}: { 
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void; 
  isActive: (href: string) => boolean;
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (href: string) => {
    if (href === '/destinations') {
      setExpandedItem(expandedItem === '/destinations' ? null : '/destinations');
    } else {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-white pt-20"
    >
      <div className="container mx-auto px-4 overflow-y-auto h-full pb-20">
        <nav className="space-y-1">
          {mainNavItems.map((item) => {
            const Icon = require("lucide-react")[item.icon];
            return (
              <div key={item.href}>
                <div
                  className={`flex items-center justify-between py-3 ${
                    isActive(item.href) ? 'text-teal-600' : 'text-gray-800'
                  }`}
                  onClick={() => handleItemClick(item.href)}
                >
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.isDestinations && (
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform duration-300 ${
                        expandedItem === '/destinations' ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                  {!item.isDestinations && <ChevronRight className="h-5 w-5" />}
                </div>
                
                {item.isDestinations && expandedItem === '/destinations' && (
                  <MobileDestinationsMenu setIsOpen={setIsOpen} />
                )}
                
                {item.href !== '/destinations' && (
                  <div className="h-px bg-gray-100 my-1"></div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link 
            href="/account" 
            className="block py-3 text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-medium">My Account</span>
          </Link>
          <div className="h-px bg-gray-100 my-1"></div>
          <Link 
            href="/help" 
            className="block py-3 text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-medium">Help & Support</span>
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link 
            href="/destinations" 
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            <Globe className="h-5 w-5" />
            <span>Explore All Destinations</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
