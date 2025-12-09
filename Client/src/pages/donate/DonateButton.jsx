import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DonateButton({ variant = 'primary', size = 'md', className = '' }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const goToDonatePage = () => {
    navigate('/payment');
  };

  // Size variants
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Color variants
  const variantClasses = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white',
    secondary: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white',
    outline: 'border-2 border-amber-500 text-amber-600 hover:bg-amber-50',
    minimal: 'bg-transparent text-amber-600 hover:bg-amber-50'
  };

  return (
    <button
      onClick={goToDonatePage}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        group relative flex items-center justify-center gap-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl font-semibold
        transition-all duration-300 ease-out
        shadow-lg hover:shadow-xl
        transform hover:-translate-y-0.5 active:translate-y-0
        focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-50
        overflow-hidden
        ${isPressed ? 'scale-95' : 'scale-100'}
        ${className}
      `}
    >
      {/* Animated background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Heart icon with pulse animation */}
      <svg
        className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      <span className="relative z-10 tracking-wide">Donate</span>

      {/* Ripple effect on hover */}
      {isHovered && (
        <span className="absolute inset-0 rounded-xl border-2 border-white opacity-75 animate-ping" />
      )}
    </button>
  );
}

export default DonateButton;