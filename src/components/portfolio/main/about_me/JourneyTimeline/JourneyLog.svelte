<script>
    import { slide } from "svelte/transition";
    import jsonData from "../../../../../content/journey.json";
    import { currentyear } from "../../../../../store/store";

    $: journey = jsonData.find((item) => item.years.includes($currentyear));
</script>

{#key journey.year}
    <h1
        transition:slide
        class="underline font-bold tracking-wide md:text-xl text-lg"
    >
        Journey Logs {journey.year}
    </h1>
    <p transition:slide  id="journeyDescription" class="p-2">
        {journey.description}
    </p>
    <ul
        transition:slide
        id="journeyPoints"
        class="detailPaneUl pl-10"
    >
        {@html journey.points}
    </ul>
{/key}
