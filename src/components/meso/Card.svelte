<script lang="ts">
  import Panel from '@components/layout/Panel.svelte'

  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'
  export let size: 'small' | 'medium' | 'large' | 'responsive' = 'responsive'

  export let content: Object = {
    title: 'Card Title',
    description: 'Lorem ipsum dolor somit complexir lore ipsum dolor sit amet.',
    image: {
      src: 'https://picsum.photos/300/300',
      alt: 'Card Image',
    },
  }
</script>

<Panel
  {size}
  {...$$restProps}
>
  {#if content.image.src}
    <div
      class={`
                ${orientation === 'portrait' && 'aspect-w-2 aspect-h-3'}
                ${orientation === 'landscape' && 'aspect-w-4 aspect-h-3'}
                ${orientation === 'square' && 'aspect-w-1 aspect-h-1'}
            `}
    >
      <img
        src={content.image.src}
        alt={content.image.alt}
        class="rounded-lg w-full object-cover h-full "
      />
    </div>
  {/if}

  <div slot="footer">
    <h3 class="text-lg font-semibold text-gray-800">{content.title}</h3>
    <p class="text-gray-600">{content.description}</p>
  </div>
</Panel>
