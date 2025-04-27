"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  delayStep?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function StaggerChildren({ 
  children, 
  className = "", 
  delayStep = 0.05, // Reduced from 0.1
  direction = "up",
  duration = 0.3 // Reduced from 0.5
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px", // Load animations a bit earlier
  });

  // Reduced motion offsets
  const directionOffset = {
    up: { y: prefersReducedMotion ? 5 : 10 }, // Reduced from 20
    down: { y: prefersReducedMotion ? -5 : -10 }, // Reduced from -20
    left: { x: prefersReducedMotion ? 5 : 10 }, // Reduced from 20
    right: { x: prefersReducedMotion ? -5 : -10 } // Reduced from -20
  };

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delayStep,
        ease: "easeOut" // Simplified easing curve
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0,
      ...directionOffset[direction]
    },
    show: { 
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut" // Simplified easing curve
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        // Limit the maximum delay to prevent excessive waiting for later items
        const maxItems = 6;
        const adjustedIndex = Math.min(index, maxItems);
        
        return (
          <motion.div 
            variants={item} 
            transition={{
              delay: adjustedIndex * delayStep,
              duration
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
