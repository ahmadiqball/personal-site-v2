import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import {createClient} from '@sanity/client'
import SanityClient from 'next-sanity-client'

export const client = new SanityClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: (new Date()).toISOString().slice(0, 10), // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
  
const stackQuery = 'icon{..., asset->{...,}},'

  // uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getProfileData() {
    const profile: any = await client.fetch({
      query: `*[_type == "profile"]{
        ..., 
        stacks[]->{
          ..., ${stackQuery}
        }}`,
      config: {
        cache: 'no-store',
      }
    })
    return profile[0]
}

export async function getStacksIcon() {
  const stacks = await client.fetch({
    query: `*[_type == "stacks"]{
      ..., ${stackQuery}
    }`,
    config: {
      cache: 'no-store',
    }
  })
  return stacks
}

export async function getProjectsData() {
  const projects = await client.fetch({
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
    config: {
      cache: 'no-store',
    }
  })
  return projects
}

export async function getSingleProjectData(slug: string) {
  const project: any = await client.fetch({
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
    config: {
      cache: 'no-store',
    }
  })
  return project[0]
}

export async function getResumeData() {
  const resume: any = await client.fetch({
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
    config: {
      cache: 'no-store',
    }
  })
  return resume[0]
}