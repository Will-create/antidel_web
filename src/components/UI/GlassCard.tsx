import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'green' | 'blue' | 'none';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'green',
}) => {
  const glowClasses = {
    green: 'shadow-glow-green hover:shadow-glow-green-lg',
    blue: 'shadow-glow-blue hover:shadow-glow-blue-lg',
    none: '',
  };
  
  const baseClasses = 'bg-dark-card backdrop-blur-md rounded-lg border border-white/10 transition-all duration-300';
  
  return (
    <div className={`${baseClasses} ${glowClasses[glowColor]} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;