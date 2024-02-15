import { dataset, projectId } from '@/sanity/env';
import SanityClient from 'next-sanity-client';

export const client = new SanityClient({
  apiVersion: (new Date()).toISOString().slice(0, 10),
  dataset,
  projectId,
  token: process.env.SANITY_SECRET_TOKEN,
  useCdn: false,
});

const stackQuery = 'icon{..., asset->{...,}},';

export async function getProfileData(): Promise<any> {
  const profile: any = await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['profile'],
      },
    },
    query: `*[_type == "profile"]{
        ..., 
        stacks[]->{
          ..., ${stackQuery}
        },
        featuredPortfolio[]->{
          projectName,
          description,
          slug,
          webUrl,
          repoUrl,
          "images": [images[0]{
            asset->{
              ...,
            }
          }],
          _id
        }
      }`,
  });
  return profile[0];
}

export async function getStacksIcon(): Promise<any> {
  return await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['stacks'],
      },
    },
    query: `*[_type == "stacks"]{
      ..., ${stackQuery}
    }`,
  });
}

export async function getProjectsData(): Promise<any> {
  const projects: any[] = await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['projects'],
      },
    },
    query: `*[_type == "projects"]{
      ..., 
      stacks[]->{
        ..., ${stackQuery}
      }, 
      images[]{
        ..., 
        asset->{
          ...,
        },
      }}`,
  });
  return projects;
}

export async function getSingleProjectData(slug: string): Promise<any> {
  const project: any = await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['projects'],
      },
    },
    query: `*[_type == "projects" && slug.current == "${slug}"]{
      ..., 
      stacks[]->{
        ..., ${stackQuery}
      }, 
      images[]{
        ..., 
        asset->{
          ...,
        },
      }}`,
  });
  return project[0];
}

export async function getResumeData(): Promise<any> {
  const resume: any = await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['resume'],
      },
    },
    query: `*[_type == "resume"]{
      ..., 
      stacks[]{
        ...,
        stack[]->{..., ${stackQuery}}
      }, 
      works[]{
        ..., 
        stacks[]->{..., ${stackQuery}}
      }}`,
  });
  return resume[0];
}

export async function getBlogPostData(slug: string): Promise<any> {
  const blogPost: any = await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['blog'],
      },
    },
    query: `*[_type == "blog" && slug.current == "${slug}"][0]{
      ...,
      mainImage{
        ...,
        asset->{
          ...,
        }
      },
      body[]{
        ...,
        _type == 'image' => {
          ...,
          asset->{
            ...
          }
        }
      },
      "char": length(pt::text(body))
    }`,
  });

  return blogPost;
}

export async function getBlogDataList() {
  const blogPostList: any = await client.fetch({
    config: {
      cache: 'force-cache',
      next: {
        tags: ['blog'],
      },
    },
    query: `*[_type == "blog"]{
      mainImage{
        ...,
        asset->{
          ...,
        }
      },
      _id,
      slug,
      publishedAt,
      title,
      type,
      "char": length(pt::text(body))
      }`,
  });
  return blogPostList;
}
