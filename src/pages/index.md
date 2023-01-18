---
layout: '@layouts/pages/Index.astro'
seo:
    title:
    description:
image: https://storage.googleapis.com/astro-shopify-testing/kaart.png
second_image:
menu_items:
    -
        _type: PageLink
        name: Home
        href: /
    -
        _type: PageLink
        name: About
        href: /
    -
        _type: CollectionLink
        name: Swimwear
        collection: swimwear
    -
        _type: Dropdown
        name: Featured
        lists:
            -
                name: Featured
                links:
                    -
                        _type: CollectionLink
                        name: Sleep
                        collection: Swimwear
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
