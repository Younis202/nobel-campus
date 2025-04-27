"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  program?: string;  
  rating: number;
  avatar: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      text: "This tool helped me find the perfect master's program that matched all my needs. Highly recommended!",
      author: "Sarah J.",
      role: "Current MBA Student",
      rating: 5,
      avatar: "👩🏽‍🎓"
    },
    {
      text: "I found my dream program in Australia within minutes. The matching system is incredibly accurate!",
      author: "Mark T.",
      role: "Engineering Student",
      rating: 5,
      avatar: "👨🏻‍🎓"
    },
    {
      text: "As an international student, this tool saved me countless hours of research. Simply fantastic!",
      author: "Elena R.",
      role: "PhD Candidate",
      rating: 5,
      avatar: "👩🏼‍🎓"
    }
  ];
  
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm mb-4 border border-yellow-200/30">
              <Star className="text-yellow-500 h-4 w-4 mr-2 fill-yellow-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-yellow-600">Success Stories</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">What Our Students Say</h3>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-teal-400/5 rounded-3xl"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-yellow-100 p-8 relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl">{testimonials[currentTestimonialIndex].avatar}</div>
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-lg italic text-gray-700 mb-4">"{testimonials[currentTestimonialIndex].text}"</p>
                    <div>
                      <p className="font-medium text-gray-800">{testimonials[currentTestimonialIndex].author}</p>
                      <p className="text-gray-600">{testimonials[currentTestimonialIndex].role}</p>
                      {testimonials[currentTestimonialIndex].program && (
                        <p className="text-yellow-600 text-sm mt-1">{testimonials[currentTestimonialIndex].program}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${i === currentTestimonialIndex ? "bg-yellow-500 w-8" : "bg-gray-300 hover:bg-yellow-300"}`}
                  aria-label={`View testimonial ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}