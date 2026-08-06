import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Third-party UI Suite Providers (Material UI & Ant Design)
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ConfigProvider } from 'antd';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext';

// Layout & Helpers
import { MainLayout } from './layouts/MainLayout';
import { ScrollToTop } from './components/common/ScrollToTop';

// Lazy-Loaded Pages for Optimal Code Splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ShopPage = lazy(() => import('./pages/ShopPage').then(m => ({ default: m.ShopPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const CartPage = lazy(() => import('./pages/CartPage').then(m => ({ default: m.CartPage })));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage').then(m => ({ default: m.CheckoutPage })));
const WishlistPage = lazy(() => import('./pages/WishlistPage').then(m => ({ default: m.WishlistPage })));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage').then(m => ({ default: m.OrderSuccessPage })));
const OrderHistoryPage = lazy(() => import('./pages/OrderHistoryPage').then(m => ({ default: m.OrderHistoryPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('./pages/RegisterPage').then(m => ({ default: m.RegisterPage })));

// Informational & Support Pages
const AboutPage = lazy(() => import('./pages/info/AboutPage').then(m => ({ default: m.AboutPage })));
const SustainabilityPage = lazy(() => import('./pages/info/SustainabilityPage').then(m => ({ default: m.SustainabilityPage })));
const CareersPage = lazy(() => import('./pages/info/CareersPage').then(m => ({ default: m.CareersPage })));
const PrivacyTermsPage = lazy(() => import('./pages/info/PrivacyTermsPage').then(m => ({ default: m.PrivacyTermsPage })));
const ShippingDeliveryPage = lazy(() => import('./pages/info/ShippingDeliveryPage').then(m => ({ default: m.ShippingDeliveryPage })));
const ReturnsExchangesPage = lazy(() => import('./pages/info/ReturnsExchangesPage').then(m => ({ default: m.ReturnsExchangesPage })));
const HelpCenterPage = lazy(() => import('./pages/info/HelpCenterPage').then(m => ({ default: m.HelpCenterPage })));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// TanStack Query Setup
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

// MUI Theme Setup
const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#4f46e5', // Indigo 600
    },
    secondary: {
      main: '#ec4899',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Loading...</span>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#4f46e5',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              borderRadius: 12,
            },
          }}
        >
          <CssBaseline />
          <BrowserRouter>
            <ScrollToTop />
            <AuthProvider>
              <WishlistProvider>
                <CartProvider>
                  <FilterProvider>
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<MainLayout />}>
                          <Route index element={<HomePage />} />
                          <Route path="shop" element={<ShopPage />} />
                          <Route path="product/:slug" element={<ProductDetailPage />} />
                          <Route path="cart" element={<CartPage />} />
                          <Route path="checkout" element={<CheckoutPage />} />
                          <Route path="wishlist" element={<WishlistPage />} />
                          <Route path="orders" element={<OrderHistoryPage />} />
                          <Route path="order-success/:orderId" element={<OrderSuccessPage />} />
                          <Route path="login" element={<LoginPage />} />
                          <Route path="register" element={<RegisterPage />} />
                          
                          {/* Info & Customer Support Routes */}
                          <Route path="about" element={<AboutPage />} />
                          <Route path="sustainability" element={<SustainabilityPage />} />
                          <Route path="careers" element={<CareersPage />} />
                          <Route path="privacy-terms" element={<PrivacyTermsPage />} />
                          <Route path="shipping-delivery" element={<ShippingDeliveryPage />} />
                          <Route path="returns-exchanges" element={<ReturnsExchangesPage />} />
                          <Route path="help-center" element={<HelpCenterPage />} />

                          <Route path="*" element={<NotFoundPage />} />
                        </Route>
                      </Routes>
                    </Suspense>
                  </FilterProvider>
                </CartProvider>
              </WishlistProvider>
            </AuthProvider>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;