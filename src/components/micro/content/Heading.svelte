<script lang="ts">
  // Declare and import dependencies

  // Declare exported variables with default values
  export let element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'
  export let color: 'light' | 'dark' = 'dark'
  let className = ''
  export { className as class }

  const defaultSizes = {
    h1: '2xl',
    h2: 'xl',
    h3: 'lg',
    h4: 'md',
    h5: 'sm',
    h6: 'xs',
  }

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string =
    defaultSizes[element]

  // Declare other variables
  // Add event listeners or function definitions below
</script>

<svelte:element
  this={element}
  class="font-bold leading-none

    {size === 'xs' && 'res-heading-xs'}
    {size === 'sm' && 'res-heading-sm'}
    {size === 'md' && 'res-heading-base'}
    {size === 'lg' && 'res-heading-lg'}
    {size === 'xl' && 'res-heading-xl'}
    {size === '2xl' && 'res-heading-2xl'}

    {color === 'light' && 'text-white'}
    {color === 'dark' && 'text-gray-800'}
    
    {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
