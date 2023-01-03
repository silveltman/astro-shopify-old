<script lang="ts">
  export let name: string = ''
  export let size: '20' | '24' | '40' | '48' = '24'
  let className = ''
  export { className as class }
</script>

<svelte:head>
  <!-- Material symbols -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</svelte:head>

<i
  class="material-symbols-rounded {className}"
  style={`font-size:${size}px;font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "OPSZ" ${size};`}
>
  {name}
</i>
