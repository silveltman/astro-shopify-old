<script lang="ts">
  import type { Image } from '@interfaces/shopify/common'
  import { imageForSize } from 'public/shopify'

  export let image: Image = {
    src: 'https://cdn.shopify.com/s/files/1/0701/8256/8237/products/15mm-icetoolz-combo-wrench_1.webp?v=1672768677',
    altText: '',
    width: 0,
    height: 0,
  }

  type Widths = (320 | 640 | 768 | 1024 | 1280 | 1440 | 1600 | 1920)[]

  export let sizes = '100vw'
  export let widths: Widths = [320, 640, 768, 1024, 1280, 1440, 1600, 1920]

  let className = ''
  export { className as class }

  //   function createShopifySrcset(image: Image, widths: Widths) {
  //     let srcset = []

  //     widths.forEach((width) => {
  //       let url = imageForSize(image, {
  //         maxWidth: width,
  //         maxHeight: 9999,
  //       })
  //       let string = `${url} ${width}w`
  //       srcset.push(string)
  //     })

  //     console.log(srcset)

  //     return srcset.toString()
  //   }

  const src = imageForSize(image, {
    maxWidth: 1600,
    maxHeight: 9999,
  })
  console.log('src', src)

  //   createShopifySrcset(image, widths)
</script>

<img
  src={image.src}
  alt={image.altText}
  width={image.width}
  height={image.height}
  class={className}
  {sizes}
/>
