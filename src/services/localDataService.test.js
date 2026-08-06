import { describe, it, expect, beforeEach } from 'vitest';
import { localDataService } from './localDataService';

describe('localDataService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('fetches all mock products by default', async () => {
    const products = await localDataService.getProducts();
    expect(products.length).toBeGreaterThan(0);
  });

  it('filters products by category correctly', async () => {
    const electronics = await localDataService.getProducts({ category: 'Electronics' });
    expect(electronics.every(p => p.category.toLowerCase() === 'electronics')).toBe(true);
  });

  it('filters products by search query', async () => {
    const results = await localDataService.getProducts({ searchQuery: 'headphone' });
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name.toLowerCase()).toContain('headphone');
  });

  it('validates promo coupon codes', async () => {
    const validResult = await localDataService.validateCoupon('PROMO10');
    expect(validResult.valid).toBe(true);
    expect(validResult.promo.value).toBe(10);

    const invalidResult = await localDataService.validateCoupon('INVALIDCODE');
    expect(invalidResult.valid).toBe(false);
  });

  it('places an order and persists it to localStorage', async () => {
    const mockOrderData = {
      items: [{ id: 'p1', name: 'Product 1', price: 100, quantity: 1 }],
      subtotal: 100,
      total: 100
    };

    const newOrder = await localDataService.placeOrder(mockOrderData);
    expect(newOrder.orderId).toBeDefined();
    expect(newOrder.status).toBe('Processing');

    const ordersHistory = await localDataService.getOrders();
    expect(ordersHistory.length).toBe(1);
    expect(ordersHistory[0].orderId).toBe(newOrder.orderId);
  });
});
