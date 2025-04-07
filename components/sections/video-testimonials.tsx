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

// Define TypeScript interfaces
interface Testimonial {
  id: string;
  thumbnail: string;
  videoUrl: string;
  name: string;
  country: string;
  university: string;
  program: string;
  quote: string;
  rating: number;
  year: string;
  achievement: string;
}

export function VideoTestimonialsSection(): JSX.Element {
  const [videoOpen, setVideoOpen] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-__Ogrs-LcRueEr6kJa7O-VQ_9WXtJj86QkmDmYSXQwsP8w.jpeg?updatedAt=1743497213470?tr=w-400,h-300",
      videoUrl: "https://www.youtube.com/embed/video1",
      name: "Sarah Chen",
      country: "Singapore",
      university: "Manchester University",
      program: "Business Administration",
      quote: "My journey at Manchester University opened doors I never knew existed! The support from Nobel Campus made everything from application to graduation a breeze.",
      rating: 5,
      year: "Class of 2023",
      achievement: "Secured internship at Goldman Sachs"
    },
    {
      id: "2",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-__Ogrs-LcRueEr6kJa7O-VQ_9WXtJj86QkmDmYSXQwsP8w.jpeg?updatedAt=1743497213470?tr=w-400,h-300",
      videoUrl: "https://www.youtube.com/embed/video2",
      name: "Mohammed Al-Rashid",
      country: "UAE",
      university: "University of Toronto",
      program: "Computer Science",
      quote: "Studying in Toronto transformed my career path completely! The networking events and internship connections were invaluable to my professional development.",
      rating: 5,
      year: "Class of 2022",
      achievement: "Launched tech startup post-graduation"
    },
    {
      id: "3",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-__Ogrs-LcRueEr6kJa7O-VQ_9WXtJj86QkmDmYSXQwsP8w.jpeg?updatedAt=1743497213470?tr=w-400,h-300",
      videoUrl: "https://www.youtube.com/embed/video3",
      name: "Elena Popov",
      country: "Russia",
      university: "Harvard University",
      program: "International Relations",
      quote: "From visa applications to housing, Nobel Campus guided me through every step. I couldn't have navigated the complex application process without their expertise!",
      rating: 5,
      year: "Class of 2024",
      achievement: "United Nations internship recipient"
    },
    {
      id: "4",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-__Ogrs-LcRueEr6kJa7O-VQ_9WXtJj86QkmDmYSXQwsP8w.jpeg?updatedAt=1743497213470?tr=w-400,h-300",
      videoUrl: "https://www.youtube.com/embed/video4",
      name: "Carlos Rodriguez",
      country: "Mexico",
      university: "University of Sydney",
      program: "Engineering",
      quote: "My Australian adventure gave me skills I couldn't have developed anywhere else. The cultural immersion and practical engineering projects were game-changing!",
      rating: 5,
      year: "Class of 2023",
      achievement: "Research published in engineering journal"
    },
    {
      id: "5",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-__Ogrs-LcRueEr6kJa7O-VQ_9WXtJj86QkmDmYSXQwsP8w.jpeg?updatedAt=1743497213470?tr=w-400,h-300",
      videoUrl: "https://www.youtube.com/embed/video5",
      name: "Aisha Patel",
      country: "India",
      university: "Johns Hopkins University",
      program: "Medicine",
      quote: "Nobel Campus helped me navigate the competitive medical school admissions process successfully. Their personalized guidance made all the difference!",
      rating: 5,
      year: "Class of 2022",
      achievement: "Accepted to top 5 medical school"
    }
  ];

  const handleVideoClick = (videoUrl: string): void => {
    setCurrentVideo(videoUrl);
    setVideoOpen(true);
  };

  useEffect(() => {
    if (swiperRef.current) {
      if (isHovering) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [isHovering]);

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
      />
    ));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Animated circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-400/5 animate-float" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-yellow-400/5 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-yellow-400/20 particle" style={{ animationDuration: '25s' }} />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-teal-400/20 particle" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-yellow-400/20 particle" style={{ animationDuration: '22s', animationDelay: '5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge className="badge-yellow mb-4">STUDENT EXPERIENCES</Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Success Stories from Around the World
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our students about their life-changing international education journeys
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="testimonials-swiper !overflow-visible py-12"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!w-[400px]">
                <motion.div 
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card-yellow h-full"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    
                    <img
                      src={testimonial.thumbnail}
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Play Button */}
                    <button
                      onClick={() => handleVideoClick(testimonial.videoUrl)}
                      className="absolute inset-0 flex items-center justify-center z-20"
                      aria-label={`Play ${testimonial.name}'s testimonial video`}
                    >
                      <div className="w-16 h-16 rounded-full gradient-yellow flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </button>
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        <MapPin className="h-3.5 w-3.5 text-yellow-500" /> 
                        {testimonial.country}
                      </div>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="badge-yellow">
                        {testimonial.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Achievement */}
                    <div className="mb-4">
                      <div className="badge-teal text-xs inline-block">
                        {testimonial.achievement}
                      </div>
                    </div>
                    
                    {/* Student Info */}
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{testimonial.name}</h3>
                    
                    <div className="flex items-center mb-1 text-gray-600 text-sm">
                      <GraduationCap className="h-3.5 w-3.5 mr-1 text-teal-500" />
                      {testimonial.program}
                    </div>
                    
                    <div className="flex items-center mb-3 text-gray-600 text-sm">
                      <Globe className="h-3.5 w-3.5 mr-1 text-teal-500" />
                      {testimonial.university}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Quote */}
                    <div className="relative">
                      <div className="absolute -left-2 top-0 text-yellow-400 text-3xl font-serif">"</div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 line-clamp-3">
                        {testimonial.quote}
                      </p>
                      <div className="absolute -right-2 bottom-0 text-yellow-400 text-3xl font-serif">"</div>
                    </div>
                    
                    {/* Button */}
                    <div className="mt-6 flex justify-center">
                      <button 
                        onClick={() => handleVideoClick(testimonial.videoUrl)}
                        className="btn-teal text-sm py-2 px-4 rounded-full flex items-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5" /> Watch Story
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Video Modal */}
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