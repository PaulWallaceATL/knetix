'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import Hero3DOrb from './Hero3DOrb';

export default function EnterpriseHero() {
  // Spectacular 3D motion design - sophisticated and impressive

  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] pt-20 pb-12 md:pb-16 lg:pb-20"
      style={{ perspective: '2000px' }}
    >
      {/* Refined gradient background - slow, elegant shift */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(0, 196, 180, 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.06) 0%, transparent 60%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal grid overlay - static for stability */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Impressive 3D Orbs and Geometric Shapes */}
      <Hero3DOrb />

      {/* Content */}
      <div className="relative z-20 w-full">
      <div className="container-clean text-center">
        {/* Trust Badge - refined and elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 bg-white/5 backdrop-blur-md rounded-full border border-white/10 relative z-30"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-white/80 text-sm font-medium tracking-wide">
            TRUSTED BY FORTUNE 500 COMPANIES
          </span>
          <CheckCircle className="w-4 h-4 text-cyan-400" />
        </motion.div>

        {/* Main Headline - 3D perspective entry */}
        <motion.h1
          initial={{ opacity: 0, y: 40, rotateX: -20, z: -200 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight"
          style={{
            transformStyle: 'preserve-3d',
            textShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          <motion.span 
            className="block"
            style={{ transform: 'translateZ(30px)' }}
            animate={{
              textShadow: [
                '0 0 30px rgba(0, 196, 180, 0.0)',
                '0 0 60px rgba(0, 196, 180, 0.4)',
                '0 0 30px rgba(0, 196, 180, 0.0)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Transform Your Business
          </motion.span>
          <motion.span 
            className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ 
              transform: 'translateZ(50px)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            With Intelligence
          </motion.span>
        </motion.h1>

        {/* Subheadline - clean and readable */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-4"
        >
          Drive exponential growth, optimize operations, and secure your digital future with 
          enterprise-grade technology solutions.
        </motion.p>

          {/* CTA Buttons - with 3D depth */}
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center mb-8 md:mb-12 lg:mb-16 px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
          <Link href="/contact">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                rotateX: 3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 md:px-12 py-4 md:py-5 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 20px 40px rgba(0, 196, 180, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2 md:gap-3 text-white font-bold text-base md:text-lg">
                Start Your Transformation
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <div 
                className="absolute inset-0 bg-white/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity"
                style={{ transform: 'translateZ(5px)' }}
              />
            </motion.div>
          </Link>

          <Link href="/solutions">
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                rotateX: 3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 md:px-12 py-4 md:py-5 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:bg-white/10 hover:border-cyan-400/50 transition-all shadow-xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <span className="flex items-center gap-2 md:gap-3 text-white font-semibold text-base md:text-lg">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                Explore Solutions
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Key Value Props - 3D cards with depth - Responsive and contained */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-8 max-w-6xl mx-auto px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {[
            { 
              icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, 
              title: "300% ROI", 
              subtitle: "Average Return",
              color: "from-green-400 to-emerald-500"
            },
            { 
              icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, 
              title: "99.99% Uptime", 
              subtitle: "Enterprise SLA",
              color: "from-blue-400 to-cyan-500"
            },
            { 
              icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, 
              title: "24/7 Support", 
              subtitle: "Global Coverage",
              color: "from-purple-400 to-pink-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.15 }}
              whileHover={{ 
                y: -6,
                rotateX: 3,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 lg:p-6 xl:p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 mb-3 md:mb-4 lg:mb-6 rounded-xl bg-gradient-to-br ${item.color} shadow-xl`}
                style={{ transform: 'translateZ(30px)' }}
                whileHover={{ 
                  rotateY: 180,
                  transition: { duration: 0.6 }
                }}
              >
                <div className="text-white">
                  {item.icon}
                </div>
              </motion.div>
              <div 
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 lg:mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                style={{ transform: 'translateZ(20px)' }}
              >
                {item.title}
              </div>
              <div 
                className="text-white/60 text-xs md:text-sm font-medium tracking-wide uppercase"
                style={{ transform: 'translateZ(10px)' }}
              >
                {item.subtitle}
              </div>
              
              {/* 3D depth shadow */}
              <div 
                className="absolute inset-0 bg-black/30 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: 'translateZ(-30px)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>

      {/* Scroll Indicator - Positioned absolutely at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 md:gap-2"
        >
          <span className="text-white/60 text-xs md:text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


