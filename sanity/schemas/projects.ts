import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 96,
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
        title: 'Types',
        type: 'string',
        options: {
            list: ['Front End', 'Back End', 'Fullstack', 'Data Analysis', 'Data Science']
        }
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
      title: 'Stacks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'stacks'}]
        }
      ]
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        name: 'image',
        type: 'image',
        options: {
          metadata: [
            'blurhash',
          ]
        }
      }]
    },
  ],
})
