<script lang="ts">
  // config props
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let color: 'primary' | 'secondary' | 'black' | 'white' = 'primary'
  export let disabled: boolean = false
  let className = ''
  export { className as class }

  // content props
  export let text: string = 'Click me'
  export let href: string
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  on:click
  {href}
  {disabled}
  class="font-medium gap-xs rounded-sm hover:underline active:underline
  
      {disabled && '!pointer-events-none !opacity-50 !text-neutral'}
            
      {size === 'sm' && 'text-sm'}
      {size === 'md' && 'text-base'}
      {size === 'lg' && 'text-lg'}
  
      {color == 'primary' && 'text-primary-800 hover:bg-primary-800/10'}
      {color == 'secondary' && 'text-secondary-800 hover:bg-secondary-800/10'}
      {color == 'black' && 'text-neutral-900 hover:bg-neutral-900/10'}
      {color == 'white' && 'text-white hover:bg-white/10 '}
  
      {className}
    "
  {...$$restProps}
>
  {text}
</svelte:element>
