"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [daysLeft, setDaysLeft] = useState(14); // Example countdown

  useEffect(() => {
    // Simulate countdown timer
    const timer = setInterval(() => {
      setDaysLeft(prev => Math.max(0, prev - 1));
    }, 86400000); // Update every day (in ms)
    
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-teal-500 to-yellow-400 text-white py-2.5 relative overflow-hidden"
        >
          {/* Background subtle pattern */}
          <div className="absolute inset-0 bg-[url('/subtle-pattern.svg')] opacity-10" />
          
          <div className="container mx-auto px-4 flex items-center justify-center text-center relative z-10">
            <div className="hidden sm:flex items-center justify-center h-6 w-6 rounded-full bg-white/20 mr-3">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Limited Time Offer:</span> 20% discount on Summer 2025 programs.
              {daysLeft > 0 && (
                <span className="ml-1.5 px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium flex items-center inline-flex">
                  <Clock className="h-3 w-3 mr-1" />
                  {daysLeft} days left
                </span>
              )}
              <Link 
                href="/promotions" 
                className="underline ml-3 font-medium hover:text-yellow-50 transition-colors"
              >
                Learn more
              </Link>
            </p>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-2 sm:right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close promotion banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}