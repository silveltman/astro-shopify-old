<script lang="ts">
</script>

<div class="w-full relative grid auto gap-res">
  <slot />
</div>

<style>
  .auto {
    grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));
  }
</style>
