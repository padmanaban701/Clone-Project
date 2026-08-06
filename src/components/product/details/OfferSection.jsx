import { useState } from 'react';
import { Tag, CreditCard, RefreshCw, Gift, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

export const OfferSection = ({ offers = [] }) => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!offers || offers.length === 0) return null;

  const visibleOffers = isExpanded ? offers : offers.slice(0, 2);

  const handleCopyCode = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success(`Coupon code "${code}" copied!`);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const getOfferIcon = (type) => {
    switch (type) {
      case 'bank':
      case 'emi':
        return <CreditCard className="w-4 h-4 text-indigo-600" />;
      case 'exchange':
        return <RefreshCw className="w-4 h-4 text-amber-600" />;
      default:
        return <Gift className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
          <Tag className="w-4 h-4 text-indigo-600" />
          Available Offers ({offers.length})
        </h3>
        {offers.length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                + {offers.length - 2} More Offers <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visibleOffers.map((offer) => (
          <div
            key={offer.id || offer.title}
            className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-2 hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-start gap-2.5">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                {getOfferIcon(offer.type)}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-extrabold text-slate-900 block truncate">{offer.title}</span>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-0.5">{offer.description}</p>
              </div>
            </div>

            {offer.code && (
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-1">
                <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                  {offer.code}
                </span>
                <button
                  onClick={() => handleCopyCode(offer.code)}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Code
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
