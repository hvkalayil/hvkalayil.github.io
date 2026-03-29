<script>
    import { slide } from "svelte/transition";
    import jsonData from "../../../../../content/journey.json";
    import { currentyear } from "../../../../../store/store";

    $: journey = jsonData.find((item) => item.years.includes($currentyear));
</script>

{#key journey.year}
    <h1 transition:slide={{ duration: 800 }} class="underline font-bold tracking-wide md:text-xl text-lg">
        Journey Logs {journey.year}
    </h1>
    <p transition:slide={{ duration: 800 }} id="journeyDescription" class="p-2 transition-opacity duration-300">
        {journey.description}
    </p>
    <ul transition:slide={{ duration: 800 }} id="journeyPoints" class="detailPaneUl pl-10 transition-opacity duration-300">
        {@html journey.points}
    </ul>
{/key}