<script>
	export let active;
</script>

<div class="list-icon-arrow" class:active>
	
</div>

<style type="less">
	.list-icon-arrow {
		width: 40px;
		height: 40px;
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		svg {
			width: 26px;
			height: 26px;
			transition: all 0.3s ease-in-out;
			transform: scale(0.8) rotateZ(-180deg);
		}
		&.active {
			svg {
				transform: scale(1) rotateZ(-270deg);
			}
		}
	}
</style>
