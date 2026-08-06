export const mockProducts = [
  // 1. MOBILES
  {
    id: 'prod-iphone-17',
    name: 'Apple iPhone 17 Pro (Deep Blue, 256 GB)',
    slug: 'apple-iphone-17-pro',
    brand: 'Apple',
    sku: 'APL-IP17P-256-DB',
    category: 'mobiles',
    productType: 'mobile',
    badge: 'New Launch',
    rating: 4.8,
    reviewCount: 4015,
    stock: 14,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [
      {
        title: 'iPhone 17 Pro Official Trailer',
        thumbnail: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      }
    ],
    price: { original: 134900, current: 132900, currency: '₹', taxIncluded: true },
    variants: {
      colors: [
        { name: 'Deep Blue', hex: '#1e293b' },
        { name: 'Natural Titanium', hex: '#64748b' }
      ],
      storage: ['128 GB', '256 GB', '512 GB']
    },
    variantMatrix: {},
    offers: [
      { id: 'off-1', title: 'Bank Offer', description: 'Flat ₹5,000 Instant Discount on HDFC Bank Credit Cards', code: 'HDFC5000', type: 'bank' },
      { id: 'off-2', title: 'No Cost EMI', description: 'No Cost EMI up to 24 months with HDFC, ICICI Cards', code: 'NOCOST24', type: 'emi' }
    ],
    emiOptions: [
      { bank: 'HDFC Bank', monthly: 2148, months: 6, noCost: true, totalInterest: 0 },
      { bank: 'ICICI Bank', monthly: 10741, months: 12, noCost: true, totalInterest: 0 }
    ],
    highlights: [
      '6.7-inch Super Retina XDR display with ProMotion 120Hz',
      'A19 Pro chip with 6-core GPU & 16-core Neural Engine',
      '48MP Triple-Lens Fusion Camera with 5x Telephoto Zoom'
    ],
    description: 'Experience unmatched mobile innovation with the Apple iPhone 17 Pro in aerospace-grade titanium.',
    specifications: { General: { 'Brand': 'Apple', 'Model': 'iPhone 17 Pro' } },
    reviews: [
      { id: 'rev-1', user: 'Vikram R.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', rating: 5, date: '2 days ago', verified: true, title: 'Mind-blowing speed and camera!', content: 'Upgraded from iPhone 13 Pro. Camera zoom and battery are unmatched.', likes: 42 }
    ],
    frequentlyBoughtTogether: [
      { id: 'acc-1', name: 'MagSafe Clear Case for iPhone 17 Pro', price: 2999, originalPrice: 3999, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=300&q=80' }
    ],
    featured: true
  },
  {
    id: 'prod-poco-m8',
    name: 'POCO M8 Power 5G (Sunset Amber, 8GB RAM, 128GB)',
    slug: 'poco-m8-power-5g',
    brand: 'POCO',
    sku: 'POC-M8-128-AMB',
    category: 'mobiles',
    productType: 'mobile',
    badge: 'Freedom Sale',
    rating: 4.6,
    reviewCount: 2840,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 25999, current: 21999, currency: '₹', taxIncluded: true },
    variants: {
      colors: [{ name: 'Sunset Amber', hex: '#f59e0b' }, { name: 'Midnight Black', hex: '#0f172a' }],
      storage: ['128 GB', '256 GB']
    },
    variantMatrix: {},
    offers: [
      { id: 'off-poco-1', title: 'Bank Offer', description: '₹1,500 Extra Discount on ICICI Bank Cards', code: 'ICICI1500', type: 'bank' }
    ],
    emiOptions: [],
    highlights: [
      'Snapdragon 4 Gen 2 5G Processor',
      '6000mAh Massive Battery with 33W Fast Charger included',
      '50MP AI Dual Camera with Night Mode'
    ],
    description: 'Power-packed 5G performance with a massive 6000mAh battery for 2-day battery life.',
    specifications: { General: { 'Brand': 'POCO', 'Model': 'M8 Power 5G' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },
  {
    id: 'prod-samsung-s25',
    name: 'Samsung Galaxy S25 Ultra 5G (Titanium Gray, 12GB RAM, 256GB)',
    slug: 'samsung-galaxy-s25-ultra',
    brand: 'Samsung',
    sku: 'SAM-S25U-256-GRY',
    category: 'mobiles',
    productType: 'mobile',
    badge: 'Flagship',
    rating: 4.9,
    reviewCount: 5120,
    stock: 10,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 139999, current: 129999, currency: '₹', taxIncluded: true },
    variants: {
      colors: [{ name: 'Titanium Gray', hex: '#475569' }, { name: 'Phantom Black', hex: '#0f172a' }],
      storage: ['256 GB', '512 GB']
    },
    variantMatrix: {},
    offers: [
      { id: 'off-sam-1', title: 'Exchange Offer', description: 'Up to ₹50,000 Off on Exchange + ₹5,000 Upgrade Bonus', type: 'exchange' }
    ],
    emiOptions: [],
    highlights: [
      'Built-in S Pen with air gestures & notes integration',
      '200MP Quad Camera System with 100x Space Zoom',
      'Snapdragon 8 Gen 4 Galaxy Edition'
    ],
    description: 'The ultimate Android camera flagship with Galaxy AI capabilities.',
    specifications: { General: { 'Brand': 'Samsung', 'Model': 'Galaxy S25 Ultra' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },

  // 2. LAPTOPS
  {
    id: 'prod-asus-expertbook',
    name: 'ASUS ExpertBook P1 Core i5 13th Gen Thin & Light Laptop',
    slug: 'asus-expertbook-p1',
    brand: 'ASUS',
    sku: 'ASU-EXP-P1-I5',
    category: 'laptops',
    productType: 'laptop',
    badge: 'Intel Deal',
    rating: 4.6,
    reviewCount: 920,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 58990, current: 45990, currency: '₹', taxIncluded: true },
    variants: { storage: ['512GB SSD', '1TB SSD'] },
    variantMatrix: {},
    offers: [
      { id: 'off-asu-1', title: 'Bank Offer', description: '10% Instant Discount on BOB Card & HSBC', type: 'bank' }
    ],
    emiOptions: [],
    highlights: [
      'Intel Core i5-1335U 13th Gen Processor (10 Cores, up to 4.6 GHz)',
      '16GB DDR4 RAM & 512GB NVMe PCIe 4.0 SSD',
      '15.6-inch Full HD Anti-Glare Eye Care Display'
    ],
    description: 'Built for enterprise durability and high productivity on the go.',
    specifications: { General: { 'Processor': 'Intel Core i5', 'RAM': '16GB' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },
  {
    id: 'prod-macbook-pro',
    name: 'Apple MacBook Pro M3 (14-inch, 16GB Unified Memory, 512GB SSD)',
    slug: 'macbook-pro-m3',
    brand: 'Apple',
    sku: 'APL-MBP-M3-14',
    category: 'laptops',
    productType: 'laptop',
    badge: 'Best Seller',
    rating: 4.9,
    reviewCount: 1890,
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 179900, current: 169900, currency: '₹', taxIncluded: true },
    variants: { storage: ['512GB SSD', '1TB SSD'] },
    variantMatrix: {},
    offers: [
      { id: 'off-mbp-1', title: 'Bank Offer', description: 'Flat ₹10,000 Instant Cashback on HDFC Credit Cards', code: 'HDFC10K', type: 'bank' }
    ],
    emiOptions: [],
    highlights: [
      'Apple M3 chip with 8-core CPU and 10-core GPU',
      '14.2-inch Liquid Retina XDR display (120Hz ProMotion)',
      'Up to 22 hours battery life'
    ],
    description: 'Mind-blowing performance for creative pros with Liquid Retina XDR screen.',
    specifications: { General: { 'Chip': 'Apple M3', 'RAM': '16GB' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },

  // 3. ELECTRONICS & AUDIO
  {
    id: 'prod-1',
    name: 'Aura Studio Wireless Noise-Canceling Headphones',
    slug: 'aura-studio-wireless-headphones',
    brand: 'Aura Audio',
    sku: 'AUR-HD-001',
    category: 'electronics',
    productType: 'audio',
    badge: 'Bestseller',
    rating: 4.8,
    reviewCount: 142,
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 24999, current: 19999, currency: '₹', taxIncluded: true },
    variants: {
      colors: [
        { name: 'Space Gray', hex: '#334155' },
        { name: 'Matte Black', hex: '#0f172a' }
      ]
    },
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['Active Noise Cancellation (ANC)', '40mm neodymium dynamic drivers', '35 Hours Battery Life'],
    description: 'High-fidelity audio with active noise cancellation.',
    specifications: { General: { 'Battery': '35 Hours' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Nordic Minimalist Smart Watch Series 7',
    slug: 'nordic-minimalist-smart-watch',
    brand: 'Nordic',
    sku: 'NRD-W7-01',
    category: 'electronics',
    productType: 'smartwatch',
    badge: 'Trending',
    rating: 4.6,
    reviewCount: 89,
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 18950, current: 14999, currency: '₹', taxIncluded: true },
    variants: { colors: [{ name: 'Onyx Black', hex: '#0f172a' }] },
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['1.4-inch AMOLED Screen', 'SpO2 & Heart Rate Monitor', 'IP68 Waterproof'],
    description: 'Scandinavian aesthetic meets advanced biometric tracking.',
    specifications: { General: { 'Display': '1.4 AMOLED' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: false
  },
  {
    id: 'prod-sony-tv',
    name: 'Sony Bravia 55-inch 4K Ultra HD Smart OLED Google TV',
    slug: 'sony-bravia-4k-oled-tv',
    brand: 'Sony',
    sku: 'SNY-BRV-55-OLED',
    category: 'electronics',
    productType: 'tv',
    badge: 'Cinema 4K',
    rating: 4.9,
    reviewCount: 2310,
    stock: 8,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 119990, current: 89990, currency: '₹', taxIncluded: true },
    variants: {},
    variantMatrix: {},
    offers: [
      { id: 'off-sn-1', title: 'No Cost EMI', description: 'No Cost EMI from ₹7,499/month on all major banks', type: 'emi' }
    ],
    emiOptions: [],
    highlights: [
      'Cognitive Processor XR with Acoustic Surface Audio+',
      'Dolby Vision & Dolby Atmos Cinematic Experience',
      'HDMI 2.1 4K 120Hz VRR for PS5 Gaming'
    ],
    description: 'Unmatched pure blacks and vibrant colors with Sony Cognitive Processor XR.',
    specifications: { General: { 'Screen Size': '55 inch', 'Resolution': '4K OLED' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },

  // 4. APPLIANCES
  {
    id: 'prod-chopper-pro',
    name: 'ProChef Master Stainless Steel Electric Food Chopper (650ml)',
    slug: 'prochef-master-food-chopper',
    brand: 'ProChef',
    sku: 'PRC-CHP-650ML',
    category: 'appliances',
    productType: 'chopper',
    badge: 'Kitchen Best',
    rating: 4.7,
    reviewCount: 1840,
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 2999, current: 1499, currency: '₹', taxIncluded: true },
    variants: { capacity: ['500 ml', '650 ml', '1000 ml'] },
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['Pure copper 400W motor', '304 Stainless steel 4-leaf blades'],
    description: 'Effortlessly chop vegetables, nuts, and herbs in seconds.',
    specifications: { General: { 'Capacity': '650 ml' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },
  {
    id: 'prod-lg-washer',
    name: 'LG 8kg 5-Star Inverter Direct Drive Front Load Washing Machine',
    slug: 'lg-front-load-washing-machine',
    brand: 'LG',
    sku: 'LG-WSH-8KG-FL',
    category: 'appliances',
    productType: 'appliance',
    badge: '5 Star Eco',
    rating: 4.8,
    reviewCount: 3100,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 44990, current: 34990, currency: '₹', taxIncluded: true },
    variants: {},
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['AI Direct Drive with 6 Motion Wash Technology', 'Steam Hygiene Wash removes 99.9% allergens', '5 Star Energy Rating'],
    description: 'Intelligent AI DD technology protects clothes while deep cleaning.',
    specifications: { General: { 'Capacity': '8 kg', 'Type': 'Front Load' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },
  {
    id: 'prod-philips-airfryer',
    name: 'Philips Digital Air Fryer XL (4.1 Liter, 1400W RapidAir Tech)',
    slug: 'philips-air-fryer-hd',
    brand: 'Philips',
    sku: 'PHL-AF-XL-41',
    category: 'appliances',
    productType: 'appliance',
    badge: 'Healthy Cook',
    rating: 4.7,
    reviewCount: 4210,
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 12995, current: 8499, currency: '₹', taxIncluded: true },
    variants: {},
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['Up to 90% less oil with RapidAir Technology', '7 Presets touch panel interface'],
    description: 'Healthy fried food with crispy outside and tender inside.',
    specifications: { General: { 'Capacity': '4.1 Liters' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: false
  },

  // 5. FASHION
  {
    id: 'prod-3',
    name: 'Luxe Genuine Leather Crossbody Bag',
    slug: 'luxe-leather-crossbody-bag',
    brand: 'Luxe',
    sku: 'LUX-BAG-01',
    category: 'fashion',
    productType: 'fashion',
    badge: 'Popular',
    rating: 4.9,
    reviewCount: 210,
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 12999, current: 8999, currency: '₹', taxIncluded: true },
    variants: { colors: [{ name: 'Tan Brown', hex: '#b45309' }] },
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['100% full-grain Italian leather', 'Gold-plated hardware'],
    description: 'Handcrafted luxury crossbody bag.',
    specifications: { General: { 'Material': 'Italian Leather' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: false
  },
  {
    id: 'prod-5',
    name: 'Organic Cotton Essential Crewneck T-Shirt',
    slug: 'cotton-essential-crewneck-tshirt',
    brand: 'Nexus Basics',
    sku: 'NEX-TSH-01',
    category: 'fashion',
    productType: 'apparel',
    badge: 'Eco Friendly',
    rating: 4.5,
    reviewCount: 320,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 1499, current: 799, currency: '₹', taxIncluded: true },
    variants: { size: ['S', 'M', 'L', 'XL'] },
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['100% Certified Organic Cotton', 'Pre-shrunk breathable fit'],
    description: 'Daily essential organic cotton tee.',
    specifications: { General: { 'Fabric': 'Organic Cotton' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: false
  },
  {
    id: 'prod-nike-shoes',
    name: 'Nike Air Max Modern Running Shoes',
    slug: 'nike-air-max-sneakers',
    brand: 'Nike',
    sku: 'NKE-AM-MOD-01',
    category: 'fashion',
    productType: 'footwear',
    badge: 'Trending Footwear',
    rating: 4.8,
    reviewCount: 1490,
    stock: 16,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 11995, current: 9995, currency: '₹', taxIncluded: true },
    variants: { size: ['UK 7', 'UK 8', 'UK 9', 'UK 10'] },
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['Max Air cushioning unit for all-day comfort', 'Breathable mesh upper'],
    description: 'Iconic street style combined with ultimate sports cushioning.',
    specifications: { General: { 'Brand': 'Nike', 'Category': 'Running Shoes' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  },

  // 6. HOME & FURNITURE
  {
    id: 'prod-4',
    name: 'Ergonomic Executive Mesh Office Chair',
    slug: 'ergonomic-executive-office-chair',
    brand: 'ErgoPos',
    sku: 'ERG-CHR-01',
    category: 'home',
    productType: 'furniture',
    badge: 'Workplace Choice',
    rating: 4.7,
    reviewCount: 540,
    stock: 9,
    images: [
      'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 18999, current: 12499, currency: '₹', taxIncluded: true },
    variants: {},
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['3D Adjustable Armrests & Lumbar Support', 'Breathable Korean Mesh backrest'],
    description: 'All-day ergonomic comfort for home office productivity.',
    specifications: { General: { 'Material': 'Breathable Mesh' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: false
  },
  {
    id: 'prod-dyson-vacuum',
    name: 'Dyson V15 Detect Cordless Vacuum Cleaner',
    slug: 'dyson-v15-cordless-vacuum',
    brand: 'Dyson',
    sku: 'DYS-V15-DET',
    category: 'home',
    productType: 'appliance',
    badge: 'Smart Cleaning',
    rating: 4.9,
    reviewCount: 980,
    stock: 6,
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1000&q=80'
    ],
    videos: [],
    price: { original: 62900, current: 52900, currency: '₹', taxIncluded: true },
    variants: {},
    variantMatrix: {},
    offers: [],
    emiOptions: [],
    highlights: ['Laser reveals invisible dust on hard floors', 'Piezo sensor counts particles & adjusts power automatically'],
    description: 'Most powerful, intelligent cordless vacuum cleaner from Dyson.',
    specifications: { General: { 'Brand': 'Dyson', 'Run Time': '60 Mins' } },
    reviews: [],
    frequentlyBoughtTogether: [],
    featured: true
  }
];
