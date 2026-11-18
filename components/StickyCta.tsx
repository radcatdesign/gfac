'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Phone and tablet only: the two asks stay one thumb away once the hero is gone. */
export function StickyCta() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { y: 0, yPercent: 110 });
    const show = (v: boolean) => gsap.to(el, { y: 0, yPercent: v ? 0 : 110, duration: 0.5, ease: 'power3.out', overwrite: true });
    const st = ScrollTrigger.create({
      trigger: '[data-section="hero"]',
      start: 'bottom 60%',
      endTrigger: 'footer',
      end: 'top 70%',
      onToggle: (self) => show(self.isActive),
    });
    return () => st.kill();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transform: 'translateY(110%)' }}
      className="fixed inset-x-0 bottom-0 z-40 hidden grid-cols-2 gap-2 border-t border-line bg-ink/90 p-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur-xl max-[991px]:grid"
    >
      <a href="#trial" className="flex h-[52px] items-center justify-center border border-blue text-lg font-medium text-fg no-underline">
        Free 3-day pass
      </a>
      <a href="#pricing" className="flex h-[52px] items-center justify-center border border-green bg-green text-lg font-medium text-on-green no-underline">
        Join for $1
      </a>
    </div>
  );
}
