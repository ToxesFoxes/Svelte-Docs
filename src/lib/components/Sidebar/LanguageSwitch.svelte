<script>
	import { Dlanguages } from '$store/default_config';
	import { language, languages } from '$store/config';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { readDocsConfig } from '$lib/scripts/file_utils';
	export var url = null;
	// onMount(() => {
	// 	get(Dlanguages);
	// 	languages.set($Dlanguages);
	// 	get(language);
	// });
	function updateUrl(lang) {
		console.log(url);
		// docs/[lang]/[slug] replace lang in url
		if (url.includes('docs/')) {
			url = url.replace(/docs\/[a-z]+/, `docs/${lang.code}`);
		} else {
			url = `/`;
		}
		goto(url);
	}
	async function test(lang) {
		await fetch('/api/language', {
			headers: { 'content-type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ lang: lang.code })
		});
		updateUrl(lang);
	}
	let config;
	let langs = [];
	onMount(async () => {
		config = await readDocsConfig();
		langs = config.languages;
		console.log(config);
		url = window.location.href;
	});
</script>

<div class="language-switch">
	<!-- {@debug url} -->
	{#each langs as lang, index}
		<div on:click={(event) => test(lang)}>
			{lang.name}
		</div>
	{/each}
</div>
