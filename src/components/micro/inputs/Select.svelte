<script lang="ts">
  import Icon from '@components/micro/content/Icon.svelte'
  import FormFieldWrapper from '@components/layout/FormFieldWrapper.svelte'

  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let type: 'text' | 'password' | 'email' | 'number' | 'hidden' = 'text'
  export let name = ''
  export let disabled: boolean = false
  export let hideLabel: boolean = false
  export let label = 'my label'
  export let helperText = 'put this here'
  export let startIcon: string = ''
  export let endIcon: string = ''
  export let errorText = ''
  export let required: boolean = false

  export let options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'saab', label: 'Saab' },
    { value: 'mercedes', label: 'Mercedes benssssssssssssss' },
    { value: 'audi', label: 'Audi' },
  ]
</script>

<FormFieldWrapper
  {size}
  {name}
  {label}
  {hideLabel}
  {helperText}
  {errorText}
>
  <select
    {required}
    {name}
    id={name}
    class="input py-0
        
        {size === 'sm' && 'h-8 px-2 text-sm'}
        {size === 'md' && 'h-10 px-3 text-base'}
        {size === 'lg' && 'h-12 px-4 text-lg'}
        
        {startIcon && size === 'sm' && 'pl-8'}
        {startIcon && size === 'md' && 'pl-10'}
        {startIcon && size === 'lg' && 'pl-12'}
  
        {endIcon && size === 'sm' && 'pr-8'}
        {endIcon && size === 'md' && 'pr-10'}
        {endIcon && size === 'lg' && 'pr-12'}
        "
  >
    <option
      value=""
      disabled
      selected>Select your option</option
    >
    {#each options as { value, label }}
      <option {value}>{label}</option>
    {/each}
  </select>
</FormFieldWrapper>
