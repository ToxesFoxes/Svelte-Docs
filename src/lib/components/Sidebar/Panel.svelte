<script>
	import { isDark } from '$store/default';
	export let active = false;
</script>

<div
	class="sidebar flex flex-row-reverse top-0 left-0 bottom-0 h-full duration-300 ease-in-out fixed"
	class:unhide={active}
	class:hide={!active}
	class:dark={$isDark}
>
	<div class="sidebar-content flex flex-col ">
		<div class="sidebar-header">
			<slot name="header" />
		</div>
		<div class="sidebar-links">
			<slot name="links" />
		</div>
		<div class="sidebar-footer">
			<slot name="footer" />
		</div>
	</div>
</div>

<style type="less">
	.sidebar {
		z-index: 20;
		align-self: flex-start;
		top: 62px;
		background-color: white;
		border-right: 1px solid lightgray;
		min-width: 300px;
		max-width: 300px;
		&.unhide {
			transform: translateX(0);
		}
		&.hide {
			transform: translateX(-301px);
		}
		&.dark {
			background-color: #0d1117;
			border-color: rgb(82, 82, 82);
		}
		.sidebar-header {
			border-color: rgb(82, 82, 82);
		}
		.sidebar-content {
			min-width: 300px;
		}
		.sidebar-links {
			height: 100vh;
		}
	}
</style>
