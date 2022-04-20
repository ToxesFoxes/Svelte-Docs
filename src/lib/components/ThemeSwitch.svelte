<script>
	import { isDark, theme } from '$store/default';
	function updateTheme() {
		let isSysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		$isDark = $theme == 'system' ? (isSysDark ? true : false) : $theme == 'dark' ? true : false;
	}
</script>

<select
	bind:value={$theme}
	on:change={updateTheme}
	class=""
>
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
