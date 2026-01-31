import React from 'react';

interface KnetixLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

export default function KnetixLogo({ 
  className = '', 
  showText = true, 
  size = 'md',
  variant = 'default'
}: KnetixLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle */}
          <circle cx="16" cy="16" r="16" fill="#0A2E50" />
          
          {/* Main K Shape */}
          <path
            d="M10 8H14L18 12L14 16L18 20L14 24H10L14 20L10 16L14 12L10 8Z"
            fill="#00C4B4"
          />
          
          {/* Accent Elements */}
          <circle cx="22" cy="10" r="2" fill="#FF8C00" />
          <circle cx="22" cy="22" r="2" fill="#FF8C00" />
          
          {/* Connecting Lines */}
          <path
            d="M18 12L22 10M18 20L22 22"
            stroke="#FF8C00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`font-bold ${variant === 'light' ? 'text-white' : 'text-[#0A2E50]'} ${textSizes[size]} tracking-tight`}>
          Knetix
        </span>
      )}
    </div>
  );
}

// Logo for social sharing and favicons
export function KnetixLogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="16" cy="16" r="16" fill="#0A2E50" />
      
      {/* Main K Shape */}
      <path
        d="M10 8H14L18 12L14 16L18 20L14 24H10L14 20L10 16L14 12L10 8Z"
        fill="#00C4B4"
      />
      
      {/* Accent Elements */}
      <circle cx="22" cy="10" r="2" fill="#FF8C00" />
      <circle cx="22" cy="22" r="2" fill="#FF8C00" />
      
      {/* Connecting Lines */}
      <path
        d="M18 12L22 10M18 20L22 22"
        stroke="#FF8C00"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
