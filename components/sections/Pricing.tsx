'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { plans, pricingFinePrint, site } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

type Term = 'monthly' | 'prepaid';

export function Pricing() {
  const [term, setTerm] = useState<Term>('monthly');

  return (
    <section id="pricing" data-section="fit-trainer-pricing-1" className="bg-ink py-[120px] text-fg">
      <div className="container-site">
        <div data-reveal className="mb-12 flex flex-col items-center gap-6 text-center">
          <Tag>pricing</Tag>
          <h2 className="h-section m-0">Pick your plan. Start today.</h2>
          <p className="m-0 max-w-[560px] text-mist">You stay month to month, with no contract. Or prepay a year and get six months free.</p>
        </div>

        <div data-reveal className="mb-12 flex justify-center">
          <div role="tablist" aria-label="Billing" className="relative grid grid-cols-2 border border-line bg-elev p-1">
            <span
              aria-hidden
              className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-blue transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                term === 'prepaid' ? 'translate-x-full' : ''
              }`}
            />
            {(['monthly', 'prepaid'] as const).map((value) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={term === value}
                onClick={() => setTerm(value)}
                className={`relative z-10 h-12 px-7 text-lg font-medium transition-colors duration-300 max-[479px]:px-4 max-[479px]:text-base ${term === value ? 'text-on-blue' : 'text-fg'}`}
              >
                {value === 'monthly' ? 'Monthly' : '18 months, 6 free'}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1040px] grid-cols-2 items-start gap-4 max-[991px]:max-w-[520px] max-[991px]:grid-cols-1 max-[991px]:gap-10">
          {plans.map((plan) => {
            const price = plan[term];
            return (
              <div
                key={plan.id}
                data-reveal
                className={`relative flex flex-col gap-10 p-10 max-[479px]:px-8 ${
                  plan.featured ? 'bg-navy outline outline-1 outline-green shadow-[0_10px_90px_#68c50029]' : 'bg-elev'
                }`}
              >
                <div className="flex flex-col items-start gap-8">
                  <div className="flex w-full flex-col items-start gap-6">
                    <div className="flex w-full items-center justify-between gap-4">
                      <h3 className="h-card m-0 text-[32px]">{plan.name}</h3>
                      {plan.badge ? (
                        <span className="bg-green px-3 py-1 text-sm font-bold uppercase tracking-[0.08em] text-on-green">{plan.badge}</span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span key={price.price} className="h-display animate-[priceIn_0.5s_cubic-bezier(0.22,1,0.36,1)] text-[72px] max-[479px]:text-[56px]">
                        {price.price}
                      </span>
                      <span className="text-lg text-mist">{price.per}</span>
                    </div>
                    <div className={`text-lg ${plan.featured ? 'text-leaf' : 'text-mist'}`}>{price.note}</div>
                  </div>
                  <p className="m-0 text-lg">{plan.blurb}</p>
                </div>

                <div className="h-px w-full bg-line" />

                <ul className="m-0 flex list-none flex-col items-start gap-4 p-0">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-left text-lg leading-[1.4]">
                      <Check aria-hidden className="mt-[2px] h-6 w-6 shrink-0 text-leaf" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href={price.href} variant={plan.featured ? 'join' : 'outline'} className="w-full">
                  {term === 'monthly' ? plan.cta : `Start my ${plan.name} for ${price.price}`}
                </Button>
              </div>
            );
          })}
        </div>

        <div data-reveal className="mx-auto mt-12 flex max-w-[820px] flex-col items-center gap-4 text-center">
          <p className="m-0 text-sm leading-[1.5] text-mist">{pricingFinePrint}</p>
          <p className="m-0 text-base">
            Rather talk it through? Call{' '}
            <a href={site.phoneHref} className="text-leaf underline-offset-4 hover:underline">
              {site.phone}
            </a>{' '}
            and ask about in-club promotions.
          </p>
        </div>
      </div>
    </section>
  );
}
