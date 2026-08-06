import { Rate } from 'antd';
import { Chip } from '@mui/material';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

export const ProductInfo = ({
  brand = 'Brand',
  name = 'Product Name',
  rating = 4.8,
  reviewCount = 0,
  sku = 'SKU-001',
  stock = 10
}) => {
  const getStockStatus = () => {
    if (stock <= 0) {
      return {
        label: 'Out of Stock',
        color: 'error',
        icon: <XCircle className="w-3.5 h-3.5" />
      };
    }
    if (stock <= 5) {
      return {
        label: `Low Stock (Only ${stock} left)`,
        color: 'warning',
        icon: <AlertTriangle className="w-3.5 h-3.5" />
      };
    }
    return {
      label: `In Stock (${stock} available)`,
      color: 'success',
      icon: <CheckCircle2 className="w-3.5 h-3.5" />
    };
  };

  const status = getStockStatus();

  return (
    <div className="space-y-3">
      {/* Brand & Stock Status Badge */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
          {brand}
        </span>
        <Chip
          icon={status.icon}
          label={status.label}
          color={status.color}
          variant="outlined"
          sx={{ fontWeight: 800, fontSize: '11px', borderRadius: '12px' }}
        />
      </div>

      {/* Product Name */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
        {name}
      </h1>

      {/* Rating Summary & SKU */}
      <div className="flex items-center gap-3 text-xs flex-wrap">
        <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-xl">
          <Rate disabled allowHalf defaultValue={rating} value={rating} style={{ fontSize: 14, color: '#f59e0b' }} />
          <span className="font-extrabold text-slate-900">{rating}</span>
        </div>
        <span className="text-slate-400 font-medium">•</span>
        <a href="#reviews-section" className="text-indigo-600 hover:text-indigo-800 font-bold hover:underline">
          {reviewCount.toLocaleString()} Ratings & Reviews
        </a>
        <span className="text-slate-400 font-medium">•</span>
        <span className="text-slate-400 font-mono">SKU: {sku}</span>
      </div>
    </div>
  );
};
