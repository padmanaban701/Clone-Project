import { ProductCard } from './ProductCard';
import { PackageSearch } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { useFilter } from '../../hooks/useFilter';

export const ProductGrid = ({ products, isLoading }) => {
  const { resetFilters } = useFilter();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
            <Skeleton height={200} borderRadius={16} />
            <Skeleton width="40%" height={12} />
            <Skeleton width="80%" height={18} />
            <div className="flex justify-between items-center pt-2">
              <Skeleton width="30%" height={14} />
              <Skeleton width="35%" height={20} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-sm"
      >
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <PackageSearch className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">No products found</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          We couldn't find any products matching your active filter criteria. Try adjusting your search or category filters.
        </p>
        <button
          onClick={resetFilters}
          className="mt-6 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-md active:scale-95"
        >
          Reset All Filters
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      layout
      className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence>
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
