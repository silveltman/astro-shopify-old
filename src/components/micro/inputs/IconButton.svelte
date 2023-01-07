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

  // Declare interface
  interface IconButton {
    icon: string
    href?: string
  }

  // Declare exported variable with default values
  export let content: IconButton = {
    icon: 'home',
    href: '#',
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
  
    {size === 'sm' && 'w-8 h-8'}
    {size === 'md' && 'w-10 h-10'}
    {size === 'lg' && 'w-12 h-12'}
    
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
  <Icon
    name={content.icon}
    size={size == 'sm' ? '20' : '24'}
  />
</svelte:element>
