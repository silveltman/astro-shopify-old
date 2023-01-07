<script lang="ts">
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import ShopifyImg from '@components/micro/content/ShopifyImg.svelte'
  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'

  type collection = {
    id: string
    handle: string
    description: string
    descriptionHtml: string
    updatedAt: string
    title: string
    image: {
      src: string
      altText: string
      width: number | undefined
      height: number | undefined
    }
    products: object[]
  }

  export let collection: collection = null
</script>

<a
  href={`/collections/${collection.handle}`}
  class="flex flex-col gap-sm shrink-0 group"
>
  <AspectRatio {orientation}>
    <ShopifyImg
      image={collection.image}
      class="rounded-lg w-full object-cover h-full group-hover:opacity-75 transition-opacity"
    />
  </AspectRatio>
  <span class="text-center text-gray-700 group-hover:underline">
    {collection.title}
  </span>
</a>
