"use client";

import React from "react";
import { motion } from "framer-motion";
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
  delayStep = 0.1,
  direction = "up",
  duration = 0.5
}: StaggerChildrenProps) {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delayStep,
        ease: [0.22, 1, 0.36, 1]
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
        ease: [0.22, 1, 0.36, 1]
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
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}