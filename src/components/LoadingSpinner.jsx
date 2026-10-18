import React from 'react';

function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-white bg-[#021B2B] font-['Inter',sans-serif] px-4">
      <div className="relative w-12 h-12 mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-solid border-[rgba(127,168,184,0.2)]"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-solid border-transparent border-t-[#FF6B00] animate-spin"></div>
      </div>
      <p className="text-[15px] font-medium text-[#7FA8B8] tracking-wide animate-pulse">{message}</p>
    </div>
  );
}

export default LoadingSpinner;
