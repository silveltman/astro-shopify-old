<script lang="ts">
  //   import ImageBase from '@components/micro/content/image/Base.svelte'
  //   import type { Image } from '@interfaces/shopify/common'
  //   import { imageForSize } from 'public/shopify'

  //   // types
  //   type Width = 320 | 640 | 1024 | 1280 | 1920

  //   // config props
  //   export let sizes = '100vw'
  //   export let widths: Width[] = [320, 640, 1024, 1280, 1920]
  //   export let loading: 'eager' | 'lazy' = 'lazy'
  //   export let decoding: 'async' | 'auto' | 'sync' = 'async'
  //   let className = ''
  //   export { className as class }

  //   export let image: Image = {
  //     src: '',
  //     altText: '',
  //   }

  //   function createSrc(image: Image, width: number) {
  //     return imageForSize(image, {
  //       maxWidth: width,
  //       maxHeight: 9999,
  //     })
  //   }

  //   function createSrcset(image: Image, widths: number[]) {
  //     let srcset = []
  //     widths.forEach((width) => {
  //       let src = createSrc(image, width)
  //       let string = `${src} ${width}w`
  //       srcset.push(string)
  //     })

  //     return srcset.toString()
  //   }
</script>

<!-- 
<ImageBase
  src={image.src}
  alt={image.altText}
  srcset={createSrcset(image, widths)}
  class={className}
  {sizes}
  {fit}
  {position}
  {aspectRatio}
/>

{#if src}
  <picture>
    <source
      type="image/webp"
      srcset={getSrcset(webpSrc(), widths)}
      media={sizes}
    />
    <source
      type="image/{originalType()}"
      srcset={getSrcset(src, widths)}
      media={sizes}
    />
    <img
      {alt}
      {src}
      {loading}
      {decoding}
      class={className}
    />
  </picture>
{/if} -->
