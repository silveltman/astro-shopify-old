<script lang="ts">
  export let theme: 'dark' | 'light' = 'light'
  export let variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' =
    'h1'
  let className = ''
  export { className as class }

  const defaultSizes = {
    h1: '3xl',
    h2: '2xl',
    h3: 'xl',
    h4: 'lg',
    h5: 'md',
    h6: 'sm',
    span: 'xs',
    p: 'xs',
  }

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | string =
    defaultSizes[variant]
</script>

<svelte:element
  this={variant}
  class="text-gray-900

    {theme === 'dark' && 'text-gray-100'}
    {theme === 'light' && 'text-gray-900'}

    {size === '3xl' &&
    'font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight'}
    {size === '2xl' && 'font-bold text-3xl sm:text-4xl tracking-tight'}
    {size === 'xl' && 'font-bold text-2xl sm:text-3xl  tracking-tight'}

    {size === 'lg' && 'font-semibold text-xl'}
    {size === 'md' && 'font-semibold text-lg'}
    {size === 'sm' && 'font-semibold text-md'}
    {size === 'xs' && 'font-semibold text-sm'}

    
    {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
