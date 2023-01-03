<script lang="ts">
  import SectionBase from '@components/layout//section/Base.svelte'
  import Container from '@components/layout/Container.svelte'

  export let align: 'left' | 'center' | 'right' = 'left'
</script>

<SectionBase>
  <Container disablePadding="md">
    <div
      class="flex bg-gray-50 md:rounded-3xl border border-gray-300 py-section px-container items-center
      {align === 'left' && 'justify-start'}
      {align === 'center' && 'justify-center'}
      {align === 'right' && 'md:justify-end'}
      "
    >
      <slot />
    </div>
  </Container>
</SectionBase>
