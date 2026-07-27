import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ShoppingBag } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-black text-slate-900">404 - Page Not Found</h1>
      <p className="text-xs text-slate-500 max-w-xs mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-full"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-xs py-2.5 px-5 rounded-full shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Shop Catalog</span>
        </Link>
      </div>
    </div>
  );
};
