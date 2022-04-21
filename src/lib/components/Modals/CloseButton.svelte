<script>
	import { isDark } from '$store/default';
	export let img = '/images/close.svg';
	export let option;
</script>

<div
	class="close-button"
	class:dark={$isDark}
	class:active={option}
	on:click={() => {
		option = !option;
	}}
>
	<img src={img} alt="Settings" />
</div>

<style type="less">
	.close-button {
		width: 40px;
		height: 40px;
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		cursor: pointer;
		img {
			width: 26px;
			height: 26px;
			transition: all 0.3s ease-in-out;
			transform: scale(0.8);
		}
		&.active {
			img {
				transform: scale(1);
			}
		}
		&.dark {
			filter: invert(1);
		}
	}
</style>
