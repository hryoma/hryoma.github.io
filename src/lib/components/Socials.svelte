<script>
	const iconDir = 'icons/';
	const socials = [
		{
			link: "https://github.com/hryoma",
			name: "github",
			icon: `${iconDir}github.png`,
		},
		{
			link: "https://www.linkedin.com/in/ryomah",
			name: "linkedin",
			icon: `${iconDir}linkedin.png`,
		}
	];
</script>

<div>
	{#each socials as social}
		<a href={social.link} target="_blank" rel="noopener noreferrer">
			<img src={social.icon} alt={social.name} />
		</a>
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 15px;
		justify-content: center;
	}

	img {
		width: 1.2rem;
		height: 1.2rem;
		transition: all ease-in-out 0.15s;
		filter: brightness(0.75);

		&:hover {
			filter: brightness(1);
		}
	}
</style>
