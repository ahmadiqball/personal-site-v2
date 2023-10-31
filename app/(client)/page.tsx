import Banner from '@/components/home/Banner'
import RecentBlog from '@/components/home/RecentBlog'
import RecentProject from '@/components/home/RecentProject'
import Skills from '@/components/home/Skills'
import { Metadata } from 'next';
import { getProfileData, getProjectsData, getResumeData } from '../api/sanity';

export const metadata: Metadata = {
  title: 'Ahmad Iqbal | Home',
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
