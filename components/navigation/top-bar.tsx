"use client";

import { Users, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  { icon: MapPin, text: 'Cairo, EG', href: 'https://maps.google.com/?q=Cairo,Egypt' },
  { icon: Phone, text: '(323) 794-7221', href: 'tel:(323)794-7221' },
  { icon: Mail, text: 'info@nobelcampus.com', href: 'mailto:info@nobelcampus.com' }
];

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4e8a] text-white py-2 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center text-sm hover:text-blue-200 transition-colors duration-200"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.text}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/student-portal"
              className="flex items-center text-sm hover:text-blue-200 transition-colors duration-200"
            >
              <Users className="h-4 w-4 mr-2" />
              Student Portal
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/faq"
              className="text-sm hover:text-blue-200 transition-colors duration-200"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-blue-200 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}