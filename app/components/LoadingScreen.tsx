"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="relative flex items-center justify-center">
        
        {/* Anti-clockwise Rotating Half Circles */}
        <div className="absolute h-56 w-56 border-[6px] border-transparent border-t-[#FA1329] border-b-[#FA1329] rounded-full animate-spin-reverse"></div>
        
        {/* Your Spider Logo */}
        <img 
          src="/spidey-logo.png" 
          alt="Spidey Logo" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Loading Text with Animation */}
      <h2 className="mt-12 text-[#FA1329] font-mono text-xl tracking-[0.5em] animate-pulse">
        LOADING....
      </h2>
    </div>
  );
}