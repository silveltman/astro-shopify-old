<script lang="ts">
  import Icon from '@components/micro/content/Icon.svelte'

  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let theme: 'color' | 'light' | 'dark' = 'color'
  export let disabled: boolean = false
  let className: string = ''
  export { className as class }

  export let text: string = 'Click me'
  export let href: string = ''

  let element = !href || disabled ? 'button' : 'a'
</script>

<svelte:element
  this={element}
  on:click
  {href}
  {disabled}
  class="inline-flex items-center justify-center disabled focus font-medium gap-xs rounded-sm
     
        {size === 'sm' && 'text-sm'}
        {size === 'md' && 'text-base'}
        {size === 'lg' && 'text-lg'}
  
        {theme == 'color' && 'text-primary hover:text-primary-700'}
        {theme == 'light' && 'text-white hover:text-gray-100'}
        {theme == 'dark' && 'text-gray-600 hover:text-gray-900'}
  
        {className}
      "
  {...$$restProps}
>
  {text}

  <Icon
    name="arrow_forward"
    size="20"
  />
</svelte:element>
