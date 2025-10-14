'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
      content: "Knetix transformed our infrastructure completely. Their expertise in cloud migration saved us months of work and significantly improved our system performance by 300%. The ROI was immediate and substantial.",
      rating: 5,
      industry: "Technology",
      project: "Cloud Migration",
      results: "300% Performance Improvement"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "VP of Operations",
      company: "DataDriven Inc",
      content: "The cybersecurity implementation by Knetix was flawless. We feel confident knowing our data is protected by enterprise-grade security measures. Zero breaches since implementation.",
      rating: 5,
      industry: "Data Analytics",
      project: "Cybersecurity Overhaul",
      results: "Zero Security Breaches"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "IT Director",
      company: "GlobalTech Corp",
      content: "Outstanding support and innovative solutions. Knetix doesn't just provide technology; they provide strategic partnerships that drive real business value and competitive advantage.",
      rating: 5,
      industry: "Manufacturing",
      project: "Digital Transformation",
      results: "40% Productivity Increase"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "CEO",
      company: "InnovateLabs",
      content: "The unified communications solution streamlined our entire organization. Productivity has increased by 40% since implementation. Our teams are more connected than ever.",
      rating: 5,
      industry: "Software Development",
      project: "Unified Communications",
      results: "40% Productivity Boost"
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Chief Information Officer",
      company: "FinanceFirst",
      content: "Knetix's managed services have revolutionized our IT operations. We've reduced downtime by 95% and our team can focus on strategic initiatives instead of firefighting.",
      rating: 5,
      industry: "Financial Services",
      project: "Managed Services",
      results: "95% Downtime Reduction"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

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
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] via-[#F0F2F5] to-white section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00C4B4]/10 to-[#FF8C00]/10 rounded-full border border-[#00C4B4]/20 text-[#00C4B4] text-sm font-semibold mb-6">
            <Quote className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold heading-premium mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-premium leading-relaxed">
            Don't just take our word for it. Hear from the enterprises that have transformed their operations with Knetix.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main Testimonial Card */}
              <div className="card-premium-gradient p-8 md:p-12 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00C4B4]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#FF8C00]/10 to-transparent rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <motion.svg 
                        key={i}
                        className="w-7 h-7 text-[#FF8C00] mx-1" 
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
                  <blockquote className="text-2xl md:text-3xl text-gray-800 text-center leading-relaxed mb-12 text-premium">
                    "{testimonials[currentSlide].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Avatar */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Details */}
                    <div className="text-center md:text-left">
                      <div className="font-bold text-[#0A2E50] text-xl mb-1">
                        {testimonials[currentSlide].name}
                      </div>
                      <div className="gradient-text-warm font-semibold text-lg mb-1">
                        {testimonials[currentSlide].title}
                      </div>
                      <div className="text-gray-600 text-lg mb-2">
                        {testimonials[currentSlide].company}
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-[#00C4B4]/10 text-[#00C4B4] rounded-full text-sm font-medium">
                          {testimonials[currentSlide].industry}
                        </span>
                        <span className="px-3 py-1 bg-[#FF8C00]/10 text-[#FF8C00] rounded-full text-sm font-medium">
                          {testimonials[currentSlide].project}
                        </span>
                      </div>
                    </div>

                    {/* Results Badge */}
                    <div className="glass-card p-4 rounded-xl border border-[#00C4B4]/20">
                      <div className="text-sm text-gray-600 mb-1">Result</div>
                      <div className="gradient-text-success font-bold text-lg">
                        {testimonials[currentSlide].results}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <motion.button
              onClick={prevSlide}
              className="p-4 rounded-full glass-card hover:shadow-xl transition-all duration-300 hover:bg-[#00C4B4] hover:text-white group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-[#00C4B4] to-[#FF8C00] scale-125 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-4 rounded-full glass-card hover:shadow-xl transition-all duration-300 hover:bg-[#00C4B4] hover:text-white group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
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
          <p className="text-gray-600 text-lg mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Fortune 500</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-2xl font-bold text-gray-400">Global 2000</div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-2xl font-bold text-gray-400">Enterprise</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}