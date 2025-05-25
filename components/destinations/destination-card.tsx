"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/types/destinations";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <motion.div
      key={index}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl border-gray-100 border"
    >
      {/* Image with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        
        <img
          src={destination.image || "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg"}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
            <MapPin className="h-3.5 w-3.5 text-yellow-500" /> 
            {destination.name}
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
          {destination.universities && (
            <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-md">
              <GraduationCap className="h-3 w-3 text-teal-500" />
              {destination.universities}
            </div>
          )}
          {destination.studentCount && (
            <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-md">
              <MapPin className="h-3 w-3 text-teal-500" />
              {destination.studentCount}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-800">
          <span className="text-2xl">{destination.flag}</span>
          {destination.name}
        </div>
        
        {destination.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{destination.description}</p>
        )}
        
        {destination.features && (
          <div className="space-y-2.5 mb-6">
            {destination.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="bg-teal-50 p-1 rounded-full">
                  <MapPin className="h-3 w-3 text-teal-500" />
                </div>
                {feature}
              </div>
            ))}
          </div>
        )}
        
        <Link 
          href={destination.href}
          className="w-full flex items-center justify-center gap-2 bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium py-2.5 px-4 rounded-full transition-all text-sm border border-teal-100"
        >
          Explore {destination.name}
          <ExternalLink className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}