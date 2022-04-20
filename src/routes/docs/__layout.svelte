<script>
	import '../../app.css';
	import GithubCorner from '$lib/components/Markdown/GithubCorner.svelte';
	import Container from '$lib/components/Markdown/Container.svelte';
</script>

<GithubCorner file="README.md" />
<Container>
	<slot slot="markdown" />
</Container>
