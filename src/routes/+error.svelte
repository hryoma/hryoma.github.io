<script lang="ts">
	import { page } from '$app/stores';

	const {
		status,
		error: { message }
	} = $page;
	const title = `${status}: ${message}`;
</script>

<svelte:head>
	<title>Ryoma | {title}</title>
</svelte:head>

<div>
	<h1>{status}</h1>
	<p>{message}</p>
	<a href="/">Return to Home</a>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	h1 {
		font-size: 5rem;
		margin-bottom: 0;
	}

	p {
		font-size: 1.5rem;
	}
</style>
