<script lang="ts">
  import AspectRatio from '@components/layout/AspectRatio.svelte'

  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'
  export let size: 'sm' | 'md' | 'lg' | 'res' = 'res'

  export let content = {
    title: 'Card Title',
    description: 'Lorem ipsum dolor somit complexir lore ipsum dolor sit amet.',
    image: {
      src: 'https://picsum.photos/900/900',
      alt: 'Card Image',
    },
  }
</script>

<div
  class="flex flex-col gap shrink-0
    {size === 'sm' && 'max-w-xs'}
    {size === 'md' && 'max-w-md'}
    {size === 'lg' && 'max-w-xl'}
    {size === 'res' && 'w-full'}
"
>
  <AspectRatio {orientation}>
    <img
      src={content.image.src}
      alt={content.image.alt}
      class="rounded-lg w-full object-cover h-full"
    />
  </AspectRatio>
  <div>
    <h5>{content.title}</h5>
    <p>{content.description}</p>
  </div>
</div>
