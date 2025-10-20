'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
}

export default function NetworkVisualization() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Create network nodes
    const newNodes: Node[] = [];
    for (let i = 0; i < 12; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      <svg className="w-full h-full" style={{ minHeight: '100vh' }}>
        {/* Connection Lines */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < 30) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="rgba(0, 196, 180, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 2,
                    delay: 2 + i * 0.1,
                    ease: "easeOut"
                  }}
                />
              );
            }
            return null;
          })
        )}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={node.id}>
            {/* Outer glow */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="12"
              fill="url(#nodeGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 2 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
            
            {/* Inner core */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="#00C4B4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                delay: 2 + i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
        
        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#00C4B4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00C4B4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

