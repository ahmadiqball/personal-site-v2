import type { SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import blog from './schemas/blog';
import profile from './schemas/profile';
import projects from './schemas/projects';
import resume from './schemas/resume';
import stacks from './schemas/stacks';
import works from './schemas/works';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, profile, stacks, projects, works, resume, blockContent],
};
