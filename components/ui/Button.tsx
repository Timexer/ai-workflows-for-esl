import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-brand-500 border border-transparent",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg hover:-translate-y-0.5 focus:ring-amber-500 border border-transparent",
    outline: "bg-transparent text-brand-700 border-2 border-brand-600 hover:bg-brand-50 focus:ring-brand-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], width, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;