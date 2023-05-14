<div>
	<slot />
</div>

<style lang="scss">
	div {
		width: 100%;
		padding: 1rem;
		margin: 0 auto;
		box-sizing: border-box;

		@media (min-width: 640px) {
			max-width: 640px;
			padding: 2rem;
		}

		@media (min-width: 768px) {
			max-width: 768px;
		}

		@media (min-width: 1024px) {
			max-width: 1024px;
			padding: 4rem;
		}

		@media (min-width: 1280px) {
			max-width: 1280px;
			padding: 5rem;
		}

		@media (min-width: 1536px) {
			max-width: 1536px;
			padding: 6rem;
		}
	}
</style>
