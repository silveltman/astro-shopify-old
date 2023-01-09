<script lang="ts">
  export let orientation: 'portrait' | 'landscape' | 'square' = 'square'
  let className = ''
  export { className as class }
</script>

<div
  class="w-full relative
  {orientation === 'portrait' && 'aspect-w-2 aspect-h-3'}
  {orientation === 'landscape' && 'aspect-w-4 aspect-h-3'}
  {orientation === 'square' && 'aspect-w-1 aspect-h-1'}

  {className}
  "
>
  <div>
    <slot />
  </div>
</div>
