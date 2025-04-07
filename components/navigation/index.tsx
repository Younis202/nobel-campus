"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchOverlay from "./SearchOverlay";
import DestinationsMegaMenu from "./mega-menu/destinations";
import { regionPaths } from "./NavigationData";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState("Europe");
  
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  
  // Check if a navigation item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  
  // Handle dropdown menu on hover
  const handleMouseEnter = (href: string) => {
    setActiveDropdown(href);
    
    // If hovering on destinations, set active region based on current path
    if (href === "/destinations") {
      const currentRegionPath = Object.keys(regionPaths).find(path => 
        pathname.startsWith(path)
      );
      
      if (currentRegionPath) {
        setActiveRegion(regionPaths[currentRegionPath]);
      }
    }
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  
  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
    setSearchOpen(false);
  }, [pathname]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      if (searchRef.current && searchOpen && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);
  
  // Close search with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <TopBar />
      
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 relative">
            <DesktopNav 
              isActive={isActive}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeDropdown={activeDropdown}
              setSearchOpen={setSearchOpen}
              searchOpen={searchOpen}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
        
        <AnimatePresence>
          {activeDropdown === "/destinations" && (
            <DestinationsMegaMenu 
              activeDropdown={activeDropdown}
              dropdownRef={dropdownRef}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeRegion={activeRegion}
              setActiveRegion={setActiveRegion}
            />
          )}
        </AnimatePresence>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <MobileNav 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            isActive={isActive} 
          />
        )}
        
        {searchOpen && (
          <SearchOverlay 
            searchOpen={searchOpen} 
            searchRef={searchRef} 
            setSearchOpen={setSearchOpen} 
          />
        )}
      </AnimatePresence>
    </header>
  );
}