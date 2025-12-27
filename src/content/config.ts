import { defineCollection, z } from 'astro:content';

const spots = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    url_slug: z.string(), // Renamed from slug to avoid conflict
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    best_season: z.string(),
    skill_level: z.string(),
    getting_there: z.string(),
    country: z.enum(['br', 'us', 'au']),
    region: z.string(),
    lat: z.number().optional(),
    lon: z.number().optional(),
  }),
});

export const collections = { spots };
