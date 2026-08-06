import { mockProducts } from '../data/mockProducts';
import { mockCategories } from '../data/mockCategories';
import { mockPromos } from '../data/mockPromos';
import { getItem, setItem } from '../utils/storage';

const ORDERS_KEY = 'ecom_orders_history';

const delay = (ms = 150) => new Promise(resolve => setTimeout(resolve, ms));

export const localDataService = {
  async getProducts({
    category = 'all',
    searchQuery = '',
    priceRange = [0, 500000],
    sortBy = 'featured',
    minRating = 0
  } = {}) {
    await delay(150);

    let filtered = [...mockProducts];

    if (category && category !== 'all') {
      const targetCat = category.toLowerCase();
      filtered = filtered.filter(p => {
        const cat = p.category.toLowerCase();
        if (cat === targetCat) return true;
        if (targetCat === 'apparel' && cat === 'fashion') return true;
        if (targetCat === 'fashion' && cat === 'apparel') return true;
        return false;
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        p => p.name.toLowerCase().includes(q) ||
             (p.description && p.description.toLowerCase().includes(q)) ||
             p.category.toLowerCase().includes(q) ||
             (p.badge && p.badge.toLowerCase().includes(q)) ||
             (p.brand && p.brand.toLowerCase().includes(q))
      );
    }

    filtered = filtered.filter(p => {
      const numericPrice = typeof p.price === 'object' ? p.price.current : p.price;
      return numericPrice >= (priceRange[0] || 0) && numericPrice <= (priceRange[1] || 1000000);
    });

    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (typeof a.price === 'object' ? a.price.current : a.price) - (typeof b.price === 'object' ? b.price.current : b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (typeof b.price === 'object' ? b.price.current : b.price) - (typeof a.price === 'object' ? a.price.current : a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.badge === 'New Launch' || b.badge === 'New Arrival' ? 1 : -1));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  },

  async getProductById(idOrSlug) {
    await delay(100);
    const key = String(idOrSlug || '').toLowerCase();
    let product = mockProducts.find(
      p => p.id.toLowerCase() === key || p.slug.toLowerCase() === key
    );

    if (!product) {
      product = mockProducts.find(
        p => key.includes(p.slug.toLowerCase()) || p.slug.toLowerCase().includes(key)
      ) || mockProducts[0];
    }

    // Normalize price object
    const normalizedPrice = typeof product.price === 'object'
      ? product.price
      : { current: product.price, original: product.originalPrice || product.price, currency: '$', taxIncluded: true };

    return {
      ...product,
      brand: product.brand || 'Nexus Premium',
      sku: product.sku || `NEX-${product.id.toUpperCase()}`,
      videos: product.videos || [],
      variants: product.variants || {
        colors: product.colors ? product.colors.map(c => ({ name: c, image: product.images?.[0] || '' })) : []
      },
      variantMatrix: product.variantMatrix || {},
      price: normalizedPrice,
      offers: product.offers || [],
      emiOptions: product.emiOptions || [],
      highlights: product.highlights || product.features || [],
      specifications: product.specifications || product.specs || {},
      reviews: product.reviews || [],
      frequentlyBoughtTogether: product.frequentlyBoughtTogether || []
    };
  },

  async getCategories() {
    await delay(100);
    return mockCategories;
  },

  async getFeaturedProducts() {
    await delay(150);
    return mockProducts.filter(p => p.featured);
  },

  async validateCoupon(code) {
    await delay(100);
    if (!code) return { valid: false, message: 'Please enter a coupon code' };

    const promo = mockPromos.find(p => p.code.toUpperCase() === code.trim().toUpperCase());
    if (promo) {
      return { valid: true, promo, message: `Coupon "${promo.code}" applied!` };
    }
    return { valid: false, message: 'Invalid coupon code' };
  },

  async placeOrder(orderData) {
    await delay(300);
    const existingOrders = getItem(ORDERS_KEY, []);
    const newOrder = {
      orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: 'Processing',
      ...orderData
    };

    const updatedOrders = [newOrder, ...existingOrders];
    setItem(ORDERS_KEY, updatedOrders);
    return newOrder;
  },

  async getOrders() {
    await delay(100);
    return getItem(ORDERS_KEY, []);
  }
};
