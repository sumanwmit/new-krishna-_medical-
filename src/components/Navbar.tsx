import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Search, Menu, X, Sun, Moon, Cross, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWhatsAppModal,
  onOpenSearchModal,
  darkMode,
  setDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Store Gallery' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300 overflow-x-auto text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 shrink-0 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Medicines & Cold Storage
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {BUSINESS_INFO.address}
            </span>
            <span className="hidden lg:inline-block text-slate-600">•</span>
            <span className="hidden lg:flex items-center gap-1 shrink-0">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Open Daily: {BUSINESS_INFO.workingHours.timing}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="top-bar-call-link"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-semibold text-emerald-400"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.displayPhone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              id="top-bar-whatsapp-btn"
              onClick={onOpenWhatsAppModal}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 text-emerald-300 font-medium"
            >
              <MessageSquare className="w-3 h-3 fill-emerald-300" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        id="main-sticky-nav"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo / Business Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-[#0A8F6A] rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
              NK
            </div>
            <div>
              <h1 className="font-extrabold text-lg sm:text-xl leading-none text-[#0056b3] dark:text-sky-400">
                New Krishna
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                Medical Hall
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `transition-all py-1.5 ${
                    isActive
                      ? 'text-[#0A8F6A] font-bold border-b-2 border-[#0A8F6A]'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            
            {/* Quick Search Trigger */}
            <button
              id="nav-quick-search-btn"
              onClick={onOpenSearchModal}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Search Medicines"
              aria-label="Search Medicines"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span className="hidden xl:inline text-xs font-medium text-slate-600 dark:text-slate-300">Search</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            {/* WhatsApp Order CTA (Desktop) */}
            <button
              id="nav-whatsapp-order-btn"
              onClick={onOpenWhatsAppModal}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-semibold text-xs sm:text-sm rounded-full shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Order Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fade-in shadow-xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full py-3 bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Order via WhatsApp (7870726402)</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 bg-sky-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-sky-600/20 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store Directly</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
