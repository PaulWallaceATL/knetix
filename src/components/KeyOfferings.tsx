'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Cloud & Edge Infrastructure',
    description: 'We engineer resilient, vendor-neutral infrastructure designed for enterprise scale and absolute data control',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/services',
    color: 'blue',
  },
  {
    title: 'Cybersecurity & Resilience',
    description: 'We move beyond point solutions to engineer Zero Trust frameworks that protect your enterprise and ensure operational resilience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    href: '/services',
    color: 'red',
  },
  {
    title: 'Applied AI & Data Intelligence',
    description: 'We transform fragmented data into automated workflows and real-time intelligence for faster, better decision-making.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '/services',
    color: 'green',
  },
  {
    title: 'Cloud, Data & FinOps',
    description: 'Modernize architectures, rationalize spend, and activate FinOps guardrails across AWS, Azure, Google Cloud, and hybrid stacks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    href: '/services',
    color: 'purple',
  },
  {
    title: 'Customer Experience Platforms',
    description: 'Curate CCaaS and EX ecosystems that blend AI, analytics, and human insight to eliminate friction end-to-end.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: '/services',
    color: 'orange',
  },
  {
    title: 'Managed Transformation Oversight',
    description: 'Gain ongoing governance, program management, and success metrics while your chosen providers operate the stack.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/services',
    color: 'teal',
  },
  {
    title: 'Connectivity & Global Networks',
    description: 'We engineer high-availability, low-latency networks to ensure your critical Cloud and AI applications never underperform.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    href: '/services',
    color: 'purple',
  },
  {
    title: 'Customer Experience (CX) Platforms',
    description: 'We engineer world-class engagement platforms that turn customer experience into a measurable competitive advantage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: '/services',
    color: 'orange',
  },
  {
    title: 'IT Lifecycle & Governance',
    description: 'We optimize commercial constructs and lifecycle management to eliminate waste and ensure technology spend delivers guaranteed outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    href: '/services',
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
    <div>
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="space-y-4 max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Unbiased Strategy. Proven Outcomes.
              </h3>
              <p className="apple-text-body text-gray-600 leading-relaxed">
                We bridge the gap between Board-level vision and technical execution. By architecting high-performance strategies for Cloud, Security, AI, and CX, we eliminate vendor bias to engineer certainty. We don&apos;t just optimize spend; we secure your most critical business outcomes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
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
            href="/services"
            className="apple-button apple-button-primary px-8 py-4"
          >
            View All Services
          </Link>
        </motion.div>
    </div>
  );
}