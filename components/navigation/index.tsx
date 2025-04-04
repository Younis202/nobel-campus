"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight, GraduationCap, Globe2, BookOpen, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PromoBanner } from "./promo-banner";
import { TopBar } from "./top-bar";
import { ProgramsMegaMenu } from "./mega-menu/programs";
import { DestinationsMegaMenu } from "./mega-menu/destinations";
import { MobileMenu } from "./mobile-menu";
import { NavItem } from "./types";
import { motion, AnimatePresence } from "framer-motion";

const mainNavItems: NavItem[] = [
  { 
    href: '/programs', 
    label: 'Programs', 
    icon: GraduationCap,
    megaMenu: 'programs'
  },
  { 
    href: '/destinations', 
    label: 'Destinations', 
    icon: Globe2,
    megaMenu: 'destinations'
  },
  { 
    href: '/about', 
    label: 'About Us', 
    icon: BookOpen 
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'programs' | 'destinations' | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and megamenu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const handleMouseEnter = (menuType: 'programs' | 'destinations') => {
    clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuType);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300);
  };

  return (
    <div className="relative z-50">
      <PromoBanner />
      <TopBar />

      <motion.nav 
        initial={{ opacity: 0.9 }}
        animate={{ 
          opacity: 1,
          boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)'
        }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="https://ik.imagekit.io/pcet3dvcu/nohat_bg_removed_d048a959.png?updatedAt=1743195508683"
                  alt="Nobel Campus Logo"
                  width={180}
                  height={40}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {mainNavItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.megaMenu && handleMouseEnter(item.megaMenu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-full transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-teal-600 bg-teal-50 font-medium'
                          : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                      }`}
                      aria-expanded={item.megaMenu === activeMegaMenu}
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full"
                    initial={false}
                    animate={{
                      width: isActive(item.href) ? '100%' : '0%',
                      opacity: isActive(item.href) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}

              {/* Search button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="ml-1 p-2 rounded-full text-gray-600 hover:text-teal-600 hover:bg-gray-100 transition-all"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </motion.button>

              {/* User account */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/account" 
                  className="p-2 rounded-full text-gray-600 hover:text-teal-600 hover:bg-gray-100 transition-all"
                  aria-label="My Account"
                >
                  <User className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="sm"
                  className="ml-4 bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  asChild
                >
                  <Link href="/apply">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-gray-600 hover:text-teal-600 hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-100"
            >
              <div className="container mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search programs, destinations, or topics..."
                    className="w-full p-3 pl-10 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Popular: Study Abroad, Semester Programs, Summer Internships
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega Menu Container */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div 
              ref={megaMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => activeMegaMenu && handleMouseEnter(activeMegaMenu)}
              onMouseLeave={handleMouseLeave}
              className="shadow-lg border-t border-gray-100"
            >
              {activeMegaMenu === 'programs' && <ProgramsMegaMenu />}
              {activeMegaMenu === 'destinations' && <DestinationsMegaMenu />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </motion.nav>
    </div>
  );
}