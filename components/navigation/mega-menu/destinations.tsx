"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { destinationsData } from "../NavigationData";

interface DestinationsMegaMenuProps {
  activeDropdown: string | null;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleMouseEnter: (path: string) => void;
  handleMouseLeave: () => void;
  activeRegion: string;
  setActiveRegion: (region: string) => void;
}

const DestinationsMegaMenu: React.FC<DestinationsMegaMenuProps> = ({
  activeDropdown,
  dropdownRef,
  handleMouseEnter,
  handleMouseLeave,
  activeRegion,
  setActiveRegion,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  // Ensure menu is visible when active
  useEffect(() => {
    if (activeDropdown === "/destinations") {
      setIsVisible(true);
    } else {
      // Small delay before hiding to prevent flickering
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeDropdown]);

  if (!isVisible) return null;

  // Simplified animation for better performance
  const menuAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
  };

  // Simplified destinations data for better performance
  const simplifiedDestinations = destinationsData.map((region) => ({
    region: region.region,
    featured: region.featured,
    countries: region.countries.slice(0, 3).map((country) => ({
      name: country.name,
      image: country.image,
      cities: country.cities.slice(0, 3),
    })),
  }));

  return (
    <motion.div
      ref={dropdownRef}
      initial={menuAnimation.initial}
      animate={menuAnimation.animate}
      exit={menuAnimation.exit}
      transition={menuAnimation.transition}
      onMouseEnter={() => handleMouseEnter("/destinations")}
      onMouseLeave={handleMouseLeave}
      className="absolute left-1/2 transform -translate-x-1/2 max-w-3xl w-full bg-white shadow-lg rounded-xl border border-gray-100 z-40 mt-2"
      style={{
        willChange: "opacity, transform",
        transformOrigin: "top center",
      }}
    >
      <div className="flex">
        {/* Left sidebar with regions */}
        <div className="w-48 border-r border-gray-100 p-2">
          {simplifiedDestinations.map((region) => (
            <button
              key={region.region}
              onClick={() => setActiveRegion(region.region)}
              className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                activeRegion === region.region
                  ? "bg-teal-50 text-teal-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {region.region}
            </button>
          ))}
          <div className="mt-2 pt-2 border-t border-gray-100">
            <Link
              href="/program-finder"
              className="flex items-center justify-between text-sm px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              <span>Program Finder</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right content area - optimized to reduce reflows */}
        <div className="flex-1 p-4 max-h-[70vh] overflow-y-auto">
          {/* Active Region Content */}
          {simplifiedDestinations.map(
            (regionData) =>
              regionData.region === activeRegion && (
                <div key={regionData.region}>
                  {/* Featured destination card */}
                  <div className="mb-4">
                    <Link
                      href={regionData.featured.link}
                      className="block group"
                    >
                      <div className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src={regionData.featured.image}
                          alt={regionData.featured.name}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-3 text-white">
                            <h3 className="font-bold">
                              {regionData.featured.name}
                            </h3>
                            {regionData.featured.tags &&
                              regionData.featured.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {regionData.featured.tags
                                    .slice(0, 2)
                                    .map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-1.5 py-0.5 text-xs bg-white/20 rounded-full"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Countries grid - optimized to reduce DOM elements */}
                  <div className="grid grid-cols-2 gap-3">
                    {regionData.countries.map((country) => (
                      <div key={country.name} className="group">
                        <Link
                          href={`/destinations/${regionData.region
                            .toLowerCase()
                            .replace(" & ", "-")}/${country.name
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                            {country.image && (
                              <Image
                                src={country.image}
                                alt={country.name}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                                loading="lazy" // بدلاً من eager
                              />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-gray-900 group-hover:text-teal-600 transition-colors">
                              {country.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {country.cities.length}{" "}
                              {country.cities.length === 1 ? "city" : "cities"}
                            </p>
                          </div>
                        </Link>

                        {/* City list - optimized to show only when needed */}
                        <div className="pl-10 mt-1 space-y-0.5">
                          {country.cities.map((city) => (
                            <Link
                              key={city}
                              href={`/destinations/${regionData.region
                                .toLowerCase()
                                .replace(" & ", "-")}/${country.name
                                .toLowerCase()
                                .replace(" ", "-")}/${city
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="block text-xs py-0.5 px-2 text-gray-600 hover:text-teal-600 transition-colors"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View all link */}
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link
                      href={`/destinations/${regionData.region
                        .toLowerCase()
                        .replace(" & ", "-")}`}
                      className="text-sm flex items-center text-teal-600 hover:text-teal-700 font-medium"
                    >
                      View all in {regionData.region}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationsMegaMenu;
