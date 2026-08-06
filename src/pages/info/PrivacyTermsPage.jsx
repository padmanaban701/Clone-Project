import { useState } from 'react';
import { ShieldCheck, FileText, Lock, Eye, Download, CheckCircle2 } from 'lucide-react';

export const PrivacyTermsPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-indigo-600" />
          <span>Legal & Trust Center</span>
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Privacy Policy & Terms of Service</h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          We respect your rights, prioritize data security, and maintain complete transparency in how we operate.
        </p>

        {/* Tab Selector */}
        <div className="inline-flex bg-slate-200/80 p-1.5 rounded-2xl border border-slate-300/60 mt-4">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-slate-700">
        
        {activeTab === 'privacy' ? (
          <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">NEXUS Store Privacy Policy</h2>
                <p className="text-xs text-slate-400 mt-0.5">Last updated: August 2026</p>
              </div>
              <button
                onClick={() => alert('Downloading Privacy Policy PDF...')}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-2 rounded-xl"
              >
                <Download className="w-4 h-4" />
                <span>PDF Version</span>
              </button>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-4 h-4 text-indigo-600" />
                1. Information We Collect
              </h3>
              <p>
                When you visit or make a purchase on NEXUS Store, we collect information necessary to process your transaction, deliver products, and improve our services. This includes personal identifiers (name, shipping address, email), payment details processed via 256-bit encrypted gateways, and browsing data.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-4 h-4 text-indigo-600" />
                2. How We Protect & Use Your Data
              </h3>
              <p>
                We do NOT sell, rent, or trade your personal data to third parties. Your data is strictly used for order fulfillment, customer support concierge assistance, personalized search recommendations, and security fraud prevention.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                3. Your Data Privacy Rights
              </h3>
              <p>
                You have the right to request access to your stored personal data, request account deletion, or opt out of marketing communications at any time directly through your account preferences or by contacting privacy@nexusstore.com.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">NEXUS Store Terms of Service</h2>
                <p className="text-xs text-slate-400 mt-0.5">Last updated: August 2026</p>
              </div>
              <button
                onClick={() => alert('Downloading Terms of Service PDF...')}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-2 rounded-xl"
              >
                <Download className="w-4 h-4" />
                <span>PDF Version</span>
              </button>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">1. Acceptance of Terms</h3>
              <p>
                By accessing or purchasing from NEXUS Store, you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, please refrain from using our platform.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">2. Product Pricing & Availability</h3>
              <p>
                All prices listed on NEXUS are inclusive of applicable local taxes unless stated otherwise. We reserve the right to correct pricing errors or modify item availability prior to shipping confirmation.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">3. Order Fulfillment & Warranty</h3>
              <p>
                All products purchased through NEXUS come with a standard 1-year brand warranty and 30-day money-back return protection as outlined in our Returns & Exchanges policy.
              </p>
            </section>
          </div>
        )}
      </div>

    </div>
  );
};
