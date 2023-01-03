<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Align from '@components/layout/Align.svelte'
  import Content from '@components/meso/ContentPrimary.svelte'

  export let align: 'left' | 'center' | 'right' = 'center'
</script>

<Section>
  <img
    class="absolute inset-0 w-full h-full object-cover"
    src="https://picsum.photos/1024/768"
    alt=""
  />
  <Container>
    <Align {align}>
      <Content {align} />
    </Align>
  </Container>
</Section>
