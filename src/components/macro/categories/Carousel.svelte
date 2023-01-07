<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Carousel from '@components/meso/Carousel.svelte'

  export let content = {
    heading: 'Kies een categorie',
    items: [],
  }
</script>

<Section>
  <Container>
    <h2>{heading}</h2>
    <Carousel {items} />
  </Container>
</Section>
