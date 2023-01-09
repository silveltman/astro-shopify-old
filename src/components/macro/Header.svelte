<script lang="ts">
  type MenuItems = (StaticLink | CollectionLink | Dropdown)[]

  interface StaticLink {
    name: string
    href: string
  }

  interface CollectionLink {
    name: string
    collection: string
  }

  interface Dropdown {
    name: string
    lists: List[]
  }

  interface List {
    name: string
    links: (StaticLink | CollectionLink)[]
  }

  export let menuItems: MenuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Shop',
      lists: [
        {
          name: 'Featured',
          links: [
            {
              name: 'Sleep',
              href: '#',
            },
            {
              name: 'Swimwear',
              href: '#',
            },
            {
              name: 'Underwear',
              collection: 'underwear',
            },
          ],
        },
        {
          name: 'Collection',
          links: [
            {
              name: 'Everything',
              href: '#',
            },
            {
              name: 'Core',
              href: '#',
            },
            {
              name: 'New arrivals',
              collection: 'newarrivals',
            },
          ],
        },
      ],
    },
    {
      name: 'About',
      href: '/about',
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
