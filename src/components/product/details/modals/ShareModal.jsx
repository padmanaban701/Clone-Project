import { useState } from 'react';
import { X, Copy, Check, Share2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { toast } from 'sonner';

export const ShareModal = ({ productName = 'Product', onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success('Product link copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Dialog.Root open={true} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md bg-white rounded-3xl p-6 shadow-2xl z-50 outline-none">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-indigo-600" />
              <Dialog.Title className="text-base font-bold text-slate-900">Share Product</Dialog.Title>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Share Modal"
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-500 mt-3 mb-4">
            Share <strong>{productName}</strong> with friends and family:
          </p>

          <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-2xl border border-slate-200">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-transparent text-xs text-slate-700 font-mono focus:outline-none px-2 truncate"
            />
            <button
              onClick={handleCopy}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-1.5 transition-all shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Link
                </>
              )}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
