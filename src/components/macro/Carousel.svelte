<script lang="ts">
  import type { Collection, Product } from '@interfaces/shopify/product'
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Button from '@components/micro/inputs/Button.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'
  import Carousel from '@components/meso/Carousel.svelte'
  import ButtonIcon from '@components/micro/inputs/button/Icon.svelte'
  import ButtonSecondary from '@components/micro/inputs/button/Secondary.svelte'

  interface Carousel {
    heading: string
    button?: any
  }
  export let items: (Collection | Product)[]

  export let content: Carousel = {
    heading: 'Collections',
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
        <Heading
          class="max-w-2xl"
          element="h2"
          size="lg"
        >
          {content.heading}
        </Heading>
        <ButtonSecondary
          text={content.button.text}
          href={content.button.href}
        />
      </div>
    </div>
    <Carousel {items} />
  </Container>
</Section>
