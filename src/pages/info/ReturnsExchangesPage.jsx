import { useState } from 'react';
import { RotateCcw, ShieldCheck, CheckCircle2, Package, ArrowRight, RefreshCw, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReturnsExchangesPage = () => {
  const [returnCode, setReturnCode] = useState('');
  const [statusMsg, setStatusMsg] = useState(null);

  const steps = [
    {
      step: 'Step 1',
      title: 'Submit Request',
      desc: 'Go to My Orders, select the item you wish to return or exchange, and choose your reason.'
    },
    {
      step: 'Step 2',
      title: 'Free Pickup',
      desc: 'Our doorstep pickup agent will inspect and collect the item with zero pickup fee.'
    },
    {
      step: 'Step 3',
      title: 'Quality Verification',
      desc: 'Item is verified at our center to ensure tags, original box, and accessories are intact.'
    },
    {
      step: 'Step 4',
      title: 'Instant Refund / Exchange',
      desc: 'Refund credited to your original payment method or replacement dispatched immediately.'
    }
  ];

  const handleCheckReturn = (e) => {
    e.preventDefault();
    if (!returnCode.trim()) return;
    setStatusMsg(`Return request status for order #${returnCode.trim()}: Item pickup scheduled for tomorrow by 2:00 PM.`);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-indigo-900/50 to-slate-900 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/30">
              <RotateCcw className="w-4 h-4 text-purple-400" />
              <span>Hassle-Free Returns</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              30-Day Easy <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300 bg-clip-text text-transparent">Returns & Exchanges</span>.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Didn't fit or changed your mind? No problem. Enjoy zero-cost doorstep pickup and instant refunds within 30 days of purchase.
            </p>
          </div>
        </div>
      </div>

      {/* Return Workflow Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">4 Simple Steps to Return or Exchange</h2>
          <p className="text-xs sm:text-sm text-slate-500">We make the return process smooth and effortless.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3 hover:border-purple-200 transition-colors">
              <span className="bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-purple-100">
                {s.step}
              </span>
              <h4 className="text-base font-bold text-slate-900 pt-1">{s.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instant Return Status Lookup */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold text-slate-900">Track Return Status</h3>
          <p className="text-xs text-slate-500">Enter your Order ID to check return pickup or refund status.</p>
        </div>

        <form onSubmit={handleCheckReturn} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter Order ID (e.g. ORD-9821)"
            value={returnCode}
            onChange={(e) => setReturnCode(e.target.value)}
            className="flex-1 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm shrink-0"
          >
            Check Status
          </button>
        </form>

        {statusMsg && (
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-purple-900 text-xs font-semibold flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <span>{statusMsg}</span>
          </div>
        )}
      </div>

      {/* Policy Conditions Box */}
      <div className="max-w-7xl mx-auto bg-slate-900 text-slate-200 rounded-3xl p-8 sm:p-12 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-purple-400" />
          Return Policy Conditions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-white">Eligible Items:</h4>
            <p>Apparel, footwear, electronics, appliances, and accessories returned in original unwashed condition with price tags and intact original brand box.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white">Non-Returnable Items:</h4>
            <p>Personal care products, innerwear, grocery items, and customized gift vouchers for hygiene and safety reasons.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-center">
          <Link
            to="/orders"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-6 py-3 rounded-2xl transition-all shadow-md"
          >
            <span>Start a Return from My Orders</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};
