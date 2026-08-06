import { useState, useRef } from 'react';
import { Play, Maximize2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { ImageLightboxModal } from './modals/ImageLightboxModal';

export const ProductGallery = ({ images = [], videos = [], name = 'Product', badge = '' }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [activeType, setActiveType] = useState('image'); // 'image' | 'video'
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ opacity: 0, backgroundPosition: '0% 0%' });

  const containerRef = useRef(null);

  const activeImage = images[activeMediaIndex] || images[0] || '';
  const activeVideo = videos[0] || null;

  // Hover zoom lens math
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      opacity: 1,
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${activeImage})`
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ opacity: 0, backgroundPosition: '0% 0%' });
  };

  const handleNextMedia = () => {
    if (activeType === 'image') {
      setActiveMediaIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrevMedia = () => {
    if (activeType === 'image') {
      setActiveMediaIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image / Video Viewport */}
      <div className="relative h-[360px] sm:h-[440px] lg:h-[460px] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
        
        {activeType === 'image' ? (
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-full relative cursor-zoom-in flex items-center justify-center p-4"
          >
            <img
              src={activeImage}
              alt={name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* Zoom Overlay Lens */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200 bg-no-repeat bg-[length:220%_220%]"
              style={{
                opacity: zoomStyle.opacity,
                backgroundImage: zoomStyle.backgroundImage,
                backgroundPosition: zoomStyle.backgroundPosition
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center relative">
            {activeVideo?.url ? (
              <video
                src={activeVideo.url}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-white text-center p-6">
                <Play className="w-12 h-12 text-indigo-500 mx-auto mb-2 animate-bounce" />
                <p className="text-sm font-bold">{activeVideo?.title || 'Product Video Demo'}</p>
              </div>
            )}
          </div>
        )}

        {/* Badge Indicator */}
        {badge && (
          <span className="absolute top-4 left-4 bg-indigo-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}

        {/* Carousel Arrow Controls */}
        {activeType === 'image' && images.length > 1 && (
          <>
            <button
              onClick={handlePrevMedia}
              aria-label="Previous Image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextMedia}
              aria-label="Next Image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-md text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Fullscreen Lightbox Button */}
        {activeType === 'image' && (
          <button
            onClick={() => setIsLightboxOpen(true)}
            aria-label="Open Fullscreen Lightbox"
            className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-2xl backdrop-blur-md shadow-lg transition-all hover:scale-110"
            title="Expand Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Thumbnail Carousel & Video Selector */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveType('image');
              setActiveMediaIndex(idx);
            }}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
              activeType === 'image' && activeMediaIndex === idx
                ? 'border-indigo-600 scale-95 shadow-md'
                : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            {activeType === 'image' && activeMediaIndex === idx && (
              <span className="absolute bottom-1 right-1 bg-indigo-600 text-white p-0.5 rounded-full">
                <Check className="w-2.5 h-2.5" />
              </span>
            )}
          </button>
        ))}

        {/* Video Thumbnail Button */}
        {videos.length > 0 && (
          <button
            onClick={() => setActiveType('video')}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-900 flex items-center justify-center ${
              activeType === 'video'
                ? 'border-indigo-600 scale-95 shadow-md'
                : 'border-slate-200 opacity-70 hover:opacity-100'
            }`}
          >
            <Play className="w-6 h-6 text-white" />
            <span className="absolute bottom-1 text-[9px] font-bold text-white bg-indigo-600 px-1 rounded">VIDEO</span>
          </button>
        )}
      </div>

      {/* Image Lightbox Modal */}
      {isLightboxOpen && (
        <ImageLightboxModal
          images={images}
          currentIndex={activeMediaIndex}
          onClose={() => setIsLightboxOpen(false)}
          onSelectIndex={(idx) => setActiveMediaIndex(idx)}
        />
      )}
    </div>
  );
};
