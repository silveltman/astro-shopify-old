<script lang="ts">
  import Section from '@components/layouts/Section.svelte'
  import Stack from '@components/layouts/Stack.svelte'
  import Container from '@components/layouts/Container.svelte'
  import Heading from '@components/atoms/Heading.svelte'
  import Text from '@components/atoms/Text.svelte'
  import ButtonPrimary from '@components/atoms/ButtonPrimary.svelte'

  export let content = {
    heading: 'Summer styles are finally here!',
    text: 'The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch.',
    button: {
      text: 'Shop new arrivals',
      href: '#',
    },
    image: {
      src: '/img/index-hero.png',
      alt: 'Lorem ipsum',
    },
  }
</script>

<Section class="!pt-0 md:!pt-xl">
  <Container
    class="rounded-sm"
    disablePadding="md"
  >
    <Container
      class="bg-secondary-50 rounded-sm lg:flex lg:justify-between py-xl"
    >
      <Stack class="max-w-xl items-start">
        <Heading>
          {content.heading}
        </Heading>

        <Text size="xl">
          {content.text}
        </Text>
        <ButtonPrimary
          class="mt"
          color="black"
          size="lg"
          text={content.button.text}
          href={content.button.href}
        />
      </Stack>
      <!-- <img
        class="object-cover w-full h-auto lg:w-1/2"
        src={content.image.src}
        alt={content.image.alt}
      /> -->
    </Container>
  </Container>
</Section>
