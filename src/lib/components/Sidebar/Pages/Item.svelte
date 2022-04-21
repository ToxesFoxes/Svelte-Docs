<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { isDark } from '$store/default';
	import Item from './Item.svelte';
	export let list;
	export let isChild = false;
	let isOpen = false;
	let url;

	// function swapPage(slug) {
	// 	// console.log(url);
	// 	// docs/[lang]/[slug] replace lang in url
	// 	if (url.includes('docs/')) {
	// 		url = url.replace(/docs\/[a-z]+/, `docs/${lang.code}`);
	// 	} else {
	// 		url = `/`;
	// 	}
	// 	goto(url);
	// }
	onMount(async () => {
		url = window.location.href;
	});
</script>

{#each list as item, index}
	{#if item.children}
		<div class="group" class:dark={isDark} class:open={isOpen}>
			<div
				class="group-title"
				on:click={() => {
					isOpen = !isOpen;
				}}
			>
				{item.title}
			</div>
			<div class="group-items">
				<Item list={item.children} isChild={true} />
			</div>
		</div>
	{:else}
		<div class="item" class:child={isChild} class:dark={isDark}>
			<div class="item-title" on:click={() => {/*swapPage(item.slug)*/}}>
				{#if isChild}
					<span class="index">{index + 1}. </span>
				{/if}
				{item.title}
			</div>
		</div>
	{/if}
{/each}

<style type="less">
	.group {
		padding: 0.5rem;
		border-bottom: 1px solid lightgray;
		user-select: none;
		transition: background 0.1s ease-in-out;
		.group-items {
			max-height: 0px;
			overflow: hidden;
		}
		.group-title {
			font-family: 'Segoe UI', sans-serif;
			font-size: 16px;
			white-space: nowrap;
			line-height: 40px;
			cursor: pointer;
			position: relative;
			padding-left: 0;
			transition: all 0.1s ease-in-out;
			&::before {
				content: '';
				background-color: white;
				width: 2.5px;
				left: -5px;
				border-radius: 8px;
				top: 50%;
				bottom: 50%;
				position: absolute;
				transition: all 0.1s ease-in-out;
			}
		}
		&:hover {
			// background-color: #7d7d7d24;
		}
		&.open {
			.group-items {
				max-height: 100%;
			}
			.group-title {
				padding-left: 0.25rem;
				&::before {
					bottom: 0;
					top: 0;
				}
			}
		}
		&.dark {
			border-color: rgb(82, 82, 82);
		}
	}
	.item {
		margin: 0.25rem;
		padding: 0.25rem 0.5rem;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		border-radius: 4px;
		color: black;

		&:hover {
			background-color: #7d7d7d24;
		}
		&.child {
			margin-left: 1rem;
		}
		&.dark {
			color: white;
		}
	}
</style>
