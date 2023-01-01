<script>
	import Brand from '$lib/components/Brand.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Socials from '$lib/components/Socials.svelte';
</script>

<svelte:head>
	<title>Ryoma | Home</title> 
</svelte:head>

<div class="terminal-wrapper">
	<div class="terminal-window">
		<div class="terminal-header">
			&gt;_
		</div>
		<div class="terminal-content">
			<p><Brand />echo ${'{'}<span class="typewriter">About_Me</span>{'}'}</p>
			<ul>
				<li>Hi! I'm Ryoma</li>
				<li>I'm studying computer science at the University of Pennsylvania</li>
				<li>Check out my projects <a href="/projects">here</a></li>
				<li>Feel free to reach out to me at: ryomah [at] seas.upenn.edu</li>
			</ul>
		</div>
		<div class="terminal-footer">
		<Navbar />
			<div class="socials-wrapper">
				<Socials />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.terminal-wrapper {
		@include full-center;
		overflow: hidden;
	}

	.terminal-window {
		font-family: var(--font-monospace);
		max-width: 800px;
		border: 3px solid var(--c-bg-elevated);
		border-radius: 15px;
		background-color: var(--c-bg);
		overflow: hidden;
	}

	.terminal-header {
		font-size: 2rem;
		font-family: Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace;
		font-weight: bold;
		text-align: center;
		background: var(--c-bg-elevated);
		padding: 10px 0;
	}

	.terminal-content {
		height: calc(100vh - 240px);
		max-height: 300px;
		padding: 30px;
		overflow-y: auto;

		/* text style */
		ul > li {
			list-style-type: none;
			line-height: 2rem;

			&:before {
				content: ">";
				margin-right: 0.5em;
			}
		}

		/* fade-in animation */
		ul {
			opacity: 0;
			transform: translateY(1rem);
			animation: fadeInUp 2s ease 2s forwards;
			@keyframes fadeInUp {
			to {
				opacity: 1;
				transform: translateY(0);
			}
			}
		}
	}

	.typewriter {
		color: var(--c-yellow);
		position: relative;
		width: max-content;
		--typewriter-speed: 1s;
		&::before, &::after {
			content: '';
			@include position-zero;
		}
		/* hides text to right of the blinking cursor */
		&::before {
			background: var(--c-bg);
			animation: typewriter var(--typewriter-speed) steps(12) 0.5s forwards;
		}
		/* blinking cursor */
		&::after {
			width: .125em;
			background: transparent;
			animation: typewriter var(--typewriter-speed) steps(12) 0.5s forwards,
				typeblink 750ms steps(6) 3;
		}

		@keyframes typewriter {
		to {
			left: 100%
		}
		}
		@keyframes typeblink {
		to {
			background-color: var(--c-cursor);
		}
		}
	}

	.terminal-footer {
		background-color: var(--c-bg-elevated);
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 100;

		.socials-wrapper {
			margin-right: 30px;
			@media (max-width: 360px) {
				visibility: hidden;
				opacity: 0;
			}
		}

	}
</style>

