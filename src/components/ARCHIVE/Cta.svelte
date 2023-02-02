<script lang="ts">
  // Declare and import dependencies
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Button from '@components/micro/inputs/Button.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'

  // Declare exported variables with default values

  // Declare content interface
  interface Cta {
    heading: string
    text?: string | null
    button?: any
    image?: any
  }

  // Declare interface prop with default values

  export let content: Cta = {
    heading: 'Level up your desk',
    text: 'Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.',
    button: {
      text: 'Shop workspace',
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

<Section>
  <Container>
    <Container
      class="relative bg-gray-900 rounded-3xl w-full overflow-hidden py-24 md:py-28 lg:py-32"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover opacity-50"
        src={content.image.src}
        alt={content.image.alt}
      />
      <div
        class="relative flex flex-col gap-y max-w-3xl items-center text-center mx-auto"
      >
        <div class="flex flex-col gap-y-sm relative">
          <Heading
            color="light"
            element="h2"
          >
            {content.heading}
          </Heading>

          <Text color="light">
            {content.text}
          </Text>
        </div>
        <!-- <p class="text-white res-text-lg mt mb-lg">{content.textarea}</p> -->
        <Button
          color="light"
          size="lg"
          content={content.button}
        />
      </div>
    </Container>
  </Container>
</Section>
