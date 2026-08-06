import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Zap, ArrowRight, Clock } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

export const HeroBannerSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: 'MEGA FREEDOM SALE',
      title: 'Next-Gen Smartphones & 5G Flagships',
      subtitle: 'Flat 30% OFF + Extra ₹3,000 Exchange Bonus on top brands',
      price: 21999,
      originalPrice: 29999,
      badge: 'Limited Time Deal',
      bgGradient: 'from-blue-950 via-slate-900 to-indigo-950',
      accentColor: 'from-blue-500 to-cyan-400',
      btnText: 'Shop 5G Mobiles',
      link: '/shop?category=mobiles',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      tag: 'ULTRA TECH FEST 2026',
      title: 'Premium Laptops & Workstations',
      subtitle: 'Intel Core Ultra & Apple M3 Max powered notebooks ready for creative pros',
      price: 64990,
      originalPrice: 79999,
      badge: 'Best Seller',
      bgGradient: 'from-slate-950 via-indigo-950 to-purple-950',
      accentColor: 'from-indigo-400 via-purple-300 to-pink-400',
      btnText: 'Explore Laptops',
      link: '/shop?category=laptops',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      tag: 'SUMMER FASHION FEST',
      title: 'Curated Luxury Apparel & Accessories',
      subtitle: 'Elevate your wardrobe with minimalist premium apparel, leather bags & footwear',
      price: 1999,
      originalPrice: 3499,
      badge: 'New Collection',
      bgGradient: 'from-amber-950 via-stone-900 to-slate-950',
      accentColor: 'from-amber-300 via-orange-300 to-yellow-200',
      btnText: 'Discover Fashion',
      link: '/shop?category=fashion',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-r ${activeSlide.bgGradient} text-white p-6 sm:p-10 lg:p-14 shadow-2xl border border-slate-800 transition-all duration-700 min-h-[360px] sm:min-h-[420px] flex items-center`}>
        
        {/* Background Decorative Blur Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeSlide.tag}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                <Clock className="w-3 h-3 animate-spin" />
                <span>Ends Tonight</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              <span className={`bg-gradient-to-r ${activeSlide.accentColor} bg-clip-text text-transparent`}>
                {activeSlide.title}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-medium">
              {activeSlide.subtitle}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="text-slate-200">
                <span className="text-xs text-slate-400 block font-semibold">Special Offer Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-white">{formatCurrency(activeSlide.price)}</span>
                  <span className="text-xs text-slate-400 line-through font-bold">{formatCurrency(activeSlide.originalPrice)}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigate(activeSlide.link)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <span>{activeSlide.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Graphic Image Banner Column */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative w-full h-72 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white bg-slate-900/60 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400 fill-current" />
                  {activeSlide.badge}
                </span>
                <span className="text-amber-400 font-black">Limited Stock</span>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
