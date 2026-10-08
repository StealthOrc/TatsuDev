<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center bg-gray-800 text-gray-200">
	{@render children()}
</div>
