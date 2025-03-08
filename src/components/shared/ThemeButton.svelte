<script>
    import { onMount } from "svelte";
    export let className = '';

    const THEME_KEY = "theme";
    let theme = localStorage.getItem(THEME_KEY) || "light";

    const setTheme = () => {
        if (theme === "dark") {
            document.querySelector(':root').style.setProperty('--hvk-scrollbar', '#222527')
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("dark");
        } else {
            document.querySelector(':root').style.setProperty('--hvk-scrollbar', '#f7fdff')
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem(THEME_KEY, theme);
    };

    const changeTheme = () => {
        theme = theme === "light" ? "dark" : "light";
        setTheme();
    };

    onMount(() => {
        setTheme();
    });
</script>

<button class={className} aria-label="Toggle theme" on:click={changeTheme}>
    {#if theme === "light"}
        <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="lightIcon"
        >
            <path
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
            ></path>
        </svg>
    {/if}

    {#if theme === "dark"}
        <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="darkIcon"
        >
            <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
            ></path>
        </svg>
    {/if}
</button>
