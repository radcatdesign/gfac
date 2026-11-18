import { Check } from 'lucide-react';
import { premierPerks } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

function Perk({ title, body }: { title: string; body: string }) {
  return (
    <div data-reveal className="flex flex-col items-center gap-10 bg-elev px-8 py-[50px] shadow-[0_2px_30px_#1d34330d]">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue">
        <Check aria-hidden className="h-9 w-9 text-on-blue" strokeWidth={3} />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="h-card m-0">{title}</h3>
        <p className="m-0 text-base leading-[1.4] text-mist">{body}</p>
      </div>
    </div>
  );
}

export function Premier() {
  const left = premierPerks.filter((_, i) => i % 2 === 0);
  const right = premierPerks.filter((_, i) => i % 2 === 1);

  return (
    <section id="premier" data-section="fit-trainer-tiles-1" className="bg-ink py-[120px] text-fg max-[479px]:py-[100px]">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-x-16 max-[991px]:grid-cols-1 max-[991px]:gap-y-16">
          <div className="relative">
            <div className="sticky top-[120px]">
              <div data-reveal className="flex max-w-[530px] flex-col items-start gap-6 max-[991px]:mx-auto max-[991px]:max-w-[590px] max-[991px]:items-center max-[991px]:text-center">
                <Tag>premier membership</Tag>
                <h2 className="h-section m-0">
                  Give your goal every advantage for <span className="text-leaf">$34.95</span> a month
                </h2>
                <p className="m-0 text-mist">
                  Premier takes away the reasons to skip. Train at any hour Monday to Thursday, take every class, and bring a friend to keep
                  you honest. Right now it is $1 to enroll, with no dues for your first 30 days.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4 max-[991px]:justify-center">
                  <Button href="#pricing" variant="join">
                    Start Premier for $1
                  </Button>
                  <Button href="#pricing" variant="outline">
                    Compare plans
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[479px]:grid-cols-1">
            <div className="flex flex-col gap-6">
              {left.map((perk) => (
                <Perk key={perk.title} {...perk} />
              ))}
            </div>
            <div className="flex flex-col gap-6 pt-20 max-[479px]:pt-0">
              {right.map((perk) => (
                <Perk key={perk.title} {...perk} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
