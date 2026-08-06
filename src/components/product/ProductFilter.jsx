import { useFilter } from '../../hooks/useFilter';
import { mockCategories } from '../../data/mockCategories';
import { RotateCcw, Filter } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';
import * as RadixSlider from '@radix-ui/react-slider';
import { Rate, Tag } from 'antd';
import { FormControl, Select, MenuItem } from '@mui/material';

export const ProductFilter = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
    resetFilters,
    hasActiveFilters
  } = useFilter();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <Filter className="w-4 h-4 text-indigo-600" />
          <span>Filters & Sort</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {/* MUI Select for Sort By */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Sort Products
        </label>
        <FormControl fullWidth size="small">
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            sx={{
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 600,
              backgroundColor: '#f8fafc',
            }}
          >
            <MenuItem value="featured" style={{ fontSize: '12px' }}>Featured / Recommended</MenuItem>
            <MenuItem value="price-low" style={{ fontSize: '12px' }}>Price: Low to High</MenuItem>
            <MenuItem value="price-high" style={{ fontSize: '12px' }}>Price: High to Low</MenuItem>
            <MenuItem value="rating" style={{ fontSize: '12px' }}>Highest Rated</MenuItem>
            <MenuItem value="newest" style={{ fontSize: '12px' }}>New Arrivals</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Categories with Ant Design Tags */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Category
        </label>
        <div className="space-y-1.5">
          {mockCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span>{cat.name}</span>
                <Tag color={isSelected ? 'indigo' : 'default'} style={{ borderRadius: '9999px', fontSize: '10px' }}>
                  {cat.itemCount}
                </Tag>
              </button>
            );
          })}
        </div>
      </div>

      {/* Radix UI Accessible Slider Component */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Max Price Filter
          </label>
          <span className="text-xs font-bold text-indigo-600">
            {formatCurrency(priceRange[1])}
          </span>
        </div>
        
        <RadixSlider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[priceRange[1]]}
          max={200000}
          min={0}
          step={5000}
          onValueChange={(val) => setPriceRange([0, val[0]])}
        >
          <RadixSlider.Track className="bg-slate-200 relative grow rounded-full h-2">
            <RadixSlider.Range className="absolute bg-indigo-600 rounded-full h-full" />
          </RadixSlider.Track>
          <RadixSlider.Thumb
            className="block w-5 h-5 bg-white border-2 border-indigo-600 shadow-md rounded-full hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            aria-label="Max Price"
          />
        </RadixSlider.Root>

        <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
          <span>{formatCurrency(0)}</span>
          <span>{formatCurrency(200000)}</span>
        </div>
      </div>

      {/* Minimum Rating Filter with AntD Rate */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Minimum Rating
        </label>
        <div className="space-y-1.5">
          {[4.8, 4.5, 4.0].map((rating) => (
            <button
              key={rating}
              onClick={() => setMinRating(minRating === rating ? 0 : rating)}
              className={`w-full text-left px-3 py-1.5 rounded-xl text-xs flex items-center justify-between transition-colors ${
                minRating === rating
                  ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Rate disabled defaultValue={rating} style={{ fontSize: 12, color: '#f59e0b' }} />
              <span className="text-[11px] font-bold text-slate-700">{rating}+</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
