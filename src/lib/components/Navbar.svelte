<script>
	import Brand from '$lib/components/Brand.svelte';
</script>

<nav>
	<Brand />
	<span>cd</span>
	<ul>
		<li><a href="/projects">projects/</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: var(--c-bg-elevated);
		display: flex;
		align-items: center;
		padding: 10px 30px;
		top: 0;
		position: sticky;
		z-index: 100;
	}
	
	ul {
		font-family: var(--font-monospace);
		margin-left: 15px;
		display: flex;
		gap: 15px;
		padding: 0;
	}

	li {
		list-style-type: none;
		color: var(--c-blue);

		&:hover {
			text-decoration: underline;
		}
	}
</style>

