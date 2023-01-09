import { Image, Metafield, SEO, MoneyV2 } from './common';

export interface Collection {
    description: string;
    descriptionHtml: string;
    handle: string;
    id: string;
    image?: Image;
    metafield?: Metafield;
    metafields: Metafield[];
    onlineStoreUrl?: string;
    seo: SEO;
    title: string;
    updatedAt: string;

    // Connections
    products: Product[];

    // For type guard
    type: any
}

export interface Product {
    availableForSale: boolean;
    compareAtPriceRange: ProductPriceRange;
    createdAt: string;
    description: string;
    descriptionHtml: string;
    featuredImage?: Image;
    handle: string;
    id: string;
    isGiftCard: boolean;
    metafield?: Metafield;
    metafields: Metafield[];
    onlineStoreUrl?: string;
    options: ProductOption[];
    priceRange: ProductPriceRange;
    productType: string;
    publishedAt: string;
    requiresSellingPlan: boolean;
    seo: SEO;
    tags: string[];
    title: string;
    totalInventory?: number;
    updatedAt: string;
    variantBySelectedOptions?: ProductVariant;
    vendor: string;

    // Connections
    collections: Collection[];
    images: Image[];
    media: Media[];
    sellingPlanGroups: SellingPlanGroup[];
    variants: ProductVariant[];

    // For type guard
    type: any
}

export interface ProductVariant {
    availableForSale: boolean;
    barcode?: string;
    compareAtPrice?: MoneyV2;
    currentlyNotInStock: boolean;
    id: string;
    image?: Image;
    metafield?: Metafield;
    metafields: Metafield[];
    price: MoneyV2;
    product: Product;
    quantityAvailable?: number;
    requiresShipping: boolean;
    selectedOptions: SelectedOption[];
    sku?: string;
    title: string;
    unitPrice?: MoneyV2;
    unitPriceMeasurement?: UnitPriceMeasurement;
    weight?: number;
    weightUnit: WeightUnit;

    // Deprecated fields
    compareAtPriceV2?: MoneyV2;
    priceV2?: MoneyV2;

    // Connections
    sellingPlanAllocations: SellingPlanAllocation[];
    storeAvailability: StoreAvailability[];
}

export interface ProductOption {
    id: string;
    name: string;
    values: string[];
}

export interface SelectedOption {
    name: string;
    value: string;
}

export interface ProductPriceRange {
    maxVariantPrice: MoneyV2;
    minVariantPrice: MoneyV2;
}

export interface Media {
    alt?: string;
    mediaContent: MediaContentType;
    previewImage: Image;
}

type WeightUnit = 'GRAMs' | 'KILOGRAMS' | 'OUNCES' | 'POUNDS';
type MediaContentType = 'EXTERNAL_VIDEO' | 'IMAGE' | 'MODEL_3D' | 'VIDEO';

// Maybe later...
type SellingPlanGroup = any;
type UnitPriceMeasurement = any;
type SellingPlanAllocation = any;
type StoreAvailability = any;


