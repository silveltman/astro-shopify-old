<script lang="ts">
  import { onMount } from 'svelte'
  import Button from '@components/micro/inputs/Button.svelte'
  export let size: 'sm' | 'md' | 'lg' = 'sm'

  let slider

  let atStart = true
  let atEnd = false

  function scroll(direction: -1 | 1) {
    const { offsetWidth } = slider

    let left = offsetWidth * direction
    slider.scrollBy({
      left,
      behavior: 'smooth',
    })
  }

  // let observer = new IntersectionObserver((entries) => {
  // console.log(entries)
  // if (entries[0].isIntersecting) console.log("first intersecting");
  // if (entries[-0].isIntersecting) console.log("second intersecting");
  // })

  // onMount(() => {
  //   const items = slider.querySelectorAll('li')
  //   console.log(items)
  //   observer.observe(items[0])
  //   observer.observe(items.slice(-1)[0])
  // })
</script>

<div class="relative">
  <div class="absolute top-0 left-0 z-10 flex items-center h-full p-2">
    <Button
      disabled={atStart}
      icon="chevron_left"
      variant="secondary"
      on:click={() => scroll(-1)}
    />
  </div>
  <div class="">
    <div
      bind:this={slider}
      class="slider flex w-full relative overflow-x-scroll snap-x snap-mandatory [&>*]:shrink-0 [&>*]:snap-start"
      class:sm={size === 'sm'}
      class:md={size === 'md'}
      class:large={size === 'lg'}
    >
      <slot />
    </div>
  </div>

  <div class="absolute top-0 right-0 z-10 flex items-center h-full p-2">
    <Button
      disabled={atEnd}
      icon="chevron_right"
      variant="secondary"
      on:click={() => scroll(1)}
    />
  </div>
</div>

<style global>
  .slider {
    --gap: 16px; /* gap-x-4 */

    &.sm li {
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

    &.md li {
      min-width: 288px;
      --items: 2;

      @media screen(sm) {
        --items: 3;
      }
      @media screen(md) {
        --items: 4;
      }
      @media screen(lg) {
        --items: 5;
      }
    }

    &.large li {
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

    /* ------------------------------------------------ */
    /* AUTO */
    /* ------------------------------------------------ */
    li {
      /* (items - 1) * gap */
      --total-gap: calc(var(--gap) * (var(--items) - 1));
      /* (Full width - total-gap) / items */
      --width: calc((100% - var(--total-gap)) / var(--items));
      width: var(--width);
    }
    column-gap: var(--gap);
  }
</style>
