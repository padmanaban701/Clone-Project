import React, { createContext, useContext, useState, useEffect } from 'react';
import { getItem, setItem } from '../utils/storage';
import { toast } from 'sonner';

const WishlistContext = createContext();

const WISHLIST_STORAGE_KEY = 'ecom_wishlist_items';

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => getItem(WISHLIST_STORAGE_KEY, []));

  useEffect(() => {
    setItem(WISHLIST_STORAGE_KEY, wishlist);
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        toast.info(`Removed "${product.name}" from wishlist`);
        return prev.filter(item => item.id !== product.id);
      } else {
        toast.success(`Saved "${product.name}" to wishlist`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        wishlistCount: wishlist.length
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
