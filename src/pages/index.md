---
layout: '@layouts/pages/Index.astro'
seo:
    title:
    description:
image: >-
    https://images.unsplash.com/photo-1673117921063-5dde75f25a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80
image2:
menu_items:
    -
        name: Home
        href: /
    -
        name: Bikes
        collection: bikes
    -
        name: Men
        lists:
            -
                name: Featured
                links:
                    -
                        name: Swimwear
                        href: '#'
                    -
                        name: Underwear
                        collection: underwear
_structures:
    menu_items:
        id_key:
        values:
            -
                label: Static link
                value:
                    name:
                    href:
            -
                label: Collection link
                value:
                    name:
                    collection:
            -
                label: Dropdown
                value:
                    name:
                    lists:
                        -
                            name:
                            links:
    links:
        id_key:
        values:
            -
                label: Static link
                value:
                    name:
                    href:
            -
                label: Collection link
                value:
                    name:
                    collection:
---
