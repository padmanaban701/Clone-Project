import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { Toaster } from 'sonner';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Side Cart Drawer */}
      <CartDrawer />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
