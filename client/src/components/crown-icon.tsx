interface CrownIconProps {
  className?: string;
}

export function CrownIcon({ className = "w-8 h-8" }: CrownIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 17h20l-2-12-3.5 4L12 6l-4.5 3L4 5l-2 12z" />
      <path d="M2 17v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2H2z" />
    </svg>
  );
}
