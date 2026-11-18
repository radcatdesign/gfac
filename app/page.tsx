import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Amenities } from '@/components/sections/Amenities';
import { Classes } from '@/components/sections/Classes';
import { Premier } from '@/components/sections/Premier';
import { Training } from '@/components/sections/Training';
import { Results } from '@/components/sections/Results';
import { Pricing } from '@/components/sections/Pricing';
import { Trial } from '@/components/sections/Trial';
import { Faq } from '@/components/sections/Faq';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Amenities />
      <Classes />
      <Premier />
      <Training />
      <Results />
      <Pricing />
      <Trial />
      <Faq />
    </main>
  );
}
