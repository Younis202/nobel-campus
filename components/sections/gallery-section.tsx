"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, GraduationCap, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState("");
  const [expandedCaption, setExpandedCaption] = useState("");
  const galleryContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const studentPhotos = [
    {
      id: "1",
      image: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353", // Replace with your actual image path
      caption: "Study group at Manchester University library",
      location: "United Kingdom",
      program: "Business Administration",
      tags: ["Campus Life", "Study Sessions"]
    },
    {
      id: "2",
      image: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353", // Replace with your actual image path
      caption: "Coffee break during finals week at University of Toronto",
      location: "Canada",
      program: "Computer Science",
      tags: ["Student Life", "Hangouts"]
    },
    {
      id: "3",
      image: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353", // Replace with your actual image path
      caption: "International student mixer at Harvard University",
      location: "USA",
      program: "International Relations",
      tags: ["Events", "Networking"]
    },
    {
      id: "4",
      image: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353", // Replace with your actual image path
      caption: "Field research project at University of Sydney",
      location: "Australia",
      program: "Environmental Science",
      tags: ["Field Work", "Research"]
    },
    {
      id: "5",
      image: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353", // Replace with your actual image path
      caption: "Cultural exchange workshop at Johns Hopkins",
      location: "USA",
      program: "Medicine",
      tags: ["Culture", "Exchange"]
    },
    {
      id: "6",
      image: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353", // Replace with your actual image path
      caption: "Weekend trip to explore local landmarks",
      location: "Japan",
      program: "Asian Studies",
      tags: ["Travel", "Exploration"]
    }
  ];

const handleImageClick = (image: string, caption: string) => {
  setExpandedImage(image);
  setExpandedCaption(caption);
  setImageOpen(true);
};

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, studentPhotos.length - 3) : Math.max(0, prevIndex - 3)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= studentPhotos.length ? 0 : prevIndex + 3
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (galleryContainerRef.current) {
      observer.observe(galleryContainerRef.current);
    }

    return () => {
      if (galleryContainerRef.current) {
        observer.unobserve(galleryContainerRef.current);
      }
    };
  }, []);

  const visiblePhotos = studentPhotos.slice(currentIndex, currentIndex + 6);
  if (visiblePhotos.length < 6) {
    visiblePhotos.push(...studentPhotos.slice(0, 6 - visiblePhotos.length));
  }

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-3 py-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition-colors border-none">STUDENT GALLERY</Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Authentic Moments from Student Journeys
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real photos from real students experiencing education and life abroad
          </p>
        </motion.div>

        <div 
          ref={galleryContainerRef}
          className="relative mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePhotos.map((photo, index) => (
              <motion.div
                key={`${photo.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-md border border-gray-100"
                  onClick={() => handleImageClick(photo.image, photo.caption)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-70" />
                  
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Location Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <div className="flex items-center gap-1 bg-white/80 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      <MapPin className="h-3 w-3 text-yellow-500" /> 
                      {photo.location}
                    </div>
                  </div>
                  
                  {/* Program Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center gap-1 bg-teal-50/90 text-teal-700 px-2 py-1 rounded-md text-xs font-medium border border-teal-100/30">
                      <GraduationCap className="h-3 w-3" />
                      {photo.program}
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <p className="text-white text-sm font-medium line-clamp-2">{photo.caption}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {photo.tags.map((tag, i) => (
                        <span key={i} className="inline-block px-2 py-0.5 bg-white/20 text-white text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* View button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button 
                      className="bg-white/80 hover:bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              aria-label="Previous photos"
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={handleNext}
              aria-label="Next photos"
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Submit Your Study Abroad Photos
          </button>
        </div>
      </div>

      {/* Expanded Image Dialog */}
      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent className="sm:max-w-4xl p-4 bg-white rounded-xl">
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          <div className="rounded-lg overflow-hidden">
            <img
              src={expandedImage}
              alt={expandedCaption}
              className="w-full object-cover rounded-lg"
            />
            <p className="mt-3 text-gray-700">{expandedCaption}</p>
          </div>
        </DialogContent>
      </Dialog>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}