<script lang="ts">
  export let element: 'p' | 'span' = 'p'
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
  export let color: 'light' | 'dark' = 'dark'

  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class="
      text-gray-600 leading-normal res-text
  
      {size === 'xs' && 'text-xs md:text-sm'}
      {size === 'sm' && 'text-sm md:text-base'}
      {size === 'md' && 'text-base md:text-lg'}
      {size === 'lg' && 'text-lg md:text-xl'}
      {size === 'xl' && 'text-xl md:text-2xl'}

      {color === 'light' && 'text-gray-100'}
      {color === 'dark' && 'text-gray-600'}
      
      {className}
      "
  {...$$restProps}
>
  <slot />
</svelte:element>
