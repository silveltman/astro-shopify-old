<script lang="ts">
  import Icon from '@components/micro/content/Icon.svelte'

  export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let icon: string = ''
  export let href: string | false = false
  export let disabled: Boolean = false
  let className: string = ''
  export { className as class }

  let elementType = !href || disabled ? 'button' : 'a'
</script>

<svelte:element
  this={elementType}
  on:click
  {href}
  {disabled}
  {...$$restProps}
  class="button
  
      {size === 'sm' && 'w-8 h-8'}
      {size === 'md' && 'w-10 h-10'}
      {size === 'lg' && 'w-12 h-12'}
  
      {variant === 'primary' && 'bg-primary text-white hover:bg-primary-600'}
      {variant === 'secondary' &&
    'border border-primary bg-white text-primary hover:bg-primary-50'}
      {variant === 'tertiary' && 'text-primary hover:ring-1 hover:ring-primary'}
      
      {className}
  "
>
  <Icon
    name={icon}
    size={size == 'sm' ? '20' : '24'}
  />
</svelte:element>
