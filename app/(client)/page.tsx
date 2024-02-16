import type { Metadata } from 'next';

import { Banner } from '@/components/home/banner';
import { RecentBlog } from '@/components/home/recent-blog';
import { RecentProject } from '@/components/home/recent-project';
import { Skills } from '@/components/home/skills';
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

  return (
    <div className="pb-6 px-2">
      <Banner profile={ profile } />

      <Skills skills={ profile.stacks } />

      <RecentProject projects={ profile.featuredPortfolio } />

      <RecentBlog data={ blog } />
    </div>
  );
}
