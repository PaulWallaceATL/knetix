'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Cloud, Lock, Server, Network } from 'lucide-react';

export default function FloatingCards3D() {
  const cards = [
    { icon: <Shield className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500', label: 'Secure', position: 'top-20 right-[15%]' },
    { icon: <Zap className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500', label: 'Fast', position: 'top-40 right-[5%]' },
    { icon: <Cloud className="w-6 h-6" />, color: 'from-purple-500 to-pink-500', label: 'Cloud', position: 'bottom-40 right-[10%]' },
    { icon: <Lock className="w-6 h-6" />, color: 'from-green-500 to-emerald-500', label: 'Protected', position: 'top-32 left-[8%]' },
    { icon: <Server className="w-6 h-6" />, color: 'from-indigo-500 to-blue-500', label: 'Reliable', position: 'bottom-32 left-[12%]' },
    { icon: <Network className="w-6 h-6" />, color: 'from-pink-500 to-rose-500', label: 'Connected', position: 'top-1/2 left-[5%]' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={`absolute ${card.position} hidden lg:block`}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotateX: -180,
            rotateY: -180,
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateX: 0,
            rotateY: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5 + index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000,
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 10, 0],
              rotateX: [0, 5, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Card with 3D depth */}
            <div 
              className={`glass-dark rounded-xl p-4 shadow-2xl backdrop-blur-md border border-white/20`}
              style={{
                transform: 'translateZ(20px)',
              }}
            >
              <div className={`bg-gradient-to-r ${card.color} p-3 rounded-lg mb-2`}>
                <div className="text-white">
                  {card.icon}
                </div>
              </div>
              <div className="text-xs font-semibold text-white/90">{card.label}</div>
            </div>
            
            {/* 3D shadow layer */}
            <div 
              className="absolute inset-0 bg-black/30 rounded-xl blur-sm"
              style={{
                transform: 'translateZ(-10px)',
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

