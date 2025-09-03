<script lang="ts">
	import { Twitter, Lightbulb, LightbulbOff } from 'lucide-svelte';
	let showRainbow = $state(true);
	function toggleRainbow() {
		showRainbow = !showRainbow;
	}
	let isBtnHovered = $state(false);
</script>

<div class="rainbow-border transition duration-200" class:rainbow-anim={showRainbow}></div>
<div class="flex h-full w-96 flex-col sm:min-w-48">
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
	<div class="flex-1 space-y-4 text-wrap text-center">
		<p>Welcome to my little playground.</p>
		<p>We currently are under construction.</p>
		<p>I'm sorry, you've got nothing to see here just yet..</p>

		<!-- Quick Links -->
		<div class="p-3">
			<div class="group relative inline-block">
				<div class="rainbow-border" class:rainbow-anim={showRainbow}></div>
				<div
					class="relative z-10 m-0.5 flex items-center justify-center rounded-full bg-gray-600 p-2 p-3 text-center text-gray-200 duration-200 ease-in hover:bg-gray-600/50"
				>
					<a href="/resume" class="inline-block px-6 py-2"> View Resume </a>
				</div>
			</div>
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
</style>
