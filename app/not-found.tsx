import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] items-center bg-ink pt-[160px] pb-[120px] text-white">
      <div className="container-site flex flex-col items-start gap-8">
        <h1 className="h-display m-0 text-[clamp(54px,8vw,120px)]">
          Wrong turn.
          <br />
          <span className="text-green">Right gym.</span>
        </h1>
        <p className="m-0 max-w-[520px] text-mist">That page is not here. The club still is.</p>
        <Button href="/" variant="join" size="lg">
          Back to the club
        </Button>
      </div>
    </main>
  );
}
