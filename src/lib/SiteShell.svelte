<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Lightbulb, LightbulbOff } from 'lucide-svelte';
	let { children }: { children: Snippet } = $props();
	let showRainbow = $state(true);
	function toggleRainbow() {
		showRainbow = !showRainbow;
	}
	let isBtnHovered = $state(false);
</script>

<div class="page-shell">
	<div class="rainbow-border transition duration-200" class:rainbow-anim={showRainbow}></div>
	<div class="page-layout flex min-h-screen w-full max-w-5xl flex-col px-4 sm:min-w-48">
		<!-- Logo -->
		<header class="flex w-full flex-none items-center justify-center py-2">
			<a href="/" aria-label="TatsuDev home" class="site-logo group relative">
				<img
					src="/TatsuDev.svg"
					alt="TatsuDev Logo"
					class="block h-auto w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
				/>
			</a>
		</header>
		<main class="page-content flex-1 text-wrap text-center">
			{@render children()}
		</main>
		<footer
			class="flex w-full flex-none flex-col items-center gap-3 text-wrap pb-5 text-center text-gray-200"
		>
			<button
				aria-label={showRainbow ? 'Turn lights off' : 'Turn lights on'}
				title={showRainbow ? 'Turn lights off' : 'Turn lights on'}
				class="rounded-lg bg-gray-600 p-2 text-gray-200 transition-colors hover:bg-gray-600/50"
				onclick={toggleRainbow}
				onmouseenter={() => {
					isBtnHovered = true;
				}}
				onmouseleave={() => {
					isBtnHovered = false;
				}}
			>
				{#if (showRainbow && !isBtnHovered) || (!showRainbow && isBtnHovered)}
					<LightbulbOff />
				{:else}
					<Lightbulb />
				{/if}
			</button>
			<p>Made with Freude! :3</p>
<nav aria-label="Rechtliche Seiten" class="flex flex-wrap justify-center gap-5 text-sm"><a class="underline underline-offset-4 hover:text-purple-300" href="/impressum">Impressum</a><a class="underline underline-offset-4 hover:text-purple-300" href="/datenschutz">Datenschutz</a></nav>
		</footer>
	</div>
</div>

<style>
	.page-shell {
		position: relative;
		isolation: isolate;
		display: flex;
		min-height: 100vh;
		width: 100%;
		justify-content: center;
	}

	.page-layout {
		position: relative;
		z-index: 1;
	}

	.site-logo {
		width: min(100%, 12rem);
		padding: 0.5rem 0.75rem;
	}

	.rainbow-border {
		position: absolute;
		inset: 0;
		z-index: 0;
		border-radius: 1.5rem; /* matches Tailwind's rounded-lg */
		padding: 6px; /* border thickness */
		background: conic-gradient(
			from 0deg,
			#ff6b6b,
			/* Soft Red */ #ffb86b,
			/* Soft Orange */ #fff56b,
			/* Soft Yellow */ #6bffb8,
			/* Soft Green */ #6bcaff,
			/* Soft Cyan */ #6b6bff,
			/* Soft Blue */ #b86bff,
			/* Soft Purple */ #ff6bcf,
			/* Soft Pink */ #ff6b6b /* Back to Soft Red */
		);
		/* Show only the border using masking */
		-webkit-mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		mask:
			linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		/* Animate the background's position for a moving effect */
		background-size: 200% 200%;
		background-position: 0% 50%;
		transition: background-position 0.5s;
		pointer-events: none;
	}

	.rainbow-anim {
		animation: rainbow-rotate 2s ease infinite;
	}

	.page-content {
		display: flex;
		flex-direction: column;
		gap: clamp(0.875rem, 2vh, 1.25rem);
		width: 100%;
		padding-block: 0.5rem 0.75rem;
	}

	@keyframes rainbow-rotate {
		0% {
			background-position: 0% 50%;
		}
		25% {
			background-position: 100% 100%;
		}
		50% {
			background-position: 50% 0%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@media (max-width: 640px) {
		.page-content {
			padding-top: 0.25rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.rainbow-anim {
			animation: none;
		}
	}
</style>
