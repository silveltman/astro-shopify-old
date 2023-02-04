<script lang="ts">
  import type { Image } from '@interfaces/shopify/common'
  import { imageForSize } from 'public/shopify'

  // types
  type Width = 320 | 640 | 1024 | 1280 | 1920 | number

  // config props
  export let sizes = '100vw'
  export let widths: Width[] = [320, 640, 1024, 1280, 1920]
  export let loading: 'eager' | 'lazy' = 'lazy'
  export let decoding: 'async' | 'auto' | 'sync' = 'async'
  let className = ''
  export { className as class }

  export let image: Image = {
    src: '',
    altText: '',
  }

  function getSrcset(image: Image, widths: Width[]) {
    let srcset = []
    widths.forEach((width) => {
      let resizedSrc = imageForSize(image, { maxWidth: width, maxHeight: 9999 })
      let resizedSrcString = `${resizedSrc} ${width}w`
      srcset.push(resizedSrcString)
    })
    return srcset.toString()
  }
</script>

{#if image}
  <img
    alt={image.altText}
    srcset={image.src}
    {sizes}
    {loading}
    {decoding}
    class={className}
  />
{/if}
