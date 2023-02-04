<script lang="ts">
  import Heading from '@components/atoms/Heading.svelte'
  import Text from '@components/atoms/Text.svelte'
  import Icon from '@components/atoms/Icon.svelte'
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@rgossiaux/svelte-headlessui'

  export let items: {
    heading: string
    text: string
  }[] = [
    {
      heading: 'Is team pricing available?',
      text: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      heading: 'Is team pricing available?',
      text: 'Yes! You can purchase a license that you can share with your entire team.',
    },
    {
      heading: 'Is team pricing available?',
      text: 'Yes! You can purchase a license that you can share with your entire team.',
    },
  ]
</script>

<div class="flex flex-col divide-y">
  {#each items as item}
    <Disclosure
      class="border-neutral-200 py"
      let:open
    >
      <DisclosureButton class="flex items-center justify-between gap w-full">
        <Heading element="h6">{item.heading}</Heading>
        <Icon
          name="expand_more"
          class={open && 'rotate-180'}
        />
      </DisclosureButton>

      <DisclosurePanel>
        <Text class="pt-sm">{item.text}</Text>
      </DisclosurePanel>
    </Disclosure>
  {/each}
</div>
