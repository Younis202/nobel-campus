"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, User, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { mainNavItems } from "./NavigationData";

interface DesktopNavProps {
  isActive: (href: string) => boolean;
  handleMouseEnter: (href: string) => void;
  handleMouseLeave: () => void;
  activeDropdown: string | null;
  setSearchOpen: (open: boolean) => void;
  searchOpen: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  isActive, 
  handleMouseEnter, 
  handleMouseLeave, 
  activeDropdown, 
  setSearchOpen, 
  searchOpen,
  isOpen,
  setIsOpen
}) => {
  return (
    <>
      {/* Logo */}
      <Link href="/" className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src="https://ik.imagekit.io/pcet3dvcu/nohat_bg_removed_d048a959.png?updatedAt=1743195508683"
            alt="Nobel Campus Logo"
            width={160}
            height={40}
            className="object-contain"
            priority
          />
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center absolute left-0 right-0 mx-auto">
        <div className="flex items-center space-x-8 px-6 py-2 rounded-full bg-gray-50/80 backdrop-blur-sm shadow-sm">
          {mainNavItems.map((item) => {
            const Icon = require("lucide-react")[item.icon];
            return (
              <div 
                key={item.href} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.href)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center text-sm font-medium py-2 group ${
                    isActive(item.href) 
                      ? 'text-teal-600' 
                      : 'text-gray-700 hover:text-teal-600 transition-colors duration-300'
                  }`}
                >
                  <Icon className={`h-4 w-4 mr-2 ${isActive(item.href) ? 'text-teal-500' : 'text-gray-500'}`} />
                  {item.label}
                  {item.isDestinations && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.href ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>
                
                {/* Indicator dot for active item */}
                {isActive(item.href) && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center space-x-4 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 text-gray-600 hover:text-teal-600 transition-colors rounded-full bg-gray-50 hover:bg-gray-100"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <Button 
            className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-500 hover:to-blue-400 text-white font-medium px-5 py-2.5 rounded-full shadow-sm"
            asChild
          >
            <Link href="/destinations" className="flex items-center">
              Explore Destinations
              <motion.div
                className="ml-1.5"
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Globe className="h-4 w-4" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <motion.span 
                className="w-4 h-0.5 bg-current mb-1 block"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 2 : 0 }}
              />
              <motion.span 
                className="w-4 h-0.5 bg-current block"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span 
                className="w-4 h-0.5 bg-current mt-1 block"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -2 : 0 }}
              />
            </div>
          </motion.div>
        </button>
      </div>
    </>
  );
};

export default DesktopNav;