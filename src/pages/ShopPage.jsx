import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductGrid } from '../components/product/ProductGrid';
import { ProductFilter } from '../components/product/ProductFilter';
import { useProductsQuery } from '../hooks/useProductQueries';
import { useFilter } from '../hooks/useFilter';
import { SlidersHorizontal, X } from 'lucide-react';

export const ShopPage = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    sortBy,
    minRating,
    resetFilters,
    hasActiveFilters
  } = useFilter();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams, setSelectedCategory, setSearchQuery]);

  const { data: products = [], isLoading } = useProductsQuery({
    category: selectedCategory,
    searchQuery,
    priceRange,
    sortBy,
    minRating
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
            Catalog & Shop
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse our complete catalog of {products.length} products
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm active:scale-95 transition-all"
        >
          <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
          <span>Filters & Sort</span>
        </button>
      </div>

      {/* Active Filter Pills */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 bg-slate-100/80 p-3 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
            Active Filters:
          </span>

          {searchQuery && (
            <span className="inline-flex items-center gap-1 bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-300">
              Query: "{searchQuery}"
              <button onClick={() => setSearchQuery('')} className="hover:text-red-500">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}

          {selectedCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-300 capitalize">
              Category: {selectedCategory}
              <button onClick={() => setSelectedCategory('all')} className="hover:text-red-500">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          )}

          <button
            onClick={resetFilters}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 ml-auto"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24">
            <ProductFilter />
          </div>
        </div>

        {/* Mobile Filter Drawer Overlay */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsMobileFilterOpen(false)} />
            <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full overflow-y-auto p-5 sm:p-6 shadow-2xl z-10 flex flex-col">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
                  <span>Catalog Filters</span>
                </h3>
                <button 
                  onClick={() => setIsMobileFilterOpen(false)} 
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1">
                <ProductFilter />
              </div>
            </div>
          </div>
        )}

        {/* Main Product Grid */}
        <div className="lg:col-span-3">
          <ProductGrid products={products} isLoading={isLoading} />
        </div>

      </div>

    </div>
  );
};
