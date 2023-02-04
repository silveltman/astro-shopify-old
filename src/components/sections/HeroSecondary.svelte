<script lang="ts">
  import Section from '@components/layouts/Section.svelte'
  import Stack from '@components/layouts/Stack.svelte'
  import Container from '@components/layouts/Container.svelte'
  import Heading from '@components/atoms/Heading.svelte'
  import Text from '@components/atoms/Text.svelte'
  import ButtonPrimary from '@components/atoms/ButtonPrimary.svelte'

  export let content = {
    heading: 'Summer styles are finally here!',
    text: 'The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch.',
  }
</script>

<Section class="!pt-0 md:!pt-xl">
  <Container
    class="rounded-sm"
    disablePadding="md"
  >
    <Container class="bg-primary-50 rounded-sm py-lg">
      <Stack class="max-w-xl">
        <Heading size="xl">
          {content.heading}
        </Heading>

        <Text>
          {content.text}
        </Text>
      </Stack>
    </Container>
  </Container>
</Section>
