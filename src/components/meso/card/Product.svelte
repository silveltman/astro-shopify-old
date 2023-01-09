<script lang="ts">
  import type { Product } from '@interfaces/shopify/product'
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import Image from '@components/micro/content/Image.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'
  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'

  export let product: Product
</script>

<a
  href={`/products/${product.handle}`}
  class="flex flex-col gap-sm shrink-0 group"
>
  <AspectRatio
    {orientation}
    class="border border-gray-100 bg-gray-50 rounded-lg overflow-hidden"
  >
    {#if product.featuredImage || product.images[0]}
      <Image
        image={product.featuredImage || product.images[0]}
        class="rounded-lg w-full object-contain h-full group-hover:opacity-75 transition-opacity"
      />
    {/if}
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
</a>
