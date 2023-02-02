export interface Image {
    altText?: string;
    height?: number;
    id?: string;
    url?: string;
    width?: number;

    // Deprecated fields
    originalSrc?: string;
    src?: string;
    transformedSrc?: string;
}

export interface MoneyV2 {
    amount: number;
    s: string
}

export interface SEO {
    description?: string;
    title?: string;
}

export interface Metafield {
    createdAt: string;
    description?: string;
    id: string;
    key: string;
    namespace: string;
    parentResource: MetafieldParentResource;
    reference?: MetafieldReference;
    type: string;
    updatedAt: string;
    value: string;
    references?: MetafieldReference[];
}

type MetafieldParentResource = any;
type MetafieldReference = any;
