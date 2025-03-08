<script>
  import BlogListCard from "./BlogListCard.svelte";

  export let posts = [];
  let query = "";

  $: filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.tldr.toLowerCase().includes(query.toLowerCase()),
  );
</script>

<div class="flex flex-col justify-center items-center m-4">
  <!-- <input 
          type="text" 
          placeholder="Search blogs..." 
          bind:value={query}
          class="max-w-4xl w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-accent-500"
      /> -->

  <ul class="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {#each filteredPosts as post}
      <BlogListCard {post} />
    {/each}
  </ul>
</div>
