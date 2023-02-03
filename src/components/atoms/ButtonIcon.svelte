<script lang="ts">
  import Icon from '@components/atoms/Icon.svelte'

  // config props
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let theme: 'color' | 'light' | 'dark' = 'color'
  export let disabled: boolean = false
  let className = ''
  export { className as class }

  // content props
  export let icon: string = 'shopping_cart'
  export let text: string = ''
  export let href: string = ''
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  on:click
  {href}
  {disabled}
  class="inline-flex items-center justify-center disabled focus gap-1.5 rounded-sm

      {disabled && '!pointer-events-none !opacity-50 !text-neutral'}

      {size === 'sm' && 'text-sm'}
      {size === 'md' && 'text-base'}
      {size === 'lg' && 'text-lg'}

      {theme == 'color' && 'text-primary hover:text-primary-700'}
      {theme == 'light' && 'text-white hover:text-neutral-100'}
      {theme == 'dark' && 'text-neutral-500 hover:text-neutral-900'}

      {className}
    "
  {...$$restProps}
>
  <Icon
    name={icon}
    {size}
  />
  {text}
</svelte:element>
