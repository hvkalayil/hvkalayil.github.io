<script>
    import { slide } from "svelte/transition";

    export let data = {};
    let showBody = false;
    let angle = 0;
    const togglepanel = () => {
        showBody = !showBody;
        angle = showBody ? 180 : 0;
    };
</script>

<div
    class="flex flex-row border-l-4 border-accent-100 border-dotted p-2 pl-4 m-1 transition-colors bg-sidebar dark:bg-sidebar-dark hover:bg-primary-100 hover:dark:bg-primary-dark-100 hover:shadow-sm hover:shadow-accent-100 hover:bg-gradient-to-l hover:from-accent-0"
>
    <div class="flex-col w-11/12">
        <div class="exp-ball hover:scale-105 transition"></div>
        <h3 class="text-md md:text-lg font-extrabold">{data.first}</h3>
        <h4 class="font-bold">{data.second}</h4>
        <h5>{@html data.third}</h5>

        {#if showBody}
            <div transition:slide class="flex flex-col w-full pl-4 py-4">
                {#each data.body as details}
                    {#if details.title}
                        <div
                            class="exp-ball opacity-50 hover:scale-105 transition"
                        ></div>
                        <h4 class="font-bold">{@html details.title}</h4>
                    {/if}

                    <div class="pl-2 pt-2">
                        <ul class="detailPaneUl">
                            {#each details.points as point}
                                <li>{@html point}</li>        
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        {/if}
    </div>

    <div class="flex flex-col justify-start">
        {#if data.body}
            <button
                class="transition-transform transit duration-500 mt-4 cursor-pointer"
                style="transform: rotate({angle}deg)"
                on:click={togglepanel}
                aria-label="Toggle Body"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
        {/if}

        {#if data.link}
            <span class="transition-transform transit duration-500 mt-4">
                <a
                    href="assets/cert/{data.link}.pdf"
                    target="_blank"
                    aria-label="Certificate"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                    </svg>
                </a>
            </span>
        {/if}
    </div>
</div>
