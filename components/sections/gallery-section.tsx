"use client";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  MapPin,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Define the type for student photos
interface StudentPhoto {
  id: string;
  image: string;
  caption: string;
  location: string;
  program: string;
  tags: string[];
}

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState("");
  const [expandedCaption, setExpandedCaption] = useState("");
  const [expandedDetails, setExpandedDetails] = useState<StudentPhoto | null>(
    null
  );
  const galleryContainerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const studentPhotos: StudentPhoto[] = [
    {
      id: "1",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.54.24_9847b5c6_16_9.jpg?updatedAt=1745025648635",
      caption:
        "Medical students during a lecture at Al-Farabi Kazakh National University",
      location: "Kazakhstan",
      program: "General Medicine",
      tags: ["Academics", "Medical Education"],
    },
    {
      id: "2",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2000.55.18_e8acffe5.jpg?updatedAt=1745023638571",
      caption:
        "Medical students enjoying a coffee break between lectures at Al-Farabi University",
      location: "Kazakhstan",
      program: "General Medicine",
      tags: ["Student Life", "Break Time"],
    },
    {
      id: "3",
      image:
        "https://ik.imagekit.io/06fdnzilf/WhatsApp%20Image%202025-04-19%20at%2001.00.51_4a9a373c_16_9.jpg?updatedAt=1745030191282",
      caption:
        "International student gathering at the Faculty of Medicine, Al-Farabi Kazakh National University",
      location: "Kazakhstan",
      program: "General Medicine",
      tags: ["Student Events", "Cultural Exchange"],
    },
    {
      id: "4",
      image:
        "https://ik.imagekit.io/06fdnzilf/486536676_705787935442355_608955424205530861_n.jpg?updatedAt=1745035801653",
      caption:
        "Future University students during a field research project in Egypt",
      location: "Egypt",
      program: "Medical Sciences",
      tags: ["Scientific Research", "Field Studies"],
    },
    {
      id: "5",
      image:
        "https://strapi.atharan.com/uploads/21b5b302_d004_4ee7_a475_65b4f68ecd12_92a08d70a7.jpg",
      caption:
        "Engineering students workshop training at Istanbul Galata University",
      location: "Turkiye",
      program: "Engineering",
      tags: ["Practical Training", "Workshops"],
    },
    {
      id: "6",
      image:
        "https://strapi.atharan.com/uploads/5c5d9af0_86ae_4028_b4a2_a6f76655e93c_3037333b09.jpg",
      caption:
        "Engineering program students visiting historical landmarks in Istanbul",
      location: "Turkiye",
      program: "Engineering",
      tags: ["Exploration Trips", "Student Activities"],
    },
    {
      id: "7",
      image:
        "https://strapi.atharan.com/uploads/istanbul_Topkapi_universitesi_15_3b202729df.jpg",
      caption: "Students at Topkapi Istanbul University campus grounds",
      location: "Turkiye",
      program: "Administrative Sciences",
      tags: ["Campus Life", "Topkapi University"],
    },
    {
      id: "8",
      image:
        "https://strapi.atharan.com/uploads/istanbul_Topkapi_universitesi_14_3dba4fe79a.jpg",
      caption: "Outdoor student activity at Topkapi University in Istanbul",
      location: "Turkiye",
      program: "Business Administration",
      tags: ["Student Activities", "Events"],
    },
    {
      id: "9",
      image: "https://strapi.atharan.com/uploads/0_64848_6_min_32454fe0bc.jpg",
      caption: "Lecture in one of the classrooms at Istanbul University",
      location: "Turkiye",
      program: "Social Sciences",
      tags: ["Lectures", "Academic Education"],
    },
  ];

  const handleImageClick = (photo: StudentPhoto) => {
    setExpandedImage(photo.image);
    setExpandedCaption(photo.caption);
    setExpandedDetails(photo);
    setImageOpen(true);
  };

  const handlePrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, studentPhotos.length - 3)
        : Math.max(0, prevIndex - 3)
    );
    setTimeout(() => setTransitioning(false), 500);
  };

  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= studentPhotos.length ? 0 : prevIndex + 3
    );
    setTimeout(() => setTransitioning(false), 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (galleryContainerRef.current) {
      observer.observe(galleryContainerRef.current);
    }

    return () => {
      if (galleryContainerRef.current) {
        observer.unobserve(galleryContainerRef.current);
      }
    };
  }, []);

  const visiblePhotos = studentPhotos.slice(currentIndex, currentIndex + 6);
  if (visiblePhotos.length < 6) {
    visiblePhotos.push(...studentPhotos.slice(0, 6 - visiblePhotos.length));
  }

  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-100 rounded-full opacity-30 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge className="mb-4 px-4 py-1.5 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition-colors border-none">
            STUDENT GALLERY
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-gray-800 tracking-tight">
            Authentic Moments from Student Journeys
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real photos from real students experiencing education and life
            abroad, capturing moments that define their international journey.
          </p>
        </motion.div>

        <div ref={galleryContainerRef} className="relative mt-10">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visiblePhotos.map((photo, index) => (
                <motion.div
                  key={`${photo.id}-${index}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className="relative h-72 bg-gray-100 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-gray-200"
                    onClick={() => handleImageClick(photo)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-65" />

                    <div className="relative h-full w-full">
                      <Image
                        src={photo.image}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        quality={90}
                        loading="lazy" // بدلاً من eager
                      />
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <div className="flex items-center gap-1.5 bg-white/90 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm backdrop-blur-sm">
                        <MapPin className="h-3 w-3 text-yellow-500" />
                        {photo.location}
                      </div>
                    </div>

                    {/* Program Badge */}
                    <div className="absolute top-3 right-3 z-20">
                      <div className="flex items-center gap-1.5 bg-teal-50/90 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm backdrop-blur-sm border border-teal-100/30">
                        <GraduationCap className="h-3 w-3" />
                        {photo.program}
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <p className="text-white text-sm font-medium line-clamp-2 mb-2">
                        {photo.caption}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {photo.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-block px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white text-xs rounded-full transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View button on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20"
                    >
                      <button className="bg-white hover:bg-yellow-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors shadow-md">
                        <ExternalLink className="h-4 w-4" /> View Photo
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-center mt-10 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              aria-label="Previous photos"
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              disabled={transitioning}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              aria-label="Next photos"
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              disabled={transitioning}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg gap-2"
          >
            <Camera className="h-4 w-4" />
            Submit Your Study Abroad Photos
          </motion.button>
        </div>
      </div>

      {/* Enhanced Expanded Image Dialog */}
      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent className="sm:max-w-5xl p-6 bg-white rounded-xl">
          <DialogTitle className="text-xl font-bold mb-4 flex items-center justify-between">
            <span className="text-gray-800">
              {expandedDetails?.location} Experience
            </span>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Share this photo"
              >
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </DialogTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-lg overflow-hidden">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={expandedImage}
                  alt={expandedCaption}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover rounded-lg"
                  quality={95}
                  loading="lazy" // بدلاً من eager
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800">
                {expandedCaption}
              </h3>

              <div className="mt-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-700">
                  {expandedDetails?.location}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-teal-600" />
                <span className="text-gray-700">
                  {expandedDetails?.program}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-gray-500 mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {expandedDetails?.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <p className="text-sm text-gray-500">
                  Share your own experience abroad with our community and
                  inspire future students.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

