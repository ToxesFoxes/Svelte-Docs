<div class="markdown-body p-4">
	<slot name="markdown" />
</div>

<style type="less">
	@media (max-width: 768px) {
		.markdown-body {
			max-width: 100% !important;
			margin: 0 0 0 12px !important;
		}
	}
	.markdown-body {
		margin: 0 auto;
		max-width: 90%;
		background: transparent !important;
		transition: all .1s ease-in-out;
	}
</style>
