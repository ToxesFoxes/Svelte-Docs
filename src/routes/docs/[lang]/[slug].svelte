<script context="module">
	import { importMarkdown } from '$lib/scripts/import_md';
	import { get } from 'svelte/store';
	export async function load({ url, params, props, fetch, session, stuff }) {
		let slug = params.slug;
		let lang = params.lang;
		// console.log(url)
		// console.log(params)
		// console.log(props)
		// console.log(fetch)
		// console.log(session)
		// console.log(stuff)
		const md = await importMarkdown(`${lang}/${slug}.md`);
		return {
			props: {
				html: md.html
				// slug,
				// lang
			}
		};
	}
</script>

<script>
	import '../../../app.css';
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
