"use client";

import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

export default function DesktopNav({
  isActive,
  handleMouseEnter,
  handleMouseLeave,
  activeDropdown,
  setSearchOpen,
  searchOpen,
  isOpen,
  setIsOpen,
}: DesktopNavProps) {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://ik.imagekit.io/pcet3dvcu/nohat_bg_removed_d048a959.png?updatedAt=1743195508683"
          alt="Nobel Campus Logo"
          width={160}
          height={40}
          className="object-contain mb-5"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-1">
        {mainNavItems.map((item) => {
          const active = isActive(item.href);
          // Only enable dropdown for destinations
          const hasDropdown = item.isDestinations;
          const isDropdownActive = activeDropdown === item.href;

          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => hasDropdown && handleMouseEnter(item.href)}
              onMouseLeave={hasDropdown ? handleMouseLeave : undefined}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  active
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={(e) => {
                  if (hasDropdown) {
                    e.preventDefault();
                    handleMouseEnter(item.href);
                  }
                }}
              >
                {item.label}
                {hasDropdown && (
                  <span
                    className={`absolute -bottom-1 left-3 right-3 h-0.5 rounded-full transition-colors ${
                      isDropdownActive ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Right side actions */}
      <div className="flex items-center space-x-2">
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
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </>
  );
}
