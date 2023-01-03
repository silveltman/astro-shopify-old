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
</script>

<FormFieldWrapper
  {size}
  {name}
  {label}
  {helperText}
  {errorText}
  {hideLabel}
>
  <div class="relative">
    {#if startIcon}
      <Icon
        class="absolute left-0 top-0 flex items-center justify-center text-gray-500
         {size === 'sm' && 'w-8 h-8'}
         {size === 'md' && 'w-10 h-10'}
         {size === 'lg' && 'w-12 h-12'}
         "
        name="phone"
        size={size === 'sm' ? '20' : '24'}
      />
    {/if}
    <input
      {required}
      {disabled}
      {type}
      id={name}
      {name}
      class="input

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
    />
    {#if endIcon}
      <Icon
        class="absolute right-0 top-0 flex items-center justify-center text-gray-500
       {size === 'sm' && 'w-8 h-8'}
       {size === 'md' && 'w-10 h-10'}
       {size === 'lg' && 'w-12 h-12'}
       "
        name={endIcon}
        size={size === 'sm' ? '20' : '24'}
      />
    {/if}
  </div>
</FormFieldWrapper>
