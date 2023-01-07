// https://shopify.dev/api/storefront

interface Collection {
    description: string;
    descriptionHtml: string;
    handle: string;
    id: string;
    image: Image | null;
    metafield: Metafield | null;
    metafields: Metafield[];
    onlineStoreUrl: string | null;
    seo: SEO;
    title: string;
    updatedAt: string;

    // CONNECTIONS
    products: Product[];
}

interface Product {
    availableForSale: boolean;
    compareAtPriceRange: ProductPriceRange;
    createdAt: string;
    description: string;
    descriptionHtml: string;
    featuredImage: Image | null;
    handle: string;
    id: string;
    isGiftCard: boolean;
    metafield: Metafield | null;
    metafields: Metafield[];
    onlineStoreUrl: string | null;
    options: ProductOption[];
    priceRange: ProductPriceRange;
    productType: string;
    publishedAt: string;
    requiresSellingPlan: boolean;
    seo: SEO;
    tags: string[];
    title: string;
    totalInventory: number | null;
    updatedAt: string;
    variantBySelectedOptions: ProductVariant | null;

    // CONNECTIONS
    collections: Collection[];
    images: Image[];
    // media: Media[];
    // sellingPlanGroups: SellingPlanGroup[];
    variants: ProductVariant[];
}

interface ProductVariant {
    availableForSale: boolean;
    barcode: string | null;
    compareAtPrice: MoneyV2 | null;
    currentlyNotInStock: boolean;
    id: string;
    image: Image | null;
    metafield: Metafield | null;
    metafields: Metafield[];
    price: MoneyV2;
    product: Product;
    quantityAvailable: number | null;
    requiresShipping: boolean;
    selectedOptions: SelectedOption[];
    sku: string | null;
    title: string;
    unitPrice: MoneyV2 | null;
    unitPriceMeasurement: UnitPriceMeasurement | null;
    weight: number | null;
    weightUnit: WeightUnit;
    compareAtPriceV2: MoneyV2 | null;
    priceV2: MoneyV2;

    // CONNECTIONS
    // sellingPlanAllocations: SellingPlanAllocation[];
    // storeAvailability: StoreAvailability[];
}

interface Metafield {
    createdAt: string;
    description: string | null;
    id: string;
    key: string;
    namespace: string;
    parentResource: MetafieldParentResource;
    reference: MetafieldReference | null;
    type: string;
    updatedAt: string;
    value: string;

    // CONNECTIONS
    references: MetafieldReference[];
}

type MetafieldParentResource = object // Article | Blog | Collection | Customer | Order | Page | Product | ProductVariant | Shop
type MetafieldReference = object // Collection | GenericFile | MediaImage | Metaobject | Page | Product | ProductVariant | Video

interface UnitPriceMeasurement {
    measuredType: UnitPriceMeasurementMeasuredType;
    quantityUnit: UnitPriceMeasurementMeasuredUnit;
    quantityValue: number;
    referenceUnit: UnitPriceMeasurementMeasuredUnit;
    referenceValue: number;
}

type UnitPriceMeasurementMeasuredType = 'AREA' | 'LENGTH' | 'VOLUME' | 'WIEGHT';
type UnitPriceMeasurementMeasuredUnit = 'CL' | 'CM' | 'G' | 'KG' | 'L' | 'M' | 'M2' | 'M3' | 'MG' | 'ML' | 'mm';
type WeightUnit = 'GRAMS' | 'KILOGRAMS' | 'OUNCES' | 'POUNDS';

interface ProductOption {
    id: string;
    name: string;
    values: string[];
}

interface SelectedOption {
    name: string;
    value: string;
}

interface ProductPriceRange {
    maxVariantPrice: MoneyV2;
    minVariantPrice: MoneyV2;
}

interface SEO {
    description: string | null;
    title: string | null;
}

interface Image {
    altText: string | null;
    height: number | null;
    id: string | null;
    url: string;
    width: number | null;

    // DEPRECATED
    originalSrc: string;
    src: string;
    transformedSrc: string;
}

interface Checkout {
    appliedGiftCards: AppliedGiftCard[];
    availableShippingRates: AvailableShippingRates | null;
    buyerIdentity: CheckoutBuyerIdentity;
    completedAt: string | null;
    createdAt: string;
    currencyCode: string;
    customAttributes: Attribute[];
    email: string | null;
    id: string;
    lineItemsSubtotalPrice: MoneyV2;
    note: string | null;
    order: Order | null;
    orderStatusUrl: string | null;
    paymentDue: MoneyV2;
    ready: boolean;
    requiresShipping: boolean;
    shippingAddress: MailingAddress | null;
    shippingDiscountAllocations: DiscountAllocation[];
    shippingLine: ShippingRate | null;
    subtotalPrice: MoneyV2;
    taxExempt: boolean;
    taxesIncluded: boolean;
    totalDuties: MoneyV2 | null;
    totalPrice: MoneyV2;
    totalTax: MoneyV2 | null;
    updatedAt: string;
    webUrl: string;

    // DEPRECATED
    paymentDueV2: MoneyV2;
    subtotalPriceV2: MoneyV2;
    totalPriceV2: MoneyV2;
    totalTaxV2: MoneyV2;

    // CONNECTIONS
    discountApplications: DiscountApplication[];
    lineItems: CheckoutLineItem[];
}

