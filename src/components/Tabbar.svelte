<script>
    import Tab from "./Tab.svelte";
</script>

<div class="tabbar">
    <Tab name={"Switcher"} id={"swap"} number={0} />
    <Tab name={"History"} id={"history"} number={10} />
    <Tab name={"Configuration"} id={"config"} number={0} />
</div>

<style>
    .tabbar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        border-bottom-style: solid;
        border-color: #ebebf0;
        border-width: 1px;
        justify-items: center;
        align-items: center;
    }
</style>
