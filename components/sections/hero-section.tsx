"use client";

import React, { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, GraduationCap, MapPin, Users, Award, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Define strict types for our background configurations
interface SingleBackground {
  type: "single";
  url: string;
  alt: string;
}

interface GridBackground {
  type: "grid";
  images: Array<{
    url: string;
    alt: string;
  }>;
}

type Background = SingleBackground | GridBackground;

export function HeroSection() {
  const [heroHeight, setHeroHeight] = useState<string>("100vh");
  const heroRef = useRef<HTMLElement>(null);
  
  // Background configurations for the swiper with strict typing
  const backgrounds: Background[] = [
    {
      type: "single",
      url: "https://ik.imagekit.io/06fdnzilf/piclumen-1743349741374.png?updatedAt=1743317746737",
      alt: "Colorful world travel illustration with graduate",
    },
    {
      type: "grid",
      images: [
        {
          url: "https://ik.imagekit.io/pcet3dvcu/one.jpeg?updatedAt=1743187524353",
          alt: "Students with flags"
        },
        {
          url: "https://ik.imagekit.io/pcet3dvcu/two.jpeg?updatedAt=1743187524353",
          alt: "Students studying abroad"
        },
        {
          url: "https://ik.imagekit.io/pcet3dvcu/three.jpeg?updatedAt=1743187524353",
          alt: "International campus"
        }
      ],
    },
    {
      type: "single",
      url: "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-_-_2jPD-2TMKKtP6I8-l8_A_9WXtJj86QkmDmYSXQwsP8w.jpeg?updatedAt=1743497213869",
      alt: "Documentary-style photograph of international students",
    }
  ];

  useEffect(() => {
    const calculateHeroHeight = () => {
      if (!heroRef.current) return;

      // Get the viewport height
      const vh = window.innerHeight;
      
      // Get the hero's offset from the top of the page
      const heroOffset = heroRef.current.getBoundingClientRect().top;
      
      // Calculate remaining height (viewport height minus offset)
      const remainingHeight = vh - heroOffset;
      
      // Set the hero height to the remaining space
      setHeroHeight(`${remainingHeight}px`);
    };

    // Calculate on mount and window resize
    calculateHeroHeight();
    window.addEventListener('resize', calculateHeroHeight);
    
    // Recalculate after a short delay to ensure all elements are properly rendered
    const timeout = setTimeout(calculateHeroHeight, 100);

    return () => {
      window.removeEventListener('resize', calculateHeroHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative flex items-center overflow-hidden" 
      style={{ height: heroHeight }}
    >
      {/* Hero Background Image Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white"></span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          className="w-full h-full"
        >
          {backgrounds.map((bg, index) => (
            <SwiperSlide key={index}>
              {bg.type === "single" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={bg.url}
                    alt={bg.alt}
                    fill
                    className="object-cover"
                    style={{
                      filter: 'brightness(0.8)'
                    }}
                    priority={index === 0}
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-blue-900/5 z-0" />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#1a365d] z-8" />
                  <div className="relative w-full h-full grid grid-cols-3 gap-4 p-8">
                    {bg.images.map((img, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl z-10"
                      >
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          className="object-cover rounded-lg transition-all duration-700 hover:scale-110"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/70 to-transparent"></div>
                      </div>
                    ))}
                  </div>
          
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/10 to-transparent z-20" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev absolute left-4 top-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110">
        <ChevronLeft className="w-6 h-6" />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30 hover:scale-110">
        <ChevronRight className="w-6 h-6" />
      </div>

      {/* Enhanced Animated Particles with more variety */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 6 + 2;
          const colors = ['#FF9B9B', '#FFDD94', '#91F48F', '#A5F7E1', '#9BBDFF', '#FFD700', '#E0FFFF'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          
          return (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float-particle ${duration}s linear infinite ${delay}s`,
                boxShadow: `0 0 ${size * 2}px ${color}`
              }}
            />
          );
        })}
      </div>

      {/* Enhanced Floating Images with more elements and animations */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        {/* Floating globe */}
        <div 
          className="absolute w-10 h-10 text-white"
          style={{ 
            top: '15%', 
            left: '10%',
            animation: 'float 6s ease-in-out infinite',
            transform: 'rotate(-15deg)'
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-sm"></div>
            <Globe2 className="relative z-10 text-white" />
          </div>
        </div>
        
        {/* Floating graduation cap */}
        <div 
          className="absolute w-10 h-10 text-white"
          style={{ 
            top: '25%', 
            right: '15%',
            animation: 'float 7s ease-in-out infinite 1s',
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-sm"></div>
            <GraduationCap className="relative z-10 text-white" />
          </div>
        </div>
        
        {/* Floating map pin */}
        <div 
          className="absolute w-8 h-8 text-white"
          style={{ 
            top: '65%', 
            left: '15%',
            animation: 'float 5.5s ease-in-out infinite 0.7s',
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-sm"></div>
            <MapPin className="relative z-10 text-white" />
          </div>
        </div>
        
        {/* Floating airplane */}
        <div 
          className="absolute w-12 h-12 text-white"
          style={{ 
            bottom: '30%', 
            right: '10%',
            animation: 'float 5s ease-in-out infinite 0.5s',
            transform: 'rotate(15deg)'
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full opacity-20 blur-sm"></div>
            <svg className="relative z-10 w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.5H2C1.44772 16.5 1 16.0523 1 15.5C1 14.9477 1.44772 14.5 2 14.5H22C22.5523 14.5 23 14.9477 23 15.5C23 16.0523 22.5523 16.5 22 16.5Z" fill="white"/>
              <path d="M19 19.5H5C4.44772 19.5 4 19.0523 4 18.5C4 17.9477 4.44772 17.5 5 17.5H19C19.5523 17.5 20 17.9477 20 18.5C20 19.0523 19.5523 19.5 19 19.5Z" fill="white"/>
              <path d="M16 9.5L13 4.5H11L8 9.5H16Z" fill="white"/>
              <path d="M17 13.5H7L5 10.5H19L17 13.5Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div 
          className="absolute w-8 h-8 text-white"
          style={{ 
            bottom: '20%', 
            left: '25%',
            animation: 'float 8s ease-in-out infinite 1.2s',
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-sm"></div>
            <Award className="relative z-10 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-12">
          <FadeIn className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30 shadow-lg">
              <Globe2 className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Discover the world while studying!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Your Journey to Global Adventure
            </h1>
            
            <p className="text-lg text-white mb-8 max-w-lg leading-relaxed">
              Find your perfect study abroad experience! Connect with top universities, unlock scholarships, and prepare for the adventure of a lifetime.
            </p>
            
            {/* Trustworthiness Markers */}
            <div className="flex flex-wrap gap-3 mb-8 text-white">
              <div className="flex items-center gap-1 text-sm">
                <CheckCircle className="h-4 w-4 text-yellow-300" />
                <span>ICEF Certified</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <CheckCircle className="h-4 w-4 text-yellow-300" />
                <span>Teen-Friendly Programs</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <CheckCircle className="h-4 w-4 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                size="lg"
                className="text-base bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white shadow-lg hover:shadow-orange-400/25 transition-all duration-300 px-6 py-3 rounded-xl border border-yellow-300/30"
                asChild
              >
                <Link href="/apply">
                  Start Your Adventure <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 backdrop-blur-md shadow-lg px-6 py-3 rounded-xl"
                asChild
              >
                <Link href="/programs">Explore Destinations</Link>
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg transform hover:translate-y-[-3px] transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">150<span className="text-yellow-300">+</span></div>
                <div className="text-white text-sm">Universities</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg transform hover:translate-y-[-3px] transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">45<span className="text-yellow-300">+</span></div>
                <div className="text-white text-sm">Countries</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg transform hover:translate-y-[-3px] transition-all duration-300">
                <div className="text-2xl font-bold text-white mb-1">98<span className="text-yellow-300">%</span></div>
                <div className="text-white text-sm">Happy Students</div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side Card with Collage Effect */}
          <FadeIn className="hidden lg:block">
            <div className="relative bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-30 blur-xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:translate-y-[-3px] group border border-white/10 shadow-md">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-base font-medium text-white mb-2">Top Universities</h4>
                    <p className="text-white text-xs leading-relaxed">Access to prestigious schools worldwide</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:translate-y-[-3px] group border border-white/10 shadow-md">
                    <div className="p-3 bg-gradient-to-br from-teal-400 to-blue-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-base font-medium text-white mb-2">Scholarships</h4>
                    <p className="text-white text-xs leading-relaxed">Find financial aid opportunities easily</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:translate-y-[-3px] group border border-white/10 shadow-md">
                    <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-base font-medium text-white mb-2">Travel Support</h4>
                    <p className="text-white text-xs leading-relaxed">Visa help and travel preparation</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:translate-y-[-3px] group border border-white/10 shadow-md">
                    <div className="p-3 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-base font-medium text-white mb-2">Student Community</h4>
                    <p className="text-white text-xs leading-relaxed">Connect with fellow travelers</p>
                  </div>
                </div>
                
                {/* Reviews/Testimonials Strip */}
                <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20 flex items-center gap-4">
                  {/* Avatar stack */}
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center text-xs font-bold text-white">TJ</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-xs font-bold text-white">MK</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-300 to-blue-300 flex items-center justify-center text-xs font-bold text-white">AS</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-yellow-300 text-xs">
                      ★★★★★ <span className="text-white/80 ml-1">4.9/5 from 2000+ students</span>
                    </div>
                    <p className="text-white text-xs mt-1">"Best decision I ever made!" - Teen Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Required CSS Animations */}
      <style jsx global>{`
        /* Particle animation */
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0.5; }
          25% { transform: translateY(-15px) translateX(10px); opacity: 0.8; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
          75% { transform: translateY(-45px) translateX(5px); opacity: 0.8; }
          100% { transform: translateY(-60px) translateX(0); opacity: 0; }
        }
        
        /* Floating icon animation */
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        
        /* Text shadow for better readability */
        .text-shadow-lg {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        /* Swiper button styling overrides */
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </section>
  );
}