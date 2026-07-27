import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Star, Headphones, Watch, Shirt, Home } from 'lucide-react';
import { ProductGrid } from '../components/product/ProductGrid';
import { localDataService } from '../services/localDataService';
import { mockCategories } from '../data/mockCategories';
import { useFilter } from '../hooks/useFilter';

export const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setSelectedCategory } = useFilter();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const items = await localDataService.getFeaturedProducts();
      setFeaturedProducts(items);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-2xl sm:rounded-3xl mx-0 sm:mx-4 lg:mx-8 mt-0 sm:mt-4 shadow-2xl">
        {/* Decorative Ambient Lighting */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-20 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 sm:px-3.5 py-1.5 rounded-full text-indigo-300 text-[11px] sm:text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
              <span>Next-Gen E-Commerce Experience</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Elevate Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                Everyday Lifestyle.
              </span>
            </h1>

            <p className="text-xs sm:text-base text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover precision-engineered audio, minimalist luxury watches, sustainable apparel, and smart home aesthetic essentials with zero compromise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 rounded-full shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/shop?category=electronics"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm py-3 sm:py-3.5 px-6 rounded-full border border-white/20 backdrop-blur-md transition-all"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Trending Tech</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 sm:pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <span className="text-xl sm:text-2xl font-black text-white">100%</span>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Local Mock Data</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-white">4.9★</span>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">User Satisfaction</p>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-white">24/7</span>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Instant Checkout</p>
              </div>
            </div>

          </div>

          {/* Hero Featured Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
                alt="Hero Featured Product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Featured Product
                </span>
                <h3 className="text-sm sm:text-lg font-bold text-white mt-1">
                  Aura Studio Wireless Noise-Canceling Headphones
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg sm:text-xl font-black text-white">$249.99</span>
                  <Link
                    to="/product/aura-studio-wireless-headphones"
                    className="bg-white text-slate-900 text-xs font-bold py-1.5 px-3.5 sm:px-4 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Categories Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Shop by Category</h2>
            <p className="text-xs text-slate-500 mt-0.5 sm:mt-1">Select a category to filter our collections</p>
          </div>
          <Link to="/shop" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {mockCategories.filter(c => c.id !== 'all').map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              onClick={() => setSelectedCategory(cat.id)}
              className="group bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {cat.id === 'electronics' && <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />}
                {cat.id === 'apparel' && <Shirt className="w-6 h-6 sm:w-7 sm:h-7" />}
                {cat.id === 'accessories' && <Watch className="w-6 h-6 sm:w-7 sm:h-7" />}
                {cat.id === 'home' && <Home className="w-6 h-6 sm:w-7 sm:h-7" />}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {cat.name}
              </h3>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-semibold mt-1">
                {cat.itemCount} items
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Trending & Featured Products</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} isLoading={isLoading} />
      </section>

      {/* Promotional Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2.5 sm:space-y-3 text-center md:text-left z-10">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Limited Time Offer
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Get Extra 10% OFF Your First Purchase
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100 max-w-md">
              Apply coupon code <strong className="bg-white/20 px-2 py-0.5 rounded text-white font-mono">PROMO10</strong> at cart drawer checkout for instant savings.
            </p>
          </div>
          <Link
            to="/shop"
            className="z-10 bg-white text-indigo-900 font-bold text-xs py-3.5 px-8 rounded-full hover:bg-slate-100 transition-all hover:scale-105 shadow-lg shrink-0 w-full sm:w-auto text-center"
          >
            Claim Promo Now
          </Link>
        </div>
      </section>

    </div>
  );
};
