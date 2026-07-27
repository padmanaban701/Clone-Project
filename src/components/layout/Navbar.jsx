import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, User, Menu as MenuIcon, X, Sparkles, LogOut, Settings } from 'lucide-react';
import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useAuth } from '../../hooks/useAuth';
import { useFilter } from '../../hooks/useFilter';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useFilter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== '/shop') {
      navigate('/shop');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center font-medium flex items-center justify-center gap-1.5 sm:gap-2 leading-tight">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span className="truncate sm:whitespace-normal">Free Express Shipping on Orders Over $100! Use code <strong className="text-amber-400 font-bold">PROMO10</strong> for 10% OFF</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight shrink-0">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-black text-sm sm:text-base shadow-md shadow-indigo-200">
              N
            </span>
            <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
              NEXUS <span className="text-indigo-600">STORE</span>
            </span>
          </Link>

          {/* Search Bar (Desktop) */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-md relative items-center"
          >
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100/80 border border-slate-200 text-slate-900 text-sm rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </form>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            <Link 
              to="/" 
              className={`hover:text-indigo-600 transition-colors ${location.pathname === '/' ? 'text-indigo-600 font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`hover:text-indigo-600 transition-colors ${location.pathname === '/shop' ? 'text-indigo-600 font-bold' : ''}`}
            >
              Shop Catalog
            </Link>
            <Link 
              to="/wishlist" 
              className={`hover:text-indigo-600 transition-colors ${location.pathname === '/wishlist' ? 'text-indigo-600 font-bold' : ''}`}
            >
              Saved
            </Link>
          </nav>

          {/* Actions (Wishlist, Cart, Headless UI Menu) */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Wishlist Link Icon */}
            <Link
              to="/wishlist"
              className="p-2 text-slate-600 hover:text-red-500 rounded-full hover:bg-slate-100 transition-colors relative"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Cart Button Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 sm:px-3.5 rounded-full text-xs font-bold transition-all shadow-md shadow-indigo-200 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[11px]">
                {itemCount}
              </span>
            </button>

            {/* Headless UI Menu Component for User Profile */}
            {isAuthenticated ? (
              <Menu as="div" className="relative inline-block text-left z-50">
                <MenuButton className="flex items-center gap-2 p-1 rounded-full border border-slate-200 hover:border-indigo-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 focus:outline-none py-1">
                  <div className="px-4 py-3">
                    <p className="text-xs text-slate-500">Signed in as</p>
                    <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                    <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to="/wishlist"
                          className={`${
                            focus ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700'
                          } group flex items-center w-full px-4 py-2 text-xs font-semibold`}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          My Saved Wishlist ({wishlistCount})
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <button
                          onClick={logout}
                          className={`${
                            focus ? 'bg-red-50 text-red-600' : 'text-red-500'
                          } group flex items-center w-full px-4 py-2 text-xs font-semibold`}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Logout
                        </button>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            ) : (
              <Link
                to="/login"
                className="p-2 text-slate-600 hover:text-indigo-600 rounded-full hover:bg-slate-100 transition-colors"
                title="Sign In"
              >
                <User className="w-5 h-5" />
              </Link>
            )}

          </div>
        </div>

        {/* Headless UI Disclosure for Mobile Navigation */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex md:hidden items-center justify-between pb-3 gap-2">
                <form onSubmit={handleSearchSubmit} className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-100 border border-slate-200 text-slate-900 text-xs rounded-xl py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                </form>

                <DisclosureButton className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100">
                  {open ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                </DisclosureButton>
              </div>

              <DisclosurePanel className="md:hidden py-3 border-t border-slate-100 flex flex-col gap-2 font-semibold text-xs text-slate-700">
                <Link to="/" className="px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/shop" className="px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Shop Catalog</Link>
                <Link to="/wishlist" className="px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Saved Items ({wishlistCount})</Link>
                {isAuthenticated ? (
                  <button onClick={logout} className="px-3 py-2 rounded-lg text-left text-red-500 hover:bg-red-50 transition-colors">Logout ({user.name})</button>
                ) : (
                  <Link to="/login" className="px-3 py-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors">Sign In / Register</Link>
                )}
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

      </div>
    </header>
  );
};
