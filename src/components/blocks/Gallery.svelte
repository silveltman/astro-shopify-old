<script lang="ts">
  import type { Image } from '@interfaces/shopify/common'
  import ImageShopify from '@components/atoms/ImageShopify.svelte'
  import AspectRatio from '@components/layouts/AspectRatio.svelte'
  export let images: Image[] = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0701/8256/8237/collections/Golf_Demos_1_2048x2048_f5fdfb1f-3a3b-4c52-9868-1ace35e8e427.jpg?v=1672771643',
      altText: 'Golf Demos',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0701/8256/8237/collections/Golf_Demos_1_2048x2048_f5fdfb1f-3a3b-4c52-9868-1ace35e8e427.jpg?v=1672771643',
      altText: 'Golf Demos',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0701/8256/8237/collections/Golf_Demos_1_2048x2048_f5fdfb1f-3a3b-4c52-9868-1ace35e8e427.jpg?v=1672771643',
      altText: 'Golf Demos',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0701/8256/8237/collections/Golf_Demos_1_2048x2048_f5fdfb1f-3a3b-4c52-9868-1ace35e8e427.jpg?v=1672771643',
      altText: 'Golf Demos',
    },
  ]

  let slider

  function scrollTo(index: number) {
    const { offsetWidth } = slider

    let left = offsetWidth * index
    slider.scrollTo({
      left,
    })
  }
</script>

<div class="relative w-full grid sm:grid-cols-[1fr_7fr] gap-sm max-w-2xl">
  <div class="hidden sm:flex flex-col justify-start gap-sm">
    {#each images as image, i}
      <button
        on:click={() => scrollTo(i)}
        class="flex overflow-hidden w-full aspect-w-1 aspect-h-1"
      >
        <ImageShopify
          class="h-full w-full object-cover rounded-md border border-neutral-200"
          {image}
        />
      </button>
    {/each}
  </div>
  <div
    bind:this={slider}
    class="flex w-full overflow-x-auto scrollbar-thin sm:scrollbar-track-gray-200 sm:scrollbar-thumb-gray-600 snap-x snap-mandatory"
  >
    {#each images as image}
      <AspectRatio class="w-full shrink-0 snap-start">
        <ImageShopify
          class="h-full w-full object-cover sm:rounded-md sm:border border-neutral-200"
          {image}
        />
      </AspectRatio>
    {/each}
  </div>
</div>
