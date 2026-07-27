import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { CheckCircle, PackageCheck, ArrowRight, Printer, Home } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

export const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Order Confirmed!</h1>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Thank you for shopping with VELOX. Your order has been placed and is currently being processed.
        </p>

        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-800">
          <span>Order ID:</span>
          <span className="text-indigo-600">{orderId || 'ORD-982312'}</span>
        </div>
      </div>

      {/* Order Invoice Details */}
      {order && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-indigo-600" />
              <span>Order Invoice Summary</span>
            </h2>
            <button
              onClick={() => window.print()}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 border border-slate-200 px-3 py-1.5 rounded-xl hover:bg-slate-50"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Invoice
            </button>
          </div>

          {/* Customer & Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl">
            <div>
              <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1">Customer Info</span>
              <p className="font-bold text-slate-900">{order.customer?.name}</p>
              <p className="text-slate-600">{order.customer?.email}</p>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1">Delivery Address</span>
              <p className="text-slate-700">{order.shippingAddress}</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="divide-y divide-slate-100">
            {order.items?.map((item, index) => (
              <div key={index} className="py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover border" />
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <span className="text-slate-400">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="font-bold text-slate-900">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-slate-200 pt-4 space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">{formatCurrency(order.summary?.subtotal || 0)}</span>
            </div>
            {order.summary?.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Discount</span>
                <span>-{formatCurrency(order.summary?.discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="font-bold text-slate-900">
                {order.summary?.shipping === 0 ? 'FREE' : formatCurrency(order.summary?.shipping || 0)}
              </span>
            </div>
            <div className="flex justify-between text-base font-black text-slate-900 pt-3 border-t border-slate-200">
              <span>Total Paid</span>
              <span className="text-indigo-600">{formatCurrency(order.summary?.total || 0)}</span>
            </div>
          </div>

        </div>
      )}

      <div className="flex justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-xs py-3 px-6 rounded-full hover:bg-slate-800 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-xs py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors shadow-md"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
