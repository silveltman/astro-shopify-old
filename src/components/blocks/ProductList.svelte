<script lang="ts">
  import type { Product } from '@interfaces/shopify/product'
  import CardProduct from '@components/meso/card/Product.svelte'
  import Container from '@components/layout/Container.svelte'
  import Section from '@components/layout/Section.svelte'

  export let products: Product[]
</script>

<Section>
  <Container class="flex flex-wrap justify-center gap-x gap-y-lg">
    {#each products as product}
      <CardProduct {product} />
    {/each}
  </Container>
</Section>

<style>
  .auto {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
</style>
