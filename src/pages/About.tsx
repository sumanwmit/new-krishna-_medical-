import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { 
  ShieldCheck, Award, Heart, Target, Eye, Sparkles, Clock, MapPin, 
  Phone, MessageSquare, CheckCircle2, ArrowRight, UserCheck, ThermometerSnowflake, Cross
} from 'lucide-react';
import { BUSINESS_INFO, TIMELINE_EVENTS, WHY_CHOOSE_US } from '../data/pharmacyData';

interface ContextType {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const About: React.FC = () => {
  const { onOpenWhatsAppModal } = useOutletContext<ContextType>();

  return (
    <>
      <SEOHead
        title="About Us - Store History & Quality Assurance"
        description="Learn about New Krishna Medical Hall in Jehanabad, Bihar. Established on Gaya-Patna Main Rd, offering 100% genuine medicines, registered pharmacists, and cold storage."
      />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1600"
            alt="New Krishna Medical Hall Store Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Dedicated Healthcare Legacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About New Krishna Medical Hall
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted healthcare partner in Jehanabad, Bihar committed to genuine medicines, affordable pricing, and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Business Story & Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Cross className="w-3.5 h-3.5" />
                <span>Our Business Story</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Built on Trust, Authenticity, and Community Health in Jehanabad
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Founded over a decade ago on Gaya - Patna Main Road, New Krishna Medical Hall has grown into one of Jehanabad’s most reliable retail and wholesale medical hubs. We recognize that healthcare isn’t just a transactional business — it’s a vital lifeline for families managing critical and chronic health conditions.
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Our shelf stock includes everything from specialty cardiac and diabetic medications to everyday first aid supplies, digital diagnostic equipment, surgical dressings, and dermatologist-recommended personal care.
              </p>

              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
                <UserCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                  <strong>Registered Pharmacists On Duty:</strong> Every prescription filled at New Krishna Medical Hall undergoes strict cross-verification for batch expiry, brand accuracy, and dosage clarity before handing over to patients.
                </div>
              </div>
            </div>

            {/* Store Photo */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1200"
                  alt="New Krishna Medical Hall Counter"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 hidden sm:block">
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Store Location</p>
                <p className="text-sm font-semibold text-white mt-1">{BUSINESS_INFO.address}</p>
                <p className="text-xs text-slate-400 mt-1">Gaya - Patna Main Road, Opposite Main Market</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To guarantee zero fake or compromised medicines in our community by sourcing exclusively through licensed drug distributors and maintaining flawless cold chain storage.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To be Jehanabad's most trusted digital-enabled neighborhood medical hall — blending traditional local care with fast WhatsApp prescription ordering and doorstep delivery.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-300 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Integrity, compassionate patient listening, strict regulatory compliance, transparent MRP pricing, and immediate emergency responsiveness when families need us most.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Milestones & Growth
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Our Journey Over The Years
            </h2>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform" />
                
                <span className="hidden sm:block absolute -left-28 top-0 text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                  {event.year}
                </span>

                <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <span className="sm:hidden inline-block text-xs font-bold text-emerald-600 mb-1">
                    {event.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Pharmacist Message */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <blockquote className="text-lg sm:text-xl italic font-serif text-slate-200 leading-relaxed">
            "Our promise to every citizen in Jehanabad is simple: When you step into New Krishna Medical Hall or order on WhatsApp, you receive 100% genuine medication stored in ideal conditions at fair prices. Patient wellness is our highest duty."
          </blockquote>

          <div>
            <div className="text-base font-bold text-white">Lead Pharmacist & Management Team</div>
            <div className="text-xs text-emerald-400">New Krishna Medical Hall, Jehanabad</div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              Contact Desk on WhatsApp
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all"
            >
              Call Store Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
