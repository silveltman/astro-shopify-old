<script lang="ts">
  export let space: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none' = 'md'
  export let count: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 = 4
</script>

<ul
  class="flex w-full relative overflow-x-auto snap-x snap-mandatory sm:items-1
{space == 'xs' && 'gap-x-1'}
{space == 'sm' && 'gap-x-2'}
"
  style="--items: 3;"
>
  <li class="w-1/2 snap-start shrink-0 bg-red-200">my content</li>
  <li class="w-1/2 snap-start shrink-0 bg-red-200">my content</li>
  <li class="w-1/2 snap-start shrink-0 bg-red-200">my content</li>
  <li class="w-1/2 snap-start shrink-0 bg-red-200">my content</li>
</ul>

<style>
  .items-1 {
    --items: 1;
  }
  .items-2 {
    --items: 2;
  }
  .items-3 {
    --items: 3;
  }
  .items-4 {
    --items: 4;
  }
  .items-5 {
    --items: 5;
  }
  .items-6 {
    --items: 6;
  }
  .items-7 {
    --items: 7;
  }
  .items-8 {
    --items: 8;
  }

  .space-xs {
    --space: theme(spacing.1);
  }

  .space-sm {
    --space: theme(spacing.2);
  }

  .space-md {
    --space: theme(spacing.4);
  }

  .space-lg {
    --space: theme(spacing.6);
  }

  .space-xl {
    --space: theme(spacing.8);
  }

  .space-none {
    --space: theme(spacing.0);
  }

  ul {
    --gapSum: calc((var(--items) - 1) * var(--space));
    --width: calc(100% / var(--items) - var(--gapSum) / var(--items));

    column-gap: var(--space);
  }
  li {
    width: var(--width);
  }
</style>
