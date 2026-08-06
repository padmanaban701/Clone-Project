import { formatCurrency } from '../../../utils/formatCurrency';
import { Tag, Sparkles } from 'lucide-react';

export const PriceSection = ({ price = {} }) => {
  const current = price.current || 0;
  const original = price.original || current;

  const savings = Math.max(0, original - current);
  const discountPercent = original > current ? Math.round(((original - current) / original) * 100) : 0;

  return (
    <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-indigo-50/40 to-slate-50 rounded-3xl border border-slate-200/80 shadow-sm space-y-2">
      <div className="flex flex-wrap items-baseline gap-3">
        {/* Selling Price */}
        <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {formatCurrency(current)}
        </span>

        {/* Original Price */}
        {original > current && (
          <span className="text-base sm:text-lg text-slate-400 font-semibold line-through decoration-slate-300">
            {formatCurrency(original)}
          </span>
        )}

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span className="inline-flex items-center gap-1 bg-emerald-500 text-white font-black text-xs px-3 py-1 rounded-full shadow-md shadow-emerald-200 animate-bounce">
            <Sparkles className="w-3 h-3" />
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* You Save Amount & Tax Info */}
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600 flex-wrap gap-2 pt-1 border-t border-slate-200/60">
        {savings > 0 && (
          <span className="text-emerald-600 font-bold flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            You Save {formatCurrency(savings)}
          </span>
        )}
        <span className="text-slate-400 font-normal">
          {price.taxIncluded !== false ? 'Inclusive of all taxes & GST' : 'Exclusive of taxes'}
        </span>
      </div>
    </div>
  );
};
