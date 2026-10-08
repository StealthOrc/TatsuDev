<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { cubicOut } from 'svelte/easing';
	import { ChevronRight, Lightbulb, LightbulbOff } from 'lucide-svelte';
	let showRainbow = $state(true);
	function toggleRainbow() {
		showRainbow = !showRainbow;
	}
	let isBtnHovered = $state(false);
	const otherGames = [
		{
			title: 'Less Space',
			href: 'https://tatsudev.itch.io/less-space',
			image: '/less-space-cover.png',
			alt: 'Less Space pixel art cover',
			objectPosition: 'center 30%'
		},
		{
			title: 'HIT-IT: Squares and Triangles',
			href: 'https://hit-it.tatsudev.net',
			image: '/hit-it-banner.png',
			alt: 'HIT-IT: Squares and Triangles game banner'
		},
		{
			title: 'PACHIIINGKO',
			href: 'https://stealthorc.itch.io/pachiiingko',
			image: '/pachiiingko-banner.png',
			alt: 'PACHIIINGKO game banner'
		}
	];
	let activeGameIndex = $state(0);
	let wrappingGameTitle = $state('');
	let prefersReducedMotion = $state(false);
	let galleryTransitionDuration = $derived(prefersReducedMotion ? 0 : 280);
	let wrappingResetTimeout: ReturnType<typeof setTimeout> | undefined;
	let swipeStartX: number | null = null;
	let ignoreGalleryClick = false;
	let visibleGames = $derived(
		[-1, 0, 1].map((offset) => {
			const index = (activeGameIndex + offset + otherGames.length) % otherGames.length;
			return otherGames[index];
		})
	);

	onMount(() => {
		const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updateMotionPreference = () => (prefersReducedMotion = motionPreference.matches);

		updateMotionPreference();
		motionPreference.addEventListener('change', updateMotionPreference);

		return () => {
			motionPreference.removeEventListener('change', updateMotionPreference);
			if (wrappingResetTimeout) clearTimeout(wrappingResetTimeout);
		};
	});

	function changeGame(direction: number) {
		const wrappingOffset = direction > 0 ? -1 : 1;
		const wrappingIndex =
			(activeGameIndex + wrappingOffset + otherGames.length) % otherGames.length;

		wrappingGameTitle = otherGames[wrappingIndex].title;
		activeGameIndex = (activeGameIndex + direction + otherGames.length) % otherGames.length;

		if (wrappingResetTimeout) clearTimeout(wrappingResetTimeout);
		wrappingResetTimeout = setTimeout(() => {
			wrappingGameTitle = '';
			wrappingResetTimeout = undefined;
		}, galleryTransitionDuration + 50);
	}

	function startGallerySwipe(event: PointerEvent) {
		swipeStartX = event.clientX;
	}

	function endGallerySwipe(event: PointerEvent) {
		if (swipeStartX === null) return;

		const swipeDistance = event.clientX - swipeStartX;
		swipeStartX = null;

		if (Math.abs(swipeDistance) > 48) {
			event.preventDefault();
			ignoreGalleryClick = true;
			setTimeout(() => (ignoreGalleryClick = false), 300);
			changeGame(swipeDistance < 0 ? 1 : -1);
		}
	}

	function preventClickAfterSwipe(event: MouseEvent) {
		if (!ignoreGalleryClick) return;

		event.preventDefault();
		event.stopPropagation();
		ignoreGalleryClick = false;
	}

	function selectSideGame(event: MouseEvent, direction: number) {
		if (ignoreGalleryClick) {
			preventClickAfterSwipe(event);
			return;
		}

		changeGame(direction);
	}

	function cancelGallerySwipe() {
		swipeStartX = null;
	}
</script>

