import { Truck, Clock, ShieldCheck, MapPin, PackageCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShippingDeliveryPage = () => {
  const deliveryTiers = [
    {
      title: 'Standard Ground',
      time: '3 - 5 Business Days',
      cost: 'FREE over ₹999 (or ₹49)',
      badge: 'Popular',
      description: 'Reliable eco-friendly shipping across all major cities and pin codes.'
    },
    {
      title: 'Express Air',
      time: '1 - 2 Business Days',
      cost: '₹149 Flat Rate',
      badge: 'Fastest',
      description: 'Priority flight dispatch for urgent deliveries and high-priority orders.'
    },
    {
      title: 'Same-Day Metro',
      time: 'Same Day (Order before 12 PM)',
      cost: '₹249 Flat Rate',
      badge: 'Ultra Fast',
      description: 'Available in select metro hubs with dedicated courier fulfillment.'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Order Processing',
      desc: 'Order is confirmed and quality checked at our nearest smart fulfillment center within 2-4 hours.'
    },
    {
      num: '02',
      title: 'Eco Packaging',
      desc: 'Item is carefully wrapped in 100% recyclable tamper-proof packaging with verified tracking code.'
    },
    {
      num: '03',
      title: 'Dispatch & Transit',
      desc: 'Handed over to our courier partner with live GPS updates sent via SMS & Email.'
    },
    {
      num: '04',
      title: 'Doorstep Delivery',
      desc: 'OTP verified contactless delivery right to your door with 30-day return protection.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/50 to-slate-900 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <Truck className="w-4 h-4 text-blue-400" />
              <span>Shipping & Logistics</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Fast, Transparent <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">& Reliable Delivery</span>.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              We partner with top-tier logistics providers to ensure your orders reach you quickly, safely, and with real-time tracking every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Options Matrix */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Delivery Speed & Options</h2>
          <p className="text-xs sm:text-sm text-slate-500">Choose the delivery tier that best fits your timeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryTiers.map((tier, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all space-y-6 relative">
              <span className="bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-indigo-100 absolute top-6 right-6">
                {tier.badge}
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{tier.title}</h3>
                <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{tier.time}</span>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-slate-800">Delivery Fee:</p>
                <p className="text-sm font-black text-indigo-600 mt-0.5">{tier.cost}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Process Workflow */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">How Your Parcel Travels</h2>
          <p className="text-xs sm:text-sm text-slate-500">From click to delivery, complete visibility at every stage.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3 relative">
              <span className="text-3xl font-black text-indigo-200">{step.num}</span>
              <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Track Order CTA */}
      <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-black">Want to Track an Existing Order?</h3>
          <p className="text-xs text-slate-400">View live location, estimated arrival time, and courier contact details.</p>
        </div>
        <Link
          to="/orders"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition-all shadow-md shrink-0 active:scale-95"
        >
          Go to Order History
        </Link>
      </div>

    </div>
  );
};
