'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#001529] via-[#0A2E50] to-[#003A6B] flex items-center justify-center overflow-hidden section-premium">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C4B4]/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#00C4B4]/30 rounded-full animate-rotate"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-[#FF8C00]/20 to-transparent rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#00C4B4]/40 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 glass-card rounded-full text-white text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-3 h-3 bg-gradient-to-r from-[#00C4B4] to-[#FF8C00] rounded-full mr-3 animate-pulse"></span>
            <span className="gradient-text text-white">Trusted by 500+ Enterprise Clients Worldwide</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none heading-premium"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block mb-4">Knetix:</span>
            <span className="block bg-gradient-to-r from-[#00C4B4] via-[#33D4C7] to-[#FF8C00] bg-clip-text text-transparent animate-gradient">
              Powering Your Digital Evolution
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed text-premium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Accelerate growth, streamline operations, and secure your future with intelligent technology solutions 
            tailored for tomorrow&apos;s most ambitious challenges.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#FF8C00] to-[#FF9500] text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/solutions"
              className="group px-10 py-5 glass-card text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <span className="group-hover:text-[#00C4B4] transition-colors duration-300">Explore Solutions</span>
            </Link>
          </motion.div>

          {/* Premium Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { value: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
              { value: "24/7", label: "Expert Support", icon: "🛡️" },
              { value: "500+", label: "Clients Served", icon: "🏢" },
              { value: "15+", label: "Years Experience", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="glass-card p-6 rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text-warm mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Advanced Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-[#00C4B4]/30 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#FF8C00]/30 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-[#00C4B4]/20 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-[#FF8C00]/25 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '3s'}}></div>
    </section>
  );
}