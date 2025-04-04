"use client";

import { useState } from "react";
import { Search, GraduationCap, Globe2, ChevronDown, MapPin, Phone, Mail, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const programs = [
  { name: 'Undergraduate Study', icon: GraduationCap, href: '/programs/undergraduate' },
  { name: 'Graduate Programs', icon: GraduationCap, href: '/programs/graduate' },
  { name: 'Exchange Programs', icon: Globe2, href: '/programs/exchange' },
];

const contactInfo = [
  { icon: MapPin, text: 'Cairo, EG', href: 'https://maps.google.com/?q=Cairo,Egypt' },
  { icon: Phone, text: '(323) 794-7221', href: 'tel:(323)794-7221' },
  { icon: Mail, text: 'info@nobelcampus.com', href: 'mailto:info@nobelcampus.com' }
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "lg:hidden transition-all duration-300 ease-in-out",
        isOpen
          ? "max-h-[80vh] opacity-100 visible overflow-y-auto"
          : "max-h-0 opacity-0 invisible overflow-hidden"
      )}
    >
      <div className="container mx-auto px-4 py-4 bg-white border-t">
        {/* Mobile Search */}
        <div className="mb-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search programs or destinations..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* Mobile Menu Items */}
        <div className="space-y-1">
          {/* Programs Mobile Section */}
          <div>
            <div 
              className="flex items-center justify-between p-3.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => setActiveMegaMenu(activeMegaMenu === 'programs-mobile' ? null : 'programs-mobile')}
            >
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-3 text-blue-500" />
                <span>Programs</span>
              </div>
              <ChevronDown 
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  activeMegaMenu === 'programs-mobile' ? "rotate-180" : ""
                )} 
              />
            </div>
            
            {/* Programs Submenu */}
            <div 
              className={cn(
                "px-4 transition-all duration-200 overflow-hidden",
                activeMegaMenu === 'programs-mobile' ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              {programs.map((program, idx) => (
                <Link 
                  key={idx} 
                  href={program.href}
                  className="flex items-center p-3 pl-11 border-l border-blue-100 ml-2.5 mt-1 text-gray-600 hover:text-[#1a365d]"
                  onClick={onClose}
                >
                  <program.icon className="h-4 w-4 mr-3 text-blue-500" />
                  <span>{program.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Links */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-2 text-gray-600 hover:text-[#1a365d]"
                >
                  <item.icon className="h-4 w-4 mr-3 text-blue-500" />
                  {item.text}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="w-full border-[#1a365d] text-[#1a365d]"
              asChild
            >
              <Link 
                href="/student-portal"
                onClick={onClose}
              >
                <Users className="h-4 w-4 mr-2" />
                Student Portal
              </Link>
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-[#1a365d] to-[#2d4e8a]"
              asChild
            >
              <Link 
                href="/apply"
                onClick={onClose}
              >
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}