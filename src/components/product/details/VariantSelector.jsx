import { Check } from 'lucide-react';

export const VariantSelector = ({ variants = {}, selectedVariants = {}, onSelectVariant }) => {
  if (!variants || Object.keys(variants).length === 0) return null;

  return (
    <div className="space-y-5 pt-2 border-t border-slate-100">
      {/* Colors Variant Option */}
      {variants.colors && variants.colors.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            Selected Color: <span className="text-indigo-600 font-extrabold">{selectedVariants.color || variants.colors[0]?.name}</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {variants.colors.map((col) => {
              const colName = typeof col === 'string' ? col : col.name;
              const colHex = typeof col === 'object' ? col.hex : null;
              const isSelected = (selectedVariants.color || variants.colors[0]?.name) === colName;

              return (
                <button
                  key={colName}
                  onClick={() => onSelectVariant('color', colName)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold border transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/80 text-indigo-700 shadow-sm ring-2 ring-indigo-500/20'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {colHex && (
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 inline-block shadow-inner shrink-0"
                      style={{ backgroundColor: colHex }}
                    />
                  )}
                  <span>{colName}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Storage Variant Option */}
      {variants.storage && variants.storage.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            Storage Capacity: <span className="text-indigo-600 font-extrabold">{selectedVariants.storage || variants.storage[0]}</span>
          </label>
          <div className="flex flex-wrap gap-2.5">
            {variants.storage.map((st) => {
              const isSelected = (selectedVariants.storage || variants.storage[0]) === st;
              return (
                <button
                  key={st}
                  onClick={() => onSelectVariant('storage', st)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {st}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* RAM Variant Option */}
      {variants.ram && variants.ram.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            System RAM: <span className="text-indigo-600 font-extrabold">{selectedVariants.ram || variants.ram[0]}</span>
          </label>
          <div className="flex flex-wrap gap-2.5">
            {variants.ram.map((r) => {
              const isSelected = (selectedVariants.ram || variants.ram[0]) === r;
              return (
                <button
                  key={r}
                  onClick={() => onSelectVariant('ram', r)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold border transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 border-indigo-300'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Capacity Variant Option (Appliances/Choppers) */}
      {variants.capacity && variants.capacity.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            Bowl Capacity: <span className="text-indigo-600 font-extrabold">{selectedVariants.capacity || variants.capacity[0]}</span>
          </label>
          <div className="flex flex-wrap gap-2.5">
            {variants.capacity.map((cap) => {
              const isSelected = (selectedVariants.capacity || variants.capacity[0]) === cap;
              return (
                <button
                  key={cap}
                  onClick={() => onSelectVariant('capacity', cap)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {cap}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Apparel Size Option */}
      {variants.size && variants.size.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
            Apparel Size: <span className="text-indigo-600 font-extrabold">{selectedVariants.size || variants.size[0]}</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {variants.size.map((sz) => {
              const isSelected = (selectedVariants.size || variants.size[0]) === sz;
              return (
                <button
                  key={sz}
                  onClick={() => onSelectVariant('size', sz)}
                  className={`w-11 h-11 rounded-2xl text-xs font-black border transition-all flex items-center justify-center ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-md'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
