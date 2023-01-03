<script lang="ts">
  export let type: boolean = false
  export let variant: 'color' | 'monochrome' = 'color'
  export let href: string = ''
import {logo} from '@data/general.yaml'

</script>

<svelte:component
this={href ? 'a' : 'div'}
class="flex items-center"
>
{#if type === 'full'}
    <img src={logo.src} alt={logo.alt}>
    <span>

    </span>
</svelte:component>
