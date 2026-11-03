import { Product, Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "cat-pens-pencils",
    name: "Pens & Writing Instruments",
    slug: "pens-pencils",
    description: "Ball pens, smooth gel pens, precision roller pens, and executive writing instruments from Linc, Hauser, Flair, Unomax, Classmate, Luxor & Pentel.",
    image: "/images/products/linc-pentonic-ball.jpg",
    itemCount: 62,
    subcategories: ["Ball Pens", "Gel Pens", "Roller Ball Pens", "Premium Pens"],
  },
  {
    id: "cat-notebooks-notepads",
    name: "Notebooks & Exercise Books",
    slug: "notebooks-notepads",
    description: "Classmate, Navneet & Camlin school exercise books (24x18), long register notebooks (29x21), and wiro spiral notepads.",
    image: "/images/products/classmate-longbook.jpg",
    itemCount: 37,
    subcategories: ["Single Line", "4 Line English", "2 Line Hindi", "Square Box Maths", "Combine", "Interleaf", "Wiro Spiral"],
  },
  {
    id: "cat-copier-paper",
    name: "Copier & Printing Papers",
    slug: "copier-paper",
    description: "Premium high-speed 75 GSM copier papers, bond papers, ledger sheets, and multi-purpose xerox reams.",
    image: "/images/products/copier-paper.jpg",
    itemCount: 6,
    subcategories: ["75 GSM Copier", "Ecorise", "Ledger Paper", "Bond Paper", "Cedar Paper", "Orient Copier"],
  },
  {
    id: "cat-office-stationery",
    name: "Office Supplies & Adhesives",
    slug: "office-stationery",
    description: "Heavy-duty Kangaro staplers, staple pins, tape dispensers, push pins, T-pins, paper clips, sticky notes, Fevicol & instant adhesives.",
    image: "/images/products/fevicol-mr.jpg",
    itemCount: 44,
    subcategories: ["Staplers & Pins", "Tape Dispensers", "Pins & Clips", "Fevicol & Adhesives", "Industrial Stapler Guns"],
  },
  {
    id: "cat-markers-writing",
    name: "Markers & Writing Instruments",
    slug: "markers-writing",
    description: "Professional CD/DVD fine markers, waterproof permanent markers, and four-color dry-erase whiteboard markers.",
    image: "/images/products/office-supplies.jpg",
    itemCount: 3,
    subcategories: ["CD/DVD Markers", "Permanent Markers", "Whiteboard Markers"],
  },
  {
    id: "cat-registers-notebooks",
    name: "Registers & Accounting Ledgers",
    slug: "registers-notebooks",
    description: "Hardbound Mayank Jumbo accounting registers, record books (80, 170, 240, 300 pages), and deluxe king-size registers.",
    image: "/images/products/mayank-jumbo-register.jpg",
    itemCount: 5,
    subcategories: ["Jumbo 80 PG", "Jumbo 170 PG", "Jumbo 240 PG", "Jumbo 300 PG", "King Size Register"],
  },
  {
    id: "cat-office-supplies",
    name: "General Office Supplies",
    slug: "office-supplies",
    description: "Desk accessories, staplers, clips, adhesives and office stationery essentials.",
    image: "/images/products/office-supplies.jpg",
    itemCount: 29,
    subcategories: ["Staplers & Pins", "Adhesives & Glues", "Clips & Fasteners"],
  },
  {
    id: "cat-paper-products",
    name: "Paper & Board Products",
    slug: "paper-products",
    description: "High volume printing papers, bond paper, ledger reams and office copier supplies.",
    image: "/images/products/copier-paper.jpg",
    itemCount: 6,
    subcategories: ["A4 Copier", "Ledger Reams", "Bond Paper"],
  },
  {
    id: "cat-school-supplies",
    name: "School & Student Supplies",
    slug: "school-supplies",
    description: "Student exercise notebooks, 4-line english, 2-line hindi, maths square box notebooks, and geometry instruments.",
    image: "/images/products/classmate-notebook-24x18.jpg",
    itemCount: 37,
    subcategories: ["School Notebooks", "Drawing & Combine", "Maths Grid"],
  },
  {
    id: "cat-eco-friendly-range",
    name: "Eco-Friendly Range",
    slug: "eco-friendly-range",
    description: "Sustainable stationery, recycled notebooks, and eco-conscious office supplies.",
    image: "/images/products/classmate-wiro.jpg",
    itemCount: 10,
    subcategories: ["Recycled Paper", "Eco Pencils", "Sustainable Packaging"],
  },
];

