<script lang="ts">
  import Icon from '@components/micro/content/Icon.svelte'

  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let startIcon: string = ''
  export let endIcon: string = ''
  export let href: string | false = false
  export let disabled: boolean = false

  let elementType = !href || disabled ? 'button' : 'a'
</script>

<svelte:element
  this={elementType}
  on:click
  {href}
  {disabled}
  {...$$restProps}
  class="button gap-x-1

    {size === 'sm' && 'h-8 px-3 res-text-sm'}
    {size === 'md' && 'h-10 px-4 res-text-base'}
    {size === 'lg' && 'h-12 px-5 res-text-lg'}

    {variant === 'primary' && 'bg-primary text-white hover:bg-primary-600'}
    {variant === 'secondary' &&
    'border border-primary  text-primary hover:bg-primary-50'}
    {variant === 'tertiary' && 'text-primary shadow-none hover:bg-primary-50'}
"
>
  {#if startIcon}
    <Icon
      name={startIcon}
      size={size == 'sm' ? '20' : '24'}
    />
  {/if}
  <slot />
  {#if endIcon}
    <Icon
      name={endIcon}
      size={size == 'sm' ? '20' : '24'}
    />
  {/if}
</svelte:element>
