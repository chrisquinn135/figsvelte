<script>
    import Tag from "./Tag.svelte";
    import { activeTab } from "../store";

    export let isActive;
    export let name;
    export let id;
    export let number;

    // set current tab
    function onClick() {
        activeTab.set(id)
    }
</script>

<div
    class={`tab text-md-reg ${
        isActive ? "tab--state-active" : "tab text-md-reg"
    }`}
    on:click={onClick}
>
    
    {name}
    {#if number}
        <Tag {number} />
    {/if}
</div>

<style>
    .tab {
        padding: 16px 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 8px;
        color: #6c6c70;
        border-bottom-style: solid;
        border-color: #ffffff;
        border-width: 2px;
    }
    .tab:hover {
        color: #242426;
        cursor: pointer;
        transition: all 500ms;
    }

    .tab--state-active {
        color: #242426;
        border-color: #004759;
    }
</style>
