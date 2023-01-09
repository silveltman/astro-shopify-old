<script lang="ts">
  import type { Collection, Product } from '@interfaces/shopify/product'
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Button from '@components/micro/inputs/Button.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'
  import Carousel from '@components/meso/Carousel.svelte'

  interface Carousel {
    heading?: string
    text?: string | null
    button?: any
  }
  export let items: (Collection | Product)[]

  export let content: Carousel = {
    heading: 'Collections',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc elit lacinia nisl, vel aliquam nisl nunc vel lorem.',
    button: {
      text: 'Browse all collections',
      href: '#',
      endIcon: 'chevron_right',
    },
  }
</script>

<Section>
  <Container class="flex flex-col gap-y">
    <div class="flex flex-col gap-y-sm">
      <div class="flex items-center justify-between gap-x">
        {#if content.heading}
          <Heading
            class="max-w-2xl"
            element="h2"
            size="sm"
          >
            {content.heading}
          </Heading>
        {/if}
        {#if content.button}
          <Button
            variant="subtle"
            content={content.button}
          />
        {/if}
      </div>
      {#if content.button}
        <Text class="max-w-lg">
          {content.text}
        </Text>
      {/if}
    </div>
    <Carousel {items} />
  </Container>
</Section>
