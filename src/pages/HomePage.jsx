import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap, CreditCard, ShieldCheck } from 'lucide-react';
import { ProductGrid } from '../components/product/ProductGrid';
import { HeroBannerSlider } from '../components/home/HeroBannerSlider';
import { localDataService } from '../services/localDataService';
import { useFilter } from '../hooks/useFilter';
import { formatCurrency } from '../utils/formatCurrency';

export const HomePage = () => {
  const navigate = useNavigate();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setSearchQuery } = useFilter();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const items = await localDataService.getFeaturedProducts();
      setFeaturedProducts(items);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const flipkartSubTiles = [
    { name: 'Laptops', icon: '💻', search: 'laptops' },
    { name: 'Tablets', icon: '📱', search: 'mobile' },
    { name: 'Wearables', icon: '⌚', search: 'smart watch' },
    { name: 'Accessories', icon: '🎧', search: 'headphones' },
    { name: 'IT Peripherals', icon: '🖥️', search: 'laptops' },
    { name: 'Camera', icon: '📷', search: 'camera' },
    { name: 'Gaming', icon: '🎮', search: 'gaming' },
    { name: 'Speakers', icon: '🔊', search: 'audio' },
    { name: 'Earphones', icon: '🎙️', search: 'headphones' },
    { name: 'Mobile Covers', icon: '📱', search: 'case' },
    { name: 'Storage', icon: '💾', search: 'ssd' },
    { name: 'Smart Devices', icon: '💡', search: 'smart' }
  ];

  const handleSubTileClick = (searchKeyword) => {
    setSearchQuery(searchKeyword);
    navigate(`/shop?search=${encodeURIComponent(searchKeyword)}`);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Interactive Hero Banner Slider */}
      <HeroBannerSlider />

      {/* Flipkart Hero Freedom Sale Banner Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Banner 1: POCO M8 POWER 5G */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
            
            <div className="space-y-2 z-10">
              <div className="flex items-center justify-between">
                <span className="bg-slate-950 text-amber-400 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  POCO
                </span>
                <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  FREEDOM SALE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                POCO M8 POWER 5G
              </h3>
              <p className="text-xs text-amber-100 font-bold">
                From <span className="text-lg font-black text-white">{formatCurrency(21999)}</span>*
              </p>
            </div>

            <div className="pt-6 z-10 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-amber-100">12 hrs offer price</span>
              <button
                onClick={() => navigate('/product/poco-m8-power-5g')}
                className="bg-white text-slate-900 font-extrabold text-xs py-2 px-4 rounded-xl shadow-md hover:bg-slate-100 transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Banner 2: Samsung Watch9 & Ultra2 */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all">
            <div className="space-y-2 z-10">
              <div className="flex items-center justify-between">
                <span className="bg-indigo-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  SAMSUNG
                </span>
                <span className="bg-amber-400 text-slate-950 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  SPECIAL OFFER
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                Watch9 & Ultra2
              </h3>
              <p className="text-xs text-slate-300 font-bold">
                Starting @ <span className="text-lg font-black text-amber-400">{formatCurrency(30999)}</span>*
              </p>
            </div>

            <div className="pt-6 z-10 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400">Get cultpass Elite membership^</span>
              <button
                onClick={() => navigate('/shop?category=electronics')}
                className="bg-indigo-600 text-white font-extrabold text-xs py-2 px-4 rounded-xl shadow-md hover:bg-indigo-500 transition-colors"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Banner 3: Trade Old Gadgets / Laptops */}
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all">
            <div className="space-y-2 z-10">
              <div className="flex items-center justify-between">
                <span className="bg-white/20 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full backdrop-blur-md">
                  INTEL INSIDE
                </span>
                <span className="bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  UPGRADE BONUS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                Trade Old Gadgets
              </h3>
              <p className="text-xs text-blue-100 font-bold">
                Save big on laptop & tablet upgrades
              </p>
            </div>

            <div className="pt-6 z-10 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-blue-100">Exchange + Cash Offer</span>
              <button
                onClick={() => navigate('/shop?category=laptops')}
                className="bg-white text-blue-900 font-extrabold text-xs py-2 px-4 rounded-xl shadow-md hover:bg-slate-100 transition-colors"
              >
                Explore Laptops
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Flipkart Bank Discount Strip Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 block">
                10% Instant Discount on Bank Credit Cards & EMI
              </span>
              <p className="text-[11px] text-slate-500">ICICI Bank • HDFC Bank • Axis Bank • HSBC Card Transactions</p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 shrink-0">
            Apply at Checkout
          </span>
        </div>
      </section>

      {/* Flipkart Sub-Category Circular Explorer Tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Popular Electronics & Gadgets Explorer
            </h2>
            <Link to="/shop" className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
            {flipkartSubTiles.map((tile, idx) => (
              <button
                key={idx}
                onClick={() => handleSubTileClick(tile.search)}
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-white border border-amber-200/80 hover:border-indigo-500 hover:shadow-md transition-all group"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">{tile.icon}</span>
                <span className="text-[11px] font-bold text-slate-800 text-center truncate w-full">
                  {tile.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Flipkart Intel & Best Deals Product Rail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-extrabold uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Top Rated Deals</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Best Deals on Mobiles & Laptops
            </h2>
          </div>
          <Link to="/shop" className="text-xs font-extrabold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
            <span>Explore All Deals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} isLoading={isLoading} />
      </section>

      {/* Assurance Footer Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs font-extrabold text-slate-900 block">100% Brand Guarantee</span>
              <p className="text-[11px] text-slate-500">Genuine items direct from verified brand hubs</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <Zap className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <span className="text-xs font-extrabold text-slate-900 block">Express Doorstep Delivery</span>
              <p className="text-[11px] text-slate-500">Fast delivery with real-time tracking</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-indigo-600 shrink-0" />
            <div>
              <span className="text-xs font-extrabold text-slate-900 block">Easy No-Cost EMI</span>
              <p className="text-[11px] text-slate-500">Available on all major bank cards</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
