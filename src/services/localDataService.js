import { mockProducts } from '../data/mockProducts';
import { mockCategories } from '../data/mockCategories';
import { mockPromos } from '../data/mockPromos';
import { getItem, setItem } from '../utils/storage';

const ORDERS_KEY = 'ecom_orders_history';

// Helper to simulate realistic network delay
const delay = (ms = 250) => new Promise(resolve => setTimeout(resolve, ms));

export const localDataService = {
  // Fetch all products with filter, search, sort, and price range options
  async getProducts({
    category = 'all',
    searchQuery = '',
    priceRange = [0, 500],
    sortBy = 'featured',
    minRating = 0
  } = {}) {
    await delay(200);

    let filtered = [...mockProducts];

    // Filter by Category
    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by Search Query (Name, Description, Tags)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        p => p.name.toLowerCase().includes(q) ||
             p.description.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             (p.badge && p.badge.toLowerCase().includes(q))
      );
    }

    // Filter by Price Range
    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by Rating
    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Sort Products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.badge === 'New Arrival' ? 1 : -1));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  },

  // Fetch product by ID or Slug
  async getProductById(idOrSlug) {
    await delay(150);
    return mockProducts.find(p => p.id === idOrSlug || p.slug === idOrSlug) || null;
  },

  // Fetch categories
  async getCategories() {
    await delay(100);
    return mockCategories;
  },

  // Fetch featured products
  async getFeaturedProducts() {
    await delay(150);
    return mockProducts.filter(p => p.featured);
  },

  // Validate discount coupon code
  async validateCoupon(code) {
    await delay(150);
    if (!code) return { valid: false, message: 'Please enter a coupon code' };

    const promo = mockPromos.find(p => p.code.toUpperCase() === code.trim().toUpperCase());
    if (promo) {
      return { valid: true, promo, message: `Coupon "${promo.code}" applied!` };
    }
    return { valid: false, message: 'Invalid coupon code' };
  },

  // Place a new order into localStorage
  async placeOrder(orderData) {
    await delay(400);
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

  // Get order history
  async getOrders() {
    await delay(150);
    return getItem(ORDERS_KEY, []);
  }
};
