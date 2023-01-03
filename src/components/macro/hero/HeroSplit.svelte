<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Content from '@components/meso/ContentPrimary.svelte'
  import Align from '@components/layout/Align.svelte'

  export let align: 'left' | 'right' = 'left'
</script>

<Section>
  <Container maxWidth="3xl">
    <Split>
      <img
        class="absolute top-0 bottom-0 w-1/2 h-full object-cover
          {align === 'left' ? 'right-0' : 'left-0'}
          "
        src="https://picsum.photos/1024/768"
        alt=""
      />

      <Content {align} />
    </Split>
  </Container>
</Section>
