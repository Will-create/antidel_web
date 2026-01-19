import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'green' | 'blue' | 'none';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
}) => {
  const glowClasses = {
    green: 'shadow-glow hover:shadow-lift',
    blue: 'shadow-glow hover:shadow-lift',
    none: 'shadow-soft hover:shadow-lift',
  };
  
  const baseClasses = 'bg-card/90 backdrop-blur-sm rounded-2xl border border-line transition-all duration-300';
  
  return (
    <div className={`${baseClasses} ${glowClasses[glowColor]} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
