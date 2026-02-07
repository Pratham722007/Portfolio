"use client";

import { useEffect, useRef, useState } from 'react';

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("");
  const fullText = "> LOADING...";

  // Typewriter Effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  // Matrix Rain Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = '01';
    const alphabet = katakana;
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Fade effect - use White with opacity to clear the canvas gradually for trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FD0809'; // Primary Red Text
      ctx.font = fontSize + 'px "Bangers", cursive'; // Use the comic font for the matrix code too!

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Matrix Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Spider Logo Container */}
        <div className="relative w-40 h-40 mb-8">
          {/* Spinning Border */}
          <div className="absolute inset-0 border-[6px] border-t-[#FD0809] border-r-transparent border-b-[#FD0809] border-l-transparent rounded-full animate-spin"></div>

          {/* Logo */}
          <div className="absolute inset-2 flex items-center justify-center bg-white rounded-full overflow-hidden border-4 border-black shadow-[4px_4px_0px_#000]">
            <img
              src="/spidey-logo.png"
              alt="Spidey Logo"
              className="w-24 h-24 object-contain animate-pulse"
            />
          </div>

          {/* Scanning Line */}
          <div className="absolute inset-0 w-full h-1 bg-[#FD0809] shadow-[0_0_10px_#FD0809] animate-scan opacity-70"></div>
        </div>

        {/* Typing Text */}
        <h2 className="font-heading text-[#FD0809] text-3xl md:text-5xl tracking-widest drop-shadow-[2px_2px_0px_#000]">
          {text}<span className="animate-blink text-black">_</span>
        </h2>
      </div>

      {/* Tailwind Custom Animation for Scan */}
      <style jsx>{`
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
            animation: scan 2s linear infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        .animate-blink {
            animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}