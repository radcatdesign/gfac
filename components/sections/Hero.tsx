'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { images, offer, site } from '@/lib/site';
import { Button } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('[data-hero="bg"]', { autoAlpha: 0, scale: 1.18 }, { autoAlpha: 1, scale: 1.04, duration: 2.2, ease: 'power2.out' }, 0);
      tl.fromTo('[data-hero="label"]', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.25);

      gsap.set('[data-hero="title"]', { autoAlpha: 1 });
      SplitText.create('[data-hero="title"]', {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, { yPercent: 110, duration: 1.25, stagger: 0.12, ease: 'power4.out', delay: 0.35 }),
      });

      tl.fromTo(
        '[data-hero="fade"]',
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 },
        0.95,
      );

      // The photo drifts and the copy lifts away as the page scrolls on.
      gsap.to('[data-hero="bg"]', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-hero-copy]', {
        yPercent: -12,
        autoAlpha: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom 25%', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      data-section="hero"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#050b12] pb-[96px] pt-[160px] text-on-media max-[991px]:pb-[80px] max-[767px]:pt-[130px]"
    >
      <img
        data-hero="bg"
        src={images.hero}
        alt="A Get Fit personal trainer coaching a member through a resistance band curl"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[62%_30%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050b12_0%,#050b12cc_34%,#050b1233_66%,#050b1200_100%)] max-[767px]:bg-[linear-gradient(#050b1299,#050b12b3)]" />
      <div className="absolute inset-x-0 -top-px bottom-0 bg-[linear-gradient(#050b12_0%,#050b1200_22%,#050b1200_62%,#050b12_100%)]" />

      <div data-hero-copy className="container-site relative z-10">
        <div className="flex max-w-[1100px] flex-col items-start gap-8">
          <div data-hero="label" className="flex items-center gap-[10px] font-display text-[22px] font-normal leading-[1.2] max-[479px]:text-lg">
            <span className="relative flex h-[10px] w-[10px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-70" />
              <span className="relative inline-flex h-[10px] w-[10px] rounded-full bg-green" />
            </span>
            {offer.eyebrow} · {site.city}
          </div>

          <h1 data-hero="title" className="h-display m-0 text-[clamp(54px,8.4vw,132px)]">
            This is your year.
            <br />
            Start it for <span className="text-green">$1.</span>
          </h1>

          <p data-hero="fade" className="m-0 max-w-[600px] text-[28px] leading-[1.27] max-[991px]:text-[26px] max-[767px]:text-2xl max-[479px]:text-[22px]">
            You set the goal. We give you the place, the plan and the people to hit it. $1 to enroll, no dues for your first 30 days.
          </p>

          <div data-hero="fade" className="mt-2 flex flex-wrap items-center gap-4">
            <Button href="#pricing" variant="join" size="lg" className="hover:!text-on-media">
              Join for $1
            </Button>
            <Button href="#trial" variant="outline" size="lg" className="!text-on-media">
              Get my free 3-day pass
            </Button>
          </div>

          <ul data-hero="fade" className="m-0 flex list-none flex-wrap gap-x-8 gap-y-2 p-0 text-base text-on-media/70">
            {offer.proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-px w-5 bg-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
