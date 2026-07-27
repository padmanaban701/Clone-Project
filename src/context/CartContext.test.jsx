import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { CartProvider, useCart } from './CartContext';

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe('CartContext & useCart hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('starts with an empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.cartItems).toEqual([]);
    expect(result.current.itemCount).toBe(0);
    expect(result.current.subtotal).toBe(0);
  });

  it('adds items to the cart and calculates subtotal correctly', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = { id: 'p1', name: 'Test Product', price: 50, colors: ['Black'], sizes: ['M'] };

    act(() => {
      result.current.addToCart(product, 2);
    });

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.itemCount).toBe(2);
    expect(result.current.subtotal).toBe(100);
  });

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = { id: 'p1', name: 'Test Product', price: 50, colors: ['Black'], sizes: ['M'] };

    act(() => {
      result.current.addToCart(product, 1);
    });

    expect(result.current.cartItems.length).toBe(1);

    act(() => {
      result.current.removeFromCart('p1', 'Black', 'M');
    });

    expect(result.current.cartItems.length).toBe(0);
    expect(result.current.itemCount).toBe(0);
  });

  it('clears all items from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = { id: 'p1', name: 'Test Product', price: 50, colors: ['Black'], sizes: ['M'] };

    act(() => {
      result.current.addToCart(product, 1);
      result.current.clearCart();
    });

    expect(result.current.cartItems).toEqual([]);
  });
});
