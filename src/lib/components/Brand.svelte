<script lang="ts">
	import { base } from '$app/paths';
</script>

<span class="brand-wrapper">
	<a href={`${base}/`} class="brand">
		<span class="green">ryoma</span>:<span class="purple">~</span>$
	</a>
</span>

<style lang="scss">
	.brand-wrapper {
		margin-right: 15px;
	}

	.brand {
		font-family: var(--font-monospace);
		font-weight: bold;
		color: var(--c-white);

		&:hover {
			text-decoration: none;
			filter: drop-shadow(0 0 1px var(--c-blue));
		}
	}

	.green {
		color: var(--c-green);
	}

	.purple {
		color: var(--c-magenta);
	}
</style>
