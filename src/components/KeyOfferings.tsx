'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Network Performance',
    description: 'Boost application delivery, maximize uptime, and optimize WAN costs for seamless connectivity and peak operational efficiency.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/solutions/network-performance',
    color: 'blue',
  },
  {
    title: 'Cybersecurity',
    description: 'Fortify your defenses with future-ready security solutions, safeguarding your valuable data and ensuring uninterrupted operations against evolving threats.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    href: '/solutions/cybersecurity',
    color: 'red',
  },
  {
    title: 'Unified Communications',
    description: 'Foster effortless collaboration and effective communication across all channels, empowering your workforce to connect from anywhere.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    href: '/solutions/unified-communications',
    color: 'green',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scale your business with robust, secure, and flexible cloud solutions that adapt to your evolving needs and drive innovation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    href: '/solutions/cloud-infrastructure',
    color: 'purple',
  },
  {
    title: 'Contact Center',
    description: 'Deliver exceptional customer experiences with intelligent contact center solutions that connect, engage, and delight your customers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: '/solutions/contact-center',
    color: 'orange',
  },
  {
    title: 'Managed Services',
    description: 'Focus on your core business while we handle your IT infrastructure with comprehensive managed services that ensure optimal performance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/solutions/managed-services',
    color: 'teal',
  },
];

const colorClasses = {
  blue: 'text-blue-600 bg-blue-50',
  red: 'text-red-600 bg-red-50',
  green: 'text-green-600 bg-green-50',
  purple: 'text-purple-600 bg-purple-50',
  orange: 'text-orange-600 bg-orange-50',
  teal: 'text-teal-600 bg-teal-50',
};

export default function KeyOfferings() {
  return (
    <section className="py-16 md:py-20 bg-white">
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
            Our Solutions
          </h2>
          <p className="apple-text-body text-gray-600 max-w-3xl mx-auto">
            At Knetix, we don&apos;t just provide technology; we forge partnerships that transform your business. 
            Our expert team crafts and implements secure, scalable IT solutions designed to propel you towards your most ambitious goals.
          </p>
        </motion.div>

        {/* Enhanced Cards Grid with Scroll Animations */}
        <motion.div 
          className="grid-clean"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              <Link href={offering.href} className="group block">
                <motion.div 
                  className="airbnb-card h-full relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${colorClasses[offering.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />
                  {/* Animated Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl ${colorClasses[offering.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 relative`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {offering.icon}
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <motion.h3 
                      className="apple-text-title3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {offering.title}
                    </motion.h3>
                    <motion.p 
                      className="apple-text-body text-gray-600 leading-relaxed"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {offering.description}
                    </motion.p>
                  </div>

                  {/* Animated Arrow */}
                  <motion.div 
                    className="mt-6 flex items-center text-blue-600 group-hover:text-purple-600 transition-colors duration-300 relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="apple-text-callout font-medium">Learn more</span>
                    <motion.svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    initial={false}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/solutions"
            className="apple-button apple-button-primary px-8 py-4"
          >
            View All Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}