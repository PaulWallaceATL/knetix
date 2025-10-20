'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
export default function EnterpriseHero() {
  // Sophisticated, refined motion design - quality over quantity

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] pt-24 pb-40"
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
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Single sophisticated geometric accent - top right */}
      <motion.div
        className="absolute top-32 right-32 w-80 h-80 pointer-events-none hidden xl:block opacity-20"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border border-white/20 rounded-2xl" style={{ transform: 'rotateX(60deg) rotateY(0deg)' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full">
      <div className="container-clean text-center py-8">
        {/* Trust Badge - refined and elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/5 backdrop-blur-md rounded-full border border-white/10 relative z-30"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-white/80 text-sm font-medium tracking-wide">
            TRUSTED BY FORTUNE 500 COMPANIES
          </span>
          <CheckCircle className="w-4 h-4 text-cyan-400" />
        </motion.div>

        {/* Main Headline - elegant simplicity */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
        >
          <span className="block">Transform Your Business</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            With Intelligence
          </span>
        </motion.h1>

        {/* Subheadline - clean and readable */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Drive exponential growth, optimize operations, and secure your digital future with 
          enterprise-grade technology solutions.
        </motion.p>

          {/* CTA Buttons - refined interactions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative px-12 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center gap-3 text-white font-semibold text-lg">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.div>
          </Link>

          <Link href="/solutions">
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-12 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span className="flex items-center gap-3 text-white font-medium text-lg">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Key Value Props - refined cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { 
              icon: <TrendingUp className="w-6 h-6" />, 
              title: "300% ROI", 
              subtitle: "Average Return",
              color: "from-green-400 to-emerald-500"
            },
            { 
              icon: <Shield className="w-6 h-6" />, 
              title: "99.99% Uptime", 
              subtitle: "Enterprise SLA",
              color: "from-blue-400 to-cyan-500"
            },
            { 
              icon: <Zap className="w-6 h-6" />, 
              title: "24/7 Support", 
              subtitle: "Global Coverage",
              color: "from-purple-400 to-pink-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </div>
              <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                {item.subtitle}
              </div>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
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


