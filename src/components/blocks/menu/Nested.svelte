<script lang="ts">
  import type { Collection } from '@interfaces/shopify/product'
  import AspectRatio from '@components/layout/AspectRatio.svelte'
  import ShopifyImg from '@components/micro/content/ShopifyImg.svelte'
  import Icon from '@components/micro/content/Icon.svelte'

  interface Nested {
    name: string // Name in nav bar and above first group
    children: (Group | Single)[]
  }

  interface Group {
    name: string
    collection: Collection // Name above second group
    children: (Group | Single)[]
  }

  interface Single {
    name: string
    collection: Collection
  }

  // Type guards
  const isGroup = (item: Group | Single): item is Group =>
    (item as Group).hasOwnProperty('children') == true

  export let cms: Nested
</script>

<div class="w-full">
  <div>
    <h6>{cms.name}</h6>
    <ul class="w-full gap-y-sm grid grid-cols-1">
      {#each cms.children as child}
        <li class="">
          <a
            href={`/collections/${child.collection.handle}`}
            class="h-12 flex row-start-1 col-start-1 items-center bg-red-100 gap-x row-span-1"
          >
            <ShopifyImg
              class="w-12 h-12 rounded-md object-cover"
              image={child.collection.image}
            />
            <span>
              {child.name || child.collection.title}
            </span>
            {#if isGroup(child)}
              <Icon
                class="ml-auto mr"
                name="chevron_right"
              />
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<!-- <div class="w-full">
  <h6>{cms.name}</h6>
  <ul class="w-full gap-y-sm grid grid-cols-1">
    {#each cms.children as child}
      <li class="">
        <a
          href={`/collections/${child.collection.handle}`}
          class="h-12 flex row-start-1 col-start-1 items-center bg-red-100 gap-x row-span-1"
        >
          <ShopifyImg
            class="w-12 h-12 rounded-md object-cover"
            image={child.collection.image}
          />
          <span>
            {child.name || child.collection.title}
          </span>
          {#if isGroup(child)}
            <Icon
              class="ml-auto mr"
              name="chevron_right"
            />
          {/if}
        </a>
        <div class="bg-primary/50 h-40 w-full row-start-1" />

        <!-- {#if isGroup(child)}
          <ul class="row-start-1 col-span-full">
            {#each child.children as secondChild}
              <li>
                <a href={`/collections/${secondChild.collection.handle}`}>
                  <span>
                    {secondChild.name || secondChild.collection.title}
                  </span>
                  {#if isGroup(secondChild)}
                    <Icon name="chevron_right" />
                  {/if}
                </a>

                {#if isGroup(secondChild)}
                  <ul>
                    {#each secondChild.children as thirdChild}
                      <li>
                        <a
                          href={`/collections/${thirdChild.collection.handle}`}
                        >
                          <span>
                            {thirdChild.name}
                          </span>
                        </a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </li>
            {/each}
          </ul>
        {/if} -->
<!-- </li>
    {/each}
  </ul>
</div> --> -->

<ul>
  <li>
    one
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  </li>
  <li>
    two
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  </li>
  <li>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
    three
  </li>
</ul>
