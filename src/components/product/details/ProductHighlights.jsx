import { CheckCircle2, Sparkles } from 'lucide-react';

export const ProductHighlights = ({ highlights = [] }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="space-y-3 pt-2">
      <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
        <Sparkles className="w-4 h-4 text-indigo-600" />
        Product Highlights
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-700 font-semibold leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
