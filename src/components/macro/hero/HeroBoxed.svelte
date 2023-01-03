<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Align from '@components/layout/Align.svelte'
  import Content from '@components/meso/ContentPrimary.svelte'

  export let align: 'left' | 'center' | 'right' = 'left'
</script>

<Section>
  <Container disablePadding="md">
    <Align
      class="flex md:rounded-3xl py-section px-container bg-primary-50 overflow-hidden"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover"
        src="https://picsum.photos/1024/768"
        alt=""
      />
      <Content {align} />
    </Align>
  </Container>
</Section>
