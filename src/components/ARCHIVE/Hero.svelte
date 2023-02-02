<script lang="ts">
  // Declare and import dependencies
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Button from '@components/micro/inputs/Button.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'

  // Declare exported variables with default values

  // Declare content interface
  interface Hero {
    heading: string
    text?: string | null
    button?: Button
    image?: object
  }

  // Declare interface prop with default values

  export let content: Hero = {
    heading: 'New arrivals are here',
    text: "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.",
    button: {
      text: 'Shop new arrivals',
      href: '#',
    },
    image: {
      src: 'https://picsum.photos/1024/768',
      alt: 'Lorem ipsum',
    },
  }

  // Declare other variables
  // Add event listeners or function definitions below
</script>

<Section class="!pt-0">
  <Container
    maxWidth="3xl"
    disablePadding
    class="3xl:rounded-b-3xl overflow-hidden bg-gray-900"
  >
    <img
      class="absolute inset-0 w-full h-full object-cover opacity-50"
      src={content.image.src}
      alt={content.image.alt}
    />

    <Container
      class="flex flex-col items-center py-32 md:py-40 lg:py-48 text-center max-w-4xl gap-y-lg"
    >
      <div class="flex flex-col gap-y">
        <Heading color="light">
          {content.heading}
        </Heading>

        <Text
          color="light"
          size="lg"
        >
          {content.text}
        </Text>
      </div>
      <!-- <p class="text-white res-text-lg mt mb-lg">{content.textarea}</p> -->
      <Button
        color="light"
        size="lg"
        content={content.button}
      />
    </Container>
  </Container>
</Section>
