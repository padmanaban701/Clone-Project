/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from 'react';
import { getItem, setItem } from '../utils/storage';
import { toast } from 'sonner';

export const CartContext = createContext();

const CART_STORAGE_KEY = 'ecom_cart_items';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getItem(CART_STORAGE_KEY, []));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState(null);

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    setItem(CART_STORAGE_KEY, cartItems);
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product, quantity = 1, selectedColor = null, selectedSize = null) => {
    setCartItems(prevItems => {
      const color = selectedColor || (product.colors ? product.colors[0] : null);
      const size = selectedSize || (product.sizes ? product.sizes[0] : null);

      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && item.color === color && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images ? product.images[0] : '',
            category: product.category,
            color,
            size,
            stock: product.stock || 99,
            quantity
          }
        ];
      }
    });

    toast.success(`Added "${product.name}" to cart`, {
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true)
      }
    });
  };

  // Remove single item from cart
  const removeFromCart = (id, color, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.color === color && item.size === size)));
    toast.info('Item removed from cart');
  };

  // Update item quantity
  const updateQuantity = (id, color, size, delta) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id && item.color === color && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    setAppliedPromo(null);
  };

  // Calculations
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percentage') {
      discount = (subtotal * appliedPromo.value) / 100;
    } else if (appliedPromo.type === 'fixed') {
      discount = Math.min(subtotal, appliedPromo.value);
    }
  }

  // Free shipping over $100
  const freeShippingThreshold = 100;
  const shipping = subtotal >= freeShippingThreshold || (appliedPromo && appliedPromo.type === 'shipping') ? 0 : 9.99;

  const total = Math.max(0, subtotal - discount + (cartItems.length > 0 ? shipping : 0));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        discount,
        shipping,
        total,
        freeShippingThreshold,
        appliedPromo,
        setAppliedPromo
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

