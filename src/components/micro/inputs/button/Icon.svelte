<script lang="ts">
  import Icon from '@components/micro/content/Icon.svelte'

  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let theme: 'color' | 'light' | 'dark' = 'color'
  export let disabled: boolean = false
  let className: string = ''
  export { className as class }

  export let icon: string = 'shopping_cart'
  export let text: string = ''
  export let href: string = ''

  let element = !href || disabled ? 'button' : 'a'
</script>

<svelte:element
  this={element}
  on:click
  {href}
  {disabled}
  class="inline-flex items-center justify-center disabled focus gap-1.5 rounded-sm
       
      {size === 'sm' && 'text-sm'}
      {size === 'md' && 'text-base'}
      {size === 'lg' && 'text-lg'}

      {theme == 'color' && 'text-primary hover:text-primary-700'}
      {theme == 'light' && 'text-white hover:text-gray-100'}
      {theme == 'dark' && 'text-gray-500 hover:text-gray-900'}

      {className}
    "
  {...$$restProps}
>
  <Icon
    name={icon}
    size={size === 'sm' ? '20' : '24'}
  />
  {text}
</svelte:element>
