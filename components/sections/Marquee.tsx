'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = ['Pickleball', 'Racquetball', 'Cardio theatre', 'Group fitness', 'Personal training', 'Tanning', '24-hour access'];

/** Endless band that speeds up and leans with scroll velocity. */
export function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const loop = gsap.to(el, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
    let settle: gsap.core.Tween | undefined;
    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = self.getVelocity() / 240;
        gsap.to(loop, { timeScale: gsap.utils.clamp(1, 7, 1 + Math.abs(v)), duration: 0.2, overwrite: true });
        gsap.to(el, { skewX: gsap.utils.clamp(-8, 8, -v * 1.2), duration: 0.3, overwrite: 'auto' });
        settle?.kill();
        settle = gsap.delayedCall(0.2, () => {
          gsap.to(loop, { timeScale: 1, duration: 0.9, overwrite: true });
          gsap.to(el, { skewX: 0, duration: 0.7, overwrite: 'auto' });
        });
      },
    });
    return () => {
      st.kill();
      settle?.kill();
      loop.kill();
    };
  }, []);

  return (
    <div data-section="marquee" aria-hidden className="overflow-hidden border-y border-line bg-ink py-7">
      <div ref={track} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span key={word} className="flex items-center font-display text-[clamp(28px,3.4vw,52px)] font-semibold uppercase leading-none">
                <span className="px-8">{word}</span>
                <span className="h-3 w-3 rotate-45 bg-green" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
