<script context="module">
	export async function load({ url, params, props, fetch, session, stuff }) {
		let slug = params.slug;
		let lang = params.lang;
		let md = await fetch(
			'/api/docs?' +
				new URLSearchParams({
					slug: slug
				}).toString(),
			{
				headers: { 'content-type': 'application/json' },
				method: 'GET'
			}
		);
		const data = md.ok && (await md.json());
		console.log('md:', data);
		return {
			props: {
				html: data ? data.value : ''
			}
		};
	}
</script>

<script>
	import '../../app.css';
	import GithubCorner from '$lib/components/Markdown/GithubCorner.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	export let info;
	export let html;
	// export let content;
	// export let slug;
	// export let lang;
	onMount(async () => {
		if (!html) goto('/');
	});
</script>

<svelte:head>
	{#if info}
		<title>{info.title}</title>
		<meta name="description" content={info.description} />
		<meta http-equiv="content-language" content={info.language} />
		<meta name="keywords" content={info && info.keywords.join(', ')} />
	{/if}
</svelte:head>
{#if html}
	{@html html}
{/if}
