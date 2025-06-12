import { defineCollection, z } from 'astro:content';

const members = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    expertise: z.array(z.string()),
    description: z.string(),
    image: z.string(),
    social: z.object({
      linkedin: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      behance: z.string().optional(),
      youtube: z.string().optional(),
      vimeo: z.string().optional(),
      facebook: z.string().optional(),
    }).optional(),
    joinDate: z.date(),
    isCore: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    thumbnail: z.string(),
    category: z.enum(['workshop', 'networking', 'seminar', 'meetup', 'conference']),
    tags: z.array(z.string()),
    description: z.string(),
    isUpcoming: z.boolean().default(false),
    capacity: z.number().optional(),
    registrationLink: z.string().optional(),
  }),
});

export const collections = {
  members,
  events,
};