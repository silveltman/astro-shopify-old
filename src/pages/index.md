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
        name: Swimwear
        collection: swimwear
    -
        name: Men
        lists:
            -
                name: Collections
                links:
                    -
                        name: Sleep
                        collection: sleep
                    -
                        name: Swimwear
                        collection: swimwear
                    -
                        name: Underwear
                        collection: underwear
            -
                name: Featured
                links:
                    -
                        name: Leather jacket
                        href: '#'
                    -
                        name: Purple hat
                        href: '#'
                    -
                        name: Red bandana
                        href: '#'
    -
        name: About
        href: '#'

_structures:
    menu_items:
        values:
            -
                label: Page link
                icon: article
                text_key: name
                subtext_key: href
                value:
                    _type: PageLink
                    name:
                    href:
            -
                label: Collection link
                icon: category
                text_key: name
                subtext_key: collection
                value:
                    _type: CollectionLink
                    name:
                    collection:
            -
                label: Dropdown
                icon: format_list_bulleted
                text_key: name
                subtext_key: lists
                value:
                    _type: Dropdown
                    name:
                    lists:
                        -
                            name:
                            links:
    links:
        values:
            -
                label: Page link
                icon: article
                text_key: name
                subtext_key: href
                value:
                    _type: PageLink
                    name:
                    href:
            -
                label: Collection link
                icon: category
                text_key: name
                subtext_key: collection
                value:
                    _type: CollectionLink
                    name:
                    collection:
---
