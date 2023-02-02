<script lang="ts">
  import type { Image } from '@interfaces/shopify/common'
  import { getSrcset } from 'public/shopify'

  export let image: Image = {
    url: '',
    altText: '',
    width: 0,
    height: 0,
  }

  // set per-usecase
  export let sizes = ''
  export let widths: number[] = [320, 640, 768, 1024, 1280, 1440, 1600, 1920]
  let className = ''
  export { className as class }

  // Generate srcset
  let srcset = getSrcset(image, widths)
</script>

<img
  src={image.src}
  alt={image.altText}
  width={image.width}
  height={image.height}
  class={className}
  {srcset}
  {sizes}
/>
