import { Product, Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "cat-copier-paper",
    name: "Copier & Printing Papers",
    slug: "copier-paper",
    description: "Premium high-speed 75 GSM copier papers, bond papers, ledger sheets, and multi-purpose xerox reams.",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
    itemCount: 6,
    subcategories: ["75 GSM Copier", "Ecorise", "Ledger Paper", "Bond Paper", "Cedar Paper", "Orient Copier"],
  },
  {
    id: "cat-office-stationery",
    name: "Office Stationery & Desk Supplies",
    slug: "office-stationery",
    description: "Heavy-duty Kangaro staplers, staple pins, tape dispensers, push pins, T-pins, paper clips, sticky notes & staple guns.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
    itemCount: 14,
    subcategories: ["Staplers", "Stapler Pins", "Tape Dispensers", "Pins & Clips", "Stapler Guns", "Sticky Notes"],
  },
  {
    id: "cat-markers-writing",
    name: "Markers & Writing Instruments",
    slug: "markers-writing",
    description: "Professional CD/DVD fine markers, waterproof permanent markers, and four-color dry-erase whiteboard markers.",
    image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop",
    itemCount: 3,
    subcategories: ["CD/DVD Markers", "Permanent Markers", "Whiteboard Markers"],
  },
  {
    id: "cat-registers-notebooks",
    name: "Registers & Accounting Ledgers",
    slug: "registers-notebooks",
    description: "Hardbound Mayank Jumbo accounting registers, record books (80, 170, 240, 300 pages), and deluxe king-size registers.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop",
    itemCount: 5,
    subcategories: ["Jumbo 80 PG", "Jumbo 170 PG", "Jumbo 240 PG", "Jumbo 300 PG", "King Size Register"],
  },
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. COPIER & PRINTING PAPERS
  // ==========================================
  {
    id: "prod-jk-red-75",
    slug: "jk-red-copier-paper-75-gsm",
    name: "JK Red Copier Paper 75 GSM (1 Packet / Ream - 500 Sheets)",
    category: "copier-paper",
    subCategory: "75 GSM Copier",
    price: 270,
    originalPrice: 350,
    rating: 4.9,
    reviewCount: 384,
    stock: 100,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "JK-COP-75-RED",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "JK Red 75 GSM premium multipurpose copier paper for ultra-sharp laser, color inkjet, and duplex printing.",
    description: "JK Red 75 GSM Copier Paper is India's leading office paper engineered for jam-free high-speed performance across all printers, copiers, and digital duplication machines. Precision cut edges and optimal brightness ensure crisp text and high-contrast color reproduction.",
    highlights: [
      "75 GSM high-opacity paper preventing show-through on duplex copies",
      "Compatible with laser, inkjet, digital copiers, and high-speed xerox machines",
      "Precision rotary cut for zero-jam smooth paper feeding",
      "High whiteness and brightness for sharp document clarity",
      "500 sheets moisture-proof sealed packaging"
    ],
    specifications: {
      "Brand": "JK Paper",
      "GSM": "75 GSM",
      "Sheet Size": "A4 (210 x 297 mm)",
      "Sheets per Ream": "500 Sheets",
      "Packaging": "Moisture-proof poly wrapper",
      "Brightness": "98% ISO",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 270 },
      { minQty: 5, maxQty: 19, discountPercent: 7, pricePerUnit: 250 },
      { minQty: 20, maxQty: 99, discountPercent: 12, pricePerUnit: 238 },
      { minQty: 100, discountPercent: 18, pricePerUnit: 220 }
    ]
  },
  {
    id: "prod-jk-ecorise",
    slug: "jk-ecorise-copier-paper",
    name: "JK Ecorise Copier Paper (1 Packet / Ream - 500 Sheets)",
    category: "copier-paper",
    subCategory: "Ecorise",
    price: 230,
    originalPrice: 320,
    rating: 4.7,
    reviewCount: 219,
    stock: 80,
    isBestseller: true,
    isEcoFriendly: true,
    sku: "JK-ECO-RISE",
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Eco-friendly, cost-effective copier paper engineered for high-volume office and institutional printing.",
    description: "JK Ecorise is an environmentally conscious copier paper crafted using agro-residue pulping processes. Ideal for everyday printing, draft copies, school assignments, and high-volume corporate document distribution.",
    highlights: [
      "Eco-responsible pulp production with high recycling content",
      "Economical daily printing solution for schools and offices",
      "Clean running through desktop laser and inkjet printers",
      "500 sheets per packet"
    ],
    specifications: {
      "Brand": "JK Paper",
      "Sheet Size": "A4 (210 x 297 mm)",
      "Sheets per Ream": "500 Sheets",
      "Eco Certified": "Yes",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 230 },
      { minQty: 5, maxQty: 19, discountPercent: 6, pricePerUnit: 215 },
      { minQty: 20, discountPercent: 13, pricePerUnit: 200 }
    ]
  },
  {
    id: "prod-sirpur-ledger",
    slug: "sirpur-ledger-paper-ream",
    name: "Sirpur Ledger Paper (1 Packet / Ream - 500 Sheets)",
    category: "copier-paper",
    subCategory: "Ledger Paper",
    price: 350,
    originalPrice: 450,
    rating: 4.8,
    reviewCount: 142,
    stock: 60,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "SIRPUR-LEDGER-01",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Heavy-duty archival quality Sirpur ledger paper for official legal, audit, and accounting records.",
    description: "Sirpur Ledger Paper is renowned across courts, legal chambers, accounting firms, and government offices for its enduring strength, smooth surface, and resistance to aging.",
    highlights: [
      "Archival-grade strength resisting yellowing and deterioration",
      "Smooth finish ideal for fountain pens, ball pens, and laser printing",
      "Durable heavy fiber structure designed for frequent handling",
      "500 Sheets full ream packaging"
    ],
    specifications: {
      "Brand": "Sirpur Paper Mills",
      "Usage": "Legal, Accounting, Auditing & Official Registers",
      "Sheets per Ream": "500 Sheets",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 350 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 315 }
    ]
  },
  {
    id: "prod-jk-bond",
    slug: "jk-bond-paper-100-sheets",
    name: "JK Bond Paper (100 Sheets Executive Pack)",
    category: "copier-paper",
    subCategory: "Bond Paper",
    price: 150,
    originalPrice: 180,
    rating: 4.9,
    reviewCount: 96,
    stock: 75,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "JK-BOND-100",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Ultra-premium watermarked 85 GSM bond paper for corporate letterheads, agreements, and resumes.",
    description: "JK Bond Paper represents the pinnacle of executive communication. Featuring authentic watermarking, cotton content feel, and remarkable crispness, it commands respect in every formal document.",
    highlights: [
      "Authentic watermark with luxury executive texture",
      "85 GSM heavy feel with exceptional tactile finish",
      "Perfect for corporate agreements, letters of intent, and certificates",
      "100 sheets premium protective folder"
    ],
    specifications: {
      "Brand": "JK Paper",
      "GSM": "85 GSM",
      "Pack Count": "100 Sheets",
      "Watermark": "Yes",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 150 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 135 }
    ]
  },
  {
    id: "prod-jk-cedar",
    slug: "jk-cedar-copier-paper",
    name: "JK Cedar Ultra White Copier Paper (1 Packet / Ream - 500 Sheets)",
    category: "copier-paper",
    subCategory: "Cedar Paper",
    price: 350,
    originalPrice: 500,
    rating: 4.9,
    reviewCount: 118,
    stock: 50,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "JK-CEDAR-500",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Super-bright 80 GSM ultra-white copier paper for vivid presentations and graphic brochures.",
    description: "JK Cedar delivers elite brightness and smoothness, specially calibrated for high-density color graphics, client pitch decks, architecture portfolios, and executive reporting.",
    highlights: [
      "80 GSM ultra-dense thickness with 100%+ whiteness index",
      "Vivid color vibrancy with instantaneous ink absorption",
      "Ideal for marketing proposals and client presentations",
      "500 Sheets per ream"
    ],
    specifications: {
      "Brand": "JK Paper",
      "GSM": "80 GSM",
      "Sheets per Ream": "500 Sheets",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 350 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 315 }
    ]
  },
  {
    id: "prod-orient-copier",
    slug: "orient-copier-paper-ream",
    name: "Orient Copier Paper (1 Packet / Ream - 500 Sheets)",
    category: "copier-paper",
    subCategory: "Orient Copier",
    price: 210,
    originalPrice: 350,
    rating: 4.6,
    reviewCount: 260,
    stock: 120,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "ORIENT-COP-500",
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Affordable, versatile 70 GSM multi-purpose copier paper for daily xerox, study materials, and office prints.",
    description: "Orient Copier Paper provides exceptional value for commercial xerox centers, coaching institutes, schools, and offices requiring high-volume economical duplicating paper.",
    highlights: [
      "70 GSM lightweight economical printing standard",
      "Smooth surface preventing machine jamming",
      "500 Sheets bulk ream",
      "Unbeatable bulk wholesale pricing"
    ],
    specifications: {
      "Brand": "Orient Paper",
      "Sheets per Ream": "500 Sheets",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 210 },
      { minQty: 5, maxQty: 19, discountPercent: 7, pricePerUnit: 195 },
      { minQty: 20, discountPercent: 14, pricePerUnit: 180 }
    ]
  },

  // ==========================================
  // 2. OFFICE STATIONERY & DESK SUPPLIES
  // ==========================================
  {
    id: "prod-kangaro-pin-10",
    slug: "kangaro-stapler-pin-no-10",
    name: "Kangaro Stapler Pin No. 10 (1 Packet / Box - 1000 Staples)",
    category: "office-stationery",
    subCategory: "Stapler Pins",
    price: 10,
    originalPrice: 12,
    rating: 4.9,
    reviewCount: 512,
    stock: 250,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "KANG-PIN-10",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Rust-resistant high-tensile steel staple pins for all standard No. 10 staplers.",
    description: "Kangaro No. 10 Stapler Pins are precision-crafted from high-grade galvanized steel wire with sharp chisel points for effortless paper penetration without jamming.",
    highlights: [
      "1,000 staples per pack",
      "Rust-resistant anti-corrosive coating",
      "Chisel point tips for clean, snag-free stapling",
      "Fits all standard No. 10 desktop staplers"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Model": "No. 10-1M",
      "Count": "1000 Staples",
      "Capacity": "Up to 20 Sheets",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 10 },
      { minQty: 10, discountPercent: 20, pricePerUnit: 8 }
    ]
  },
  {
    id: "prod-kangaro-pin-24-6",
    slug: "kangaro-stapler-pin-24-6",
    name: "Kangaro Stapler Pin 24/6 (1 Packet / Box - 1000 Staples)",
    category: "office-stationery",
    subCategory: "Stapler Pins",
    price: 25,
    originalPrice: 25,
    rating: 4.9,
    reviewCount: 340,
    stock: 200,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "KANG-PIN-24-6",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Heavy-duty standard 24/6 chisel point staples for full-strip and half-strip desktop staplers.",
    description: "Kangaro 24/6 Staples provide secure binding for up to 30 sheets of paper. Crafted with precision edge alignment for smooth gliding in corporate and institutional staplers.",
    highlights: [
      "Standard 24/6 size (6mm leg length)",
      "High penetration strength for thick document stacks",
      "1000 staples per box"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Model": "24/6-1M",
      "Capacity": "Up to 30 Sheets",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 25 },
      { minQty: 10, discountPercent: 12, pricePerUnit: 22 }
    ]
  },
  {
    id: "prod-kangaro-stapler-10",
    slug: "kangaro-stapler-no-10",
    name: "Kangaro Stapler No. 10 (Compact Desktop Stapler)",
    category: "office-stationery",
    subCategory: "Staplers",
    price: 70,
    originalPrice: 75,
    rating: 4.8,
    reviewCount: 420,
    stock: 90,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "KANG-STAP-10",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Classic steel-mechanism compact desktop stapler with integrated staple remover.",
    description: "The trusted Kangaro No. 10 Stapler features an ergonomic plastic cap with a rugged all-steel body mechanism. Includes a built-in rear staple remover and reload indicator window.",
    highlights: [
      "Staples up to 20 sheets effortlessly",
      "Built-in staple remover on tail",
      "Quick drop-in top loading mechanism",
      "Compact size fitting any desk organizer"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Compatible Pins": "No. 10",
      "Stapling Capacity": "20 Sheets",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 70 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 63 }
    ]
  },
  {
    id: "prod-kangaro-hd10d",
    slug: "kangaro-stapler-hd10d",
    name: "Kangaro Stapler HD-10D (Heavy Duty All-Metal)",
    category: "office-stationery",
    subCategory: "Staplers",
    price: 120,
    originalPrice: 125,
    rating: 4.9,
    reviewCount: 195,
    stock: 60,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "KANG-STAP-HD10D",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Heavy-duty ergonomic metal desktop stapler with dual-strip capacity for high-volume offices.",
    description: "Kangaro HD-10D is designed for continuous daily office use. Boasting an all-metal chassis, smooth lever action, and extended throat depth for versatile document positioning.",
    highlights: [
      "All-metal heavy gauge steel construction",
      "Dual strip loading (100 staples capacity)",
      "Tough build quality lasting years of rigorous use"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Model": "HD-10D",
      "Compatible Pins": "No. 10",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 120 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 108 }
    ]
  },
  {
    id: "prod-kangaro-hp45",
    slug: "kangaro-plier-stapler-hp45",
    name: "Kangaro Plier Heavy Duty Stapler HP-45",
    category: "office-stationery",
    subCategory: "Staplers",
    price: 299,
    originalPrice: 325,
    rating: 4.9,
    reviewCount: 88,
    stock: 40,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "KANG-PLIER-HP45",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Plier-grip heavy duty packaging and binding stapler for courier parcels, tags, and bags.",
    description: "Kangaro HP-45 Plier Stapler features an ergonomic squeeze handle that delivers powerful leverage with minimal hand strain. Widely utilized in dispatch centers, retail stores, and archives.",
    highlights: [
      "Powerful plier squeeze mechanism for thick packages",
      "All-steel chrome-plated corrosion resistant body",
      "Throat depth of 45mm for deep stapling",
      "Compatible with 24/6 and 26/6 staples"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Model": "HP-45",
      "Compatible Pins": "24/6, 26/6",
      "Capacity": "Up to 30 Sheets / Parcel Bags",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 2, discountPercent: 0, pricePerUnit: 299 },
      { minQty: 3, discountPercent: 10, pricePerUnit: 269 }
    ]
  },
  {
    id: "prod-kangaro-tape-disp",
    slug: "kangaro-desktop-tape-dispenser",
    name: "Kangaro Heavy Weighted Desk Tape Dispenser",
    category: "office-stationery",
    subCategory: "Tape Dispensers",
    price: 90,
    originalPrice: 99,
    rating: 4.7,
    reviewCount: 165,
    stock: 55,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "KANG-TAPE-DISP-01",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Non-skid weighted desktop tape cutter dispenser with stainless steel serrated blade.",
    description: "Kangaro Desktop Tape Dispenser stays firmly anchored on your workstation while you pull and cut adhesive tape with one hand. Features a high-precision anti-rust cutting blade.",
    highlights: [
      "Weighted rubberized base preventing sliding during single-handed use",
      "Stainless steel high-durability serrated cutter",
      "Accommodates standard 1-inch and 3-inch core tapes"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Blade Material": "Stainless Steel",
      "Base": "Weighted Anti-Skid Rubber",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 90 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 81 }
    ]
  },
  {
    id: "prod-kangaro-td18y",
    slug: "kangaro-handy-tape-dispenser-td18y",
    name: "Kangaro Handy Tape Dispenser TD-18Y (1 Piece)",
    category: "office-stationery",
    subCategory: "Tape Dispensers",
    price: 70,
    originalPrice: 70,
    rating: 4.8,
    reviewCount: 130,
    stock: 70,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "KANG-TD18Y",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Compact hand-held tape cutter for quick box sealing, gift wrapping, and crafts.",
    description: "Kangaro TD-18Y is a portable, lightweight tape dispenser designed for swift packaging, parcel sealing, and administrative duties on the go.",
    highlights: [
      "Handy ergonomic finger grip contour",
      "Safe and efficient cutting blade",
      "Ideal for desk drawers, retail counters, and dispatch desks"
    ],
    specifications: {
      "Brand": "Kangaro",
      "Model": "TD-18Y",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 70 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 63 }
    ]
  },
  {
    id: "prod-world-one-push-pin",
    slug: "world-one-push-pins-packet",
    name: "World One Push Pins (Assorted Colors Packet)",
    category: "office-stationery",
    subCategory: "Pins & Clips",
    price: 35,
    originalPrice: 35,
    rating: 4.8,
    reviewCount: 210,
    stock: 150,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "WO-PIN-PUSH",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Sharp stainless steel pin tips with vibrant transparent plastic heads for notice boards and maps.",
    description: "World One Push Pins offer effortless pinning onto cork boards, soft fabric partitions, maps, and bulletin displays without bending.",
    highlights: [
      "Sturdy steel points that anchor securely without bending",
      "Vibrant multicolored heads for color-coded organization",
      "Reusable clear storage box included"
    ],
    specifications: {
      "Brand": "World One",
      "Quantity": "1 Packet (~50 Pins)",
      "Head Colors": "Assorted (Red, Blue, Yellow, Green, White)",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 5, discountPercent: 14, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-world-one-all-pin",
    slug: "world-one-all-pins-packet",
    name: "World One All Pins / Paper Pins (2 Packets)",
    category: "office-stationery",
    subCategory: "Pins & Clips",
    price: 35,
    originalPrice: 35,
    rating: 4.7,
    reviewCount: 180,
    stock: 150,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "WO-PIN-ALL-2PK",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Nickel-plated rust-resistant smooth head paper pins for office files and tailoring.",
    description: "World One All Pins are manufactured from polished high-grade steel wire with smooth round heads and ultra-sharp tips for fastening documents without tearing fibers.",
    highlights: [
      "Includes 2 full packets",
      "Rust-proof nickel plating for long shelf life",
      "Precision pointed for effortless piercing"
    ],
    specifications: {
      "Brand": "World One",
      "Quantity": "2 Packets",
      "Finish": "Nickel Plated Steel",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 5, discountPercent: 14, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-world-one-t-pin",
    slug: "world-one-t-pins-packet",
    name: "World One Steel T-Pins (3 Packets)",
    category: "office-stationery",
    subCategory: "Pins & Clips",
    price: 35,
    originalPrice: 35,
    rating: 4.8,
    reviewCount: 95,
    stock: 120,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "WO-PIN-T-3PK",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Heavy-duty T-bar head steel pins for fabric, partition boards, crafts, and wig making.",
    description: "World One T-Pins feature a wide T-bar head that is easy to grasp and push into dense surfaces such as cubicle fabric walls, cork boards, and model crafting.",
    highlights: [
      "Set of 3 packets",
      "Strong T-bar head providing superior grip and leverage",
      "Smooth sharp tip for clean fastening"
    ],
    specifications: {
      "Brand": "World One",
      "Quantity": "3 Packets",
      "Material": "Hardened Steel",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 5, discountPercent: 14, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-world-one-color-clip",
    slug: "world-one-color-coated-paper-clips",
    name: "World One Color Coated Paper Clips (4 Packets)",
    category: "office-stationery",
    subCategory: "Pins & Clips",
    price: 35,
    originalPrice: 35,
    rating: 4.9,
    reviewCount: 230,
    stock: 140,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "WO-CLIP-COLOR-4PK",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Vinyl plastic coated colorful paper clips with smooth non-tear grip for file indexing.",
    description: "World One Color Coated Paper Clips protect your important documents from scratches and rust stains while adding vibrant color-coded sorting to office and study files.",
    highlights: [
      "Set of 4 packets in assorted bright colors",
      "Vinyl coating prevents paper tearing and rust marks",
      "Strong spring tension holds up to 25 sheets"
    ],
    specifications: {
      "Brand": "World One",
      "Quantity": "4 Packets",
      "Coating": "Protective Vinyl",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 5, discountPercent: 14, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-world-one-metal-clip",
    slug: "world-one-metal-paper-clips",
    name: "World One Heavy Duty Metal Paper Clips (5 Packets)",
    category: "office-stationery",
    subCategory: "Pins & Clips",
    price: 35,
    originalPrice: 35,
    rating: 4.8,
    reviewCount: 310,
    stock: 180,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "WO-CLIP-METAL-5PK",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Zinc-plated rust-resistant classic metal paper binder clips for daily office documentation.",
    description: "World One Metal Paper Clips are forged from spring steel wire with smooth rounded edges to clamp documents securely without crimping or damaging pages.",
    highlights: [
      "Value bundle: 5 full packets",
      "Zinc galvanized corrosion resistant finish",
      "Firm non-slip grip holding documents neatly"
    ],
    specifications: {
      "Brand": "World One",
      "Quantity": "5 Packets",
      "Material": "Spring Steel",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 5, discountPercent: 14, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-miles-stapler-gun",
    slug: "miles-heavy-duty-stapler-gun",
    name: "Miles Heavy Duty Industrial Stapler Tacker Gun",
    category: "office-stationery",
    subCategory: "Stapler Guns",
    price: 990,
    originalPrice: 1080,
    rating: 4.9,
    reviewCount: 76,
    stock: 25,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "MILES-STAP-GUN-01",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Professional all-steel manual staple gun for upholstery, wooden frames, canvas, and exhibition boards.",
    description: "Miles Heavy Duty Tacker Stapler Gun delivers industrial-strength driving power. Constructed with an all-steel body, recoil-absorbing hand grip, and adjustable impact tension knob.",
    highlights: [
      "All-steel chrome plated construction for extreme durability",
      "Force adjustment knob for soft and hard surfaces",
      "Handle lock safety mechanism for compact storage",
      "Widely used in framing, display boards, and packaging"
    ],
    specifications: {
      "Brand": "Miles",
      "Mechanism": "Heavy Duty Manual Spring Lever",
      "Body": "Forged Chrome Steel",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 2, discountPercent: 0, pricePerUnit: 990 },
      { minQty: 3, discountPercent: 10, pricePerUnit: 890 }
    ]
  },
  {
    id: "prod-sticky-notes-pad",
    slug: "neon-sticky-notes-pad-100-sheets",
    name: "Neon Self-Adhesive Sticky Notes Pad (100 Sheets, 3x3 Inch)",
    category: "office-stationery",
    subCategory: "Sticky Notes",
    price: 45,
    originalPrice: 55,
    rating: 4.8,
    reviewCount: 280,
    stock: 110,
    isBestseller: true,
    isEcoFriendly: true,
    sku: "STICKY-NOTE-100",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Vibrant neon yellow/pink repositionable sticky notes for reminders, desk flags, and book annotations.",
    description: "These self-adhesive memo pads feature clean-peel adhesive that sticks firmly to computer monitors, books, whiteboards, and files without leaving sticky residue.",
    highlights: [
      "100 sheets per pad (3 x 3 inches)",
      "High-contrast neon colors for instant visibility",
      "Removable adhesive allowing multiple repositioning without residue"
    ],
    specifications: {
      "Brand": "Instant Stationery",
      "Sheets": "100 Sheets",
      "Size": "76 x 76 mm (3 x 3 in)",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 45 },
      { minQty: 5, discountPercent: 15, pricePerUnit: 38 }
    ]
  },

  // ==========================================
  // 3. MARKERS & WRITING INSTRUMENTS
  // ==========================================
  {
    id: "prod-cd-marker",
    slug: "luxor-doms-cd-dvd-marker",
    name: "Luxor / Doms CD/DVD OHP Fine Tip Marker (1 Piece)",
    category: "markers-writing",
    subCategory: "CD/DVD Markers",
    price: 10,
    originalPrice: 10,
    rating: 4.8,
    reviewCount: 390,
    stock: 200,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "MARK-CD-DOMS",
    images: [
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Waterproof fine point marker for plastic, glass, optical discs, metal, and transparency sheets.",
    description: "Luxor / Doms Fine Tip CD Marker is engineered with specialized quick-drying alcohol-based ink that writes smoothly on non-porous surfaces without smudging or fading.",
    highlights: [
      "Ultra-fine durable bullet tip for precise labeling",
      "Waterproof, smudge-proof, and fade-resistant formula",
      "Writes effortlessly on CDs, DVDs, plastics, cables, and glassware"
    ],
    specifications: {
      "Brand": "Luxor / Doms",
      "Tip Size": "0.8mm Fine Tip",
      "Ink Type": "Waterproof Alcohol Ink",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 10 },
      { minQty: 10, discountPercent: 20, pricePerUnit: 8 }
    ]
  },
  {
    id: "prod-perm-marker",
    slug: "luxor-doms-permanent-marker",
    name: "Luxor / Doms Waterproof Permanent Marker (1 Piece)",
    category: "markers-writing",
    subCategory: "Permanent Markers",
    price: 20,
    originalPrice: 20,
    rating: 4.9,
    reviewCount: 450,
    stock: 220,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "MARK-PERM-DOMS",
    images: [
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Heavy-duty waterproof permanent marker for shipping cartons, metal, wood, plastic, and stone.",
    description: "Delivering deep indelible black/blue ink, this industrial-strength permanent marker withstands sun exposure, moisture, and rough handling across warehouses and classrooms.",
    highlights: [
      "Bold acrylic bullet tip that maintains shape under pressure",
      "Instant dry indelible ink that resists water and sunlight",
      "High ink reservoir for thousands of meters of writing"
    ],
    specifications: {
      "Brand": "Luxor / Doms",
      "Tip": "Acrylic Bullet Tip (2.0mm)",
      "Ink": "Permanent Waterproof",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 20 },
      { minQty: 10, discountPercent: 15, pricePerUnit: 17 }
    ]
  },
  {
    id: "prod-wb-marker",
    slug: "luxor-doms-whiteboard-marker",
    name: "Luxor / Doms Whiteboard Marker (Blue, Black, Red, Green)",
    category: "markers-writing",
    subCategory: "Whiteboard Markers",
    price: 25,
    originalPrice: 25,
    rating: 4.9,
    reviewCount: 520,
    stock: 300,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "MARK-WB-DOMS-4CLR",
    images: [
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Low-odor, easily dry-wipeable whiteboard marker with durable bullet tip for coaching & presentations.",
    description: "Engineered specifically for coaching institutions, schools, and corporate boardrooms, Luxor / Doms whiteboard markers provide bold visibility with effortless residue-free dry erasing.",
    highlights: [
      "Available in 4 vibrant colors: Blue, Black, Red, Green",
      "Wipes completely clean with dry duster without ghosting",
      "Non-toxic low-odor Japanese formulation"
    ],
    specifications: {
      "Brand": "Luxor / Doms",
      "Ink Type": "Low Odor Dry Erase",
      "Colors": "Blue, Black, Red, Green",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 25 },
      { minQty: 10, discountPercent: 16, pricePerUnit: 21 }
    ],
    colors: [
      { name: "Blue", hex: "#2563eb" },
      { name: "Black", hex: "#111827" },
      { name: "Red", hex: "#dc2626" },
      { name: "Green", hex: "#16a34a" }
    ]
  },

  // ==========================================
  // 4. REGISTERS & ACCOUNTING LEDGERS
  // ==========================================
  {
    id: "prod-mayank-jumbo-80",
    slug: "mayank-jumbo-register-80-pages",
    name: "Mayank Jumbo Register (80 Pages Hardbound)",
    category: "registers-notebooks",
    subCategory: "Jumbo 80 PG",
    price: 59,
    originalPrice: 59,
    rating: 4.8,
    reviewCount: 160,
    stock: 150,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "MAYANK-JUMBO-80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Sturdy hardbound jumbo accounting and ledger register with 80 high-GSM ruled pages.",
    description: "Mayank Jumbo 80 Page Register is constructed with heavy cardboard binding, premium spine cloth reinforcement, and ultra-smooth ruled paper for daily entry and records.",
    highlights: [
      "80 crisp, ledger-ruled pages with margin guides",
      "Rigid hardbound cover with durable spine reinforcement",
      "Paper absorbs ink smoothly with zero ink bleed"
    ],
    specifications: {
      "Brand": "Mayank",
      "Pages": "80 Pages",
      "Binding": "Hardbound Hard Cover with Cloth Spine",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 59 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 53 }
    ]
  },
  {
    id: "prod-mayank-jumbo-170",
    slug: "mayank-jumbo-register-170-pages",
    name: "Mayank Jumbo Register (170 Pages Hardbound)",
    category: "registers-notebooks",
    subCategory: "Jumbo 170 PG",
    price: 80,
    originalPrice: 80,
    rating: 4.8,
    reviewCount: 190,
    stock: 130,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "MAYANK-JUMBO-170",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "170 pages hardbound ledger register for office accounts, inventory logs, and school records.",
    description: "The 170-page Mayank Jumbo Register provides substantial capacity for monthly accounting logs, store inventory registers, and institutional student records.",
    highlights: [
      "170 durable ruled pages with clear line hierarchy",
      "Heavy card outer bound for archival longevity",
      "Flat-opening binding for convenient writing across the page"
    ],
    specifications: {
      "Brand": "Mayank",
      "Pages": "170 Pages",
      "Binding": "Hardbound Cloth Spine",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 80 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 72 }
    ]
  },
  {
    id: "prod-mayank-jumbo-240",
    slug: "mayank-jumbo-register-240-pages",
    name: "Mayank Jumbo Register (240 Pages Hardbound)",
    category: "registers-notebooks",
    subCategory: "Jumbo 240 PG",
    price: 110,
    originalPrice: 110,
    rating: 4.9,
    reviewCount: 140,
    stock: 100,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "MAYANK-JUMBO-240",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "High-capacity 240 pages master hardbound register for comprehensive business and financial records.",
    description: "Mayank Jumbo 240-page register is built for multi-month financial book-keeping, factory attendance logs, and school registers.",
    highlights: [
      "240 thick ledger pages",
      "Heavy duty reinforced hard binding",
      "Bleed-proof paper suitable for fountain and gel pens"
    ],
    specifications: {
      "Brand": "Mayank",
      "Pages": "240 Pages",
      "Binding": "Hardbound",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 110 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 99 }
    ]
  },
  {
    id: "prod-mayank-jumbo-300",
    slug: "mayank-jumbo-register-300-pages",
    name: "Mayank Jumbo Register (300 Pages Master Ledger)",
    category: "registers-notebooks",
    subCategory: "Jumbo 300 PG",
    price: 159,
    originalPrice: 159,
    rating: 4.9,
    reviewCount: 175,
    stock: 85,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "MAYANK-JUMBO-300",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Flagship 300 pages master volume accounting register for annual business financial ledgers.",
    description: "Mayank Jumbo 300 Page Ledger Register is the ultimate accounting volume for yearly financial auditing, factory logs, institutional records, and heavy-volume registers.",
    highlights: [
      "Massive 300-page capacity for complete annual records",
      "Reinforced heavy binder board and spine binding",
      "Archival quality ledger ruling"
    ],
    specifications: {
      "Brand": "Mayank",
      "Pages": "300 Pages",
      "Binding": "Heavy Reinforced Hardbound",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 159 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 143 }
    ]
  },
  {
    id: "prod-mayank-king-size",
    slug: "mayank-deluxe-king-size-register",
    name: "Mayank Deluxe King Size Long Format Register",
    category: "registers-notebooks",
    subCategory: "King Size Register",
    price: 130,
    originalPrice: 145,
    rating: 4.8,
    reviewCount: 110,
    stock: 70,
    isBestseller: false,
    isEcoFriendly: false,
    sku: "MAYANK-KING-SIZE",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Extra-large long format folio register for school attendance, hospital logs, and showroom entries.",
    description: "Mayank King Size Register offers an expanded long folio layout with wide columns, perfect for visitor logs, attendance tracking, and multi-column dispatch record-keeping.",
    highlights: [
      "Extra wide folio king-size layout",
      "Hardbound cover protecting records against dust and wear",
      "High-grade white ledger paper"
    ],
    specifications: {
      "Brand": "Mayank",
      "Format": "King Size Long Folio",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 130 },
      { minQty: 5, discountPercent: 10, pricePerUnit: 117 }
    ]
  }
];
