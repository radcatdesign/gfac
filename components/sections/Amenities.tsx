import { Clock, Film, Sun, Target, Trophy, Users } from 'lucide-react';
import { amenities } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Tag } from '@/components/ui/Tag';

const icons = { film: Film, trophy: Trophy, target: Target, users: Users, sun: Sun, clock: Clock };

export function Amenities() {
  return (
    <section id="amenities" data-section="fit-trainer-services-1" className="bg-ink py-[120px] text-fg max-[479px]:py-[100px]">
      <div className="container-site">
        <div data-reveal className="mb-[72px] flex flex-col items-center gap-6 text-center">
          <Tag>the club</Tag>
          <h2 className="h-section m-0 max-w-[900px]">More than a room full of machines</h2>
          <p className="m-0 max-w-[620px] text-mist">
            Courts, classes, a movie theatre full of cardio equipment. Plenty of ways to move, so you keep coming back.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[991px]:mx-auto max-[991px]:max-w-[560px] max-[991px]:grid-cols-1">
          {amenities.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                data-reveal
                className="group relative flex flex-col items-start gap-[52px] overflow-hidden bg-elev p-12 transition-transform duration-[400ms] ease-out hover:-translate-y-1 max-[479px]:p-8"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue to-green transition-transform duration-500 group-hover:scale-x-100" />
                <Icon aria-hidden className="h-16 w-16 text-blue transition-colors duration-500 group-hover:text-leaf" strokeWidth={1.25} />
                <div className="flex flex-col items-start gap-6">
                  <h3 className="h-card m-0">{item.title}</h3>
                  <p className="m-0 text-mist">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div data-reveal className="mt-16 flex flex-col items-center">
          <Button href="#trial" variant="trial">
            Try it free for 3 days
          </Button>
        </div>
      </div>
    </section>
  );
}
