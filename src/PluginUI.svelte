<script>
	//import some Svelte Figma UI components
	import Tabbar from "./components/Tabbar";
	import Swap from "./pages/Swap.svelte";
</script>

<div class='container'>
	<Tabbar />
	<Swap />
</div>

<style global>


	@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&display=swap");

	/* Body Structures */
	:global(body) {
		font: 12px "Libre Franklin", "cursive";
		font-family: "Libre Franklin", "cursive";
		text-align: center;
		margin: 0;
		background-color: white;
		display:flex;
		flex-direction: column;
		height:100%;
	}

	/* Text */
	:global(.text-sm-reg) {
		font: 12px "Libre Franklin";
		font-weight: 400;
	}

	:global(.text-sm-med) {
		font: 12px "Libre Franklin";
		font-weight: 500;
	}

	:global(.text-md-reg) {
		font: 14px "Libre Franklin";
		font-weight: 400;
	}

	:global(.text-md-med) {
		font: 14px "Libre Franklin";
		font-weight: 500;
	}

	:global(.text-lg-reg) {
		font: 16px "Libre Franklin";
		font-weight: 400;
	}

	:global(.text-lg-med) {
		font: 16px "Libre Franklin";
		font-weight: 500;
	}

	:global(.text-xl-reg) {
		font: 18px "Libre Franklin";
		font-weight: 400;
	}

	:global(.text-xl-med) {
		font: 18px "Libre Franklin";
		font-weight: 500;
	}


	/* Non-global style */
	.container {
		display: flex;
		flex-grow: 1;
		flex-direction: column
	}

</style>
