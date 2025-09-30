"use client";

import { useEffect, useRef } from "react";

export default function WavesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = (
      amplitude: number,
      frequency: number,
      phase: number,
      yOffset: number,
      color: string,
      opacity: number,
      waveOffset: number = 0
    ) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x <= canvas.width; x++) {
        const y = yOffset + Math.sin((x * frequency) + phase + waveOffset) * amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      ctx.fillStyle = color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
      ctx.fill();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create enhanced gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#fef3f2");
      gradient.addColorStop(0.3, "#fef7ed");
      gradient.addColorStop(0.6, "#f0f9ff");
      gradient.addColorStop(1, "#f0fdf4");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw enhanced waves with more layers and better colors
      const waves = [
        {
          amplitude: 60,
          frequency: 0.008,
          phase: time * 0.015,
          yOffset: canvas.height * 0.65,
          color: "rgb(251, 191, 36)",
          opacity: 0.4,
          waveOffset: 0
        },
        {
          amplitude: 45,
          frequency: 0.012,
          phase: time * 0.02,
          yOffset: canvas.height * 0.7,
          color: "rgb(34, 197, 94)",
          opacity: 0.35,
          waveOffset: Math.PI / 3
        },
        {
          amplitude: 35,
          frequency: 0.016,
          phase: time * 0.025,
          yOffset: canvas.height * 0.75,
          color: "rgb(59, 130, 246)",
          opacity: 0.3,
          waveOffset: Math.PI / 2
        },
        {
          amplitude: 25,
          frequency: 0.02,
          phase: time * 0.03,
          yOffset: canvas.height * 0.8,
          color: "rgb(168, 85, 247)",
          opacity: 0.25,
          waveOffset: Math.PI
        },
        {
          amplitude: 20,
          frequency: 0.024,
          phase: time * 0.035,
          yOffset: canvas.height * 0.85,
          color: "rgb(236, 72, 153)",
          opacity: 0.2,
          waveOffset: Math.PI * 1.5
        }
      ];

      waves.forEach(wave => {
        drawWave(
          wave.amplitude,
          wave.frequency,
          wave.phase,
          wave.yOffset,
          wave.color,
          wave.opacity,
          wave.waveOffset
        );
      });

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: "linear-gradient(to bottom, #fef3f2, #fef7ed, #f0f9ff, #f0fdf4)"
      }}
    />
  );
}