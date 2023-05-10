<script>
    export let name;
    export let id;
    export let number;
</script>

<div class="tab">
    {name}
    {number ? number : ""}
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
</style>
