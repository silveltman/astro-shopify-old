<script lang="ts">
  interface Navigation {
    items: any
  }
</script>

<header>
  <a href="/">
    <img
      class="h-8 w-auto"
      src="/assets/img/logo/icon.svg"
      alt=""
    />
  </a>
  <nav>
    {#each items as item}
      <!-- content here -->
    {/each}
  </nav>
</header>