<div class="page-shell">
	<div class="rainbow-border transition duration-200" class:rainbow-anim={showRainbow}></div>
	<div class="page-layout flex min-h-screen w-full max-w-5xl flex-col px-4 sm:min-w-48">
		<!-- Logo -->
		<header class="flex w-full flex-none items-center justify-center py-2">
			<div class="site-logo group relative">
				<img
					src="/TatsuDev.svg"
					alt="TatsuDev Logo"
					class="block h-auto w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
				/>
			</div>
		</header>
		<main class="page-content flex-1 text-wrap text-center">
			<section
				class="current-game-section space-y-3 sm:space-y-4"
				aria-labelledby="current-game-heading"
			>
				<h1 id="current-game-heading" class="section-heading">My current game in development</h1>
				<div class="featured-game-frame">
					<a
						href="https://tatsudev.itch.io/diabolic"
						target="_blank"
						rel="noopener noreferrer"
						class="featured-game group"
						aria-label="Play the Diabolic demo on itch.io"
					>
						<img src="/diabolic-banner.png" alt="Diabolic in a dark dungeon" />
						<span class="featured-game-shade" aria-hidden="true"></span>
						<span class="featured-game-status">In development</span>
						<span class="featured-game-action">
							Play demo <ChevronRight size={16} aria-hidden="true" />
						</span>
					</a>
				</div>
			</section>

			<section
				class="other-games-section space-y-3 sm:space-y-4"
				aria-labelledby="other-games-heading"
			>
				<h2 id="other-games-heading" class="section-heading">My other games</h2>
				<div class="game-gallery" role="region" aria-label="Other games gallery">
					<div
						class="game-gallery-track"
						onpointerdown={startGallerySwipe}
						onpointerup={endGallerySwipe}
						onpointercancel={cancelGallerySwipe}
					>
						{#each visibleGames as game, slot (game.title)}
							<article
								class="game-gallery-slide"
								class:is-active={slot === 1}
								class:is-wrapping={game.title === wrappingGameTitle}
								animate:flip={{ duration: galleryTransitionDuration, easing: cubicOut }}
							>
								<div class="gallery-artwork">
									{#if slot === 1}
										<a
											href={game.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Play ${game.title}`}
											class="gallery-game group"
											onclick={preventClickAfterSwipe}
										>
											<img
												src={game.image}
												alt={game.alt}
												style:object-position={game.objectPosition ?? 'center'}
											/>
										</a>
									{:else}
										<button
											type="button"
											aria-label={`Show ${game.title} in the center`}
											class="gallery-game group"
											onclick={(event) => selectSideGame(event, slot === 0 ? -1 : 1)}
										>
											<img
												src={game.image}
												alt={game.alt}
												style:object-position={game.objectPosition ?? 'center'}
											/>
										</button>
									{/if}
								</div>
								<p class="gallery-game-title">{game.title}</p>
							</article>
						{/each}
					</div>
				</div>
			</section>

			<a href="/strudel" class="strudel-link">My Strudel Collection</a>

			<div class="flex items-center justify-center py-2">
				<a
					href="https://x.com/TatsuDev_x3"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit TatsuDev on X"
					class="tweet-bird group"
				>
					<svg class="bird" viewBox="0 0 48 48" aria-hidden="true">
						<defs>
							<clipPath id="bird-body-clip">
								<path
									d="M8 13.5c5.3-1.8 10.1-1.2 14.1 1.2 2.4-3.3 6.6-5.5 11.1-5.5-.6 2.6-1.9 4.6-3.8 6 4.5.6 7.3 3.6 8.2 7.8l-6.1-1.3c.5 7-3.7 12.8-11.8 14.4-4.8.9-9-.4-12.3-3.3 4.3.3 7.3-.8 9.2-2.5-3.8-.3-6.4-2.6-7.3-5.6 1.2.3 2.3.3 3.4 0-3.6-1.5-5.2-4.7-4.7-8.1 1 .7 2.1 1.1 3.2 1.3-1.4-1.1-2.4-2.6-3.2-4.4Z"
								/>
							</clipPath>
						</defs>
						<path
							class="bird-outline"
							d="M8 13.5c5.3-1.8 10.1-1.2 14.1 1.2 2.4-3.3 6.6-5.5 11.1-5.5-.6 2.6-1.9 4.6-3.8 6 4.5.6 7.3 3.6 8.2 7.8l-6.1-1.3c.5 7-3.7 12.8-11.8 14.4-4.8.9-9-.4-12.3-3.3 4.3.3 7.3-.8 9.2-2.5-3.8-.3-6.4-2.6-7.3-5.6 1.2.3 2.3.3 3.4 0-3.6-1.5-5.2-4.7-4.7-8.1 1 .7 2.1 1.1 3.2 1.3-1.4-1.1-2.4-2.6-3.2-4.4Z"
						/>
						<rect
							class="bird-fill"
							x="0"
							y="0"
							width="48"
							height="48"
							clip-path="url(#bird-body-clip)"
						/>
						<path class="beak" d="m31.5 18.2 8.8 2.4-8 2.1Z" />
						<path class="beak-open" d="m31.5 17.8 8.8 2.8-8.6.6Zm-.1 5.1 8.1 2.6-8.1-1Z" />
						<circle class="bird-eye" cx="30.2" cy="15.2" r="1.05" />
						<g
							class="sound-lines"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-width="2"
						>
							<path class="sound-wave sound-wave-hidden" d="M40.5 16.5q3.5 3.5 0 7" />
							<path class="sound-wave sound-wave-soft" d="M42 14q6 6 0 12" />
							<path class="sound-wave sound-wave-medium" d="M43 11q9 9 0 18" />
							<path class="sound-wave sound-wave-strong" d="M44 8q12 12 0 24" />
						</g>
					</svg>
					<span class="speech-bubble" aria-hidden="true">
						Follow me on X for more frequent updates on my games.
					</span>
				</a>
			</div>
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

	.game-banner {
		animation: banner-pop 700ms ease-out both;
	}

	.page-content {
		display: flex;
		flex-direction: column;
		gap: clamp(0.875rem, 2vh, 1.25rem);
		width: 100%;
		padding-block: 0.5rem 0.75rem;
	}

	.section-heading {
		color: #fff;
		font-size: clamp(1.35rem, 2.6vw, 1.9rem);
		font-weight: 700;
		letter-spacing: -0.035em;
		line-height: 1.15;
	}

	.featured-game-frame {
		width: 40%;
		max-width: 28rem;
		margin-inline: auto;
	}

	.featured-game {
		position: relative;
		display: block;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		border-radius: 1rem;
		background: #120d0a;
		box-shadow:
			0 0 0 2px rgb(237 190 99 / 0.52),
			0 22px 60px rgb(0 0 0 / 0.44);
		transition:
			transform 250ms ease,
			box-shadow 250ms ease;
	}

	.featured-game > img {
		position: absolute;
		top: -16%;
		left: 0;
		width: 100%;
		height: 116%;
		object-fit: cover;
		object-position: center;
		transition: transform 500ms ease;
	}

	.featured-game-shade {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 42%, rgb(7 7 10 / 0.74) 100%);
		pointer-events: none;
	}

	.featured-game-status,
	.featured-game-action {
		position: absolute;
		bottom: 0.9rem;
		z-index: 1;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.featured-game-status {
		left: 1rem;
		color: #f2d18f;
	}

	.featured-game-action {
		right: 0.9rem;
		display: inline-flex;
		align-items: center;
		gap: 0.15rem;
		color: #fff;
		transition: gap 180ms ease;
	}

	.featured-game:hover,
	.featured-game:focus-visible {
		transform: translateY(-3px) scale(1.02);
		box-shadow:
			0 0 0 2px rgb(250 215 143 / 0.82),
			0 28px 72px rgb(0 0 0 / 0.56);
	}

	.featured-game:hover > img,
	.featured-game:focus-visible > img {
		transform: scale(1.04);
	}

	.featured-game:hover .featured-game-action,
	.featured-game:focus-visible .featured-game-action {
		gap: 0.4rem;
	}

	.game-gallery {
		width: 100%;
		max-width: 52rem;
		margin-inline: auto;
	}

	.game-gallery-track {
		display: grid;
		grid-template-columns: 30% 40% 30%;
		align-items: center;
		touch-action: pan-y;
		user-select: none;
	}

	.game-gallery-slide {
		position: relative;
		z-index: 1;
		min-width: 0;
		padding-inline: 0.45rem;
	}

	.game-gallery-slide.is-active {
		z-index: 3;
	}

	.game-gallery-slide.is-wrapping {
		z-index: 0;
	}

	.gallery-artwork {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		perspective: 900px;
	}

	.gallery-game {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		padding: 0;
		border: 0;
		overflow: hidden;
		border-radius: 0.85rem;
		background: #100b18;
		color: inherit;
		font: inherit;
		text-align: left;
		appearance: none;
		cursor: pointer;
		box-shadow: 0 8px 26px rgb(0 0 0 / 0.32);
		transition:
			transform 220ms ease,
			box-shadow 220ms ease;
	}

	.gallery-game > img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition:
			transform 360ms ease,
			filter 220ms ease;
	}

	.gallery-game:hover,
	.gallery-game:focus-visible {
		z-index: 1;
		transform: translateY(-3px);
		box-shadow: 0 14px 34px rgb(0 0 0 / 0.5);
	}

	.gallery-game:hover > img,
	.gallery-game:focus-visible > img {
		transform: scale(1.045);
		filter: saturate(1.12);
	}

	.gallery-game-title {
		margin-top: 0.55rem;
		color: rgb(255 255 255 / 0.68);
		font-size: 0.78rem;
		font-weight: 600;
		line-height: 1.3;
		transition: color 180ms ease;
	}

	.game-gallery-slide.is-active .gallery-game-title {
		color: #fff;
	}

	.strudel-link {
		margin-top: clamp(1.5rem, 3.5vh, 2rem);
		color: rgb(255 255 255 / 0.68);
		font-size: 0.92rem;
		transition: color 180ms ease;
	}

	.strudel-link:hover,
	.strudel-link:focus-visible {
		color: #fff;
		text-decoration: underline;
	}

	.tweet-bird {
		--bird-color: #1d9bf0;
		--bird-size: 2rem;
		position: relative;
		display: inline-flex;
		color: #fff;
		cursor: pointer;
		outline-offset: 5px;
		z-index: 1;
	}

	.bird {
		display: block;
		width: var(--bird-size);
		height: var(--bird-size);
		overflow: visible;
		transition: transform 180ms ease;
	}

	.bird-outline {
		fill: transparent;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linejoin: round;
		transition: stroke 160ms ease;
	}

	.bird-fill {
		fill: var(--bird-color);
		transform: scale(0);
		transform-origin: 24px 24px;
		transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.beak,
	.beak-open {
		fill: #fff;
		stroke: #111827;
		stroke-width: 0.65;
		stroke-linejoin: round;
	}

	.beak-open {
		opacity: 0;
	}

	.bird-eye {
		fill: currentColor;
	}

	.sound-wave {
		opacity: 0;
	}

	.sound-wave-soft {
		--wave-peak: 0.3;
	}

	.sound-wave-medium {
		--wave-peak: 0.6;
	}

	.sound-wave-strong {
		--wave-peak: 1;
	}

	.speech-bubble {
		position: absolute;
		left: calc(100% + 0.9rem);
		bottom: calc(100% - 1.25rem);
		width: max-content;
		max-width: min(18rem, calc(100vw - 3rem));
		padding: 0.65rem 0.85rem;
		border: 1px solid rgb(255 255 255 / 0.35);
		border-radius: 0.9rem;
		background: #fff;
		box-shadow: 0 8px 24px rgb(0 0 0 / 0.3);
		color: #171717;
		font-size: 0.8rem;
		font-weight: 600;
		line-height: 1.35;
		text-align: left;
		white-space: normal;
		opacity: 0;
		transform: translate(-0.4rem, 0.35rem) scale(0.94);
		transform-origin: bottom left;
		transition:
			opacity 180ms ease,
			transform 180ms ease;
		pointer-events: none;
	}

	.speech-bubble::after {
		position: absolute;
		top: calc(100% - 0.7rem);
		left: -1px;
		width: 0;
		height: 0;
		border-top: 0.42rem solid transparent;
		border-right: 0.72rem solid #fff;
		border-bottom: 0.42rem solid transparent;
		content: '';
	}

	.tweet-bird:hover .speech-bubble,
	.tweet-bird:focus-visible .speech-bubble {
		opacity: 1;
		transform: translate(0, 0) scale(1);
	}

	.tweet-bird:hover .bird,
	.tweet-bird:focus-visible .bird {
		transform: scale(1.12) rotate(-4deg);
	}

	.tweet-bird:hover .bird-fill,
	.tweet-bird:focus-visible .bird-fill {
		transform: scale(1);
	}

	.tweet-bird:hover .bird-outline,
	.tweet-bird:focus-visible .bird-outline {
		stroke: var(--bird-color);
	}

	.tweet-bird:hover .beak,
	.tweet-bird:focus-visible .beak {
		animation: beak-chatter 420ms steps(2, end) infinite;
	}

	.tweet-bird:hover .beak-open,
	.tweet-bird:focus-visible .beak-open {
		animation: beak-chatter-open 420ms steps(2, end) infinite;
	}

	.tweet-bird:hover .sound-wave-soft,
	.tweet-bird:focus-visible .sound-wave-soft {
		animation: sound-wave 900ms linear infinite;
	}

	.tweet-bird:hover .sound-wave-medium,
	.tweet-bird:focus-visible .sound-wave-medium {
		animation: sound-wave 900ms linear 220ms infinite;
	}

	.tweet-bird:hover .sound-wave-strong,
	.tweet-bird:focus-visible .sound-wave-strong {
		animation: sound-wave 900ms linear 440ms infinite;
	}

	@keyframes beak-chatter {
		0%,
		49% {
			opacity: 1;
		}
		50%,
		100% {
			opacity: 0;
		}
	}

	@keyframes beak-chatter-open {
		0%,
		49% {
			opacity: 0;
		}
		50%,
		100% {
			opacity: 1;
		}
	}

	@keyframes sound-wave {
		0%,
		33%,
		100% {
			opacity: 0;
		}
		12%,
		30% {
			opacity: var(--wave-peak);
		}
		31% {
			opacity: 0;
		}
	}

	@media (max-width: 640px) {
		.page-content {
			padding-top: 0.25rem;
		}

		.featured-game-frame {
			width: 100%;
		}

		.game-gallery-track {
			grid-template-columns: 22% 56% 22%;
		}

		.game-gallery-slide {
			padding-inline: 0.2rem;
		}

		.game-gallery-slide:not(.is-active) .gallery-game-title {
			display: none;
		}

		.featured-game-status,
		.featured-game-action {
			bottom: 0.7rem;
			font-size: 0.65rem;
		}

		.featured-game-status {
			left: 0.7rem;
		}

		.featured-game-action {
			right: 0.6rem;
		}
	}

	@media (max-width: 360px) {
		.speech-bubble {
			left: 50%;
			bottom: calc(100% + 0.85rem);
			max-width: calc(100vw - 3rem);
			transform-origin: bottom center;
		}

		.speech-bubble::after {
			top: 100%;
			left: calc(50% - 0.42rem);
			border-top: 0.62rem solid #fff;
			border-right: 0.42rem solid transparent;
			border-bottom: 0;
			border-left: 0.42rem solid transparent;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bird,
		.bird-fill,
		.bird-outline,
		.featured-game,
		.featured-game > img,
		.featured-game-action,
		.gallery-game,
		.gallery-game > img,
		.gallery-game-title {
			transition: none;
		}

		.tweet-bird:hover .beak,
		.tweet-bird:focus-visible .beak,
		.tweet-bird:hover .beak-open,
		.tweet-bird:focus-visible .beak-open,
		.tweet-bird:hover .sound-wave-soft,
		.tweet-bird:focus-visible .sound-wave-soft,
		.tweet-bird:hover .sound-wave-medium,
		.tweet-bird:focus-visible .sound-wave-medium,
		.tweet-bird:hover .sound-wave-strong,
		.tweet-bird:focus-visible .sound-wave-strong {
			animation: none;
		}
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
