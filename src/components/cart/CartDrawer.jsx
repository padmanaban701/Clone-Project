import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from 'antd';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../utils/formatCurrency';
import { localDataService } from '../../services/localDataService';
import { toast } from 'sonner';
import { RemoveConfirmationModal } from '../common/RemoveConfirmationModal';

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    shipping,
    total,
    freeShippingThreshold,
    appliedPromo,
    setAppliedPromo
  } = useCart();

  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [isValidatingPromo, setIsValidatingPromo] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleApplyPromo = async (e) => {
    e.preventDefault();
    if (!promoCodeInput.trim()) return;

    setIsValidatingPromo(true);
    const result = await localDataService.validateCoupon(promoCodeInput);
    setIsValidatingPromo(false);

    if (result.valid) {
      setAppliedPromo(result.promo);
      toast.success(result.message);
      setPromoCodeInput('');
    } else {
      toast.error(result.message);
    }
  };

  const freeShippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full"
            >
              
              {/* Header */}
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-base font-bold">Shopping Cart ({cartItems.length})</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Ant Design Progress Indicator */}
              <div className="bg-indigo-50 px-6 py-3 border-b border-indigo-100">
                {subtotal >= freeShippingThreshold ? (
                  <p className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                    Congratulations! You've unlocked FREE Shipping!
                  </p>
                ) : (
                  <div>
                    <p className="text-xs text-indigo-900 font-medium mb-1">
                      Add <strong className="font-bold text-indigo-700">{formatCurrency(remainingForFreeShipping)}</strong> more for <strong>Free Shipping</strong>
                    </p>
                    <Progress
                      percent={freeShippingProgress}
                      strokeColor={{ '0%': '#818cf8', '100%': '#4f46e5' }}
                      size="small"
                      showInfo={false}
                    />
                  </div>
                )}
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-slate-100">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Your cart is empty</h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                      Looks like you haven't added any products to your shopping bag yet.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 inline-flex items-center gap-2 bg-indigo-600 text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-indigo-700 transition-colors shadow-md"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <motion.div 
                      key={`${item.id}-${item.color}-${item.size}`} 
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="py-4 flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {item.color && <span>Color: {item.color}</span>}
                          {item.size && <span className="ml-2">Size: {item.size}</span>}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Modifier */}
                          <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                            <button
                              onClick={() => {
                                if (item.quantity === 1) {
                                  setItemToRemove(item);
                                } else {
                                  updateQuantity(item.id, item.color, item.size, -1);
                                }
                              }}
                              className="p-1 hover:bg-slate-200 text-slate-600 rounded-l-lg transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.size, 1)}
                              className="p-1 hover:bg-slate-200 text-slate-600 rounded-r-lg transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-slate-900">
                              {formatCurrency(item.price * item.quantity)}
                            </span>
                            <button
                              onClick={() => setItemToRemove(item)}
                              className="text-slate-400 hover:text-red-500 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer & Checkout Action */}
              {cartItems.length > 0 && (
                <div className="border-t border-slate-200 p-6 bg-slate-50 space-y-4">
                  
                  {/* Promo Code Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Coupon code (e.g. PROMO10)"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        className="w-full bg-white border border-slate-200 text-xs rounded-xl py-2 pl-9 pr-3 text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isValidatingPromo}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2 px-4 rounded-xl transition-colors disabled:opacity-50 shrink-0"
                    >
                      Apply
                    </button>
                  </form>

                  {/* Applied Promo Badge */}
                  {appliedPromo && (
                    <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-semibold border border-emerald-200">
                      <span>Code: {appliedPromo.code}</span>
                      <button 
                        onClick={() => setAppliedPromo(null)} 
                        className="text-emerald-700 hover:text-emerald-900 font-bold ml-2 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Order Calculations */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900">{formatCurrency(subtotal)}</span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Discount</span>
                        <span>-{formatCurrency(discount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-slate-600">
                      <span>Estimated Shipping</span>
                      <span className="font-semibold text-slate-900">
                        {shipping === 0 ? <strong className="text-emerald-600 font-bold">FREE</strong> : formatCurrency(shipping)}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                      <span>Total</span>
                      <span className="text-indigo-600">{formatCurrency(total)}</span>
                    </div>
                  </div>

                  {/* Checkout Action Button */}
                  <Link
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-200 active:scale-95"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}

      <RemoveConfirmationModal
        isOpen={Boolean(itemToRemove)}
        onClose={() => setItemToRemove(null)}
        onConfirm={() => {
          if (itemToRemove) {
            removeFromCart(itemToRemove.id, itemToRemove.color, itemToRemove.size);
            setItemToRemove(null);
          }
        }}
        title="Remove Item from Cart"
        description="Are you sure you want to remove"
        itemName={itemToRemove?.name || ''}
      />
    </AnimatePresence>
  );
};
