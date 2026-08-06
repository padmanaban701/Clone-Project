import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, User, Menu as MenuIcon, X, Sparkles, LogOut, Package, ChevronDown } from 'lucide-react';
import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useAuth } from '../../hooks/useAuth';
import { useFilter } from '../../hooks/useFilter';
import { mockProducts } from '../../data/mockProducts';
import { formatCurrency } from '../../utils/formatCurrency';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();
  const { searchQuery, setSearchQuery } = useFilter();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchSuggestions = searchQuery.trim()
    ? mockProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchFocused(false);
    navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handleSelectSuggestion = (slug) => {
    setIsSearchFocused(false);
    navigate(`/product/${slug}`);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#2874f0] text-white shadow-md transition-all">
      {/* Top Flipkart Announcement Bar */}
      <div className="bg-[#172337] text-slate-200 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 text-center font-medium flex items-center justify-center gap-1.5 sm:gap-2 leading-tight">
        <Sparkles className="w-3.5 h-3.5 text-[#ffe500] animate-pulse shrink-0" />
        <span className="truncate sm:whitespace-normal">Free Express Shipping on Orders Over ₹999! Use code <strong className="text-[#ffe500] font-bold">PROMO10</strong> for 10% OFF</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Flipkart-Style Brand Logo */}
          <Link to="/" className="flex flex-col items-start leading-none shrink-0 group">
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-2xl font-black italic tracking-tighter text-white">
                NEXUS
              </span>
              <span className="text-xs italic font-bold text-[#ffe500] bg-white/10 px-1.5 py-0.5 rounded">
                Plus
              </span>
            </div>
            <span className="text-[10px] text-slate-200 font-medium tracking-wide flex items-center gap-0.5 hover:underline mt-0.5">
              Explore <span className="text-[#ffe500] font-extrabold italic">Plus ⭐</span>
            </span>
          </Link>

          {/* Flipkart Wide Search Bar with Live Autocomplete Popover */}
          <div ref={searchContainerRef} className="hidden md:block flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                placeholder="Search for Products, Brands and More..."
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                className="w-full bg-white text-slate-900 text-sm rounded-lg py-2.5 pl-10 pr-8 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#ffe500] placeholder:text-slate-400 font-medium"
              />
              <Search className="w-4 h-4 text-[#2874f0] absolute left-3.5 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear Search Query"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Instant Search Suggestions Popover */}
            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-slate-900">
                <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">Matching Products</span>
                  <span className="text-[11px] text-[#2874f0] font-semibold px-2">{searchSuggestions.length} found</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                  {searchSuggestions.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSelectSuggestion(product.slug)}
                      className="w-full p-2.5 flex items-center gap-3 hover:bg-blue-50/60 transition-colors text-left group"
                    >
                      <img
                        src={product.images ? product.images[0] : ''}
                        alt={product.name}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#2874f0] truncate transition-colors">
                          {product.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">{product.category}</span>
                      </div>
                      <span className="text-xs font-black text-[#2874f0] shrink-0">
                        {formatCurrency(product.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Right Navigation Actions */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* User Dropdown */}
            {isAuthenticated ? (
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-all border border-white/20">
                  <User className="w-4 h-4 text-[#ffe500]" />
                  <span>{user?.name || 'Padmanaban'}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/80" />
                </MenuButton>

                <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 p-1 z-50 text-slate-900 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/orders"
                        className={`flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                          active ? 'bg-indigo-50 text-[#2874f0]' : 'text-slate-700'
                        }`}
                      >
                        <Package className="w-4 h-4 text-[#2874f0]" />
                        My Orders
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/wishlist"
                        className={`flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                          active ? 'bg-indigo-50 text-[#2874f0]' : 'text-slate-700'
                        }`}
                      >
                        <Heart className="w-4 h-4 text-red-500" />
                        Saved Wishlist ({wishlistCount})
                      </Link>
                    )}
                  </MenuItem>

                  <div className="my-1 border-t border-slate-100" />

                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-xl transition-colors text-left ${
                          active ? 'bg-red-50 text-red-600' : 'text-red-500'
                        }`}
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="bg-white text-[#2874f0] font-extrabold text-xs px-6 py-2 rounded-md hover:bg-slate-100 transition-all shadow-sm"
              >
                Login
              </button>
            )}

            {/* Shop Catalog Link */}
            <Link
              to="/shop"
              className={`text-xs font-bold hover:text-[#ffe500] transition-colors ${
                location.pathname === '/shop' ? 'text-[#ffe500]' : 'text-white'
              }`}
            >
              Shop Catalog
            </Link>

            {/* My Orders Link */}
            <Link
              to="/orders"
              className={`text-xs font-bold hover:text-[#ffe500] transition-colors ${
                location.pathname === '/orders' ? 'text-[#ffe500]' : 'text-white'
              }`}
            >
              My Orders
            </Link>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="flex items-center gap-1 text-xs font-bold hover:text-[#ffe500] transition-colors relative"
            >
              <Heart className="w-4 h-4" />
              <span>Saved</span>
              {wishlistCount > 0 && (
                <span className="bg-red-500 text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center -mt-2 -ml-1 border border-white">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-[#ffe500] hover:bg-amber-400 text-slate-950 font-black text-xs px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-slate-950" />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="bg-slate-900 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-[#ffe500]"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#ffe500] text-slate-950 font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton aria-label="Toggle Mobile Navigation Menu" className="p-2 text-white hover:text-[#ffe500]">
                    {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                  </DisclosureButton>

                  <DisclosurePanel className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 space-y-3 shadow-xl z-50 text-slate-900">
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <input
                        type="text"
                        placeholder="Search for Products, Brands..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-100 text-slate-900 text-xs rounded-xl py-2.5 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-[#2874f0]"
                      />
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </form>

                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs font-bold text-slate-700">
                      <Link to="/shop" className="block py-2 hover:text-[#2874f0]">Shop Catalog</Link>
                      <Link to="/orders" className="block py-2 hover:text-[#2874f0]">My Orders</Link>
                      <Link to="/wishlist" className="block py-2 hover:text-[#2874f0]">Saved Wishlist ({wishlistCount})</Link>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>

        </div>
      </div>
    </header>
  );
};
