'use client';

import { motion } from 'framer-motion';

export default function Hero3DOrb() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large rotating 3D sphere - left side */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Multiple concentric spheres for depth */}
        <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-full" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-8 border-2 border-blue-400/30 rounded-full" style={{ transform: 'translateZ(40px)' }} />
        <div className="absolute inset-16 border border-purple-400/20 rounded-full" style={{ transform: 'translateZ(80px)' }} />
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Medium 3D cube - right side */}
      <motion.div
        className="absolute top-1/3 -right-24 w-72 h-72"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Cube faces */}
        <div className="absolute inset-0 border-2 border-blue-400/40 rounded-2xl" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(144px)' }} />
        <div className="absolute inset-0 border-2 border-purple-400/30 rounded-2xl" style={{ transform: 'rotateY(180deg) translateZ(144px)' }} />
        <div className="absolute inset-0 border border-green-400/20 rounded-2xl" style={{ transform: 'rotateY(270deg) translateZ(144px)' }} />
        
        {/* Glow */}
        <div className="absolute inset-0 bg-blue-400/10 rounded-2xl blur-2xl" />
      </motion.div>

      {/* Small rotating ring - bottom right */}
      <motion.div
        className="absolute bottom-1/4 right-[15%] w-48 h-48"
        animate={{
          rotateX: [0, 360],
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 border-2 border-green-400/40 rounded-full" style={{ transform: 'translateZ(0px)' }} />
        <div className="absolute inset-4 border border-cyan-400/30 rounded-full" style={{ transform: 'translateZ(20px)' }} />
        <div className="absolute inset-8 border border-blue-400/20 rounded-full" style={{ transform: 'translateZ(40px)' }} />
      </motion.div>
    </div>
  );
}

