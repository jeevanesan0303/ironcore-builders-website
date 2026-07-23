import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('drawing');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Progress Counter Interval
    const startTime = Date.now();
    const duration = 2800; // 2.8s total loading speed

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress > 25 && currentProgress <= 55) {
        setStage('wireframe');
      } else if (currentProgress > 55 && currentProgress <= 85) {
        setStage('shimmer');
      } else if (currentProgress > 85) {
        setStage('complete');
      }

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 700); // Wait for slide exit transition
        }, 300);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  // SVG Calculations
  const towerLength = 377;
  const craneLength = 162;
  const baseLength = 160;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070F1E] text-white overflow-hidden select-none transition-all duration-700 ease-in-out ${
        isFading ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Animated Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />

      {/* Ambient Radial Golden Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none animate-pulse" />

      {/* Center Container */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 max-w-lg text-center">
        
        {/* Animated Building Wireframe Canvas SVG */}
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          
          {/* SVG Wireframe Construction Drawing */}
          <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="goldLoaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2C6" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#8A6B0B" />
              </linearGradient>
            </defs>

            {/* Blueprint Guidelines */}
            <line
              x1="20" y1="180" x2="180" y2="180"
              stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity={0.4}
              style={{
                strokeDasharray: baseLength,
                strokeDashoffset: 0,
                transition: 'stroke-dashoffset 1s ease-in-out'
              }}
            />

            {/* Tower Outline Wireframe */}
            <path
              d="M 50 180 L 50 50 L 100 20 L 150 50 L 150 180"
              fill="none"
              stroke="url(#goldLoaderGrad)"
              strokeWidth="2"
              strokeDasharray={towerLength}
              strokeDashoffset={towerLength - (progress / 100) * towerLength}
              style={{
                transition: 'stroke-dashoffset 0.1s linear'
              }}
            />

            {/* Structural Beams */}
            {stage !== 'drawing' && (
              <>
                <line x1="50" y1="90" x2="150" y2="90" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="2 2" opacity={0.8} className="transition-opacity duration-500" />
                <line x1="50" y1="130" x2="150" y2="130" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="2 2" opacity={0.8} className="transition-opacity duration-500" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#D4AF37" strokeWidth="1.5" opacity={0.8} className="transition-opacity duration-500" />
                {/* Diagonal Braces */}
                <line x1="50" y1="180" x2="100" y2="130" stroke="#D4AF37" strokeWidth="1" opacity={0.4} />
                <line x1="150" y1="180" x2="100" y2="130" stroke="#D4AF37" strokeWidth="1" opacity={0.4} />
              </>
            )}

            {/* Crane Boom Line */}
            <path
              d="M 30 50 L 100 10 L 170 50"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray={craneLength}
              strokeDashoffset={stage === 'complete' || stage === 'shimmer' ? 0 : craneLength}
              style={{
                transition: 'stroke-dashoffset 0.8s ease-in-out'
              }}
            />
          </svg>

          {/* Steel Texture Sweep Overlay */}
          {stage === 'shimmer' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse" />
          )}

          {/* Company Logo Emblem Center (Using actual official company logo image) */}
          <div className="absolute inset-0 flex items-center justify-center scale-[0.68]">
            <img
              src="/images/iron-core-logo-official.png"
              alt="Company Logo Center"
              className="h-16 w-auto object-contain filter drop-shadow-md"
            />
          </div>
        </div>

        {/* Company Title Reveal */}
        <div className="flex flex-col items-center">
          <h1 className="font-display font-black text-2xl tracking-[0.25em] text-white">
            IRONCORE
          </h1>
          <span className="font-sans font-semibold text-xs tracking-[0.5em] text-gold mt-1">
            BUILDERS
          </span>
        </div>

        {/* Status Subtitle */}
        <p className="font-sans text-[10px] tracking-widest text-slate-400 mt-4 uppercase h-4">
          {stage === 'drawing' && 'Initializing Blueprint Matrix...'}
          {stage === 'wireframe' && 'Calculating Structural Engineering...'}
          {stage === 'shimmer' && 'Applying Steel Precision Finish...'}
          {stage === 'complete' && 'Welcome to Ironcore Builders'}
        </p>

        {/* Progress Bar & Percentage */}
        <div className="w-64 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden relative border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-gold via-[#FFF2C6] to-[#E5A93C]"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          />
        </div>

        <div className="mt-2 font-mono text-[10px] text-gold tracking-widest">
          {progress}%
        </div>

        {/* Skip Option */}
        <button
          onClick={onComplete}
          className="mt-8 text-[9px] tracking-[0.2em] uppercase text-slate-500 hover:text-gold transition-colors cursor-pointer border-b border-transparent hover:border-gold focus:outline-none"
        >
          Skip Sequence →
        </button>
      </div>
    </div>
  );
}