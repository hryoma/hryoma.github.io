<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
</script>

<footer>
	Ryoma © {new Date().getFullYear()}
	<br/>
	<br/>
	<Socials />
</footer>

<style lang="scss">
	footer {
		background: var(--c-bg-elevated);
		margin-top: 120px;
		bottom: 0;
		text-align: center;
		padding: 60px;
	}
</style>

