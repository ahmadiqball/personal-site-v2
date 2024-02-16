import LayoutClient from '@/components/layout/layout-client';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

import './globals.css';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: 'Generated by create next app',
  title: 'Ahmad Iqbal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gradientClass
    = 'bg-[radial-gradient(circle_at_-70%,rgba(95,32,181,0.5)_0%,rgba(95,32,181,0.1)_1%,rgba(0,0,0,0)_80%)] dark:bg-[radial-gradient(circle_at_-70%,rgba(95,32,181,0.5)_0%,rgba(95,32,181,0.3)_1%,rgba(0,0,0,0)_80%)]';

  return (
    <html lang="en">
      <head></head>

      <body className={ inter.className }>
        <link href="favicon.ico" rel="icon" sizes="any" />

        <Suspense fallback={ <Loading /> }>
          <LayoutClient />

          <main className="bg-gradient-to-r bg-[#ede6f2] dark:bg-black box-border min-h-screen w-screen max-w-full overflow-hidden pt-20 pb-32 px-2.5 sm:px-10 sm:pb-48 lg:py-10 lg:pr-40 lg:pl-16">
            <div
              className={ classNames(
                'fixed top-0 left-0 w-full h-screen',
                gradientClass,
              ) }
            />

            <div className="relative z-10">{ children }</div>
          </main>
        </Suspense>
      </body>
    </html>
  );
}
