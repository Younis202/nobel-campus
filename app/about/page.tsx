"use client";

import {
  Award,
  Banknote,
  Building,
  Calculator,
  Target,
  Trophy,
  Users,
  Shield,
  Star,
  Heart,
  Handshake,
  Clock,
  CheckCircle2,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Trusted Since 2015</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Your Trusted Property Solutions Partner
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We've helped over 500+ homeowners find solutions, building trust through transparency, and delivering results with integrity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/sell">Get Your Cash Offer</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <Link href="/properties">View Success Stories</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="container mx-auto px-4 mt-16">
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">BBB Accredited</p>
                  <p className="text-sm text-gray-600">A+ Rating</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">5-Star Rated</p>
                  <p className="text-sm text-gray-600">100+ Reviews</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">Fast Closing</p>
                  <p className="text-sm text-gray-600">As Quick as 7 Days</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Handshake className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">500+ Properties</p>
                  <p className="text-sm text-gray-600">Successfully Closed</p>
                </div>
              </div>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To provide homeowners with fast, fair, and transparent solutions to their real estate challenges. We believe every property owner deserves a stress-free path forward, regardless of their situation.
              </p>
              <div className="space-y-4">
                {[
                  "500+ satisfied homeowners helped",
                  "$100M+ in property solutions delivered",
                  "Average closing time of 7-14 days",
                  "A+ BBB Rating and 5-star reviews"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern home exterior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center gap-3">
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
                <div>
                  <p className="font-bold text-lg">5.0 Rating</p>
                  <p className="text-gray-600">Based on 100+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Trust & Integrity</h3>
              <p className="text-gray-600">
                We build lasting relationships through honest communication and transparent dealings. Your trust is our most valuable asset, and we earn it by delivering on our promises.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Client-First Approach</h3>
              <p className="text-gray-600">
                Your needs drive our solutions. We listen, understand, and tailor our services to achieve your specific goals, ensuring the best possible outcome for your situation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Star className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every interaction, ensuring the highest standards of service and professionalism throughout your journey with us.
              </p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Leadership Team</h2>
        </FadeIn>
        <StaggerChildren className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="relative mx-auto mb-8 w-56 h-56">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6" />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="David Anderson"
                    className="relative w-full h-full rounded-2xl object-cover shadow-lg transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Founder & CEO
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">David Anderson</h3>
                  <p className="text-gray-600 mb-6">
                    20+ years in real estate investment and property solutions. David has helped hundreds of homeowners find their path forward.
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">500+ Deals</span>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">20+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="relative mx-auto mb-8 w-56 h-56">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6" />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sarah Johnson"
                    className="relative w-full h-full rounded-2xl object-cover shadow-lg transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Chief Operations Officer
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">Sarah Johnson</h3>
                  <p className="text-gray-600 mb-6">
                    15+ years in property management and client relations. Sarah ensures every client receives exceptional service.
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">300+ Clients</span>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">15+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="relative mx-auto mb-8 w-56 h-56">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6" />
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Michael Chen"
                    className="relative w-full h-full rounded-2xl object-cover shadow-lg transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Director of Acquisitions
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">Michael Chen</h3>
                  <p className="text-gray-600 mb-6">
                    12+ years in real estate analysis and market research. Michael ensures every offer reflects true market value.
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">200+ Deals</span>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-full">
                      <span className="text-primary font-medium">12+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StaggerChildren>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <StaggerChildren className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <p className="text-lg">In Property Solutions</p>
            </div>
            <div>
              <Target className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-lg">Properties Handled</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div>
              <Building className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-lg">States Covered</p>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-primary text-white">
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-8">
                Have questions about selling your property? Our team is here to help you make the best decision for your situation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6" />
                  <span>Santa Clarita, California</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <a href="tel:(323)-794-7221" className="hover:underline">
                    (323)-794-7221
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <a href="mailto:info@knghomebuyers.com" className="hover:underline">
                    info@knghomebuyers.com
                  </a>
                </div>
              </div>
            </div>
            <div className="p-12">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8">
                Get your fair cash offer today. No obligations, no pressure - just honest solutions.
              </p>
              <Button size="lg" className="w-full text-lg" asChild>
                <Link href="/sell">Get Your Cash Offer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}