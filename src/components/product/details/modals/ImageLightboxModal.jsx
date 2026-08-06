import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export const ImageLightboxModal = ({ images = [], currentIndex = 0, onClose, onSelectIndex }) => {
  const [activeIdx, setActiveIdx] = useState(currentIndex);

  const handleNext = () => {
    const next = (activeIdx + 1) % images.length;
    setActiveIdx(next);
    onSelectIndex(next);
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + images.length) % images.length;
    setActiveIdx(prev);
    onSelectIndex(prev);
  };

  return (
    <Dialog.Root open={true} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-8 outline-none">
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between text-white z-10">
            <span className="text-xs font-bold tracking-wider uppercase opacity-80">
              Image {activeIdx + 1} of {images.length}
            </span>
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image */}
          <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4">
            <img
              src={images[activeIdx]}
              alt={`Expanded view ${activeIdx + 1}`}
              className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Image"
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Image"
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails */}
          <div className="flex gap-2 overflow-x-auto p-2 bg-black/40 rounded-2xl backdrop-blur-md">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIdx(i);
                  onSelectIndex(i);
                }}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                  activeIdx === i ? 'border-indigo-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
