<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { projects } from './data';

	const colors = {
		field: 'magenta',
		framework: 'yellow',
		language: 'green',
		tech: 'blue'
	};
</script>

<svelte:head>
	<title>Ryoma | Projects</title>
</svelte:head>

<Container>
	<h1>Projects</h1>

	<div class="layout">
		{#each projects as project}
			<div class="card">
				<div class="card-left">
					<img src={project.image} alt={project.title} />
				</div>
				<div class="card-right">
					<h3>{project.title}</h3>
					<span class="date">
						<small>{project.startDate} to {project.endDate}</small>
					</span>
					<p>{project.desc}</p>
					<div class="tags">
						{#each Object.entries(project.tags) as [category, tags]}
							{#each tags as tag}
								<span style="color: var(--c-{colors[category]})">
									<small>{tag}</small>
								</span>
							{/each}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Container>

<style lang="scss">
	.layout {
		display: flex;
		flex-flow: row wrap;
		gap: 60px;
		justify-content: center;
	}

	.card {
		margin: 0 auto;
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-flow: row nowrap;
		gap: 10px 15px;
		justify-content: center;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	.card-left {
		flex: 1;
		width: 200px;
		max-width: 200px;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		margin: 0 auto;

		img {
			display: block;
			height: 180px;
			width: 180px;
			border-radius: 5px;
			object-fit: cover;
			margin: 0 auto;
		}
	}

	.card-right {
		flex: 1;

		@media (max-width: 768px) {
			width: auto;
			min-width: 200px;
		}

		h3 {
			margin: 0;
		}

		.date {
			color: var(--c-text-mute);
		}
	}

	.tags {
		display: flex;
		flex-flow: row wrap;
		gap: 7px 7px;
		span {
			background-color: var(--c-bg-elevated);
			border-radius: 10px;
			padding: 0 8px;
		}
	}
</style>
