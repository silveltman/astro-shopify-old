<script lang="ts">
  export let menuItems: MenuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Shop',
      dropdown_items: [
        {
          name: 'Featured',
          list_items: [
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
          list_items: [
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

  type MenuItems = (Link | Dropdown)[]

  interface Dropdown {
    name: string
    dropdown_items: List[]
  }

  interface List {
    name: string
    list_items: Link[]
  }

  type Link = StaticLink | CollectionLink

  interface StaticLink {
    name: string
    href: string
  }

  interface CollectionLink {
    name: string
    collection: string
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
    {#each menuItems as menuItem}
      {#if condition}
        <!-- content here -->
      {/if}
    {/each}
  </nav>
</header>
