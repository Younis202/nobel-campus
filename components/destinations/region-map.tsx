"use client";

import { MapPinned } from "lucide-react";
import { regionLabels, destinations } from "@/types/destinations";
import Link from "next/link";

interface RegionMapProps {
  selectedRegion: string;
}

export function RegionMap({ selectedRegion }: RegionMapProps) {
  return (
    <div className="relative h-72 sm:h-96 lg:h-[450px] mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="absolute inset-0 bg-blue-50">
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-4">
            <MapPinned className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <p className="text-lg font-medium text-gray-800">{regionLabels[selectedRegion]} Region Map</p>
            <p className="text-sm text-gray-600 mt-2">Interactive map visualization would appear here</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a365d]/90 via-[#1a365d]/70 to-transparent p-6">
        <h3 className="text-white text-xl font-semibold mb-3">Study in {regionLabels[selectedRegion]}</h3>
        <p className="text-blue-100 text-sm mb-4 max-w-2xl">
          Discover educational opportunities across {destinations[selectedRegion].length} destinations in {regionLabels[selectedRegion]}, 
          ranging from world-renowned universities to specialized programs in various fields.
        </p>
        <div className="flex flex-wrap gap-2">
          {destinations[selectedRegion].filter(d => d.popular).map((destination, idx) => (
            <Link 
              key={idx}
              href={destination.href}
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors"
            >
              <span className="mr-1.5">{destination.flag}</span>
              {destination.name}
            </Link>
          ))}
          <Link 
            href={`/destinations?region=${selectedRegion}`}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
          >
            View All <MapPinned className="h-3.5 w-3.5 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}