<script>
    import Tab from "./Tab.svelte";
    import {activeTab } from '../store'

    // set the active tab
    let active;
    activeTab.subscribe(value => {
        active = value;
    })
</script>

<div class="tabbar">
    <Tab name={"Switcher"} id={"swap"} number={0} isActive={active == "swap"}/>
    <Tab name={"History"} id={"history"} number={10} isActive={active == "history"}/>
    <Tab name={"Configuration"} id={"config"} number={0} isActive={active == "config"}/>
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
