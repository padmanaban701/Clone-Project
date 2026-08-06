import { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp } from 'lucide-react';

export const ProductSpecifications = ({ specifications = {} }) => {
  const [openSections, setOpenSections] = useState(() =>
    Object.keys(specifications).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  if (!specifications || Object.keys(specifications).length === 0) return null;

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-indigo-600" />
          Technical Specifications
        </h3>
      </div>

      <div className="space-y-4">
        {Object.entries(specifications).map(([category, items]) => {
          const isOpen = openSections[category];

          return (
            <div key={category} className="border border-slate-200/80 rounded-2xl overflow-hidden">
              {/* Category Accordion Header */}
              <button
                onClick={() => toggleSection(category)}
                className="w-full px-5 py-3.5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 transition-colors"
              >
                <span>{category}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
              </button>

              {/* Specification Table */}
              {isOpen && (
                <div className="divide-y divide-slate-100 bg-white">
                  {typeof items === 'object' && !Array.isArray(items) ? (
                    Object.entries(items).map(([label, value], i) => (
                      <div key={i} className="px-5 py-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <span className="font-semibold text-slate-500">{label}</span>
                        <span className="sm:col-span-2 font-bold text-slate-900">{value}</span>
                      </div>
                    ))
                  ) : (
                    <div className="px-5 py-3 text-xs font-medium text-slate-700">{String(items)}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
