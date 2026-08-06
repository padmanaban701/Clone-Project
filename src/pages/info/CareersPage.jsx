import { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Sparkles, Check } from 'lucide-react';

export const CareersPage = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [appliedJob, setAppliedJob] = useState(null);

  const departments = ['All', 'Engineering', 'Product & Design', 'Marketing', 'Logistics & Operations'];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Engineer (React & Next.js)',
      department: 'Engineering',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      description: 'Lead modern micro-frontend UI development, performance tuning, and high-conversion e-commerce components.'
    },
    {
      id: 2,
      title: 'Staff Product Manager - Search & AI',
      department: 'Product & Design',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Own personalized recommendation algorithms and instant visual search pipelines across mobile and web platforms.'
    },
    {
      id: 3,
      title: 'Lead UX/UI Designer',
      department: 'Product & Design',
      location: 'Remote / London',
      type: 'Full-time',
      description: 'Craft elegant design systems, glassmorphic UI assets, and fluid micro-interactions for millions of shoppers.'
    },
    {
      id: 4,
      title: 'Supply Chain Operations Manager',
      department: 'Logistics & Operations',
      location: 'Bangalore / On-site',
      type: 'Full-time',
      description: 'Optimize warehouse automation, last-mile delivery routes, and vendor partner integration.'
    },
    {
      id: 5,
      title: 'Performance Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive multi-channel customer acquisition campaigns, brand partnerships, and social growth marketing.'
    }
  ];

  const filteredJobs = selectedDept === 'All'
    ? openPositions
    : openPositions.filter(job => job.department === selectedDept);

  const benefits = [
    'Competitive Salary + Equity Stock Options',
    'Comprehensive Health & Wellness Coverage',
    '100% Flexible Remote & Hybrid Work Models',
    'Annual $2,500 Learning & Home Office Stipend',
    'Unlimited PTO & Mandatory Wellness Days',
    'Parental Leave & Family Support Grants'
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-indigo-900/40 to-purple-950 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>Join NEXUS Team</span>
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Shape the Future of <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-300 bg-clip-text text-transparent">Digital Commerce</span>.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              We are a team of curious builders, designers, and creators who believe in crafting fast, beautiful, and effortless shopping experiences for people around the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Perks & Culture Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Why You'll Love Working Here</h2>
          <p className="text-xs sm:text-sm text-slate-500">We invest heavily in our team's growth, wellbeing, and creative freedom.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4 hover:border-indigo-300 transition-colors">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Open Opportunities</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Explore open roles across engineering, product, marketing and logistics.</p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-200/70 p-1.5 rounded-2xl border border-slate-300/60">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedDept === dept
                    ? 'bg-white text-indigo-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-indigo-100">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">{job.description}</p>
              </div>

              <button
                onClick={() => setAppliedJob(job.title)}
                className="bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold px-5 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Applied Confirmation Toast Modal */}
      {appliedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border border-slate-100">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Application Submitted!</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Thank you for applying for <strong className="text-indigo-600">{appliedJob}</strong>. Our talent team will review your application and respond within 48 hours.
            </p>
            <button
              onClick={() => setAppliedJob(null)}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-3 rounded-xl transition-colors"
            >
              Got It
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
