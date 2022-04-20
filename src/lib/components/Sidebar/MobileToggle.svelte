<script>
	export let active = false;
</script>

<div
	id="close-sidebar-mobile"
	on:click={() => (active = !active)}
	class:visible={active}
	class="ease-in-out backdrop-blur-sm"
/>

<style type="less">
	#close-sidebar-mobile {
		position: fixed;
		top: 62px;
		right: 0;
		left: 0;
        bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 20;
		opacity: 0;
		transition: all 0.3s;
		pointer-events: none;
        
		&.visible {
			opacity: 1;
            left: 301px;
			pointer-events: all;
		}
	}
	@media (min-width: 770px) {
		#close-sidebar-mobile {
			opacity: 0 !important;
			pointer-events: none !important;
		}
	}
</style>
