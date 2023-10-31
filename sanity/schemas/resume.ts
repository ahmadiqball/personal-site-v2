import {defineField, defineType} from 'sanity'
import stacks from './stacks'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Fullname',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works Experience',
      type: 'array',
      of: [{type: 'works'}]
    }),
    defineField({
      name: 'volunteer',
      title: 'Voluntary Experience',
      type: 'array',
      of: [{type: 'works'}]
    }),
    defineField({
      name: 'educations',
      title: 'Educations',
      type: 'array',
      of: [{
        name: 'education',
        type: 'object',
        fields: [
          {type: 'string', name: 'title', title: 'Title'},
          {name: 'major', title: 'Major', type: 'string'},
          {name: 'school', title: 'School Name', type: 'string' },
          {name: 'location', title: 'Location', type: 'string' },
          {name: 'startDate', title: 'Start Date', type: 'date'},
          {name: 'endDate', title: 'End Date', type: 'date'},
          {name: 'description', title: 'Description', type: 'array', of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: [],}]}
        ]
      }
      ]
    }),
    defineField({
      name: 'stacks',
      title: 'Stacks',
      type: 'array',
      of: [
      {
        name: 'category',
        title: 'Categories',
        type: 'object',
        fields: [
          {name: 'category', title: 'Category', type: 'string'},
          {name: 'stack', title: 'Stack', type: 'array', of: [{
            name: 'stack',
            type: 'reference',
            to: [{type: 'stacks'}]
          }]}
        ]
      },
    ]
    }),
  ],
})
