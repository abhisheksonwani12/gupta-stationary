import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // 1. Pens & Pencils
  {
    id: "prod-1",
    slug: "gupta-premium-ball-pen-blue",
    name: "Gupta Premium Ball Pen (Blue)",
    category: "pens-pencils",
    subCategory: "ball-pens",
    price: 15,
    originalPrice: 20,
    rating: 4.8,
    reviewCount: 1247,
    stock: 500,
    isBestseller: true,
    isEcoFriendly: false,
    sku: "GS-PEN-01",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Smooth, continuous writing experience with refillable cartridge. Perfect for daily office and academic use.",
    description: "The Gupta Premium Ball Pen is our signature bestselling writing instrument, trusted by thousands of students, teachers, and business professionals across Raipur since 1995. Crafted for effortless ink flow with zero leakage and ergonomic grip.",
    highlights: [
      "Smooth, continuous writing experience",
      "2000+ words capacity per pen",
      "Refillable cartridge (saves money & reduces plastic)",
      "Durable break-resistant body",
      "Perfect ergonomic grip for long writing sessions"
    ],
    specifications: {
      "Tip Size": "1.0mm Swiss Carbide Tip",
      "Ink Color": "Vibrant Blue",
      "Ink Type": "Oil-based Low Viscosity Ink",
      "Body Material": "High-Grade Impact Polymer",
      "Length": "14 cm",
      "Word Capacity": "2000+ words",
      "Refillable": "Yes (Spare refills at ₹5 each)",
      "Certification": "ISI Certified",
      "Origin": "Made in India"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 15 },
      { minQty: 10, maxQty: 49, discountPercent: 20, pricePerUnit: 12 },
      { minQty: 50, maxQty: 99, discountPercent: 33, pricePerUnit: 10 },
      { minQty: 100, maxQty: 499, discountPercent: 47, pricePerUnit: 8 },
      { minQty: 500, discountPercent: 60, pricePerUnit: 6 }
    ],
    colors: [
      { name: "Blue", hex: "#1e40af" },
      { name: "Black", hex: "#111827" },
      { name: "Red", hex: "#dc2626" }
    ]
  },
  {
    id: "prod-2",
    slug: "gupta-gel-pen-set-10-colors",
    name: "Gupta Gel Pen Set (10 Colors)",
    category: "pens-pencils",
    subCategory: "gel-pens",
    price: 180,
    originalPrice: 220,
    rating: 4.9,
    reviewCount: 892,
    stock: 200,
    isBestseller: true,
    sku: "GS-GEL-10",
    images: [
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Vibrant Japanese gel inks with ultra-fast drying technology. Ideal for notes, bullet journaling, and sketching.",
    description: "Experience effortless artistic expression and crisp note-taking. Each pen features a 0.7mm fine roller tip and quick-drying, smudge-proof water-resistant Japanese gel ink formulation.",
    highlights: [
      "10 rich vibrant color spectrum",
      "Quick-dry smudge-proof Japanese gel ink",
      "0.7mm precision needle point",
      "Cushioned rubberized comfort barrel"
    ],
    specifications: {
      "Tip Size": "0.7mm Fine Needle Tip",
      "Color Count": "10 Assorted Colors",
      "Ink Type": "Waterproof Pigment Gel",
      "Grip": "Contoured Soft Rubber Grip"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 180 },
      { minQty: 10, maxQty: 49, discountPercent: 17, pricePerUnit: 150 },
      { minQty: 50, discountPercent: 33, pricePerUnit: 120 }
    ]
  },
  {
    id: "prod-3",
    slug: "wooden-pencil-hb-box",
    name: "Wooden Pencil HB Box (12 Pieces)",
    category: "pens-pencils",
    subCategory: "pencils",
    price: 45,
    originalPrice: 55,
    rating: 4.8,
    reviewCount: 456,
    stock: 1000,
    sku: "GS-PENCIL-HB12",
    images: [
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Classic cedarwood HB pencils with smooth bonded graphite core. Comes with soft eraser tops.",
    description: "Crafted from sustainably managed cedarwood with break-resistant bonded lead. Perfect for school examinations, sketching, and everyday office drafting.",
    highlights: [
      "FSC certified cedarwood",
      "Smooth, dark HB bonded graphite",
      "Non-smudge eraser tipped",
      "Easy sharpening without breakage"
    ],
    specifications: {
      "Hardness": "HB Grade",
      "Pack Size": "12 Pencils per box",
      "Length": "19 cm",
      "Wood Type": "FSC Certified Softwood"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 11, discountPercent: 0, pricePerUnit: 45 },
      { minQty: 12, maxQty: 49, discountPercent: 22, pricePerUnit: 35 },
      { minQty: 50, discountPercent: 33, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-4",
    slug: "mechanical-pencil-0-5mm",
    name: "Precision Mechanical Pencil (0.5mm)",
    category: "pens-pencils",
    subCategory: "pencils",
    price: 25,
    originalPrice: 35,
    rating: 4.7,
    reviewCount: 456,
    stock: 300,
    sku: "GS-MECH-05",
    images: [
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Modern ergonomic mechanical pencil with cushioned shock-absorbing tip and metal clip.",
    description: "Designed for architects, students, and engineers who demand consistent 0.5mm line width without sharpening.",
    highlights: [
      "Consistent 0.5mm line width",
      "Retractable stainless steel guide pipe",
      "Integrated eraser under top cap",
      "Comfort textured non-slip grip"
    ],
    specifications: {
      "Lead Size": "0.5mm Polymer Lead",
      "Clip": "Sturdy Chrome Metal Clip",
      "Refillable": "Standard 0.5mm Leads"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 25 },
      { minQty: 10, maxQty: 49, discountPercent: 20, pricePerUnit: 20 },
      { minQty: 50, discountPercent: 40, pricePerUnit: 15 }
    ]
  },
  {
    id: "prod-5",
    slug: "highlighter-pen-set-5-colors",
    name: "Fluorescent Highlighter Pen Set (5 Colors)",
    category: "pens-pencils",
    subCategory: "highlighters",
    price: 45,
    originalPrice: 60,
    rating: 4.8,
    reviewCount: 523,
    stock: 400,
    sku: "GS-HIGH-05",
    images: [
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Vibrant neon fluorescent highlighters with dual chisel tips for wide and narrow strokes.",
    description: "Water-based odorless fluorescent ink designed not to bleed through standard notebook or copy paper.",
    highlights: [
      "5 luminous colors (Yellow, Pink, Green, Blue, Orange)",
      "Chisel tip 1mm - 4mm line versatility",
      "Non-bleed formula safe for textbooks",
      "Anti-dry cap-off technology"
    ],
    specifications: {
      "Tip Type": "Polyester Chisel Tip",
      "Colors": "Yellow, Pink, Green, Blue, Orange",
      "Ink Base": "Water-based Non-toxic"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 45 },
      { minQty: 10, maxQty: 49, discountPercent: 16, pricePerUnit: 38 },
      { minQty: 50, discountPercent: 33, pricePerUnit: 30 }
    ]
  },

  // 2. Notebooks & Notepads
  {
    id: "prod-6",
    slug: "gupta-school-notebook-200-pages",
    name: "Gupta Classic School Notebook (200 Pages)",
    category: "notebooks-notepads",
    subCategory: "school-notebooks",
    price: 85,
    originalPrice: 100,
    rating: 4.9,
    reviewCount: 1089,
    stock: 500,
    isBestseller: true,
    sku: "GS-NOTE-200",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Premium 60 GSM smooth ruled paper with durable spine binding. Academic essential.",
    description: "Our signature school notebook features ultra-smooth paper that prevents ink feathering and show-through. Heavy laminated cover protects against backpack wear and tear.",
    highlights: [
      "200 crisp ruled pages",
      "60 GSM smooth high-opacity paper",
      "Reinforced heavy-duty spine stitching",
      "Subject index & timetable pages included"
    ],
    specifications: {
      "Page Count": "200 Pages",
      "Paper Density": "60 GSM Bright White",
      "Dimensions": "17 cm × 21 cm (Standard Academic Size)",
      "Ruling": "Single Ruled with Margin",
      "Cover": "Laminated Waterproof Soft Cover"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 85 },
      { minQty: 10, maxQty: 49, discountPercent: 18, pricePerUnit: 70 },
      { minQty: 50, discountPercent: 29, pricePerUnit: 60 }
    ]
  },
  {
    id: "prod-7",
    slug: "eco-friendly-recycled-notebook-100-pages",
    name: "Gupta Eco Notebook (100 Pages, Recycled Paper)",
    category: "notebooks-notepads",
    subCategory: "eco-notebooks",
    price: 60,
    originalPrice: 75,
    rating: 4.9,
    reviewCount: 678,
    stock: 250,
    isEcoFriendly: true,
    isBestseller: true,
    sku: "GS-ECO-100",
    images: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "100% post-consumer recycled paper with natural Kraft board cover and soy-based printing.",
    description: "Make an eco-conscious statement without sacrificing writing pleasure. Crafted from 100% recycled unbleached fiber with zero plastic components.",
    highlights: [
      "100% post-consumer recycled paper",
      "Chemical-free natural warm cream finish",
      "Biodegradable cotton spine binding",
      "Zero plastic packaging"
    ],
    specifications: {
      "Pages": "100 Pages",
      "Material": "100% Recycled Cotton-wood Pulp",
      "Cover": "Kraft Unbleached 300 GSM Board",
      "Dimensions": "A5 (14.8 × 21 cm)"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 60 },
      { minQty: 10, maxQty: 49, discountPercent: 17, pricePerUnit: 50 },
      { minQty: 50, discountPercent: 30, pricePerUnit: 42 }
    ]
  },
  {
    id: "prod-8",
    slug: "office-notepad-sticky-notes",
    name: "Office Sticky Notes Pad (50 Pages, 3x3 Neon)",
    category: "notebooks-notepads",
    subCategory: "sticky-notes",
    price: 35,
    originalPrice: 45,
    rating: 4.7,
    reviewCount: 234,
    stock: 600,
    sku: "GS-STICKY-3X3",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Self-adhesive repositionable sticky notes in vibrant neon shades. Leaves zero glue residue.",
    description: "Keep your reminders, book markers, and office memos organized with strong adhesive backing that sticks securely to paper, walls, and monitors.",
    highlights: [
      "50 peel-and-stick sheets per pad",
      "Repositionable adhesive backing",
      "Assorted bright neon colors",
      "Clean residue-free removal"
    ],
    specifications: {
      "Dimensions": "3 × 3 inches (76 × 76 mm)",
      "Sheet Count": "50 Sheets",
      "Adhesion Type": "Clean Removable Acrylic"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 10, maxQty: 49, discountPercent: 20, pricePerUnit: 28 },
      { minQty: 50, discountPercent: 37, pricePerUnit: 22 }
    ]
  },
  {
    id: "prod-9",
    slug: "executive-diary-planner-365-pages",
    name: "Executive Annual Diary & Planner (365 Pages)",
    category: "notebooks-notepads",
    subCategory: "diaries-planners",
    price: 150,
    originalPrice: 200,
    rating: 4.9,
    reviewCount: 445,
    stock: 150,
    isNew: true,
    sku: "GS-PLANNER-365",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Hardbound luxury faux-leather diary with day-to-a-page layout, monthly calendars, and gold gilded ribbon marker.",
    description: "The ideal tool for professionals, entrepreneurs, and busy students. Contains yearly planners, financial trackers, goal matrices, and daily appointment slots.",
    highlights: [
      "365 full daily scheduling pages",
      "Premium hardbound leatherette finish",
      "Silk ribbon bookmark + document pocket",
      "70 GSM warm eye-comfort paper"
    ],
    specifications: {
      "Pages": "365 Pages",
      "Cover": "Padded Vegan Leather",
      "Binding": "Section Sewn Hardcover",
      "Dimensions": "A5 Executive Size"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 150 },
      { minQty: 10, maxQty: 49, discountPercent: 17, pricePerUnit: 125 },
      { minQty: 50, discountPercent: 33, pricePerUnit: 100 }
    ]
  },

  // 3. Paper Products
  {
    id: "prod-10",
    slug: "a4-copy-paper-ream-75gsm-500-sheets",
    name: "A4 Copy Paper Ream (500 Sheets, 75 GSM)",
    category: "paper-products",
    subCategory: "copy-paper",
    price: 320,
    originalPrice: 380,
    rating: 4.9,
    reviewCount: 1567,
    stock: 1000,
    isBestseller: true,
    sku: "GS-A4-75GSM",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Ultra-bright 98% ISO certified multipurpose copy paper. Jam-free laser & inkjet printing.",
    description: "Gupta Stationery's high-speed printing paper is calibrated for duplex laser, color inkjet, and heavy-volume xerox copying. Engineered with precision cut edges to prevent printer jams.",
    highlights: [
      "500 sheets per sealed moisture-proof ream",
      "75 GSM high-opacity brightness (98% ISO)",
      "Zero-jam guarantee across all printer brands",
      "Acid-free for long archival durability"
    ],
    specifications: {
      "Size": "A4 (210 × 297 mm)",
      "Sheet Count": "500 Sheets per ream",
      "GSM": "75 GSM",
      "Brightness": "98% ISO Bright White",
      "Certifications": "ISO 9001, ISO 14001"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 320 },
      { minQty: 5, maxQty: 19, discountPercent: 6, pricePerUnit: 300 },
      { minQty: 20, discountPercent: 12.5, pricePerUnit: 280 }
    ]
  },
  {
    id: "prod-11",
    slug: "cardstock-cardboard-250gsm-50-sheets",
    name: "Heavy Cardstock / Craft Board (250 GSM, 50 Sheets)",
    category: "paper-products",
    subCategory: "cardstock",
    price: 185,
    originalPrice: 220,
    rating: 4.8,
    reviewCount: 321,
    stock: 300,
    sku: "GS-CARD-250",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Thick, premium 250 GSM smooth cardstock for greeting cards, scrapbooks, packaging, and printing.",
    description: "Rigid yet pliable heavy paperboard suitable for die-cutting, embossing, calligraphy inks, and high-end brochure printing.",
    highlights: [
      "50 sheets of heavyweight 250 GSM stock",
      "Matte smooth surface on both sides",
      "Compatible with laser and inkjet card printers",
      "Multiple color variants available"
    ],
    specifications: {
      "GSM": "250 GSM",
      "Dimensions": "A4 Size (21 × 29.7 cm)",
      "Sheets": "50 Sheets"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 185 },
      { minQty: 10, maxQty: 49, discountPercent: 13.5, pricePerUnit: 160 },
      { minQty: 50, discountPercent: 24, pricePerUnit: 140 }
    ]
  },
  {
    id: "prod-12",
    slug: "soft-tissue-paper-roll-2-ply",
    name: "Soft Multi-Purpose Tissue Paper Roll (2-Ply, 400 Sheets)",
    category: "paper-products",
    subCategory: "tissue-paper",
    price: 25,
    originalPrice: 35,
    rating: 4.8,
    reviewCount: 892,
    stock: 800,
    isEcoFriendly: true,
    sku: "GS-TISSUE-2PLY",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Ultra-absorbent, hygienic 2-ply embossed tissue paper roll made from virgin biodegradable cellulose.",
    description: "Soft on skin and tough on spills. Safe for office pantries, washrooms, kitchens, and daily table use.",
    highlights: [
      "400 soft 2-ply perforated sheets",
      "100% biodegradable virgin pulp",
      "Lint-free and ultra-absorbent",
      "Hygienic individual wrap"
    ],
    specifications: {
      "Ply": "2-Ply Extra Soft",
      "Sheet Count": "400 Sheets / roll",
      "Color": "Natural Pure White"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 11, discountPercent: 0, pricePerUnit: 25 },
      { minQty: 12, maxQty: 49, discountPercent: 20, pricePerUnit: 20 },
      { minQty: 50, discountPercent: 40, pricePerUnit: 15 }
    ]
  },

  // 4. Office Supplies
  {
    id: "prod-13",
    slug: "heavy-duty-stapler-combo-with-50-staples",
    name: "Heavy-Duty Office Stapler + Staples Combo",
    category: "office-supplies",
    subCategory: "staplers",
    price: 95,
    originalPrice: 130,
    rating: 4.9,
    reviewCount: 567,
    stock: 400,
    isBestseller: true,
    sku: "GS-STAPLE-SET",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Jam-free steel mechanism stapler with 25-sheet capacity. Includes 50 starter staples free.",
    description: "Workplace staple built with hardened steel internals and ergonomic non-slip rubber base. Features quick-loading spring channel.",
    highlights: [
      "Staples up to 25 sheets effortlessly",
      "Anti-jamming guidance track",
      "Built-in staple remover on back",
      "Free 50 pin staples included"
    ],
    specifications: {
      "Capacity": "25 Sheets (80 GSM)",
      "Pin Size": "Standard No. 10 / 24/6",
      "Body": "Steel Mechanism + High-impact ABS"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 95 },
      { minQty: 10, maxQty: 49, discountPercent: 15.7, pricePerUnit: 80 },
      { minQty: 50, discountPercent: 31.5, pricePerUnit: 65 }
    ]
  },
  {
    id: "prod-14",
    slug: "metal-paper-clips-50-pack",
    name: "Rust-Resistant Metal Paper Clips (50 Pcs/Box)",
    category: "office-supplies",
    subCategory: "clips-pins",
    price: 28,
    originalPrice: 35,
    rating: 4.7,
    reviewCount: 234,
    stock: 600,
    sku: "GS-CLIPS-50",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Nickel-plated smooth steel paper clips. Non-tearing rounded edges.",
    description: "Organize office documents cleanly without damaging page corners. Rust-resistant coating protects papers from staining.",
    highlights: [
      "50 pieces per storage box",
      "28mm standard office length",
      "Smooth nickel plating",
      "Zero snagging or tearing"
    ],
    specifications: {
      "Material": "Nickel Plated Spring Steel",
      "Size": "28mm Length",
      "Quantity": "50 Pieces"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 28 },
      { minQty: 10, maxQty: 49, discountPercent: 21.4, pricePerUnit: 22 },
      { minQty: 50, discountPercent: 46.4, pricePerUnit: 15 }
    ]
  },
  {
    id: "prod-15",
    slug: "rubber-band-set-250-pieces",
    name: "Assorted Elastic Rubber Bands (250 Pieces Box)",
    category: "office-supplies",
    subCategory: "clips-pins",
    price: 40,
    originalPrice: 50,
    rating: 4.8,
    reviewCount: 445,
    stock: 350,
    sku: "GS-RUBBER-250",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "High-elasticity durable natural rubber bands in multiple diameters for bundling cash, papers, and packages.",
    description: "Premium flexibility that stretches up to 3x original size without snapping or degrading over time.",
    highlights: [
      "250 pieces multi-size assortment",
      "Natural latex-free formula",
      "High tensile rebound strength",
      "Long shelf-life"
    ],
    specifications: {
      "Count": "250 Pieces",
      "Material": "Synthetic High Stretch Polymer",
      "Sizes": "Assorted Small, Medium, Large"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 40 },
      { minQty: 10, maxQty: 49, discountPercent: 20, pricePerUnit: 32 },
      { minQty: 50, discountPercent: 40, pricePerUnit: 24 }
    ]
  },
  {
    id: "prod-16",
    slug: "manila-file-folders-a4-pack-of-10",
    name: "Heavy Manila Document File Folders (A4, Pack of 10)",
    category: "office-supplies",
    subCategory: "folders-files",
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    reviewCount: 398,
    stock: 500,
    sku: "GS-FOLDER-10",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "180 GSM reinforced card file folders with indexing tabs for corporate and legal document management.",
    description: "Keep critical paperwork categorized and crease-free. Features expand-gussets and write-on tab labels in assorted corporate hues.",
    highlights: [
      "Pack of 10 durable file folders",
      "180 GSM thick tear-resistant board",
      "Pre-scored for 1-inch expansion",
      "Assorted color coding options"
    ],
    specifications: {
      "Size": "A4 / Legal Size",
      "Weight": "180 GSM Cardstock",
      "Pack": "10 Folders"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 4, discountPercent: 0, pricePerUnit: 180 },
      { minQty: 5, maxQty: 19, discountPercent: 16.6, pricePerUnit: 150 },
      { minQty: 20, discountPercent: 33.3, pricePerUnit: 120 }
    ]
  },

  // 5. School Supplies
  {
    id: "prod-17",
    slug: "gupta-complete-geometry-box-15-pieces",
    name: "Gupta Master Geometry Box (15 Precision Tools)",
    category: "school-supplies",
    subCategory: "geometry-sets",
    price: 120,
    originalPrice: 160,
    rating: 4.9,
    reviewCount: 789,
    stock: 600,
    isBestseller: true,
    sku: "GS-GEOM-15",
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Complete student drafting kit in a protective metal tin. Calibrated accurate scales and sturdy compass.",
    description: "The preferred geometry box for CBSE and ICSE students in Raipur. Includes self-centering compass, divider, 15cm ruler, 45° and 60° set squares, 180° protractor, eraser, and pencil.",
    highlights: [
      "15 essential precision drafting instruments",
      "Rust-proof zinc die-cast compass & divider",
      "Laser-etched markings for ultra-clear reading",
      "Sturdy vintage-style tin case"
    ],
    specifications: {
      "Case": "Metal Tin Protective Box",
      "Tools Count": "15 Pieces",
      "Scale Marking": "Metric (cm/mm) & Imperial (inches)",
      "Accuracy": "±0.5mm Lab Calibrated"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 120 },
      { minQty: 10, maxQty: 49, discountPercent: 16.6, pricePerUnit: 100 },
      { minQty: 50, discountPercent: 33.3, pricePerUnit: 80 }
    ]
  },
  {
    id: "prod-18",
    slug: "eraser-sharpener-duo-combo",
    name: "Dust-Free Eraser & Steel Sharpener Combo",
    category: "school-supplies",
    subCategory: "erasers-sharpeners",
    price: 35,
    originalPrice: 45,
    rating: 4.8,
    reviewCount: 567,
    stock: 450,
    sku: "GS-ERASE-SHARP",
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "2-in-1 student staple. Non-smudge polymer eraser paired with precision German steel blade sharpener.",
    description: "Erases graphite effortlessly without rolling dust or tearing thin notebook paper. Sharpener creates clean needle points on standard 8mm pencils.",
    highlights: [
      "Roll-up dust-free eraser formula",
      "Contoured single-hole sharpener with shavings canister",
      "Non-toxic and phthalate-free",
      "Pocket-friendly design"
    ],
    specifications: {
      "Blade": "German Hardened Carbon Steel",
      "Eraser": "Synthetic Polymer Dust-Free",
      "Compatibility": "Standard 6-8mm Pencils"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 11, discountPercent: 0, pricePerUnit: 35 },
      { minQty: 12, maxQty: 49, discountPercent: 20, pricePerUnit: 28 },
      { minQty: 50, discountPercent: 42.8, pricePerUnit: 20 }
    ]
  },
  {
    id: "prod-19",
    slug: "classic-wooden-pencil-box-12-slot",
    name: "Handcrafted Wooden Pencil Box (12 Slots)",
    category: "school-supplies",
    subCategory: "pencil-boxes",
    price: 45,
    originalPrice: 65,
    rating: 4.9,
    reviewCount: 623,
    stock: 300,
    sku: "GS-WOOD-BOX",
    images: [
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Classic natural pine wooden pencil case with slide lid and velvet internal lining.",
    description: "Ditch flimsy plastic boxes. This timeless wooden case safeguards pens, pencils, rulers, and compasses while adding warmth to school desks.",
    highlights: [
      "Solid natural pine construction",
      "Smooth sliding lid with thumb indent",
      "Stores 12+ full-length pencils",
      "Custom name engraving ready"
    ],
    specifications: {
      "Dimensions": "7 × 4 × 2 inches",
      "Material": "Treated Natural Pine",
      "Finish": "Eco Beeswax Polish"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 45 },
      { minQty: 10, maxQty: 49, discountPercent: 15.5, pricePerUnit: 38 },
      { minQty: 50, discountPercent: 33.3, pricePerUnit: 30 }
    ]
  },
  {
    id: "prod-20",
    slug: "precision-metal-drafting-compass",
    name: "Engineering Precision Metal Compass",
    category: "school-supplies",
    subCategory: "geometry-sets",
    price: 50,
    originalPrice: 70,
    rating: 4.7,
    reviewCount: 456,
    stock: 250,
    sku: "GS-COMPASS-MET",
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Heavy-duty all-metal compass with micro-adjustment thumbwheel for accurate circle arcs up to 15cm radius.",
    description: "Rigid metal legs prevent flex during circle drawing. Supplied with replacement needle points and lead tubes.",
    highlights: [
      "15cm maximum drawing radius",
      "Central thumbwheel micro-adjustment",
      "Includes spare lead tube and safety cap",
      "All-metal matte chrome finish"
    ],
    specifications: {
      "Max Radius": "15 cm (30 cm Diameter)",
      "Adjustment": "Friction Gear + Center Wheel",
      "Body": "Die-cast Zinc Alloy"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 50 },
      { minQty: 10, maxQty: 49, discountPercent: 16, pricePerUnit: 42 },
      { minQty: 50, discountPercent: 30, pricePerUnit: 35 }
    ]
  },

  // 6. Eco-Friendly Range
  {
    id: "prod-21",
    slug: "biodegradable-plantable-pen-set-10-pens",
    name: "Gupta Biodegradable & Plantable Pen Set (10 Pens)",
    category: "eco-friendly-range",
    subCategory: "eco-pens",
    price: 200,
    originalPrice: 260,
    rating: 4.9,
    reviewCount: 523,
    stock: 200,
    isEcoFriendly: true,
    isBestseller: true,
    sku: "GS-ECO-PEN10",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Plantable pens made from 100% recycled paper barrel with non-toxic biodegradable ink and seed capsules at the base.",
    description: "Write your thoughts and plant the pen when it runs out! Each pen is embedded with organic seeds (Basil, Marigold, Tomato) that sprout into plants when planted in soil.",
    highlights: [
      "100% plastic-free recycled paper barrel",
      "Seed capsule on rear (Tomato, Basil, Marigold)",
      "3000+ words smooth non-toxic writing",
      "Popular corporate eco-gifting product"
    ],
    specifications: {
      "Pack": "10 Plantable Pens",
      "Barrel": "Compressed Recycled Newspaper",
      "Seeds": "Non-GMO Organic Herb & Flower Seeds",
      "Ink": "Non-Toxic High Capacity Blue Ink"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 200 },
      { minQty: 10, maxQty: 49, discountPercent: 15, pricePerUnit: 170 },
      { minQty: 50, discountPercent: 25, pricePerUnit: 150 }
    ]
  },
  {
    id: "prod-22",
    slug: "natural-rubber-eraser-pack-of-5",
    name: "Natural Tree-Rubber Erasers (Pack of 5, PVC-Free)",
    category: "eco-friendly-range",
    subCategory: "eco-erasers",
    price: 55,
    originalPrice: 70,
    rating: 4.8,
    reviewCount: 412,
    stock: 400,
    isEcoFriendly: true,
    sku: "GS-ECO-ERASE5",
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "100% pure vulcanized natural rubber erasers. 0% PVC, zero synthetic plastics, completely safe for children.",
    description: "Sustainably harvested from rubber trees. Leaves no chemical residue on paper and breaks down naturally in soil.",
    highlights: [
      "Pack of 5 tree-sap rubber erasers",
      "100% PVC & phthalate free",
      "Soft, velvety feel with non-tearing erasing",
      "Completely biodegradable"
    ],
    specifications: {
      "Count": "5 Erasers",
      "Material": "100% Natural Hevea Rubber",
      "Eco Label": "Zero Micro-plastics"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 55 },
      { minQty: 10, maxQty: 49, discountPercent: 18, pricePerUnit: 45 },
      { minQty: 50, discountPercent: 36, pricePerUnit: 35 }
    ]
  },
  {
    id: "prod-23",
    slug: "recycled-paper-kraft-notebook-150-pages",
    name: "Recycled Paper Kraft Notebook (150 Pages)",
    category: "eco-friendly-range",
    subCategory: "eco-notebooks",
    price: 75,
    originalPrice: 95,
    rating: 4.9,
    reviewCount: 667,
    stock: 300,
    isEcoFriendly: true,
    sku: "GS-ECO-KRAFT150",
    images: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "150 pages of unbleached post-consumer recycled paper bound in flexible natural Kraft board.",
    description: "Saves trees, water, and energy with every page. Thread-sewn spine lays flat at 180° for easy writing and sketching.",
    highlights: [
      "150 pages 60 GSM recycled paper",
      "Soy-ink printed unobtrusive dot grid",
      "Flat-lay 180-degree open spine",
      "Plastic-free paper band packaging"
    ],
    specifications: {
      "Pages": "150 Pages",
      "Layout": "Dot Grid / Ruled",
      "Binding": "Cotton Thread Sewn",
      "Dimensions": "A5 (148 × 210 mm)"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 75 },
      { minQty: 10, maxQty: 49, discountPercent: 17.3, pricePerUnit: 62 },
      { minQty: 50, discountPercent: 33.3, pricePerUnit: 50 }
    ]
  },
  {
    id: "prod-24",
    slug: "natural-bamboo-pencils-pack-of-10",
    name: "Sustainable Bamboo HB Pencils (Pack of 10)",
    category: "eco-friendly-range",
    subCategory: "eco-pencils",
    price: 65,
    originalPrice: 85,
    rating: 4.8,
    reviewCount: 534,
    stock: 250,
    isEcoFriendly: true,
    sku: "GS-ECO-BAMBOO10",
    images: [
      "https://images.unsplash.com/photo-1585336261026-77cc7c97f266?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Fast-growing renewable bamboo body pencils with rich HB graphite and natural eraser tops.",
    description: "Bamboo is a fast-regenerating grass that requires no deforestation. These pencils feel warm to the touch and sharpen smoothly.",
    highlights: [
      "Pack of 10 100% bamboo casing pencils",
      "Deep dark HB smooth writing lead",
      "Zero rainforest timber used",
      "Biodegradable natural rubber eraser head"
    ],
    specifications: {
      "Pack Size": "10 Pencils",
      "Hardness": "HB Grade",
      "Material": "100% Organically Grown Bamboo"
    },
    bulkPricing: [
      { minQty: 1, maxQty: 9, discountPercent: 0, pricePerUnit: 65 },
      { minQty: 10, maxQty: 49, discountPercent: 15.3, pricePerUnit: 55 },
      { minQty: 50, discountPercent: 30.7, pricePerUnit: 45 }
    ]
  }
];

