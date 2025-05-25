"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Quote,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const testimonials = [
    {
      name: "Younis Mohamed",
      country: "Turkiye",
      program: "Software Engineering",
      university: "Karabük University",
      image:
        "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
      text: "From the first call, everything felt easy. They guided me step-by-step, and I never felt lost.",
      rating: 5,
    },
    {
      name: "Ahmed Seraj",
      country: "Kazakhstan",
      program: "General Medicine",
      university: "Alfarabi kazakh national university",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.50.14_32c0ee82.jpg?updatedAt=1745023637229",
      text: "I had no idea how to start, but Nobel Campus made every step clear and simple. Super thankful!",
      rating: 5,
    },
    {
      name: "Hossam El Haggar",
      country: "Germany",
      program: "Mechanical Engineering",
      university: "Universität Freiburg",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.52.37_6188fb6f.jpg?updatedAt=1745024188955",
      text: "Professional, responsive, and always supportive. They made my dream possible.",
      rating: 5,
    },
    {
      name: "Ahmed Ali",
      country: "Turkiye",
      program: "Minerals engineering",
      university: "Karabük university",
      image:
        "https://ik.imagekit.io/06fdnzilf/470183223_1541382256547556_6499158426381807333_n.jpg?updatedAt=1745032984239",
      text: "What felt complicated became simple. The whole team is organized and helpful.",
      rating: 5,
    },
    {
      name: "Abdelrahman Abdelbari",
      country: "Saudi Arabia",
      program: "Islamic Sharia Law",
      university: "Islamic University of Madinah",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2002.58.49_118b29c3.jpg?updatedAt=1745024502863",
      text: "They followed up with me at every stage, answered all my questions, and kept things smooth.",
      rating: 5,
    },
        {
      name: "Muhammed A. Safwat",
      country: "Egypt",
      program: "mass media and communication",
      university: "Misr University For Science and Technology",
      image:
        "https://ik.imagekit.io/pcet3dvcu/nobelcampus/4682.jpg?updatedAt=1747617796986",
      text: "I was unsure at first, but their experience and attitude made me trust them completely.",
      rating: 5,
    },
    {
      name: "Mohamed Khaled",
      country: "Kazakhstan",
      program: "General Medicine",
      university: "Alfarabi kazakh national university",
      image:
        "https://ik.imagekit.io/06fdnzilf/434860297_993233532160438_8105177248816682228_n.jpg?updatedAt=1745024179912",
      text: "Honestly one of the easiest experiences ever. They know what they're doing.",
      rating: 5,
    },
    {
      name: "Mohamed Hamada",
      country: "Kazakhstan",
      program: "General Medicine",
      university: "Alfarabi kazakh national university",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2005.28.05_24cca22d.jpg?updatedAt=1745033391864",
      text: "I felt supported from day one. They were always there when I had questions.",
      rating: 5,
    },
    {
      name: "Mohamed M. Ali",
      country: "Egypt",
      program: "Faculty Of Science Al-Azhar University",
      university: "Al Azhar University",
      image:
        "https://ik.imagekit.io/pcet3dvcu/nobelcampus/40014.jpg?updatedAt=1747617875400",
      text: "They handled everything with professionalism. I didn't have to worry about anything.",
      rating: 5,
    },
    {
      name: "Hossam Al Askary",
      country: "Kazakhstan",
      program: "dentistry",
      university: "Alfarabi kazakh national university",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2002.59.56_9a5cbb7c.jpg?updatedAt=1745024535465",
      text: "If you're thinking about studying abroad, just talk to them. Seriously, they make it simple.",
      rating: 5,
    },
    {
      name: "Sapina",
      country: "uzbekistan",
      program: "General Medicine",
      university: "National University of Uzbekistan",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2003.13.02_18b41cd8.jpg?updatedAt=1745025209822",
      text: "Big thanks to the team. I couldn't have done this without their help.",
      rating: 5,
    },
    {
      name: "El Shishi",
      country: "Kazakhstan",
      program: "dentistry",
      university: "Alfarabi kazakh national university",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2004.00.40_1834e380.jpg?updatedAt=1745028056514",
      text: "Everything was done fast and professionally. No stress, just progress.",
      rating: 5,
    },
    {
      name: "Mohamed Sameh",
      country: "Kazakhstan",
      program: "General Medicine",
      university: "Alfarabi kazakh national university",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2004.36.31_9e9eae17.jpg?updatedAt=1745031378396",
      text: "They gave me great options and stayed in touch until everything was done.",
      rating: 5,
    },
    {
      name: "Eslam Ali",
      country: "Egypt",
      program: "Islamic Sharia Law",
      university: "Al Azhar University",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-21%20at%2021.16.12_9b50a57e.jpg?updatedAt=1745264276495",
      text: "Honest, helpful, and straight to the point. I got exactly what I needed.",
      rating: 5,
    },
  ];

  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [page, setPage] = useState(0);
  const testimonialsPerPage = 6;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // No filters, so we're using all testimonials
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const displayedTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  // Preload spotlight image - fixed to avoid conflict with Next.js Image
  useEffect(() => {
    // Simple state-based approach instead of using the Image constructor
    setIsImageLoaded(false);

    // Use setTimeout to simulate image loading
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [spotlightIndex]);

  const nextPage = () => {
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Simplified animation variants
  const fadeAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 5 : 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: prefersReducedMotion ? -5 : -10 },
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-60 top-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-60 bottom-0 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our students about their transformative study abroad
              experiences
            </p>
          </div>
        </FadeIn>

        {/* Spotlight testimonial - optimized animations */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={spotlightIndex}
                initial={fadeAnimation.initial}
                animate={fadeAnimation.animate}
                exit={fadeAnimation.exit}
                transition={fadeAnimation.transition}
                className="bg-white rounded-3xl shadow-xl overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-amber-500" />
                <div className="md:flex h-full">
                  <div className="md:w-2/5 relative h-80 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-amber-500/80 mix-blend-multiply z-10" />
                    <div className="relative w-full h-full">
                      <Image
                        fill
                        src={testimonials[spotlightIndex].image}
                        alt={testimonials[spotlightIndex].name}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        loading="lazy" // بدلاً من eager
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-2xl font-bold text-white">
                        {testimonials[spotlightIndex].name}
                      </h3>
                      <div className="flex items-center text-white/90 gap-2 mt-2">
                        <MapPin className="h-4 w-4" />
                        <span>{testimonials[spotlightIndex].country}</span>
                      </div>
                      <div className="flex mt-2">
                        {[...Array(testimonials[spotlightIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-amber-400 fill-current"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    <p className="text-2xl italic font-medium text-gray-700 mb-8">
                      "{testimonials[spotlightIndex].text}"
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 text-primary font-medium mb-1">
                        <GraduationCap className="h-5 w-5" />
                        <span>{testimonials[spotlightIndex].program}</span>
                      </div>
                      <p className="text-gray-600">
                        {testimonials[spotlightIndex].university}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <button
                    onClick={() =>
                      setSpotlightIndex(
                        (prev) =>
                          (prev - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSpotlightIndex(
                        (prev) => (prev + 1) % testimonials.length
                      )
                    }
                    className="bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Grid of testimonials - optimized with virtualization approach */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${page}-${index}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-40 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-amber-500/40 mix-blend-multiply z-10" />
                <div className="relative w-full h-full">
                  <Image
                    fill
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {testimonial.country}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 relative">
                    <Image
                      fill
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                      sizes="48px"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 italic mb-6">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{testimonial.program}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {testimonial.university}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Pagination controls */}
        <div className="flex justify-center mt-12 gap-2">
          <button
            onClick={prevPage}
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1 px-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  page === i ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
