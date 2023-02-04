<script lang="ts">
  import type { Collection } from '@interfaces/shopify/product'
  import Text from '@components/atoms/Text.svelte'
  import ImageShopify from '@components/atoms/ImageShopify.svelte'
  import AspectRatio from '@components/layouts/AspectRatio.svelte'

  export let collection: Collection
</script>

<a
  href={`/collections/${collection.handle}`}
  class="flex flex-col gap-sm shrink-0 group grow"
>
  <AspectRatio ratio={4 / 3}>
    <ImageShopify
      image={collection.image}
      class="transition-opacity h-full w-full object-cover rounded-2xl group-hover:opacity-75 border border-neutral-200"
    />
  </AspectRatio>
  <Text
    element="span"
    class="text-center"
  >
    {collection.title}
  </Text>
</a>
