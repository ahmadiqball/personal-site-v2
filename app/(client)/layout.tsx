import type { Metadata } from 'next';

import { LayoutNav } from '@/components/layout/layout-nav';

import { fontVariables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  description: 'Frontend engineer in Bandung, Indonesia — builder of small worlds.',
  title: 'Ahmad Iqbal',
  icons: { icon: 'favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${fontVariables} bg-ink-night text-vellum font-sans antialiased` }>
        <LayoutNav />

        {/* clip (not hidden) so stray horizontal overflow can't scroll the page,
            without creating a scroll container that would break the sticky nav */}
        <main className="relative z-10 min-h-screen overflow-x-clip">{ children }</main>
      </body>
    </html>
  );
}
