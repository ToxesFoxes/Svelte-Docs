<script>
	import { isDark } from '$store/default';
	export let active = false;
</script>

<div
	id="toggle-sidebar"
	class="flex items-center justify-center"
	on:click={() => (active = !active)}
	class:dark={$isDark}
>
	<div id="hamborgar" class:open={active}>
		<span />
		<span />
		<span />
	</div>
</div>

<style type="less">
	#toggle-sidebar {
		cursor: pointer;
		padding: 14px;
	}
	#hamborgar {
		width: 21px;
		min-height: 18px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s linear;
		-moz-transition: 0.5s linear;
		-o-transition: 0.5s linear;
		transition: 0.5s linear;
		span {
			display: block;
			position: absolute;
			height: 2px;
			width: 100%;
			background: black;
			border-radius: 9px;
			opacity: 1;
			left: 0;
			-webkit-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
			-webkit-transition: 0.25s ease-in-out;
			-moz-transition: 0.25s ease-in-out;
			-o-transition: 0.25s ease-in-out;
			transition: 0.25s ease-in-out;
			-webkit-transform-origin: left center;
			-moz-transform-origin: left center;
			-o-transform-origin: left center;
			transform-origin: left center;
			&:nth-child(1) {
				top: 0;
			}
			&:nth-child(2) {
				top: 8px;
			}
			&:nth-child(3) {
				top: 16px;
			}
		}
		&.open {
			span {
				&:nth-child(1) {
					-webkit-transform: rotate(45deg);
					-moz-transform: rotate(45deg);
					-o-transform: rotate(45deg);
					transform: rotate(45deg);
					top: 0;
					height: 1.5px;
				}
				&:nth-child(2) {
					width: 0%;
					opacity: 0;
				}
				&:nth-child(3) {
					-webkit-transform: rotate(-45deg);
					-moz-transform: rotate(-45deg);
					-o-transform: rotate(-45deg);
					transform: rotate(-45deg);
					top: 14.5px;
					height: 1.5px;
				}
			}
		}
	}
	.dark {
		#hamborgar {
			span {
				background: white;
			}
		}
	}
</style>
