'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  Award,
  Calendar,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from './animations/fade-in';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Animated circles - matching testimonials section */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-yellow-400/20 particle" style={{ animationDuration: '25s' }} />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-teal-400/20 particle" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="block mb-4">
                <Image
                  src="https://ik.imagekit.io/pcet3dvcu/nohat_bg_removed_d048a959.png?updatedAt=1743195508683"
                  alt="Nobel Campus Logo"
                  width={180}
                  height={60}
                  className="w-full max-w-[180px]"
                  priority
                />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nobel Campus guides students through every step of their international education journey. From university selection to visa applications, we're dedicated to helping you achieve your academic dreams abroad.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full flex items-center justify-center bg-white text-teal-500 border border-gray-200 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <Badge className="badge-yellow mt-2">Trusted by 10,000+ Students</Badge>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h4 className="text-gray-800 font-semibold text-lg flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-teal-500" />
                Programs
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/programs/undergraduate', label: 'Undergraduate Studies' },
                  { href: '/programs/postgraduate', label: 'Postgraduate Studies' },
                  { href: '/programs/language', label: 'Language Programs' },
                  { href: '/programs/summer', label: 'Summer Schools' },
                  { href: '/programs/research', label: 'Research Programs' },
                ].map((link) => (
                  <li key={link.href} className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Link
                      href={link.href}
                      className="flex items-center group"
                    >
                      <ChevronRight className="h-3.5 w-3.5 mr-2 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="card-yellow p-4 mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4 text-yellow-500" />
                  <h5 className="font-medium text-gray-800">Next Info Session</h5>
                </div>
                <p className="text-sm text-gray-600">April 15, 2025 • Online</p>
                <Link href="/events" className="text-xs text-teal-500 hover:underline mt-1 block">
                  View All Events →
                </Link>
              </div>
            </div>

            {/* Study Destinations */}
            <div className="space-y-4">
              <h4 className="text-gray-800 font-semibold text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2 text-teal-500" />
                Study Destinations
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/destinations/usa', label: 'United States', flag: '🇺🇸' },
                  { href: '/destinations/uk', label: 'United Kingdom', flag: '🇬🇧' },
                  { href: '/destinations/canada', label: 'Canada', flag: '🇨🇦' },
                  { href: '/destinations/australia', label: 'Australia', flag: '🇦🇺' },
                  { href: '/destinations/europe', label: 'Europe', flag: '🇪🇺' },
                  { href: '/destinations/asia', label: 'Asia', flag: '🇸🇬' },
                ].map((destination) => (
                  <li key={destination.href} className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Link
                      href={destination.href}
                      className="flex items-center"
                    >
                      <span className="mr-2 text-base">{destination.flag}</span>
                      {destination.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Student Success Stats */}
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-yellow-500">97%</div>
                  <div className="text-xs text-gray-600">Visa Success</div>
                </div>
                <div className="text-center bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-teal-500">75+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-gray-800 font-semibold text-lg flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-teal-500" />
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    Nobel Campus Building<br />
                    15 Education Lane<br />
                    Cairo, Egypt
                  </span>
                </li>
                <li>
                  <a
                    href="tel:(323)794-7221"
                    className="text-gray-600 hover:text-teal-500 transition-colors flex items-center space-x-3"
                  >
                    <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span>(323) 794-7221</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@nobelcampus.com"
                    className="text-gray-600 hover:text-teal-500 transition-colors flex items-center space-x-3"
                  >
                    <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span>info@nobelcampus.com</span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-teal-50 to-teal-100">
                <h5 className="font-medium text-gray-800 mb-2">Free Consultation</h5>
                <p className="text-sm text-gray-600 mb-3">Get personalized study abroad guidance from our experts</p>
                <Button 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white transition-colors duration-300 text-sm py-2"
                  asChild
                >
                  <Link href="/contact">
                    Book Your Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Recognition Section */}
          <div className="mt-16 py-8 border-t border-gray-200">
            <div className="text-center mb-6">
              <h4 className="text-gray-800 font-medium mb-4">Recognized By</h4>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-8 py-8 border-t border-gray-200">
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex-1">
                  <h4 className="text-gray-800 font-medium mb-1">Stay Updated</h4>
                  <p className="text-sm text-gray-600">Get the latest on scholarships, university applications & more</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Nobel Campus. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { href: '/', label: 'Privacy Policy' },
                  { href: '/', label: 'Terms of Service' },
                  { href: '/', label: 'FAQ' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-teal-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Add the same style as in testimonials */}
      <style jsx global>{`
        .badge-yellow {
          background: linear-gradient(to right, rgba(234, 179, 8, 0.1), rgba(245, 158, 11, 0.1));
          color: #d97706;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(234, 179, 8, 0.2);
        }
        
        .card-yellow {
          background-color: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(234, 179, 8, 0.1);
        }
        
        .btn-teal {
          background-color: #14b8a6;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .btn-teal:hover {
          background-color: #0d9488;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes particle-float {
          0% { transform: translate(0, 0); opacity: 0.6; }
          25% { transform: translate(50px, 10px); opacity: 0.3; }
          50% { transform: translate(100px, -20px); opacity: 0.6; }
          75% { transform: translate(50px, -40px); opacity: 0.3; }
          100% { transform: translate(0, 0); opacity: 0.6; }
        }
        
        .particle {
          animation: particle-float 30s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
