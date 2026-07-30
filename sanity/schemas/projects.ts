import { defineField, defineType } from 'sanity';

export default defineType({
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      options: {
        maxLength: 96,
        source: 'projectName',
      },
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'One-line summary used on cards and the homepage archive rows.',
      type: 'string',
    }),
    defineField({
      name: 'prominence',
      title: 'Prominence',
      description: 'Bento size on the Work archive. Leave empty to auto-size by position.',
      type: 'string',
      options: {
        list: [
          { title: 'Extra large', value: 'xl' },
          { title: 'Large', value: 'l' },
          { title: 'Tall', value: 'tall' },
          { title: 'Wide', value: 'wide' },
          { title: 'Medium', value: 'md' },
          { title: 'Small', value: 'sm' },
        ],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'type',
      options: {
        list: ['Front End', 'Back End', 'Fullstack', 'Data Analysis', 'Data Science', 'Data Structure', 'Algorithm'],
      },
      title: 'Types',
      type: 'string',
    }),
    defineField({
      name: 'webUrl',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repositories URL',
      type: 'url',
    }),
    defineField({
      name: 'docUrl',
      title: 'Document URL',
      type: 'url',
    }),
    defineField({
      name: 'stacks',
      of: [
        {
          to: [{ type: 'stacks' }],
          type: 'reference',
        },
      ],
      title: 'Stacks',
      type: 'array',
    }),
    defineField({
      name: 'features',
      of: [{ type: 'string' }],
      title: 'Features',
      type: 'array',
    }),
    defineField({
      name: 'description',
      of: [
        {
          lists: [],
          styles: [{ title: 'Normal', value: 'normal' }],
          type: 'block',
        },
      ],
      title: 'Description',
      type: 'array',
    }),
    {
      name: 'images',
      of: [{
        name: 'image',
        options: {
          metadata: [
            'blurhash',
          ],
        },
        type: 'image',
      }],
      title: 'Images',
      type: 'array',
    },
  ],
  name: 'projects',
  title: 'Projects',
  type: 'document',
});
