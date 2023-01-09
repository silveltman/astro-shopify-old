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
</script>
