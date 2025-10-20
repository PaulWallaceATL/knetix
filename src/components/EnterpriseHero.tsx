'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import FloatingCards3D from './FloatingCards3D';
import NetworkVisualization from './NetworkVisualization';
import ParticleField from './ParticleField';
import DataStream from './DataStream';

export default function EnterpriseHero() {
  // Innovative motion design with purposeful 3D transforms

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] pt-24 pb-40"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 196, 180, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 196, 180, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 196, 180, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Layer 1: Data Stream (Background) */}
      <DataStream />
      
      {/* Layer 2: Network Visualization */}
      <NetworkVisualization />
      
      {/* Layer 3: Particle Field */}
      <ParticleField />
      
      {/* Layer 4: Floating 3D Cards (Foreground) */}
      <FloatingCards3D />

      {/* Sophisticated geometric shapes with 3D rotation */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 pointer-events-none hidden lg:block"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 180],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="w-full h-full border border-white/10 rounded-3xl" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-0 border border-cyan-400/10 rounded-3xl" style={{ transform: 'translateZ(20px) scale(0.9)' }} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 pointer-events-none hidden lg:block"
        animate={{
          rotateX: [0, -360],
          rotateZ: [0, 180],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="w-full h-full border border-purple-400/10 rounded-full" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-0 border border-blue-400/10 rounded-full" style={{ transform: 'translateZ(30px) scale(0.85)' }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full">
      <div className="container-clean text-center py-8">
        {/* Trust Badge with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -30, z: -50 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            rotateX: 5,
            z: 30,
            transition: { duration: 0.3 }
          }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 glass-dark rounded-full relative z-30 shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
            animate={{
              boxShadow: [
                '0 0 10px rgba(0, 196, 180, 0.5)',
                '0 0 20px rgba(0, 196, 180, 0.8)',
                '0 0 10px rgba(0, 196, 180, 0.5)',
              ]
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

        {/* Main Headline with 3D Depth */}
        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          style={{
            transformStyle: 'preserve-3d',
            textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                '0 0 20px rgba(0, 196, 180, 0.3)',
                '0 0 40px rgba(0, 196, 180, 0.5)',
                '0 0 20px rgba(0, 196, 180, 0.3)',
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Transform Your Business
          </motion.span>
          <br />
          <motion.span 
            className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
              transform: 'translateZ(20px)',
            }}
          >
            With Intelligence
          </motion.span>
        </motion.h1>

        {/* Subheadline with Layered Depth */}
        <motion.p
          initial={{ opacity: 0, y: 20, z: -50 }}
          animate={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(15px)',
          }}
        >
          Drive exponential growth, optimize operations, and secure your digital future with 
          enterprise-grade technology solutions designed for tomorrow&apos;s challenges.
        </motion.p>

          {/* CTA Buttons with 3D Effects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            style={{ transformStyle: 'preserve-3d' }}
          >
          <Link href="/contact" className="group">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                z: 50,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative px-10 py-5 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
              <motion.div 
                className="absolute inset-0"
                animate={{
                  background: [
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 flex items-center gap-3 text-white font-bold text-lg">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          </Link>

          <Link href="/solutions" className="group">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="px-10 py-5 rounded-2xl glass-dark border border-white/20 hover:border-white/40 transition-all shadow-xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <span className="flex items-center gap-3 text-white font-semibold text-lg">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Key Value Props with 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
          style={{ transformStyle: 'preserve-3d' }}
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
              initial={{ opacity: 0, y: 30, rotateX: -20, z: -100 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                y: -8, 
                rotateX: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all group cursor-pointer shadow-xl hover:shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${item.color}`}
                style={{ transform: 'translateZ(20px)' }}
                whileHover={{ 
                  rotateY: 360,
                  transition: { duration: 0.8 }
                }}
              >
                {item.icon}
              </motion.div>
              <div 
                className={`text-3xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                style={{ transform: 'translateZ(10px)' }}
              >
                {item.title}
              </div>
              <div 
                className="text-white/70 text-sm font-medium"
                style={{ transform: 'translateZ(5px)' }}
              >
                {item.subtitle}
              </div>
              
              {/* 3D Shadow Layer */}
              <div 
                className="absolute inset-0 bg-black/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ transform: 'translateZ(-20px)' }}
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


