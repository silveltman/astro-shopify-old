<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Switch } from '@rgossiaux/svelte-headlessui'

  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let disabled: boolean = false

  let active = false

  const dispatch = createEventDispatcher()
  $: dispatch('switch', active)
</script>

<Switch
  class="rounded-full flex items-center transition-all focus disabled
  
    {active ? '!bg-success' : '!bg-gray-400'}
    {disabled && 'disabled:opacity-30'}

    {size === 'sm' && 'h-4 w-8 '}
    {size === 'md' && 'h-6 w-12'}
    {size === 'lg' && 'h-8 w-16'}
    "
  {disabled}
  checked={active}
  on:change={(e) => (active = e.detail)}
>
  <div
    class="w-1/2 h-full p-1 translate-x-full transition-transform"
    class:translate-x-0={!active}
    class:translate-x-full={active}
  >
    <div
      class="rounded-full bg-white transition-colors hover:bg-gray-100 h-full w-full"
    />
  </div>
</Switch>
