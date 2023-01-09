<script lang="ts">
  type MenuItems = (PageLink | CollectionLink | Dropdown)[]

  interface PageLink {
    name: string
    href: string
  }

  interface CollectionLink {
    name: string
    collection: string
  }

  interface Dropdown {
    name: string
    lists: {
      name: string
      links: (PageLink | CollectionLink)[]
    }[]
  }

  export let menuItems: MenuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Swimwear',
      collection: 'swimwear',
    },
    {
      name: 'Men',
      lists: [
        {
          name: 'Collections',
          links: [
            {
              name: 'Sleep',
              collection: 'sleep',
            },
            {
              name: 'Swimwear',
              collection: 'swimwear',
            },
            {
              name: 'Underwear',
              collection: 'underwear',
            },
          ],
        },
        {
          name: 'Shop',
          links: [
            {
              name: 'Sleep',
              collection: 'sleep',
            },
            {
              name: 'Swimwear',
              collection: 'swimwear',
            },
            {
              name: 'Underwear',
              collection: 'underwear',
            },
          ],
        },
      ],
    },
    {
      name: 'About',
      href: '#',
    },
  ]
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
    {#each menuItems as menuItem}
      {#if condition}
        <!-- content here -->
      {/if}
    {/each}
  </nav>
</header>
