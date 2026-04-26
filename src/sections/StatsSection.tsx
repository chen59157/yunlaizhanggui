import { STATS } from '@/data/content';
import { useCounter } from '@/hooks/useAnimations';
import { useEffect, useRef } from 'react';

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}

function StatItem({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const { count, ref } = useCounter(value, 2000);
  const isDecimal = value % 1 !== 0;

  return (
    <span ref={ref} className="text-center block">
      <div className="font-data text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        {isDecimal ? count.toFixed(1) : count}
        <span className="text-[#87CEEB]">{suffix}</span>
      </div>
      <p className="mt-2 text-lg font-semibold text-white">{label}</p>
      <p className="mt-1 text-sm text-white/50">{desc}</p>
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="data" className="bg-gradient-dark relative overflow-hidden py-20 md:py-28">
      <ParticleBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80">
            数据实力
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            用数据说话
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            每一个数字背后，都是与商家并肩作战的真实成果
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
