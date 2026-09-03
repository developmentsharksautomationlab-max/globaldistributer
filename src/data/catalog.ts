/**
 * Sample wholesale catalog: category + product listings.
 *
 * Most product names/specs are representative listings styled after what
 * buyers find on major marketplaces (Amazon, Walmart, etc.) — written for
 * this demo catalog rather than scraped. A handful of real branded products
 * (see the entries with real photos in public/products/) were added directly
 * from live Amazon listings at the site owner's request, photos included.
 * Pricing is intentionally withheld (see PriceGate) since buyer accounts
 * aren't live yet.
 */
import { fullCatalog } from "./dpmContent";

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  sku: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  tagline: string;
  description: string;
  highlights: string[];
  packSize: string;
  moq: string;
  origin: string;
  badge?: "Bestseller" | "New Arrival" | "Trending" | "Limited Stock";
  variantIndex: number;
  /** "contain" for real product photos (white/plain background) that shouldn't be cropped. */
  imageFit?: "cover" | "contain";
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const categoryDescriptions: Record<string, string> = {
  "amazon-fba-suppliers":
    "Bulk-ready inventory and prep bundles for sellers building or restocking an Amazon FBA storefront.",
  "apparel-clothing":
    "Wholesale apparel across men's, women's, and kids' fits, stocked in resale-ready case packs.",
  "art-and-supplies":
    "Bulk art materials and creative supplies for hobby shops, schools, and studio resellers.",
  automotive:
    "Wholesale automotive accessories and maintenance essentials sourced for high-turn retail.",
  "baby-items":
    "Baby gear and nursery essentials packed in bulk for family retailers and online resellers.",
  "books-and-publications":
    "Wholesale book lots and publication assortments for booksellers and closeout retailers.",
  "business-opportunities":
    "Turnkey business and reseller programs for entrepreneurs entering wholesale distribution.",
  "business-services":
    "Support services, compliance, logistics, and account setup, for growing wholesale operations.",
  "c-store-items":
    "Convenience store staples and impulse-buy essentials, cased for fast shelf turnover.",
  "candles-oils-incense":
    "Wholesale candles, essential oils, and incense assortments for gift and home retailers.",
  "computer-products":
    "Bulk computer peripherals and accessories sourced for tech resellers and IT retailers.",
  "cell-phone-accessories":
    "High-turn mobile accessories, cases, chargers, and protectors, packed for retail display.",
  collectibles:
    "Wholesale collectibles and novelty lots for hobby shops and specialty resellers.",
  "crafts-and-supplies":
    "Bulk craft supplies and DIY materials for craft stores and marketplace sellers.",
  "dollar-store":
    "Value-priced general merchandise assortments built for dollar and variety stores.",
  dropshippers:
    "No-inventory dropship programs across trending categories, ready to plug into your store.",
  electronics:
    "Wholesale consumer electronics, audio, charging, and smart accessories, cased in bulk.",
  "fashion-accessories":
    "Wholesale sunglasses, belts, jewelry, and accessories for fashion and boutique retailers.",
  "food-and-grocery":
    "Shelf-stable food and grocery cases sourced for convenience and specialty retailers.",
  "general-merchandise":
    "Mixed-SKU general merchandise pallets and cases for broadline retail resale.",
  gifts:
    "Gift sets and novelty assortments packed for seasonal and everyday retail programs.",
  "health-beauty-and-wellness":
    "Wholesale health, beauty, and wellness products cased for pharmacy and beauty retailers.",
  "home-decor":
    "Wholesale home decor and accent pieces for furniture, gift, and lifestyle retailers.",
  jewelry:
    "Fashion and fine-inspired jewelry lots packed for boutique and kiosk resale.",
  "lawn-and-garden":
    "Bulk lawn and garden tools, decor, and seasonal essentials for outdoor retailers.",
  "military-goods":
    "Tactical gear and military-style goods cased for surplus and outdoor retailers.",
  music:
    "Wholesale music gear and audio accessories for instrument and electronics retailers.",
  perfume:
    "Designer-inspired fragrances and gift sets sourced for beauty and discount retailers.",
  promotional:
    "Custom-branded promotional products and giveaways cased for corporate and event resale.",
  "sporting-goods":
    "Wholesale fitness and sporting equipment cased for sporting goods and outdoor retailers.",
  "tools-and-hardware":
    "Bulk hand tools and hardware essentials sourced for trade and retail hardware stores.",
};

