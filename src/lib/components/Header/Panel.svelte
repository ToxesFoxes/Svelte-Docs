<script>
	import { isDark } from '$store/default';
	export let active = false;
	import Icon from '../Icons/InnerCore.svelte';
</script>

<div class="app-header backdrop-blur-sm" class:hide-bg-opacity={active} class:dark={$isDark}>
	<div class="app-header-content left">
		<slot name="left-before" />
		<Icon width={32} height={32} class="app-header-icon" />
		<h1 class="app-header-name">InnerCoreDocs</h1>
		<slot name="left-after" />
	</div>
	<div class="app-header-content right">
		<slot name="right-before" />
		<slot name="right" />
		<slot name="right-after" />
	</div>
</div>

<style type="less">
	.app-header {
		display: flex;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		justify-content: center;
		height: 62px;
		padding: 4px;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0.25) 90%
		);
		border-bottom: 1px solid lightgray;
		// transition: all 0.3s ease-in-out;
		.app-header-content {
			width: inherit;
			align-items: center;
			display: flex;
			&.left {
				flex-direction: row;
				justify-content: flex-start;
			}
			&.right {
				flex-direction: row-reverse;
				justify-content: flex-start;
			}
			:global(.app-header-icon) {
				max-width: 48px;
				margin: 0 8px;
				height: inherit;
			}
			.app-header-name {
				font-family: 'Segoe UI', sans-serif;
				font-size: 16px;
				white-space: nowrap;
				line-height: 40px;
				color: black;
				text-decoration: none;
				font-weight: bold;
				position: relative;
				z-index: 2;
				transition: opacity 0.2s;
			}
			.app-header-description {
			}
		}
		&.dark {
			background: linear-gradient(to bottom, rgba(22, 27, 34, 1) 0%, rgba(22, 27, 34, 0.25) 90%);
			border-color: rgb(82, 82, 82);
			.app-header-name {
				color: white;
			}
		}
	}
	@media (max-width: 768px) {
		.app-header {
			&.hide-bg-opacity {
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0);
			}
		}
	}
</style>
