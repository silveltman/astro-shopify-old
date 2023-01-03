<script lang="ts">
  export let variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1'

  const defaultSizes = {
    h1: '2xl',
    h2: 'xl',
    h3: 'lg',
    h4: 'md',
    h5: 'sm',
    h6: 'xs',
  }

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string =
    defaultSizes[variant]

  let className = ''
  export { className as class }
</script>

<svelte:element
  this={variant}
  class="
    text-gray-800 font-extrabold leading-none

    {size === 'xs' && 'res-heading-xs'}
    {size === 'sm' && 'res-heading-sm'}
    {size === 'md' && 'res-heading-base'}
    {size === 'lg' && 'res-heading-lg'}
    {size === 'xl' && 'res-heading-xl'}
    {size === '2xl' && 'res-heading-2xl'}
    
    {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
