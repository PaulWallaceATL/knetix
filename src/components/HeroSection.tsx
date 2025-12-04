'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-pink-400/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-16 h-16 border border-white/10 rounded-lg"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-white/10 rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDBMMjAgNDBNMCAyMEw0MCAyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-clean flex items-center min-h-screen pt-20">
        <div className="w-full">
          <motion.div 
            className="text-center max-w-5xl mx-auto space-y-clean-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Animated Badge */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="apple-text-callout text-white font-medium">Trusted by 500+ enterprises worldwide</span>
            </motion.div>

            {/* Vibrant Headline with Gradient Text */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Knetix.
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease infinite"
                }}
              >
                Powering Your Digital Evolution
              </motion.span>
            </motion.h1>

            {/* Enhanced Sub-headline */}
            <motion.p 
              className="apple-text-body text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Accelerate growth, streamline operations, and secure your future with intelligent technology solutions tailored for tomorrow&apos;s most ambitious challenges.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden shadow-2xl"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/solutions"
                  className="group px-10 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <span className="group-hover:text-purple-300 transition-colors duration-300">Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            {[
              { value: "TSD", label: "Ecosystem Partners", color: "from-blue-400 to-cyan-400" },
              { value: "Zero Trust", label: "Security Lens", color: "from-purple-400 to-pink-400" },
              { value: "FinOps", label: "Investment Control", color: "from-green-400 to-teal-400" },
              { value: "Advisory", label: "Operating Model", color: "from-orange-400 to-red-400" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="apple-text-callout text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}