<script>
	import { isDark } from '$store/default';
	import CloseButton from './CloseButton.svelte';
	function close() {
		open = false;
	}
	export let img = '/images/close.svg';
	export let title = 'Default Modal';
	export let vertical = 'center';
	export let horizontal = 'center';
	export let open = false;
</script>

<div
	class="settings-modal"
	class:open
	class:dark={$isDark}
	class:bottom={vertical == 'bottom'}
	class:top={vertical == 'top'}
	class:left={horizontal == 'left'}
	class:right={horizontal == 'right'}
	on:click={() => close()}
>
	<div class="modal-window max-w-lg">
		<div class="modal-container relative rounded-lg shadow" on:click|stopPropagation={() => {}}>
			<div class="modal-header flex justify-between items-center p-5 rounded-t border-b ">
				<div class="modal-title">
					{#if title}
						<h3 class="text-xl font-medium">{title}</h3>
					{/if}
				</div>
				<CloseButton {img} bind:option={open} />
			</div>
			<div class="modal-content p-6 space-y-6">
				<slot name="modal-content" />
			</div>
			<div class="modal-footer flex items-center p-6 space-x-2 rounded-b border-t" />
		</div>
	</div>
</div>

<style type="less">
	.settings-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease-in-out;
		&.top {
			align-items: flex-start;
		}
		&.bottom {
			align-items: flex-end;
		}
		&.left {
			justify-content: flex-start;
		}
		&.right {
			justify-content: flex-end;
		}
		.modal-window {
			position: relative;
			padding: 1rem;
			width: 100%;
			height: auto;
			.modal-container {
				background-color: white;
				.modal-header {
					border-color: darkgray;
				}
			}
		}
		&.open {
			opacity: 1;
			pointer-events: all;
		}
		&.dark {
			.modal-window {
				.modal-header {
					.modal-title {
						color: white;
					}
				}
				.modal-container {
					background-color: #161b22;
					.modal-content {
						background-color: #0d1117;
					}
				}
			}
		}
	}
</style>
