<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const sidebar = await fetch('/api/sidebar', {
			headers: { 'content-type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({ lang: 'en' })
		});
		// const data = await sidebar.json();
		// console.log(data);
		// console.log(session);
		return {
			props: {
				session
			}
		};
	}
</script>

<script>
	import '../app.css';

	// Components
	import Sidebar from '$lib/components/Sidebar/Panel.svelte';
	import SidebarToggle from '$lib/components/Sidebar/Toggle.svelte';
	import AppHeader from '$lib/components/Header/Panel.svelte';
	import MobileToggle from '$lib/components/Sidebar/MobileToggle.svelte';
	import SidebarHeader from '$lib/components/Sidebar/Header.svelte';
	import PageList from '$lib/components/Sidebar/Pages/List.svelte';
	import SettingsButton from '$lib/components/Modals/CloseButton.svelte';
	import SettingsModal from '$lib/components/Modals/Settings/Modal.svelte';

	// Store
	// import { update } from '$store/default_config';
	import { get } from 'svelte/store';
	// import { loadStaticDocsFile } from '../lib/scripts/file_utils';
	import { onMount } from 'svelte';
	import { language, languages } from '$store/config';
	import { theme, isDark, sidebarState, settingsState } from '$store/default';

	// Script
	get(theme);
	onMount(async (asd) => {
		let isSysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		$isDark = $theme == 'system' ? (isSysDark ? true : false) : $theme == 'dark' ? true : false;
	});
	export let session;
</script>

<svelte:head>
	<meta name="theme-color" content={$isDark ? '#161b22' : '#ffffff'} />
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/static/css/github-markdown-${$isDark ? 'dark' : 'light'}.css`} />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono" />
</svelte:head>

<div class="app-layout flex flex-col w-full min-h-screen" class:dark={$isDark}>
	<AppHeader bind:active={$sidebarState}>
		<SidebarToggle bind:active={$sidebarState} slot="left-before" />
		<SettingsButton slot="right-after" img="/images/settings.svg" bind:option={$settingsState} />
	</AppHeader>
	<Sidebar bind:active={$sidebarState}>
		<SidebarHeader slot="header" />
		<PageList slot="links">
			{session?.lang}
			<!-- {#if $sidebar} -->
			<!-- {#each pages as link} -->
			<!-- {link.slug} -->
			<!-- {/each} -->
			<!-- {/if} -->
		</PageList>
	</Sidebar>
	<MobileToggle bind:active={$sidebarState} />
	<SettingsModal bind:open={$settingsState}/>
	<main
		id="main"
		class="page-content w-full ease-in-out duration-300 items-center justify-center relative"
		class:content_hidden={!$sidebarState}
		class:shrink-0={!$sidebarState}
	>
		<slot />
	</main>
</div>

<style type="less">
	.app-layout {
		// transition: all 0.3s ease-in-out;
		background-color: white;
		&.dark {
			background-color: #0d1117;
		}
	}
	.page-content {
		padding: 0;
		margin: 62px 0;
		left: 0;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		height: 100%;
		margin-left: 300px;
		max-width: calc(100% - 300px);
		&.content_hidden {
			margin-left: 0;
			max-width: 100%;
		}
	}
	@media (max-width: 768px) {
		.page-content {
			margin-left: 0;
			max-width: 100%;
			&.dark {
				background-color: #161b22;
			}
		}
	}
	// #layout {
	// 	height: 100vh;
	// 	display: flex;

	// 	#sidebar {
	// 		width: 20%;
	// 		overflow-y: auto;
	// 	}

	// 	& #main {
	// 		flex: 1;
	// 		padding: 0 20px 100px 20px;
	// 		overflow-y: auto;
	// 	}
	// }
</style>
