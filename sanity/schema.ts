import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import blog from './schemas/blog'
import profile from './schemas/profile'
import stacks from './schemas/stacks'
import projects from './schemas/projects'
import works from './schemas/works'
import resume from './schemas/resume'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, profile, stacks, projects, works, resume, blockContent],
}