const allCategories: Category[] = fullCatalog.map((name) => {
  const slug = slugify(name);
  return {
    slug,
    name,
    description:
      categoryDescriptions[slug] ??
      `Wholesale ${name} sourced from vetted marketplace suppliers, ready for bulk resale.`,
  };
});

// Categories with newly added real products are surfaced first; everything else
// keeps its original order.
const featuredCategorySlugs = ["lawn-and-garden", "food-and-grocery", "health-beauty-and-wellness"];

export const categories: Category[] = [
  ...featuredCategorySlugs.map((slug) => allCategories.find((c) => c.slug === slug)!),
  ...allCategories.filter((c) => !featuredCategorySlugs.includes(c.slug)),
];

const productNamesBySlug: Record<string, string[]> = {
  "amazon-fba-suppliers": [
    "FBA-Ready Private Label Starter Bundle",
    "Amazon FBA Prep & Labeling Service Pack",
    "Wholesale FBA Product Assortment Case (24 Units)",
  ],
  "apparel-clothing": [
    "Men's Cotton Crewneck T-Shirt (Bulk Pack of 12)",
    "Women's Fleece Zip-Up Hoodie (Case of 24)",
    "Kids' Graphic Print T-Shirt Assortment (Pack of 36)",
  ],
  "art-and-supplies": [
    "48-Color Acrylic Paint Set (Case of 12)",
    "Kids' Washable Marker Bulk Pack (24-Count Boxes)",
    "Sketch Pad & Pencil Combo Kit (Case of 30)",
  ],
  automotive: [
    "Universal LED Headlight Bulb Kit (Case of 20)",
    "Microfiber Car Wash Towel Bulk Pack (100-Count)",
    "Digital Tire Pressure Gauge (Case of 50)",
  ],
  "baby-items": [
    "Organic Cotton Baby Onesie Multi-Pack",
    "BPA-Free Baby Bottle Set (Case of 24)",
    "Baby Swaddle Blanket Wholesale Bundle",
  ],
  "books-and-publications": [
    "Bestselling Fiction Paperback Assortment Case",
    "Children's Picture Book Bulk Bundle (20-Count)",
    "Self-Help & Motivation Book Pallet Lot",
  ],
  "business-opportunities": [
    "Turnkey Vending Machine Route Package",
    "Private Label Startup Business Kit",
    "Wholesale Reseller Certification Program",
  ],
  "business-services": [
    "LLC Formation & Compliance Service Package",
    "Wholesale Account Setup & Verification Service",
    "Bulk Order Logistics & Freight Service",
  ],
  "c-store-items": [
    "Energy Drink Assorted Flavor Case (24-Pack)",
    "Snack Chip Variety Box (Case of 48)",
    "Bottled Water Bulk Case (24-Count)",
  ],
  "candles-oils-incense": [
    "Soy Wax Jar Candle Assorted Scent Case (12-Pack)",
    "Essential Oil Diffuser Blend Wholesale Set",
    "Incense Stick Variety Bulk Pack (100-Count)",
  ],
  "computer-products": [
    "USB-C Fast Charging Hub Bulk Case",
    "Wireless Optical Mouse Bulk Pack (20-Count)",
    "Laptop Sleeve Case Wholesale Bundle",
  ],
  "cell-phone-accessories": [
    "Tempered Glass Screen Protector Bulk Case (100-Count)",
    "Shockproof Phone Case Assortment Lot",
    "Fast Charging Cable 3-Pack Display Box",
  ],
  collectibles: [
    "Trading Card Booster Box Wholesale Case",
    "Die-Cast Model Car Assortment Lot",
    "Collectible Pin & Badge Display Set",
  ],
  "crafts-and-supplies": [
    "Hot Glue Gun & Stick Bulk Bundle",
    "Ribbon & Bow Assortment Wholesale Roll Pack",
    "Craft Foam Sheet Multi-Color Case",
  ],
  "dollar-store": [
    "Household Essentials Mixed Pallet",
    "Party Supply Assortment Case",
    "Kitchen Gadget Dollar-Item Bulk Lot",
  ],
  dropshippers: [
    "Dropship-Ready Home Goods Product Feed Package",
    "No-MOQ Trending Gadgets Supplier Package",
    "Print-On-Demand Apparel Dropship Package",
  ],
  electronics: [
    "Bluetooth Wireless Earbuds Bulk Case (24-Pack)",
    "10,000mAh Portable Power Bank Wholesale Lot",
    "Smart LED Strip Light Kit Bulk Case",
  ],
  "fashion-accessories": [
    "Assorted Fashion Sunglasses Display Case (48-Pair)",
    "Women's Scarf & Wrap Wholesale Bundle",
    "Men's Leather Belt Assortment Case",
  ],
  "food-and-grocery": [
    "Goya Pear Nectar Wholesale Case (33.8 oz)",
    "Signature's Dried Plums Pitted Prunes Wholesale Case (3.5 lb, 2-Pack)",
  ],
  "general-merchandise": [
    "Mixed Overstock General Merchandise Pallet",
    "Household Goods Wholesale Assortment Case",
    "Retail Returns Liquidation Lot",
  ],
  gifts: [
    "Bath & Body Gift Set Assortment Box",
    "Personalized Keepsake Item Wholesale Case",
    "Holiday Gift Basket Bundle Lot",
  ],
  "health-beauty-and-wellness": [
    "Dynarex Bottle Covers Wholesale Case (Box of 500)",
    "Dynarex Cotton Roll Wholesale Case (12 x 56)",
  ],
  "home-decor": [
    "Decorative Throw Pillow Cover Wholesale Case",
    "Wall Art Canvas Print Assortment Lot",
    "LED Fairy String Light Bulk Pack",
  ],
  jewelry: [
    "Stainless Steel Chain Necklace Bulk Case",
    "Cubic Zirconia Ring Assortment Display",
    "Fashion Bracelet Wholesale Bundle (Bulk 100-Pack)",
  ],
  "lawn-and-garden": [
    "Regal Algaecide 60 Pool Chemical Wholesale Case",
    "E-Z Pool All-in-One Pool Care Solution Wholesale Case (5 lb)",
    "REVIVE! Pool Phosphate & Algae Remover Wholesale Case (32 oz)",
    "EASYCARE Fountec Algaecide & Clarifier Wholesale Case (64 oz)",
  ],
  "military-goods": [
    "Tactical Backpack Wholesale Case",
    "MOLLE Vest & Gear Bundle Lot",
    "Survival Multi-Tool Bulk Pack",
  ],
  music: [
    "Wireless Karaoke Microphone Bulk Case",
    "Acoustic Guitar Starter Bundle Lot",
    "Bluetooth Headphone Wholesale Case",
  ],
  perfume: [
    "Designer-Inspired Eau de Parfum Tester Case",
    "Men's Cologne Gift Set Wholesale Bundle",
    "Women's Fragrance Mist Assortment Case",
  ],
  promotional: [
    "Custom Logo Tote Bag Wholesale Case",
    "Branded Water Bottle Bulk Pack",
    "Custom Printed Pen Wholesale Box",
  ],
  "sporting-goods": [
    "Resistance Band Fitness Set Wholesale Case",
    "Basketball & Sports Ball Assortment Lot",
    "Yoga Mat Wholesale Bundle (Case of 20)",
  ],
  "tools-and-hardware": [
    "Cordless Drill Driver Wholesale Case",
    "100-Piece Mechanic Tool Set Bulk Pack",
    "Adjustable Wrench Assortment Case",
  ],
};

