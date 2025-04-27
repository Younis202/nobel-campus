"use client";

// components/program-finder/ProgramCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, Globe, DollarSign, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProgramType {
  id: string;
  title: string;
  institution: string;
  location: string;
  tuition: number;
  duration: string;
  level: string;
  field: string;
  rating: number;
  highlights: string[];
  imageUrl: string;
  matchScore: number;
}

interface ProgramCardProps {
  program: ProgramType;
  index: number;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative">
        <div 
          className="h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${program.imageUrl})` }}
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full py-1 px-3 flex items-center shadow-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="font-medium text-sm">{program.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">
            {program.matchScore}% Match
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{program.title}</h3>
        <p className="text-gray-600 mb-4">{program.institution}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center text-gray-500">
            <Globe className="h-4 w-4 mr-2" />
            <span className="text-sm">{program.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <DollarSign className="h-4 w-4 mr-2" />
            <span className="text-sm">${program.tuition.toLocaleString()}/year</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{program.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Award className="h-4 w-4 mr-2" />
            <span className="text-sm">{program.level}</span>
          </div>
        </div>
        
        <h4 className="font-medium text-gray-700 mb-2">Key Highlights</h4>
        <ul className="space-y-1 mb-6">
          {program.highlights.slice(0, 3).map((highlight, i) => (
            <li key={i} className="text-sm text-gray-600 flex items-start">
              <span className="mr-2 text-yellow-500">•</span> {highlight}
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-sm">
          View Program Details
        </Button>
      </div>
    </motion.div>
  );
};