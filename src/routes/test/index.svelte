<script context="module">
	import { importMarkdown, parseHeaders, importRemoteMarkdown } from '$lib/scripts/import_md';
	// import { loadStaticDocsFile, loadFromRemote } from '$lib/scripts/file_utils';
	// import { headers } from '$store/markdown';
	export async function load() {
		const src =
			'https://raw.githubusercontent.com/Reider745/libs/main/mod_documentation_api/DungeonUtility.md';
		// const md = await importRemoteMarkdown(src);

		// console.log(md.html);
		// console.log(parseHeaders(md.html));
		const md = await importMarkdown('en/test.md');
		// console.log(md);
		// const cfg = await loadStaticDocsFile('ru/navbar.json');
		// console.log(JSON.parse(cfg));
		// console.log(loadFromRemote("https://raw.githubusercontent.com/Reider745/libs/main/mod_documentation_api/DungeonUtility.md"))
		// const headings = await parseHeaders(md.html);
		// console.log(headings);
		// console.log(res);
		// return {
		// 	info: res.info,
		// 	content: res.content
		// };
		return {
			props: {
				...md
			}
		};
	}
</script>

<script>
	import github from 'svelte-highlight/styles/github';
	export let html;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<h1>Hello, {import.meta.env.VITE_STATE}</h1>
<div class="markdown-body p-8 pl-8 lg:pl-24 sm:pt-10">
	{@html html}
</div>

<style type="less">
	.markdown-body {
		margin: 0 auto;
	}
	nav.toc {
		a.toc-link {
			text-decoration: none;
			word-break: break-all;
		}
		ol.toc-level {
			
		}
		li.toc-item {
			
		}
	}
</style>
