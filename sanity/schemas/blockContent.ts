import { defineArrayMember, defineField, defineType } from 'sanity';

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  name: 'blockContent',
  of: [
    defineArrayMember({
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            fields: [
              {
                name: 'href',
                title: 'URL',
                type: 'url',
              },
            ],
            name: 'link',
            title: 'URL',
            type: 'object',
          },
        ],
        // preference or highlighting
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      title: 'Block',
      type: 'block',
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
        {
          name: 'source',
          title: 'Image Source',
          type: 'string',
        },
        {
          name: 'sourceName',
          title: 'Image Source Name',
          type: 'string',
        },
      ],
      options: { hotspot: true },
      type: 'image',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'code',
    }),
  ],
  title: 'Block Content',
  type: 'array',
});
