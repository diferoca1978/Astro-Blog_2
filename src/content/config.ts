// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md, mdx}',
    base: 'src/data/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img.width < 1200, {
        message: 'The image must have a maximum width of 1200px',
      }),

      // Relations
      author: z.string(),

      // Relations
      tags: z.array(z.string()),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
