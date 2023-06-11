<script>
    import Button from "../components/Button.svelte";
    import { focus } from "../store";

    let focusLayer;
    let selection;
    focus.subscribe((value) => {
        focusLayer = value;

        // set selection to the layer focused on the screen.
        switch (true) {
            case focusLayer.length == 3:
                selection = focusLayer[0] + ", " + focusLayer[1] + ", and " + focusLayer[2];
                break;
            case focusLayer.length == 2:
                selection = focusLayer[0] + " and " + focusLayer[1];
                break;
            case focusLayer.length == 1:
                selection = focusLayer[0];
                break;
            default:
                if (focusLayer.length > 3) {
                    selection = focusLayer[0] + ", " + focusLayer[2] + ", " + focusLayer[3] + ", and " + (focusLayer.length - 3) + " more objects";
                } else {
                    selection = "";
                }
        }
        
    });

    window.addEventListener("message", handleMessage);

    function handleMessage(event) {
        const message = event.data;
        if (message && message.pluginMessage.currentSelection) {
            focus.set(message.pluginMessage.currentSelection);
        }
    }

    function darkChange() {
        parent.postMessage({ pluginMessage: { type: "theme-update", message: "dark-to-light-theme" } }, "*");
    }

    function lightChange() {
        parent.postMessage({ pluginMessage: { type: "theme-update", message: "dark-to-light-theme" } }, "*");
    }
</script>

<div class="container">
    <div class={`selection-box ${focusLayer.length > 0 ? "selected" : ""}`}>
        <div>
            <div class="text-xl-med">Selected Frame:</div>
            <br />
            {#if focusLayer.length > 0}
                <div class="text-xl-reg">{selection}</div>
            {:else}
                <div class="text-xl-reg">N/A</div>
            {/if}
        </div>
        <div class="text-md-reg">
            Selected frames will be able to be changed for light and dark.
        </div>
    </div>
    <div class="flex-horizontal">
        <Button onClick={lightChange}>Light Theme</Button>
        <Button onClick={darkChange}>Dark Theme</Button>
    </div>
</div>

<style>
    .selected {
        background-color: #f2f2f2;
    }
    .container {
        padding: 16px 24px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 24px;
    }

    .selection-box {
        padding: 24px;
        border: 1px dashed #d2d2d2;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
        align-self: stretch;
        flex-grow: 1;
    }

    .flex-horizontal {
        display: flex;
        justify-content: space-between;
        gap: 16px;
    }
</style>
