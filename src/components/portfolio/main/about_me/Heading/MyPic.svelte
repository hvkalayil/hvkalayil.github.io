<script>
    import { fade } from "svelte/transition";
    import { currentyear } from "../../../../../store/store";

    const MY_PICTURES = {
        2014: "assets/me/1.webp",
        2015: "assets/me/1.webp",
        2016: "assets/me/2.webp",
        2017: "assets/me/2.webp",
        2018: "assets/me/3.webp",
        2019: "assets/me/3.webp",
        2020: "assets/me/4.webp",
        2021: "assets/me/4.webp",
        2022: "assets/me/5.webp",
        2023: "assets/me/5.webp",
        2024: "assets/me/6.webp",
        2025: "assets/me/6.webp",
    };

    $: src = MY_PICTURES[$currentyear] || "assets/me/6.webp";
</script>

<div class="grid w-full h-auto min-h-72 mb-2 md:h-fit md:mr-2">
    {#key src}
        <img
            transition:fade={{ duration: 800 }}
            id="myPic"
            alt="HVK"
            {src}
            class="col-start-1 row-start-1 flex-col w-full h-auto object-cover rounded-md"
        />
    {/key}
</div>
