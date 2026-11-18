'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nav, site } from '@/lib/site';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" aria-label={`${site.name} home`} className={`flex items-center gap-3 no-underline ${className}`}>
      <span className="font-display text-[28px] font-bold uppercase leading-none tracking-tight text-white">
        Get<span className="text-green">/</span>Fit
      </span>
      <span className="hidden border-l border-line pl-3 text-[11px] font-medium uppercase leading-tight tracking-[0.18em] text-mist min-[480px]:block">
        Athletic
        <br />
        Club
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const barRef = useRef<HTMLElement>(null);
  openRef.current = open;

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const y = self.scroll();
        bar.dataset.scrolled = y > 40 ? 'true' : 'false';
        if (openRef.current) return;
        const hide = self.direction === 1 && y > 500;
        gsap.to(bar, { yPercent: hide ? -100 : 0, duration: 0.45, ease: 'power3.out', overwrite: true });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <header
      ref={barRef}
      data-scrolled="false"
      className="group/bar fixed inset-x-0 top-0 z-50 h-[88px] border-b border-transparent transition-[background-color,border-color,height] duration-500 data-[scrolled=true]:h-[72px] data-[scrolled=true]:border-line data-[scrolled=true]:bg-ink/80 data-[scrolled=true]:backdrop-blur-xl max-[767px]:h-[72px]"
    >
      <div className="container-site flex h-full items-center justify-between">
        <Logo />

        <nav aria-label="Main" className="flex items-center max-[991px]:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group/link relative px-4 py-3 text-lg text-[#e7e7e7] no-underline transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-green transition-transform duration-300 group-hover/link:scale-x-100" />
            </a>
          ))}
          <Button href="#trial" variant="outline" className="ml-4">
            Free 3-day pass
          </Button>
          <Button href="#pricing" variant="join" className="ml-3">
            Join for $1
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`hidden h-12 w-12 items-center justify-center transition-colors duration-200 max-[991px]:flex ${
            open ? 'bg-blue' : 'bg-elev'
          }`}
        >
          <span className="flex flex-col items-center gap-[7px]">
            <span className={`h-[2px] w-7 transition-transform duration-300 ${open ? 'translate-y-[4.5px] rotate-45 bg-white' : 'bg-green'}`} />
            <span className={`h-[2px] transition-all duration-300 ${open ? 'w-7 -translate-y-[4.5px] -rotate-45 bg-white' : 'w-5 bg-green'}`} />
          </span>
        </button>
      </div>

      <div
        data-menu-open={open ? '' : undefined}
        className={`absolute inset-x-3 top-[80px] hidden max-h-[calc(100svh-100px)] overflow-y-auto border border-line bg-elev p-8 transition-all duration-300 max-[991px]:block ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="block border-b border-line py-5 font-display text-2xl uppercase text-white no-underline"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-8 flex flex-col gap-3">
          <Button href="#pricing" variant="join" onClick={() => setOpen(false)}>
            Join for $1
          </Button>
          <Button href="#trial" variant="outline" onClick={() => setOpen(false)}>
            Free 3-day pass
          </Button>
        </div>
      </div>
    </header>
  );
}
