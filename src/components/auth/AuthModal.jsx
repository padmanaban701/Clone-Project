import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Mail, Lock, User, ShoppingBag, ArrowRight, UserPlus } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const AuthModal = () => {
  const {
    isAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    closeAuthModal,
    login,
    register
  } = useAuth();

  const [email, setEmail] = useState('demo.customer@example.com');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('');

  const isLoginMode = authModalMode === 'login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      await login(email, password);
    } else {
      await register(name || 'New User', email, password);
    }
  };

  return (
    <Dialog.Root open={isAuthModalOpen} onOpenChange={closeAuthModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] max-w-4xl bg-white rounded-3xl shadow-2xl z-50 overflow-hidden outline-none animate-in zoom-in-95 duration-200">
          
          {/* Modal Close Button */}
          <button
            onClick={closeAuthModal}
            aria-label="Close Authentication Modal"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
            
            {/* Left Side: Flipkart Signature Blue Panel */}
            <div className="md:col-span-5 bg-[#2874f0] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <Dialog.Title className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                  {isLoginMode ? 'Login' : "Looks like you're new here!"}
                </Dialog.Title>
                <Dialog.Description className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                  {isLoginMode
                    ? 'Get access to your Orders, Wishlist, and Recommendations'
                    : 'Sign up with your email address to get started with NEXUS Plus'}
                </Dialog.Description>
              </div>

              <div className="relative z-10 py-6 my-auto text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 mx-auto flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl">
                  {isLoginMode ? (
                    <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-[#ffe500]" />
                  ) : (
                    <UserPlus className="w-10 h-10 sm:w-12 sm:h-12 text-[#ffe500]" />
                  )}
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/20 text-[11px] text-blue-100 font-semibold">
                ⭐ NEXUS Plus Membership Benefits Included
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {!isLoginMode && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="Padmanaban"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2874f0] font-medium"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Enter Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="demo.customer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2874f0] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Enter Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2874f0] font-medium"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-snug">
                  By continuing, you agree to NEXUS&apos;s <span className="text-[#2874f0] font-semibold hover:underline cursor-pointer">Terms of Use</span> and <span className="text-[#2874f0] font-semibold hover:underline cursor-pointer">Privacy Policy</span>.
                </p>

                {/* Flipkart Orange Action Button */}
                <button
                  type="submit"
                  className="w-full bg-[#fb641b] hover:bg-[#e05510] text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-orange-200 transition-all uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>{isLoginMode ? 'Login' : 'Continue & Register'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Mode Toggle Button inside Modal */}
              <div className="pt-4 border-t border-slate-100 text-center">
                {isLoginMode ? (
                  <button
                    onClick={() => setAuthModalMode('register')}
                    className="w-full bg-white hover:bg-slate-50 text-[#2874f0] font-extrabold text-xs py-3 px-4 rounded-xl border border-slate-200 shadow-xs transition-all text-center"
                  >
                    New to NEXUS? Create an account
                  </button>
                ) : (
                  <button
                    onClick={() => setAuthModalMode('login')}
                    className="w-full bg-white hover:bg-slate-50 text-[#2874f0] font-extrabold text-xs py-3 px-4 rounded-xl border border-slate-200 shadow-xs transition-all text-center"
                  >
                    Existing User? Log in
                  </button>
                )}
              </div>
            </div>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
