import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductDetailQuery } from '../hooks/useProductQueries';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { formatCurrency } from '../utils/formatCurrency';
import { Star, ShieldCheck, Truck, RotateCcw, Heart, ShoppingBag, Plus, Minus, Check, ChevronRight } from 'lucide-react';
import { Breadcrumbs, Typography, Chip } from '@mui/material';
import { Rate } from 'antd';
import * as RadixTabs from '@radix-ui/react-tabs';
import { toast } from 'sonner';
import { RemoveConfirmationModal } from '../components/common/RemoveConfirmationModal';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const { data: product = null, isLoading } = useProductDetailQuery(slug);

  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showRemoveWishlistModal, setShowRemoveWishlistModal] = useState(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images ? product.images[0] : '');
      setSelectedColor(product.colors ? product.colors[0] : '');
      setSelectedSize(product.sizes ? product.sizes[0] : '');
    }
  }, [product]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center animate-pulse">
        <div className="w-1/2 h-8 bg-slate-200 rounded mx-auto mb-4" />
        <div className="w-1/3 h-6 bg-slate-200 rounded mx-auto" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">The requested product does not exist.</p>
        <Link to="/shop" className="mt-6 inline-block bg-indigo-600 text-white font-bold text-xs py-2.5 px-6 rounded-full">
          Back to Shop
        </Link>
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* MUI Breadcrumbs */}
      <Breadcrumbs separator={<ChevronRight className="w-3.5 h-3.5 text-slate-400" />}>
        <Link to="/" className="text-xs font-medium text-slate-500 hover:text-indigo-600">Home</Link>
        <Link to="/shop" className="text-xs font-medium text-slate-500 hover:text-indigo-600">Shop</Link>
        <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>
          {product.name}
        </Typography>
      </Breadcrumbs>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 relative">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <Chip label={product.badge} color="primary" sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '10px' }} />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-indigo-600 scale-95' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info & Options */}
        <div className="space-y-6">
          
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 leading-tight">
              {product.name}
            </h1>

            {/* AntD Rating */}
            <div className="flex items-center gap-2 mt-3">
              <Rate disabled allowHalf defaultValue={product.rating} style={{ fontSize: 16, color: '#f59e0b' }} />
              <span className="text-xs font-bold text-slate-900">{product.rating}</span>
              <span className="text-xs text-slate-400">({product.reviewCount} ratings)</span>
            </div>
          </div>

          {/* Pricing & Stock */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <Chip
              label={`In Stock (${product.stock} units)`}
              color="success"
              variant="outlined"
              sx={{ fontWeight: 800, fontSize: '11px' }}
            />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2">
                Color Option: <span className="text-slate-500 font-normal">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      selectedColor === col
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-slate-900 mb-2">
                Select Size: <span className="text-slate-500 font-normal">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-10 h-10 rounded-xl text-xs font-bold border transition-all flex items-center justify-center ${
                      selectedSize === sz
                        ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-bold text-sm text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  if (isFavorite) {
                    setShowRemoveWishlistModal(true);
                  } else {
                    toggleWishlist(product);
                  }
                }}
                className={`sm:hidden p-3.5 rounded-xl border transition-all ${
                  isFavorite ? 'border-red-500 bg-red-50 text-red-500' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            <button
              onClick={() => addToCart(product, quantity, selectedColor, selectedSize)}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart ({formatCurrency(product.price * quantity)})</span>
            </button>

            <button
              onClick={() => {
                if (isFavorite) {
                  setShowRemoveWishlistModal(true);
                } else {
                  toggleWishlist(product);
                }
              }}
              className={`hidden sm:flex p-3.5 rounded-xl border transition-all ${
                isFavorite ? 'border-red-500 bg-red-50 text-red-500' : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Radix UI Tabs Component */}
          <div className="pt-6 border-t border-slate-200">
            <RadixTabs.Root defaultValue="specs" className="flex flex-col">
              <RadixTabs.List className="flex border-b border-slate-200 mb-4 gap-4 sm:gap-6 overflow-x-auto pb-1">
                <RadixTabs.Trigger
                  value="specs"
                  className="pb-2 text-xs font-bold text-slate-500 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 transition-all shrink-0"
                >
                  Features & Specs (Radix UI Tabs)
                </RadixTabs.Trigger>
                <RadixTabs.Trigger
                  value="reviews"
                  className="pb-2 text-xs font-bold text-slate-500 data-[state=active]:text-indigo-600 data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 transition-all shrink-0"
                >
                  Customer Reviews ({product.reviewCount})
                </RadixTabs.Trigger>
              </RadixTabs.List>

              <RadixTabs.Content value="specs" className="space-y-3 text-xs text-slate-700">
                {product.specs && Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="font-bold text-slate-900">{key}</span>
                    <span className="text-slate-600">{val}</span>
                  </div>
                ))}
              </RadixTabs.Content>

              <RadixTabs.Content value="reviews" className="space-y-4">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-3xl font-black text-slate-900">{product.rating}</span>
                  <div>
                    <Rate disabled allowHalf defaultValue={product.rating} style={{ fontSize: 16, color: '#f59e0b' }} />
                    <p className="text-xs text-slate-500 mt-0.5">Based on {product.reviewCount} verified buyer ratings</p>
                  </div>
                </div>
              </RadixTabs.Content>
            </RadixTabs.Root>
          </div>

        </div>
      </div>

      <RemoveConfirmationModal
        isOpen={showRemoveWishlistModal}
        onClose={() => setShowRemoveWishlistModal(false)}
        onConfirm={() => toggleWishlist(product)}
        title="Remove Item from Wishlist"
        description="Are you sure you want to remove"
        itemName={product.name}
      />

    </div>
  );
};
