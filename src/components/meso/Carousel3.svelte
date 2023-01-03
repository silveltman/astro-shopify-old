<script>
  import IconButton from '@components/micro/inputs/IconButton.svelte'
</script>

<div class="flex items-stretch">
  <IconButton class="!h-full" />
  <ul class="flex w-full relative overflow-x-auto snap-x snap-mandatory">
    <li class="w-1/2 px-4 snap-start shrink-0">
      <span class="bg-red-300 w-full flex h-20"> my content </span>
    </li>
    <li class="w-1/2 px-4 snap-start shrink-0">
      <span class="bg-red-300 w-full flex h-20"> my content </span>
    </li>
    <li class="w-1/2 px-4 snap-start shrink-0">
      <span class="bg-red-300 w-full flex h-20"> my content </span>
    </li>
    <li class="w-1/2 px-4 snap-start shrink-0">
      <span class="bg-red-300 w-full flex h-20"> my content </span>
    </li>
  </ul>
  <IconButton class="!h-full" />
</div>
