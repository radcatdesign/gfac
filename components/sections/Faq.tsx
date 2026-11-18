'use client';

import { useState } from 'react';
import { faqs, site } from '@/lib/site';
import { Button } from '@/components/ui/Button';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" data-section="fit-trainer-faq-1" className="bg-ink py-[120px] text-fg">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-x-20 gap-y-20 max-[767px]:grid-cols-1">
          <div data-reveal className="flex max-w-[420px] flex-col items-start gap-6 max-[767px]:max-w-none max-[767px]:items-center max-[767px]:text-center">
            <h2 className="h-section m-0">Before you start</h2>
            <p className="m-0 text-mist">The fees, the fine print and how the trial works. Nothing standing between you and day one.</p>
            <div className="mt-4 flex items-center">
              <Button href={site.phoneHref} variant="outline">
                Call {site.phone}
              </Button>
            </div>
          </div>

          <div data-reveal className="flex w-full flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="bg-elev">
                  <h3 className="m-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between px-10 py-8 text-left max-[479px]:px-6 max-[479px]:py-6"
                    >
                      <span className="mr-6 text-lg font-medium leading-[1.2] max-[767px]:text-[22px] max-[767px]:leading-7 max-[479px]:text-lg max-[479px]:leading-[22px]">
                        {faq.q}
                      </span>
                      <span className="relative flex h-10 w-10 flex-none items-center justify-center">
                        <span className={`h-0.5 w-[18px] rounded-sm transition-colors duration-300 ${isOpen ? 'bg-green' : 'bg-fg'}`} />
                        <span
                          className={`absolute h-0.5 w-[18px] rounded-sm transition-all duration-300 ${isOpen ? 'rotate-0 bg-green' : '-rotate-90 bg-fg'}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="m-0 w-[90%] px-10 pb-8 text-base leading-[1.4] text-mist max-[479px]:px-6 max-[479px]:pb-6">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
