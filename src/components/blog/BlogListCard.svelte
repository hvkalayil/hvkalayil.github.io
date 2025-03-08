<script>
    export let post = {};
</script>

<li class="overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
    <a href={post.url} class="block relative">
        <img
            src={post.heroImage || "/assets/blog/hero.webp"}
            alt={post.title}
            class="w-full h-48 object-cover"
        />
    </a>

    <div
        class="m-2 p-2 flex flex-col flex-wrap items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
    >
        <div class="flex flex-wrap gap-2">
            <a
                href={post.url}
                class="text-xl font-semibold text-accent-900 dark:text-accent-200 hover:underline"
            >
                {post.title}
            </a>
            <div class="flex flex-wrap gap-2 items-center">
                {#each post.tech as tech}
                    <div>
                        <img
                            class="w-8 md:w-5 transform scale-90 hover:scale-100"
                            src={tech.src}
                            alt={tech.alt}
                            title={tech.title}
                        />
                    </div>
                {/each}
            </div>
        </div>

        <p class="text-sm text-gray-600 dark:text-gray-400">
            {post.tldr}
        </p>

        <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
                <span
                    class="px-3 py-1 text-xs font-medium rounded-full bg-accent-100 hover:bg-accent-900"
                >
                    {tag}
                </span>
            {/each}
        </div>
    </div>
</li>
