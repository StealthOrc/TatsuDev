<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-full w-full flex-col items-center bg-gray-800 text-gray-200">
	{@render children()}
</div>
