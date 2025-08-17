import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { doorOpen } from "@/lib/animations";

interface DoorPanelProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
  onClick?: () => void;
  className?: string;
  "data-testid"?: string;
}

export function DoorPanel({
  icon,
  title,
  description,
  features,
  buttonText,
  onClick,
  className,
  "data-testid": dataTestId,
}: DoorPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 1000);
    if (onClick) onClick();
  };

  return (
    <motion.div
      className={`door-panel group cursor-pointer ${className}`}
      variants={doorOpen}
      initial="initial"
      whileHover="hover"
      animate={isOpen ? "open" : "initial"}
      onClick={handleClick}
      data-testid={dataTestId}
    >
      <Card className="relative steel-texture rounded-2xl p-8 h-96 border-2 border-king-gold/20 hover:border-king-gold/40 transition-all duration-300 overflow-hidden shadow-2xl">
        {/* Door Handle */}
        <div className="absolute top-4 left-4 w-8 h-20 bg-gradient-to-b from-king-gold via-king-gold-light to-king-gold rounded-full shadow-xl border border-king-gold/30" />
        {/* Door Bolts */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-king-steel border border-king-gold/40 shadow-inner" />
        <div className="absolute top-16 right-6 w-3 h-3 rounded-full bg-king-steel border border-king-gold/40 shadow-inner" />
        <div className="absolute bottom-16 right-6 w-3 h-3 rounded-full bg-king-steel border border-king-gold/40 shadow-inner" />
        <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-king-steel border border-king-gold/40 shadow-inner" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-king-gold/20 rounded-full flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-2xl font-royal font-bold mb-3 text-white" data-testid={`${dataTestId}-title`}>
              {title}
            </h3>
            <p className="text-gray-300 text-sm mb-4" data-testid={`${dataTestId}-description`}>
              {description}
            </p>
          </div>
          
          {/* Features List */}
          <div className="space-y-2 text-sm">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center" data-testid={`${dataTestId}-feature-${index}`}>
                <Check className="w-4 h-4 text-king-gold ml-2 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          {buttonText && (
            <Button
              className="mt-4 button-door text-white font-royal relative z-10"
              onClick={(e) => {
                e.stopPropagation();
                if (onClick) onClick();
              }}
              data-testid={`${dataTestId}-button`}
            >
              <span className="relative z-20">{buttonText}</span>
            </Button>
          )}
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-king-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Card>
    </motion.div>
  );
}
