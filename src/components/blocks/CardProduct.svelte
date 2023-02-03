<script lang="ts">
  import type { Product } from '@interfaces/shopify/product'
  import Image from '@components/micro/content/Image.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'

  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'
  export let product: Product
</script>

<a
  href={`/products/${product.handle}`}
  class="flex flex-col w-full group sm:max-w-sm sm:basis-[268px] md:basis-72 grow"
>
  <Image
    image={product.featuredImage || product.images[0]}
    aspectRatio={3 / 2}
    sizes="(min-width: 640px) 384px, 100vw"
    class="transition-opacity border border-gray-100 rounded-lg shadow-sm shadow-gray-200/10 bg-gray-50 group-hover:opacity-75"
  />

  <Heading
    variant="h6"
    class="mt-sm"
  >
    {product.title}
  </Heading>
  <Text
    element="span"
    size="lg"
  >
    {product.variants[0].priceV2.amount}
  </Text>
</a>
