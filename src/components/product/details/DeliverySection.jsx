import { useState } from 'react';
import { MapPin, Truck, RotateCcw, ShieldCheck, Check } from 'lucide-react';

export const DeliverySection = ({ deliveryEstimate = '' }) => {
  const [pincode, setPincode] = useState('');
  const [checkedPincode, setCheckedPincode] = useState(null);
  const [error, setError] = useState('');

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      setError('Please enter a valid 6-digit Pincode');
      return;
    }
    setError('');
    setCheckedPincode(pincode.trim());
  };

  return (
    <div className="space-y-4 pt-2">
      <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
        <MapPin className="w-4 h-4 text-indigo-600" />
        Delivery Options & Serviceability
      </h3>

      {/* Pincode Form */}
      <form onSubmit={handleCheckPincode} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit Pincode"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value.replace(/\D/g, ''));
              setError('');
            }}
            className="w-full h-11 bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
          />
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
        </div>
        <button
          type="submit"
          className="h-11 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 rounded-xl transition-all shrink-0 shadow-sm"
        >
          Check
        </button>
      </form>

      {error && <p className="text-[11px] text-red-500 font-medium">{error}</p>}

      {/* Delivery Result Info */}
      {checkedPincode && !error && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Deliverable to <strong>{checkedPincode}</strong>: {deliveryEstimate || 'Express Delivery by Tomorrow, 2 PM'}</span>
        </div>
      )}

      {/* Feature Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold p-2.5 bg-slate-50 rounded-xl border border-slate-100">
          <Truck className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>Free Express Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold p-2.5 bg-slate-50 rounded-xl border border-slate-100">
          <RotateCcw className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>7 Days Easy Replacement</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold p-2.5 bg-slate-50 rounded-xl border border-slate-100">
          <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>1 Year Brand Warranty</span>
        </div>
      </div>
    </div>
  );
};
