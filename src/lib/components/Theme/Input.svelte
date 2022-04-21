<script>
	export let label = 'default';
	export let valuee = 'system';
	export let img = '/images/device-pc.svg';
	import { isDark, theme } from '$store/default';
	let input;
	function updateTheme() {
		$theme = valuee;
		let isSysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		$isDark = $theme == 'system' ? (isSysDark ? true : false) : $theme == 'dark' ? true : false;
	}
</script>

<div
	class="theme-toggle"
	class:dark={$isDark}
	class:checked={$theme === valuee}
	on:click={updateTheme}
>
	<img class="current-style" src={img} alt={label} />
</div>

<style type="less">
	.theme-toggle {
		width: 40px;
		height: 40px;
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		position: relative;
		user-select: none;
		cursor: pointer;
		.current-style {
			width: 26px;
			height: 26px;
			transition: all 0.3s ease-in-out;
			transform: scale(0.8);
		}
	}
</style>
