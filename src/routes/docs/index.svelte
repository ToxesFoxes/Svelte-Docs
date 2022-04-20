<script context="module">
	const allPosts = import.meta.glob('/static-docs/**/*.md');
	let body = [];
	for (let path in allPosts) {
		console.log(path);
		body.push(
			allPosts[path]().then(() => {
				return { path };
			})
		);
	}

	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: { posts }
		};
	}
</script>

<script>
	export let posts; // receive posts
	// let links = posts.map((post) => {
	// 	return {
	// 		href: `/docs/${post.metadata.language}/${post.metadata.slug}`,
	// 		title: post.metadata.title
	// 	};
	// });
	console.log(posts);
</script>

<ul>
	{#each posts as { path }}
		<li>
			<a href={`${path.replace('.md', '')}`}>{path.replace('.md', '')}</a>
		</li>
	{/each}
</ul>
