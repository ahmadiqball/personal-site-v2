import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Types',
      type: 'string',
      options: {
          list: ['Full-time', 'Part-time', 'Intern', 'Contract']
      }
  }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
    name: 'location',
    title: 'Location',
    type: 'string'
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
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'stacks',
        title: 'Stacks',
        type: 'array',
        of: [
          {
            name: 'stack',
            type: 'reference',
            to: [{type: 'stacks'}]
          }
        ]
      }),
  ],
})
