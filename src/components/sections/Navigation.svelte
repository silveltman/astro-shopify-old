<script lang="ts">
  import Logo from '@components/atoms/Logo.svelte'
  import Container from '@components/layouts/Container.svelte'
  import Link from '@components/atoms/Link.svelte'
  import ButtonIcon from '@components/atoms/ButtonIcon.svelte'

  const links = [
    { href: '#', text: 'Women' },
    { href: '#', text: 'Men' },
  ]

  let isOpen: boolean = false
</script>

<header>
  <nav>
    <Container>
      <div
        class="relative flex items-center h-16 border-b border-gray-200 gap-x-lg"
      >
        <ButtonIcon
          class="lg:hidden"
          theme="dark"
          icon="menu"
          on:click={() => (isOpen = true)}
        />

        <Logo href="/" />

        <div class="hidden h-full lg:flex gap-x-lg">
          {#each links as link}
            <Link
              size="sm"
              class="flex items-center h-full"
              text={link.text}
              href={link.href}
            />
          {/each}
        </div>

        <div class="flex ml-auto gap-x-sm">
          <ButtonIcon
            theme="dark"
            icon="search"
          />
          <ButtonIcon
            theme="dark"
            icon="shopping_cart"
            text="0"
          />
        </div>
      </div>
    </Container>
  </nav>
</header>

{#if isOpen}
  <aside class="fixed inset-0 z-50 flex">
    <nav
      class="relative flex flex-col w-full h-full max-w-xs overflow-y-auto bg-white px"
    >
      <div class="py">
        <ButtonIcon
          icon="close"
          text="close"
          theme="dark"
          on:click={() => (isOpen = false)}
        />
      </div>

      <div
        class="flex flex-col items-start border-t border-gray-200 gap-y-lg py-lg"
      >
        {#each links as link}
          <Link
            class="flex items-center h-full"
            text={link.text}
            href={link.href}
          />
        {/each}
      </div>
    </nav>
    <button
      class="w-full h-full bg-black/20"
      on:click={() => (isOpen = false)}
    />
  </aside>
{/if}
