<script lang="ts">
  import FormFieldWrapper from '@components/layout/FormFieldWrapper.svelte'

  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let name = ''
  export let disabled: boolean = false
  export let hideLabel: boolean = false
  export let label = 'my label'
  export let helperText = 'put this here'
  export let errorText = ''
  export let required: boolean = false
  export let rows: number = 5
</script>

<FormFieldWrapper
  {size}
  {name}
  {label}
  {helperText}
  {errorText}
  {hideLabel}
>
  <textarea
    {required}
    {disabled}
    id={name}
    {name}
    {rows}
    class="input
        
        {size === 'sm' && 'px-2 py-1 text-sm'}
        {size === 'md' && 'px-3 py-1.5 text-base'}
        {size === 'lg' && 'px-4 py-2 text-lg'}
        "
  />
</FormFieldWrapper>
