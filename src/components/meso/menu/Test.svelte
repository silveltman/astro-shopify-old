<script>
  let height = 40

  const nested = [
    {
      name: '1',
      children: [
        {
          name: '1.1',
          children: [
            {
              name: '1.1.1',
            },
            {
              name: '1.1.2',
            },
            {
              name: '1.1.3',
            },
            {
              name: '1.1.4',
            },
            {
              name: '1.1.5',
            },
          ],
        },
        {
          name: '1.2',
          children: [
            {
              name: '1.2.1',
            },
            {
              name: '1.2.2',
            },
            {
              name: '1.2.3',
            },
            {
              name: '1.2.4',
            },
            {
              name: '1.2.5',
            },
          ],
        },
        {
          name: '1.3',
          children: [
            {
              name: '1.3.1',
            },
            {
              name: '1.3.2',
            },
            {
              name: '1.3.3',
            },
            {
              name: '1.3.4',
            },
            {
              name: '1.3.5',
            },
          ],
        },
        {
          name: '1.4',
          children: [
            {
              name: '1.4.1',
            },
            {
              name: '1.4.2',
            },
            {
              name: '1.4.3',
            },
            {
              name: '1.4.4',
            },
            {
              name: '1.4.5',
            },
          ],
        },
        {
          name: '1.5',
          children: [
            {
              name: '1.5.1',
            },
            {
              name: '1.5.2',
            },
            {
              name: '1.5.3',
            },
            {
              name: '1.5.4',
            },
            {
              name: '1.5.5',
            },
          ],
        },
      ],
    },
    {
      name: '2',
      children: [
        {
          name: '2.1',
          children: [
            {
              name: '2.1.1',
            },
            {
              name: '2.1.2',
            },
            {
              name: '2.1.3',
            },
            {
              name: '2.1.4',
            },
            {
              name: '2.1.5',
            },
          ],
        },
        {
          name: '2.2',
          children: [
            {
              name: '2.2.1',
            },
            {
              name: '2.2.2',
            },
            {
              name: '2.2.3',
            },
          ],
        },
      ],
    },
  ]
</script>

<ul class="bg-gray-50 grid">
  {#each nested as item, i}
    <!-- content here -->
    <li class="w-full flex pointer-events-none group">
      <div
        class="peer pointer-events-auto w-1/3 group-hover:bg-blue-100"
        style="height: {height}px; margin-top: {height * i}px;"
      >
        {item.name}
      </div>
      <ul class="w-2/3 hidden peer-hover:grid hover:grid">
        {#each item.children as child, i2}
          <li class="flex pointer-events-none row-start-1 col-start-1 group/2">
            <div
              class="w-1/2 peer pointer-events-auto group-hover/2:bg-blue-100"
              style="height: {height}px; margin-top: {height * i2}px;"
            >
              {child.name}
            </div>
            <ul class="w-1/2 hidden peer-hover:grid hover:grid">
              {#each child.children as child2}
                <div
                  class="w-fullpeer pointer-events-auto hover:bg-blue-100"
                  style="height: {height}px;"
                >
                  {child2.name}
                </div>
              {/each}
            </ul>
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style>
  li {
    @apply row-start-1 col-start-1 row-span-1 col-span-1;
  }
</style>
