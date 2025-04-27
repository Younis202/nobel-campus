import React, { RefObject } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight } from "lucide-react";
import { trendingDestinations } from "./NavigationData";

interface SearchOverlayProps {
  searchOpen: boolean;
  searchRef: RefObject<HTMLDivElement>;
  setSearchOpen: (open: boolean) => void;
}

const SearchOverlay = ({ searchOpen, searchRef, setSearchOpen }: SearchOverlayProps) => {
  if (!searchOpen) return null;
  return (
    <motion.div
      ref={searchRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-start justify-center pt-20"
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="p-4 flex items-center border-b border-gray-100">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search destinations, programs, or universities..."
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button 
            onClick={() => setSearchOpen(false)}
            className="p-1 text-gray-400 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {['Business programs', 'Summer in Europe', 'Language courses', 'Study abroad scholarships', 'Fall semester programs'].map((term) => (
                <Link 
                  key={term} 
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded-full transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-500">Trending Destinations</h3>
              <Link href="/destinations/trending" className="text-xs text-teal-600 hover:text-teal-700 flex items-center">
                View all <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trendingDestinations.map((destination) => (
                <Link 
                  key={destination.name}
                  href={destination.link}
                  className="group"
                  onClick={() => setSearchOpen(false)}
                >
                  <div className="rounded-lg overflow-hidden h-20 mb-1">
                    <Image 
                      src={destination.image}
                      alt={destination.name}
                      width={200}
                      height={100}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="font-medium text-xs text-gray-900 group-hover:text-teal-600 transition-colors">
                    {destination.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 p-4 bg-gray-50 text-sm text-center text-gray-500">
          Press ESC to close search
        </div>
      </div>
    </motion.div>
  );
};

export default SearchOverlay;