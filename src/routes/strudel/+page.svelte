<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
	<a href="/" class="hover:text-white hover:underline">Back to Home</a>
	<hr class="w-full border-gray-200" />
	{#each data.strudels as strudel}
		<strudel class="w-full hover:text-white hover:underline">
			<a href={strudel.url} target="_blank" class="text-lg"
				>{strudel.title}
				<p class="text-sm">{strudel.date}</p>
			</a>
		</strudel>
	{/each}
</div>
