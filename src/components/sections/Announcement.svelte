<script lang="ts">
  import Container from '@components/layouts/Container.svelte'

  export let text: string = 'Gratis verzending voor bestellingen boven de €100'
</script>

<div class="bg-primary-700 text-white">
  <Container class="text-center py-1.5 text-sm">
    {text}
  </Container>
</div>
