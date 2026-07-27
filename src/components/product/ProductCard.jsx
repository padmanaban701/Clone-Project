import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Rate } from 'antd';
import { Chip, Tooltip } from '@mui/material';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { formatCurrency } from '../../utils/formatCurrency';
import { RemoveConfirmationModal } from '../common/RemoveConfirmationModal';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const isFavorite = isInWishlist(product.id);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col overflow-hidden relative">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        
        {/* MUI Chips for Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <Chip
              label={product.badge}
              size="small"
              sx={{
                bgcolor: 'rgba(15, 23, 42, 0.9)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '10px',
                height: '22px',
                textTransform: 'uppercase',
                backdropFilter: 'blur(4px)',
              }}
            />
          )}
          {discountPercent > 0 && (
            <Chip
              label={`-${discountPercent}% OFF`}
              size="small"
              color="error"
              sx={{
                fontWeight: 700,
                fontSize: '10px',
                height: '20px',
              }}
            />
          )}
        </div>

        {/* Wishlist Button with MUI Tooltip */}
        <Tooltip title={isFavorite ? 'Remove from wishlist' : 'Save to wishlist'} placement="left">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (isFavorite) {
                setShowRemoveModal(true);
              } else {
                toggleWishlist(product);
              }
            }}
            className={`absolute top-3 right-3 z-10 p-2.5 rounded-full transition-all duration-200 shadow-md ${
              isFavorite
                ? 'bg-red-500 text-white scale-110'
                : 'bg-white/80 hover:bg-white text-slate-600 hover:text-red-500 backdrop-blur-md'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </Tooltip>

        {/* Product Image */}
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={product.images ? product.images[0] : ''}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Card Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600">
            {product.category}
          </span>

          <Link to={`/product/${product.slug}`} className="block mt-1">
            <h3 className="text-sm font-bold text-slate-900 line-clamp-2 hover:text-indigo-600 transition-colors leading-snug h-10">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating & Pricing Section */}
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          {/* Rating Row */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <Rate disabled allowHalf defaultValue={product.rating} style={{ fontSize: 12, color: '#f59e0b' }} />
              <span className="text-xs font-bold text-amber-600">{product.rating}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-semibold">({product.reviewCount})</span>
          </div>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg font-black text-slate-900 tracking-tight">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through font-medium">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Dedicated Action Buttons inside Card Body */}
          <div className="flex items-center gap-2 pt-1">
            <Link
              to={`/product/${product.slug}`}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <Eye className="w-4 h-4 text-slate-600" />
              <span>Quick View</span>
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-indigo-200 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>

      <RemoveConfirmationModal
        isOpen={showRemoveModal}
        onClose={() => setShowRemoveModal(false)}
        onConfirm={() => toggleWishlist(product)}
        title="Remove Item from Wishlist"
        description="Are you sure you want to remove"
        itemName={product.name}
      />

    </div>
  );
};
