"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Star, Globe, GraduationCap, Quote, MapPin, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function VideoTestimonialsSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Previous JSX remains the same until the Dialog... */}

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-4xl p-0 border-none bg-white rounded-2xl shadow-2xl">
          <DialogTitle className="sr-only">Student Testimonial Video</DialogTitle>
          <div className="relative rounded-2xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={currentVideo}
              title="Student Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .testimonials-swiper {
          padding: 40px 0;
        }
        .testimonials-swiper .swiper-slide {
          transition: all 0.5s ease;
          opacity: 0.7;
          filter: blur(1px);
        }
        .testimonials-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
          filter: blur(0);
        }
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          opacity: 0.9;
          filter: blur(0.5px);
        }
        .testimonials-swiper .swiper-pagination {
          bottom: -10px;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(234, 179, 8, 0.3);
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #eab308, #f59e0b);
          width: 24px;
          border-radius: 4px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
      `}</style>
    </section>
  );
}