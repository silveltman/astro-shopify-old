<script lang="ts">
  import { getSrcset } from 'public/shopify'

  // supplied by shopify
  type image = {
    src: string
    altText: string
    width: number | undefined
    height: number | undefined
  }
  export let image: image = null

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
