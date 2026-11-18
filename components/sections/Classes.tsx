'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { classes, links } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

gsap.registerPlugin(ScrollTrigger);

/**
 * Desktop: the section pins and the class cards travel sideways as you scroll.
 * Tablet and phone: a plain swipeable row.
 */
export function Classes() {
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
      const t = track.current;
      const p = pin.current;
      if (!t || !p) return;
      const distance = () => Math.max(0, t.scrollWidth - window.innerWidth);

      const slide = gsap.to(t, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: p,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
        },
      });

      gsap.utils.toArray<HTMLElement>('[data-class-img]', t).forEach((img) => {
        gsap.fromTo(
          img,
          { xPercent: -9 },
          {
            xPercent: 9,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              containerAnimation: slide,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="classes" data-section="classes-scroll" className="bg-ink text-fg">
      <div ref={pin} className="flex flex-col justify-center gap-12 overflow-hidden py-[100px] min-[992px]:h-screen min-[992px]:py-0">
        <div className="container-site">
          <div data-reveal className="flex items-end justify-between gap-10 max-[767px]:flex-col max-[767px]:items-start">
            <div className="flex flex-col items-start gap-6">
              <Tag>group fitness</Tag>
              <h2 className="h-section m-0">Resolutions stick better in a full room</h2>
            </div>
            <div className="flex max-w-[440px] flex-col items-start gap-5">
              <p className="m-0 text-mist">It is easier to show up when someone will notice you are missing. Every class is unlimited with Premier.</p>
              <Button href={links.schedule} variant="outline">
                See the class schedule
              </Button>
            </div>
          </div>
        </div>

        <div className="no-scrollbar max-[991px]:snap-x max-[991px]:snap-mandatory max-[991px]:overflow-x-auto">
          <div
            ref={track}
            className="flex w-max gap-6 px-6 will-change-transform min-[992px]:pl-[max(24px,calc((100vw-1400px)/2+24px))] min-[992px]:pr-[12vw] max-[479px]:px-4"
          >
            {classes.map((item, i) => (
              <article
                key={item.name}
                className="group relative h-[min(54vh,540px)] min-h-[380px] w-[min(78vw,420px)] shrink-0 snap-start overflow-hidden bg-elev text-on-media"
              >
                <img
                  data-class-img
                  src={item.img}
                  alt={`${item.name} class at Get Fit Athletic Club`}
                  loading="lazy"
                  className="absolute inset-y-0 -left-[12%] h-full w-[124%] max-w-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(#050b1200_30%,#050b12e6_86%)]" />
                <div className="absolute left-6 top-6 font-display text-sm tracking-[0.2em] text-on-media/80">
                  {String(i + 1).padStart(2, '0')} / {String(classes.length).padStart(2, '0')}
                </div>
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-8">
                  <h3 className="h-card m-0 text-[30px]">{item.name}</h3>
                  <p className="m-0 text-lg text-on-media/85">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container-site max-[991px]:hidden">
          <div className="h-px w-full bg-line">
            <div ref={bar} className="h-px origin-left scale-x-0 bg-green" />
          </div>
        </div>
      </div>
    </section>
  );
}
