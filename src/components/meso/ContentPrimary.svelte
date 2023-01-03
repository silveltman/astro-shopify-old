<script lang="ts">
  import Button from '@components/micro/inputs/Button.svelte'

  export let align: 'left' | 'center' | 'right' = 'center'

  export let block = {
    subheading: 'Lorem ipsum dolor',
    heading: 'Lorem ipsum dolor sit amet consec',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos qui praesentium doloribus?',
    buttons: {
      primary: {
        text: 'Lorem ipsum',
        href: '#',
      },
      secondary: {
        text: 'Lorem sor',
        href: '#',
      },
    },
  }
</script>

<div
  class="flex flex-col gap-lg max-w-2xl relative
  {align === 'left' && 'items-start text-left'}
  {align === 'center' && 'items-center text-center'}
  {align === 'right' && 'items-end text-left'}
  "
>
  <div class="flex flex-col">
    {#if block.subheading}
      <span class="res-text mb-xs text-primary">
        {block.subheading}
      </span>
    {/if}
    <h1 class="res-heading-2xl">
      {block.heading}
    </h1>
    {#if block.text}
      <p class="res-text-lg mt">
        {block.text}
      </p>
    {/if}
  </div>
  {#if block.buttons}
    <div
      class="flex gap-sm w-full
    {align === 'left' && 'justify-start'}
    {align === 'center' && 'justify-center'}
    {align === 'right' && 'justify-start'}
    "
    >
      {#if block.buttons.primary}
        <Button
          size="lg"
          href={block.buttons.primary.href}
        >
          {block.buttons.primary.text}
        </Button>
      {/if}
      {#if block.buttons.secondary}
        <Button
          size="lg"
          variant="secondary"
          href={block.buttons.secondary.href}
        >
          {block.buttons.secondary.text}
        </Button>
      {/if}
    </div>
  {/if}
</div>
