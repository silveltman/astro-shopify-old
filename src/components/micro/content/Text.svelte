<script lang="ts">
  export let variant: 'p' | 'span' = 'p'
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

  let className = ''
  export { className as class }
</script>

<svelte:element
  this={variant}
  class="
      text-gray-600 font-normal leading-normal res-text
  
      {size === 'xs' && 'res-text-xs'}
      {size === 'sm' && 'res-text-sm'}
      {size === 'md' && 'res-text-base'}
      {size === 'lg' && 'res-text-lg'}
      {size === 'xl' && 'res-text-xl'}
      
      {className}
      "
  {...$$restProps}
>
  <slot />
</svelte:element>
