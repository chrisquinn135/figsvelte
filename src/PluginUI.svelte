<script>

	//import Global CSS from the svelte boilerplate
	//contains Figma color vars, spacing vars, utility classes and more
	import { GlobalCSS } from 'figma-plugin-ds-svelte';

	//import some Svelte Figma UI components
	import { Button, Input, Label, SelectMenu } from 'figma-plugin-ds-svelte';

	var disabled = true;
	var selectedShape;
	var count = 5;

	//this is a reactive variable that will return false when a value is selected from
	//the select menu, its value is bound to the primary buttons disabled prop
	$: disabled = selectedShape === null;

	function createShapes() {
		parent.postMessage({ pluginMessage: { 
			'type': 'create-shapes'
		} }, '*');
	}

	function cancel() {
		parent.postMessage({ pluginMessage: { 'type': 'cancel' } }, '*')
	}

</script>


<div class="wrapper p-xxsmall">

	<Label>Darkness Descends on the Components</Label>
	<Button on:click={cancel} variant="secondary" class="mr-xsmall">Cancel</Button>
	<Button on:click={createShapes} bind:disabled={disabled}>Create shapes</Button>


</div>


<style>

/* Add additional global or scoped styles here */

</style>