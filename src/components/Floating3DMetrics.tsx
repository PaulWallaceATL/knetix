'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Globe, Award, Users } from 'lucide-react';

export default function Floating3DMetrics() {
  const metrics = [
    { icon: <TrendingUp className="w-5 h-5" />, value: '300%', label: 'ROI', color: 'from-green-400 to-emerald-500', position: 'top-[15%] left-[8%]', delay: 1.5 },
    { icon: <Shield className="w-5 h-5" />, value: '99.99%', label: 'Uptime', color: 'from-cyan-400 to-blue-500', position: 'top-[25%] right-[12%]', delay: 1.7 },
    { icon: <Zap className="w-5 h-5" />, value: '24/7', label: 'Support', color: 'from-purple-400 to-pink-500', position: 'bottom-[30%] left-[10%]', delay: 1.9 },
    { icon: <Globe className="w-5 h-5" />, value: '50+', label: 'Countries', color: 'from-blue-400 to-indigo-500', position: 'bottom-[35%] right-[8%]', delay: 2.1 },
    { icon: <Award className="w-5 h-5" />, value: 'SOC 2', label: 'Certified', color: 'from-yellow-400 to-orange-500', position: 'top-[45%] left-[6%]', delay: 2.3 },
    { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Clients', color: 'from-pink-400 to-rose-500', position: 'top-[50%] right-[10%]', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className={`absolute ${metric.position} hidden xl:block`}
          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1, 
            delay: metric.delay,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 10, 0],
              rotateY: [0, 5, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 15,
              z: 100,
              transition: { duration: 0.3 }
            }}
            className={`glass-dark rounded-2xl p-4 border-2 bg-gradient-to-br ${metric.color} border-opacity-40 shadow-2xl cursor-pointer`}
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 60px rgba(0, 196, 180, 0.3)',
              borderImageSlice: 1,
            }}
          >
            <motion.div
              className="flex items-center gap-3 mb-2"
              style={{ transform: 'translateZ(20px)' }}
            >
              <div className={`p-2 rounded-lg bg-white/20 text-white`}>
                {metric.icon}
              </div>
              <div className="text-white font-bold text-2xl">{metric.value}</div>
            </motion.div>
            <div 
              className="text-white/70 text-xs font-medium uppercase tracking-wider"
              style={{ transform: 'translateZ(10px)' }}
            >
              {metric.label}
            </div>
            
            {/* 3D depth shadow */}
            <div 
              className="absolute inset-0 bg-black/40 rounded-2xl blur-xl"
              style={{ transform: 'translateZ(-20px)' }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

