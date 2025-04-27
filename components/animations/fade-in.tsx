"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  duration = 0.4, // Reduced from 0.6
  className = "" 
}: FadeInProps) {
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

  const initial = {
    opacity: 0,
    ...directionOffset[direction]
  };

  // If user prefers reduced motion, use simpler animation
  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" // Simplified easing curve from custom cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
