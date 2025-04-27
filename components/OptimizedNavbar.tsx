"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Simplified destinations data
const destinationsData = [
  {
    region: "Europe",
    countries: [
      { name: "France", cities: ["Paris", "Lyon"] },
      { name: "Italy", cities: ["Rome", "Florence"] },
      { name: "Spain", cities: ["Barcelona", "Madrid"] },
    ],
  },
  {
    region: "Asia",
    countries: [
      { name: "Japan", cities: ["Tokyo", "Kyoto"] },
      { name: "South Korea", cities: ["Seoul", "Busan"] },
      { name: "China", cities: ["Beijing", "Shanghai"] },
    ],
  },
  {
    region: "Middle East",
    countries: [
      { name: "UAE", cities: ["Dubai", "Abu Dhabi"] },
      { name: "Qatar", cities: ["Doha"] },
      { name: "Saudi Arabia", cities: ["Riyadh", "Jeddah"] },
    ],
  },
];

export default function OptimizedNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("Europe");

  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Check if a navigation item is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close dropdowns on route change
  useEffect(() => {
    setDestinationsOpen(false);
    setIsOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close if clicking outside both the navbar and the menu
      if (
        destinationsOpen &&
        menuRef.current &&
        navRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !navRef.current.contains(event.target as Node)
      ) {
        setDestinationsOpen(false);
      }
    };

    // Only add listener when menu is open
    if (destinationsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [destinationsOpen]);

  // Close with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setDestinationsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Toggle destinations menu
  const toggleDestinations = (e: React.MouseEvent) => {
    e.preventDefault();
    setDestinationsOpen(!destinationsOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-gray-50 py-1.5 text-xs text-gray-600 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex items-center space-x-4">
            <span>Email: contact@nobelcampus.com</span>
            <span>Phone: +1 (234) 567-8901</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="relative">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center justify-between h-16 relative"
            ref={navRef}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Nobel Campus"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={toggleDestinations}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/destinations") || destinationsOpen
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  aria-expanded={destinationsOpen}
                >
                  Destinations
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      destinationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {destinationsOpen && (
                  <div
                    className={`absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-primary`}
                  />
                )}
              </div>

              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                About
              </Link>

              <Link
                href="/faq"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/faq")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-primary rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              <Button asChild className="hidden md:flex">
                <Link href="/program-finder">Find Your Program</Link>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-500 hover:text-primary rounded-full hover:bg-gray-100 transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Destinations Dropdown - Simplified */}
        <AnimatePresence>
          {destinationsOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 bg-white shadow-md border-t border-gray-100 z-40"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex">
                  {/* Region selector */}
                  <div className="w-48 border-r border-gray-100 pr-4">
                    <h3 className="font-medium text-sm text-gray-400 mb-2">
                      Regions
                    </h3>
                    {destinationsData.map((region) => (
                      <button
                        key={region.region}
                        onClick={() => setActiveRegion(region.region)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeRegion === region.region
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {region.region}
                      </button>
                    ))}
                  </div>

                  {/* Countries and cities */}
                  <div className="flex-1 pl-6">
                    <h3 className="font-medium text-sm text-gray-400 mb-3">
                      Popular Destinations in {activeRegion}
                    </h3>

                    <div className="grid grid-cols-3 gap-4">
                      {destinationsData
                        .find((d) => d.region === activeRegion)
                        ?.countries.map((country) => (
                          <div key={country.name} className="space-y-1">
                            <Link
                              href={`/destinations/${activeRegion.toLowerCase()}/${country.name
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="font-medium text-gray-900 hover:text-primary transition-colors flex items-center"
                            >
                              <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
                              {country.name}
                            </Link>

                            <ul className="pl-5 space-y-1">
                              {country.cities.map((city) => (
                                <li key={city}>
                                  <Link
                                    href={`/destinations/${activeRegion.toLowerCase()}/${country.name
                                      .toLowerCase()
                                      .replace(" ", "-")}/${city
                                      .toLowerCase()
                                      .replace(" ", "-")}`}
                                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                                  >
                                    {city}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link
                        href={`/destinations/${activeRegion.toLowerCase()}`}
                        className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        View all in {activeRegion}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link
                href="/destinations"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/destinations")
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </Link>

              <Link
                href="/about"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/about")
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/faq"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/faq")
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive("/contact")
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2 mt-2 border-t border-gray-100">
                <Button asChild className="w-full">
                  <Link href="/program-finder" onClick={() => setIsOpen(false)}>
                    Find Your Program
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex items-center border-b border-gray-100">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search for destinations, programs..."
                  className="flex-1 outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500">
                  Start typing to search...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
