import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, ShoppingBag, MessageSquare, Plus, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionButtonsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({
  onOpenWhatsAppModal
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Desktop & Mobile Floating Right Stack */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back To Top */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/80 dark:bg-slate-100/90 text-white dark:text-slate-900 shadow-xl backdrop-blur-md flex items-center justify-center hover:bg-slate-900 transition-all transform hover:scale-110 active:scale-95 border border-white/20"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Phone Call Button */}
        <a
          id="floating-call-btn"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="pointer-events-auto flex items-center gap-2 group bg-[#0056b3] hover:bg-[#003d80] text-white py-2.5 px-3.5 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95"
          aria-label="Call Store Now"
          title="Call New Krishna Medical Hall"
        >
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
            <Phone className="w-3.5 h-3.5 animate-bounce" />
          </div>
          <span className="text-xs font-semibold hidden md:inline pr-1">Call Store</span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={onOpenWhatsAppModal}
          className="pointer-events-auto relative flex items-center gap-2 group bg-[#0A8F6A] hover:bg-[#087a5a] text-white py-3 px-4 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95"
          aria-label="Order on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900" />
          
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
            <MessageSquare className="w-4 h-4 fill-white" />
          </div>
          <span className="text-xs font-bold tracking-wide">WhatsApp Order</span>
        </button>
      </div>

      {/* Mobile Bottom Fixed Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <a
          id="mobile-bar-call-btn"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2.5 px-3 bg-[#0056b3] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 active:bg-[#003d80]"
        >
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>Call Store</span>
        </a>

        <button
          id="mobile-bar-whatsapp-btn"
          onClick={onOpenWhatsAppModal}
          className="flex-1 py-2.5 px-3 bg-[#0A8F6A] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-md active:bg-[#087a5a]"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
