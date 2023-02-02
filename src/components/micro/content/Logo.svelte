<script lang="ts">
  // import { logo } from '@data/general.yaml'

  const logo = {
    src: '/img/logo/icon.svg',
    alt: 'Logo',
  }

  // export let type: boolean = false
  // export let variant: 'color' | 'monochrome' = 'color'
  export let href: string = ''
  let className = ''
  export { className as class }
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  {href}
  class="flex items-center h-8 {className}"
>
  <img
    class="w-auto h-full"
    src={logo.src}
    alt={logo.alt}
  />
</svelte:element>
