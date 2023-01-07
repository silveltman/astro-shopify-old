<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Button from '@components/micro/inputs/Button.svelte'

  interface Hero {
    heading: string
    text?: string | null
    buttonPrimary?: Button
    buttonSecondary?: Button
    image?: object
  }

  // interface Button {
  //   text: string
  //   href: string
  //   startIcon: string | null
  //   endIcon: string | null
  // }

  export let content = {
    heading: 'New arrivals are here',
    textarea:
      "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.",
    button: {
      text: 'Lorem ipsum',
      href: '#',
      startIcon: null,
      endIcon: null,
    },
    image: {
      src: 'https://picsum.photos/1024/768',
      alt: 'Lorem ipsum',
    },
  }
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
      class="flex flex-col items-center py-32 md:py-40 lg:py-48 text-center max-w-4xl"
    >
      <h1 class="text-white">{content.heading}</h1>
      <p class="text-white res-text-lg mt mb-lg">{content.textarea}</p>
      <Button
        size="lg"
        href={content.button.href}>{content.button.text}</Button
      >
    </Container>
  </Container>
</Section>
