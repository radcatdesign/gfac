'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { results } from '@/lib/site';
import { Tag } from '@/components/ui/Tag';

gsap.registerPlugin(ScrollTrigger);

export function Results() {
  const root = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const count = results.stories.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const state = { n: 0 };
        el.textContent = '0';
        gsap.to(state, {
          n: end,
          duration: 2,
          ease: 'power3.out',
          onUpdate: () => (el.textContent = String(Math.round(state.n))),
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="results" data-section="fit-trainer-testimonials-1" className="bg-ink py-[120px] text-fg max-[767px]:pb-[140px]">
      <div className="container-site">
        <div data-reveal className="mb-[72px] flex flex-col items-center gap-6 text-center">
          <Tag>results</Tag>
          <h2 className="h-section m-0 max-w-[900px]">Members like you put up these numbers</h2>
        </div>

        <ul className="m-0 mb-6 grid list-none grid-cols-4 gap-6 p-0 max-[991px]:grid-cols-2 max-[479px]:grid-cols-1">
          {results.stats.map((stat) => (
            <li key={stat.label} data-reveal className="flex flex-col gap-4 border-t-2 border-blue bg-elev p-8">
              <div className="h-display flex items-baseline gap-2 text-[clamp(56px,6vw,92px)]">
                <span data-count={stat.value}>{stat.value}</span>
                <span className="text-[0.36em] text-leaf">{stat.unit}</span>
              </div>
              <p className="m-0 text-lg text-mist">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div data-reveal className="relative mx-auto mt-[72px] w-full max-w-[1180px]">
          <button
            type="button"
            onClick={() => setCurrent((v) => (v === 0 ? count - 1 : v - 1))}
            aria-label="Previous story"
            className="absolute left-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-blue text-on-blue transition-transform duration-200 hover:scale-110 max-[767px]:bottom-[-80px] max-[767px]:left-[calc(50%-68px)] max-[767px]:top-auto max-[767px]:translate-y-0"
          >
            <ArrowLeft aria-hidden className="h-6 w-6" />
          </button>

          <div className="mx-auto w-[85%] max-w-[894px] overflow-hidden max-[991px]:w-4/5 max-[767px]:w-full">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {results.stories.map((story, i) => (
                <div key={story.name} className="w-full shrink-0" aria-hidden={i !== current}>
                  <div className="flex h-full flex-col items-center justify-center gap-6 bg-elev p-16 text-center max-[479px]:p-10">
                    <div className="h-display text-[clamp(40px,5vw,72px)] text-leaf">{story.headline}</div>
                    <p className="m-0 max-w-[620px] text-[28px] font-normal leading-[1.5] max-[479px]:text-xl">{story.body}</p>
                    <div className="mt-2 text-xl font-medium">{story.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCurrent((v) => (v === count - 1 ? 0 : v + 1))}
            aria-label="Next story"
            className="absolute right-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-blue text-on-blue transition-transform duration-200 hover:scale-110 max-[767px]:bottom-[-80px] max-[767px]:right-[calc(50%-68px)] max-[767px]:top-auto max-[767px]:translate-y-0"
          >
            <ArrowRight aria-hidden className="h-6 w-6" />
          </button>
        </div>

        <p className="m-0 mt-10 text-center text-sm text-mist max-[767px]:mt-[110px]">{results.disclaimer}</p>
      </div>
    </section>
  );
}
