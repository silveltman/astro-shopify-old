<script lang="ts">
  import {
    Popover,
    PopoverButton,
    PopoverPanel,
  } from '@rgossiaux/svelte-headlessui'
  import Button from '@components/micro/inputs/Button.svelte'
  import IconButton from '@components/micro/inputs/IconButton.svelte'
  import Container from '@components/layout/Container.svelte'
  import Icon from '@components/micro/content/Icon.svelte'
  import Collection from '@components/meso/card/Collection.svelte'
  type MenuItems = (PageLink | CollectionLink | Dropdown)[]

  interface PageLink {
    _type: 'PageLink'
    name: string
    href: string
  }

  interface CollectionLink {
    _type: 'CollectionLink'
    name: string
    collection: string
  }

  interface Dropdown {
    _type: 'Dropdown'
    name: string
    lists: {
      name: string
      links: (PageLink | CollectionLink)[]
    }[]
  }

  export let menuItems: MenuItems = [
    {
      _type: 'PageLink',
      name: 'Home',
      href: '/',
    },
    {
      _type: 'PageLink',
      name: 'About',
      href: '/about',
    },
    {
      _type: 'Dropdown',
      name: 'Collections',
      lists: [
        {
          name: 'All Collections',
          links: [
            {
              _type: 'CollectionLink',
              name: 'All Collections',
              collection: 'all',
            },
          ],
        },
        {
          name: 'Collections',
          links: [
            {
              _type: 'CollectionLink',
              name: 'Collection 1',
              collection: 'collection-1',
            },
            {
              _type: 'CollectionLink',
              name: 'Collection 2',
              collection: 'collection-2',
            },
            {
              _type: 'CollectionLink',
              name: 'Collection 3',
              collection: 'collection-3',
            },
          ],
        },
      ],
    },
  ]

  const getHref = (item) => {
    if (item._type === 'PageLink') {
      return item.href
    } else if (item._type === 'CollectionLink') {
      return `/collections/${item.collection}`
    }
  }
</script>

<header class="relative z-50">
  <nav class="flex w-full">
    <!-- Secondary -->
    <div class="w-full">
      <Container>
        <div
          class="flex items-center gap-lg w-full h-16 border-b border-gray-200"
        >
          <!-- Hamburger -->
          <IconButton
            variant="subtle"
            color="dark"
            content={{ icon: 'menu' }}
          />

          <!-- Logo -->
          <a href="/">
            <img
              class="h-8 w-auto"
              src="/img/logo/icon.svg"
              alt=""
            />
          </a>k

          <!-- Menu -->
          <div class="gap-x-lg h-full items-center hidden lg:flex">
            {#each menuItems as menuItem}
              <!-- Dropdown -->
              {#if menuItem._type == 'Dropdown'}
                <Popover
                  let:open
                  class="h-full"
                >
                  <PopoverButton class="flex items-center gap-xs h-full">
                    <span
                      class="flex h-full items-center border-b-2 -mb-0.5"
                      class:border-primary={open}
                    >
                      {menuItem.name}
                    </span>
                    <Icon
                      name="expand_more"
                      class={open ? 'rotate-180' : ''}
                    />
                  </PopoverButton>

                  <!-- Dropdown menu -->
                  <PopoverPanel
                    class="absolute top-full left-0 right-0 border-b py-xl bg-white w-full shadow-lg"
                  >
                    <Container class="w-full flex gap-xl">
                      {#each menuItem.lists as list}
                        <div class="flex flex-col gap-y">
                          <h6>{list.name}</h6>
                          <ul class="flex flex-col gap-y-sm">
                            {#each list.links as link}
                              <li>
                                <a href={getHref(link)}>
                                  {link.name}
                                </a>
                              </li>
                            {/each}
                          </ul>
                        </div>
                      {/each}
                    </Container>
                  </PopoverPanel>
                </Popover>

                <!-- PageLink | CollectionLink -->
              {:else}
                <a href={getHref(menuItem)}>
                  {menuItem.name}
                </a>
              {/if}
            {/each}
          </div>

          <!-- Icons -->
          <div class="ml-auto">
            <IconButton
              variant="subtle"
              color="dark"
              content={{ icon: 'search' }}
            />
            <Button
              variant="subtle"
              color="dark"
              content={{ startIcon: 'shopping_cart', text: '0' }}
            />
          </div>
        </div>
      </Container>
    </div>
  </nav>
</header>
