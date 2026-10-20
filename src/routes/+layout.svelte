<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-gray-800 text-gray-200">
	{@render children()}
	{#if ['/diabolic','/smith'].includes($page.url.pathname)}<nav aria-label="Rechtliche Seiten" class="fixed bottom-2 left-2 z-50 flex gap-4 rounded-lg bg-gray-800/90 px-3 py-2 text-xs"><a class="underline underline-offset-4" href="/impressum">Impressum</a><a class="underline underline-offset-4" href="/datenschutz">Datenschutz</a></nav>{/if}
</div>
