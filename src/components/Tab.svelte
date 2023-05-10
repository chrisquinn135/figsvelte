<script>
    import Tag from "./Tag.svelte";

    export let name;
    export let id;
    export let number;
</script>

<div class="tab text-md-reg">
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
