<script lang="ts">
  export let align: 'left' | 'center' | 'right' = 'left'

  let className = ''
  export { className as class }
</script>

<div
  class="flex items-center relative w-full
    {align === 'left' && 'justify-start'}
    {align === 'center' && 'justify-center'}
    {align === 'right' && 'md:justify-end'}

    {className}
  "
>
  <slot />
</div>
