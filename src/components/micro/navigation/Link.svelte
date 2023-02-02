<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary'
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let active = false
  let className: string = ''
  export { className as class }

  // interface Link {
  //   name: string
  //   href: string
  // }

  // export let cms: Link = {
  //   name: 'Lorem ipsum',
  //   href: '/',
  // }

  export let href: string = '#'
  export let text: string = 'Lorem ipsum'
</script>

<a
  {href}
  class="flex items-center

  {size == 'sm' && 'text-sm'}
  {size == 'md' && 'text-base'}
  {size == 'lg' && 'text-lg'}

  {variant == 'primary' && 'font-medium text-gray-700 hover:text-gray-900'}
  {variant == 'secondary' && 'text-gray-600 hover:text-gray-800'}

  {active && 'text-primary hover:text-primary'}
  "
>
  {text}
</a>
