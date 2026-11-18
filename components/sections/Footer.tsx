import { MapPin, Phone } from 'lucide-react';
import { footerLinks, site } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/sections/Navbar';

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.7V21h2.8z" />
    </svg>
  );
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer data-section="fit-trainer-footer-1" className="bg-elev pb-16 pt-[120px] text-white max-[991px]:pb-[130px]">
      <div className="container-site">
        <div data-reveal className="mb-20 flex items-end justify-between gap-10 border-b border-line pb-20 max-[767px]:flex-col max-[767px]:items-start">
          <div className="h-display text-[clamp(48px,7.5vw,120px)]">
            Where you
            <br />
            <span className="text-green">belong.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="#pricing" variant="join" size="lg">
              Join for $1
            </Button>
            <Button href="#trial" variant="outline" size="lg">
              Free 3-day pass
            </Button>
          </div>
        </div>

        <div className="flex items-start justify-between max-[991px]:gap-10 max-[767px]:flex-col max-[767px]:gap-16">
          <div className="flex flex-col items-start gap-10">
            <Logo />
            <div className="flex flex-col items-start gap-5">
              <a href={site.phoneHref} className="flex items-center gap-2 text-base text-white no-underline hover:text-green">
                <Phone aria-hidden className="h-6 w-6" strokeWidth={1.5} />
                {site.phone}
              </a>
              <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-base text-white no-underline hover:text-green">
                <MapPin aria-hidden className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.cityLine}
                </span>
              </a>
            </div>
            <div className="h-px w-full bg-white/30" />
            <div className="flex items-center gap-4">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Get Fit on Facebook" className="text-white transition-colors hover:text-green">
                <Facebook />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Get Fit on Instagram" className="text-white transition-colors hover:text-green">
                <Instagram />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex max-w-[640px] flex-1 items-start justify-between gap-8 max-[991px]:gap-6 max-[767px]:w-full max-[767px]:flex-wrap max-[767px]:gap-12">
            {footerLinks.map((group) => (
              <div key={group.heading} className="flex flex-col items-start gap-6">
                <div className="text-base text-mist">{group.heading}</div>
                <div className="flex flex-col items-start gap-6">
                  {group.items.map((item) => (
                    <a key={item.label} href={item.href} className="text-base leading-[22px] text-white no-underline hover:text-green">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="mb-16 mt-20 h-px w-full bg-white/30" />

        <div className="flex items-center justify-between text-base text-mist max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-4">
          <div>© {new Date().getFullYear()} {site.name}. Open every day.</div>
          <div>Never spam. Always fitness.</div>
        </div>
      </div>
    </footer>
  );
}
