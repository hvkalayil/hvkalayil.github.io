import technologies from "./content/tech.json";

export const formatMarkdownPost = (post: { data: { title: string; tags: string; tech: string[]; tldr: string; sortOrder: string; date: string; heroImage: string; }; id: string; body: string; }) => ({
    title: post.data.title,
    tags: post.data.tags,
    tech: post.data.tech.map((tech) => technologies.find((t) => t.title === tech)),
    tldr: post.data.tldr,
    sortOrder: post.data.sortOrder,
    date: new Date(post.data.date),
    heroImage: post.data.heroImage,
    url: `/blog/${post.id}`,
    description: post.body,
})