<script lang="ts">
  import Icon from '@components/atoms/Icon.svelte'

  // let slider

  // function scroll(direction: -1 | 1) {
  //   const { offsetWidth } = slider

  //   let left = offsetWidth * direction
  //   slider.scrollBy({
  //     left,
  //     behavior: 'smooth',
  //   })
  // }
</script>

<div class="relative">
  <!-- {#if true}
    <button
      class="absolute top-0 left-0 z-10 flex items-center h-full p-2"
      on:click={() => scroll(-1)}
    >
      <Icon name="chevron_left" />
    </button>
  {/if} -->

  <ul
    class="flex w-full overflow-x-auto gap-x scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 snap-x snap-mandatory [&>*]:!basis-1 [&>*]:!min-w-[300px] [&>*]:snap-start [&>*]:grow"
  >
    <slot />
  </ul>

  <!-- {#if true}
    <button
      class="absolute top-0 right-0 z-10 flex items-center h-full p-2"
      on:click={() => scroll(-1)}
    >
      <Icon name="chevron_right" />
    </button>
  {/if} -->
</div>