export const CATEGORIES = [
  {
    id: "pens-pencils",
    name: "Pens & Pencils",
    slug: "pens-pencils",
    description: "Ball pens, gel pens, wooden & mechanical pencils, highlighters",
    itemCount: 5,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop",
    subcategories: ["Ball Pens", "Gel Pens", "Wooden Pencils", "Mechanical Pencils", "Highlighters"]
  },
  {
    id: "notebooks-notepads",
    name: "Notebooks & Notepads",
    slug: "notebooks-notepads",
    description: "School notebooks, office notepads, diaries, planners & sticky notes",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    subcategories: ["School Notebooks", "Office Notebooks", "Sticky Notes", "Diaries & Planners"]
  },
  {
    id: "paper-products",
    name: "Paper Products",
    slug: "paper-products",
    description: "A4 copy paper, heavy cardstock, cardboard sheets, tissue paper",
    itemCount: 3,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
    subcategories: ["Copy Paper (A4)", "Cardstock & Board", "Tissue Paper"]
  },
  {
    id: "office-supplies",
    name: "Office Supplies",
    slug: "office-supplies",
    description: "Staplers, metal paper clips, elastic bands, folders & files",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
    subcategories: ["Staplers & Pins", "Clips & Bands", "Folders & Files"]
  },
  {
    id: "school-supplies",
    name: "School Supplies",
    slug: "school-supplies",
    description: "Geometry boxes, erasers, sharpeners, pencil boxes, compasses",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    subcategories: ["Geometry Sets", "Erasers & Sharpeners", "Pencil Boxes", "Compasses"]
  },
  {
    id: "eco-friendly-range",
    name: "Eco-Friendly Range",
    slug: "eco-friendly-range",
    description: "Biodegradable pens, recycled paper, natural rubber erasers, bamboo pencils",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    subcategories: ["Biodegradable Pens", "Natural Rubber Erasers", "Recycled Notebooks", "Bamboo Pencils"]
  }
];
