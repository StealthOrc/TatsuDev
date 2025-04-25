<script lang="ts">
  import { Twitter, Lightbulb, LightbulbOff } from 'lucide-svelte';
  let showRainbow = $state(true);
  function toggleRainbow() {
    showRainbow = !showRainbow
  }
  let isBtnHovered = $state(false);
</script>

<div class="h-full w-full bg-gray-800 flex flex-col items-center">
  <div class="rainbow-border transition duration-200" class:rainbow-anim={showRainbow}></div>
  <div class="flex flex-col h-full w-96 sm:min-w-48">
    <div class="flex-none w-full p-5 flex items-center justify-center">
      <div class="relative inline-block group">
        <div class="rainbow-border" class:rainbow-anim={showRainbow}></div>
        <div class="relative z-10 flex p-2 m-0.5 items-center justify-center text-center bg-gray-600 hover:bg-gray-600 rounded-full p-3 hover:p-4 duration-200 ease-in hover:p-2">
          <h1 class="text-3xl font-bold text-gray-200 duration-200 ease-in">@TatsuDev</h1>
        </div>
      </div>
    </div>
    <div class="flex-1 text-gray-200 text-wrap text-center">
      <p>Welcome to my little playground. </p>
      <p>We currently are under construction.</p>
      <p>I'm sorry, you've got nothing to see here just yet..</p>
      <div class="flex items-center justify-center p-5 cursor-hand">
        <a href="https://x.com/TatsuDeveloper">
          <Twitter class="text-white"/>
        </a>
      </div>
    </div>
    <div class="flex flex-none items-center justify-center pb-2">
      <button class="pt-5" 
        onclick={toggleRainbow} 
        onmouseenter={() => {isBtnHovered = true;}} 
        onmouseleave={() => {isBtnHovered = false;}}
      >
        <div class="p-2 rounded-lg bg-gray-600 hover:bg-gray-600/50 text-gray-200">
          {#if (showRainbow && !isBtnHovered) || (!showRainbow && isBtnHovered)}
            <LightbulbOff/>
          {:else}
            <Lightbulb/>
          {/if}
        </div>
      </button>
    </div>
    <footer class="flex-none w-full pb-5 text-gray-200 text-wrap text-center">
      <p>Made with Freude! :3</p>
    </footer>
  </div>
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
    #ff6b6b,   /* Soft Red */
    #ffb86b,   /* Soft Orange */
    #fff56b,   /* Soft Yellow */
    #6bffb8,   /* Soft Green */
    #6bcaff,   /* Soft Cyan */
    #6b6bff,   /* Soft Blue */
    #b86bff,   /* Soft Purple */
    #ff6bcf,   /* Soft Pink */
    #ff6b6b    /* Back to Soft Red */   
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
