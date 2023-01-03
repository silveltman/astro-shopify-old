<script lang="ts">
  export let variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' =
    'p'
  export let element:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | null = null
  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element ? element : variant}
  class="
    {variant == 'h1' &&
    'text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800'}
    {variant == 'h2' && 'text-4xl font-bold text-gray-800'}
    {variant == 'h3' && 'text-3xl font-bold text-gray-800'}
    {variant == 'h4' && 'text-2xl font-bold text-gray-800'}
    {variant == 'h5' && 'text-xl font-bold text-gray-800'}
    {variant == 'h6' && 'text-lg font-bold text-gray-800'}

    {variant == 'p' && 'text-base text-neutral-500 leading-relaxed'}
    {variant == 'span' && 'text-base text-neutral-500'}

    {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
