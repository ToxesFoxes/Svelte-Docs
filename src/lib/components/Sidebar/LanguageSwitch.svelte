<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const asd = await fetch('/api/config', {
			headers: { 'content-type': 'application/json' },
			method: 'GET'
		});
		const data = await asd.json();
		console.log(data);
		return {};
	}
</script>

<script>
	// import { Dlanguages } from '$store/default_config';
	import { language, languages } from '$store/config';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	// import { readDocsConfig } from '$lib/scripts/file_utils';
	export var url = null;
	// onMount(() => {
	// 	get(Dlanguages);
	// 	languages.set($Dlanguages);
	// 	get(language);
	// });
	function updateUrl(lang) {
		// console.log(url);
		// docs/[lang]/[slug] replace lang in url
		let regex_lang = /docs\/([a-z]{2})\/([a-z0-9-]*$)/;
		let regex = /docs\/([a-z0-9-]*$)/;
		let match_lang = url.match(regex_lang);
		let match = url.match(regex);
		if (match_lang) {
			url = url.replace(regex_lang, `docs/${lang.code}/${match_lang[2]}`);
		} else if (match) {
			url = url.replace(regex, `docs/${lang.code}/${match[1]}`);
		} else {
			url = `/`;
		}
		goto(url);
	}
	async function test(lang) {
		await fetch('/api/language', {
			headers: { 'content-type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({
				lang: lang.code
			})
		});
		updateUrl(lang);
	}
	let langs = [];
	onMount(async () => {
		url = window.location.href;

		let r = await fetch(
			'/api/language?' +
				new URLSearchParams({
					foo: 'value',
					bar: '2'
				}).toString(),
			{
				headers: { 'content-type': 'application/json' },
				method: 'GET'
			}
		);
		langs = await r.json();
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
