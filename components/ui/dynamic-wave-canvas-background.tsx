"use client";

import React, { useEffect, useRef } from 'react';

const HeroWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      if (!canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      width = rect.width;
      height = rect.height;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    };

    const render = () => {
      if (!ctx || width === 0 || height === 0) {
        animationId = requestAnimationFrame(render);
        return;
      }

      const time = Date.now() * 0.001;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      
      // AImax brand colors with accessibility
      const greenHue = 142;
      const blueHue = 214;
      const tealHue = 180;
      
      // Dynamic color mixing based on time
      const greenMix = 0.3 + 0.2 * Math.sin(time * 0.5);
      const blueMix = 0.4 + 0.3 * Math.cos(time * 0.3);
      const tealMix = 0.3 + 0.2 * Math.sin(time * 0.7);
      
      // Create smooth color transitions
      gradient.addColorStop(0, `hsl(${greenHue}, 76%, ${30 + greenMix * 20}%)`);
      gradient.addColorStop(0.5, `hsl(${tealHue}, 100%, ${25 + tealMix * 15}%)`);
      gradient.addColorStop(1, `hsl(${blueHue}, 84%, ${40 + blueMix * 20}%)`);
      
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Add wave patterns
      ctx.globalCompositeOperation = 'multiply';
      
      for (let i = 0; i < 3; i++) {
        const waveGradient = ctx.createRadialGradient(
          width * (0.3 + i * 0.2), 
          height * (0.4 + i * 0.1), 
          0,
          width * (0.3 + i * 0.2), 
          height * (0.4 + i * 0.1), 
          width * 0.8
        );
        
        const waveHue = i === 0 ? greenHue : i === 1 ? tealHue : blueHue;
        const waveAlpha = 0.1 + 0.05 * Math.sin(time * (0.5 + i * 0.3));
        
        waveGradient.addColorStop(0, `hsla(${waveHue}, 70%, 50%, ${waveAlpha})`);
        waveGradient.addColorStop(1, `hsla(${waveHue}, 70%, 50%, 0)`);
        
        ctx.fillStyle = waveGradient;
        ctx.fillRect(0, 0, width, height);
      }
      
      ctx.globalCompositeOperation = 'source-over';
      
      animationId = requestAnimationFrame(render);
    };

    // Initialize
    resizeCanvas();
    render();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default HeroWave;
