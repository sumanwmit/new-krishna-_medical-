import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cross, Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const Footer: React.FC = () => {
  // Global Tracking Hook required by Prompt
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer id="main-footer" className="bg-[#001e3c] text-white pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-blue-900/80">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] flex items-center justify-center text-white font-bold text-lg shadow-md">
                NK
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {BUSINESS_INFO.name}
                </h3>
                <span className="text-xs text-[#0A8F6A] font-medium">Licensed Pharmacy</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Providing 100% genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices in Jehanabad, Bihar.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#0A8F6A] bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Drug License & Batch Verification Compliant</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • About New Krishna Medical
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Pharmacy Services & Medicine Stock
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Store Photos & Facility Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Contact & Location Map
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-[#0A8F6A] transition-colors flex items-center gap-1.5">
                  • Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Store Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Store Contact & Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-sky-300 transition-colors font-semibold">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors font-semibold">
                  WhatsApp: {BUSINESS_INFO.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div>{BUSINESS_INFO.workingHours.days}:</div>
                  <div className="font-semibold text-white">{BUSINESS_INFO.workingHours.timing}</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">{BUSINESS_INFO.workingHours.emergency}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Google Map Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Store Location
            </h4>
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-md h-36 bg-slate-900 relative group">
              <iframe
                title="New Krishna Medical Hall Google Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-slate-900/90 hover:bg-emerald-600 text-white text-[11px] px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 border border-white/20 transition-all"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & WMIT Developer Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">{BUSINESS_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span></span>
           <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
