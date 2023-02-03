<script lang="ts">
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import type { Image } from '@interfaces/shopify/common'

  type Width = 320 | 640 | 768 | 1024 | 1280 | 1440 | 1600 | 1920

  export let aspectRatio: number | null = null
  export let sizes = '100vw'
  export let widths: Width[] = [320, 640, 768, 1024, 1280, 1440, 1600, 1920]
  export let fit: 'cover' | 'contain' = 'cover'
  export let position: 'center' | string = 'center'
  let className = ''
  export { className as class }

  export let image: Image = {
    src: 'https://storage.googleapis.com/astro-shopify-testing/bucket-test.jpg',
    altText: '',
  }

  function createSrc(image: Image, width: Width) {
    let maxHeight = 9999
    let src = image.src
    let fileExtension = src.split('.').pop()
    let newSrc = src.replace(`.${fileExtension}`, `${width}_${maxHeight}.webp`)
    return newSrc
  }

  function createSrcset(image: Image, widths: Width[]) {
    let srcset = []
    widths.forEach((width) => {
      let src = createSrc(image, width)
      let string = `${src} ${width}w`
      srcset.push(string)
    })
    return srcset.toString()
  }
</script>

{#if aspectRatio}
  <AspectRatio
    class={className}
    ratio={aspectRatio}
  >
    <img
      {sizes}
      src={image.src}
      alt={image.altText}
      srcset={createSrcset(image, widths)}
      loading="lazy"
      class="w-full h-full"
      style="object-fit:{fit};object-position:{position}"
    />
  </AspectRatio>
{:else}
  <img
    {sizes}
    src={image.src}
    alt={image.altText}
    srcset={createSrcset(image, widths)}
    loading="lazy"
    class={className}
  />
{/if}
