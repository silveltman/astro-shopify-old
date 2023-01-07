<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Button from '@components/micro/inputs/Button.svelte'

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

<Section>
  <Container>
    <Container
      class="flex flex-col items-center py-24 md:py-32 lg:py-40 text-center rounded-4xl overflow-hidden"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover"
        src={content.image.src}
        alt={content.image.alt}
      />
      <div class="flex flex-col items-center relative">
        <h1 class="text-white">{content.heading}</h1>
        <p class="text-white res-text-lg mt mb-lg">{content.textarea}</p>
        <Button
          size="lg"
          href={content.button.href}>{content.button.text}</Button
        >
      </div>
    </Container>
  </Container>
</Section>
