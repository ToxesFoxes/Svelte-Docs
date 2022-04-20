<script>
	import { base } from '$app/paths';
</script>

<div>
	<nav>
		<a href="{base}/"><h3 class="home">HOME</h3></a>
		<a href="{base}/about"><h3 class="about">about</h3></a>
	</nav>
</div>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	h3 {
		margin-bottom: 0px;
	}

	h3.home {
		color: #444;
	}
	h3.about {
		color: #ff3e00;
	}
</style>
