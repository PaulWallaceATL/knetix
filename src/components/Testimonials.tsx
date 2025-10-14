'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      company: "TechFlow Solutions",
      content: "Knetix transformed our infrastructure completely. Their expertise in cloud migration saved us months of work and significantly improved our system performance.",
      rating: 5,
      industry: "Technology",
      results: "300% Performance Improvement"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "VP of Operations",
      company: "DataDriven Inc",
      content: "The cybersecurity implementation by Knetix was flawless. We feel confident knowing our data is protected by enterprise-grade security measures.",
      rating: 5,
      industry: "Data Analytics",
      results: "Zero Security Breaches"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "IT Director",
      company: "GlobalTech Corp",
      content: "Outstanding support and innovative solutions. Knetix doesn&apos;t just provide technology; they provide strategic partnerships that drive real business value.",
      rating: 5,
      industry: "Manufacturing",
      results: "40% Productivity Increase"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "CEO",
      company: "InnovateLabs",
      content: "The unified communications solution streamlined our entire organization. Productivity has increased by 40% since implementation.",
      rating: 5,
      industry: "Software Development",
      results: "40% Productivity Boost"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-clean bg-gray-50">
      <div className="container-clean">
        {/* Header */}
        <motion.div 
          className="text-center space-y-clean-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="apple-text-title1 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="apple-text-body text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from the enterprises that have transformed their operations with Knetix.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Clean Testimonial Card */}
              <div className="airbnb-card text-center">
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <motion.svg 
                      key={i}
                      className="w-5 h-5 text-yellow-400 mx-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="apple-text-headline text-gray-800 mb-12 leading-relaxed">
                  &ldquo;{testimonials[currentSlide].content}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Details */}
                  <div className="text-center">
                    <div className="apple-text-title3 text-gray-900 mb-1">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="apple-text-callout text-gray-600 mb-2">
                      {testimonials[currentSlide].title}
                    </div>
                    <div className="apple-text-footnote text-gray-500 mb-4">
                      {testimonials[currentSlide].company}
                    </div>
                    
                    {/* Industry & Results */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full apple-text-footnote">
                        {testimonials[currentSlide].industry}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full apple-text-footnote">
                        {testimonials[currentSlide].results}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Clean Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="apple-text-callout text-gray-500 mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="apple-text-headline text-gray-400">Fortune 500</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="apple-text-headline text-gray-400">Global 2000</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="apple-text-headline text-gray-400">Enterprise</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}