<script lang="ts">
  import type { Product, Collection } from '@interfaces/shopify/product'
  import { inview } from 'svelte-inview'
  import IconButton from '@components/micro/inputs/IconButton.svelte'
  import CardProduct from '@components/meso/card/Product.svelte'
  import CardCollection from '@components/meso/card/Collection.svelte'

  export let items: (Product | Collection)[]
  export let maxItems: number = 28

  let slider
  let atStart = true
  let atEnd = true

  // Type guards
  const isProduct = (item: Product | Collection): item is Product =>
    (item as Product).type.name == 'Product'
  const isCollection = (item: Product | Collection): item is Collection =>
    (item as Collection).type.name == 'Collection'

  const slicedItems = items.slice(0, maxItems)

  $: isScrollable = !atStart || !atEnd

  const options = {
    root: slider,
    threshold: 0.999,
  }

  function onChange(event, i) {
    const { inView } = event.detail
    if (i == 0) {
      atStart = inView
    } else if (i == slicedItems.length - 1) {
      atEnd = inView
    }
  }

  function scroll(direction: -1 | 1) {
    const { offsetWidth } = slider

    let left = offsetWidth * direction
    slider.scrollBy({
      left,
      behavior: 'smooth',
    })
  }
</script>

<div class="relative">
  {#if isScrollable}
    <div class="absolute top-0 left-0 z-10 flex items-center h-full p-2">
      <IconButton
        disabled={atStart}
        color="dark"
        variant="outlined"
        content={{ icon: 'chevron_left' }}
        on:click={() => scroll(-1)}
      />
    </div>
  {/if}

  <ul
    bind:this={slider}
    class="flex w-full overflow-x-auto gap-x scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 snap-x snap-mandatory"
    class:pb-5={isScrollable}
  >
    {#each slicedItems as item, i}
      <li
        use:inview={options}
        on:change={(event) => onChange(event, i)}
        class="basis-full min-w-[300px] snap-start"
      >
        {#if isProduct(item)}
          <CardProduct product={item} />
        {:else if isCollection(item)}
          <CardCollection collection={item} />
        {/if}
      </li>
    {/each}
  </ul>

  {#if isScrollable}
    <div class="absolute top-0 right-0 z-10 flex items-center h-full p-2">
      <IconButton
        disabled={atEnd}
        color="dark"
        variant="outlined"
        content={{ icon: 'chevron_right' }}
        on:click={() => scroll(1)}
      />
    </div>
  {/if}
</div>
