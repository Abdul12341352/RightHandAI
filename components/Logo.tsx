
import React from 'react';

const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Blue Square with 'R' */}
      <div className="w-[42px] h-[42px] rounded-[10px] bg-[#2563eb] flex items-center justify-center flex-shrink-0 shadow-sm">
        <span className="text-white text-[26px] font-bold font-sans leading-none pb-0.5">R</span>
      </div>
      
      {/* Brand Text */}
      <div className="flex items-center tracking-tight">
        <span className={`text-[28px] font-bold ${light ? 'text-white' : 'text-[#111827]'}`}>
          RightHand
        </span>
        <span className="text-[28px] font-bold text-[#2563eb] ml-1.5">
          AI
        </span>
      </div>
    </div>
  );
};

export default Logo;
