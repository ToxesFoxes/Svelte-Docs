<script>
	import Item from './Item.svelte';
	async function getContent() {
		const sidebar = await fetch('/api/sidebar', {
			headers: { 'content-type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({})
		});
		const data = await sidebar.json();
		console.log(data);
		return data;
	}
	let promise = getContent();
</script>

{#await promise}
	<p>...waiting</p>
{:then data}
	<p>Language `{data.language}`</p>
	<Item list={data.pages} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
