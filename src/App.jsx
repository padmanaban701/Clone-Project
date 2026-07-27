import React from 'react';
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

// Layout
import { MainLayout } from './layouts/MainLayout';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFoundPage } from './pages/NotFoundPage';

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
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <FilterProvider>
                  <Routes>
                    <Route path="/" element={<MainLayout />}>
                      <Route index element={<HomePage />} />
                      <Route path="shop" element={<ShopPage />} />
                      <Route path="product/:slug" element={<ProductDetailPage />} />
                      <Route path="cart" element={<CartPage />} />
                      <Route path="checkout" element={<CheckoutPage />} />
                      <Route path="wishlist" element={<WishlistPage />} />
                      <Route path="order-success/:orderId" element={<OrderSuccessPage />} />
                      <Route path="login" element={<LoginPage />} />
                      <Route path="register" element={<RegisterPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Route>
                  </Routes>
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