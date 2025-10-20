'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Globe, Award, Users } from 'lucide-react';

export default function Floating3DMetrics() {
  // Simplified metrics for better visibility - only show 3 most important ones
  // Positioned safely within viewport boundaries
  const metrics = [
    { 
      icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />, 
      value: '300%', 
      label: 'ROI', 
      color: 'from-green-400 to-emerald-500', 
      // Safe positioning - always visible
      mobilePos: 'top-[12%] left-[5%]',
      desktopPos: 'top-[15%] left-[10%]',
      delay: 1.5 
    },
    { 
      icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />, 
      value: '99.99%', 
      label: 'Uptime', 
      color: 'from-cyan-400 to-blue-500', 
      mobilePos: 'top-[12%] right-[5%]',
      desktopPos: 'top-[20%] right-[10%]',
      delay: 1.7 
    },
    { 
      icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />, 
      value: '24/7', 
      label: 'Support', 
      color: 'from-purple-400 to-pink-500', 
      mobilePos: 'bottom-[15%] left-[5%]',
      desktopPos: 'bottom-[25%] left-[10%]',
      delay: 1.9 
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className={`absolute ${metric.mobilePos} lg:${metric.desktopPos.replace('top-', '').replace('bottom-', '').replace('left-', '').replace('right-', '')}`}
          style={{
            top: metric.desktopPos.includes('top') ? metric.desktopPos.match(/top-\[(.*?)\]/)?.[1] : 'auto',
            bottom: metric.desktopPos.includes('bottom') ? metric.desktopPos.match(/bottom-\[(.*?)\]/)?.[1] : 'auto',
            left: metric.desktopPos.includes('left') ? metric.desktopPos.match(/left-\[(.*?)\]/)?.[1] : 'auto',
            right: metric.desktopPos.includes('right') ? metric.desktopPos.match(/right-\[(.*?)\]/)?.[1] : 'auto',
          }}
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
              y: [0, -15, 0],
              rotateX: [0, 8, 0],
              rotateY: [0, 4, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
            whileHover={{
              scale: 1.08,
              rotateY: 12,
              z: 80,
              transition: { duration: 0.3 }
            }}
            className={`glass-dark rounded-xl md:rounded-2xl p-3 md:p-4 border-2 bg-gradient-to-br ${metric.color} border-opacity-40 shadow-2xl cursor-pointer max-w-[120px] md:max-w-none`}
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 15px 40px rgba(0, 196, 180, 0.25)',
              borderImageSlice: 1,
            }}
          >
            <motion.div
              className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2"
              style={{ transform: 'translateZ(20px)' }}
            >
              <div className={`p-1.5 md:p-2 rounded-lg bg-white/20 text-white`}>
                {metric.icon}
              </div>
              <div className="text-white font-bold text-lg md:text-2xl">{metric.value}</div>
            </motion.div>
            <div 
              className="text-white/80 text-[10px] md:text-xs font-medium uppercase tracking-wider"
              style={{ transform: 'translateZ(10px)' }}
            >
              {metric.label}
            </div>
            
            {/* 3D depth shadow */}
            <div 
              className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl blur-xl"
              style={{ transform: 'translateZ(-20px)' }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

