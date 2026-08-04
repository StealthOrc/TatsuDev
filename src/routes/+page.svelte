<script lang="ts">
	import { Twitter, Lightbulb, LightbulbOff } from 'lucide-svelte';
	let showRainbow = $state(true);
	function toggleRainbow() {
		showRainbow = !showRainbow;
	}
	let isBtnHovered = $state(false);
</script>

<div class="rainbow-border transition duration-200" class:rainbow-anim={showRainbow}></div>
<div class="flex h-full w-full max-w-3xl flex-col px-4 sm:min-w-48">
	<div class="flex w-full flex-none flex-col items-center justify-center gap-4 p-5">
		<!-- Logo -->
		<div class="group relative h-32 w-32">
			<img
				src="/TatsuDev.svg"
				alt="TatsuDev Logo"
				class="h-full w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
			/>
		</div>

		<!-- Name Badge -->
	</div>
	<div class="flex-1 space-y-8 text-wrap text-center">
		<p>Welcome to my little playground.</p>

		<div class="games-list mt-6 grid gap-4 px-4 pb-3 sm:grid-cols-2">
			<a
				href="https://tatsudev.itch.io/less-space"
				target="_blank"
				rel="noopener noreferrer"
				class="game-banner group relative block aspect-video w-full overflow-hidden rounded-lg bg-[#100b18] shadow-[0_0_28px_rgba(107,202,255,0.28)] ring-2 ring-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_42px_rgba(107,202,255,0.48)] hover:ring-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)]"
				aria-label="Play Less Space on itch.io"
			>
				<img
					src="/less-space-cover.png"
					alt="Less Space"
					class="h-full w-full object-cover object-[center_35%] transition duration-300 ease-out group-hover:scale-105 group-hover:saturate-125"
				/>
				<span
					class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100"
				></span>
			</a>

			<a
				href="https://stealthorc.itch.io/pachiiingko"
				target="_blank"
				rel="noopener noreferrer"
				class="game-banner group relative block aspect-video w-full overflow-hidden rounded-lg bg-[#15182f] shadow-[0_0_28px_rgba(255,220,0,0.28)] ring-2 ring-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_42px_rgba(255,220,0,0.48)] hover:ring-yellow-300/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
				aria-label="Play PACHIIINGKO"
			>
				<img
					src="/pachiiingko-banner.png"
					alt="PACHIIINGKO"
					class="group-hover:saturate-125 h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
				/>
				<span
					class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100"
				></span>
			</a>

			<a
				href="https://hit-it.tatsudev.net"
				target="_blank"
				rel="noopener noreferrer"
				class="game-banner group relative block aspect-video w-full overflow-hidden rounded-lg bg-black shadow-[0_0_28px_rgba(255,255,255,0.22)] ring-2 ring-white/10 transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_42px_rgba(255,255,255,0.42)] hover:ring-white/70 focus:outline-none focus:ring-2 focus:ring-white"
				aria-label="Play HIT-IT: Squares and Triangles"
			>
				<img
					src="/hit-it-banner.png"
					alt="HIT-IT: Squares and Triangles"
					class="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:contrast-125"
				/>
				<span
					class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0 opacity-0 transition duration-300 group-hover:opacity-100"
				></span>
			</a>
		</div>

		<a href="/strudel" class="p-3 hover:text-white hover:underline"> My Strudel Collection</a>

		<div class="cursor-hand flex items-center justify-center p-5">
			<a href="https://x.com/TatsuDeveloper">
				<Twitter class="text-white" />
			</a>
		</div>
	</div>
	<div class="flex flex-none items-center justify-center pb-2">
		<button
			class="pt-5"
			onclick={toggleRainbow}
			onmouseenter={() => {
				isBtnHovered = true;
			}}
			onmouseleave={() => {
				isBtnHovered = false;
			}}
		>
			<div class="rounded-lg bg-gray-600 p-2 text-gray-200 hover:bg-gray-600/50">
				{#if (showRainbow && !isBtnHovered) || (!showRainbow && isBtnHovered)}
					<LightbulbOff />
				{:else}
					<Lightbulb />
				{/if}
			</div>
		</button>
	</div>
	<footer class="w-full flex-none text-wrap pb-5 text-center text-gray-200">
		<p>Made with Freude! :3</p>
	</footer>
</div>

<style>
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

	.game-banner {
		animation: banner-pop 700ms ease-out both;
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

	@keyframes banner-pop {
		from {
			opacity: 0;
			transform: translateY(10px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
