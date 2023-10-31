import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stacks',
  title: 'Stacks',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        metadata: [
          'palette',
        ]
      }
    }),
  ],
})
