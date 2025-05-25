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
import Image from 'next/image';

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
      thumbnail: "https://ik.imagekit.io/06fdnzilf/hero2bg.jpeg?updatedAt=1744559010500",
      videoUrl: "https://www.youtube.com/embed/video2",
      name: "Mohammed Harb",
      country: "Egypt",
      university: "Ain Shams University",
      program: "Medicine",
      quote: "Studying in Toronto transformed my career path completely! The networking events and internship connections were invaluable to my professional development.",
      rating: 5,
      year: "Class of 2022",
      achievement: "Launched tech startup post-graduation"
    },
    {
      id: "2",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.54.24_9847b5c6_16_9.jpg?updatedAt=1745025648635",
      videoUrl: "https://www.youtube.com/embed/video1",
      name: "Martin Chen",
      country: "Singapore",
      university: "Manchester University",
      program: "Business Administration",
      quote: "My journey at Manchester University opened doors I never knew existed! The support from Nobel Campus made everything from application to graduation a breeze.",
      rating: 5,
      year: "Class of 2023",
      achievement: "Secured internship at Goldman Sachs"
    },
    {
      id: "3",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-_m2nMmNZgRlyNewLe5j7zPg_2f4o70mcQhOnYEUbrimNhg.jpeg",
      videoUrl: "https://www.youtube.com/embed/video3",
      name: "Khari Amar",
      country: "Russia",
      university: "Polytechnic University",
      program: "International Relations",
      quote: "From visa applications to housing, Nobel Campus guided me through every step. I couldn't have navigated the complex application process without their expertise!",
      rating: 5,
      year: "Class of 2024",
      achievement: "United Nations internship recipient"
    },
    {
      id: "4",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.55.18_e8acffe5.jpg?updatedAt=1745023638571",
      videoUrl: "https://www.youtube.com/embed/video4",
      name: "Luke Calum",
      country: "Turkiye",
      university: "Sakarya University",
      program: "Engineering",
      quote: "My Australian adventure gave me skills I couldn't have developed anywhere else. The cultural immersion and practical engineering projects were game-changing!",
      rating: 5,
      year: "Class of 2023",
      achievement: "Research published in engineering journal"
    },
    {
      id: "5",
      thumbnail: "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2001.00.51_4a9a373c_16_9.jpg?updatedAt=1745030191282",
      videoUrl: "https://www.youtube.com/embed/video5",
      name: "Aisha Patel",
      country: "Kazakhstan",
      university: "Alfarabi kazakh national university",
      program: "Medicine",
      quote: "Nobel Campus helped me navigate the competitive medical school admissions process successfully. Their personalized guidance made all the difference!",
      rating: 5,
      year: "Class of 2022",
      achievement: "Accepted to top 5 medical school"
    },
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
              <SwiperSlide key={testimonial.id} className="!w-[320px] md:!w-[340px] lg:!w-[380px]">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100"
                >
                  {/* Video Thumbnail Container - Fixed aspect ratio */}
                  <div className="relative w-full pb-[56.25%]">
                    {/* Country Badge - Top left */}
                    <div className="absolute top-3 left-3 z-30">
                      <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                        <MapPin className="h-3 w-3 text-yellow-500" />
                        {testimonial.country}
                      </div>
                    </div>

                    {/* Image Container */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10" />
                      <Image
                        src={testimonial.thumbnail}
                        alt={`${testimonial.name} from ${testimonial.country}`}
                        width={380}
                        height={214}
                        className="object-cover object-center"
                        loading="lazy" // بدلاً من eager
                        />
                    </div>

                    {/* Play Button - Centered */}
                    <button
                      onClick={() => handleVideoClick(testimonial.videoUrl)}
                      className="absolute inset-0 flex items-center justify-center z-20"
                      aria-label={`Play ${testimonial.name}'s testimonial video`}
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-yellow-500 bg-opacity-90 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play className="h-5 w-5 text-white ml-0.5" />
                      </div>
                    </button>
                  </div>

                  {/* Achievement Banner */}
                  <div className="w-full bg-teal-50 border-b border-teal-100">
                    <p className="text-xs text-teal-700 font-medium py-1.5 px-3 text-center">
                      {testimonial.achievement}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Student Info */}
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{testimonial.name}</h3>

                    <div className="flex items-center mb-1 text-gray-600 text-xs">
                      <GraduationCap className="h-3 w-3 mr-1 text-teal-500 flex-shrink-0" />
                      <span className="truncate">{testimonial.program}</span>
                    </div>

                    <div className="flex items-center mb-2 text-gray-600 text-xs">
                      <Globe className="h-3 w-3 mr-1 text-teal-500 flex-shrink-0" />
                      <span className="truncate">{testimonial.university}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Quote */}
                    <div className="relative bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleVideoClick(testimonial.videoUrl)}
                        className="bg-teal-500 hover:bg-teal-600 text-white text-xs py-2 px-4 rounded-full flex items-center gap-1.5 transition-colors"
                      >
                        <Play className="w-3 h-3" /> Watch Story
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
          z-index: 10;
        }
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          opacity: 0.85;
          filter: blur(0.5px);
        }
        .testimonials-swiper .swiper-pagination {
          bottom: -10px;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(234, 179, 8, 0.3);
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #eab308, #f59e0b);
          width: 20px;
          border-radius: 4px;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
        .badge-yellow {
          background-color: #fef3c7;
          color: #92400e;
          border-radius: 9999px;
          padding: 0.25rem 0.75rem;
          font-weight: 500;
          font-size: 0.75rem;
          line-height: 1rem;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float 20s infinite alternate ease-in-out;
        }
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(5deg); }
          50% { transform: translate(20px, 10px) rotate(0deg); }
          75% { transform: translate(-10px, 15px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}
