// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from 'astro:content';

// 3. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img.width < 1200, {
        message: 'The image must have a maximum width of 1200px',
      }),

      // Relations
      author: reference('authors'),

      // Relations
      tags: z.array(z.string()),
    }),
});

const authorsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
