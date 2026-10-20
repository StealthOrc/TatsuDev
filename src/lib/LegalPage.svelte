<script lang="ts">
 import SiteShell from '$lib/SiteShell.svelte';
 let { title, content }: { title: string; content: string } = $props();
</script>
<svelte:head><title>{title} · TatsuDev</title><meta name="robots" content="noindex"/></svelte:head>
<SiteShell><article lang="de" class="legal-document">{@html content}</article></SiteShell>
<style>
 .legal-document{text-align:left;max-width:52rem;margin:1rem auto 3rem;width:100%;line-height:1.8;overflow-wrap:anywhere}
 .legal-document :global(h1){font-size:clamp(1.8rem,5vw,2.5rem);font-weight:bold;line-height:1.3;margin-bottom:1.5rem;color:#f3f4f6}
 .legal-document :global(h2){font-size:1.4rem;font-weight:bold;margin:2rem 0 1rem;color:#d8b4fe}
 .legal-document :global(h3){font-size:1.1rem;font-weight:bold;margin:1.5rem 0 .75rem;color:#bae6fd}
 .legal-document :global(p){margin:.75rem 0}.legal-document :global(a){color:#93c5fd;text-decoration:underline;text-underline-offset:3px}
 .legal-document :global(table){display:block;overflow-x:auto;border-collapse:collapse;font-size:.8rem}
 .legal-document :global(th),.legal-document :global(td){padding:.75rem;text-align:left;vertical-align:top;border:1px solid #6b7280}
 .legal-document :global(.draft-note){border:1px solid #c084fc;padding:1rem;border-radius:.75rem}
</style>
