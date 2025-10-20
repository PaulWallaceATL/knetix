'use client';

import { motion } from 'framer-motion';

export default function DataStream() {
  const streams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${(i + 1) * 12}%`,
    delay: i * 0.5,
    duration: 3 + i * 0.3,
  }));

  const dataPoints = ['01', '10', '11', '00', '01', '10'];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 bottom-0 w-px"
          style={{ left: stream.left }}
        >
          {dataPoints.map((data, idx) => (
            <motion.div
              key={`${stream.id}-${idx}`}
              className="absolute text-xs font-mono text-cyan-400"
              style={{
                left: '-10px',
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ 
                y: ['0vh', '100vh'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: stream.duration,
                delay: stream.delay + idx * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {data}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

