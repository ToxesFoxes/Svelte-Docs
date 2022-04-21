<script>
	import { theme, isDark } from '$store/default';
	import Modal from '../Modal.svelte';
	import ThemeSwitch from '$lib/components/Theme/Switch.svelte';
	import List from '../../Icons/List.svelte';
	export let open = false;
</script>

<Modal title="Settings" bind:open>
	<div slot="modal-content" class:dark={$isDark}>
		<div class="theme-changer">
			<div class="title">
				Тема:
				{#if $theme == 'dark'}
					Темная
				{:else if $theme == 'light'}
					Светлая
				{:else if $theme == 'system'}
					Системная
					{#if $isDark}
						(темная)
					{:else}
						(светлая)
					{/if}
				{:else}
					Неизвестно
				{/if}
			</div>
			<div class="theme-switch">
				<ThemeSwitch />
			</div>
		</div>
	</div>
</Modal>

<style type="less">
	.theme-changer {
		display: flex;
		align-items: center;
		.title {
			font-size: 1.05rem;
			font-weight: 500;
			color: black;
		}
		.theme-switch {
			margin-left: auto;
		}
	}
	.dark {
		.theme-changer {
			.title {
				color: white;
			}
		}
	}
</style>
