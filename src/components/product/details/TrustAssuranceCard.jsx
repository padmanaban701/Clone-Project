import { ShieldCheck, Award, Truck, RefreshCcw, Star, CheckCircle, ThumbsUp } from 'lucide-react';

export const TrustAssuranceCard = ({ brand = 'NEXUS Brand' }) => {
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-5">
      
      {/* Verified Merchant Badge */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 font-black flex items-center justify-center text-sm border border-indigo-100">
            N
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-900">{brand} Official Store</span>
              <CheckCircle className="w-3.5 h-3.5 text-indigo-600 fill-current" />
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <strong className="text-slate-700">4.9/5 Rating</strong> • 99% Positive Feedback
            </p>
          </div>
        </div>
        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-emerald-200">
          Verified Seller
        </span>
      </div>

      {/* Trust Grid */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
          <div>
            <span className="font-bold text-slate-800 block text-[11px]">100% Authentic</span>
            <span className="text-[10px] text-slate-400">Direct Brand Warranty</span>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
          <Truck className="w-4 h-4 text-indigo-600 shrink-0" />
          <div>
            <span className="font-bold text-slate-800 block text-[11px]">Safe Packaging</span>
            <span className="text-[10px] text-slate-400">Damage-Free Transit</span>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
          <RefreshCcw className="w-4 h-4 text-indigo-600 shrink-0" />
          <div>
            <span className="font-bold text-slate-800 block text-[11px]">30-Day Easy Return</span>
            <span className="text-[10px] text-slate-400">Free Doorstep Pickup</span>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
          <Award className="w-4 h-4 text-indigo-600 shrink-0" />
          <div>
            <span className="font-bold text-slate-800 block text-[11px]">Quality Tested</span>
            <span className="text-[10px] text-slate-400">Multi-tier Verified</span>
          </div>
        </div>
      </div>

      {/* Social Proof Callout */}
      <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-indigo-950 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4 text-indigo-600 shrink-0" />
          <span className="font-bold text-[11px]">98% of customers recommend this product</span>
        </div>
      </div>

    </div>
  );
};
