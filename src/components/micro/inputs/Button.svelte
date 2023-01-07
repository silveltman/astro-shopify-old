<script lang="ts">
  // Declare and import dependencies
  import Icon from '@components/micro/content/Icon.svelte'

  // Declare exported variables with default values
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let variant: 'filled' | 'outlined' | 'subtle' = 'filled'
  export let color: 'primary' | 'light' | 'dark' = 'primary'
  export let disabled: boolean = false
  let className: string = ''
  export { className as class }

  // Declare content interface
  interface Button {
    text: string
    href?: string
    startIcon?: string
    endIcon?: string
  }

  // Declare interface prop with default values
  export let content: Button = {
    text: 'Lorem ipsum',
    href: '#',
    startIcon: null,
    endIcon: null,
  }

  // Declare other variables
  let primary = color === 'primary'
  let dark = color === 'dark'
  let light = color === 'light'
  let filled = variant === 'filled'
  let outlined = variant === 'outlined'
  let subtle = variant === 'subtle'

  let elementType = !content.href || disabled ? 'button' : 'a'

  // Add event listeners or function definitions below
</script>

<svelte:element
  this={elementType}
  on:click
  href={content.href}
  {disabled}
  class="inline-flex items-center justify-center rounded-xl transition-color gap-x-1 focus disabled
 
    {size === 'sm' && 'h-8 px-3 res-text-sm'}
    {size === 'md' && 'h-10 px-4 res-text-base'}
    {size === 'lg' && 'h-12 px-5 res-text-lg'}

    {subtle && primary && 'text-primary hover:bg-primary/5'}
    {subtle && dark && 'text-gray-900 hover:bg-gray-900/5'}
    {subtle && light && 'text-white hover:bg-white/5'}

    {outlined && 'border'}
    {outlined && primary && 'border-primary text-primary hover:bg-primary/5'}
    {outlined && dark && 'border-gray-900 text-gray-900 hover:bg-gray-900/5'}
    {outlined && light && 'border-white text-white hover:bg-white/5'}

    {filled && primary && 'bg-primary text-white hover:bg-primary-600'}
    {filled && dark && 'bg-gray-900 text-white hover:bg-black'}
    {filled && light && 'bg-white text-gray-900 hover:bg-gray-50'}
    
    {className}
  "
  {...$$restProps}
>
  {#if content.startIcon}
    <Icon
      name={content.startIcon}
      size={size == 'sm' ? '20' : '24'}
    />
  {/if}

  {content.text}

  {#if content.endIcon}
    <Icon
      name={content.endIcon}
      size={size == 'sm' ? '20' : '24'}
    />
  {/if}
</svelte:element>
