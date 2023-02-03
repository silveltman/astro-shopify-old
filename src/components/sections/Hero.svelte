<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'
  import ButtonPrimary from '@components/micro/inputs/button/Primary.svelte'

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

<Section>
  <Container class="rounded-sm ">
    <div class="bg-gray-800 rounded-2xl lg:flex lg:justify-between">
      <div
        class="flex flex-col items-start justify-center h-full px-container py-section"
      >
        <Heading theme="dark">
          {content.heading}
        </Heading>

        <Text
          class="mt mb-lg"
          size="xl"
          theme="dark"
        >
          {content.text}
        </Text>
        <ButtonPrimary
          size="lg"
          text={content.button.text}
          href={content.button.href}
        />
      </div>
      <img
        class="object-cover w-full h-auto lg:w-1/2"
        src={content.image.src}
        alt={content.image.alt}
      />
    </div>
  </Container>
</Section>
