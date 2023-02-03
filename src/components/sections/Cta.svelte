<script lang="ts">
  import Section from '@components/layout/Section.svelte'
  import Container from '@components/layout/Container.svelte'
  import Heading from '@components/micro/content/Heading.svelte'
  import Text from '@components/micro/content/Text.svelte'
  import ButtonPrimary from '@components/micro/inputs/button/Primary.svelte'
</script>

<Section>
  <Container>
    <Container class="bg-primary-700 rounded-2xl py-section">
      <div class="flex flex-col items-center max-w-lg mx-auto text-center">
        <Heading
          theme="dark"
          variant="h2"
          size="2xl"
        >
          Go for a test-drive
        </Heading>
        <Text
          class="mt-sm mb"
          theme="dark"
          size="lg"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim
          natus labore et quisquam?
        </Text>
        <ButtonPrimary
          theme="light"
          text="Book now"
        />
      </div>
    </Container>
  </Container>
</Section>
