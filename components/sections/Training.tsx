import { Check } from 'lucide-react';
import { links, training } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

export function Training() {
  return (
    <section id="training" data-section="fit-trainer-pricing-1" className="relative overflow-hidden bg-navy py-[120px] text-white max-[479px]:py-[100px]">
      <div aria-hidden className="pointer-events-none absolute -right-[10%] top-[-20%] h-[70%] w-[55%] rounded-full bg-blue/20 blur-[140px]" />
      <div className="container-site relative">
        <div data-reveal className="mb-[72px] flex flex-col items-center gap-6 text-center">
          <Tag>personal training</Tag>
          <h2 className="h-section m-0 max-w-[900px]">Real people getting real results</h2>
          <p className="m-0 max-w-[640px] text-mist">
            Our training program is what Get Fit is known for. Start with a free session, or go straight to the six-session
            Kickstarter.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1040px] grid-cols-2 gap-4 max-[991px]:max-w-[520px] max-[991px]:grid-cols-1 max-[991px]:gap-10">
          {training.programs.map((program) => (
            <div
              key={program.title}
              data-reveal
              className={`flex flex-col gap-10 bg-ink p-10 max-[479px]:px-8 ${program.featured ? 'outline outline-1 outline-green shadow-[0_10px_80px_#68c50026]' : ''}`}
            >
              <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-3">
                    <Tag solid>{program.tag}</Tag>
                    {program.strike ? <span className="text-base text-mist line-through">{program.strike}</span> : null}
                    {program.featured ? <span className="text-sm uppercase tracking-[0.16em] text-green">Most popular</span> : null}
                  </div>
                  <h3 className="h-card m-0 text-[32px]">{program.title}</h3>
                </div>
                <p className="m-0 text-lg">{program.body}</p>
              </div>
              <div className="h-px w-full bg-line" />
              <ul className="m-0 flex list-none flex-col items-start gap-4 p-0">
                {program.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-left text-lg leading-[1.4]">
                    <Check aria-hidden className="h-6 w-6 shrink-0 text-green" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button href={links.ptSignup} variant={program.featured ? 'join' : 'trial'} className="mt-auto w-full">
                {program.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p data-reveal className="m-0 mb-10 text-center font-display text-[22px] uppercase tracking-[0.08em]">
            Meet your trainers
          </p>
          <ul className="m-0 grid list-none grid-cols-5 gap-6 p-0 max-[767px]:grid-cols-3 max-[479px]:grid-cols-2">
            {training.trainers.map((trainer) => (
              <li key={trainer.name} data-reveal className="group flex flex-col items-center gap-4 text-center">
                <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full bg-elev">
                  <img
                    src={trainer.img}
                    alt={`${trainer.name}, personal trainer at Get Fit`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <div className="font-display text-2xl uppercase">{trainer.name}</div>
                  <div className="text-sm text-mist">Personal trainer</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
