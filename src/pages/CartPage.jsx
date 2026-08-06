import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import { RemoveConfirmationModal } from '../components/common/RemoveConfirmationModal';

export const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    shipping,
    total,
    appliedPromo
  } = useCart();

  const [itemToRemove, setItemToRemove] = useState(null);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Your Cart is Empty</h2>
        <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto">
          Look like you haven't added any items to your shopping cart yet.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-6 rounded-full shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Shopping Cart</h1>
          <p className="text-xs text-slate-500 mt-1">Review your items before proceeding to checkout</p>
        </div>
        <Link to="/shop" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Cart Items Table View */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.color}-${item.size}`} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">{item.name}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {item.color && <span>Color: {item.color}</span>}
                    {item.size && <span className="ml-2">Size: {item.size}</span>}
                  </p>
                  <span className="text-xs font-bold text-indigo-600 block mt-1">
                    {formatCurrency(item.price)} each
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
                {/* Quantity Controls */}
                <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        setItemToRemove(item);
                      } else {
                        updateQuantity(item.id, item.color, item.size, -1);
                      }
                    }}
                    className="p-1.5 hover:bg-slate-200 text-slate-600 rounded-l-lg transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-900">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.color, item.size, 1)}
                    className="p-1.5 hover:bg-slate-200 text-slate-600 rounded-r-lg transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtotal & Delete */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-slate-900">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => setItemToRemove(item)}
                    className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                    title="Remove from Cart"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Order Summary
          </h2>

          <div className="space-y-2.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">{formatCurrency(subtotal)}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Discount ({appliedPromo?.code})</span>
                <span>-{formatCurrency(discount)}</span>
              </div>
            )}

            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span className="font-bold text-slate-900">
                {shipping === 0 ? <strong className="text-emerald-600 font-bold">FREE</strong> : formatCurrency(shipping)}
              </span>
            </div>

            <div className="flex justify-between text-sm font-black text-slate-900 pt-3 border-t border-slate-200">
              <span>Total</span>
              <span className="text-indigo-600">{formatCurrency(total)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-lg transition-all"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <RemoveConfirmationModal
        isOpen={Boolean(itemToRemove)}
        onClose={() => setItemToRemove(null)}
        onConfirm={() => {
          if (itemToRemove) {
            removeFromCart(itemToRemove.id, itemToRemove.color, itemToRemove.size);
            setItemToRemove(null);
          }
        }}
        title="Remove Product from Cart"
        description="Are you sure you want to remove"
        itemName={itemToRemove?.name || ''}
      />

    </div>
  );
};
