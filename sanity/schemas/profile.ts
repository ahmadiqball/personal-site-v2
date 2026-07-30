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
      name: 'headline',
      title: 'Hero Headline',
      description: 'Cinzel display line on the homepage hero, e.g. "Builder of small worlds".',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      description: 'Availability line next to the breathing dot, e.g. "open to work · q3 2026".',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      description: 'Self-portrait shown in the hero celestial instrument.',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash'],
      },
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'email', title: 'Email (mailto: or address)', type: 'string' },
      ],
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
    },
    {
      name: 'featuredPortfolio',
      title: 'Featured Portfolio',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projects' }]
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
