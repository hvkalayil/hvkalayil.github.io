<script>
    import JourneyLog from "./JourneyLog.svelte"
    import { currentyear } from "../../../../../store/store";
    const onTimelineChange = (event) => {
        const updatedYear = Math.ceil(parseInt(event.target.value) / 10);
        currentyear.set(updatedYear);
    };
</script>

<div class="w-full h-fit about-card-container p-4">
    <div class="h-fit card">
        <div class="flex flex-col items-center">
            <h1 class="font-bold tracking-wide md:text-2xl text-xl">
                My Learning Journey
            </h1>
            <div class="flex w-full flex-col mx-1">
                <div class="flex w-full flex-row">
                    <div
                        class="font-bold flex flex-col items-center p-2 card-style"
                    >
                        <h6>2014</h6>
                        <span>🚀</span>
                    </div>

                    <input
                        class="w-full mx-4"
                        type="range"
                        name="journey"
                        id="journey"
                        min="20140"
                        max="20260"
                        value="20260"
                        on:input={onTimelineChange}
                    />

                    <div
                        class="font-bold flex flex-col items-center p-2 card-style"
                    >
                        <h6>2026</h6>
                        <span>♾️</span>
                    </div>
                </div>

                <div class="flex w-full flex-col">
                    <JourneyLog />
                </div>
            </div>
        </div>
    </div>
</div>
