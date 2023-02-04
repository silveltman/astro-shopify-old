<script lang="ts">
  import type { Product, Collection } from '@interfaces/shopify/product'
  import { inview } from 'svelte-inview'

  export let first: boolean = false
  export let last: boolean = false

  let slider
  let atStart = true
  let atEnd = true

  const options = {
    root: slider,
    threshold: 0.999,
  }

  function setPosition(event) {
    const { inView } = event.detail
    if (first) {
      atStart = inView
    } else if (last) {
      atEnd = inView
    }
  }
</script>

<li
  use:inview={options}
  on:change={(event) => setPosition(event)}
  class="basis-full min-w-[300px] snap-start"
>
  <slot />
</li>
