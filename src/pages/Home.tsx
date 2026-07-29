import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { 
  Phone, MessageSquare, MapPin, ShieldCheck, Award, ThermometerSnowflake, 
  Truck, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Star, Send, HeartPulse, 
  Sparkles, Clock, Pill, Stethoscope, Activity, Baby, Cross, User, BookOpen
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, WHY_CHOOSE_US, REVIEWS_DATA, FAQS_DATA, HEALTH_TIPS } from '../data/pharmacyData';

interface ContextType {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Home: React.FC = () => {
  const { onOpenWhatsAppModal } = useOutletContext<ContextType>();
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <>
      <SEOHead
        title="Home - Trusted Pharmacy in Jehanabad"
        description="New Krishna Medical Hall on Gaya - Patna Main Rd, Jehanabad, Bihar offers 100% genuine medicines, surgical supplies, baby care, health devices & WhatsApp order."
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-12 pb-20 md:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=2000"
            alt="New Krishna Medical Hall Store Front Pharmacy"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-green-50 text-[#0A8F6A] border border-green-200/80 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#0A8F6A] animate-pulse"></span>
                <span>Verified Local Pharmacy • Jehanabad</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your Trusted Medical Store for <span className="text-[#0A8F6A]">Genuine Medicines</span> & Healthcare Needs.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  id="hero-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-8 py-4 bg-[#0056b3] hover:bg-[#003d80] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-blue-900/40 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {BUSINESS_INFO.displayPhone}</span>
                </a>

                <button
                  id="hero-whatsapp-order-btn"
                  onClick={() => onOpenWhatsAppModal()}
                  className="px-8 py-4 bg-[#0A8F6A] hover:bg-[#087a5a] active:bg-[#087a5a] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-900/40 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-get-directions-btn"
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 backdrop-blur-md flex items-center gap-2.5 transition-all"
                >
                  <MapPin className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Quick Info Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Open 7 AM - 10 PM Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThermometerSnowflake className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>24/7 Cold Chain Storage</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Local Home Delivery</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Quick Order Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                    <h3 className="text-base font-bold text-white">Quick Prescription Desk</h3>
                  </div>
                  <span className="text-xs text-emerald-300 font-semibold">Fast 1-Hour Dispatch</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Have a doctor's prescription? Simply upload or message us on WhatsApp to check stock and receive home delivery in Jehanabad.
                </p>

                <div className="p-4 bg-slate-950/60 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant Price & Discount Calculation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Free Pharmacist Dosage Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Computerized GST Invoice Included</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Upload Prescription on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Short About Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Grid Frame */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1631549912613-2051670f5e71?auto=format&fit=crop&q=80&w=1200"
                  alt="New Krishna Medical Hall Shelves"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-3xl shadow-xl hidden sm:block max-w-xs border border-emerald-500">
                <p className="text-2xl font-extrabold">12+ Years</p>
                <p className="text-xs text-emerald-100 font-medium mt-1">
                  Serving the families of Jehanabad with genuine medications and compassionate healthcare.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About New Krishna Medical Hall</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Jehanabad's Premier Store for Authentic Healthcare & Emergency Supplies
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Located conveniently on Gaya - Patna Main Road in Jehanabad, Bihar, New Krishna Medical Hall was established with a singular mission: ensuring every patient receives 100% authentic, batch-verified pharmaceuticals and reliable healthcare equipment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Authorized Stockist
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Direct brand distribution from Cipla, Sun Pharma, Alkem, Mankind & GSK.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" /> Pharmacist Guided
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Registered pharmacists cross-verify dosages and explain medication schedules.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-800 transition-colors shadow-md"
                >
                  <span>Read Full Business Story & Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services (Max 6 Preview Cards) */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Healthcare Categories
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Featured Services & Medical Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Explore our core pharmacy departments stocked with over 5000+ authentic health products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {service.id === 'prescription-medicines' && <Pill className="w-6 h-6" />}
                      {service.id === 'otc-medicines' && <Cross className="w-6 h-6" />}
                      {service.id === 'health-devices' && <Activity className="w-6 h-6" />}
                      {service.id === 'surgical-equipment' && <Stethoscope className="w-6 h-6" />}
                      {service.id === 'baby-care' && <Baby className="w-6 h-6" />}
                      {service.id === 'supplements-nutrition' && <HeartPulse className="w-6 h-6" />}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {service.itemCount}
                  </span>
                  <button
                    onClick={() => onOpenWhatsAppModal(service.title)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Order Category <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-emerald-600/25 transition-all"
            >
              <span>Explore All Services & Live Stock Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Our Core Pillars
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Why Choose New Krishna Medical Hall?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              We stand apart through our unyielding commitment to patient safety and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-4">
                  {item.id === 'genuine' && <ShieldCheck className="w-6 h-6" />}
                  {item.id === 'pharmacists' && <Award className="w-6 h-6" />}
                  {item.id === 'cold-chain' && <ThermometerSnowflake className="w-6 h-6" />}
                  {item.id === 'pricing' && <Sparkles className="w-6 h-6" />}
                  {item.id === 'whatsapp' && <MessageSquare className="w-6 h-6" />}
                  {item.id === 'delivery' && <Truck className="w-6 h-6" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Products / Medicine Stock Checker Embed */}
      <section className="py-16 md:py-24 bg-slate-100/70 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            compact={true}
            onOrderClick={(medName) => onOpenWhatsAppModal(medName)}
          />
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Trusted by 50,000+ Local Families in Jehanabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              See what local residents and healthcare professionals say about our store service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm`}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{rev.review}"
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> Verified Local Customer
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Preview Accordion */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quick answers about medicine ordering, prescription rules, and cold storage.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full p-5 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Health Tips Preview Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Patient Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Latest Health & Medication Tips
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Learn More About Store Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700/80 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      {tip.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                      <span>{tip.date}</span>
                      <span>•</span>
                      <span>{tip.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                      {tip.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenWhatsAppModal(`Health Query regarding: ${tip.title}`)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Ask Pharmacist About This <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <BookOpen className="w-8 h-8 text-emerald-400 mx-auto" />
          <h3 className="text-xl sm:text-2xl font-bold">
            Subscribe for Monthly Medicine Refill Reminders
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Never run out of regular cardiac, diabetic, or BP maintenance pills. Receive friendly refill reminders & healthcare tips directly.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md shrink-0 transition-all"
            >
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <p className="text-xs text-emerald-400 font-semibold pt-2">
              ✓ Thank you for subscribing! You will receive regular health updates.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
