'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren } from '@/components/animations/stagger-children';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Los Angeles, CA',
      text: 'KNG Home Buyers made selling my inherited property so easy. They handled everything and I got a fair cash offer. The whole process was smooth and professional.',
      rating: 5,
      date: 'March 2024',
      propertyType: 'Single Family Home',
    },
    {
      name: 'John D.',
      location: 'Santa Clarita, CA',
      text: 'I needed to sell quickly due to relocation. They closed in just 7 days! Excellent service and communication throughout the entire process.',
      rating: 5,
      date: 'February 2024',
      propertyType: 'Townhouse',
    },
    {
      name: 'Maria R.',
      location: 'San Fernando, CA',
      text: "Very professional team. They helped me avoid foreclosure and gave me a fresh start. I'm so grateful for their help during a difficult time.",
      rating: 5,
      date: 'February 2024',
      propertyType: 'Condo',
    },
    {
      name: 'Robert K.',
      location: 'Ventura County, CA',
      text: 'After trying to sell my property for months with a realtor, KNG Home Buyers made it simple. No repairs needed, no staging, just a fair offer and quick closing.',
      rating: 5,
      date: 'January 2024',
      propertyType: 'Single Family Home',
    },
    {
      name: 'Lisa P.',
      location: 'Orange County, CA',
      text: 'The team at KNG was fantastic to work with. They were transparent about their process and the offer was better than I expected. Highly recommend!',
      rating: 5,
      date: 'January 2024',
      propertyType: 'Multi-Family',
    },
    {
      name: 'David W.',
      location: 'Riverside, CA',
      text: 'I had problem tenants and needed to sell fast. KNG handled everything professionally and made the process stress-free. Thank you!',
      rating: 5,
      date: 'December 2023',
      propertyType: 'Rental Property',
    },
    {
      name: 'Emily T.',
      location: 'San Diego, CA',
      text: 'KNG Home Buyers gave me the best offer after reaching out to multiple investors. The process was smooth, and I got my cash in just a few days!',
      rating: 5,
      date: 'December 2023',
      propertyType: 'Single Family Home',
    },
    {
      name: 'James L.',
      location: 'Phoenix, AZ',
      text: 'I was going through a divorce and needed to sell quickly. KNG Home Buyers handled everything with professionalism and care. Highly recommend!',
      rating: 5,
      date: 'November 2023',
      propertyType: 'Townhouse',
    },
    {
      name: 'Rebecca M.',
      location: 'Las Vegas, NV',
      text: 'They helped me sell a rental property that needed too many repairs. No hassle, no showings—just a fast cash sale. Couldn’t be happier!',
      rating: 5,
      date: 'November 2023',
      propertyType: 'Rental Property',
    },
    {
      name: 'Ethan B.',
      location: 'Dallas, TX',
      text: 'I inherited a home and wasn’t sure what to do. KNG walked me through the whole process and made it incredibly easy!',
      rating: 5,
      date: 'October 2023',
      propertyType: 'Inherited Property',
    },
    {
      name: 'Jessica F.',
      location: 'Austin, TX',
      text: 'I was struggling to pay my mortgage and needed a quick sale. KNG Home Buyers gave me a great offer and helped me avoid foreclosure.',
      rating: 5,
      date: 'October 2023',
      propertyType: 'Single Family Home',
    },
    {
      name: 'Michael C.',
      location: 'Chicago, IL',
      text: 'Selling my condo with KNG was stress-free. No showings, no waiting—just a fast, fair cash offer!',
      rating: 5,
      date: 'September 2023',
      propertyType: 'Condo',
    },
    {
      name: 'Olivia R.',
      location: 'Atlanta, GA',
      text: 'KNG Home Buyers saved me from a difficult financial situation by offering a quick and fair cash deal for my home. Highly recommended!',
      rating: 5,
      date: 'August 2023',
      propertyType: 'Multi-Family',
    },
    {
      name: 'Mark W.',
      location: 'Miami, FL',
      text: 'I needed to sell my vacation home quickly, and KNG made the entire process seamless. No stress, just results!',
      rating: 5,
      date: 'August 2023',
      propertyType: 'Vacation Home',
    },
    {
      name: 'Sophia G.',
      location: 'Nashville, TN',
      text: 'They made selling my rental property so easy. No need to fix anything—just a fair offer and quick closing!',
      rating: 5,
      date: 'July 2023',
      propertyType: 'Rental Property',
    },
    {
      name: 'Daniel P.',
      location: 'Seattle, WA',
      text: 'I needed to relocate fast for work, and KNG Home Buyers made sure I closed on time. Fantastic experience!',
      rating: 5,
      date: 'July 2023',
      propertyType: 'Townhouse',
    },
  ];

  return (
    <main className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Our Sellers Say
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Don't just take our word for it. Here's what homeowners who've
            worked with us have to say about their experience.
          </p>
        </FadeIn>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-4 mb-20">
        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-gray-600 mb-6">"{review.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>{review.propertyType}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-600">5-Star Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-gray-600">Properties Bought</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <p className="text-gray-600">Days Average Closing</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
