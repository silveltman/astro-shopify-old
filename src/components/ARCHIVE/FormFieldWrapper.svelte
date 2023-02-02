<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let name = ''
  export let label = 'my label'
  export let hideLabel: boolean = false
  export let helperText = 'put this here'
  export let errorText = ''
</script>

<div
  class="flex flex-col leading-relaxed
      {size === 'sm' && 'text-xs'}
      {size === 'md' && 'text-sm'}
      {size === 'lg' && 'text-base'}
"
>
  {#if label}
    <label
      for={name}
      class="text-gray-700 font-medium {hideLabel && 'sr-only'}"
    >
      {label}
    </label>
  {/if}

  <slot />

  {#if errorText}
    <p class="text-error">
      {errorText}
    </p>
  {:else if helperText}
    <p class="text-gray-500">
      {helperText}
    </p>
  {/if}
</div>
