import { Shield, Sparkles, Award, Globe, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const stats = [
    { label: 'Happy Customers', value: '2.5M+' },
    { label: 'Curated Products', value: '50K+' },
    { label: 'Global Hubs', value: '18' },
    { label: 'Satisfaction Rate', value: '99.4%' }
  ];

  const pillars = [
    {
      icon: Sparkles,
      title: 'Uncompromising Quality',
      description: 'Every product in our catalog undergoes multi-tier quality checks to guarantee authenticity, durability, and luxury aesthetics.'
    },
    {
      icon: Globe,
      title: 'Global Fast Shipping',
      description: 'Leveraging distributed smart fulfillment centers worldwide to bring express 2-day delivery right to your doorstep.'
    },
    {
      icon: Award,
      title: 'Customer Obsession',
      description: '24/7 dedicated concierge service ensuring seamless shopping, transparent tracking, and 30-day effortless returns.'
    },
    {
      icon: Shield,
      title: 'Ethical & Secure',
      description: '256-bit bank-grade encryption paired with eco-conscious supply chains and verified sustainable manufacturing partners.'
    }
  ];

  const leaders = [
    {
      name: 'Elena Rostova',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Ex-E-commerce executive passionate about reshaping modern shopping through high-touch design and technology.'
    },
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneer in real-time inventory systems and cloud architecture with 15+ years scaling digital retail.'
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Product Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Crafting minimalist, intuitive visual experiences that make shopping seamless and delightful.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>About NEXUS Store</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Redefining Modern <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">E-Commerce Excellence</span>.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Founded with the vision to bridge cutting-edge technology and premium lifestyle products, NEXUS is your curated destination for electronics, fashion, home decor, and daily essentials.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-black px-6 py-3.5 rounded-2xl shadow-lg transition-all active:scale-95"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Mission & Pillars */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Our Core Pillars</h2>
          <p className="text-xs sm:text-sm text-slate-500">Built on trust, speed, and design integrity to provide an unparalleled shopping experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Meet Our Leadership</h2>
          <p className="text-xs sm:text-sm text-slate-500">Driven by innovators, designers, and e-commerce veterans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group">
              <div className="h-64 overflow-hidden relative">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-bold">{leader.name}</h4>
                  <p className="text-xs text-indigo-300 font-semibold">{leader.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Promise Banner */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <Heart className="w-10 h-10 text-pink-300 mx-auto fill-current animate-pulse" />
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Our Promise To You</h2>
        <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl mx-auto leading-relaxed">
          We believe shopping should be effortless, inspiring, and completely risk-free. If you ever have a question or need assistance, our support concierge is always here for you.
        </p>
      </div>

    </div>
  );
};
