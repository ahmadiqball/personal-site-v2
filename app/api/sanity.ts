import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env'
import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: (new Date()).toISOString().slice(0, 10), // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
  
const stackQuery = 'icon{..., asset->{...,}},'

  // uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getProfileData() {
    const profile = await client.fetch(`*[_type == "profile"]{
      ..., 
      stacks[]->{
        ..., ${stackQuery}
      }}`)
    return profile[0]
}

export async function getStacksIcon() {
  const stacks = await client.fetch(`*[_type == "stacks"]{
      ..., ${stackQuery}
    }`)
  return stacks
}

export async function getProjectsData() {
  const projects = await client.fetch(`*[_type == "projects"]{
    ..., 
    stacks[]->{
      ..., ${stackQuery}
    }, 
    images[]{
      ..., 
      asset->{
        ...,
      },
    }}`)
  return projects
}

export async function getSingleProjectData(slug: string) {
  const project = await client.fetch(`*[_type == "projects" && slug.current == "${slug}"]{
    ..., 
    stacks[]->{
      ..., ${stackQuery}
    }, 
    images[]{
      ..., 
      asset->{
        ...,
      },
    }}`)
  return project[0]
}

export async function getResumeData() {
  const resume = await client.fetch(`*[_type == "resume"]{
    ..., 
    stacks[]{
      ...,
      stack[]->{..., ${stackQuery}}
    }, 
    works[]{
      ..., 
      stacks[]->{..., ${stackQuery}}
    }}`)
  return resume[0]
}