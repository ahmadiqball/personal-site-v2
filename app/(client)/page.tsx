import type { Metadata } from 'next';

import { HomeBanner } from '@/components/home/home-banner';
import { getProfileData } from '@/sanity/get-data';

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.ico',
  },
  title: 'Ahmad Iqbal',
};

export default async function Home(): Promise<JSX.Element> {
  const profile = await getProfileData();

  return (
    <>
      <HomeBanner profile={profile} />

      {/* ticker, selected works, writing teaser and footer land in the next step */}
    </>
  );
}
