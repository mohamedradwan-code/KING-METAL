interface CrownIconProps {
  className?: string;
}

export function CrownIcon({ className = "w-8 h-8" }: CrownIconProps) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crown Base */}
      <rect x="10" y="50" width="80" height="8" rx="2" />
      
      {/* Crown Body */}
      <path d="M15 50 L20 20 L30 35 L40 15 L50 25 L60 15 L70 35 L80 20 L85 50 Z" />
      
      {/* Crown Points */}
      <path d="M30 35 L35 25 L40 35 Z" />
      <path d="M45 15 L50 5 L55 15 Z" />
      <path d="M60 35 L65 25 L70 35 Z" />
      
      {/* Center Jewel */}
      <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.8" />
      
      {/* Side Decorations */}
      <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="70" cy="30" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
