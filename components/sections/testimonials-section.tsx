"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      country: "Singapore",
      program: "Business Administration",
      university: "University of Manchester",
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
      text: "Nobel Campus made my dream of studying in the UK a reality. Their guidance throughout the process was invaluable.",
      rating: 5
    },
    {
      name: "Mohammed Al-Rashid",
      country: "UAE",
      program: "Computer Science",
      university: "University of Toronto",
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
      text: "The support I received from application to arrival was exceptional. They truly care about their students' success.",
      rating: 5
    },
    {
      name: "Elena Popov",
      country: "Russia",
      program: "International Relations",
      university: "University of Sydney",
      image: "https://egyherbsglobal-770136110.imgix.net/sultan%20scholars/people_image_3.jpg",
      text: "Thanks to Nobel Campus, I'm now studying at my dream university in Australia. Their expertise made the process smooth.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/20 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our students about their transformative study abroad experiences
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6">"{testimonial.text}"</p>

              <div className="pt-6 border-t">
                <p className="text-sm text-primary font-medium">{testimonial.program}</p>
                <p className="text-sm text-gray-600">{testimonial.university}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}