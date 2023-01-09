<script lang="ts">
  import type { Collection } from '@interfaces/shopify/product'
  import Heading from '@components/micro/content/Heading.svelte'
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import ShopifyImg from '@components/micro/content/ShopifyImg.svelte'
  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'

  export let collection: Collection
</script>

<a
  href={`/collections/${collection.handle}`}
  class="flex flex-col gap-sm shrink-0 group"
>
  <AspectRatio
    {orientation}
    class="border border-gray-100 bg-gray-50 rounded-lg overflow-hidden"
  >
    {#if collection.image}
      <ShopifyImg
        image={collection.image}
        class="rounded-lg w-full object-cover h-full group-hover:opacity-75 transition-opacity"
      />
    {/if}
  </AspectRatio>
  <Heading
    element="span"
    class="text-center !text-gray-600"
  >
    {collection.title}
  </Heading>
</a>

<!-- <a
  href={`/collections/${product.handle}`}
  class="flex flex-col gap-sm shrink-0 group"
>
  <AspectRatio
    {orientation}
    class="border border-gray-100 bg-gray-50 rounded-lg overflow-hidden"
  >
    <Image
      image={product.images[0]}
      class="rounded-lg w-full object-contain h-full group-hover:opacity-75 transition-opacity"
    />
  </AspectRatio>

  <div>
    <Heading
      element="h3"
      size="xs"
      class="!text-gray-600"
    >
      {product.title}
    </Heading>
    <Text
      size="lg"
      class="font-semibold text-gray-800"
    >
      {product.variants[0].priceV2.amount}
    </Text>
  </div>
</a> -->
