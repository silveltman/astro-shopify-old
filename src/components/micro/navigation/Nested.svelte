<script lang="ts">
  import type { Collection } from '@interfaces/shopify/product'
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import ShopifyImg from '@components/micro/content/ShopifyImg.svelte'
  import Icon from '@components/micro/content/Icon.svelte'

  export let collection: Collection
  export let hasChildren: boolean = false
  let className = ''
  export { className as class }
</script>

<div
  class=" flex items-center gap hover:bg-gray-100 {className}"
  {...$$restProps}
>
  <AspectRatio class="h-12">
    <ShopifyImg
      class="h-full w-full object-cover"
      image={collection.image}
    />
  </AspectRatio>
  <span>
    {collection.title}
  </span>
  {#if hasChildren}
    <Icon
      class="pl-auto pr"
      name="chevron_right"
    />
  {/if}
</div>
