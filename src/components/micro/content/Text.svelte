<script lang="ts">
  export let theme: 'dark' | 'light' = 'light'
  export let element: 'p' | 'span' = 'p'
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class="
      {theme === 'light' && 'text-gray-500'}
      {theme === 'dark' && 'text-gray-300'}
  
      {size === 'xl' && 'text-xl'}
      {size === 'lg' && 'text-lg'}
      {size === 'md' && 'text-base'}
      {size === 'sm' && 'text-sm '}
      {size === 'xs' && 'text-xs'}

      {className}
      "
  {...$$restProps}
>
  <slot />
</svelte:element>
