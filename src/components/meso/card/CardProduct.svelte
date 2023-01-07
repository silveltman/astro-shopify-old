<script lang="ts">
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import ShopifyImg from '@components/micro/content/ShopifyImg.svelte'
  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'

  type product = {
    id: string
    availableForSale: boolean
    createdAt: string
    updatedAt: string
    descriptionHtml: string
    description: string
    handle: string
    productType: string
    title: string
    vendor: string
    publishedAt: string
    onlineStoreUrl: string
    options: object[]
    images: [
      {
        src: string
        altText: string
        width: number | undefined
        height: number | undefined
      }
    ]
    variants: object[]
  }

  type MoneyV2 = {
    amount: number
    currencyCode: string
  }

  type Image = {
    id: string
    src: string
    altText: string
    width: number
    height: number
  }

  type variant = {
    id: string
    title: string
    price: money
    priceV2: money
    weight: number
    available: boolean
    sku: string
    compareAtPrice: money
    compareAtPriceV2: money
    image: {
      src: string
      altText: string
      width: number | undefined
      height: number | undefined
    }
    requiresShipping: boolean
    selectedOptions: object[]
    weightUnit: string
  }

  export let product: product = null
</script>

<a
  href={`/collections/${product.handle}`}
  class="flex flex-col gap-sm shrink-0 group"
>
  <AspectRatio {orientation}>
    <!-- <img
      src={product.images[0].src}
      alt={product.images[0].altText}
      class="rounded-lg w-full object-contain h-full group-hover:opacity-75 transition-opacity"
    /> -->
    <ShopifyImg
      image={product.images[0]}
      class="rounded-lg w-full object-contain h-full group-hover:opacity-75 transition-opacity"
    />
  </AspectRatio>
  <h6 class="text-gray-700 group-hover:underline">
    {product.title}
  </h6>
  <span />
</a>
