import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'titles',
      title: 'Titles',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    {
      name: 'stacks',
      title: 'Stacks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'stacks'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
