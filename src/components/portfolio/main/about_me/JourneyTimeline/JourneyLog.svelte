<script>
    import jsonData from "../../../../../content/journey.json";
    import { currentyear } from "../../../../../store/store";

    $: journey = jsonData.find((item) => item.years.includes($currentyear));
</script>

    <h1 class="underline font-bold tracking-wide md:text-xl text-lg">
        Journey Logs {journey.year}
    </h1>
    <p id="journeyDescription" class="p-2 transition-opacity duration-300">
        {journey.description}
    </p>
    <ul id="journeyPoints" class="detailPaneUl pl-10 transition-opacity duration-300">
        {@html journey.points}
    </ul>
