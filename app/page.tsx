import Banner from '@/components/home/Banner'
import RecentBlog from '@/components/home/RecentBlog'
import RecentProject from '@/components/home/RecentProject'
import Skills from '@/components/home/Skills'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Home',
};

export default function Home() {
  return (
    <div className='pb-14'>
      <Banner />
      <Skills />
      <RecentProject />
      <RecentBlog />
    </div>
  )
}
