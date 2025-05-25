"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, GraduationCap, School, ArrowRight } from "lucide-react";
import { destinations, regionLabels } from "@/types/destinations";
import { DestinationCard } from "@/components/destinations/destination-card";
import { RegionSelector } from "@/components/destinations/region-selector";
import { RegionMap } from "@/components/destinations/region-map";
import Link from "next/link";
import Image from "next/image";

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("europe");

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full font-medium text-sm border border-yellow-200">
                <Globe className="h-3.5 w-3.5 mr-1" />
                GLOBAL EDUCATION NETWORK
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Study Abroad <span className="text-teal-600">Destinations</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our carefully selected study destinations offering world-class education
                and unforgettable cultural experiences.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Region Explorer Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Explore Study Destinations by Region
          </h2>
          
          <RegionSelector 
            selectedRegion={selectedRegion} 
            onRegionChange={setSelectedRegion} 
          />
          
          <RegionMap selectedRegion={selectedRegion} />
          
          {/* Featured Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations[selectedRegion].filter(d => d.featured).map((destination, idx) => (
              <Link 
                key={idx}
                href={destination.href}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="relative h-44">
                  <Image 
                    src={destination.image || "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/hero_image_1.jpg"}
                    alt={`Study in ${destination.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center bg-white/90 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                    <span className="mr-1.5 text-lg">{destination.flag}</span>
                    {destination.name}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">Study in {destination.name}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <School className="h-4 w-4 mr-1.5 text-blue-500" />
                    <span>150+ Programs</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-blue-600 group-hover:text-blue-800 transition-colors font-medium">
                      Explore Options
                    </span>
                    <ArrowRight className="h-4 w-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Countries Button */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-200 group">
              <Globe className="h-4 w-4 mr-2" />
              View All Countries
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">150+</div>
              <p className="text-gray-600">Universities</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">45+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">10k+</div>
              <p className="text-gray-600">Students Placed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}