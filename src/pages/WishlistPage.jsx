import { Link } from 'react-router-dom';
import { useWishlist } from '../hooks/useWishlist';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ArrowLeft } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Your Wishlist is Empty</h2>
        <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
          Save your favorite products while browsing to find them easily here anytime!
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-6 rounded-full shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Catalog</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">My Wishlist ({wishlist.length})</h1>
          <p className="text-xs text-slate-500 mt-1">Your saved items list</p>
        </div>
        <Link to="/shop" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};
