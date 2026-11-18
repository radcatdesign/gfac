'use client';

import { useState, type FormEvent } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { images, links, site } from '@/lib/site';

// Set NEXT_PUBLIC_TRIAL_FORM_ENDPOINT to a form handler (CRM webhook, Formspree, etc.).
// Until it is set, submitting sends the visitor to the club's existing trial pass page
// (without putting their details in the URL), so a lead is never dropped silently
// and the form never claims a pass was requested when nothing was sent.
const ENDPOINT = process.env.NEXT_PUBLIC_TRIAL_FORM_ENDPOINT;

type State = 'idle' | 'sending' | 'success' | 'error';

const field =
  'h-[58px] w-full border border-line bg-ink px-5 text-lg text-white placeholder:text-mist/70 transition-colors focus:border-green focus:outline-none';

export function Trial() {
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) {
      window.location.assign(links.trialPage);
      return;
    }
    setState('sending');
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  }

  return (
    <section id="trial" data-section="fit-trainer-contact-1" className="bg-navy py-[120px] text-white">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 max-[991px]:grid-cols-1 max-[991px]:gap-y-14 max-[479px]:gap-y-10">
          <div data-reveal className="relative min-h-[520px] w-full max-w-[590px] overflow-hidden bg-elev max-[991px]:mx-auto max-[991px]:min-h-0 max-[991px]:max-w-[500px] max-[991px]:aspect-[4/5]">
            <img
              data-parallax="8"
              src={images.club}
              alt="Inside Get Fit Athletic Club in Indianapolis"
              loading="lazy"
              className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(#0a243900_45%,#0a2439cc)]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="h-display text-[clamp(44px,5vw,76px)]">
                3 days.
                <br />
                <span className="text-green">On us.</span>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[606px] py-[52px] max-[991px]:py-0">
            <div data-reveal className="flex flex-col items-start gap-10 bg-elev p-[64px_56px] max-[479px]:p-[44px_28px]">
              <div className="flex flex-col items-start gap-6">
                <h2 className="h-section m-0 text-[40px] max-[479px]:text-[34px]">Get your free 3-day pass</h2>
                <p className="m-0 text-mist">
                  Full access for three days. Take a class, hit the courts, meet a coach. See if Get Fit feels like your gym.
                </p>
              </div>

              {state === 'success' ? (
                <div role="status" className="w-full border border-green bg-green/10 p-8">
                  <div className="h-card mb-3 text-green">You are in.</div>
                  <p className="m-0 text-lg">Thanks. We will be in touch shortly with your pass. Questions before then? Call {site.phone}.</p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className={`flex w-full flex-col gap-4 transition-opacity ${state === 'sending' ? 'opacity-60' : ''}`}
                >
                  <div className="grid grid-cols-2 gap-4 max-[479px]:grid-cols-1">
                    <label className="sr-only" htmlFor="trial-first">First name</label>
                    <input id="trial-first" name="firstName" autoComplete="given-name" required placeholder="First name" className={field} />
                    <label className="sr-only" htmlFor="trial-last">Last name</label>
                    <input id="trial-last" name="lastName" autoComplete="family-name" required placeholder="Last name" className={field} />
                  </div>
                  <label className="sr-only" htmlFor="trial-phone">Phone</label>
                  <input id="trial-phone" name="phone" type="tel" autoComplete="tel" required placeholder="Phone" className={field} />
                  <label className="sr-only" htmlFor="trial-email">Email</label>
                  <input id="trial-email" name="email" type="email" autoComplete="email" required placeholder="Email" className={field} />

                  <label className="flex items-start gap-3 text-sm leading-[1.45] text-mist">
                    <input type="checkbox" name="smsConsent" value="yes" required className="mt-[3px] h-4 w-4 shrink-0 accent-[#68c500]" />
                    <span>
                      I agree to receive text messages from Get Fit Athletic Club. Message and data rates may apply. Message frequency
                      varies. Text STOP to opt out, HELP for help.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="mt-2 inline-flex h-[60px] w-full items-center justify-center border border-green bg-green text-xl font-medium text-ink transition-colors duration-[400ms] hover:bg-green/15 hover:text-white disabled:cursor-wait"
                  >
                    {state === 'sending' ? 'Sending…' : 'Get my free pass'}
                  </button>
                  {state === 'error' ? (
                    <p role="alert" className="m-0 text-base text-[#ff8f8f]">
                      That did not go through. Try again, or call {site.phone}.
                    </p>
                  ) : null}
                </form>
              )}

              <div className="h-px w-full bg-line" />

              <div className="flex flex-col items-start gap-5">
                <a href={site.phoneHref} className="flex items-center gap-3 text-white no-underline hover:text-green">
                  <Phone aria-hidden className="h-7 w-7" strokeWidth={1.5} />
                  {site.phone}
                </a>
                <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white no-underline hover:text-green">
                  <MapPin aria-hidden className="h-7 w-7 shrink-0" strokeWidth={1.5} />
                  <span>
                    {site.address.street}, {site.address.cityLine}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
