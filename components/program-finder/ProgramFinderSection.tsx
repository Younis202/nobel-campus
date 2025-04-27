"use client";

// components/program-finder/ProgramFinderSection.tsx
import React, { useState } from "react";
import { BackgroundElements } from "./BackgroundElements";
import { ProgramFinderHeader } from "./ProgramFinderHeader";
import { ProgramFinderForm } from "./ProgramFinderForm";
import { ResultsDisplay } from "./ResultsDisplay";
import { TestimonialsSection } from "./TestimonialsSection";
import { StatisticsSection } from "./StatisticsSection";
import { ProgramType } from "./ProgramCard";

export const ProgramFinderSection: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({});
  
  // Mock programs data
  const matchedPrograms: ProgramType[] = [
    {
      id: "prog-1",
      title: "Master of Business Administration",
      institution: "Harvard Business School",
      location: "Cambridge, USA",
      tuition: 73000,
      duration: "2 Years",
      level: "Master's",
      field: "Business",
      rating: 4.9,
      highlights: [
        "World-class faculty network",
        "Strong industry connections",
        "Excellent job placement rate"
      ],
      imageUrl: "/api/placeholder/400/240",
      matchScore: 95
    },
    {
      id: "prog-2",
      title: "MSc in Computer Science",
      institution: "Stanford University",
      location: "Palo Alto, USA",
      tuition: 58000,
      duration: "1.5 Years",
      level: "Master's",
      field: "Engineering",
      rating: 4.8,
      highlights: [
        "Cutting-edge research facilities",
        "Silicon Valley partnerships",
        "Flexible specialization options"
      ],
      imageUrl: "/api/placeholder/400/240",
      matchScore: 92
    },
    {
      id: "prog-3",
      title: "Bachelor of Engineering",
      institution: "MIT",
      location: "Boston, USA",
      tuition: 55000,
      duration: "4 Years",
      level: "Bachelor's",
      field: "Engineering",
      rating: 4.9,
      highlights: [
        "Innovative curriculum",
        "Hands-on project experience",
        "Strong alumni network"
      ],
      imageUrl: "/api/placeholder/400/240",
      matchScore: 88
    },
    {
      id: "prog-4",
      title: "PhD in Artificial Intelligence",
      institution: "University of Oxford",
      location: "Oxford, UK",
      tuition: 42000,
      duration: "3-4 Years",
      level: "PhD",
      field: "Computer Science",
      rating: 4.7,
      highlights: [
        "Leading research in AI and ML",
        "Full funding opportunities",
        "Industry collaborations"
      ],
      imageUrl: "/api/placeholder/400/240",
      matchScore: 86
    },
    {
      id: "prog-5",
      title: "Master of Fine Arts",
      institution: "Rhode Island School of Design",
      location: "Providence, USA",
      tuition: 49000,
      duration: "2 Years",
      level: "Master's",
      field: "Arts",
      rating: 4.8,
      highlights: [
        "Award-winning faculty",
        "State-of-the-art studios",
        "Strong industry connections"
      ],
      imageUrl: "/api/placeholder/400/240",
      matchScore: 84
    },
    {
      id: "prog-6",
      title: "Bachelor in Medicine",
      institution: "Johns Hopkins University",
      location: "Baltimore, USA",
      tuition: 62000,
      duration: "4 Years",
      level: "Bachelor's",
      field: "Medicine",
      rating: 4.9,
      highlights: [
        "World-renowned medical faculty",
        "Cutting-edge research facilities",
        "Strong clinical experience"
      ],
      imageUrl: "/api/placeholder/400/240",
      matchScore: 82
    }
  ];
  
  const handleFormComplete = (data: any) => {
    setFormData(data);
    setShowResults(true);
    // In a real app, you'd make an API call here to get matched programs
  };
  
  const handleReset = () => {
    setShowResults(false);
    setFormData({});
  };
  
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <BackgroundElements />
      
      <div className="container mx-auto relative z-10">
        <ProgramFinderHeader />
        
        {!showResults ? (
          <ProgramFinderForm onComplete={handleFormComplete} />
        ) : (
          <ResultsDisplay programs={matchedPrograms} onReset={handleReset} />
        )}
        
        <div className="mt-2">
          <TestimonialsSection />
        </div>
        
        <div className="mt-2">
          <StatisticsSection />
        </div>
      </div>
    </section>
  );
};