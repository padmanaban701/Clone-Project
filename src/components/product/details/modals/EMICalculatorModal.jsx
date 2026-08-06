import { useState } from 'react';
import { X, Calculator, CheckCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { formatCurrency } from '../../../../utils/formatCurrency';

export const EMICalculatorModal = ({ emiOptions = [], currentPrice = 0, onClose }) => {
  const [selectedBank, setSelectedBank] = useState(emiOptions[0]?.bank || 'HDFC Bank');

  const defaultOptions = [
    { bank: 'HDFC Bank', monthly: Math.round(currentPrice / 6), months: 6, noCost: true, totalInterest: 0 },
    { bank: 'ICICI Bank', monthly: Math.round(currentPrice / 12), months: 12, noCost: true, totalInterest: 0 },
    { bank: 'State Bank of India', monthly: Math.round((currentPrice * 1.12) / 24), months: 24, noCost: false, totalInterest: Math.round(currentPrice * 0.12) },
    { bank: 'Axis Bank', monthly: Math.round((currentPrice * 1.15) / 36), months: 36, noCost: false, totalInterest: Math.round(currentPrice * 0.15) }
  ];

  const activeOptions = emiOptions.length > 0 ? emiOptions : defaultOptions;
  const banks = Array.from(new Set(activeOptions.map((o) => o.bank)));

  return (
    <Dialog.Root open={true} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-50 overflow-hidden outline-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <Dialog.Title className="text-lg font-black text-slate-900">EMI Calculator & Bank Plans</Dialog.Title>
                <p className="text-xs text-slate-500">Item Price: <strong className="text-indigo-600 font-bold">{formatCurrency(currentPrice)}</strong></p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close EMI Calculator"
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bank Tabs */}
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none border-b border-slate-100">
            {banks.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBank(b)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedBank === b
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* EMI Breakdown Table */}
          <div className="py-4 space-y-3 max-h-72 overflow-y-auto">
            {activeOptions
              .filter((o) => o.bank === selectedBank)
              .map((plan, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black text-slate-900">{formatCurrency(plan.monthly)}</span>
                      <span className="text-xs text-slate-500 font-medium">/ month x {plan.months} months</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Total Cost: {formatCurrency(plan.monthly * plan.months)} {plan.totalInterest > 0 && `(Includes ${formatCurrency(plan.totalInterest)} Interest)`}
                    </span>
                  </div>

                  {plan.noCost ? (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-wider rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> No Cost EMI
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-500">Standard EMI</span>
                  )}
                </div>
              ))}
          </div>

          {/* Footnote */}
          <p className="text-[11px] text-slate-400 mt-2">
            *Final EMI amount and bank processing fees will be confirmed on the payment gateway screen.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
