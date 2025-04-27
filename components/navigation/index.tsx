"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DesktopNav from "./DesktopNav";
import DestinationsMegaMenu from "./mega-menu/destinations";
import MobileNav from "./MobileNav";
import { regionPaths } from "./NavigationData";
import SearchOverlay from "./SearchOverlay";
import TopBar from "./TopBar";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState("Europe");
  const [menuVisible, setMenuVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  // Check if a navigation item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Handle dropdown menu on hover with debounce for stability
  const handleMouseEnter = (href: string) => {
    // Only allow destinations dropdown
    if (href !== "/destinations") return;

    // Clear any existing timeout to prevent race conditions
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setActiveDropdown(href);
    setMenuVisible(true);

    // If hovering on destinations, set active region based on current path
    if (href === "/destinations") {
      const currentRegionPath = Object.keys(regionPaths).find((path) =>
        pathname.startsWith(path)
      );

      if (currentRegionPath) {
        setActiveRegion(regionPaths[currentRegionPath]);
      }
    }
  };

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    // Use timeout to prevent menu from closing immediately
    // This helps with accidental mouse movements
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setMenuVisible(false);
    }, 200); // Increased timeout for better usability
  };

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
    setSearchOpen(false);
    setMenuVisible(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close if clicking outside both the navbar and dropdown
      if (
        dropdownRef.current &&
        navRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !navRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setMenuVisible(false);
      }

      if (
        searchRef.current &&
        searchOpen &&
        !searchRef.current.contains(event.target as Node)
      ) {
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
        setActiveDropdown(null);
        setMenuVisible(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <TopBar />

      <div className="relative">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center justify-between h-16 relative"
            ref={navRef}
          >
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
          {activeDropdown === "/destinations" && menuVisible && (
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
