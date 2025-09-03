<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-full flex-col items-center justify-center gap-4">
	<a href="/" class="hover:text-white hover:underline">Back to Home</a>
	<hr class="w-full border-gray-200" />
	<strudel class="hover:text-white hover:underline">
		<a
			href="https://strudel.cc/#c2V0Q3BzKDE0MC82MC80KQoKJDogcygic2JkITQiKQouX3B1bmNoY2FyZCgpCiQyOiBzKCJjYiExIikKLl9wdW5jaGNhcmQoKQoKJGJhc3M6IG4oaXJhbmQoMTApLnN1YigyKS5zZWcoMTYpKS5zY2FsZSgiYzpyaXR1c2VuIikKLnNjYWxlVHJhbnNwb3NlKCI8MCAtMSAtNCAtMiAtNCAtNSAtNiAtND4iKQoucygiPHNhd3Rvb3RoIHNhd3Rvb3RoOjwzMiA2NCA1MCAxMjg%2BPiIpLmxwZihzbGlkZXIoMTMwMDAsMCwxNjAwMCwxMDApKQoucm9vbSguNykKLmNvbG9yKCJjeWFuIG1hZ2VudGEiKS5fc2NvcGUoKQoKJHN5bnRoOiBjaG9yZCgiPEZeNyBHNyBFbTcgQW03PiIpLnZvaWNpbmcoKQo%3D"
			target="_blank"
			class="text-lg"
			>Bored Strudel
			<p class="text-sm">2025-09-04</p>
		</a>
	</strudel>
</div>
