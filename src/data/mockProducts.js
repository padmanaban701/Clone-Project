export const mockProducts = [
  {
    id: 'prod-1',
    name: 'Aura Studio Wireless Noise-Canceling Headphones',
    slug: 'aura-studio-wireless-headphones',
    category: 'electronics',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviewCount: 142,
    badge: 'Bestseller',
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Space Gray', 'Matte Black', 'Silver Pearl'],
    description: 'Immerse yourself in high-fidelity audio with active noise cancellation, custom 40mm drivers, and up to 35 hours of playback on a single charge.',
    features: [
      'Active Noise Cancellation (ANC) with Transparency Mode',
      'Custom tuned 40mm neodymium dynamic drivers',
      'Up to 35 hours battery life with fast-charging via USB-C',
      'Ergonomic memory-foam ear cushions'
    ],
    specs: {
      Connectivity: 'Bluetooth 5.3 & 3.5mm Audio',
      BatteryLife: '35 Hours (ANC ON)',
      Weight: '250g',
      Warranty: '2 Years Manufacturer'
    },
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Nordic Minimalist Smart Watch Series 7',
    slug: 'nordic-minimalist-smart-watch',
    category: 'accessories',
    price: 189.50,
    originalPrice: 220.00,
    rating: 4.6,
    reviewCount: 89,
    badge: 'Trending',
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Onyx Black', 'Rose Gold', 'Brushed Steel'],
    description: 'Sleek Scandinavian aesthetic meets advanced biometric tracking. Monitor heart rate, sleep quality, blood oxygen, and workout stats with dynamic AMOLED display.',
    features: [
      '1.4-inch Sapphire Crystal AMOLED Display',
      'IP68 Water Resistance up to 50 meters',
      'Heart Rate, SpO2, Sleep & Stress Monitoring',
      '7-day continuous battery performance'
    ],
    specs: {
      Display: '1.4" AMOLED 454x454',
      WaterResistance: '5 ATM (50m)',
      Sensors: 'Optical HR, SpO2, Accelerometer',
      Compatibility: 'iOS 14+ & Android 9.0+'
    },
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Urban Explorer Waterproof Backpack 25L',
    slug: 'urban-explorer-backpack-25l',
    category: 'accessories',
    price: 98.00,
    originalPrice: 125.00,
    rating: 4.9,
    reviewCount: 215,
    badge: 'Top Rated',
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Charcoal Gray', 'Midnight Navy', 'Olive Green'],
    description: 'Designed for daily commuters and weekend adventurers alike. Features padded 16" laptop sleeve, waterproof CORDURA® fabric, and hidden anti-theft pocket.',
    features: [
      'Weather-resistant 900D CORDURA® construction',
      'Dedicated padded sleeve fits up to 16" MacBook Pro',
      'Integrated USB charging pass-through port',
      'Luggage strap for effortless travel'
    ],
    specs: {
      Capacity: '25 Liters',
      Dimensions: '48 x 32 x 18 cm',
      Material: 'Waterproof CORDURA® Nylon',
      LaptopSleeve: 'Up to 16 inches'
    },
    featured: true
  },
  {
    id: 'prod-4',
    name: 'Classic Merino Wool Oversized Sweater',
    slug: 'classic-merino-wool-sweater',
    category: 'apparel',
    price: 119.00,
    originalPrice: 145.00,
    rating: 4.7,
    reviewCount: 64,
    badge: 'New Arrival',
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Oatmeal Cream', 'Charcoal', 'Forest Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Crafted from 100% extra-fine Australian Merino wool. Delivers unparalleled soft warmth, breathable comfort, and effortless relaxed tailoring.',
    features: [
      '100% Extra-Fine Merino Wool yarn',
      'Ribbed knit crew neck, cuffs, and hem',
      'Naturally temperature-regulating & odor-resistant',
      'Ethically sourced & sustainable wool'
    ],
    specs: {
      Material: '100% Australian Merino Wool',
      Fit: 'Relaxed / Oversized',
      Care: 'Hand wash cold or dry clean'
    },
    featured: false
  },
  {
    id: 'prod-5',
    name: 'AcousticPulse Portable Bluetooth Speaker',
    slug: 'acousticpulse-portable-speaker',
    category: 'electronics',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.5,
    reviewCount: 96,
    badge: 'Sale',
    stock: 42,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Graphite Black', 'Ocean Blue', 'Crimson Red'],
    description: '360° room-filling sound with punchy bass, IP67 dust and waterproof rating, and custom RGB light rings that pulse to your playlist beats.',
    features: [
      'Dual passive radiators for deep low-end response',
      'IP67 dustproof and waterproof rated',
      'Up to 20 hours continuous audio playback',
      'Stereo pairing mode connect two units together'
    ],
    specs: {
      OutputPower: '30W RMS',
      BatteryLife: '20 Hours',
      WaterproofRating: 'IP67',
      Weight: '680g'
    },
    featured: true
  },
  {
    id: 'prod-6',
    name: 'Lumina Ceramic Dimmable Desk Lamp',
    slug: 'lumina-ceramic-desk-lamp',
    category: 'home',
    price: 79.00,
    originalPrice: 95.00,
    rating: 4.8,
    reviewCount: 52,
    badge: 'Eco Friendly',
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Sandstone Beige', 'Matte Sage', 'Terracotta'],
    description: 'Handcrafted ceramic base paired with an energy-efficient dimmable LED bulb. Warm ambient lighting designed to elevate modern study and bedroom spaces.',
    features: [
      'Hand-thrown textured ceramic base',
      'Touch-sensitive 3-stage dimming control',
      'Soft 2700K warm glow LED included (CRI 90+)',
      'Fabric braided power cord'
    ],
    specs: {
      BaseMaterial: 'Glazed Ceramic',
      BulbType: 'LED E27 6W Warm White',
      Dimensions: '34cm Height x 22cm Width',
      CordLength: '1.8 Meters'
    },
    featured: false
  },
  {
    id: 'prod-7',
    name: 'Vanguard Polarized Aviator Sunglasses',
    slug: 'vanguard-polarized-aviators',
    category: 'accessories',
    price: 135.00,
    originalPrice: 160.00,
    rating: 4.7,
    reviewCount: 78,
    badge: 'Popular',
    stock: 28,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Gold / Brown Lens', 'Black / G-15 Green', 'Silver / Mirror Blue'],
    description: 'Timeless tear-drop silhouette engineered with ultralight titanium frames and HD polarized TAC lenses offering 100% UV400 protection.',
    features: [
      'HD Polarized 9-layer TAC anti-glare lenses',
      '100% UV400 UVA & UVB protection',
      'Flexible Japanese titanium alloy frame',
      'Adjustable silicone anti-slip nose pads'
    ],
    specs: {
      FrameMaterial: 'Beta-Titanium Alloy',
      LensTechnology: 'Polarized TAC',
      UVProtection: 'UV400 (100%)',
      Includes: 'Leather hard case & micro-fiber cloth'
    },
    featured: false
  },
  {
    id: 'prod-8',
    name: 'Artisan Pour-Over Coffee Dripper Set',
    slug: 'artisan-pour-over-coffee-set',
    category: 'home',
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviewCount: 110,
    badge: 'Bestseller',
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Matte Black Steel', 'Walnut Wood Stand'],
    description: 'Master the perfect brew. Includes heat-resistant borosilicate glass carafe, precision spiral groove dripper cone, and stainless steel filter.',
    features: [
      '600ml Borosilicate glass carafe (4 cups)',
      'Dual-layer reusable stainless steel mesh filter',
      'Natural walnut wood collar & silicone grip',
      'BPA-free & dishwasher safe glass'
    ],
    specs: {
      Capacity: '600 ml (20 oz)',
      Material: 'Borosilicate Glass & 304 Stainless Steel',
      Dimensions: '21cm x 13cm'
    },
    featured: true
  },
  {
    id: 'prod-9',
    name: 'Pro-Glide Mechanical Gaming Keyboard',
    slug: 'pro-glide-mechanical-keyboard',
    category: 'electronics',
    price: 159.00,
    originalPrice: 189.00,
    rating: 4.8,
    reviewCount: 184,
    badge: 'Gamer Choice',
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Stealth Black', 'Retro White'],
    description: 'Hot-swappable mechanical keyboard featuring lubricated linear switches, sound-dampening gasket mount structure, and customizable per-key RGB.',
    features: [
      'Hot-swappable 5-pin PCB layout',
      'Gasket mounted with dual-layer sound foam',
      'Doubleshot PBT cherry profile keycaps',
      'Tri-mode connectivity (2.4GHz, Bluetooth 5.0, Type-C)'
    ],
    specs: {
      Layout: '75% Compact (82 Keys)',
      Switches: 'Pre-lubed Red Linear Switches',
      Battery: '4000 mAh Rechargeable'
    },
    featured: false
  },
  {
    id: 'prod-10',
    name: 'Organic Cotton Denim Jacket',
    slug: 'organic-cotton-denim-jacket',
    category: 'apparel',
    price: 125.00,
    originalPrice: 150.00,
    rating: 4.6,
    reviewCount: 45,
    badge: 'Sustainable',
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Vintage Wash Blue', 'Washed Indigo', 'Pitch Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A modern take on the iconic trucker jacket. Made from 100% GOTS certified organic denim with durable copper hardware.',
    features: [
      '100% GOTS Certified Organic Cotton',
      'Heavyweight 14oz rigid denim fabric',
      'Dual chest button flap pockets & side entry hand pockets',
      'Reinforced double-needle stitching'
    ],
    specs: {
      FabricWeight: '14 oz Denim',
      Hardware: 'Recycled Copper Buttons',
      Origin: 'Ethically Manufactured'
    },
    featured: false
  },
  {
    id: 'prod-11',
    name: 'Ultra-Quiet Smart Air Purifier HEPA H13',
    slug: 'ultra-quiet-smart-air-purifier',
    category: 'home',
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.9,
    reviewCount: 130,
    badge: 'Top Seller',
    stock: 16,
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Pure White', 'Space Gray'],
    description: 'Captures 99.97% of airborne allergens, pollen, dust, and smoke particles. Real-time air quality sensor automatically adjusts fan speeds silently.',
    features: [
      '3-stage filtration: Pre-filter, True HEPA H13, Activated Carbon',
      'Covers room areas up to 450 sq ft (CADR 230 m³/h)',
      'Sleep mode operates at a whisper quiet 22dB',
      'Smart WiFi app control & Google Assistant support'
    ],
    specs: {
      FilterType: 'True HEPA H13 Grade',
      CoverageArea: '450 sq ft',
      NoiseLevel: '22dB - 50dB'
    },
    featured: false
  },
  {
    id: 'prod-12',
    name: 'Ergonomic Breathable Mesh Office Chair',
    slug: 'ergonomic-mesh-office-chair',
    category: 'home',
    price: 289.00,
    originalPrice: 349.00,
    rating: 4.7,
    reviewCount: 98,
    badge: 'Workplace Essential',
    stock: 10,
    images: [
      'https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['All Black', 'Cool Gray / Silver Base'],
    description: 'Engineered for all-day lumbar support. Features 3D adjustable armrests, dynamic mesh backrest, recline lock, and pneumatic seat height adjustment.',
    features: [
      'Adaptive dynamic lumbar support pillow',
      'Heavy-duty aluminum alloy 5-star swivel base',
      'BIFMA certified Class-4 gas lift cylinder',
      'Silent smooth-rolling polyurethane casters'
    ],
    specs: {
      WeightCapacity: '150 kg (330 lbs)',
      ReclineAngle: '90° - 135°',
      Warranty: '3 Years Warranty'
    },
    featured: false
  }
];
