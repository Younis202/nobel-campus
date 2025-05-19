"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Globe, GraduationCap, MapPin, Play, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  achievement: string;
}

export function VideoTestimonialsSection(): JSX.Element {
  const [videoOpen, setVideoOpen] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      thumbnail:
        "https://ik.imagekit.io/06fdnzilf/hero2bg.jpeg?updatedAt=1744559010500",
      videoUrl: "https://www.youtube.com/embed/video2",
      name: "Mohammed Harb",
      country: "Egypt",
      university: "Ain Shams University",
      program: "Medicine",
      quote:
        "Studying in Toronto transformed my career path completely! The networking events and internship connections were invaluable to my professional development.",
      rating: 5,
      achievement: "Launched tech startup post-graduation",
    },
    {
      id: "2",
      thumbnail:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.54.24_9847b5c6_16_9.jpg?updatedAt=1745025648635",
      videoUrl: "https://www.youtube.com/embed/video1",
      name: "Martin Chen",
      country: "Singapore",
      university: "Manchester University",
      program: "Business Administration",
      quote:
        "My journey at Manchester University opened doors I never knew existed! The support from Nobel Campus made everything from application to graduation a breeze.",
      rating: 5,
      achievement: "Secured internship at Goldman Sachs",
    },
    {
      id: "3",
      thumbnail:
        "https://ik.imagekit.io/06fdnzilf/a-documentary-style-photograph-of-three-_m2nMmNZgRlyNewLe5j7zPg_2f4o70mcQhOnYEUbrimNhg.jpeg",
      videoUrl: "https://www.youtube.com/embed/video3",
      name: "Khari Amar",
      country: "Russia",
      university: "Polytechnic University",
      program: "International Relations",
      quote:
        "From visa applications to housing, Nobel Campus guided me through every step. I couldn't have navigated the complex application process without their expertise!",
      rating: 5,
      achievement: "United Nations internship recipient",
    },
    {
      id: "4",
      thumbnail:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.55.18_e8acffe5.jpg?updatedAt=1745023638571",
      videoUrl: "https://www.youtube.com/embed/video4",
      name: "Luke Calum",
      country: "Turkiye",
      university: "Sakarya University",
      program: "Engineering",
      quote:
        "My Australian adventure gave me skills I couldn't have developed anywhere else. The cultural immersion and practical engineering projects were game-changing!",
      rating: 5,
      achievement: "Research published in engineering journal",
    },
    {
      id: "5",
      thumbnail:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2001.00.51_4a9a373c_16_9.jpg?updatedAt=1745030191282",
      videoUrl: "https://www.youtube.com/embed/video5",
      name: "Aisha Patel",
      country: "Kazakhstan",
      university: "Alfarabi kazakh national university",
      program: "Medicine",
      quote:
        "Nobel Campus helped me navigate the competitive medical school admissions process successfully. Their personalized guidance made all the difference!",
      rating: 5,
      achievement: "Accepted to top 5 medical school",
    },
  ];

  const handleVideoClick = (videoUrl: string): void => {
    setCurrentVideo(videoUrl);
    setVideoOpen(true);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number): JSX.Element => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            STUDENT EXPERIENCES
          </div>

          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Success Stories from Around the World
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our students about their life-changing
            international education journeys
          </p>
        </div>

        {/* Main featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Video thumbnail side */}
              <div className="md:w-1/2 relative">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={activeTestimonial.thumbnail}
                    alt={`${activeTestimonial.name} from ${activeTestimonial.country}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    loading="lazy" // بدلاً من eager
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />

                  {/* Play button */}
                  <button
                    onClick={() => handleVideoClick(activeTestimonial.videoUrl)}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Play ${activeTestimonial.name}'s testimonial video`}
                  >
                    <div className="w-14 h-14 rounded-full bg-yellow-500 bg-opacity-90 flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200 shadow-lg">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </button>

                  {/* Country badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                      <MapPin className="h-3 w-3 text-yellow-500" />
                      {activeTestimonial.country}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="md:w-1/2 p-6">
                <div className="bg-teal-50 text-teal-700 text-xs font-medium py-1 px-2 rounded inline-block mb-3">
                  {activeTestimonial.achievement}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {activeTestimonial.name}
                </h3>

                <div className="flex items-center mb-1 text-gray-600 text-sm">
                  <GraduationCap className="h-4 w-4 mr-1 text-teal-500 flex-shrink-0" />
                  <span>{activeTestimonial.program}</span>
                </div>

                <div className="flex items-center mb-3 text-gray-600 text-sm">
                  <Globe className="h-4 w-4 mr-1 text-teal-500 flex-shrink-0" />
                  <span>{activeTestimonial.university}</span>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  {renderStars(activeTestimonial.rating)}
                </div>

                {/* Quote */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{activeTestimonial.quote}"
                  </p>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={handlePrevious}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleVideoClick(activeTestimonial.videoUrl)}
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full flex items-center gap-1.5 transition-colors text-sm"
                  >
                    <Play className="w-4 h-4" /> Watch Story
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all ${
                  index === activeIndex
                    ? "border-yellow-500 scale-110"
                    : "border-white opacity-70"
                }`}
                aria-label={`View ${testimonial.name}'s testimonial`}
              >
                <Image
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                  loading="lazy" // بدلاً من eager
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-4xl p-0 border-none bg-white rounded-2xl shadow-2xl">
          <DialogTitle className="sr-only">
            Student Testimonial Video
          </DialogTitle>
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
    </section>
  );
}