export const PRODUCTS: Product[] = [
{
  "id": "6dffe05e-637a-4cfd-b9ab-4dd8eb7486f1",
  "slug": "gupta-premium-ball-pen-blue",
  "name": "Gupta Premium Ball Pen (Blue)",
  "category": "pens-pencils",
  "subCategory": "pens-pencils",
  "price": 15,
  "originalPrice": 20,
  "rating": 4.8,
  "reviewCount": 1247,
  "stock": 500,
  "isBestseller": true,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-PEN-01",
  "images": [
    "/images/products/gupta-premium-ball-pen-blue.jpg"
  ],
  "shortDescription": "Smooth, continuous writing experience with refillable cartridge. Perfect for daily office and academic use.",
  "description": "The Gupta Premium Ball Pen is our signature bestselling writing instrument, trusted by thousands of students, teachers, and business professionals across Raipur since 1995. Crafted for effortless ink flow with zero leakage and ergonomic grip.",
  "highlights": [
    "Smooth, continuous writing experience",
    "2000+ words capacity per pen",
    "Refillable cartridge (saves money & reduces plastic)",
    "Durable break-resistant body",
    "Perfect ergonomic grip for long writing sessions"
  ],
  "specifications": {
    "Length": "14 cm",
    "Origin": "Made in India",
    "Ink Type": "Oil-based Low Viscosity Ink",
    "Tip Size": "1.0mm Swiss Carbide Tip",
    "Ink Color": "Vibrant Blue",
    "Refillable": "Yes (Spare refills at ₹5 each)",
    "Body Material": "High-Grade Impact Polymer",
    "Certification": "ISI Certified",
    "Word Capacity": "2000+ words"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 15,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 12,
      "discountPercent": 20
    },
    {
      "maxQty": 99,
      "minQty": 50,
      "pricePerUnit": 10,
      "discountPercent": 33
    },
    {
      "maxQty": 499,
      "minQty": 100,
      "pricePerUnit": 8,
      "discountPercent": 47
    },
    {
      "minQty": 500,
      "pricePerUnit": 6,
      "discountPercent": 60
    }
  ]
},
{
  "id": "010e80d2-ab87-46a3-80a7-e98a054fde6e",
  "slug": "gupta-gel-pen-set-10-colors",
  "name": "Gupta Gel Pen Set (10 Colors)",
  "category": "pens-pencils",
  "subCategory": "pens-pencils",
  "price": 180,
  "originalPrice": 220,
  "rating": 4.9,
  "reviewCount": 892,
  "stock": 200,
  "isBestseller": true,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-GEL-10",
  "images": [
    "/images/products/gupta-gel-pen-set-10-colors.jpg"
  ],
  "shortDescription": "Vibrant Japanese gel inks with ultra-fast drying technology. Ideal for notes, bullet journaling, and sketching.",
  "description": "Experience effortless artistic expression and crisp note-taking. Each pen features a 0.7mm fine roller tip and quick-drying, smudge-proof water-resistant Japanese gel ink formulation.",
  "highlights": [
    "10 rich vibrant color spectrum",
    "Quick-dry smudge-proof Japanese gel ink",
    "0.7mm precision needle point",
    "Cushioned rubberized comfort barrel"
  ],
  "specifications": {
    "Grip": "Contoured Soft Rubber Grip",
    "Ink Type": "Waterproof Pigment Gel",
    "Tip Size": "0.7mm Fine Needle Tip",
    "Color Count": "10 Assorted Colors"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 180,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 150,
      "discountPercent": 17
    },
    {
      "minQty": 50,
      "pricePerUnit": 120,
      "discountPercent": 33
    }
  ]
},
{
  "id": "52f381ae-b2ca-4866-8683-4d7729a4dd3b",
  "slug": "wooden-pencil-hb-box",
  "name": "Wooden Pencil HB Box (12 Pieces)",
  "category": "pens-pencils",
  "subCategory": "pens-pencils",
  "price": 45,
  "originalPrice": 55,
  "rating": 4.8,
  "reviewCount": 456,
  "stock": 1000,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-PENCIL-HB12",
  "images": [
    "/images/products/wooden-pencil-hb-box.jpg"
  ],
  "shortDescription": "Classic cedarwood HB pencils with smooth bonded graphite core. Comes with soft eraser tops.",
  "description": "Crafted from sustainably managed cedarwood with break-resistant bonded lead. Perfect for school examinations, sketching, and everyday office drafting.",
  "highlights": [
    "FSC certified cedarwood",
    "Smooth, dark HB bonded graphite",
    "Non-smudge eraser tipped",
    "Easy sharpening without breakage"
  ],
  "specifications": {
    "Length": "19 cm",
    "Hardness": "HB Grade",
    "Pack Size": "12 Pencils per box",
    "Wood Type": "FSC Certified Softwood"
  },
  "bulkPricing": [
    {
      "maxQty": 11,
      "minQty": 1,
      "pricePerUnit": 45,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 12,
      "pricePerUnit": 35,
      "discountPercent": 22
    },
    {
      "minQty": 50,
      "pricePerUnit": 30,
      "discountPercent": 33
    }
  ]
},
{
  "id": "ac40ea57-5df1-48fa-a74a-cf86a34f6148",
  "slug": "mechanical-pencil-0-5mm",
  "name": "Precision Mechanical Pencil (0.5mm)",
  "category": "pens-pencils",
  "subCategory": "pens-pencils",
  "price": 25,
  "originalPrice": 35,
  "rating": 4.7,
  "reviewCount": 456,
  "stock": 300,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-MECH-05",
  "images": [
    "/images/products/mechanical-pencil-0-5mm.jpg"
  ],
  "shortDescription": "Modern ergonomic mechanical pencil with cushioned shock-absorbing tip and metal clip.",
  "description": "Designed for architects, students, and engineers who demand consistent 0.5mm line width without sharpening.",
  "highlights": [
    "Consistent 0.5mm line width",
    "Retractable stainless steel guide pipe",
    "Integrated eraser under top cap",
    "Comfort textured non-slip grip"
  ],
  "specifications": {
    "Clip": "Sturdy Chrome Metal Clip",
    "Lead Size": "0.5mm Polymer Lead",
    "Refillable": "Standard 0.5mm Leads"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 25,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 20,
      "discountPercent": 20
    },
    {
      "minQty": 50,
      "pricePerUnit": 15,
      "discountPercent": 40
    }
  ]
},
{
  "id": "08ba40b0-c870-44da-b937-91bfd0914d37",
  "slug": "highlighter-pen-set-5-colors",
  "name": "Fluorescent Highlighter Pen Set (5 Colors)",
  "category": "pens-pencils",
  "subCategory": "pens-pencils",
  "price": 45,
  "originalPrice": 60,
  "rating": 4.8,
  "reviewCount": 523,
  "stock": 400,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-HIGH-05",
  "images": [
    "/images/products/highlighter-pen-set-5-colors.jpg"
  ],
  "shortDescription": "Vibrant neon fluorescent highlighters with dual chisel tips for wide and narrow strokes.",
  "description": "Water-based odorless fluorescent ink designed not to bleed through standard notebook or copy paper.",
  "highlights": [
    "5 luminous colors (Yellow, Pink, Green, Blue, Orange)",
    "Chisel tip 1mm - 4mm line versatility",
    "Non-bleed formula safe for textbooks",
    "Anti-dry cap-off technology"
  ],
  "specifications": {
    "Colors": "Yellow, Pink, Green, Blue, Orange",
    "Ink Base": "Water-based Non-toxic",
    "Tip Type": "Polyester Chisel Tip"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 45,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 38,
      "discountPercent": 16
    },
    {
      "minQty": 50,
      "pricePerUnit": 30,
      "discountPercent": 33
    }
  ]
},
{
  "id": "310bb8ea-6508-4c70-b52a-0450ee284a67",
  "slug": "gupta-school-notebook-200-pages",
  "name": "Gupta Classic School Notebook (200 Pages)",
  "category": "notebooks-notepads",
  "subCategory": "notebooks-notepads",
  "price": 85,
  "originalPrice": 100,
  "rating": 4.9,
  "reviewCount": 1089,
  "stock": 500,
  "isBestseller": true,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-NOTE-200",
  "images": [
    "/images/products/gupta-school-notebook-200-pages.jpg"
  ],
  "shortDescription": "Premium 60 GSM smooth ruled paper with durable spine binding. Academic essential.",
  "description": "Our signature school notebook features ultra-smooth paper that prevents ink feathering and show-through. Heavy laminated cover protects against backpack wear and tear.",
  "highlights": [
    "200 crisp ruled pages",
    "60 GSM smooth high-opacity paper",
    "Reinforced heavy-duty spine stitching",
    "Subject index & timetable pages included"
  ],
  "specifications": {
    "Cover": "Laminated Waterproof Soft Cover",
    "Ruling": "Single Ruled with Margin",
    "Dimensions": "17 cm × 21 cm (Standard Academic Size)",
    "Page Count": "200 Pages",
    "Paper Density": "60 GSM Bright White"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 85,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 70,
      "discountPercent": 18
    },
    {
      "minQty": 50,
      "pricePerUnit": 60,
      "discountPercent": 29
    }
  ]
},
{
  "id": "978091e7-94ea-454f-ac91-229dc65756cd",
  "slug": "eco-friendly-recycled-notebook-100-pages",
  "name": "Gupta Eco Notebook (100 Pages, Recycled Paper)",
  "category": "notebooks-notepads",
  "subCategory": "notebooks-notepads",
  "price": 60,
  "originalPrice": 75,
  "rating": 4.9,
  "reviewCount": 678,
  "stock": 250,
  "isBestseller": true,
  "isEcoFriendly": true,
  "isNew": false,
  "sku": "GS-ECO-100",
  "images": [
    "/images/products/eco-friendly-recycled-notebook-100-pages.jpg"
  ],
  "shortDescription": "100% post-consumer recycled paper with natural Kraft board cover and soy-based printing.",
  "description": "Make an eco-conscious statement without sacrificing writing pleasure. Crafted from 100% recycled unbleached fiber with zero plastic components.",
  "highlights": [
    "100% post-consumer recycled paper",
    "Chemical-free natural warm cream finish",
    "Biodegradable cotton spine binding",
    "Zero plastic packaging"
  ],
  "specifications": {
    "Cover": "Kraft Unbleached 300 GSM Board",
    "Pages": "100 Pages",
    "Material": "100% Recycled Cotton-wood Pulp",
    "Dimensions": "A5 (14.8 × 21 cm)"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 60,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 50,
      "discountPercent": 17
    },
    {
      "minQty": 50,
      "pricePerUnit": 42,
      "discountPercent": 30
    }
  ]
},
{
  "id": "e5834492-27a1-46ec-b737-1a2a6e2474b5",
  "slug": "office-notepad-sticky-notes",
  "name": "Office Sticky Notes Pad (50 Pages, 3x3 Neon)",
  "category": "notebooks-notepads",
  "subCategory": "notebooks-notepads",
  "price": 35,
  "originalPrice": 45,
  "rating": 4.7,
  "reviewCount": 234,
  "stock": 600,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-STICKY-3X3",
  "images": [
    "/images/products/office-notepad-sticky-notes.jpg"
  ],
  "shortDescription": "Self-adhesive repositionable sticky notes in vibrant neon shades. Leaves zero glue residue.",
  "description": "Keep your reminders, book markers, and office memos organized with strong adhesive backing that sticks securely to paper, walls, and monitors.",
  "highlights": [
    "50 peel-and-stick sheets per pad",
    "Repositionable adhesive backing",
    "Assorted bright neon colors",
    "Clean residue-free removal"
  ],
  "specifications": {
    "Dimensions": "3 × 3 inches (76 × 76 mm)",
    "Sheet Count": "50 Sheets",
    "Adhesion Type": "Clean Removable Acrylic"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 35,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 28,
      "discountPercent": 20
    },
    {
      "minQty": 50,
      "pricePerUnit": 22,
      "discountPercent": 37
    }
  ]
},
{
  "id": "212ec687-a41c-4103-8de4-bcd7dbde3d1f",
  "slug": "executive-diary-planner-365-pages",
  "name": "Executive Annual Diary & Planner (365 Pages)",
  "category": "notebooks-notepads",
  "subCategory": "notebooks-notepads",
  "price": 150,
  "originalPrice": 200,
  "rating": 4.9,
  "reviewCount": 445,
  "stock": 150,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": true,
  "sku": "GS-PLANNER-365",
  "images": [
    "/images/products/executive-diary-planner-365-pages.jpg"
  ],
  "shortDescription": "Hardbound luxury faux-leather diary with day-to-a-page layout, monthly calendars, and gold gilded ribbon marker.",
  "description": "The ideal tool for professionals, entrepreneurs, and busy students. Contains yearly planners, financial trackers, goal matrices, and daily appointment slots.",
  "highlights": [
    "365 full daily scheduling pages",
    "Premium hardbound leatherette finish",
    "Silk ribbon bookmark + document pocket",
    "70 GSM warm eye-comfort paper"
  ],
  "specifications": {
    "Cover": "Padded Vegan Leather",
    "Pages": "365 Pages",
    "Binding": "Section Sewn Hardcover",
    "Dimensions": "A5 Executive Size"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 150,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 125,
      "discountPercent": 17
    },
    {
      "minQty": 50,
      "pricePerUnit": 100,
      "discountPercent": 33
    }
  ]
},
{
  "id": "32da45cb-02b0-498d-8c59-8290b65daad2",
  "slug": "a4-copy-paper-ream-75gsm-500-sheets",
  "name": "A4 Copy Paper Ream (500 Sheets, 75 GSM)",
  "category": "paper-products",
  "subCategory": "paper-products",
  "price": 320,
  "originalPrice": 380,
  "rating": 4.9,
  "reviewCount": 1567,
  "stock": 1000,
  "isBestseller": true,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-A4-75GSM",
  "images": [
    "/images/products/a4-copy-paper-ream-75gsm-500-sheets.jpg"
  ],
  "shortDescription": "Ultra-bright 98% ISO certified multipurpose copy paper. Jam-free laser & inkjet printing.",
  "description": "Gupta Stationery's high-speed printing paper is calibrated for duplex laser, color inkjet, and heavy-volume xerox copying. Engineered with precision cut edges to prevent printer jams.",
  "highlights": [
    "500 sheets per sealed moisture-proof ream",
    "75 GSM high-opacity brightness (98% ISO)",
    "Zero-jam guarantee across all printer brands",
    "Acid-free for long archival durability"
  ],
  "specifications": {
    "GSM": "75 GSM",
    "Size": "A4 (210 × 297 mm)",
    "Brightness": "98% ISO Bright White",
    "Sheet Count": "500 Sheets per ream",
    "Certifications": "ISO 9001, ISO 14001"
  },
  "bulkPricing": [
    {
      "maxQty": 4,
      "minQty": 1,
      "pricePerUnit": 320,
      "discountPercent": 0
    },
    {
      "maxQty": 19,
      "minQty": 5,
      "pricePerUnit": 300,
      "discountPercent": 6
    },
    {
      "minQty": 20,
      "pricePerUnit": 280,
      "discountPercent": 12.5
    }
  ]
},
{
  "id": "72784a52-438e-4997-a303-5916ffae55ac",
  "slug": "cardstock-cardboard-250gsm-50-sheets",
  "name": "Heavy Cardstock / Craft Board (250 GSM, 50 Sheets)",
  "category": "paper-products",
  "subCategory": "paper-products",
  "price": 185,
  "originalPrice": 220,
  "rating": 4.8,
  "reviewCount": 321,
  "stock": 300,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-CARD-250",
  "images": [
    "/images/products/cardstock-cardboard-250gsm-50-sheets.jpg"
  ],
  "shortDescription": "Thick, premium 250 GSM smooth cardstock for greeting cards, scrapbooks, packaging, and printing.",
  "description": "Rigid yet pliable heavy paperboard suitable for die-cutting, embossing, calligraphy inks, and high-end brochure printing.",
  "highlights": [
    "50 sheets of heavyweight 250 GSM stock",
    "Matte smooth surface on both sides",
    "Compatible with laser and inkjet card printers",
    "Multiple color variants available"
  ],
  "specifications": {
    "GSM": "250 GSM",
    "Sheets": "50 Sheets",
    "Dimensions": "A4 Size (21 × 29.7 cm)"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 185,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 160,
      "discountPercent": 13.5
    },
    {
      "minQty": 50,
      "pricePerUnit": 140,
      "discountPercent": 24
    }
  ]
},
{
  "id": "bf31f58d-35e8-470c-9e37-dc8b50d1a7d9",
  "slug": "soft-tissue-paper-roll-2-ply",
  "name": "Soft Multi-Purpose Tissue Paper Roll (2-Ply, 400 Sheets)",
  "category": "paper-products",
  "subCategory": "paper-products",
  "price": 25,
  "originalPrice": 35,
  "rating": 4.8,
  "reviewCount": 892,
  "stock": 800,
  "isBestseller": false,
  "isEcoFriendly": true,
  "isNew": false,
  "sku": "GS-TISSUE-2PLY",
  "images": [
    "/images/products/soft-tissue-paper-roll-2-ply.jpg"
  ],
  "shortDescription": "Ultra-absorbent, hygienic 2-ply embossed tissue paper roll made from virgin biodegradable cellulose.",
  "description": "Soft on skin and tough on spills. Safe for office pantries, washrooms, kitchens, and daily table use.",
  "highlights": [
    "400 soft 2-ply perforated sheets",
    "100% biodegradable virgin pulp",
    "Lint-free and ultra-absorbent",
    "Hygienic individual wrap"
  ],
  "specifications": {
    "Ply": "2-Ply Extra Soft",
    "Color": "Natural Pure White",
    "Sheet Count": "400 Sheets / roll"
  },
  "bulkPricing": [
    {
      "maxQty": 11,
      "minQty": 1,
      "pricePerUnit": 25,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 12,
      "pricePerUnit": 20,
      "discountPercent": 20
    },
    {
      "minQty": 50,
      "pricePerUnit": 15,
      "discountPercent": 40
    }
  ]
},
{
  "id": "89782796-1cb4-44ce-aaae-04aca2bb25b0",
  "slug": "heavy-duty-stapler-combo-with-50-staples",
  "name": "Heavy-Duty Office Stapler + Staples Combo",
  "category": "office-supplies",
  "subCategory": "office-supplies",
  "price": 95,
  "originalPrice": 130,
  "rating": 4.9,
  "reviewCount": 567,
  "stock": 400,
  "isBestseller": true,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-STAPLE-SET",
  "images": [
    "/images/products/heavy-duty-stapler-combo-with-50-staples.jpg"
  ],
  "shortDescription": "Jam-free steel mechanism stapler with 25-sheet capacity. Includes 50 starter staples free.",
  "description": "Workplace staple built with hardened steel internals and ergonomic non-slip rubber base. Features quick-loading spring channel.",
  "highlights": [
    "Staples up to 25 sheets effortlessly",
    "Anti-jamming guidance track",
    "Built-in staple remover on back",
    "Free 50 pin staples included"
  ],
  "specifications": {
    "Body": "Steel Mechanism + High-impact ABS",
    "Capacity": "25 Sheets (80 GSM)",
    "Pin Size": "Standard No. 10 / 24/6"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 95,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 80,
      "discountPercent": 15.7
    },
    {
      "minQty": 50,
      "pricePerUnit": 65,
      "discountPercent": 31.5
    }
  ]
},
{
  "id": "502fa304-db50-404a-9532-08e06dfe0592",
  "slug": "metal-paper-clips-50-pack",
  "name": "Rust-Resistant Metal Paper Clips (50 Pcs/Box)",
  "category": "office-supplies",
  "subCategory": "office-supplies",
  "price": 28,
  "originalPrice": 35,
  "rating": 4.7,
  "reviewCount": 234,
  "stock": 600,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-CLIPS-50",
  "images": [
    "/images/products/metal-paper-clips-50-pack.jpg"
  ],
  "shortDescription": "Nickel-plated smooth steel paper clips. Non-tearing rounded edges.",
  "description": "Organize office documents cleanly without damaging page corners. Rust-resistant coating protects papers from staining.",
  "highlights": [
    "50 pieces per storage box",
    "28mm standard office length",
    "Smooth nickel plating",
    "Zero snagging or tearing"
  ],
  "specifications": {
    "Size": "28mm Length",
    "Material": "Nickel Plated Spring Steel",
    "Quantity": "50 Pieces"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 28,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 22,
      "discountPercent": 21.4
    },
    {
      "minQty": 50,
      "pricePerUnit": 15,
      "discountPercent": 46.4
    }
  ]
},
{
  "id": "8861d294-8aec-4a72-bca7-cc717a40797d",
  "slug": "rubber-band-set-250-pieces",
  "name": "Assorted Elastic Rubber Bands (250 Pieces Box)",
  "category": "office-supplies",
  "subCategory": "office-supplies",
  "price": 40,
  "originalPrice": 50,
  "rating": 4.8,
  "reviewCount": 445,
  "stock": 350,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-RUBBER-250",
  "images": [
    "/images/products/rubber-band-set-250-pieces.jpg"
  ],
  "shortDescription": "High-elasticity durable natural rubber bands in multiple diameters for bundling cash, papers, and packages.",
  "description": "Premium flexibility that stretches up to 3x original size without snapping or degrading over time.",
  "highlights": [
    "250 pieces multi-size assortment",
    "Natural latex-free formula",
    "High tensile rebound strength",
    "Long shelf-life"
  ],
  "specifications": {
    "Count": "250 Pieces",
    "Sizes": "Assorted Small, Medium, Large",
    "Material": "Synthetic High Stretch Polymer"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 40,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 32,
      "discountPercent": 20
    },
    {
      "minQty": 50,
      "pricePerUnit": 24,
      "discountPercent": 40
    }
  ]
},
{
  "id": "4f32e6f2-b264-4db9-9979-e769982fb1b9",
  "slug": "manila-file-folders-a4-pack-of-10",
  "name": "Heavy Manila Document File Folders (A4, Pack of 10)",
  "category": "office-supplies",
  "subCategory": "office-supplies",
  "price": 180,
  "originalPrice": 220,
  "rating": 4.8,
  "reviewCount": 398,
  "stock": 500,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-FOLDER-10",
  "images": [
    "/images/products/manila-file-folders-a4-pack-of-10.jpg"
  ],
  "shortDescription": "180 GSM reinforced card file folders with indexing tabs for corporate and legal document management.",
  "description": "Keep critical paperwork categorized and crease-free. Features expand-gussets and write-on tab labels in assorted corporate hues.",
  "highlights": [
    "Pack of 10 durable file folders",
    "180 GSM thick tear-resistant board",
    "Pre-scored for 1-inch expansion",
    "Assorted color coding options"
  ],
  "specifications": {
    "Pack": "10 Folders",
    "Size": "A4 / Legal Size",
    "Weight": "180 GSM Cardstock"
  },
  "bulkPricing": [
    {
      "maxQty": 4,
      "minQty": 1,
      "pricePerUnit": 180,
      "discountPercent": 0
    },
    {
      "maxQty": 19,
      "minQty": 5,
      "pricePerUnit": 150,
      "discountPercent": 16.6
    },
    {
      "minQty": 20,
      "pricePerUnit": 120,
      "discountPercent": 33.3
    }
  ]
},
{
  "id": "de838a46-1e96-49a7-a476-eab8c820220b",
  "slug": "gupta-complete-geometry-box-15-pieces",
  "name": "Gupta Master Geometry Box (15 Precision Tools)",
  "category": "school-supplies",
  "subCategory": "school-supplies",
  "price": 120,
  "originalPrice": 160,
  "rating": 4.9,
  "reviewCount": 789,
  "stock": 600,
  "isBestseller": true,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-GEOM-15",
  "images": [
    "/images/products/gupta-complete-geometry-box-15-pieces.jpg"
  ],
  "shortDescription": "Complete student drafting kit in a protective metal tin. Calibrated accurate scales and sturdy compass.",
  "description": "The preferred geometry box for CBSE and ICSE students in Raipur. Includes self-centering compass, divider, 15cm ruler, 45° and 60° set squares, 180° protractor, eraser, and pencil.",
  "highlights": [
    "15 essential precision drafting instruments",
    "Rust-proof zinc die-cast compass & divider",
    "Laser-etched markings for ultra-clear reading",
    "Sturdy vintage-style tin case"
  ],
  "specifications": {
    "Case": "Metal Tin Protective Box",
    "Accuracy": "±0.5mm Lab Calibrated",
    "Tools Count": "15 Pieces",
    "Scale Marking": "Metric (cm/mm) & Imperial (inches)"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 120,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 100,
      "discountPercent": 16.6
    },
    {
      "minQty": 50,
      "pricePerUnit": 80,
      "discountPercent": 33.3
    }
  ]
},
{
  "id": "17aa99fd-1ce6-4e66-a16f-f617d4eb4aec",
  "slug": "eraser-sharpener-duo-combo",
  "name": "Dust-Free Eraser & Steel Sharpener Combo",
  "category": "school-supplies",
  "subCategory": "school-supplies",
  "price": 35,
  "originalPrice": 45,
  "rating": 4.8,
  "reviewCount": 567,
  "stock": 450,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-ERASE-SHARP",
  "images": [
    "/images/products/eraser-sharpener-duo-combo.jpg"
  ],
  "shortDescription": "2-in-1 student staple. Non-smudge polymer eraser paired with precision German steel blade sharpener.",
  "description": "Erases graphite effortlessly without rolling dust or tearing thin notebook paper. Sharpener creates clean needle points on standard 8mm pencils.",
  "highlights": [
    "Roll-up dust-free eraser formula",
    "Contoured single-hole sharpener with shavings canister",
    "Non-toxic and phthalate-free",
    "Pocket-friendly design"
  ],
  "specifications": {
    "Blade": "German Hardened Carbon Steel",
    "Eraser": "Synthetic Polymer Dust-Free",
    "Compatibility": "Standard 6-8mm Pencils"
  },
  "bulkPricing": [
    {
      "maxQty": 11,
      "minQty": 1,
      "pricePerUnit": 35,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 12,
      "pricePerUnit": 28,
      "discountPercent": 20
    },
    {
      "minQty": 50,
      "pricePerUnit": 20,
      "discountPercent": 42.8
    }
  ]
},
{
  "id": "ec74a2a6-077f-4b53-abc6-22e09077f91f",
  "slug": "classic-wooden-pencil-box-12-slot",
  "name": "Handcrafted Wooden Pencil Box (12 Slots)",
  "category": "school-supplies",
  "subCategory": "school-supplies",
  "price": 45,
  "originalPrice": 65,
  "rating": 4.9,
  "reviewCount": 623,
  "stock": 300,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-WOOD-BOX",
  "images": [
    "/images/products/classic-wooden-pencil-box-12-slot.jpg"
  ],
  "shortDescription": "Classic natural pine wooden pencil case with slide lid and velvet internal lining.",
  "description": "Ditch flimsy plastic boxes. This timeless wooden case safeguards pens, pencils, rulers, and compasses while adding warmth to school desks.",
  "highlights": [
    "Solid natural pine construction",
    "Smooth sliding lid with thumb indent",
    "Stores 12+ full-length pencils",
    "Custom name engraving ready"
  ],
  "specifications": {
    "Finish": "Eco Beeswax Polish",
    "Material": "Treated Natural Pine",
    "Dimensions": "7 × 4 × 2 inches"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 45,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 38,
      "discountPercent": 15.5
    },
    {
      "minQty": 50,
      "pricePerUnit": 30,
      "discountPercent": 33.3
    }
  ]
},
{
  "id": "c61d416c-76c9-45ec-a4b3-d4aece0e5b21",
  "slug": "precision-metal-drafting-compass",
  "name": "Engineering Precision Metal Compass",
  "category": "school-supplies",
  "subCategory": "school-supplies",
  "price": 50,
  "originalPrice": 70,
  "rating": 4.7,
  "reviewCount": 456,
  "stock": 250,
  "isBestseller": false,
  "isEcoFriendly": false,
  "isNew": false,
  "sku": "GS-COMPASS-MET",
  "images": [
    "/images/products/precision-metal-drafting-compass.jpg"
  ],
  "shortDescription": "Heavy-duty all-metal compass with micro-adjustment thumbwheel for accurate circle arcs up to 15cm radius.",
  "description": "Rigid metal legs prevent flex during circle drawing. Supplied with replacement needle points and lead tubes.",
  "highlights": [
    "15cm maximum drawing radius",
    "Central thumbwheel micro-adjustment",
    "Includes spare lead tube and safety cap",
    "All-metal matte chrome finish"
  ],
  "specifications": {
    "Body": "Die-cast Zinc Alloy",
    "Adjustment": "Friction Gear + Center Wheel",
    "Max Radius": "15 cm (30 cm Diameter)"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 50,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 42,
      "discountPercent": 16
    },
    {
      "minQty": 50,
      "pricePerUnit": 35,
      "discountPercent": 30
    }
  ]
},
{
  "id": "fe04de24-df39-463a-97c4-6ed8f467fa60",
  "slug": "biodegradable-plantable-pen-set-10-pens",
  "name": "Gupta Biodegradable & Plantable Pen Set (10 Pens)",
  "category": "eco-friendly-range",
  "subCategory": "eco-friendly-range",
  "price": 200,
  "originalPrice": 260,
  "rating": 4.9,
  "reviewCount": 523,
  "stock": 200,
  "isBestseller": true,
  "isEcoFriendly": true,
  "isNew": false,
  "sku": "GS-ECO-PEN10",
  "images": [
    "/images/products/biodegradable-plantable-pen-set-10-pens.jpg"
  ],
  "shortDescription": "Plantable pens made from 100% recycled paper barrel with non-toxic biodegradable ink and seed capsules at the base.",
  "description": "Write your thoughts and plant the pen when it runs out! Each pen is embedded with organic seeds (Basil, Marigold, Tomato) that sprout into plants when planted in soil.",
  "highlights": [
    "100% plastic-free recycled paper barrel",
    "Seed capsule on rear (Tomato, Basil, Marigold)",
    "3000+ words smooth non-toxic writing",
    "Popular corporate eco-gifting product"
  ],
  "specifications": {
    "Ink": "Non-Toxic High Capacity Blue Ink",
    "Pack": "10 Plantable Pens",
    "Seeds": "Non-GMO Organic Herb & Flower Seeds",
    "Barrel": "Compressed Recycled Newspaper"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 200,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 170,
      "discountPercent": 15
    },
    {
      "minQty": 50,
      "pricePerUnit": 150,
      "discountPercent": 25
    }
  ]
},
{
  "id": "f58298ff-f9a7-413d-aed4-3e48613a0e9a",
  "slug": "natural-rubber-eraser-pack-of-5",
  "name": "Natural Tree-Rubber Erasers (Pack of 5, PVC-Free)",
  "category": "eco-friendly-range",
  "subCategory": "eco-friendly-range",
  "price": 55,
  "originalPrice": 70,
  "rating": 4.8,
  "reviewCount": 412,
  "stock": 400,
  "isBestseller": false,
  "isEcoFriendly": true,
  "isNew": false,
  "sku": "GS-ECO-ERASE5",
  "images": [
    "/images/products/natural-rubber-eraser-pack-of-5.jpg"
  ],
  "shortDescription": "100% pure vulcanized natural rubber erasers. 0% PVC, zero synthetic plastics, completely safe for children.",
  "description": "Sustainably harvested from rubber trees. Leaves no chemical residue on paper and breaks down naturally in soil.",
  "highlights": [
    "Pack of 5 tree-sap rubber erasers",
    "100% PVC & phthalate free",
    "Soft, velvety feel with non-tearing erasing",
    "Completely biodegradable"
  ],
  "specifications": {
    "Count": "5 Erasers",
    "Material": "100% Natural Hevea Rubber",
    "Eco Label": "Zero Micro-plastics"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 55,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 45,
      "discountPercent": 18
    },
    {
      "minQty": 50,
      "pricePerUnit": 35,
      "discountPercent": 36
    }
  ]
},
{
  "id": "82812173-d7d5-4eea-bb7e-7f2cba667828",
  "slug": "recycled-paper-kraft-notebook-150-pages",
  "name": "Recycled Paper Kraft Notebook (150 Pages)",
  "category": "eco-friendly-range",
  "subCategory": "eco-friendly-range",
  "price": 75,
  "originalPrice": 95,
  "rating": 4.9,
  "reviewCount": 667,
  "stock": 300,
  "isBestseller": false,
  "isEcoFriendly": true,
  "isNew": false,
  "sku": "GS-ECO-KRAFT150",
  "images": [
    "/images/products/recycled-paper-kraft-notebook-150-pages.jpg"
  ],
  "shortDescription": "150 pages of unbleached post-consumer recycled paper bound in flexible natural Kraft board.",
  "description": "Saves trees, water, and energy with every page. Thread-sewn spine lays flat at 180° for easy writing and sketching.",
  "highlights": [
    "150 pages 60 GSM recycled paper",
    "Soy-ink printed unobtrusive dot grid",
    "Flat-lay 180-degree open spine",
    "Plastic-free paper band packaging"
  ],
  "specifications": {
    "Pages": "150 Pages",
    "Layout": "Dot Grid / Ruled",
    "Binding": "Cotton Thread Sewn",
    "Dimensions": "A5 (148 × 210 mm)"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 75,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 62,
      "discountPercent": 17.3
    },
    {
      "minQty": 50,
      "pricePerUnit": 50,
      "discountPercent": 33.3
    }
  ]
},
{
  "id": "7788fbb9-1e32-4f7f-89e0-5e166ea5e199",
  "slug": "natural-bamboo-pencils-pack-of-10",
  "name": "Sustainable Bamboo HB Pencils (Pack of 10)",
  "category": "eco-friendly-range",
  "subCategory": "eco-friendly-range",
  "price": 65,
  "originalPrice": 85,
  "rating": 4.8,
  "reviewCount": 534,
  "stock": 250,
  "isBestseller": false,
  "isEcoFriendly": true,
  "isNew": false,
  "sku": "GS-ECO-BAMBOO10",
  "images": [
    "/images/products/natural-bamboo-pencils-pack-of-10.jpg"
  ],
  "shortDescription": "Fast-growing renewable bamboo body pencils with rich HB graphite and natural eraser tops.",
  "description": "Bamboo is a fast-regenerating grass that requires no deforestation. These pencils feel warm to the touch and sharpen smoothly.",
  "highlights": [
    "Pack of 10 100% bamboo casing pencils",
    "Deep dark HB smooth writing lead",
    "Zero rainforest timber used",
    "Biodegradable natural rubber eraser head"
  ],
  "specifications": {
    "Hardness": "HB Grade",
    "Material": "100% Organically Grown Bamboo",
    "Pack Size": "10 Pencils"
  },
  "bulkPricing": [
    {
      "maxQty": 9,
      "minQty": 1,
      "pricePerUnit": 65,
      "discountPercent": 0
    },
    {
      "maxQty": 49,
      "minQty": 10,
      "pricePerUnit": 55,
      "discountPercent": 15.3
    },
    {
      "minQty": 50,
      "pricePerUnit": 45,
      "discountPercent": 30.7
    }
  ]
},
  {
    "id": "prod-jk-red-75",
    "slug": "jk-red-copier-paper-75-gsm",
    "name": "JK Red Copier Paper 75 GSM (1 Packet / Ream - 500 Sheets)",
    "category": "copier-paper",
    "subCategory": "75 GSM Copier",
    "price": 270,
    "originalPrice": 350,
    "rating": 4.9,
    "reviewCount": 384,
    "stock": 100,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "JK-COP-75-RED",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "JK Red 75 GSM premium multipurpose copier paper for ultra-sharp laser, color inkjet, and duplex printing.",
    "description": "JK Red 75 GSM Copier Paper is India's leading office paper engineered for jam-free high-speed performance across all printers, copiers, and digital duplication machines. Precision cut edges and optimal brightness ensure crisp text and high-contrast color reproduction.",
    "highlights": [
      "75 GSM high-opacity paper preventing show-through on duplex copies",
      "Compatible with laser, inkjet, digital copiers, and high-speed xerox machines",
      "Precision rotary cut for zero-jam smooth paper feeding",
      "High whiteness and brightness for sharp document clarity",
      "500 sheets moisture-proof sealed packaging"
    ],
    "specifications": {
      "Brand": "JK Paper",
      "GSM": "75 GSM",
      "Sheet Size": "A4 (210 x 297 mm)",
      "Sheets per Ream": "500 Sheets",
      "Packaging": "Moisture-proof poly wrapper",
      "Brightness": "98% ISO",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 270
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 250
      },
      {
        "minQty": 20,
        "maxQty": 99,
        "discountPercent": 12,
        "pricePerUnit": 238
      },
      {
        "minQty": 100,
        "discountPercent": 18,
        "pricePerUnit": 220
      }
    ]
  },
  {
    "id": "prod-jk-ecorise",
    "slug": "jk-ecorise-copier-paper",
    "name": "JK Ecorise Copier Paper (1 Packet / Ream - 500 Sheets)",
    "category": "copier-paper",
    "subCategory": "Ecorise",
    "price": 230,
    "originalPrice": 320,
    "rating": 4.7,
    "reviewCount": 219,
    "stock": 80,
    "isBestseller": true,
    "isEcoFriendly": true,
    "sku": "JK-ECO-RISE",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Eco-friendly, cost-effective copier paper engineered for high-volume office and institutional printing.",
    "description": "JK Ecorise is an environmentally conscious copier paper crafted using agro-residue pulping processes. Ideal for everyday printing, draft copies, school assignments, and high-volume corporate document distribution.",
    "highlights": [
      "Eco-responsible pulp production with high recycling content",
      "Economical daily printing solution for schools and offices",
      "Clean running through desktop laser and inkjet printers",
      "500 sheets per packet"
    ],
    "specifications": {
      "Brand": "JK Paper",
      "Sheet Size": "A4 (210 x 297 mm)",
      "Sheets per Ream": "500 Sheets",
      "Eco Certified": "Yes",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 230
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 6,
        "pricePerUnit": 215
      },
      {
        "minQty": 20,
        "discountPercent": 13,
        "pricePerUnit": 200
      }
    ]
  },
  {
    "id": "prod-sirpur-ledger",
    "slug": "sirpur-ledger-paper-ream",
    "name": "Sirpur Ledger Paper (1 Packet / Ream - 500 Sheets)",
    "category": "copier-paper",
    "subCategory": "Ledger Paper",
    "price": 350,
    "originalPrice": 450,
    "rating": 4.8,
    "reviewCount": 142,
    "stock": 60,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "SIRPUR-LEDGER-01",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Heavy-duty archival quality Sirpur ledger paper for official legal, audit, and accounting records.",
    "description": "Sirpur Ledger Paper is renowned across courts, legal chambers, accounting firms, and government offices for its enduring strength, smooth surface, and resistance to aging.",
    "highlights": [
      "Archival-grade strength resisting yellowing and deterioration",
      "Smooth finish ideal for fountain pens, ball pens, and laser printing",
      "Durable heavy fiber structure designed for frequent handling",
      "500 Sheets full ream packaging"
    ],
    "specifications": {
      "Brand": "Sirpur Paper Mills",
      "Usage": "Legal, Accounting, Auditing & Official Registers",
      "Sheets per Ream": "500 Sheets",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 350
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 315
      }
    ]
  },
  {
    "id": "prod-jk-bond",
    "slug": "jk-bond-paper-100-sheets",
    "name": "JK Bond Paper (100 Sheets Executive Pack)",
    "category": "copier-paper",
    "subCategory": "Bond Paper",
    "price": 150,
    "originalPrice": 180,
    "rating": 4.9,
    "reviewCount": 96,
    "stock": 75,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "JK-BOND-100",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Ultra-premium watermarked 85 GSM bond paper for corporate letterheads, agreements, and resumes.",
    "description": "JK Bond Paper represents the pinnacle of executive communication. Featuring authentic watermarking, cotton content feel, and remarkable crispness, it commands respect in every formal document.",
    "highlights": [
      "Authentic watermark with luxury executive texture",
      "85 GSM heavy feel with exceptional tactile finish",
      "Perfect for corporate agreements, letters of intent, and certificates",
      "100 sheets premium protective folder"
    ],
    "specifications": {
      "Brand": "JK Paper",
      "GSM": "85 GSM",
      "Pack Count": "100 Sheets",
      "Watermark": "Yes",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 150
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 135
      }
    ]
  },
  {
    "id": "prod-jk-cedar",
    "slug": "jk-cedar-copier-paper",
    "name": "JK Cedar Ultra White Copier Paper (1 Packet / Ream - 500 Sheets)",
    "category": "copier-paper",
    "subCategory": "Cedar Paper",
    "price": 350,
    "originalPrice": 500,
    "rating": 4.9,
    "reviewCount": 118,
    "stock": 50,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "JK-CEDAR-500",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Super-bright 80 GSM ultra-white copier paper for vivid presentations and graphic brochures.",
    "description": "JK Cedar delivers elite brightness and smoothness, specially calibrated for high-density color graphics, client pitch decks, architecture portfolios, and executive reporting.",
    "highlights": [
      "80 GSM ultra-dense thickness with 100%+ whiteness index",
      "Vivid color vibrancy with instantaneous ink absorption",
      "Ideal for marketing proposals and client presentations",
      "500 Sheets per ream"
    ],
    "specifications": {
      "Brand": "JK Paper",
      "GSM": "80 GSM",
      "Sheets per Ream": "500 Sheets",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 350
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 315
      }
    ]
  },
  {
    "id": "prod-orient-copier",
    "slug": "orient-copier-paper-ream",
    "name": "Orient Copier Paper (1 Packet / Ream - 500 Sheets)",
    "category": "copier-paper",
    "subCategory": "Orient Copier",
    "price": 210,
    "originalPrice": 350,
    "rating": 4.6,
    "reviewCount": 260,
    "stock": 120,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "ORIENT-COP-500",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Affordable, versatile 70 GSM multi-purpose copier paper for daily xerox, study materials, and office prints.",
    "description": "Orient Copier Paper provides exceptional value for commercial xerox centers, coaching institutes, schools, and offices requiring high-volume economical duplicating paper.",
    "highlights": [
      "70 GSM lightweight economical printing standard",
      "Smooth surface preventing machine jamming",
      "500 Sheets bulk ream",
      "Unbeatable bulk wholesale pricing"
    ],
    "specifications": {
      "Brand": "Orient Paper",
      "Sheets per Ream": "500 Sheets",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 210
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 195
      },
      {
        "minQty": 20,
        "discountPercent": 14,
        "pricePerUnit": 180
      }
    ]
  },
  {
    "id": "prod-kangaro-pin-10",
    "slug": "kangaro-stapler-pin-no-10",
    "name": "Kangaro Stapler Pin No. 10 (1 Packet / Box - 1000 Staples)",
    "category": "office-stationery",
    "subCategory": "Stapler Pins",
    "price": 10,
    "originalPrice": 12,
    "rating": 4.9,
    "reviewCount": 512,
    "stock": 250,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "KANG-PIN-10",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Rust-resistant high-tensile steel staple pins for all standard No. 10 staplers.",
    "description": "Kangaro No. 10 Stapler Pins are precision-crafted from high-grade galvanized steel wire with sharp chisel points for effortless paper penetration without jamming.",
    "highlights": [
      "1,000 staples per pack",
      "Rust-resistant anti-corrosive coating",
      "Chisel point tips for clean, snag-free stapling",
      "Fits all standard No. 10 desktop staplers"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Model": "No. 10-1M",
      "Count": "1000 Staples",
      "Capacity": "Up to 20 Sheets",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 10,
        "discountPercent": 20,
        "pricePerUnit": 8
      }
    ]
  },
  {
    "id": "prod-kangaro-pin-24-6",
    "slug": "kangaro-stapler-pin-24-6",
    "name": "Kangaro Stapler Pin 24/6 (1 Packet / Box - 1000 Staples)",
    "category": "office-stationery",
    "subCategory": "Stapler Pins",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 340,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "KANG-PIN-24-6",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Heavy-duty standard 24/6 chisel point staples for full-strip and half-strip desktop staplers.",
    "description": "Kangaro 24/6 Staples provide secure binding for up to 30 sheets of paper. Crafted with precision edge alignment for smooth gliding in corporate and institutional staplers.",
    "highlights": [
      "Standard 24/6 size (6mm leg length)",
      "High penetration strength for thick document stacks",
      "1000 staples per box"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Model": "24/6-1M",
      "Capacity": "Up to 30 Sheets",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 10,
        "discountPercent": 12,
        "pricePerUnit": 22
      }
    ]
  },
  {
    "id": "prod-kangaro-stapler-10",
    "slug": "kangaro-stapler-no-10",
    "name": "Kangaro Stapler No. 10 (Compact Desktop Stapler)",
    "category": "office-stationery",
    "subCategory": "Staplers",
    "price": 70,
    "originalPrice": 75,
    "rating": 4.8,
    "reviewCount": 420,
    "stock": 90,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "KANG-STAP-10",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Classic steel-mechanism compact desktop stapler with integrated staple remover.",
    "description": "The trusted Kangaro No. 10 Stapler features an ergonomic plastic cap with a rugged all-steel body mechanism. Includes a built-in rear staple remover and reload indicator window.",
    "highlights": [
      "Staples up to 20 sheets effortlessly",
      "Built-in staple remover on tail",
      "Quick drop-in top loading mechanism",
      "Compact size fitting any desk organizer"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Compatible Pins": "No. 10",
      "Stapling Capacity": "20 Sheets",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 70
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 63
      }
    ]
  },
  {
    "id": "prod-kangaro-hd10d",
    "slug": "kangaro-stapler-hd10d",
    "name": "Kangaro Stapler HD-10D (Heavy Duty All-Metal)",
    "category": "office-stationery",
    "subCategory": "Staplers",
    "price": 120,
    "originalPrice": 125,
    "rating": 4.9,
    "reviewCount": 195,
    "stock": 60,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "KANG-STAP-HD10D",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Heavy-duty ergonomic metal desktop stapler with dual-strip capacity for high-volume offices.",
    "description": "Kangaro HD-10D is designed for continuous daily office use. Boasting an all-metal chassis, smooth lever action, and extended throat depth for versatile document positioning.",
    "highlights": [
      "All-metal heavy gauge steel construction",
      "Dual strip loading (100 staples capacity)",
      "Tough build quality lasting years of rigorous use"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Model": "HD-10D",
      "Compatible Pins": "No. 10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 120
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 108
      }
    ]
  },
  {
    "id": "prod-kangaro-hp45",
    "slug": "kangaro-plier-stapler-hp45",
    "name": "Kangaro Plier Heavy Duty Stapler HP-45",
    "category": "office-stationery",
    "subCategory": "Staplers",
    "price": 299,
    "originalPrice": 325,
    "rating": 4.9,
    "reviewCount": 88,
    "stock": 40,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "KANG-PLIER-HP45",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Plier-grip heavy duty packaging and binding stapler for courier parcels, tags, and bags.",
    "description": "Kangaro HP-45 Plier Stapler features an ergonomic squeeze handle that delivers powerful leverage with minimal hand strain. Widely utilized in dispatch centers, retail stores, and archives.",
    "highlights": [
      "Powerful plier squeeze mechanism for thick packages",
      "All-steel chrome-plated corrosion resistant body",
      "Throat depth of 45mm for deep stapling",
      "Compatible with 24/6 and 26/6 staples"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Model": "HP-45",
      "Compatible Pins": "24/6, 26/6",
      "Capacity": "Up to 30 Sheets / Parcel Bags",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 2,
        "discountPercent": 0,
        "pricePerUnit": 299
      },
      {
        "minQty": 3,
        "discountPercent": 10,
        "pricePerUnit": 269
      }
    ]
  },
  {
    "id": "prod-kangaro-tape-disp",
    "slug": "kangaro-desktop-tape-dispenser",
    "name": "Kangaro Heavy Weighted Desk Tape Dispenser",
    "category": "office-stationery",
    "subCategory": "Tape Dispensers",
    "price": 90,
    "originalPrice": 99,
    "rating": 4.7,
    "reviewCount": 165,
    "stock": 55,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "KANG-TAPE-DISP-01",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Non-skid weighted desktop tape cutter dispenser with stainless steel serrated blade.",
    "description": "Kangaro Desktop Tape Dispenser stays firmly anchored on your workstation while you pull and cut adhesive tape with one hand. Features a high-precision anti-rust cutting blade.",
    "highlights": [
      "Weighted rubberized base preventing sliding during single-handed use",
      "Stainless steel high-durability serrated cutter",
      "Accommodates standard 1-inch and 3-inch core tapes"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Blade Material": "Stainless Steel",
      "Base": "Weighted Anti-Skid Rubber",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 90
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 81
      }
    ]
  },
  {
    "id": "prod-kangaro-td18y",
    "slug": "kangaro-handy-tape-dispenser-td18y",
    "name": "Kangaro Handy Tape Dispenser TD-18Y (1 Piece)",
    "category": "office-stationery",
    "subCategory": "Tape Dispensers",
    "price": 70,
    "originalPrice": 70,
    "rating": 4.8,
    "reviewCount": 130,
    "stock": 70,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "KANG-TD18Y",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Compact hand-held tape cutter for quick box sealing, gift wrapping, and crafts.",
    "description": "Kangaro TD-18Y is a portable, lightweight tape dispenser designed for swift packaging, parcel sealing, and administrative duties on the go.",
    "highlights": [
      "Handy ergonomic finger grip contour",
      "Safe and efficient cutting blade",
      "Ideal for desk drawers, retail counters, and dispatch desks"
    ],
    "specifications": {
      "Brand": "Kangaro",
      "Model": "TD-18Y",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 70
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 63
      }
    ]
  },
  {
    "id": "prod-world-one-push-pin",
    "slug": "world-one-push-pins-packet",
    "name": "World One Push Pins (Assorted Colors Packet)",
    "category": "office-stationery",
    "subCategory": "Pins & Clips",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.8,
    "reviewCount": 210,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "WO-PIN-PUSH",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Sharp stainless steel pin tips with vibrant transparent plastic heads for notice boards and maps.",
    "description": "World One Push Pins offer effortless pinning onto cork boards, soft fabric partitions, maps, and bulletin displays without bending.",
    "highlights": [
      "Sturdy steel points that anchor securely without bending",
      "Vibrant multicolored heads for color-coded organization",
      "Reusable clear storage box included"
    ],
    "specifications": {
      "Brand": "World One",
      "Quantity": "1 Packet (~50 Pins)",
      "Head Colors": "Assorted (Red, Blue, Yellow, Green, White)",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 5,
        "discountPercent": 14,
        "pricePerUnit": 30
      }
    ]
  },
  {
    "id": "prod-world-one-all-pin",
    "slug": "world-one-all-pins-packet",
    "name": "World One All Pins / Paper Pins (2 Packets)",
    "category": "office-stationery",
    "subCategory": "Pins & Clips",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.7,
    "reviewCount": 180,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "WO-PIN-ALL-2PK",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Nickel-plated rust-resistant smooth head paper pins for office files and tailoring.",
    "description": "World One All Pins are manufactured from polished high-grade steel wire with smooth round heads and ultra-sharp tips for fastening documents without tearing fibers.",
    "highlights": [
      "Includes 2 full packets",
      "Rust-proof nickel plating for long shelf life",
      "Precision pointed for effortless piercing"
    ],
    "specifications": {
      "Brand": "World One",
      "Quantity": "2 Packets",
      "Finish": "Nickel Plated Steel",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 5,
        "discountPercent": 14,
        "pricePerUnit": 30
      }
    ]
  },
  {
    "id": "prod-world-one-t-pin",
    "slug": "world-one-t-pins-packet",
    "name": "World One Steel T-Pins (3 Packets)",
    "category": "office-stationery",
    "subCategory": "Pins & Clips",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.8,
    "reviewCount": 95,
    "stock": 120,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "WO-PIN-T-3PK",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Heavy-duty T-bar head steel pins for fabric, partition boards, crafts, and wig making.",
    "description": "World One T-Pins feature a wide T-bar head that is easy to grasp and push into dense surfaces such as cubicle fabric walls, cork boards, and model crafting.",
    "highlights": [
      "Set of 3 packets",
      "Strong T-bar head providing superior grip and leverage",
      "Smooth sharp tip for clean fastening"
    ],
    "specifications": {
      "Brand": "World One",
      "Quantity": "3 Packets",
      "Material": "Hardened Steel",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 5,
        "discountPercent": 14,
        "pricePerUnit": 30
      }
    ]
  },
  {
    "id": "prod-world-one-color-clip",
    "slug": "world-one-color-coated-paper-clips",
    "name": "World One Color Coated Paper Clips (4 Packets)",
    "category": "office-stationery",
    "subCategory": "Pins & Clips",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 230,
    "stock": 140,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "WO-CLIP-COLOR-4PK",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Vinyl plastic coated colorful paper clips with smooth non-tear grip for file indexing.",
    "description": "World One Color Coated Paper Clips protect your important documents from scratches and rust stains while adding vibrant color-coded sorting to office and study files.",
    "highlights": [
      "Set of 4 packets in assorted bright colors",
      "Vinyl coating prevents paper tearing and rust marks",
      "Strong spring tension holds up to 25 sheets"
    ],
    "specifications": {
      "Brand": "World One",
      "Quantity": "4 Packets",
      "Coating": "Protective Vinyl",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 5,
        "discountPercent": 14,
        "pricePerUnit": 30
      }
    ]
  },
  {
    "id": "prod-world-one-metal-clip",
    "slug": "world-one-metal-paper-clips",
    "name": "World One Heavy Duty Metal Paper Clips (5 Packets)",
    "category": "office-stationery",
    "subCategory": "Pins & Clips",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.8,
    "reviewCount": 310,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "WO-CLIP-METAL-5PK",
    "images": [
      "/images/products/copier-paper.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Zinc-plated rust-resistant classic metal paper binder clips for daily office documentation.",
    "description": "World One Metal Paper Clips are forged from spring steel wire with smooth rounded edges to clamp documents securely without crimping or damaging pages.",
    "highlights": [
      "Value bundle: 5 full packets",
      "Zinc galvanized corrosion resistant finish",
      "Firm non-slip grip holding documents neatly"
    ],
    "specifications": {
      "Brand": "World One",
      "Quantity": "5 Packets",
      "Material": "Spring Steel",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 5,
        "discountPercent": 14,
        "pricePerUnit": 30
      }
    ]
  },
  {
    "id": "prod-miles-stapler-gun",
    "slug": "miles-heavy-duty-stapler-gun",
    "name": "Miles Heavy Duty Industrial Stapler Tacker Gun",
    "category": "office-stationery",
    "subCategory": "Stapler Guns",
    "price": 990,
    "originalPrice": 1080,
    "rating": 4.9,
    "reviewCount": 76,
    "stock": 25,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "MILES-STAP-GUN-01",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Professional all-steel manual staple gun for upholstery, wooden frames, canvas, and exhibition boards.",
    "description": "Miles Heavy Duty Tacker Stapler Gun delivers industrial-strength driving power. Constructed with an all-steel body, recoil-absorbing hand grip, and adjustable impact tension knob.",
    "highlights": [
      "All-steel chrome plated construction for extreme durability",
      "Force adjustment knob for soft and hard surfaces",
      "Handle lock safety mechanism for compact storage",
      "Widely used in framing, display boards, and packaging"
    ],
    "specifications": {
      "Brand": "Miles",
      "Mechanism": "Heavy Duty Manual Spring Lever",
      "Body": "Forged Chrome Steel",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 2,
        "discountPercent": 0,
        "pricePerUnit": 990
      },
      {
        "minQty": 3,
        "discountPercent": 10,
        "pricePerUnit": 890
      }
    ]
  },
  {
    "id": "prod-sticky-notes-pad",
    "slug": "neon-sticky-notes-pad-100-sheets",
    "name": "Neon Self-Adhesive Sticky Notes Pad (100 Sheets, 3x3 Inch)",
    "category": "office-stationery",
    "subCategory": "Sticky Notes",
    "price": 45,
    "originalPrice": 55,
    "rating": 4.8,
    "reviewCount": 280,
    "stock": 110,
    "isBestseller": true,
    "isEcoFriendly": true,
    "sku": "STICKY-NOTE-100",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Vibrant neon yellow/pink repositionable sticky notes for reminders, desk flags, and book annotations.",
    "description": "These self-adhesive memo pads feature clean-peel adhesive that sticks firmly to computer monitors, books, whiteboards, and files without leaving sticky residue.",
    "highlights": [
      "100 sheets per pad (3 x 3 inches)",
      "High-contrast neon colors for instant visibility",
      "Removable adhesive allowing multiple repositioning without residue"
    ],
    "specifications": {
      "Brand": "Instant Stationery",
      "Sheets": "100 Sheets",
      "Size": "76 x 76 mm (3 x 3 in)",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 45
      },
      {
        "minQty": 5,
        "discountPercent": 15,
        "pricePerUnit": 38
      }
    ]
  },
  {
    "id": "prod-cd-marker",
    "slug": "luxor-doms-cd-dvd-marker",
    "name": "Luxor / Doms CD/DVD OHP Fine Tip Marker (1 Piece)",
    "category": "markers-writing",
    "subCategory": "CD/DVD Markers",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 390,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "MARK-CD-DOMS",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Waterproof fine point marker for plastic, glass, optical discs, metal, and transparency sheets.",
    "description": "Luxor / Doms Fine Tip CD Marker is engineered with specialized quick-drying alcohol-based ink that writes smoothly on non-porous surfaces without smudging or fading.",
    "highlights": [
      "Ultra-fine durable bullet tip for precise labeling",
      "Waterproof, smudge-proof, and fade-resistant formula",
      "Writes effortlessly on CDs, DVDs, plastics, cables, and glassware"
    ],
    "specifications": {
      "Brand": "Luxor / Doms",
      "Tip Size": "0.8mm Fine Tip",
      "Ink Type": "Waterproof Alcohol Ink",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 10,
        "discountPercent": 20,
        "pricePerUnit": 8
      }
    ]
  },
  {
    "id": "prod-perm-marker",
    "slug": "luxor-doms-permanent-marker",
    "name": "Luxor / Doms Waterproof Permanent Marker (1 Piece)",
    "category": "markers-writing",
    "subCategory": "Permanent Markers",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 450,
    "stock": 220,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "MARK-PERM-DOMS",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Heavy-duty waterproof permanent marker for shipping cartons, metal, wood, plastic, and stone.",
    "description": "Delivering deep indelible black/blue ink, this industrial-strength permanent marker withstands sun exposure, moisture, and rough handling across warehouses and classrooms.",
    "highlights": [
      "Bold acrylic bullet tip that maintains shape under pressure",
      "Instant dry indelible ink that resists water and sunlight",
      "High ink reservoir for thousands of meters of writing"
    ],
    "specifications": {
      "Brand": "Luxor / Doms",
      "Tip": "Acrylic Bullet Tip (2.0mm)",
      "Ink": "Permanent Waterproof",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 10,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-wb-marker",
    "slug": "luxor-doms-whiteboard-marker",
    "name": "Luxor / Doms Whiteboard Marker (Blue, Black, Red, Green)",
    "category": "markers-writing",
    "subCategory": "Whiteboard Markers",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 520,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "MARK-WB-DOMS-4CLR",
    "images": [
      "/images/products/office-supplies.jpg",
      "/images/products/copier-paper.jpg"
    ],
    "shortDescription": "Low-odor, easily dry-wipeable whiteboard marker with durable bullet tip for coaching & presentations.",
    "description": "Engineered specifically for coaching institutions, schools, and corporate boardrooms, Luxor / Doms whiteboard markers provide bold visibility with effortless residue-free dry erasing.",
    "highlights": [
      "Available in 4 vibrant colors: Blue, Black, Red, Green",
      "Wipes completely clean with dry duster without ghosting",
      "Non-toxic low-odor Japanese formulation"
    ],
    "specifications": {
      "Brand": "Luxor / Doms",
      "Ink Type": "Low Odor Dry Erase",
      "Colors": "Blue, Black, Red, Green",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 10,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ],
    "colors": [
      {
        "name": "Blue",
        "hex": "#2563eb"
      },
      {
        "name": "Black",
        "hex": "#111827"
      },
      {
        "name": "Red",
        "hex": "#dc2626"
      },
      {
        "name": "Green",
        "hex": "#16a34a"
      }
    ]
  },
  {
    "id": "prod-mayank-jumbo-80",
    "slug": "mayank-jumbo-register-80-pages",
    "name": "Mayank Jumbo Register (80 Pages Hardbound)",
    "category": "registers-notebooks",
    "subCategory": "Jumbo 80 PG",
    "price": 59,
    "originalPrice": 59,
    "rating": 4.8,
    "reviewCount": 160,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "MAYANK-JUMBO-80",
    "images": [
      "/images/products/mayank-jumbo-register.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Sturdy hardbound jumbo accounting and ledger register with 80 high-GSM ruled pages.",
    "description": "Mayank Jumbo 80 Page Register is constructed with heavy cardboard binding, premium spine cloth reinforcement, and ultra-smooth ruled paper for daily entry and records.",
    "highlights": [
      "80 crisp, ledger-ruled pages with margin guides",
      "Rigid hardbound cover with durable spine reinforcement",
      "Paper absorbs ink smoothly with zero ink bleed"
    ],
    "specifications": {
      "Brand": "Mayank",
      "Pages": "80 Pages",
      "Binding": "Hardbound Hard Cover with Cloth Spine",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 59
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 53
      }
    ]
  },
  {
    "id": "prod-mayank-jumbo-170",
    "slug": "mayank-jumbo-register-170-pages",
    "name": "Mayank Jumbo Register (170 Pages Hardbound)",
    "category": "registers-notebooks",
    "subCategory": "Jumbo 170 PG",
    "price": 80,
    "originalPrice": 80,
    "rating": 4.8,
    "reviewCount": 190,
    "stock": 130,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "MAYANK-JUMBO-170",
    "images": [
      "/images/products/mayank-jumbo-register.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "170 pages hardbound ledger register for office accounts, inventory logs, and school records.",
    "description": "The 170-page Mayank Jumbo Register provides substantial capacity for monthly accounting logs, store inventory registers, and institutional student records.",
    "highlights": [
      "170 durable ruled pages with clear line hierarchy",
      "Heavy card outer bound for archival longevity",
      "Flat-opening binding for convenient writing across the page"
    ],
    "specifications": {
      "Brand": "Mayank",
      "Pages": "170 Pages",
      "Binding": "Hardbound Cloth Spine",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 80
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 72
      }
    ]
  },
  {
    "id": "prod-mayank-jumbo-240",
    "slug": "mayank-jumbo-register-240-pages",
    "name": "Mayank Jumbo Register (240 Pages Hardbound)",
    "category": "registers-notebooks",
    "subCategory": "Jumbo 240 PG",
    "price": 110,
    "originalPrice": 110,
    "rating": 4.9,
    "reviewCount": 140,
    "stock": 100,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "MAYANK-JUMBO-240",
    "images": [
      "/images/products/mayank-jumbo-register.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "High-capacity 240 pages master hardbound register for comprehensive business and financial records.",
    "description": "Mayank Jumbo 240-page register is built for multi-month financial book-keeping, factory attendance logs, and school registers.",
    "highlights": [
      "240 thick ledger pages",
      "Heavy duty reinforced hard binding",
      "Bleed-proof paper suitable for fountain and gel pens"
    ],
    "specifications": {
      "Brand": "Mayank",
      "Pages": "240 Pages",
      "Binding": "Hardbound",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 110
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 99
      }
    ]
  },
  {
    "id": "prod-mayank-jumbo-300",
    "slug": "mayank-jumbo-register-300-pages",
    "name": "Mayank Jumbo Register (300 Pages Master Ledger)",
    "category": "registers-notebooks",
    "subCategory": "Jumbo 300 PG",
    "price": 159,
    "originalPrice": 159,
    "rating": 4.9,
    "reviewCount": 175,
    "stock": 85,
    "isBestseller": true,
    "isEcoFriendly": false,
    "sku": "MAYANK-JUMBO-300",
    "images": [
      "/images/products/mayank-jumbo-register.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Flagship 300 pages master volume accounting register for annual business financial ledgers.",
    "description": "Mayank Jumbo 300 Page Ledger Register is the ultimate accounting volume for yearly financial auditing, factory logs, institutional records, and heavy-volume registers.",
    "highlights": [
      "Massive 300-page capacity for complete annual records",
      "Reinforced heavy binder board and spine binding",
      "Archival quality ledger ruling"
    ],
    "specifications": {
      "Brand": "Mayank",
      "Pages": "300 Pages",
      "Binding": "Heavy Reinforced Hardbound",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 159
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 143
      }
    ]
  },
  {
    "id": "prod-mayank-king-size",
    "slug": "mayank-deluxe-king-size-register",
    "name": "Mayank Deluxe King Size Long Format Register",
    "category": "registers-notebooks",
    "subCategory": "King Size Register",
    "price": 130,
    "originalPrice": 145,
    "rating": 4.8,
    "reviewCount": 110,
    "stock": 70,
    "isBestseller": false,
    "isEcoFriendly": false,
    "sku": "MAYANK-KING-SIZE",
    "images": [
      "/images/products/mayank-jumbo-register.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Extra-large long format folio register for school attendance, hospital logs, and showroom entries.",
    "description": "Mayank King Size Register offers an expanded long folio layout with wide columns, perfect for visitor logs, attendance tracking, and multi-column dispatch record-keeping.",
    "highlights": [
      "Extra wide folio king-size layout",
      "Hardbound cover protecting records against dust and wear",
      "High-grade white ledger paper"
    ],
    "specifications": {
      "Brand": "Mayank",
      "Format": "King Size Long Folio",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 130
      },
      {
        "minQty": 5,
        "discountPercent": 10,
        "pricePerUnit": 117
      }
    ]
  },
  {
    "id": "prod-fevicol-mr-general-purpose-adhesive-10g-squeezy-bottle-3",
    "slug": "fevicol-mr-general-purpose-adhesive-10g-squeezy-bottle-3",
    "name": "Fevicol MR General Purpose Adhesive (10g Squeezy Bottle)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 5,
    "originalPrice": 5,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-5",
    "images": [
      "/images/products/fevicol-mr.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Fevicol MR all-purpose white craft and paper adhesive (10g Squeezy Bottle) by Pidilite.",
    "description": "Fevicol MR is India's leading non-staining craft adhesive for bonding paper, cardboard, thermocol, fabrics, and craft embellishments with superior initial tack and bond strength.",
    "highlights": [
      "Ready-to-use synthetic white adhesive formula",
      "Non-staining, transparent drying for clean hobby & office work",
      "Non-toxic formulation safe for children and school projects",
      "Easy squeezy nozzle for spill-free precision application"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Product Type": "White Craft Adhesive",
      "MRP": "₹5",
      "Packaging": "Ergonomic Squeezy Bottle / Jar",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 5
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 4.5
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 4
      }
    ]
  },
  {
    "id": "prod-fevicol-mr-general-purpose-adhesive-22-5g-squeezy-bottle-3",
    "slug": "fevicol-mr-general-purpose-adhesive-22-5g-squeezy-bottle-3",
    "name": "Fevicol MR General Purpose Adhesive (22.5g Squeezy Bottle)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-10",
    "images": [
      "/images/products/fevicol-mr.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Fevicol MR all-purpose white craft and paper adhesive (22.5g Squeezy Bottle) by Pidilite.",
    "description": "Fevicol MR is India's leading non-staining craft adhesive for bonding paper, cardboard, thermocol, fabrics, and craft embellishments with superior initial tack and bond strength.",
    "highlights": [
      "Ready-to-use synthetic white adhesive formula",
      "Non-staining, transparent drying for clean hobby & office work",
      "Non-toxic formulation safe for children and school projects",
      "Easy squeezy nozzle for spill-free precision application"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Product Type": "White Craft Adhesive",
      "MRP": "₹10",
      "Packaging": "Ergonomic Squeezy Bottle / Jar",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 9
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 8
      }
    ]
  },
  {
    "id": "prod-fevicol-mr-general-purpose-adhesive-50g-bottle-3",
    "slug": "fevicol-mr-general-purpose-adhesive-50g-bottle-3",
    "name": "Fevicol MR General Purpose Adhesive (50g Bottle)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-25",
    "images": [
      "/images/products/fevicol-mr.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Fevicol MR all-purpose white craft and paper adhesive (50g Bottle) by Pidilite.",
    "description": "Fevicol MR is India's leading non-staining craft adhesive for bonding paper, cardboard, thermocol, fabrics, and craft embellishments with superior initial tack and bond strength.",
    "highlights": [
      "Ready-to-use synthetic white adhesive formula",
      "Non-staining, transparent drying for clean hobby & office work",
      "Non-toxic formulation safe for children and school projects",
      "Easy squeezy nozzle for spill-free precision application"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Product Type": "White Craft Adhesive",
      "MRP": "₹25",
      "Packaging": "Ergonomic Squeezy Bottle / Jar",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 22.5
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 20
      }
    ]
  },
  {
    "id": "prod-fevicol-mr-general-purpose-adhesive-100g-bottle-3",
    "slug": "fevicol-mr-general-purpose-adhesive-100g-bottle-3",
    "name": "Fevicol MR General Purpose Adhesive (100g Bottle)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 60,
    "originalPrice": 60,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-60",
    "images": [
      "/images/products/fevicol-mr.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Fevicol MR all-purpose white craft and paper adhesive (100g Bottle) by Pidilite.",
    "description": "Fevicol MR is India's leading non-staining craft adhesive for bonding paper, cardboard, thermocol, fabrics, and craft embellishments with superior initial tack and bond strength.",
    "highlights": [
      "Ready-to-use synthetic white adhesive formula",
      "Non-staining, transparent drying for clean hobby & office work",
      "Non-toxic formulation safe for children and school projects",
      "Easy squeezy nozzle for spill-free precision application"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Product Type": "White Craft Adhesive",
      "MRP": "₹60",
      "Packaging": "Ergonomic Squeezy Bottle / Jar",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 60
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 54
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 48
      }
    ]
  },
  {
    "id": "prod-fevicol-mr-general-purpose-adhesive-200g-jar-3",
    "slug": "fevicol-mr-general-purpose-adhesive-200g-jar-3",
    "name": "Fevicol MR General Purpose Adhesive (200g Jar)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 100,
    "originalPrice": 100,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-100",
    "images": [
      "/images/products/fevicol-mr.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Fevicol MR all-purpose white craft and paper adhesive (200g Jar) by Pidilite.",
    "description": "Fevicol MR is India's leading non-staining craft adhesive for bonding paper, cardboard, thermocol, fabrics, and craft embellishments with superior initial tack and bond strength.",
    "highlights": [
      "Ready-to-use synthetic white adhesive formula",
      "Non-staining, transparent drying for clean hobby & office work",
      "Non-toxic formulation safe for children and school projects",
      "Easy squeezy nozzle for spill-free precision application"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Product Type": "White Craft Adhesive",
      "MRP": "₹100",
      "Packaging": "Ergonomic Squeezy Bottle / Jar",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 100
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 90
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 80
      }
    ]
  },
  {
    "id": "prod-fevicol-mr-general-purpose-adhesive-500g-dispenser-jar-3",
    "slug": "fevicol-mr-general-purpose-adhesive-500g-dispenser-jar-3",
    "name": "Fevicol MR General Purpose Adhesive (500g Dispenser Jar)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 200,
    "originalPrice": 200,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-200",
    "images": [
      "/images/products/fevicol-mr.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Fevicol MR all-purpose white craft and paper adhesive (500g Dispenser Jar) by Pidilite.",
    "description": "Fevicol MR is India's leading non-staining craft adhesive for bonding paper, cardboard, thermocol, fabrics, and craft embellishments with superior initial tack and bond strength.",
    "highlights": [
      "Ready-to-use synthetic white adhesive formula",
      "Non-staining, transparent drying for clean hobby & office work",
      "Non-toxic formulation safe for children and school projects",
      "Easy squeezy nozzle for spill-free precision application"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Product Type": "White Craft Adhesive",
      "MRP": "₹200",
      "Packaging": "Ergonomic Squeezy Bottle / Jar",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 200
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 180
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 160
      }
    ]
  },
  {
    "id": "prod-pidilite-all-fix-clear-synthetic-adhesive-50ml-3",
    "slug": "pidilite-all-fix-clear-synthetic-adhesive-50ml-3",
    "name": "Pidilite All Fix Clear Synthetic Adhesive (50ml)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-ALLFIX-50",
    "images": [
      "/images/products/pidilite-allfix.jpg",
      "/images/products/fevicol-mr.jpg"
    ],
    "shortDescription": "Pidilite All Fix all-purpose clear transparent contact adhesive tube.",
    "description": "All Fix is an all-purpose transparent adhesive that leaves no residue. Ideal for joining glass, ceramics, wood, leather, metal, and hard plastics.",
    "highlights": [
      "Crystal clear formula with zero shadow marks",
      "Water-resistant and flexible cured joint",
      "High temperature resistance for home and office repairs",
      "Easy control squeeze tube"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Type": "Clear Synthetic Adhesive",
      "Volume": "50 ml",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 45
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 40
      }
    ]
  },
  {
    "id": "prod-pidilite-bondfix-multipurpose-adhesive-20ml-3",
    "slug": "pidilite-bondfix-multipurpose-adhesive-20ml-3",
    "name": "Pidilite Bondfix Multipurpose Adhesive (20ml)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-BONDFIX-20",
    "images": [
      "/images/products/pidilite-allfix.jpg",
      "/images/products/fevicol-mr.jpg"
    ],
    "shortDescription": "Pidilite Bondfix high-strength solvent-based multipurpose adhesive (20ml).",
    "description": "Pidilite Bondfix is a quick-setting solvent-based contact adhesive formulated for quick, permanent joints in stationery, wood craft, leather, and plastics.",
    "highlights": [
      "Fast drying contact adhesive formula",
      "Water and moisture resistant bonding",
      "Suitable for leather, rubber, wood, and craft materials",
      "Convenient applicator tube"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Type": "Multipurpose Adhesive",
      "Volume": "20ml",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 18
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 16
      }
    ]
  },
  {
    "id": "prod-pidilite-bondfix-multipurpose-adhesive-30ml-3",
    "slug": "pidilite-bondfix-multipurpose-adhesive-30ml-3",
    "name": "Pidilite Bondfix Multipurpose Adhesive (30ml)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 30,
    "originalPrice": 30,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-BONDFIX-30",
    "images": [
      "/images/products/pidilite-allfix.jpg",
      "/images/products/fevicol-mr.jpg"
    ],
    "shortDescription": "Pidilite Bondfix high-strength solvent-based multipurpose adhesive (30ml).",
    "description": "Pidilite Bondfix is a quick-setting solvent-based contact adhesive formulated for quick, permanent joints in stationery, wood craft, leather, and plastics.",
    "highlights": [
      "Fast drying contact adhesive formula",
      "Water and moisture resistant bonding",
      "Suitable for leather, rubber, wood, and craft materials",
      "Convenient applicator tube"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Type": "Multipurpose Adhesive",
      "Volume": "30ml",
      "MRP": "₹30",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 30
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 27
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 24
      }
    ]
  },
  {
    "id": "prod-camel-synthetic-office-gum-30ml-3",
    "slug": "camel-synthetic-office-gum-30ml-3",
    "name": "Camel Synthetic Office Gum (30ml)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 30,
    "originalPrice": 30,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CAMEL-GUM-30",
    "images": [
      "/images/products/camel-office-gum.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Camel non-toxic transparent paper gum adhesive (30ml) for office envelopes & documents.",
    "description": "Camel Office Gum is a classic transparent adhesive crafted for smooth, ripple-free gluing of envelopes, paper documents, labels, and receipts without page wrinkling.",
    "highlights": [
      "Ripple-free smooth paper application",
      "Pure synthetic non-sour gum formulation",
      "Ergonomic bottle with built-in spread applicator",
      "100% non-toxic and skin friendly"
    ],
    "specifications": {
      "Brand": "Camel / Camlin",
      "Type": "Synthetic Office Gum",
      "Volume": "30ml",
      "MRP": "₹30",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 30
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 27
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 24
      }
    ]
  },
  {
    "id": "prod-camel-synthetic-office-gum-50ml-3",
    "slug": "camel-synthetic-office-gum-50ml-3",
    "name": "Camel Synthetic Office Gum (50ml)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CAMEL-GUM-50",
    "images": [
      "/images/products/camel-office-gum.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Camel non-toxic transparent paper gum adhesive (50ml) for office envelopes & documents.",
    "description": "Camel Office Gum is a classic transparent adhesive crafted for smooth, ripple-free gluing of envelopes, paper documents, labels, and receipts without page wrinkling.",
    "highlights": [
      "Ripple-free smooth paper application",
      "Pure synthetic non-sour gum formulation",
      "Ergonomic bottle with built-in spread applicator",
      "100% non-toxic and skin friendly"
    ],
    "specifications": {
      "Brand": "Camel / Camlin",
      "Type": "Synthetic Office Gum",
      "Volume": "50ml",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 45
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 40
      }
    ]
  },
  {
    "id": "prod-camel-synthetic-office-gum-75ml-dispenser-3",
    "slug": "camel-synthetic-office-gum-75ml-dispenser-3",
    "name": "Camel Synthetic Office Gum (75ml Dispenser)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 75,
    "originalPrice": 75,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CAMEL-GUM-75",
    "images": [
      "/images/products/camel-office-gum.jpg",
      "/images/products/office-supplies.jpg"
    ],
    "shortDescription": "Camel non-toxic transparent paper gum adhesive (75ml Dispenser) for office envelopes & documents.",
    "description": "Camel Office Gum is a classic transparent adhesive crafted for smooth, ripple-free gluing of envelopes, paper documents, labels, and receipts without page wrinkling.",
    "highlights": [
      "Ripple-free smooth paper application",
      "Pure synthetic non-sour gum formulation",
      "Ergonomic bottle with built-in spread applicator",
      "100% non-toxic and skin friendly"
    ],
    "specifications": {
      "Brand": "Camel / Camlin",
      "Type": "Synthetic Office Gum",
      "Volume": "75ml Dispenser",
      "MRP": "₹75",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 75
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 67.5
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 60
      }
    ]
  },
  {
    "id": "prod-fevikwik-instant-adhesive-0-5g-3",
    "slug": "fevikwik-instant-adhesive-0-5g-3",
    "name": "Fevikwik Instant Adhesive (0.5g)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 5,
    "originalPrice": 5,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-KWIK-5",
    "images": [
      "/images/products/fevikwik-tube.jpg",
      "/images/products/fevicol-mr.jpg"
    ],
    "shortDescription": "Pidilite Fevikwik instant bonding adhesive (0.5g) for home, office, and quick fixes.",
    "description": "One drop is all it takes! Fevikwik instantly fixes broken ceramics, plastics, metals, and rubber accessories in just 5 seconds.",
    "highlights": [
      "Bonds instantly in 5 seconds",
      "High shear strength cyanoacrylate formula",
      "Hermetically sealed single-use nozzle",
      "Multi-surface compatibility"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Formula": "Instant Super Glue Cyanoacrylate",
      "MRP": "₹5",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 5
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 4.5
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 4
      }
    ]
  },
  {
    "id": "prod-fevikwik-instant-adhesive-1g-single-drop-tube-3",
    "slug": "fevikwik-instant-adhesive-1g-single-drop-tube-3",
    "name": "Fevikwik Instant Adhesive (1g Single Drop Tube)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-KWIK-10",
    "images": [
      "/images/products/fevikwik-tube.jpg",
      "/images/products/fevicol-mr.jpg"
    ],
    "shortDescription": "Pidilite Fevikwik instant bonding adhesive (1g Single Drop Tube) for home, office, and quick fixes.",
    "description": "One drop is all it takes! Fevikwik instantly fixes broken ceramics, plastics, metals, and rubber accessories in just 5 seconds.",
    "highlights": [
      "Bonds instantly in 5 seconds",
      "High shear strength cyanoacrylate formula",
      "Hermetically sealed single-use nozzle",
      "Multi-surface compatibility"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Formula": "Instant Super Glue Cyanoacrylate",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 9
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 8
      }
    ]
  },
  {
    "id": "prod-fevikwik-gel-instant-adhesive-tube-3g-3",
    "slug": "fevikwik-gel-instant-adhesive-tube-3g-3",
    "name": "Fevikwik Gel Instant Adhesive Tube (3g)",
    "category": "office-stationery",
    "subCategory": "Adhesives & Glues",
    "price": 15,
    "originalPrice": 15,
    "rating": 4.8,
    "reviewCount": 140,
    "stock": 150,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PID-FEV-GEL-15",
    "images": [
      "/images/products/fevikwik-tube.jpg",
      "/images/products/fevicol-mr.jpg"
    ],
    "shortDescription": "Pidilite Fevikwik Gel non-drip instant adhesive for porous and vertical surfaces.",
    "description": "Fevikwik Gel provides high-viscosity instant cyanoacrylate bonding that won't run or drip. Bonds metals, rubber, plastics, and wood in seconds.",
    "highlights": [
      "Non-drip gel consistency for vertical application",
      "Instant bond within 5 seconds",
      "Precision nozzle tip for micro-repairs",
      "High tensile bond strength"
    ],
    "specifications": {
      "Brand": "Pidilite",
      "Formula": "Instant Cyanoacrylate Gel",
      "MRP": "₹15",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 9,
        "discountPercent": 0,
        "pricePerUnit": 15
      },
      {
        "minQty": 10,
        "maxQty": 49,
        "discountPercent": 10,
        "pricePerUnit": 13.5
      },
      {
        "minQty": 50,
        "discountPercent": 20,
        "pricePerUnit": 12
      }
    ]
  },
  {
    "id": "prod-linc-pentonic-ball-pen-pack-of-10-3",
    "slug": "linc-pentonic-ball-pen-pack-of-10-3",
    "name": "LINC PENTONIC Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-PENTON-BP",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "LINC PENTONIC Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The LINC PENTONIC Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-linc-glycer-ball-pen-pack-of-10-3",
    "slug": "linc-glycer-ball-pen-pack-of-10-3",
    "name": "LINC GLYCER Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-GLYCER-BP",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC GLYCER Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The LINC GLYCER Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-linc-clr-ball-pen-pack-of-10-3",
    "slug": "linc-clr-ball-pen-pack-of-10-3",
    "name": "LINC CLR Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-CLR-BP",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC CLR Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The LINC CLR Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-linc-brt-ball-pen-pack-of-10-3",
    "slug": "linc-brt-ball-pen-pack-of-10-3",
    "name": "LINC Brt Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-BRT-BP",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC Brt Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The LINC Brt Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-hauser-xo-ball-pen-pack-of-10-3",
    "slug": "hauser-xo-ball-pen-pack-of-10-3",
    "name": "HAUSER XO Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 20,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "HAUS-XO-BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "HAUSER XO Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The HAUSER XO Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "HAUSER",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-hauser-autoclick-ball-pen-pack-of-10-3",
    "slug": "hauser-autoclick-ball-pen-pack-of-10-3",
    "name": "HAUSER AUTOCLICK Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "HAUS-AUTOCL-BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "HAUSER AUTOCLICK Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The HAUSER AUTOCLICK Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "HAUSER",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-reynolds-045-classic-ball-pen-pack-of-10-3",
    "slug": "reynolds-045-classic-ball-pen-pack-of-10-3",
    "name": "REYNOLDS 045 Classic Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "REYN-045-CL-BP",
    "images": [
      "/images/products/reynolds-045.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "REYNOLDS 045 Classic Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The REYNOLDS 045 Classic Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "REYNOLDS",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-classmate-octane-ball-pen-pack-of-10-3",
    "slug": "classmate-octane-ball-pen-pack-of-10-3",
    "name": "Classmate Octane Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CLAS-OCTANE-BP",
    "images": [
      "/images/products/classmate-octane.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "Classmate Octane Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The Classmate Octane Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "Classmate",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-classmate-spin-ball-pen-pack-of-10-3",
    "slug": "classmate-spin-ball-pen-pack-of-10-3",
    "name": "Classmate Spin Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CLAS-SPIN-BP",
    "images": [
      "/images/products/classmate-octane.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "Classmate Spin Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The Classmate Spin Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "Classmate",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-classmate-hook-ball-pen-pack-of-10-3",
    "slug": "classmate-hook-ball-pen-pack-of-10-3",
    "name": "Classmate Hook Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CLAS-HOOK-BP",
    "images": [
      "/images/products/classmate-octane.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "Classmate Hook Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The Classmate Hook Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "Classmate",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-flair-click-ball-pen-pack-of-10-3",
    "slug": "flair-click-ball-pen-pack-of-10-3",
    "name": "FLair Click Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-CLICK-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair Click Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The FLair Click Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-flair-writo-meter-ball-pen-pack-of-10-3",
    "slug": "flair-writo-meter-ball-pen-pack-of-10-3",
    "name": "FLair Writo-meter Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-WRITO--BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair Writo-meter Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The FLair Writo-meter Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-flair-srx-ball-pen-pack-of-10-3",
    "slug": "flair-srx-ball-pen-pack-of-10-3",
    "name": "FLair SRX Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-SRX-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair SRX Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The FLair SRX Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-flair-yolo-ball-pen-pack-of-10-3",
    "slug": "flair-yolo-ball-pen-pack-of-10-3",
    "name": "FLair YOLO Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-YOLO-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair YOLO Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The FLair YOLO Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-rorito-fiber-point-ball-pen-pack-of-10-3",
    "slug": "rorito-fiber-point-ball-pen-pack-of-10-3",
    "name": "RORITO Fiber Point Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "RORI-FIBER--BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "RORITO Fiber Point Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The RORITO Fiber Point Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "RORITO",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-montex-mega-top-ball-pen-pack-of-10-3",
    "slug": "montex-mega-top-ball-pen-pack-of-10-3",
    "name": "MONtex Mega Top Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "MONT-MEGA-T-BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "MONtex Mega Top Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The MONtex Mega Top Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "MONtex",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-luxor-finewriter-ball-pen-pack-of-10-3",
    "slug": "luxor-finewriter-ball-pen-pack-of-10-3",
    "name": "LUXOR Finewriter Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LUXO-FINEWR-BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "LUXOR Finewriter Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The LUXOR Finewriter Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "LUXOR",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-luxor-uniflow-ball-pen-pack-of-10-3",
    "slug": "luxor-uniflow-ball-pen-pack-of-10-3",
    "name": "LUXOR Uniflow Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LUXO-UNIFLO-BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "LUXOR Uniflow Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The LUXOR Uniflow Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "LUXOR",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-ultron-2x-ball-pen-pack-of-10-3",
    "slug": "unomax-ultron-2x-ball-pen-pack-of-10-3",
    "name": "UNOMAX Ultron 2X Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-ULTRON-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX Ultron 2X Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The UNOMAX Ultron 2X Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-ultron-neo-2x-ball-pen-pack-of-10-3",
    "slug": "unomax-ultron-neo-2x-ball-pen-pack-of-10-3",
    "name": "UNOMAX ULTRON NEO 2X Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-ULTRON-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX ULTRON NEO 2X Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The UNOMAX ULTRON NEO 2X Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-boldtron-ball-pen-pack-of-10-3",
    "slug": "unomax-boldtron-ball-pen-pack-of-10-3",
    "name": "UNOMAX Boldtron Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-BOLDTR-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX Boldtron Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The UNOMAX Boldtron Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-i-ball-2x-ball-pen-pack-of-10-3",
    "slug": "unomax-i-ball-2x-ball-pen-pack-of-10-3",
    "name": "UNOMAX i-Ball 2X Ball Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-I-BALL-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX i-Ball 2X Ball Pen (Pack of 10) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The UNOMAX i-Ball 2X Ball Pen (Pack of 10) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 10 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "10 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-add-gel-classic-ball-pen-1-piece-3",
    "slug": "add-gel-classic-ball-pen-1-piece-3",
    "name": "ADD GEL Classic Ball Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "ADD--CLASSI-BP",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "ADD GEL Classic Ball Pen (1 Piece) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The ADD GEL Classic Ball Pen (1 Piece) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 1 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "ADD GEL",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "1 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-uniball-jetsreeam-ball-pen-1-piece-3",
    "slug": "uniball-jetsreeam-ball-pen-1-piece-3",
    "name": "UNIBALL JETSREEAM Ball Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Ball Pens",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 185,
    "stock": 200,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNIB-JETSRE-BP",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "UNIBALL JETSREEAM Ball Pen (1 Piece) engineered for smooth, smudge-free writing with durable tungsten carbide tip.",
    "description": "The UNIBALL JETSREEAM Ball Pen (1 Piece) delivers dependable, fluid ink flow with an ergonomic grip designed for extended exams, office documentation, and daily classroom notes.",
    "highlights": [
      "Low-viscosity oil-based ink for ultra-smooth gliding",
      "Precision Swiss carbide ball tip prevents blotching and skips",
      "Comfort-molded barrel provides anti-fatigue finger placement",
      "Economical pack of 1 units ideal for schools and offices"
    ],
    "specifications": {
      "Brand": "UNIBALL",
      "Pen Type": "Ballpoint Pen",
      "Tip Size": "0.7mm Fine / 1.0mm Medium",
      "Ink Color": "Blue",
      "Pack Size": "1 Pieces",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 42.5
      }
    ]
  },
  {
    "id": "prod-linc-ocean-gel-pack-of-10-3",
    "slug": "linc-ocean-gel-pack-of-10-3",
    "name": "LINC Ocean Gel (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-OCEAN--GEL",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC Ocean Gel (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LINC Ocean Gel (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-linc-pentonic-gel-pack-of-10-3",
    "slug": "linc-pentonic-gel-pack-of-10-3",
    "name": "LINC Pentonic Gel (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-PENTON-GEL",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "LINC Pentonic Gel (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LINC Pentonic Gel (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-linc-glycer-gel-pack-of-10-3",
    "slug": "linc-glycer-gel-pack-of-10-3",
    "name": "LINC Glycer Gel (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-GLYCER-GEL",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC Glycer Gel (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LINC Glycer Gel (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-linc-evo-gel-1-piece-3",
    "slug": "linc-evo-gel-1-piece-3",
    "name": "LINC Evo gel (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 30,
    "originalPrice": 30,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-EVO-GE-GEL",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC Evo gel (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LINC Evo gel (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹30",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 30
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 27.6
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 25.5
      }
    ]
  },
  {
    "id": "prod-linc-grt-gel-pen-1-piece-3",
    "slug": "linc-grt-gel-pen-1-piece-3",
    "name": "LINC GRT Gel Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 40,
    "originalPrice": 40,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LINC-GRT-GEL",
    "images": [
      "/images/products/linc-pentonic-ball.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LINC GRT Gel Pen (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LINC GRT Gel Pen (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LINC",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹40",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 40
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 36.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 34
      }
    ]
  },
  {
    "id": "prod-hauser-xo-gel-pack-of-10-3",
    "slug": "hauser-xo-gel-pack-of-10-3",
    "name": "HAUSER Xo gel (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "HAUS-XO-GEL-GEL",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "HAUSER Xo gel (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the HAUSER Xo gel (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "HAUSER",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-hauser-jumbo-gel-1-piece-3",
    "slug": "hauser-jumbo-gel-1-piece-3",
    "name": "HAUSER JUMBO GEL (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "HAUS-JUMBO--GEL",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "HAUSER JUMBO GEL (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the HAUSER JUMBO GEL (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "HAUSER",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-hauser-click-gel-1-piece-3",
    "slug": "hauser-click-gel-1-piece-3",
    "name": "HAUSER CLICK GEL (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "HAUS-CLICK--GEL",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "HAUSER CLICK GEL (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the HAUSER CLICK GEL (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "HAUSER",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-classmate-octane-gel-pack-of-10-3",
    "slug": "classmate-octane-gel-pack-of-10-3",
    "name": "Classmate Octane Gel (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "CLAS-OCTANE-GEL",
    "images": [
      "/images/products/classmate-octane.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "Classmate Octane Gel (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the Classmate Octane Gel (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "Classmate",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-flair-writo-meter-gel-1-piece-3",
    "slug": "flair-writo-meter-gel-1-piece-3",
    "name": "FLair Writo-meter Gel (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-WRITO--GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair Writo-meter Gel (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the FLair Writo-meter Gel (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-flair-v2-gel-1-piece-3",
    "slug": "flair-v2-gel-1-piece-3",
    "name": "FLair V2 gel (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-V2-GEL-GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair V2 gel (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the FLair V2 gel (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹20",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-flair-glass-gel-pack-of-10-3",
    "slug": "flair-glass-gel-pack-of-10-3",
    "name": "FLair Glass gel (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "FLAI-GLASS--GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "FLair Glass gel (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the FLair Glass gel (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "FLair",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-montex-texta-gel-pack-of-10-3",
    "slug": "montex-texta-gel-pack-of-10-3",
    "name": "MONtex TEXTA GEL (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "MONT-TEXTA--GEL",
    "images": [
      "/images/products/pentel-energel.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "MONtex TEXTA GEL (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the MONtex TEXTA GEL (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "MONtex",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-luxor-gelone-pack-of-10-3",
    "slug": "luxor-gelone-pack-of-10-3",
    "name": "LUXOR GELONE (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LUXO-GELONE-GEL",
    "images": [
      "/images/products/pentel-energel.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LUXOR GELONE (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LUXOR GELONE (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LUXOR",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-luxor-fine-line-gel-pen-pack-of-10-3",
    "slug": "luxor-fine-line-gel-pen-pack-of-10-3",
    "name": "LUXOR FINE LINE Gel Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "LUXO-FINE-L-GEL",
    "images": [
      "/images/products/pentel-energel.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "LUXOR FINE LINE Gel Pen (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the LUXOR FINE LINE Gel Pen (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "LUXOR",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-geltron-pack-of-10-3",
    "slug": "unomax-geltron-pack-of-10-3",
    "name": "UNOMAX Geltron (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-GELTRO-GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX Geltron (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX Geltron (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-geltron-pop-pack-of-10-3",
    "slug": "unomax-geltron-pop-pack-of-10-3",
    "name": "UNOMAX GELTRON POP (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-GELTRO-GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX GELTRON POP (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX GELTRON POP (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-click-gel-pack-of-10-3",
    "slug": "unomax-click-gel-pack-of-10-3",
    "name": "UNOMAX CLICK & GEL (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-CLICK--GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX CLICK & GEL (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX CLICK & GEL (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-frostron-gel-pack-of-10-3",
    "slug": "unomax-frostron-gel-pack-of-10-3",
    "name": "UNOMAX FROSTRON GEL (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-FROSTR-GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX FROSTRON GEL (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX FROSTRON GEL (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-geltron-pearl-pack-of-10-3",
    "slug": "unomax-geltron-pearl-pack-of-10-3",
    "name": "UNOMAX Geltron Pearl (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-GELTRO-GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX Geltron Pearl (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX Geltron Pearl (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-candy-gel-pack-of-10-3",
    "slug": "unomax-candy-gel-pack-of-10-3",
    "name": "UNOMAX CANDY GEL (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-CANDY--GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX CANDY GEL (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX CANDY GEL (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-unomax-all-clear-gel-pen-pack-of-10-3",
    "slug": "unomax-all-clear-gel-pen-pack-of-10-3",
    "name": "UNOMAX All Clear Gel Pen (Pack of 10)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 10,
    "originalPrice": 10,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-ALL-CL-GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX All Clear Gel Pen (Pack of 10) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNOMAX All Clear Gel Pen (Pack of 10). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "10 Pieces",
      "MRP": "₹10",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 10
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 9.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 8.5
      }
    ]
  },
  {
    "id": "prod-pentel-energel-1-piece-3",
    "slug": "pentel-energel-1-piece-3",
    "name": "PENTEL ENERGEL (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 40,
    "originalPrice": 40,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PENT-ENERGE-GEL",
    "images": [
      "/images/products/pentel-energel.jpg",
      "/images/products/uniball-eye.jpg"
    ],
    "shortDescription": "PENTEL ENERGEL (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the PENTEL ENERGEL (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "PENTEL",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹40",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 40
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 36.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 34
      }
    ]
  },
  {
    "id": "prod-pentel-energel-click-1-piece-3",
    "slug": "pentel-energel-click-1-piece-3",
    "name": "PENTEL ENERGEL CLICK (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 45,
    "originalPrice": 45,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PENT-ENERGE-GEL",
    "images": [
      "/images/products/pentel-energel.jpg",
      "/images/products/uniball-eye.jpg"
    ],
    "shortDescription": "PENTEL ENERGEL CLICK (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the PENTEL ENERGEL CLICK (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "PENTEL",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹45",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 45
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 41.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 38.25
      }
    ]
  },
  {
    "id": "prod-pentel-bold-gel-pen-1-piece-3",
    "slug": "pentel-bold-gel-pen-1-piece-3",
    "name": "PENTEL BOLD Gel Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "PENT-BOLD-GEL",
    "images": [
      "/images/products/pentel-energel.jpg",
      "/images/products/uniball-eye.jpg"
    ],
    "shortDescription": "PENTEL BOLD Gel Pen (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the PENTEL BOLD Gel Pen (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "PENTEL",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 42.5
      }
    ]
  },
  {
    "id": "prod-uniball-click-gel-1-piece-3",
    "slug": "uniball-click-gel-1-piece-3",
    "name": "UNIBALL CLICK GEL (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Gel Pens",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 210,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNIB-CLICK--GEL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "UNIBALL CLICK GEL (1 Piece) with vibrant Japanese waterproof gel ink technology and instant quick-dry formula.",
    "description": "Experience bold, effortless handwriting with the UNIBALL CLICK GEL (1 Piece). Engineered with fast-drying water-resistant pigment gel ink that will not smudge or feather on standard notebook paper.",
    "highlights": [
      "Quick-drying Japanese formula prevents hand-smudge on fresh ink",
      "High color saturation for deep, high-contrast dark lines",
      "Precision rollerball needle tip delivers consistent line weight",
      "Refillable ink reservoir and durable ribbed finger grip"
    ],
    "specifications": {
      "Brand": "UNIBALL",
      "Pen Type": "Gel Ink Pen",
      "Tip Size": "0.5mm / 0.7mm Fine Needle",
      "Ink Type": "Waterproof Quick-Dry Pigment Gel",
      "Pack Size": "1 Pieces",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 42.5
      }
    ]
  },
  {
    "id": "prod-unomax-rolltek-liquid-ink-roller-pen-1-piece-3",
    "slug": "unomax-rolltek-liquid-ink-roller-pen-1-piece-3",
    "name": "UNOMAX ROLLTEK Liquid Ink Roller Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Roller Ball Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 320,
    "stock": 100,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNOM-ROLLTE-ROL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/hauser-xo-ball.jpg"
    ],
    "shortDescription": "UNOMAX ROLLTEK Liquid Ink Roller Pen (1 Piece) engineered with Uni-Flow liquid ink system for skip-free continuous writing.",
    "description": "The UNOMAX ROLLTEK Liquid Ink Roller Pen (1 Piece) features advanced liquid ink technology ensuring steady ink flow right down to the last drop. Micro-cushioned tip adapts to your writing angle for frictionless gliding.",
    "highlights": [
      "Advanced liquid ink regulator guarantees uninterrupted flow",
      "Super Ink pigment technology: fade-proof, water-resistant & tamper-proof",
      "Stainless steel tip withstands high writing pressure",
      "Ink level window lets you check remaining ink volume"
    ],
    "specifications": {
      "Brand": "UNOMAX",
      "Pen Type": "Liquid Ink Rollerball Pen",
      "Tip Size": "0.5mm Micro / 0.7mm Fine",
      "Ink Supply": "Direct Liquid Ink Reservoir",
      "Pack Size": "1 Piece",
      "MRP": "₹20",
      "Origin": "Japan / India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-hauser-float-liquid-ink-roller-pen-1-piece-3",
    "slug": "hauser-float-liquid-ink-roller-pen-1-piece-3",
    "name": "Hauser FLOAT Liquid Ink Roller Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Roller Ball Pens",
    "price": 20,
    "originalPrice": 20,
    "rating": 4.9,
    "reviewCount": 320,
    "stock": 100,
    "isBestseller": false,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "HAUS-FLOAT-ROL",
    "images": [
      "/images/products/hauser-xo-ball.jpg",
      "/images/products/linc-pentonic-ball.jpg"
    ],
    "shortDescription": "Hauser FLOAT Liquid Ink Roller Pen (1 Piece) engineered with Uni-Flow liquid ink system for skip-free continuous writing.",
    "description": "The Hauser FLOAT Liquid Ink Roller Pen (1 Piece) features advanced liquid ink technology ensuring steady ink flow right down to the last drop. Micro-cushioned tip adapts to your writing angle for frictionless gliding.",
    "highlights": [
      "Advanced liquid ink regulator guarantees uninterrupted flow",
      "Super Ink pigment technology: fade-proof, water-resistant & tamper-proof",
      "Stainless steel tip withstands high writing pressure",
      "Ink level window lets you check remaining ink volume"
    ],
    "specifications": {
      "Brand": "Hauser",
      "Pen Type": "Liquid Ink Rollerball Pen",
      "Tip Size": "0.5mm Micro / 0.7mm Fine",
      "Ink Supply": "Direct Liquid Ink Reservoir",
      "Pack Size": "1 Piece",
      "MRP": "₹20",
      "Origin": "Japan / India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 20
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 18.4
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 17
      }
    ]
  },
  {
    "id": "prod-uniball-eye-liquid-ink-roller-pen-1-piece-3",
    "slug": "uniball-eye-liquid-ink-roller-pen-1-piece-3",
    "name": "UNIBALL EYE Liquid Ink Roller Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Roller Ball Pens",
    "price": 80,
    "originalPrice": 80,
    "rating": 4.9,
    "reviewCount": 320,
    "stock": 100,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNIB-EYE-ROL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "UNIBALL EYE Liquid Ink Roller Pen (1 Piece) engineered with Uni-Flow liquid ink system for skip-free continuous writing.",
    "description": "The UNIBALL EYE Liquid Ink Roller Pen (1 Piece) features advanced liquid ink technology ensuring steady ink flow right down to the last drop. Micro-cushioned tip adapts to your writing angle for frictionless gliding.",
    "highlights": [
      "Advanced liquid ink regulator guarantees uninterrupted flow",
      "Super Ink pigment technology: fade-proof, water-resistant & tamper-proof",
      "Stainless steel tip withstands high writing pressure",
      "Ink level window lets you check remaining ink volume"
    ],
    "specifications": {
      "Brand": "UNIBALL",
      "Pen Type": "Liquid Ink Rollerball Pen",
      "Tip Size": "0.5mm Micro / 0.7mm Fine",
      "Ink Supply": "Direct Liquid Ink Reservoir",
      "Pack Size": "1 Piece",
      "MRP": "₹80",
      "Origin": "Japan / India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 80
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 73.6
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 68
      }
    ]
  },
  {
    "id": "prod-uniball-air-liquid-ink-roller-pen-1-piece-3",
    "slug": "uniball-air-liquid-ink-roller-pen-1-piece-3",
    "name": "UNIBALL AIR Liquid Ink Roller Pen (1 Piece)",
    "category": "pens-pencils",
    "subCategory": "Roller Ball Pens",
    "price": 100,
    "originalPrice": 100,
    "rating": 4.9,
    "reviewCount": 320,
    "stock": 100,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": false,
    "sku": "UNIB-AIR-ROL",
    "images": [
      "/images/products/uniball-eye.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "UNIBALL AIR Liquid Ink Roller Pen (1 Piece) engineered with Uni-Flow liquid ink system for skip-free continuous writing.",
    "description": "The UNIBALL AIR Liquid Ink Roller Pen (1 Piece) features advanced liquid ink technology ensuring steady ink flow right down to the last drop. Micro-cushioned tip adapts to your writing angle for frictionless gliding.",
    "highlights": [
      "Advanced liquid ink regulator guarantees uninterrupted flow",
      "Super Ink pigment technology: fade-proof, water-resistant & tamper-proof",
      "Stainless steel tip withstands high writing pressure",
      "Ink level window lets you check remaining ink volume"
    ],
    "specifications": {
      "Brand": "UNIBALL",
      "Pen Type": "Liquid Ink Rollerball Pen",
      "Tip Size": "0.5mm Micro / 0.7mm Fine",
      "Ink Supply": "Direct Liquid Ink Reservoir",
      "Pack Size": "1 Piece",
      "MRP": "₹100",
      "Origin": "Japan / India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 100
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 92
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 85
      }
    ]
  },
  {
    "id": "prod-parker-jotter-luxury-ball-pen-executive-gift-box-3",
    "slug": "parker-jotter-luxury-ball-pen-executive-gift-box-3",
    "name": "PARKER Jotter Luxury Ball Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 275,
    "originalPrice": 300,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PARK-JOTTER-BAL",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "PARKER Jotter Luxury Ball Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the PARKER Jotter Luxury Ball Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "PARKER",
      "Pen Type": "Executive Ball Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹300",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 275
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 255.75
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 242
      }
    ]
  },
  {
    "id": "prod-parker-vector-luxury-ball-pen-executive-gift-box-3",
    "slug": "parker-vector-luxury-ball-pen-executive-gift-box-3",
    "name": "PARKER Vector Luxury Ball Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 315,
    "originalPrice": 350,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PARK-VECTOR-BAL",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "PARKER Vector Luxury Ball Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the PARKER Vector Luxury Ball Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "PARKER",
      "Pen Type": "Executive Ball Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹350",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 315
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 292.95
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 277.2
      }
    ]
  },
  {
    "id": "prod-parker-classic-luxury-ball-pen-executive-gift-box-3",
    "slug": "parker-classic-luxury-ball-pen-executive-gift-box-3",
    "name": "PARKER Classic Luxury Ball Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 360,
    "originalPrice": 400,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PARK-CLASSI-BAL",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "PARKER Classic Luxury Ball Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the PARKER Classic Luxury Ball Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "PARKER",
      "Pen Type": "Executive Ball Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹400",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 360
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 334.8
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 316.8
      }
    ]
  },
  {
    "id": "prod-pierre-cardin-golden-eye-luxury-ball-pen-executive-gift-box-3",
    "slug": "pierre-cardin-golden-eye-luxury-ball-pen-executive-gift-box-3",
    "name": "Pierre Cardin Golden Eye Luxury Ball Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 400,
    "originalPrice": 450,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PIER-GOLDEN-BAL",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "Pierre Cardin Golden Eye Luxury Ball Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the Pierre Cardin Golden Eye Luxury Ball Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "Pierre Cardin",
      "Pen Type": "Executive Ball Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹450",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 400
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 372
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 352
      }
    ]
  },
  {
    "id": "prod-pierre-cardin-golden-eye-luxury-fountain-pen-executive-gift-box-3",
    "slug": "pierre-cardin-golden-eye-luxury-fountain-pen-executive-gift-box-3",
    "name": "Pierre Cardin Golden Eye Luxury Fountain Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 499,
    "originalPrice": 550,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PIER-GOLDEN-FOU",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "Pierre Cardin Golden Eye Luxury Fountain Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the Pierre Cardin Golden Eye Luxury Fountain Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "Pierre Cardin",
      "Pen Type": "Executive Fountain Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹550",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 499
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 464.07
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 439.12
      }
    ]
  },
  {
    "id": "prod-pierre-cardin-kriss-gold-luxury-ball-pen-executive-gift-box-3",
    "slug": "pierre-cardin-kriss-gold-luxury-ball-pen-executive-gift-box-3",
    "name": "Pierre Cardin Kriss Gold Luxury Ball Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 450,
    "originalPrice": 500,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PIER-KRISS--BAL",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "Pierre Cardin Kriss Gold Luxury Ball Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the Pierre Cardin Kriss Gold Luxury Ball Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "Pierre Cardin",
      "Pen Type": "Executive Ball Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹500",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 450
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 418.5
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 396
      }
    ]
  },
  {
    "id": "prod-pierre-cardin-kriss-gold-luxury-fountain-pen-executive-gift-box-3",
    "slug": "pierre-cardin-kriss-gold-luxury-fountain-pen-executive-gift-box-3",
    "name": "Pierre Cardin Kriss Gold Luxury Fountain Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 590,
    "originalPrice": 650,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PIER-KRISS--FOU",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "Pierre Cardin Kriss Gold Luxury Fountain Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the Pierre Cardin Kriss Gold Luxury Fountain Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "Pierre Cardin",
      "Pen Type": "Executive Fountain Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹650",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 590
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 548.7
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 519.2
      }
    ]
  },
  {
    "id": "prod-pierre-cardin-triga-luxury-ball-pen-executive-gift-box-3",
    "slug": "pierre-cardin-triga-luxury-ball-pen-executive-gift-box-3",
    "name": "Pierre Cardin Triga Luxury Ball Pen (Executive Gift Box)",
    "category": "pens-pencils",
    "subCategory": "Premium Pens",
    "price": 300,
    "originalPrice": 350,
    "rating": 5,
    "reviewCount": 98,
    "stock": 50,
    "isBestseller": true,
    "isEcoFriendly": false,
    "isNew": true,
    "sku": "PIER-TRIGA-BAL",
    "images": [
      "/images/products/parker-luxury-pen.jpg",
      "/images/products/pentel-energel.jpg"
    ],
    "shortDescription": "Pierre Cardin Triga Luxury Ball Pen (Executive Gift Box) with gold-plated accents and luxury hard presentation case.",
    "description": "An icon of timeless executive elegance, the Pierre Cardin Triga Luxury Ball Pen (Executive Gift Box) is crafted from heavy brass metal with precision-balanced weight distribution. Packaged in a cushioned designer gift box, it is the premier choice for corporate gifting and prestigious milestones.",
    "highlights": [
      "Solid metal barrel with polished 24K gold / chrome trim",
      "Effortless German tungsten carbide refill included",
      "Presented in an elegant magnetic presentation gift case",
      "Ideal for sign-offs, executive desk display & corporate gifting"
    ],
    "specifications": {
      "Brand": "Pierre Cardin",
      "Pen Type": "Executive Ball Pen",
      "Body Material": "Lacquered Brass Alloy",
      "Packaging": "Luxury Presentation Box",
      "Refill Type": "Standard International Metal Refill",
      "MRP": "₹350",
      "Origin": "Imported / Assembled in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 4,
        "discountPercent": 0,
        "pricePerUnit": 300
      },
      {
        "minQty": 5,
        "maxQty": 19,
        "discountPercent": 7,
        "pricePerUnit": 279
      },
      {
        "minQty": 20,
        "discountPercent": 12,
        "pricePerUnit": 264
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-single-line-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-single-line-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Single Line, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Single Line Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-SINGLE-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Single Line, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Single Line, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Single Line",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-single-line-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-single-line-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Single Line, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Single Line Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-SINGLE-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Single Line, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Single Line, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Single Line",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-single-line-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-single-line-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Single Line, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Single Line Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-SINGLE-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Single Line, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Single Line, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Single Line",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-4-line-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-4-line-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (4 Line, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "4 Line Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-4-LINE-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 4 Line, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (4 Line, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "4 Line",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-4-line-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-4-line-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (4 Line, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "4 Line Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-4-LINE-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 4 Line, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (4 Line, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "4 Line",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-4-line-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-4-line-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (4 Line, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "4 Line Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-4-LINE-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 4 Line, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (4 Line, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "4 Line",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-2-line-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-2-line-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (2 Line, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "2 Line Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-2-LINE-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 2 Line, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (2 Line, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "2 Line",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-2-line-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-2-line-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (2 Line, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "2 Line Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-2-LINE-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 2 Line, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (2 Line, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "2 Line",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-2-line-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-2-line-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (2 Line, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "2 Line Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-2-LINE-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 2 Line, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (2 Line, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "2 Line",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-3-line-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-3-line-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (3 Line, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "3 Line Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-3-LINE-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 3 Line, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (3 Line, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "3 Line",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-3-line-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-3-line-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (3 Line, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "3 Line Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-3-LINE-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 3 Line, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (3 Line, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "3 Line",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-3-line-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-3-line-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (3 Line, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "3 Line Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-3-LINE-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 3 Line, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (3 Line, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "3 Line",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-box-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-box-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Box, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Box Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-BOX-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Box, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Box, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Box",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-box-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-box-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Box, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Box Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-BOX-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Box, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Box, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Box",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-box-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-box-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Box, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Box Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-BOX-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Box, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Box, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Box",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-combine-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-combine-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Combine, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Combine Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-COMBIN-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Combine, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Combine, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Combine",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-combine-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-combine-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Combine, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Combine Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-COMBIN-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Combine, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Combine, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Combine",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-combine-172-pages-4",
    "slug": "classmate-navneet-student-notebook-24x18-cm-combine-172-pages-4",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Combine, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Combine Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-COMBIN-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Combine, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Combine, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Combine",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-interleaf-72-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-interleaf-72-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Interleaf, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Interleaf Notebooks",
    "price": 25,
    "originalPrice": 25,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-INTERL-72",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Interleaf, 72 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Interleaf, 72 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Interleaf",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹25",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 25
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 23
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 21
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-interleaf-120-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-interleaf-120-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Interleaf, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Interleaf Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-INTERL-120",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Interleaf, 120 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Interleaf, 120 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Interleaf",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 29.4
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-interleaf-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-interleaf-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Interleaf, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Interleaf Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-INTERL-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Interleaf, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Interleaf, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Interleaf",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-combine-drawing-ruled-172-pages-2",
    "slug": "classmate-navneet-student-notebook-24x18-cm-combine-drawing-ruled-172-pages-2",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (Combine Drawing & Ruled, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Combine Drawing & Ruled Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-COMBIN-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, Combine Drawing & Ruled, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (Combine Drawing & Ruled, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "Combine Drawing & Ruled",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-student-notebook-24x18-cm-2-line-combine-172-pages-3",
    "slug": "classmate-navneet-student-notebook-24x18-cm-2-line-combine-172-pages-3",
    "name": "Classmate / Navneet Student Notebook 24x18 cm (2 Line Combine, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "2 Line Combine Notebooks",
    "price": 50,
    "originalPrice": 50,
    "rating": 4.9,
    "reviewCount": 260,
    "stock": 300,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-24X18-2-LINE-172",
    "images": [
      "/images/products/classmate-notebook-24x18.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet standard school exercise notebook (24x18 cm, 2 Line Combine, 172 pages) with chlorine-free ozone friendly paper.",
    "description": "The Classmate / Navneet Student Notebook 24x18 cm (2 Line Combine, 172 Pages) is crafted with ultra-smooth 58-60 GSM high-brightness paper that prevents ink penetration and feathering. Features heavy-duty spine pinning, subject index page, and fun trivia back cover.",
    "highlights": [
      "Elemental Chlorine Free (ECF) ozone-friendly bright white paper",
      "Precision printed rulings with margins on both sides",
      "Reinforced twin-wire center stapled spine prevents loose leaves",
      "Vibrant high-gloss laminated waterproof soft cover"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "24x18 cm",
      "Ruling Style": "2 Line Combine",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Bright White",
      "Binding": "Center Pin Stitched",
      "MRP": "₹50",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 23,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 24,
        "discountPercent": 16,
        "pricePerUnit": 42
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-long-notebook-29x21-cm-single-line-72-pages-3",
    "slug": "classmate-navneet-long-notebook-29x21-cm-single-line-72-pages-3",
    "name": "Classmate / Navneet Long Notebook 29x21 cm (Single Line, 72 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Long Notebooks",
    "price": 35,
    "originalPrice": 35,
    "rating": 4.9,
    "reviewCount": 190,
    "stock": 250,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-29X21-SL-72",
    "images": [
      "/images/products/classmate-longbook.jpg",
      "/images/products/classmate-notebook-24x18.jpg"
    ],
    "shortDescription": "Classmate / Navneet A4 long format notebook (29x21 cm, 72 pages) for senior school, college lectures, and coaching classes.",
    "description": "The Classmate / Navneet Long Notebook 29x21 cm (Single Line, 72 Pages) is specifically formatted for high school and university coursework. High opacity paper accommodates gel and fountain pens with zero bleed-through.",
    "highlights": [
      "Spacious A4 long layout with wide writing lines",
      "High opacity 60 GSM paper prevents ink ghosting",
      "Reinforced sewn and pinned spine binding",
      "Index, schedule chart and formula sheets included"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "29 x 21 cm (A4 Long)",
      "Ruling": "Single Line",
      "Page Count": "72 Pages",
      "Paper Density": "60 GSM Super Bright White",
      "Binding": "Section Stitched & Glued Softcover",
      "MRP": "₹35",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 35
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 32.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 29.75
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-long-notebook-29x21-cm-single-line-120-pages-3",
    "slug": "classmate-navneet-long-notebook-29x21-cm-single-line-120-pages-3",
    "name": "Classmate / Navneet Long Notebook 29x21 cm (Single Line, 120 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Long Notebooks",
    "price": 50,
    "originalPrice": 55,
    "rating": 4.9,
    "reviewCount": 190,
    "stock": 250,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-29X21-SL-120",
    "images": [
      "/images/products/classmate-longbook.jpg",
      "/images/products/classmate-notebook-24x18.jpg"
    ],
    "shortDescription": "Classmate / Navneet A4 long format notebook (29x21 cm, 120 pages) for senior school, college lectures, and coaching classes.",
    "description": "The Classmate / Navneet Long Notebook 29x21 cm (Single Line, 120 Pages) is specifically formatted for high school and university coursework. High opacity paper accommodates gel and fountain pens with zero bleed-through.",
    "highlights": [
      "Spacious A4 long layout with wide writing lines",
      "High opacity 60 GSM paper prevents ink ghosting",
      "Reinforced sewn and pinned spine binding",
      "Index, schedule chart and formula sheets included"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "29 x 21 cm (A4 Long)",
      "Ruling": "Single Line",
      "Page Count": "120 Pages",
      "Paper Density": "60 GSM Super Bright White",
      "Binding": "Section Stitched & Glued Softcover",
      "MRP": "₹55",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 50
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 46
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 42.5
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-long-notebook-29x21-cm-single-line-172-pages-3",
    "slug": "classmate-navneet-long-notebook-29x21-cm-single-line-172-pages-3",
    "name": "Classmate / Navneet Long Notebook 29x21 cm (Single Line, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Long Notebooks",
    "price": 65,
    "originalPrice": 70,
    "rating": 4.9,
    "reviewCount": 190,
    "stock": 250,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-29X21-SL-172",
    "images": [
      "/images/products/classmate-longbook.jpg",
      "/images/products/classmate-notebook-24x18.jpg"
    ],
    "shortDescription": "Classmate / Navneet A4 long format notebook (29x21 cm, 172 pages) for senior school, college lectures, and coaching classes.",
    "description": "The Classmate / Navneet Long Notebook 29x21 cm (Single Line, 172 Pages) is specifically formatted for high school and university coursework. High opacity paper accommodates gel and fountain pens with zero bleed-through.",
    "highlights": [
      "Spacious A4 long layout with wide writing lines",
      "High opacity 60 GSM paper prevents ink ghosting",
      "Reinforced sewn and pinned spine binding",
      "Index, schedule chart and formula sheets included"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "29 x 21 cm (A4 Long)",
      "Ruling": "Single Line",
      "Page Count": "172 Pages",
      "Paper Density": "60 GSM Super Bright White",
      "Binding": "Section Stitched & Glued Softcover",
      "MRP": "₹70",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 65
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 59.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 55.25
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-long-notebook-29x21-cm-single-line-240-pages-3",
    "slug": "classmate-navneet-long-notebook-29x21-cm-single-line-240-pages-3",
    "name": "Classmate / Navneet Long Notebook 29x21 cm (Single Line, 240 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Long Notebooks",
    "price": 90,
    "originalPrice": 95,
    "rating": 4.9,
    "reviewCount": 190,
    "stock": 250,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-29X21-SL-240",
    "images": [
      "/images/products/classmate-longbook.jpg",
      "/images/products/classmate-notebook-24x18.jpg"
    ],
    "shortDescription": "Classmate / Navneet A4 long format notebook (29x21 cm, 240 pages) for senior school, college lectures, and coaching classes.",
    "description": "The Classmate / Navneet Long Notebook 29x21 cm (Single Line, 240 Pages) is specifically formatted for high school and university coursework. High opacity paper accommodates gel and fountain pens with zero bleed-through.",
    "highlights": [
      "Spacious A4 long layout with wide writing lines",
      "High opacity 60 GSM paper prevents ink ghosting",
      "Reinforced sewn and pinned spine binding",
      "Index, schedule chart and formula sheets included"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "29 x 21 cm (A4 Long)",
      "Ruling": "Single Line",
      "Page Count": "240 Pages",
      "Paper Density": "60 GSM Super Bright White",
      "Binding": "Section Stitched & Glued Softcover",
      "MRP": "₹95",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 90
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 82.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 76.5
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-long-notebook-29x21-cm-single-line-302-pages-3",
    "slug": "classmate-navneet-long-notebook-29x21-cm-single-line-302-pages-3",
    "name": "Classmate / Navneet Long Notebook 29x21 cm (Single Line, 302 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Long Notebooks",
    "price": 115,
    "originalPrice": 120,
    "rating": 4.9,
    "reviewCount": 190,
    "stock": 250,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-29X21-SL-302",
    "images": [
      "/images/products/classmate-longbook.jpg",
      "/images/products/classmate-notebook-24x18.jpg"
    ],
    "shortDescription": "Classmate / Navneet A4 long format notebook (29x21 cm, 302 pages) for senior school, college lectures, and coaching classes.",
    "description": "The Classmate / Navneet Long Notebook 29x21 cm (Single Line, 302 Pages) is specifically formatted for high school and university coursework. High opacity paper accommodates gel and fountain pens with zero bleed-through.",
    "highlights": [
      "Spacious A4 long layout with wide writing lines",
      "High opacity 60 GSM paper prevents ink ghosting",
      "Reinforced sewn and pinned spine binding",
      "Index, schedule chart and formula sheets included"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "29 x 21 cm (A4 Long)",
      "Ruling": "Single Line",
      "Page Count": "302 Pages",
      "Paper Density": "60 GSM Super Bright White",
      "Binding": "Section Stitched & Glued Softcover",
      "MRP": "₹120",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 115
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 105.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 97.75
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-long-notebook-29x21-cm-single-line-384-pages-3",
    "slug": "classmate-navneet-long-notebook-29x21-cm-single-line-384-pages-3",
    "name": "Classmate / Navneet Long Notebook 29x21 cm (Single Line, 384 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Long Notebooks",
    "price": 140,
    "originalPrice": 150,
    "rating": 4.9,
    "reviewCount": 190,
    "stock": 250,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "NB-29X21-SL-384",
    "images": [
      "/images/products/classmate-longbook.jpg",
      "/images/products/classmate-notebook-24x18.jpg"
    ],
    "shortDescription": "Classmate / Navneet A4 long format notebook (29x21 cm, 384 pages) for senior school, college lectures, and coaching classes.",
    "description": "The Classmate / Navneet Long Notebook 29x21 cm (Single Line, 384 Pages) is specifically formatted for high school and university coursework. High opacity paper accommodates gel and fountain pens with zero bleed-through.",
    "highlights": [
      "Spacious A4 long layout with wide writing lines",
      "High opacity 60 GSM paper prevents ink ghosting",
      "Reinforced sewn and pinned spine binding",
      "Index, schedule chart and formula sheets included"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Dimensions": "29 x 21 cm (A4 Long)",
      "Ruling": "Single Line",
      "Page Count": "384 Pages",
      "Paper Density": "60 GSM Super Bright White",
      "Binding": "Section Stitched & Glued Softcover",
      "MRP": "₹150",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 140
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 128.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 119
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-172-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-172-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 85,
    "originalPrice": 90,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-SING-172",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Single Line, 172 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 172 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Single Line",
      "Page Count": "172 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹90",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 85
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 78.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 72.25
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-240-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-240-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 240 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 110,
    "originalPrice": 120,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-SING-240",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Single Line, 240 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 240 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Single Line",
      "Page Count": "240 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹120",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 110
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 101.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 93.5
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-302-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-302-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 302 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 140,
    "originalPrice": 150,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-SING-302",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Single Line, 302 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 302 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Single Line",
      "Page Count": "302 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹150",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 140
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 128.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 119
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-384-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-single-line-384-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 384 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 175,
    "originalPrice": 185,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-SING-384",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Single Line, 384 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Single Line, 384 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Single Line",
      "Page Count": "384 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹185",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 175
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 161
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 148.75
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-172-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-172-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 172 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 85,
    "originalPrice": 90,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-UNRU-172",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Unruled, 172 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 172 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Unruled",
      "Page Count": "172 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹90",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 85
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 78.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 72.25
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-240-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-240-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 240 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 110,
    "originalPrice": 120,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": true,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-UNRU-240",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Unruled, 240 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 240 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Unruled",
      "Page Count": "240 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹120",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 110
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 101.2
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 93.5
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-302-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-302-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 302 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 140,
    "originalPrice": 150,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-UNRU-302",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Unruled, 302 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 302 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Unruled",
      "Page Count": "302 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹150",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 140
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 128.8
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 119
      }
    ]
  },
  {
    "id": "prod-classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-384-pages-3",
    "slug": "classmate-navneet-wiro-spiral-notebook-29x21-cm-unruled-384-pages-3",
    "name": "Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 384 Pages)",
    "category": "notebooks-notepads",
    "subCategory": "Spiral & Wiro Notebooks",
    "price": 175,
    "originalPrice": 185,
    "rating": 4.9,
    "reviewCount": 160,
    "stock": 180,
    "isBestseller": false,
    "isEcoFriendly": true,
    "isNew": false,
    "sku": "WIRO-29X21-UNRU-384",
    "images": [
      "/images/products/classmate-wiro.jpg",
      "/images/products/classmate-longbook.jpg"
    ],
    "shortDescription": "Classmate / Navneet premium wiro twin-loop spiral bound notebook (29x21 cm, Unruled, 384 pages) with 360-degree flat lay.",
    "description": "The Classmate / Navneet Wiro Spiral Notebook 29x21 cm (Unruled, 384 Pages) is equipped with heavy-duty metal wiro spiral binding for complete 360-degree page rotation. Polypropylene protective cover protects pages against spills and tearing during daily commute.",
    "highlights": [
      "Twin-wire rust-resistant metal wiro binding with full 360-degree flip",
      "Micro-perforated sheets for clean, tear-free sheet removal",
      "Durable water-resistant polypropylene (PP) frosted cover",
      "Includes movable divider tabs and pen holder slot"
    ],
    "specifications": {
      "Brand": "Classmate / Navneet / Camlin",
      "Format": "29 x 21 cm (A4 Wiro Spiral)",
      "Ruling Style": "Unruled",
      "Page Count": "384 Pages",
      "Binding": "Twin Loop Metal Wiro",
      "Cover": "Heavy Frost Polypropylene",
      "MRP": "₹185",
      "Origin": "Made in India"
    },
    "bulkPricing": [
      {
        "minQty": 1,
        "maxQty": 5,
        "discountPercent": 0,
        "pricePerUnit": 175
      },
      {
        "minQty": 6,
        "maxQty": 19,
        "discountPercent": 8,
        "pricePerUnit": 161
      },
      {
        "minQty": 20,
        "discountPercent": 15,
        "pricePerUnit": 148.75
      }
    ]
  }
];
