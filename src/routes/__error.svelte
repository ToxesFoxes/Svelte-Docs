<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		console.log(status);
		console.log(error);
		return {
			props: {
				status,
				error
			}
		};
	}
</script>

<script>
	export let status;
	export let error;
	const pageNotFound = error.message.match(/Not found\: (.*)/);
	let path = '';
	if (pageNotFound) path = pageNotFound[1];
</script>

<div class="e404 flex min-w-screen items-center justify-center flex-col relative">
	{#if status == 404}
		<div class="unselectable cry text-6xl relative text-center">:(</div>
		<div class="unselectable text-9xl font-medium">{status}</div>
		<div class="unselectable text-3xl font-normal mt-8 text-center">
			Page <strong>{path}</strong> not exists
		</div>
	{:else if status >= 500}
		<div class="unselectable cry text-6xl relative text-center">:(</div>
		<div class="unselectable text-9xl font-medium">{status}</div>
		<div class="unselectable text-3xl font-normal mt-8 text-center">
			{`${status}: ${error.message}`}
		</div>
	{:else}
		<h1>{`${status}: ${error.message}`}</h1>
	{/if}
	<div class="text-2xl font-medium mt-8 text-center">
		<a href="/" class="text-blue-500">Go home</a>
		<a href="{path}" class="text-blue-600">Reload</a>
	</div>
</div>

<style>
	.cry {
		bottom: -95px;
	}
	.unselectable {
		user-select: none;
		pointer-events: none;
	}
	.e404 {
		min-height: calc(100vh - 120px);
	}
</style>
