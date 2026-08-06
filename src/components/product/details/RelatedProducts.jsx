import { ProductCard } from '../ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RelatedProducts = ({ products = [] }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="space-y-6 pt-6 border-t border-slate-200">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
        <div>
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            Similar & Recommended Products
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">Explore similar high-rated items based on your current selection</p>
        </div>

        <Link
          to="/shop"
          className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0"
        >
          <span>Explore Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
