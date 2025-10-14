'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO',
    company: 'TechCorp Industries',
    image: null,
    content: 'Knetix transformed our entire IT infrastructure. Their expertise in cloud migration and cybersecurity gave us the confidence to scale our operations globally. The ROI has been phenomenal.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'VP of Operations',
    company: 'Global Finance Solutions',
    image: null,
    content: 'Working with Knetix has been a game-changer. Their managed services team is incredibly responsive, and their proactive approach has reduced our downtime by 95%. Truly exceptional service.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    title: 'CEO',
    company: 'Healthcare Innovations Inc.',
    image: null,
    content: 'The unified communications solution from Knetix has revolutionized how our distributed team collaborates. Implementation was seamless, and the ongoing support is outstanding.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    title: 'Director of IT',
    company: 'Manufacturing Excellence Corp',
    image: null,
    content: 'Knetix doesn\'t just provide solutions; they become true partners. Their strategic guidance helped us modernize our legacy systems while maintaining business continuity.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-200 text-lg">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          {/* Quote Icon */}
          <Quote className="w-16 h-16 text-[#FF8C00] opacity-50 mb-6" />

          {/* Testimonial Content */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-6">
              &ldquo;{current.content}&rdquo;
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#FF8C00] fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] rounded-full flex items-center justify-center text-2xl font-bold">
                {current.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-bold text-lg">{current.name}</div>
                <div className="text-gray-300">
                  {current.title}, {current.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#FF8C00] w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

