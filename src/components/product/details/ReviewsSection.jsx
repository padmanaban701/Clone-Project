import { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, MessageSquare, Filter } from 'lucide-react';
import { Rate, Progress } from 'antd';

export const ReviewsSection = ({ rating = 4.8, reviewCount = 0, reviews = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const ratingCounts = {
    5: Math.round(reviewCount * 0.75),
    4: Math.round(reviewCount * 0.18),
    3: Math.round(reviewCount * 0.04),
    2: Math.round(reviewCount * 0.02),
    1: Math.round(reviewCount * 0.01)
  };

  const filteredReviews = selectedFilter === 'all'
    ? reviews
    : reviews.filter((r) => r.rating === Number(selectedFilter));

  return (
    <div id="reviews-section" className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-indigo-600" />
          Customer Ratings & Reviews
        </h3>
      </div>

      {/* Ratings Score Summary & Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-200/80">
        
        {/* Score & Star Rating */}
        <div className="md:col-span-5 text-center md:border-r md:border-slate-200 pr-0 md:pr-6">
          <span className="text-5xl font-black text-slate-900 tracking-tight">{rating}</span>
          <div className="flex justify-center my-2">
            <Rate disabled allowHalf defaultValue={rating} value={rating} style={{ fontSize: 20, color: '#f59e0b' }} />
          </div>
          <p className="text-xs font-bold text-slate-500">{reviewCount.toLocaleString()} Verified Customer Ratings</p>
        </div>

        {/* 5-Star Breakdown Progress Bars */}
        <div className="md:col-span-7 space-y-1.5">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = ratingCounts[star] || 0;
            const percent = reviewCount > 0 ? Math.round((count / reviewCount) * 100) : 0;

            return (
              <div key={star} className="flex items-center gap-3 text-xs">
                <span className="w-8 font-bold text-slate-700 flex items-center gap-0.5">
                  {star} <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                </span>
                <div className="flex-1">
                  <Progress percent={percent} showInfo={false} strokeColor="#4f46e5" trailColor="#e2e8f0" size="small" />
                </div>
                <span className="w-12 text-right text-slate-400 font-mono text-[11px]">{percent}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {['all', '5', '4', '3'].map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedFilter === f
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {f === 'all' ? 'All Reviews' : `${f} Stars`}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.length === 0 ? (
          <p className="text-xs text-slate-400 italic text-center py-4">No reviews match the selected filter.</p>
        ) : (
          filteredReviews.map((rev) => (
            <div key={rev.id} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.user} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{rev.user}</span>
                      {rev.verified && (
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                          <CheckCircle className="w-2.5 h-2.5" /> Verified Purchase
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg text-xs font-bold text-amber-700">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {rev.rating}
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900">{rev.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{rev.content}</p>

              {/* Review User Photos */}
              {rev.images && rev.images.length > 0 && (
                <div className="flex gap-2 pt-2">
                  {rev.images.map((img, i) => (
                    <img key={i} src={img} alt="Review attachment" className="w-16 h-16 rounded-xl object-cover border border-slate-200" />
                  ))}
                </div>
              )}

              {/* Helpful Counter */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100">
                <button className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 font-bold transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({rev.likes || 0})
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
