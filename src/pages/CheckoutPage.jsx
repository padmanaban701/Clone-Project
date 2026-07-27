import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { localDataService } from '../services/localDataService';
import { ShieldCheck, CreditCard, Truck, CheckCircle2, Lock } from 'lucide-react';
import { Steps } from 'antd';
import { TextField, Button as MuiButton, Paper } from '@mui/material';
import { toast } from 'sonner';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, discount, shipping, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zipCode: '97477',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '123'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    const orderPayload = {
      items: cartItems,
      customer: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone
      },
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
      summary: {
        subtotal,
        discount,
        shipping,
        total
      }
    };

    const createdOrder = await localDataService.placeOrder(orderPayload);
    setIsSubmitting(false);

    clearCart();
    toast.success('Order placed successfully!');
    navigate(`/order-success/${createdOrder.orderId}`, { state: { order: createdOrder } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-black text-slate-900">Checkout & Payment</h1>
        <p className="text-xs text-slate-500 mt-1">Complete your shipping and payment details below</p>
      </div>

      {/* Ant Design Steps Component */}
      <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 4, border: '1px solid #e2e8f0', bgcolor: '#ffffff' }}>
        <Steps
          current={currentStep}
          responsive={true}
          onChange={(step) => setCurrentStep(step)}
          items={[
            { title: 'Shipping Address', description: 'Enter delivery details' },
            { title: 'Payment Info', description: 'Mock card transaction' },
            { title: 'Order Review', description: 'Confirm purchase' },
          ]}
        />
      </Paper>

      <form onSubmit={handleOrderSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        
        {/* Shipping & Payment Forms */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Shipping Address */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-indigo-600" />
              <span>1. Shipping Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                size="small"
                fullWidth
                required
              />

              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                size="small"
                fullWidth
                required
              />

              <TextField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                size="small"
                fullWidth
                required
              />

              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                size="small"
                fullWidth
                required
              />

              <div className="sm:col-span-2">
                <TextField
                  label="Street Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  size="small"
                  fullWidth
                  required
                />
              </div>

              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                size="small"
                fullWidth
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  size="small"
                  fullWidth
                  required
                />
                <TextField
                  label="Zip Code"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  size="small"
                  fullWidth
                  required
                />
              </div>
            </div>
          </div>

          {/* Mock Payment Details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-600" />
              <span>2. Payment Information</span>
            </h2>

            <div className="space-y-4">
              <TextField
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                size="small"
                fullWidth
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <TextField
                  label="Expiry Date"
                  name="cardExp"
                  value={formData.cardExp}
                  onChange={handleInputChange}
                  size="small"
                  fullWidth
                  required
                />

                <TextField
                  label="CVC"
                  name="cardCvc"
                  value={formData.cardCvc}
                  onChange={handleInputChange}
                  size="small"
                  fullWidth
                  required
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-2">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              Mock checkout mode enabled. No real payments processed.
            </p>
          </div>

        </div>

        {/* Sidebar Summary & Submit */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Review Order
          </h2>

          <div className="space-y-3 max-h-48 overflow-y-auto divide-y divide-slate-100">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.color}`} className="pt-2 flex items-center justify-between text-xs">
                <div className="truncate max-w-[180px]">
                  <p className="font-bold text-slate-900 truncate">{item.name}</p>
                  <span className="text-slate-400">Qty: {item.quantity}</span>
                </div>
                <span className="font-bold text-slate-900">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-slate-900">{formatCurrency(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Discount</span>
                <span>-{formatCurrency(discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-bold text-slate-900">
                {shipping === 0 ? 'FREE' : formatCurrency(shipping)}
              </span>
            </div>

            <div className="flex justify-between text-base font-black text-slate-900 pt-3 border-t border-slate-200">
              <span>Total Pay</span>
              <span className="text-indigo-600">{formatCurrency(total)}</span>
            </div>
          </div>

          {/* MUI Button for Order Placement */}
          <MuiButton
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
            size="large"
            startIcon={<CheckCircle2 className="w-4 h-4" />}
            sx={{
              bgcolor: '#4f46e5',
              '&:hover': { bgcolor: '#4338ca' },
              borderRadius: '12px',
              py: 1.5,
              fontWeight: 800,
              fontSize: '13px',
              textTransform: 'none',
              boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.3)',
            }}
          >
            {isSubmitting ? 'Processing Order...' : 'Place Order Now'}
          </MuiButton>
        </div>

      </form>

    </div>
  );
};
