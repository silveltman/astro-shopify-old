<script lang="ts">
  import { inview } from 'svelte-inview'
  import IconButton from '@components/micro/inputs/IconButton.svelte'
  import CardProduct from '@components/meso/card/CardProduct.svelte'

  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let space: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'
  export let items = []

  export let cardVariant: 'product' | 'collection' = 'collection'

  let slider
  let atStart = true
  let atEnd = false

  const options = {
    root: slider,
    threshold: 0.99,
  }

  function onChange(event, i) {
    const { inView } = event.detail
    if (i == 0) {
      atStart = inView
    } else if (i == items.length - 1) {
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
  {#if !atStart || !atEnd}
    <div class="absolute top-0 left-0 z-10 flex items-center h-full p-2">
      <IconButton
        disabled={atStart}
        icon="chevron_left"
        variant="secondary"
        on:click={() => scroll(-1)}
      />
    </div>
  {/if}

  <ul
    bind:this={slider}
    class="flex w-full overflow-x-auto snap-x snap-mandatory gap-x-10 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500 space-{space}"
    class:pb={!atStart || !atEnd}
  >
    {#each items as item, i}
      {#if i == 0 || i == items.length - 1}
        <li
          use:inview={options}
          on:change={(event) => onChange(event, i)}
          class="snap-start shrink-0 size-{size}"
        >
          <CardProduct content={item} />
        </li>
      {:else}
        <li class="snap-start shrink-0 size-{size}">
          <CardProduct content={item} />
        </li>
      {/if}
    {/each}
  </ul>

  {#if !atStart || !atEnd}
    <div class="absolute top-0 right-0 z-10 flex items-center h-full p-2">
      <IconButton
        disabled={atEnd}
        icon="chevron_right"
        variant="secondary"
        on:click={() => scroll(1)}
      />
    </div>
  {/if}
</div>

<style>
  .size-sm {
    min-width: 128px;
    --items: 3;
    @media screen(sm) {
      --items: 4;
    }
    @media screen(md) {
      --items: 5;
    }
    @media screen(lg) {
      --items: 6;
    }
  }

  .size-md {
    --items: 2;
    min-width: 288px;

    @media screen(sm) {
      --items: 3;
      min-width: 0;
    }
    @media screen(md) {
      --items: 4;
    }
    @media screen(lg) {
      --items: 5;
    }
  }

  .size-lg {
    --items: 1;
    @media screen(sm) {
      --items: 1;
    }
    @media screen(md) {
      --items: 2;
    }
    @media screen(lg) {
      --items: 3;
    }
  }

  .space-xs {
    --space: theme(spacing.xs);
  }

  .space-sm {
    --space: theme(spacing.sm);
  }

  .space-md {
    --space: theme(spacing.md);
  }

  .space-lg {
    --space: theme(spacing.lg);
  }

  .space-xl {
    --space: theme(spacing.xl);
  }

  .space-2xl {
    --space: theme(spacing.2xl);
  }

  .space-none {
    --space: theme(spacing.0);
  }

  ul {
    column-gap: var(--space);
  }

  li {
    --total-space: calc((var(--items) - 1) * var(--space));
    --width: calc((100% - var(--total-space)) / var(--items));
    width: var(--width);
  }
</style>
