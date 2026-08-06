import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { CategoryNavBar } from '../components/home/CategoryNavBar';
import { Footer } from '../components/layout/Footer';
import { CartDrawer } from '../components/cart/CartDrawer';
import { AuthModal } from '../components/auth/AuthModal';
import { BackToTopButton } from '../components/common/BackToTopButton';
import { TopProgressBar } from '../components/common/TopProgressBar';
import { Toaster } from 'sonner';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Page Transition Progress Bar */}
      <TopProgressBar />

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Top Flipkart-Style Scrolling Category Navigation Bar */}
      <CategoryNavBar />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Floating Back to Top Button with Circular Progress Ring */}
      <BackToTopButton />

      {/* Global Flipkart-Style Popup Auth Modal */}
      <AuthModal />

      {/* Side Cart Drawer */}
      <CartDrawer />

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
