<script lang="ts">
  import type { Product } from '@interfaces/shopify/product'
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import Image from '@components/micro/content/Image.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'
  import Text from '@components/micro/content/Text.svelte'

  export let product: Product
</script>

<a
  href={`/products/${product.handle}`}
  class="flex flex-col shrink-0 group"
>
  <AspectRatio
    {orientation}
    class="overflow-hidden border border-gray-100 rounded-lg bg-gray-50"
  >
    {#if product.featuredImage || product.images[0]}
      <Image
        image={product.featuredImage || product.images[0]}
        class="object-contain w-full h-full transition-opacity rounded-lg group-hover:opacity-75"
      />
    {/if}
  </AspectRatio>

  <Heading
    variant="h5"
    class="mt"
  >
    {product.title}
  </Heading>
  <Text element="span">
    €{product.variants[0].priceV2.amount}
  </Text>
</a>