// DEPRECATED
interface CheckoutLineItem {
    customAttributes: Attribute[];
    discountAllocations: DiscountAllocation[];
    id: string;
    quantity: number;
    title: string;
    UnitPrice: MoneyV2;
    variant: ProductVariant;
}

interface MailingAddress {
    address1: string | null;
    address2: string | null;
    city: string | null;
    company: string | null;
    country: string | null;
    countryCodeV2: string | null;
    firstName: string | null;
    formatted: [string];
    formattedArea: string | null;
    id: string;
    lastName: string | null;
    latitude: number | null;
    longitude: number | null;
    name: string | null;
    phone: string | null;
    province: string | null;
    provinceCode: string | null;
    zip: string | null;

    // DEPRECATED
    countryCode: string | null;
}

interface DiscountAllocation {
    allocatedAmount: MoneyV2;
    discountApplication: DiscountApplication;
}

interface DiscountApplication {
    allocationMethod: DiscountApplicationAllocationMethod;
    targetSelection: DiscountApplicationTargetSelection;
    targetType: DiscountApplicationTargetType;
    value: PricingValue;
}

type DiscountApplicationAllocationMethod = 'ACROSS' | 'EACH' | 'ONE'; // ONE is deprecated
type DiscountApplicationTargetSelection = 'ALL' | 'ENTITLED' | 'EXPLICIT';
type DiscountApplicationTargetType = 'LINE_ITEM' | 'SHIPPING_LINE';
type PricingValue = MoneyV2 | PricingPercentageValue;

interface PricingPercentageValue {
    percentage: number;
}

interface AvailableShippingRates {
    ready: boolean;
    shippingRates: ShippingRate[] | null;
}

interface ShippingRate {
    handle: string;
    price: MoneyV2;
    title: string;

    // DEPRECATED
    priceV2: MoneyV2;
}

interface CheckoutBuyerIdentity {
    countryCode: string | null;
}

interface Attribute {
    key: string;
    value: string | null;
}


interface AppliedGiftCard {
    amountUsed: MoneyV2;
    balance: MoneyV2;
    id: string;
    lastCharacters: string;
    presentmentAmountUsed: MoneyV2;

    // DEPRECATED
    amountUsedV2: MoneyV2;
    balanceV2: MoneyV2;
}


interface Order {
    cancelReason: OrderCancelReason | null;
    canceledAt: string | null;
    currencyCode: string;
    currentSubtotalPrice: MoneyV2;
    currentTotalDuties: MoneyV2 | null;
    currentTotalPrice: MoneyV2;
    currentTotalTax: MoneyV2;
    customAttributes: Attribute[];
    customerLocale: string | null;
    customerUrl: string | null;
    edited: boolean;
    email: string | null;
    financialStatus: OrderFinancialStatus | null;
    fulfillmentStatus: OrderFulfillmentStatus;
    id: string;
    metafield: Metafield | null;
    metafields: Metafield[];
    name: string;
    orderNumber: number;
    originalTotalDuties: MoneyV2 | null;
    originalTotalPrice: MoneyV2;
    phone: string | null;
    processedAt: string;
    shippingAddress: MailingAddress | null;
    shippingDiscountAllocations: DiscountAllocation[];
    statusUrl: string;
    subtotalPrice: MoneyV2 | null;
    successfulFulfillments: Fulfillment[] | null;
    totalPrice: MoneyV2;
    totalRefunded: MoneyV2;
    totalShippingPrice: MoneyV2;
    totalTax: MoneyV2 | null;

    // DEPRECATED
    subtotalPriceV2: MoneyV2 | null;
    totalPriceV2: MoneyV2;
    totalRefundedV2: MoneyV2;
    totalShippingPriceV2: MoneyV2;
    totalTaxV2: MoneyV2 | null;

    // CONNECTIONS
    discountApplications: DiscountApplication[];
    lineItems: OrderLineItem[];
}

interface Fulfillment {
    trackingCompany: string | null;
    trackingInfo: FulfillmentTrackingInfo[];

    // CONNECTIONS
    fulfillmentLineItems: FulfillmentLineItem[];
}

interface FulfillmentTrackingInfo {
    number: string | null;
    url: string | null;
}

interface FulfillmentLineItem {
    lineItem: OrderLineItem;
    quantity: number;
}

type OrderCancelReason = 'CUSTOMER' | 'DECLINED' | 'FRAUD' | 'INVENTORY' | 'OTHER';
type OrderFinancialStatus = 'AUTHORIZED' | 'PAID' | 'PARTIALLY_PAID' | 'PARTIALLY_REFUNDED' | 'PENDING' | 'REFUNDED' | 'VOIDED';
type OrderFulfillmentStatus = 'FULFILLED' | 'PARTIALLY_FULFILLED' | 'PENDING' | 'RESTOCKED' | 'UNFULFILLED';

// DEPRECATED
interface OrderLineItem {
    currencyQuantity: number;
    customAttributes: Attribute[];
    discountAllocations: DiscountAllocation[];
    discountTotalPrice: MoneyV2;
    orginalTotalPrice: MoneyV2;
    quantity: number;
    title: string;
    variant: ProductVariant | null;
}

interface MoneyV2 {
    amount: string;
    currencyCode: string;
}


export { Product, Collection, Checkout, Image }