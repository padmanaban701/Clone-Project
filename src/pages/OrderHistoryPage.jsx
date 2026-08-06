import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { localDataService } from '../services/localDataService';
import { formatCurrency } from '../utils/formatCurrency';
import { Package, Calendar, ChevronRight, ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';
import { Chip } from '@mui/material';

export const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await localDataService.getOrders();
        setOrders(data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center animate-pulse">
        <div className="w-1/3 h-8 bg-slate-200 rounded mx-auto mb-6" />
        <div className="space-y-4">
          <div className="h-32 bg-slate-100 rounded-2xl" />
          <div className="h-32 bg-slate-100 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">No Orders Yet</h2>
        <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
          You haven't placed any orders yet. Explore our shop and discover amazing products!
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 px-8 rounded-full shadow-lg shadow-indigo-200 transition-all hover:scale-105"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Start Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">My Order History</h1>
        <p className="text-xs text-slate-500 mt-1">Track past orders, view invoices, and check shipping status.</p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md"
          >
            {/* Order Header */}
            <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Order ID</span>
                  <span className="text-sm font-black text-slate-900">{order.orderId}</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <span className="text-xs text-slate-400 font-medium block flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Date Placed
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {new Date(order.createdAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 font-medium block">Total Amount</span>
                  <span className="text-sm font-black text-indigo-600">
                    {formatCurrency(order.total || 0)}
                  </span>
                </div>

                <Chip
                  icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                  label={order.status || 'Processing'}
                  color="success"
                  size="small"
                  sx={{ fontWeight: 700, fontSize: '11px' }}
                />
              </div>
            </div>

            {/* Order Items */}
            <div className="p-4 sm:p-6 divide-y divide-slate-100">
              {order.items && order.items.map((item, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover border border-slate-200" />
                    ) : (
                      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-slate-400" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Qty: {item.quantity} {item.color && `• Color: ${item.color}`} {item.size && `• Size: ${item.size}`}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Footer */}
            {order.shippingAddress && (
              <div className="px-4 sm:px-6 py-3 bg-slate-50/50 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <Truck className="w-3.5 h-3.5 text-slate-400" /> Deliver to: {order.shippingAddress.name}, {order.shippingAddress.city}
                </span>
                <Link
                  to={`/order-success/${order.orderId}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  View Order Confirmation <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
