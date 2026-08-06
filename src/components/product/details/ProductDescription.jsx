import { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';

export const ProductDescription = ({ description = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!description) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" />
          Product Overview & Details
        </h3>
      </div>

      <div
        className={`text-slate-700 text-xs sm:text-sm leading-relaxed ${
          !isExpanded ? 'line-clamp-4' : ''
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 pt-2"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read Full Product Description <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
};
