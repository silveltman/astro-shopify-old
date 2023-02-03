<script lang="ts">
  import ImageBase from '@components/micro/content/image/Base.svelte'
  import type { Image } from '@interfaces/shopify/common'
  import { imageForSize } from 'public/shopify'

  export let aspectRatio: number | null = null
  export let sizes = '100vw'
  export let widths: number[] = [320, 640, 768, 1024, 1280, 1440, 1600, 1920]
  export let fit: 'cover' | 'contain' = 'cover'
  export let position: 'center' | string = 'center'
  let className = ''
  export { className as class }

  export let image: Image = {
    src: 'https://cdn.shopify.com/s/files/1/0701/8256/8237/products/black_silver_1200.webp?v=1672768682',
    altText: '',
  }

  function createSrc(image: Image, width: number) {
    return imageForSize(image, {
      maxWidth: width,
      maxHeight: 9999,
    })
  }

  function createSrcset(image: Image, widths: number[]) {
    let srcset = []
    widths.forEach((width) => {
      let src = createSrc(image, width)
      let string = `${src} ${width}w`
      srcset.push(string)
    })

    return srcset.toString()
  }
</script>

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
