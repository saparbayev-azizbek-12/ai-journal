import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    concepts: z.array(z.string()),
    code: z.string(),
    githubLink: z.string(),
    demoLink: z.string().optional(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    githubLink: z.string(),
    demoLink: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = {
  'topics': topics,
  'projects': projects,
};