const packSizeCycle = [
  "Case of 12",
  "Case of 24",
  "Case of 36",
  "Case of 48",
  "Bulk Pack of 100",
  "Pallet Lot",
] as const;

const moqCycle = ["50 units", "100 units", "1 case", "250 units", "500 units", "1 pallet"] as const;

const originCycle = ["Imported", "USA-Sourced", "China", "Vietnam", "Mixed Origin"] as const;

const badgeCycle = ["Bestseller", "New Arrival", "Trending", "Limited Stock", undefined, undefined] as const;

const taglineCycle = [
  "Reseller favorite",
  "High-margin pick",
  "Fast-moving SKU",
  "Customer-tested favorite",
  "Warehouse-ready stock",
  "Popular reorder item",
] as const;

const highlightPool = [
  "Sourced from vetted marketplace suppliers, including Amazon and Walmart-grade programs",
  "Retail-ready packaging suitable for online listings and in-store resale",
  "Quality-checked before it leaves the warehouse",
  "Ships from regional fulfillment centers for faster turnaround",
  "Ideal for FBA, dropshipping, and brick-and-mortar resale",
  "Volume discounts available on repeat wholesale orders",
] as const;

let skuCounter = 100000;

// Real branded products sourced from live Amazon listings (see catalog.ts header
// comment). Their photos are plain-background product shots, not lifestyle crops,
// so they render best with "contain" instead of the default "cover" fit.
const containFitProductNames = new Set<string>([
  "Regal Algaecide 60 Pool Chemical Wholesale Case",
  "E-Z Pool All-in-One Pool Care Solution Wholesale Case (5 lb)",
  "REVIVE! Pool Phosphate & Algae Remover Wholesale Case (32 oz)",
  "EASYCARE Fountec Algaecide & Clarifier Wholesale Case (64 oz)",
  "Goya Pear Nectar Wholesale Case (33.8 oz)",
  "Signature's Dried Plums Pitted Prunes Wholesale Case (3.5 lb, 2-Pack)",
  "Dynarex Bottle Covers Wholesale Case (Box of 500)",
  "Dynarex Cotton Roll Wholesale Case (12 x 56)",
]);

