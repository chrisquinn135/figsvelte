<script>
	//import Global CSS from the svelte boilerplate
	//contains Figma color vars, spacing vars, utility classes and more
	import { GlobalCSS } from "figma-plugin-ds-svelte";

	//import some Svelte Figma UI components
	import { Button, Input, Label, SelectMenu } from "figma-plugin-ds-svelte";
	import Tabbar from "./components/Tabbar";

	var disabled = true;
	var selectedShape;
	var count = 5;

	//this is a reactive variable that will return false when a value is selected from
	//the select menu, its value is bound to the primary buttons disabled prop
	$: disabled = selectedShape === null;

	function darkChange() {
		parent.postMessage(
			{
				pluginMessage: {
					type: "dark",
				},
			},
			"*"
		);
	}

	function lightChange() {
		parent.postMessage({ pluginMessage: { type: "light" } }, "*");
	}
</script>

<div class="">
	<Tabbar />
	<br />
	<br />
	<Button on:click={lightChange} bind:disabled>Change to Light</Button>
	<br />
	<Button on:click={darkChange} bind:disabled>Change to Dark</Button>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&display=swap");

	/* Body Structures */
	:global(body) {
		font: 12px "Libre Franklin", "cursive";
		font-family: "Libre Franklin", "cursive";
		text-align: center;
		margin: 0;
		background-color: white;
	}

	.footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
		background-color: #f9f9ff;
	}

	.header {
		text-align: left;
	}

	.footer-contents {
		display: flex;
		flex-direction: row;
		justify-content: right;
		align-items: center;
		gap: 24px;
	}

	.body {
		text-align: left;
		height: 76%;
	}

	/* List */
	ul {
		margin: 0px 24px;
		padding-inline-start: 8px;
	}

	ul li {
		margin: 8px;
	}

	/* Dividers */
	hr.solid {
		display: block;
		height: 1px;
		border: 0;
		border-top: 1px solid #ebebf0;
		margin: 0px;
		padding: 0;
	}

	hr.setting {
		display: block;
		height: 1px;
		border: 0;
		border-top: 1px solid #ebebf0;
		margin: 0px;
		padding: 0;
	}

	/* Borders */
	.border-round {
		border-style: solid;
		border-width: 1px;
		border-color: #ebebf0;
		border-radius: 8px;
	}

	.border-round--focus {
		border-style: solid;
		border-width: 1px;
		border-color: #03a1c7;
		background-color: #f9f9ff;
		border-radius: 8px;
		transition: all 500ms;
	}

	.border-round:hover {
		border-color: #bcbcc0;
		background-color: #f9f9ff;
		transition: all 200ms;
		cursor: pointer;
	}

	/* Flexbox */
	.flexbox {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
	}

	.flexbox-stretch {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		gap: 8px;
	}

	.flexbox--right {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
		align-items: start;
		gap: 8px;
	}

	.flexbox--right-center {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
		align-items: center;
		gap: 8px;
	}

	/* Spacings */
	.spacing-horizontal-16 {
		margin: 0px 16px;
	}

	.spacing-16 {
		padding: 16px;
	}

	/* Text */
	.text-sm-reg {
		font: 12px "Libre Franklin";
		font-weight: 400;
	}

	.text-sm-med {
		font: 12px "Libre Franklin";
		font-weight: 500;
	}

	.text-md-reg {
		font: 14px "Libre Franklin";
		font-weight: 400;
	}

	.text-md-med {
		font: 14px "Libre Franklin";
		font-weight: 500;
	}

	.text-md-semibold {
		font: 14px "Libre Franklin";
		font-weight: 500;
	}

	.text-lg-semibold {
		font: 16px "Libre Franklin";
		font-weight: 600;
	}

	.text-xl-semibold {
		font: 18px "Libre Franklin";
		font-weight: 600;
	}
</style>
