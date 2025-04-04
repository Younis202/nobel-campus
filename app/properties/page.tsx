'use client';

import { Building2, MapPin, Home } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren } from '@/components/animations/stagger-children';

export default function Properties() {
  const successStories = [
    {
      location: 'Brooklyn, NY',
      description: 'Connected within 7 days',
      situation: 'Inherited property needing updates',
      timeline: '7 days',
      testimonial:
        'KNG Home Buyers helped me find the perfect solution for my inherited property. The process was smooth and professional!',
      seller: 'John D.',
    },
    {
      location: 'Queens, NY',
      description: 'Property solution found',
      situation: 'Relocating to another state',
      timeline: '14 days',
      testimonial:
        'They understood my situation and helped me find the right solution quickly. Very professional team!',
      seller: 'Sarah M.',
    },
    {
      location: 'Seattle, WA',
      description: 'Smooth process',
      situation: 'Inherited a home with siblings and needed a quick resolution',
      timeline: '12 days',
      testimonial:
        'They helped us sell the house and split the proceeds fairly. Very professional!',
      seller: 'Melissa D.',
    },
    {
      location: 'Bronx, NY',
      description: 'Effortless transaction',
      situation: 'Tired landlord looking to sell',
      timeline: '12 days',
      testimonial:
        'I was able to sell my rental property without any hassle. The team handled everything!',
      seller: 'Michael W.',
    },
    {
      location: 'Long Island, NY',
      description: 'Fast closing',
      situation: 'Facing foreclosure',
      timeline: '9 days',
      testimonial:
        'KNG Home Buyers saved me from foreclosure. They acted quickly and gave me peace of mind!',
      seller: 'Jessica L.',
    },
    {
      location: 'Newark, NJ',
      description: 'Seamless process',
      situation: 'Job relocation required a fast sale',
      timeline: '15 days',
      testimonial:
        'I had to move for work and needed to sell quickly. The team made it stress-free!',
      seller: 'David B.',
    },
    {
      location: 'Jersey City, NJ',
      description: 'Reliable service',
      situation: 'Inherited a property I couldn’t maintain',
      timeline: '8 days',
      testimonial:
        'They provided a quick and easy solution for my inherited home. Highly recommend!',
      seller: 'Emily R.',
    },
    {
      location: 'Philadelphia, PA',
      description: 'Smooth and professional',
      situation: 'Downsizing and needed a quick sale',
      timeline: '11 days',
      testimonial:
        'Selling my home was easier than I expected, thanks to KNG Home Buyers!',
      seller: 'Paul T.',
    },
    {
      location: 'Hoboken, NJ',
      description: 'Simple and efficient',
      situation: 'Divorce settlement required fast sale',
      timeline: '10 days',
      testimonial:
        'They made a difficult situation much easier by handling everything professionally.',
      seller: 'Anna G.',
    },
    {
      location: 'Baltimore, MD',
      description: 'Excellent experience',
      situation: 'Property needed major repairs',
      timeline: '13 days',
      testimonial:
        'I couldn’t afford the repairs, but KNG Home Buyers gave me a great option.',
      seller: 'Chris M.',
    },
    {
      location: 'Washington, D.C.',
      description: 'Fast and fair',
      situation: 'Needed to sell inherited property quickly',
      timeline: '7 days',
      testimonial:
        'They made selling my inherited home a breeze. Highly professional!',
      seller: 'Lisa P.',
    },
    {
      location: 'Atlanta, GA',
      description: 'Quick closing',
      situation: 'Job loss required immediate sale',
      timeline: '10 days',
      testimonial:
        'I was in a tough spot financially, and KNG Home Buyers gave me the perfect solution.',
      seller: 'Tom R.',
    },
    {
      location: 'Chicago, IL',
      description: 'Hassle-free process',
      situation: 'Needed to sell rental property fast',
      timeline: '12 days',
      testimonial:
        'The entire process was smooth, and I got a fair offer quickly!',
      seller: 'Nancy E.',
    },
    {
      location: 'Miami, FL',
      description: 'Great experience',
      situation: 'Retiring and downsizing',
      timeline: '14 days',
      testimonial:
        'They helped me transition into my new home with zero stress!',
      seller: 'Carlos T.',
    },
    {
      location: 'Dallas, TX',
      description: 'Stress-free solution',
      situation: 'Divorce settlement required quick sale',
      timeline: '9 days',
      testimonial:
        'Their team handled everything efficiently, making a tough situation easier.',
      seller: 'Rebecca M.',
    },
    {
      location: 'Los Angeles, CA',
      description: 'Fast offer and closing',
      situation: 'Couldn’t afford property taxes',
      timeline: '8 days',
      testimonial:
        'Selling my home was incredibly easy. I’m so grateful for their help!',
      seller: 'Brian G.',
    },
    {
      location: 'San Diego, CA',
      description: 'Quick cash offer',
      situation: 'Needed to relocate for family reasons',
      timeline: '7 days',
      testimonial:
        'I got a cash offer fast and was able to move without any worries.',
      seller: 'Samantha W.',
    },
    {
      location: 'Denver, CO',
      description: 'No hassle sale',
      situation: 'Too many repairs needed',
      timeline: '10 days',
      testimonial:
        'They bought my house as-is, which saved me from expensive repairs!',
      seller: 'Josh H.',
    },
    {
      location: 'Staten Island, NY',
      description: 'Quick resolution',
      situation: 'Needed fast solution',
      timeline: '10 days',
      testimonial:
        'KNG Home Buyers provided exactly what I needed - a fast, professional solution for my property.',
      seller: 'Robert K.',
    },
    {
      location: 'Phoenix, AZ',
      description: 'Fast and efficient',
      situation: 'Relocating for a new job',
      timeline: '9 days',
      testimonial:
        'KNG Home Buyers made it incredibly easy for me to sell and move!',
      seller: 'Ethan B.',
    },
  ];

  return (
    <main className="py-20">
      <section className="container mx-auto px-4 mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            See how we've helped property owners across the country find
            solutions for their real estate needs.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold">{story.location}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 font-medium mb-2">
                  {story.description}
                </p>

                {/* Situation */}
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Situation:</strong> {story.situation}
                  </p>
                  <div className="flex justify-between text-sm">
                    <p className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      Solution found in: {story.timeline}
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-600 italic mb-4">
                  "{story.testimonial}"
                </blockquote>

                {/* Seller */}
                <p className="text-gray-500 text-sm">- {story.seller}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>
    </main>
  );
}
