<script>
	import { isDark, theme } from '$store/default';
	import Toggle from './Input.svelte';
	export let bordered = false;
</script>

<div class="theme-switch" class:dark={$isDark} class:bordered>
	<!-- <select bind:value={$theme} on:change={updateTheme}>
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select> -->
	<Toggle img="/images/sun.svg" label="Светлый" valuee="light" />
	<Toggle img="/images/moon.svg" label="Темный" valuee="dark" />
	<Toggle img="/images/device.svg" label="Система" valuee="system" />
	<div
		class="pos"
		class:pos-1={$theme == 'light'}
		class:pos-2={$theme == 'dark'}
		class:pos-3={$theme == 'system'}
	/>
</div>

<style type="less">
	.theme-switch {
		display: flex;
		flex-direction: row;
		border-radius: 4px;
		margin: 8px;
		width: fit-content;
		position: relative;
		&.dark {
			filter: invert(1);
			color: white;
			border-color: white;
			select {
				background-color: white;
			}
			option {
				background: black;
				color: white;
			}
		}
		div.pos {
			height: 3px;
			border-radius: 4px;
			width: 20px;
			position: absolute;
			bottom: 0;
			transition: all 0.3s ease-in-out;
			background: white;
			background-color: #333;

			&.pos-1 {
				left: calc(((100% / 3) * 1) - 29.5px);
			}
			&.pos-2 {
				left: calc(((100% / 3) * 2) - 29.5px);
			}
			&.pos-3 {
				left: calc(((100% / 3) * 3) - 29.5px);
			}
		}
	}
</style>
