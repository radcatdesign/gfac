'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

/** Light is the default look. The visitor's choice is remembered on their device. */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    // Keep every toggle on the page (desktop bar, mobile bar) in step.
    const sync = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    window.addEventListener('gf-theme', sync);
    return () => window.removeEventListener('gf-theme', sync);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-switching');
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove('theme-switching'), 500);
    try {
      localStorage.setItem('gf-theme', next);
    } catch {
      /* private browsing: the choice just lasts for this visit */
    }
    window.dispatchEvent(new Event('gf-theme'));
  };

  const Icon = theme === 'dark' ? Sun : Moon;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex h-12 w-12 items-center justify-center rounded-full text-inherit transition-colors duration-300 hover:bg-blue/20 ${className}`}
    >
      <Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
    </button>
  );
}
