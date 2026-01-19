import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
}) => {
  const baseClasses = 'font-display font-semibold transition-all duration-300 rounded-full relative';
  
  const variants = {
    primary: 'bg-accent text-white shadow-glow hover:shadow-lift hover:brightness-95',
    secondary: 'bg-transparent border border-accent/60 text-accent hover:border-accent hover:bg-accent/10',
  };
  
  const sizes = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };

  // Glow effect elements
  const glowEffect = variant === 'primary' && (
    <>
      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent/40 to-accent/20 blur-md group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-100"></span>
      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent/40 to-accent/20 blur-md group-hover:blur-xl animate-pulse transition-all duration-500"></span>
    </>
  );

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} group z-10`}
    >
      {glowEffect}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
