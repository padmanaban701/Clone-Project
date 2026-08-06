import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, Headphones, Mail, Heart } from 'lucide-react';
import { useFilter } from '../../hooks/useFilter';

export const Footer = () => {
  const { setSelectedCategory } = useFilter();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-slate-800">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl shrink-0">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm">Free Global Shipping</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">On all orders over $100 with zero surprise fees</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm">Secure Payment</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Encrypted 256-bit SSL transaction protection</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl shrink-0">
              <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm">30-Day Easy Returns</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Hassle-free money back guarantee return policy</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl shrink-0">
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm">24/7 Dedicated Support</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">Always available concierge customer assistance</p>
            </div>
          </div>
        </div>

        {/* Footer Links & Newsletter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 py-8 sm:py-12">
          
          {/* Brand Info */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl sm:text-2xl font-black text-white tracking-tight">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-400 text-white flex items-center justify-center text-base sm:text-lg font-black">
                N
              </span>
              NEXUS STORE.
            </Link>
            <p className="text-xs text-slate-400 mt-3 sm:mt-4 leading-relaxed max-w-sm">
              Discover curated luxury essentials, cutting-edge electronics, minimalist home decor, and timeless fashion accessories designed for modern lifestyle elevate.
            </p>
            
            {/* Newsletter Form */}
            <div className="mt-5 sm:mt-6">
              <p className="text-xs font-bold text-white mb-2">Subscribe to Exclusive Offers</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="w-full bg-slate-800 border border-slate-700 text-xs rounded-xl py-2.5 pl-9 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Shop Categories</h5>
            <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
              <li><Link to="/shop?category=electronics" onClick={() => setSelectedCategory('electronics')} className="hover:text-indigo-400 transition-colors">Electronics & Audio</Link></li>
              <li><Link to="/shop?category=fashion" onClick={() => setSelectedCategory('fashion')} className="hover:text-indigo-400 transition-colors">Fashion & Apparel</Link></li>
              <li><Link to="/shop?category=mobiles" onClick={() => setSelectedCategory('mobiles')} className="hover:text-indigo-400 transition-colors">Mobiles & 5G</Link></li>
              <li><Link to="/shop?category=appliances" onClick={() => setSelectedCategory('appliances')} className="hover:text-indigo-400 transition-colors">TVs & Appliances</Link></li>
              <li><Link to="/shop?category=home" onClick={() => setSelectedCategory('home')} className="hover:text-indigo-400 transition-colors">Home & Furniture</Link></li>
              <li><Link to="/shop?category=grocery" onClick={() => setSelectedCategory('grocery')} className="hover:text-indigo-400 transition-colors">Grocery & Essentials</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Customer Care</h5>
            <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
              <li><Link to="/orders" className="hover:text-indigo-400 transition-colors">Order Tracking</Link></li>
              <li><Link to="/shipping-delivery" className="hover:text-indigo-400 transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns-exchanges" className="hover:text-indigo-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/help-center" className="hover:text-indigo-400 transition-colors">FAQs & Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">Company</h5>
            <ul className="space-y-2 sm:space-y-2.5 text-xs text-slate-400">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About NEXUS</Link></li>
              <li><Link to="/sustainability" className="hover:text-indigo-400 transition-colors">Sustainability Commitment</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers & Culture</Link></li>
              <li><Link to="/privacy-terms" className="hover:text-indigo-400 transition-colors">Privacy & Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} NEXUS E-Commerce. Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" /> using React 19 & Vite.
          </p>
          <div className="flex items-center justify-center gap-4 text-slate-400 font-semibold text-[11px]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Apple Pay</span>
            <span>PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
