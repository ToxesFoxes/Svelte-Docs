<script>
	import { Dlanguages } from '$store/default_config';
	import { language, languages } from '$store/config';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	var url = null;

	onMount(() => {
		get(Dlanguages);
		languages.set($Dlanguages);
		get(language);
		url = window.location.href;
	});
	function switchLanguage(lang, index) {
		language.set(lang.code);
		console.log(url);
		// docs/[lang]/[slug] replace lang in url
		if (url.includes('docs/')) {
			url = url.replace(/docs\/[a-z]+/, `docs/${lang.code}`);
		} else {
			url = `/`;
		}
		goto(url);
		console.log($Dlanguages);
		console.log($language);
	}
</script>

<div>
	{#each $Dlanguages as lang, index}
		<div on:click={(event) => switchLanguage(lang, index)}>
			{lang.code}, {lang.name}, {lang.path}
		</div>
	{/each}
</div>
