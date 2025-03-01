<script>
    import { slide } from "svelte/transition";
    import jsonData from "../../../../../content/tech.json"
    import { currentyear } from "../../../../../store/store";

    $: technologies = jsonData.filter(item => item.year <= $currentyear);
</script>

{#each technologies as tech (tech.alt)}
    <img transition:slide
        class="flex-col w-8 m-1 md:w-5 md:m-2 overflow-auto hover:scale-110"
        src={tech.src} 
        alt={tech.alt} 
        title={tech.title} 
    />
{/each}
