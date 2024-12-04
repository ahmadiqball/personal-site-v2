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
