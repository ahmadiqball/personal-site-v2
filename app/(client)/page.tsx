import type { Metadata } from 'next';

import { HomeBanner } from '@/components/home/home-banner';
import { HomeFooter } from '@/components/home/home-footer';
import { HomeSelectedWorks } from '@/components/home/home-selected-works';
import { HomeTicker } from '@/components/home/home-ticker';
import { HomeWritingTeaser } from '@/components/home/home-writing-teaser';
import { getBlogDataList, getProfileData } from '@/sanity/get-data';

export const metadata: Metadata = {
  icons: {
    icon: 'favicon.ico',
  },
  title: 'Ahmad Iqbal',
};

export default async function Home(): Promise<JSX.Element> {
  const profile = await getProfileData();
  const blog = await getBlogDataList();

  const stackNames: Array<string> = profile?.stacks?.map((s: any) => s?.name).filter(Boolean) ?? [];

  return (
    <>
      <HomeBanner profile={profile} />

      <HomeTicker stacks={stackNames} />

      <HomeSelectedWorks projects={profile?.featuredPortfolio} />

      <HomeWritingTeaser posts={blog} />

      <HomeFooter />
    </>
  );
}
