"use client";

import { useState } from "react";
import { School, Building2, HeartHandshake, PlaneTakeoff, Calendar, Sparkles, ArrowRight, ChevronRight, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const programs = [
  { 
    name: 'Undergraduate Study', 
    icon: School, 
    description: 'Bachelor degrees worldwide', 
    href: '/programs/undergraduate',
    accent: 'teal'
  },
  { 
    name: 'Graduate Programs', 
    icon: Building2, 
    description: 'Master & PhD opportunities', 
    href: '/programs/graduate',
    accent: 'yellow'
  },
  { 
    name: 'Internships Abroad', 
    icon: HeartHandshake, 
    description: 'Professional development globally', 
    href: '/programs/internships',
    accent: 'teal'
  },
  { 
    name: 'Exchange Programs', 
    icon: PlaneTakeoff, 
    description: 'Cultural exchange opportunities', 
    href: '/programs/exchange',
    accent: 'yellow'
  }
];

const popularPrograms = [
  'Business Management in Japan',
  'Engineering in Germany',
  'Environmental Studies in Australia',
  'Media & Art in Turkey'
];

interface ProgramsMegaMenuProps {
  onClose: () => void;
}

export function ProgramsMegaMenu({ onClose }: ProgramsMegaMenuProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="absolute left-0 w-full bg-white border-t border-yellow-100 shadow-xl z-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Subtle gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-teal-400 to-yellow-400 opacity-50" />
      
      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Programs Grid */}
          <motion.div 
            className="md:col-span-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-teal-500" />
              Academic Programs
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((program, idx) => (
                <motion.div key={idx} variants={item}>
                  <Link
                    href={program.href}
                    className="group flex items-start p-3.5 rounded-lg hover:bg-gradient-to-br hover:from-teal-50/80 hover:to-yellow-50/80 transition-all duration-300"
                    onClick={onClose}
                  >
                    <div className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center mr-4 ${
                      program.accent === 'teal' ? 'bg-teal-100' : 'bg-yellow-100'
                    } group-hover:shadow-sm transition-all duration-200`}>
                      <program.icon className={`h-6 w-6 ${
                        program.accent === 'teal' ? 'text-teal-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-teal-700 transition-colors duration-200">
                        {program.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {program.description}
                      </p>
                      <div className="mt-2 h-0.5 w-0 group-hover:w-1/2 transition-all duration-300 rounded-full bg-gradient-to-r from-teal-400 to-yellow-400"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Popular Programs */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="card-yellow h-full">
              <div className="p-5 h-full flex flex-col">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-yellow-500" />
                  Summer 2025 Programs
                </h3>
                
                <div className="relative h-40 rounded-xl overflow-hidden mb-4 shadow-sm group">
                  <Image 
                    src="https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg"
                    alt="Summer programs 2025"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="badge-teal inline-block mb-2 flex items-center">
                      <Sparkles className="h-3 w-3 mr-1.5" /> New Programs
                    </div>
                    <p className="text-white font-medium text-lg">
                      Experience Global Education
                    </p>
                  </div>
                </div>
                
                <div className="mb-4 flex-grow">
                  <p className="text-sm text-gray-600 mb-3">
                    Experience a summer of learning, adventure, and cultural immersion with our specialized 
                    programs designed for students of all backgrounds.
                  </p>
                  
                  <div className="space-y-2">
                    {popularPrograms.map((program, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <ChevronRight className="h-3.5 w-3.5 text-teal-500 mr-2 flex-shrink-0" />
                        {program}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full btn-teal flex items-center justify-center"
                  asChild
                >
                  <Link 
                    href="/programs/summer" 
                    onClick={onClose}
                  >
                    Browse Summer Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}