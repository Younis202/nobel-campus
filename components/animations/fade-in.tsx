"use client";

import React from "react";
import { motion } from "framer-motion";
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
  duration = 0.6,
  className = "" 
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  const initial = {
    opacity: 0,
    ...directionOffset[direction]
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ 
        duration, 
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom easing curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}