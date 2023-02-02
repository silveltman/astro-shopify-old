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
    class="overflow-hidden border border-gray-100 rounded-lg bg-gray-50"
  >
    {#if collection.image}
      <ShopifyImg
        image={collection.image}
        class="object-cover w-full h-full transition-opacity rounded-lg group-hover:opacity-75"
      />
    {/if}
  </AspectRatio>
  <Heading
    variant="span"
    size="md"
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
    class="overflow-hidden border border-gray-100 rounded-lg bg-gray-50"
  >
    <Image
      image={product.images[0]}
      class="object-contain w-full h-full transition-opacity rounded-lg group-hover:opacity-75"
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
