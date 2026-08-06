import { useState } from 'react';
import { Calculator, ChevronRight, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatCurrency';
import { EMICalculatorModal } from './modals/EMICalculatorModal';

export const EMISection = ({ emiOptions = [], currentPrice = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lowestMonthly = emiOptions.length > 0
    ? Math.min(...emiOptions.map((o) => o.monthly))
    : Math.round(currentPrice / 24);

  const hasNoCost = emiOptions.some((o) => o.noCost);

  return (
    <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-900">
              EMI Starts from <strong className="text-indigo-600 font-extrabold">{formatCurrency(lowestMonthly)}/month</strong>
            </span>
            {hasNoCost && (
              <span className="bg-emerald-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <CheckCircle2 className="w-2.5 h-2.5" /> No Cost EMI
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-500 mt-0.5">Available on HDFC, ICICI, SBI & Axis Bank Credit Cards</p>
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0 whitespace-nowrap"
      >
        View Plans <ChevronRight className="w-4 h-4" />
      </button>

      {isModalOpen && (
        <EMICalculatorModal
          emiOptions={emiOptions}
          currentPrice={currentPrice}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
