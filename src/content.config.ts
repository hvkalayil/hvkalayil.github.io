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

export const collections = {
    works: worksCollection,
};
