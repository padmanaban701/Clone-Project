import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProductDetailQuery, useProductsQuery } from '../hooks/useProductQueries';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { Heart, ShoppingBag, Plus, Minus, ChevronRight, Share2, Zap, ArrowLeft } from 'lucide-react';
import { Breadcrumbs, Typography } from '@mui/material';

import { ProductGallery } from '../components/product/details/ProductGallery';
import { TrustAssuranceCard } from '../components/product/details/TrustAssuranceCard';
import { ProductInfo } from '../components/product/details/ProductInfo';
import { VariantSelector } from '../components/product/details/VariantSelector';
import { PriceSection } from '../components/product/details/PriceSection';
import { OfferSection } from '../components/product/details/OfferSection';
import { EMISection } from '../components/product/details/EMISection';
import { DeliverySection } from '../components/product/details/DeliverySection';
import { ProductHighlights } from '../components/product/details/ProductHighlights';
import { ProductDescription } from '../components/product/details/ProductDescription';
import { ProductSpecifications } from '../components/product/details/ProductSpecifications';
import { ReviewsSection } from '../components/product/details/ReviewsSection';
import { FrequentlyBoughtTogether } from '../components/product/details/FrequentlyBoughtTogether';
import { RelatedProducts } from '../components/product/details/RelatedProducts';
import { ShareModal } from '../components/product/details/modals/ShareModal';
import { RemoveConfirmationModal } from '../components/common/RemoveConfirmationModal';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: product = null, isLoading } = useProductDetailQuery(slug);
  const { data: allProducts = [] } = useProductsQuery({ category: product?.category || 'all' });

  const [selectedVariants, setSelectedVariants] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showRemoveWishlistModal, setShowRemoveWishlistModal] = useState(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Compute active variant matrix lookup
  const activeVariantInfo = useMemo(() => {
    if (!product) return null;
    const matrixKey = Object.values(selectedVariants).join('-');
    return product.variantMatrix?.[matrixKey] || null;
  }, [product, selectedVariants]);

  // Derived reactive attributes based on variant selection
  const currentPriceObj = useMemo(() => {
    if (!product) return { current: 0, original: 0, currency: '₹', taxIncluded: true };
    const basePrice = typeof product.price === 'object' ? product.price : { current: product.price, original: product.originalPrice || product.price, currency: '₹', taxIncluded: true };
    if (activeVariantInfo) {
      return {
        ...basePrice,
        current: activeVariantInfo.price,
        original: activeVariantInfo.originalPrice || activeVariantInfo.price
      };
    }
    return basePrice;
  }, [product, activeVariantInfo]);

  const currentSku = activeVariantInfo?.sku || product?.sku || 'NEX-001';
  const currentStock = activeVariantInfo?.stock ?? product?.stock ?? 10;
  const currentDelivery = activeVariantInfo?.delivery || 'Express Delivery by Tomorrow, 11 AM';

  const handleSelectVariant = (categoryKey, value) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [categoryKey]: value
    }));
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(
      {
        id: product.id,
        name: `${product.name} ${Object.values(selectedVariants).join(' ')}`.trim(),
        price: currentPriceObj.current,
        originalPrice: currentPriceObj.original,
        images: product.images,
        category: product.category,
        sku: currentSku,
        stock: currentStock
      },
      quantity,
      selectedVariants.color || null,
      selectedVariants.size || selectedVariants.storage || null
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center animate-pulse space-y-6">
        <div className="w-1/3 h-8 bg-slate-200 rounded-xl mx-auto" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-square bg-slate-200 rounded-3xl" />
          <div className="space-y-4">
            <div className="w-3/4 h-8 bg-slate-200 rounded-xl" />
            <div className="w-1/2 h-6 bg-slate-200 rounded-xl" />
            <div className="w-full h-24 bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-black text-slate-900">Product Not Found</h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">The requested product could not be located in our catalog.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
      </div>
    );
  }

  const isFavorite = isInWishlist(product.id);
  const relatedProductsList = allProducts.filter((p) => p.id !== product.id);

  return (
    <div className="pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* MUI Breadcrumbs */}
        <Breadcrumbs separator={<ChevronRight className="w-3.5 h-3.5 text-slate-400" />}>
          <Link to="/" className="text-xs font-medium text-slate-500 hover:text-indigo-600">Home</Link>
          <Link to="/shop" className="text-xs font-medium text-slate-500 hover:text-indigo-600">Shop</Link>
          <span className="text-xs font-medium text-slate-500 capitalize">{product.category}</span>
          <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>
            {product.name}
          </Typography>
        </Breadcrumbs>

        {/* Main Product Layout (2 Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* Left Column: Product Gallery & Trust Badges (Sticky on Desktop) */}
          <div className="lg:col-span-6 lg:sticky lg:top-36 space-y-6">
            <ProductGallery
              images={product.images || []}
              videos={product.videos || []}
              name={product.name}
              badge={product.badge}
            />

            {/* Merchant Trust & Buyer Assurance Card (Fills left column space) */}
            <TrustAssuranceCard brand={product.brand} />
          </div>

          {/* Right Column: Product Info & Purchase Options */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Info (Brand, Title, Rating, Stock, SKU) */}
            <ProductInfo
              brand={product.brand}
              name={product.name}
              rating={product.rating}
              reviewCount={product.reviewCount}
              sku={currentSku}
              stock={currentStock}
            />

            {/* Pricing Section */}
            <PriceSection price={currentPriceObj} />

            {/* Dynamic Variant Selector */}
            <VariantSelector
              variants={product.variants}
              selectedVariants={selectedVariants}
              onSelectVariant={handleSelectVariant}
            />

            {/* Available Offers Section */}
            <OfferSection offers={product.offers} />

            {/* EMI Options */}
            <EMISection emiOptions={product.emiOptions} currentPrice={currentPriceObj.current} />

            {/* Delivery Pincode Checker */}
            <DeliverySection deliveryEstimate={currentDelivery} />

            {/* Quantity Selector & Action Buttons (Desktop/Tablet) */}
            <div className="hidden md:flex flex-col gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2.5 flex-wrap xl:flex-nowrap">
                
                {/* Quantity Stepper */}
                <div className="flex items-center border border-slate-200 rounded-2xl bg-slate-50 h-12 px-1.5 shrink-0 shadow-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease Quantity"
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 font-extrabold text-sm text-slate-900 min-w-[28px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase Quantity"
                    className="w-8 h-8 flex items-center justify-center hover:bg-slate-200 text-slate-700 rounded-xl transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={currentStock <= 0}
                  className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-extrabold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 transition-all hover:scale-[1.01] active:scale-95 whitespace-nowrap px-4 min-w-[140px]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                {/* Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  disabled={currentStock <= 0}
                  className="flex-1 h-12 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white font-extrabold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-200 transition-all hover:scale-[1.01] active:scale-95 whitespace-nowrap px-4 min-w-[130px]"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Buy Now</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => {
                    if (isFavorite) {
                      setShowRemoveWishlistModal(true);
                    } else {
                      toggleWishlist(product);
                    }
                  }}
                  aria-label="Toggle Wishlist"
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all shrink-0 ${
                    isFavorite ? 'border-red-500 bg-red-50 text-red-500' : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>

                {/* Share Button */}
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  aria-label="Share Product"
                  className="w-12 h-12 rounded-2xl border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center transition-all shrink-0"
                  title="Share Product"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Key Product Highlights Bullet Grid */}
            <ProductHighlights highlights={product.highlights} />

          </div>
        </div>

        {/* Detailed Tabs / Accordions Section */}
        <div className="space-y-8 pt-6 border-t border-slate-200">
          
          {/* Product Description */}
          <ProductDescription description={product.description} />

          {/* Grouped Specifications */}
          <ProductSpecifications specifications={product.specifications} />

          {/* Frequently Bought Together Bundle */}
          <FrequentlyBoughtTogether mainProduct={product} bundleItems={product.frequentlyBoughtTogether} />

          {/* Reviews & Ratings */}
          <ReviewsSection rating={product.rating} reviewCount={product.reviewCount} reviews={product.reviews} />

          {/* Related / Recommended Products Carousel */}
          <RelatedProducts products={relatedProductsList} />

        </div>

      </div>

      {/* Mobile Sticky Bottom Action Bar (<768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center gap-2">
        <button
          onClick={handleAddToCart}
          disabled={currentStock <= 0}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md min-h-[44px]"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>

        <button
          onClick={handleBuyNow}
          disabled={currentStock <= 0}
          className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white font-black text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md min-h-[44px]"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Buy Now</span>
        </button>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <ShareModal
          productName={product.name}
          onClose={() => setIsShareModalOpen(false)}
        />
      )}

      {/* Remove Wishlist Confirmation Modal */}
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
