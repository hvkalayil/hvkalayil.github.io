// src/content/config.ts
import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const worksCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
    schema: z.object({
        link: z.string().url().optional(),
        name: z.string(),
        imgPath: z.string(),
        icons: z.array(z.string()),
        sortOrder: z.number(),
    }),
});

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        tech: z.array(z.string()),
        tldr: z.string(),
        date: z.string(),
        heroImage: z.string().optional(),
    }),
});

export const collections = {
    works: worksCollection,
    blogs: blogsCollection,
};
