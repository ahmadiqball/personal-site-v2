import Banner from '@/components/home/banner'
import RecentBlog from '@/components/home/recent-blog'
import RecentProject from '@/components/home/recent-project'
import Skills from '@/components/home/skills'
import { Metadata } from 'next';
import { getProfileData, getProjectsData, getResumeData } from '../api/sanity';

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Home',
  icons: {
    icon: 'favicon.ico',
  },
};

export default async function Home() {
  const profile = await getProfileData();
  const projects = await getProjectsData();
  const resume = await getResumeData()

  return (
    <div className='pb-14'>
      <Banner profile={profile} resume={resume}/>
      <Skills skills={profile.stacks}/>
      <RecentProject projects={projects}/>
      <RecentBlog />
    </div>
  )
}
