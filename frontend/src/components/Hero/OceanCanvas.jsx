import React, { useEffect, useRef } from 'react';

export default function OceanCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    // Generate foam bubbles for shoreline realism
    const foamBubbles = Array.from({ length: 120 }, () => ({
      relX: Math.random(),
      relY: Math.random(),
      size: Math.random() * 25 + 10,
      alpha: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.002 + 0.001,
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      time += 0.012;

      // 1. Warm Beach Base Water Gradient (Sunlit Pinamar Shore)
      const oceanGrad = ctx.createLinearGradient(0, 0, width, height);
      oceanGrad.addColorStop(0, '#5C4028');   // Deep warm wood water
      oceanGrad.addColorStop(0.35, '#7C5B39'); // Warm caramel coastal water
      oceanGrad.addColorStop(0.65, '#A47D4C'); // Clear sunlit shore water
      oceanGrad.addColorStop(1, '#C8A068');   // Shallow golden dune water

      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Beach Sand Shore Line (Bottom Right Zone)
      ctx.save();
      
      // Shoreline path definition (organic curve from bottom-left diagonal to bottom-right)
      ctx.beginPath();
      const shoreYBase = height * 0.68;
      const shoreXBase = width * 0.25;

      ctx.moveTo(0, height);
      ctx.lineTo(shoreXBase, height);

      // Natural curvy coastline
      ctx.bezierCurveTo(
        width * 0.45 + Math.sin(time * 0.2) * 15,
        height * 0.88 + Math.cos(time * 0.3) * 10,
        width * 0.65 + Math.cos(time * 0.25) * 20,
        height * 0.62 + Math.sin(time * 0.15) * 15,
        width,
        height * 0.52
      );

      ctx.lineTo(width, height);
      ctx.closePath();

      // Golden sand gradient (wet near water, warm dry further in)
      const sandGrad = ctx.createLinearGradient(width * 0.4, height * 0.8, width, height * 0.5);
      sandGrad.addColorStop(0, '#7c5e3c');   // Dark wet sand
      sandGrad.addColorStop(0.3, '#9d7a50'); // Medium wet sand
      sandGrad.addColorStop(0.7, '#ba9564'); // Warm beach sand
      sandGrad.addColorStop(1, '#cdab77');   // Dry golden dune sand

      ctx.fillStyle = sandGrad;
      ctx.fill();
      ctx.restore();

      // 3. Rolling Beach Waves crashing onto sand
      const numWaves = 4;
      for (let w = 0; w < numWaves; w++) {
        const cycle = (time * 0.35 + w / numWaves) % 1; // 0 to 1 wave lifecycle
        
        ctx.save();
        ctx.beginPath();

        // Wave front position moving towards bottom right shore
        const waveOffset = cycle * (width * 0.7);
        const startX = -100 + waveOffset * 0.8;
        const startY = height * 0.2 + waveOffset * 0.5;

        ctx.moveTo(startX, 0);

        for (let y = 0; y <= height; y += 30) {
          const x = startX + Math.sin(y * 0.01 + time * 1.5 + w) * 35 + Math.cos(y * 0.005 - time) * 20;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(-200, height + 100);
        ctx.lineTo(-200, -100);
        ctx.closePath();

        // Translucent water body behind wave crest
        const waveWaterGrad = ctx.createLinearGradient(startX - 150, 0, startX + 50, 0);
        waveWaterGrad.addColorStop(0, 'rgba(92, 64, 40, 0)');
        waveWaterGrad.addColorStop(0.7, `rgba(196, 146, 74, ${0.25 * (1 - cycle)})`);
        waveWaterGrad.addColorStop(1, `rgba(242, 232, 217, ${0.4 * (1 - cycle)})`);

        ctx.fillStyle = waveWaterGrad;
        ctx.fill();

        // Wave Foam Crest (Thick white sea foam breaking line)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.75 * Math.sin(cycle * Math.PI)})`;
        ctx.lineWidth = 14 + (1 - cycle) * 18;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Inner foam detail line
        ctx.strokeStyle = `rgba(254, 249, 240, ${0.9 * Math.sin(cycle * Math.PI)})`;
        ctx.lineWidth = 4 + (1 - cycle) * 6;
        ctx.shadowBlur = 0;
        ctx.stroke();

        ctx.restore();
      }

      // 4. Shoreline Wet Foam & Backwash (Water spreading on sand)
      ctx.save();
      const swashCycle = Math.sin(time * 0.8);
      const swashAlpha = Math.max(0, swashCycle * 0.4);

      if (swashAlpha > 0) {
        ctx.beginPath();
        ctx.moveTo(width * 0.2, height);
        ctx.bezierCurveTo(
          width * 0.45 + swashCycle * 40,
          height * 0.85 - swashCycle * 30,
          width * 0.65 + swashCycle * 50,
          height * 0.6 - swashCycle * 25,
          width,
          height * 0.48 - swashCycle * 20
        );
        ctx.lineTo(width, height);
        ctx.closePath();

        const swashGrad = ctx.createLinearGradient(width * 0.3, height * 0.9, width, height * 0.5);
        swashGrad.addColorStop(0, `rgba(255, 255, 255, ${swashAlpha * 0.6})`);
        swashGrad.addColorStop(0.5, `rgba(242, 232, 217, ${swashAlpha * 0.35})`);
        swashGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = swashGrad;
        ctx.fill();
      }
      ctx.restore();

      // 5. Floating Foam Particles & Swirls across sea
      foamBubbles.forEach((b) => {
        b.relX += b.speed;
        if (b.relX > 1.2) b.relX = -0.2;

        const bx = b.relX * width;
        const by = b.relY * height;
        const currentAlpha = b.alpha * (0.6 + 0.4 * Math.sin(time * 2 + b.phase));

        const bubbleGrad = ctx.createRadialGradient(bx, by, 0, bx, by, b.size);
        bubbleGrad.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
        bubbleGrad.addColorStop(0.5, `rgba(242, 232, 217, ${currentAlpha * 0.4})`);
        bubbleGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = bubbleGrad;
        ctx.beginPath();
        ctx.arc(bx, by, b.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Soft Warm Vignette for luxury backdrop contrast
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.3,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(38, 24, 14, 0.45)');

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-40 mix-blend-screen"
    />
  );
}
