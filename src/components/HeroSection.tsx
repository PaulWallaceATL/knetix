'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-orange-100 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-clean">
        <div className="section-clean">
          <motion.div 
            className="text-center max-w-4xl mx-auto space-y-clean-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Minimal Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="apple-text-callout text-gray-600">Trusted by 500+ enterprises</span>
            </motion.div>

            {/* Apple-Style Headline */}
            <motion.h1 
              className="apple-text-large-title text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Knetix.
              <br />
              <span className="text-blue-600">Powering Your Digital Evolution</span>
            </motion.h1>

            {/* Clean Sub-headline */}
            <motion.p 
              className="apple-text-body text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Accelerate growth, streamline operations, and secure your future with intelligent technology solutions tailored for tomorrow&apos;s most ambitious challenges.
            </motion.p>

            {/* Apple-Style CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="apple-button apple-button-primary px-8 py-4"
              >
                Get Started
              </Link>
              <Link
                href="/solutions"
                className="apple-button apple-button-secondary px-8 py-4"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Clean Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
              { value: "500+", label: "Clients" },
              { value: "15+", label: "Years" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <div className="apple-text-title1 text-gray-900 mb-2">{stat.value}</div>
                <div className="apple-text-callout text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}