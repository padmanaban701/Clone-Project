import { Leaf, RefreshCw, Box, Sun, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SustainabilityPage = () => {
  const commitments = [
    {
      icon: Leaf,
      title: '100% Recyclable Packaging',
      description: 'Zero single-use plastics. All shipments use certified recycled paper, biodegradable tape, and plant-based mailers.'
    },
    {
      icon: RefreshCw,
      title: 'Carbon Neutral Delivery',
      description: 'We offset 100% of carbon emissions generated from last-mile fulfillment through verified Reforestation Initiatives.'
    },
    {
      icon: Sun,
      title: 'Solar Powered Hubs',
      description: 'Over 80% of our global fulfillment centers operate on rooftop solar energy and low-consumption smart grids.'
    },
    {
      icon: Box,
      title: 'Ethical Sourcing Standards',
      description: 'We require all manufacturing partners to uphold strict fair-wage labor standards and non-toxic production methods.'
    }
  ];

  const milestones = [
    { year: '2024', goal: 'Eliminated 95% of plastic air pillows from outbound packages.' },
    { year: '2025', goal: 'Achieved 100% carbon neutrality across all express shipping routes.' },
    { year: '2026', goal: 'Targeting 10,000,000 trees planted via verified global forest restoration partners.' },
    { year: '2030', goal: 'Complete net-zero carbon footprint across all operations and Tier 1 supply chain.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-emerald-950 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-emerald-800">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-900/50 to-slate-950 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Planet First</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Sustainability & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent">Eco Commitment</span>.
            </h1>

            <p className="text-emerald-100 text-sm sm:text-base lg:text-lg leading-relaxed">
              We believe great commerce shouldn’t cost the earth. Discover how NEXUS is building a greener future through sustainable packaging, carbon offsets, and ethical sourcing.
            </p>
          </div>
        </div>
      </div>

      {/* Core Commitments Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Our Eco Commitments</h2>
          <p className="text-xs sm:text-sm text-slate-500">Tangible actions we take every day to minimize environmental impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-emerald-200 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Environmental Impact Counter Banner */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="space-y-2 pt-4 md:pt-0">
            <span className="text-4xl font-black text-emerald-600">5.2M+</span>
            <p className="text-xs font-bold text-slate-700">Plastic Bags Prevented</p>
            <p className="text-[11px] text-slate-400">Replaced with biodegradable paper packaging</p>
          </div>
          <div className="space-y-2 pt-4 md:pt-0">
            <span className="text-4xl font-black text-emerald-600">100%</span>
            <p className="text-xs font-bold text-slate-700">Carbon Offset Shipping</p>
            <p className="text-[11px] text-slate-400">On every domestic and international order</p>
          </div>
          <div className="space-y-2 pt-4 md:pt-0">
            <span className="text-4xl font-black text-emerald-600">450K+</span>
            <p className="text-xs font-bold text-slate-700">Trees Planted</p>
            <p className="text-[11px] text-slate-400">In partnership with global reforestation networks</p>
          </div>
        </div>
      </div>

      {/* Sustainability Roadmap */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Green Roadmap 2024 - 2030</h2>
          <p className="text-xs sm:text-sm text-slate-500">Our measurable milestones towards net-zero carbon operations.</p>
        </div>

        <div className="space-y-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 flex items-start gap-4 hover:border-emerald-300 transition-colors">
              <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-black shrink-0">
                {m.year}
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-semibold text-slate-800">{m.goal}</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
