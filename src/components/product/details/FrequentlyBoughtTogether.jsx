import { useState } from 'react';
import { PackagePlus, Plus, Check } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useCart } from '../../../hooks/useCart';

export const FrequentlyBoughtTogether = ({ mainProduct, bundleItems = [] }) => {
  const { addToCart } = useCart();
  const [selectedBundleIds, setSelectedBundleIds] = useState(() =>
    bundleItems.map((item) => item.id)
  );

  if (!bundleItems || bundleItems.length === 0) return null;

  const mainPrice = typeof mainProduct.price === 'object' ? mainProduct.price.current : mainProduct.price;

  const toggleBundleItem = (id) => {
    setSelectedBundleIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedAccessories = bundleItems.filter((i) => selectedBundleIds.includes(i.id));
  const accessoriesTotal = selectedAccessories.reduce((acc, item) => acc + item.price, 0);
  const bundleTotalPrice = mainPrice + accessoriesTotal;

  const handleAddBundleToCart = () => {
    // Add main product
    addToCart(mainProduct, 1);
    // Add selected accessories
    selectedAccessories.forEach((acc) => {
      addToCart({
        id: acc.id,
        name: acc.name,
        price: acc.price,
        originalPrice: acc.originalPrice,
        images: [acc.image],
        category: mainProduct.category
      }, 1);
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <PackagePlus className="w-5 h-5 text-indigo-600" />
          Frequently Bought Together
        </h3>
      </div>

      {/* Bundle Products Visual Row */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 overflow-x-auto pb-2">
        {/* Main Product Thumbnail */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 border border-indigo-200 rounded-2xl p-1 shrink-0 relative">
          <img src={mainProduct.images?.[0]} alt={mainProduct.name} className="w-full h-full object-cover rounded-xl" />
          <span className="absolute top-1 left-1 bg-indigo-600 text-white font-black text-[9px] px-1.5 py-0.5 rounded">MAIN</span>
        </div>

        {bundleItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 shrink-0">
            <Plus className="w-4 h-4 text-slate-400" />
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 border rounded-2xl p-1 transition-all cursor-pointer ${
                selectedBundleIds.includes(item.id) ? 'border-indigo-600 ring-2 ring-indigo-500/20' : 'border-slate-200 opacity-60'
              }`}
              onClick={() => toggleBundleItem(item.id)}
            >
              <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Checkboxes List & Price Breakdown */}
      <div className="space-y-3 pt-2">
        <div className="space-y-2 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">✓</span>
            <span className="truncate"><strong>This Item:</strong> {mainProduct.name} ({formatCurrency(mainPrice)})</span>
          </div>

          {bundleItems.map((item) => {
            const isChecked = selectedBundleIds.includes(item.id);
            return (
              <label key={item.id} className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleBundleItem(item.id)}
                  className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className={isChecked ? 'text-slate-900 font-bold' : 'text-slate-500 line-through'}>
                  {item.name} ({formatCurrency(item.price)})
                </span>
              </label>
            );
          })}
        </div>

        {/* Bundle Action */}
        <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4">
          <div>
            <span className="text-xs text-slate-500 font-medium block">Total Bundle Price</span>
            <span className="text-2xl font-black text-slate-900">{formatCurrency(bundleTotalPrice)}</span>
          </div>

          <button
            onClick={handleAddBundleToCart}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Add {1 + selectedAccessories.length} Items to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
