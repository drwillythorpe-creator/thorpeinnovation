"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#17a0c5", "#25a9a8", "#b5c423", "#f4b31a", "#df5463", "#c52185"];

const SPOKES = [
  { x1: 10, y1: -30, x2: 40, y2: -130, color: "#b5c423" },
  { x1: 40, y1: -5, x2: 120, y2: 5, color: "#f4b31a" },
  { x1: 25, y1: 30, x2: 80, y2: 120, color: "#c52185" },
  { x1: -10, y1: 40, x2: -45, y2: 110, color: "#df5463" },
  { x1: -40, y1: 15, x2: -130, y2: 30, color: "#17a0c5" },
  { x1: -30, y1: -15, x2: -80, y2: -75, color: "#25a9a8" },
];

interface AmbientParticle {
  x: number; y: number;
  vx: number; vy: number;
  angle: number; rotSpeed: number;
  length: number; color: string;
  opacity: number; targetOpacity: number;
  life: number; maxLife: number;
}

interface Sparkle {
  x: number; y: number;
  vx: number; vy: number;
  angle: number; length: number;
  color: string; life: number; maxLife: number;
}

export default function PinwheelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const ambient: AmbientParticle[] = [];
    const sparkles: Sparkle[] = [];
    let bigAngle = 0;
    const mouse = { x: -9999, y: -9999 };
    const prevMouse = { x: -9999, y: -9999 };

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const mkAmbient = (overrideY?: number): AmbientParticle => ({
      x: Math.random() * W(),
      y: overrideY !== undefined ? overrideY : H() + 40,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(0.25 + Math.random() * 0.55),
      angle: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.014,
      length: 16 + Math.random() * 38,
      color: COLORS[Math.floor(Math.random() * 6)],
      opacity: 0,
      targetOpacity: 0.05 + Math.random() * 0.17,
      life: 0,
      maxLife: 380 + Math.random() * 480,
    });

    // Seed ambient particles spread across the canvas height
    for (let i = 0; i < 60; i++) {
      const p = mkAmbient(Math.random() * H());
      p.opacity = p.targetOpacity * Math.random();
      p.life = Math.random() * p.maxLife;
      ambient.push(p);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Only spawn sparkles if cursor is inside the canvas
      if (mx >= 0 && mx <= W() && my >= 0 && my <= H()) {
        const dx = mx - prevMouse.x;
        const dy = my - prevMouse.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        if (speed > 5) {
          const count = Math.min(4, Math.floor(speed / 7));
          for (let i = 0; i < count; i++) {
            const a = Math.random() * Math.PI * 2;
            sparkles.push({
              x: mx + (Math.random() - 0.5) * 6,
              y: my + (Math.random() - 0.5) * 6,
              vx: Math.cos(a) * (0.6 + Math.random() * 2.2),
              vy: Math.sin(a) * (0.6 + Math.random() * 2.2) - 0.6,
              angle: Math.random() * Math.PI * 2,
              length: 6 + Math.random() * 14,
              color: COLORS[Math.floor(Math.random() * 6)],
              life: 0,
              maxLife: 28 + Math.floor(Math.random() * 22),
            });
          }
        }
      }

      prevMouse.x = mx;
      prevMouse.y = my;
      mouse.x = mx;
      mouse.y = my;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Draw a pinwheel at current ctx transform
    const drawPinwheel = (scale: number, alpha: number) => {
      SPOKES.forEach((s) => {
        ctx.beginPath();
        ctx.moveTo(s.x1 * scale * 1.6, s.y1 * scale * 1.6);
        ctx.lineTo(s.x2 * scale * 1.6, s.y2 * scale * 1.6);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 22 * scale * 1.6;
        ctx.lineCap = "round";
        ctx.globalAlpha = alpha;
        ctx.stroke();
      });
    };

    const draw = () => {
      const cw = W();
      const ch = H();
      ctx.clearRect(0, 0, cw, ch);

      const baseScale = Math.min(cw, ch) / 520;
      bigAngle += 0.0007;

      // ─── Large background pinwheel (top-right area) ─────────────────────
      ctx.save();
      ctx.translate(cw * 0.74, ch * 0.36);
      ctx.rotate(bigAngle);
      drawPinwheel(baseScale, 0.052);
      ctx.restore();

      // ─── Second smaller pinwheel (bottom-left area) ──────────────────────
      ctx.save();
      ctx.translate(cw * 0.12, ch * 0.72);
      ctx.rotate(-bigAngle * 1.5);
      drawPinwheel(baseScale * 0.48, 0.038);
      ctx.restore();

      // ─── Third tiny pinwheel (center-bottom) ─────────────────────────────
      ctx.save();
      ctx.translate(cw * 0.55, ch * 0.88);
      ctx.rotate(bigAngle * 0.7);
      drawPinwheel(baseScale * 0.28, 0.028);
      ctx.restore();

      // ─── Ambient floating particles ──────────────────────────────────────
      const repelR = 120;
      for (let i = 0; i < ambient.length; i++) {
        const p = ambient[i];
        p.life++;
        p.angle += p.rotSpeed;

        // Lifecycle fade
        const frac = p.life / p.maxLife;
        if (frac < 0.12) {
          p.opacity = p.targetOpacity * (frac / 0.12);
        } else if (frac > 0.78) {
          p.opacity = p.targetOpacity * ((1 - frac) / 0.22);
        } else {
          p.opacity = p.targetOpacity;
        }

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < repelR && dist > 1) {
          const force = ((repelR - dist) / repelR) * 0.14;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Velocity damping + upward bias
        p.vx *= 0.97;
        p.vy = p.vy * 0.97 + (-0.38 - p.vy) * 0.004;
        p.x += p.vx;
        p.y += p.vy;

        if (p.life >= p.maxLife || p.y < -60 || p.x < -120 || p.x > cw + 120) {
          ambient[i] = mkAmbient();
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-p.length / 2, 0);
        ctx.lineTo(p.length / 2, 0);
        ctx.stroke();
        ctx.restore();
      }

      // ─── Cursor sparkles ─────────────────────────────────────────────────
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life++;
        if (s.life >= s.maxLife) { sparkles.splice(i, 1); continue; }

        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05; // mild gravity
        s.angle += 0.1;
        s.vx *= 0.95;
        s.vy *= 0.95;

        const alpha = (1 - s.life / s.maxLife) * 0.75;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-s.length / 2, 0);
        ctx.lineTo(s.length / 2, 0);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
