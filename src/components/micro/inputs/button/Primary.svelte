<script lang="ts">
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
  class="inline-flex items-center justify-center disabled rounded-xl focus font-medium shadow-md
   
      {size === 'sm' && 'text-sm py-1 px-3'}
      {size === 'md' && 'text-base py-3 px-5'}
      {size === 'lg' && 'text-lg py-3.5 px-7'}

      {theme == 'color' && 'bg-primary text-white hover:bg-primary-700'}
      {theme == 'light' && 'bg-white text-gray-black hover:bg-gray-100'}
      {theme == 'dark' && 'bg-gray-900 text-white hover:bg-gray-800'}

      {className}
    "
  {...$$restProps}
>
  {text}
</svelte:element>