function buildProduct(category: Category, name: string, index: number): Product {
  skuCounter += 1;
  const packSize = packSizeCycle[index % packSizeCycle.length];
  const moq = moqCycle[index % moqCycle.length];
  const origin = originCycle[index % originCycle.length];
  const badge = badgeCycle[index % badgeCycle.length];
  const tagline = taglineCycle[index % taglineCycle.length];
  const highlights = [
    highlightPool[index % highlightPool.length],
    highlightPool[(index + 1) % highlightPool.length],
    highlightPool[(index + 2) % highlightPool.length],
    `Ships in ${packSize.toLowerCase()}, with a minimum order of ${moq}.`,
  ];

  return {
    slug: slugify(name),
    sku: `GD-${skuCounter}`,
    name,
    categorySlug: category.slug,
    categoryName: category.name,
    tagline,
    description: `${name} is part of our ${category.name} wholesale lineup, curated in the style of top-performing listings across Amazon, Walmart, and other major marketplaces. Every case ships quality-checked and retail-ready, so you can list with confidence and reorder with consistency.`,
    highlights,
    packSize,
    moq,
    origin,
    badge,
    variantIndex: index,
    imageFit: containFitProductNames.has(name) ? "contain" : "cover",
  };
}

export const products: Product[] = categories.flatMap((category) =>
  (productNamesBySlug[category.slug] ?? []).map((name, index) => buildProduct(category, name, index))
);

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsForCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, limit);
}
