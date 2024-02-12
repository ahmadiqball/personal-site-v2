import { defineField, defineType } from 'sanity';

export default defineType({
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      options: {
        maxLength: 96,
        source: 'title',
      },
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'type',
      options: {
        list: ['Front End', 'Back End', 'Fullstack', 'Data Analysis', 'Data Science'],
      },
      title: 'Types',
      type: 'string',
    }),
    defineField({
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
      name: 'mainImage',
      options: {
        hotspot: true,
      },
      title: 'Main image',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  name: 'blog',
  preview: {
    prepare(selection) {
      const { profile } = selection;
      return { ...selection, subtitle: profile && `by ${profile}` };
    },
    select: {
      media: 'mainImage',
      profile: 'profile.name',
      title: 'title',
    },
  },
  title: 'Blog',

  type: 'document',
});
