<script lang="ts">
	import type { PageData } from './$types';
	import SiteShell from '$lib/SiteShell.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Strudel Collection — TatsuDev</title>
</svelte:head>

<SiteShell>
	<h1 class="text-3xl font-bold text-white">My Strudel Collection</h1>
	<ul class="flex w-full flex-col items-center gap-4">
		{#each data.strudels as strudel}
			<li class="w-full">
				<a
					href={strudel.url}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block text-lg hover:text-white hover:underline"
				>
					{strudel.title}
					<span class="block text-sm">{strudel.date}</span>
				</a>
			</li>
		{/each}
	</ul>
</SiteShell>
