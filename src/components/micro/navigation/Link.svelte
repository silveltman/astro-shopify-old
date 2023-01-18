<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let color: 'primary' | 'light' | 'dark' = 'dark'
  let className: string = ''
  export { className as class }

  interface Link {
    name: string
    href: string
  }

  export let cms: Link = {
    name: 'Lorem ipsum',
    href: '/',
  }
</script>

<a
  href={cms.href}
  class="hover:underline hover:text-primary
 
    {size === 'sm' && 'res-text-sm'}
    {size === 'md' && 'res-text-base'}
    {size === 'lg' && 'res-text-lg'}

    {color === 'primary' && 'text-primary'}
    {color === 'dark' && 'text-gray-900 '}
    {color === 'light' && 'text-white'}
  "
>
  {cms.name}
</a>
