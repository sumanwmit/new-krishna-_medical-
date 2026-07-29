import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { 
  Pill, Cross, Activity, Stethoscope, Baby, HeartPulse, Sparkles, ShieldPlus, 
  CheckCircle2, ArrowRight, MessageSquare, Phone, Clock, Search
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/pharmacyData';

interface ContextType {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Services: React.FC = () => {
  const { onOpenWhatsAppModal } = useOutletContext<ContextType>();

  return (
    <>
      <SEOHead
        title="Services & Medicine Inventory - New Krishna Medical Hall"
        description="Browse medicine categories, health devices, surgical supplies, and check live medicine stock at New Krishna Medical Hall in Jehanabad."
      />

      {/* Page Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1631549912613-2051670f5e71?auto=format&fit=crop&q=80&w=1600"
            alt="Pharmacy Medicines Racks"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            5000+ Genuine Healthcare Items
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Pharmacy Services & Products
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From critical chronic maintenance medications to digital diagnostic devices and infant care, we stock certified medical supplies at fair rates.
          </p>
        </div>
      </section>

      {/* Live Medicine Stock Checker Component Section */}
      <section id="stock-checker-section" className="py-12 md:py-16 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker
            compact={false}
            onOrderClick={(medName) => onOpenWhatsAppModal(medName)}
          />
        </div>
      </section>

      {/* Full Category-Wise Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Comprehensive Departments
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Category-Wise Healthcare Offerings
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Each department is managed by experienced staff ensuring proper storage, expiry checks, and verified sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                      {service.id === 'prescription-medicines' && <Pill className="w-7 h-7" />}
                      {service.id === 'otc-medicines' && <Cross className="w-7 h-7" />}
                      {service.id === 'health-devices' && <Activity className="w-7 h-7" />}
                      {service.id === 'surgical-equipment' && <Stethoscope className="w-7 h-7" />}
                      {service.id === 'baby-care' && <Baby className="w-7 h-7" />}
                      {service.id === 'supplements-nutrition' && <HeartPulse className="w-7 h-7" />}
                      {service.id === 'home-senior-care' && <ShieldPlus className="w-7 h-7" />}
                      {service.id === 'personal-care-hygiene' && <Sparkles className="w-7 h-7" />}
                    </div>

                    <div className="text-right">
                      <span className="inline-block text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {service.badge}
                      </span>
                      <div className="text-xs text-slate-400 mt-1">{service.itemCount}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="mt-6 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Highlights & Brands:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Need advice on this category?
                  </span>
                  <button
                    onClick={() => onOpenWhatsAppModal(`Inquiry regarding: ${service.title}`)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Inquire / Order on WhatsApp</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Emergency Assistance Banner */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Need Urgent Medicine Assistance in Jehanabad?</h3>
            <p className="text-xs text-slate-300">
              Call our store counter directly or drop a message on WhatsApp for emergency prescription dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>
            <button
              onClick={() => onOpenWhatsAppModal('Urgent Medicine Request')}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Emergency Desk</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
