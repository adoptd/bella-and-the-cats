import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bella & The Cats | Apparel for Pet People',
  description: 'Premium apparel for people who love animals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
