'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function EnterpriseHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] pt-24 pb-40"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 196, 180, 0.15) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full border border-cyan-400/10 pointer-events-none"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -90, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full">
      <motion.div
        style={{ opacity, scale, y }}
        className="container-clean text-center py-8"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 glass-dark rounded-full relative z-30"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            TRUSTED BY FORTUNE 500 COMPANIES
          </span>
          <CheckCircle className="w-4 h-4 text-green-400" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
        >
          Transform Your Business
          <br />
          <span className="gradient-text-gold">
            With Intelligence
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Drive exponential growth, optimize operations, and secure your digital future with 
          enterprise-grade technology solutions designed for tomorrow&apos;s challenges.
        </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
          <Link href="/contact" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-5 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-3 text-white font-bold text-lg">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          </Link>

          <Link href="/solutions" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl glass-dark border border-white/20 hover:border-white/40 transition-all"
            >
              <span className="flex items-center gap-3 text-white font-semibold text-lg">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Key Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
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
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all group cursor-pointer"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${item.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </div>
              <div className="text-white/70 text-sm font-medium">{item.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
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

