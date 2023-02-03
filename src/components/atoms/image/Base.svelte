<script lang="ts">
  import AspectRatio from '@components/layout/AspectRatio.svelte'

  export let src: string
  export let alt: string
  export let sizes: string
  export let srcset: string
  export let fit: string
  export let position: string
  export let aspectRatio: number
  let className: string
  export { className as class }
</script>

{#if aspectRatio}
  <AspectRatio
    class={className}
    ratio={aspectRatio}
  >
    <img
      {sizes}
      {src}
      {alt}
      {srcset}
      loading="lazy"
      class="w-full h-full"
      style="object-fit:{fit};object-position:{position}"
    />
  </AspectRatio>
{:else}
  <img
    {sizes}
    {src}
    {alt}
    {srcset}
    loading="lazy"
    class={className}
  />
{/if}
