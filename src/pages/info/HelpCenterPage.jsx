import { useState } from 'react';
import { Search, ChevronDown, Headphones, Mail, Phone, MessageSquare, HelpCircle, Package, CreditCard, Shield, RefreshCw } from 'lucide-react';

export const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState(null);

  const categories = [
    { name: 'All', icon: HelpCircle },
    { name: 'Orders & Tracking', icon: Package },
    { name: 'Payments & Offers', icon: CreditCard },
    { name: 'Returns & Refund', icon: RefreshCw },
    { name: 'Account & Security', icon: Shield }
  ];

  const faqs = [
    {
      id: 1,
      category: 'Orders & Tracking',
      question: 'How do I track my live order status?',
      answer: 'You can view real-time GPS tracking for your order by logging in, navigating to "My Orders" in the header menu, and clicking on your active order ID.'
    },
    {
      id: 2,
      category: 'Orders & Tracking',
      question: 'Can I modify or cancel my order after placing it?',
      answer: 'Yes! Orders can be canceled or delivery addresses modified within 1 hour of placing the order before it enters dispatch state.'
    },
    {
      id: 3,
      category: 'Payments & Offers',
      question: 'What payment methods are supported on NEXUS?',
      answer: 'We accept Credit/Debit cards (Visa, Mastercard, Amex), UPI (Google Pay, PhonePe, Paytm), NetBanking, Apple Pay, PayPal, and Cash on Delivery (COD).'
    },
    {
      id: 4,
      category: 'Payments & Offers',
      question: 'How do I apply promotional discount codes?',
      answer: 'Enter your coupon code (e.g. PROMO10) during checkout in the Order Summary section before confirming your payment.'
    },
    {
      id: 5,
      category: 'Returns & Refund',
      question: 'How long does it take to process a refund?',
      answer: 'Once your returned item passes quality verification (usually within 24 hours of pickup), refunds are processed instantly to your NEXUS wallet or in 2-4 business days for bank cards.'
    },
    {
      id: 6,
      category: 'Account & Security',
      question: 'How do I update my profile details or shipping address?',
      answer: 'Navigate to your User Profile menu at the top right of the navbar to edit phone numbers, saved addresses, or default payment preferences.'
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Header with Search Bar */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-slate-800 text-center space-y-6">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/50 to-slate-900 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              <Headphones className="w-4 h-4 text-indigo-400" />
              <span>NEXUS Help Center</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              How Can We <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">Help You Today?</span>
            </h1>

            {/* Instant Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search questions, orders, payment issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-slate-900 text-sm font-medium rounded-2xl py-3.5 pl-12 pr-4 shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/40"
              />
              <Search className="w-5 h-5 text-indigo-600 absolute left-4 top-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-indigo-600'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-indigo-600 text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="text-base font-bold text-slate-700">No matching FAQs found</h4>
              <p className="text-xs text-slate-400">Try adjusting your search query or select another category above.</p>
            </div>
          )}
        </div>
      </div>

      {/* 24/7 Concierge Support Banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h3 className="text-2xl font-black">Still Need Assistance?</h3>
          <p className="text-xs text-slate-300">Our customer support team is available 24 hours a day, 7 days a week.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-2">
            <MessageSquare className="w-6 h-6 text-indigo-400 mx-auto" />
            <h4 className="font-bold text-sm">24/7 Live Chat</h4>
            <p className="text-[11px] text-slate-300">Instant response time with concierge agents</p>
            <button onClick={() => alert('Starting Live Concierge Chat...')} className="text-xs font-bold text-indigo-300 hover:text-white underline mt-2">Start Chat</button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-2">
            <Mail className="w-6 h-6 text-indigo-400 mx-auto" />
            <h4 className="font-bold text-sm">Email Support</h4>
            <p className="text-[11px] text-slate-300">support@nexusstore.com</p>
            <a href="mailto:support@nexusstore.com" className="text-xs font-bold text-indigo-300 hover:text-white underline mt-2 block">Send Email</a>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-2">
            <Phone className="w-6 h-6 text-indigo-400 mx-auto" />
            <h4 className="font-bold text-sm">Toll-Free Hotline</h4>
            <p className="text-[11px] text-slate-300">1-800-NEXUS-SHOP</p>
            <span className="text-xs font-bold text-indigo-300 mt-2 block">Mon - Sun (24 Hours)</span>
          </div>
        </div>
      </div>

    </div>
  );
};
