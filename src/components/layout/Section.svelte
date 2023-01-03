<script lang="ts">
  let className = ''
  export { className as class }
</script>

<div class="w-full py-section relative {className}">
  <slot />
</div>
