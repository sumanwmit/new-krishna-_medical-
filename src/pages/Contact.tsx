import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Send, CheckCircle2, 
  ShieldCheck, AlertCircle, Sparkles, User, FileText 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface ContextType {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Contact: React.FC = () => {
  const { onOpenWhatsAppModal } = useOutletContext<ContextType>();
  
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('General Medicine Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;

    const formattedText = `Hello *${BUSINESS_INFO.name}*,

*WEBSITE CONTACT INQUIRY*
----------------------------------
👤 *Name:* ${formName.trim()}
📱 *Phone:* ${formPhone.trim()}
${formEmail.trim() ? `✉️ *Email:* ${formEmail.trim()}\n` : ''}🏷️ *Subject:* ${formSubject}
💬 *Message:* ${formMessage.trim() || 'Please call me back regarding medicine stock.'}
----------------------------------`;

    const encoded = encodeURIComponent(formattedText);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Phone, Address & Location Map"
        description="Contact New Krishna Medical Hall in Jehanabad, Bihar. Phone: 7870726402. Address: Gaya - Patna Main Rd, Jehanabad 804408. Get directions & WhatsApp support."
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            We Are Here To Help You
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contact & Visit Our Store
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out via call, WhatsApp, or visit our physical counter on Gaya - Patna Main Road, Jehanabad.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Cards Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Store Location Card */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Store Address</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Physical Store Location</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>

                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Direct Phone & WhatsApp</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Immediate Counter Desk</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800">
                    <span className="font-semibold text-slate-500">Calling Line:</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-sky-600 dark:text-sky-400 text-sm">
                      {BUSINESS_INFO.displayPhone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800">
                    <span className="font-semibold text-slate-500">WhatsApp Desk:</span>
                    <button
                      onClick={() => onOpenWhatsAppModal()}
                      className="font-bold text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-emerald-600" />
                      <span>{BUSINESS_INFO.whatsappDisplay}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Working Hours</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Open 7 Days a Week</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>{BUSINESS_INFO.workingHours.days}:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.workingHours.timing}</span>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-900 dark:text-emerald-300 font-medium text-center">
                    🚨 {BUSINESS_INFO.workingHours.emergency}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                  Quick Online Inquiry
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Send Us A Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill out this form to inquire about medicine availability, bulk surgical orders, or price quotes.
                </p>
              </div>

              {formSubmitted && (
                <div className="p-4 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Your message has been prepared! WhatsApp has been opened to complete your inquiry.</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 7870726402"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Department
                    </label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none"
                    >
                      <option value="General Medicine Availability">General Medicine Availability</option>
                      <option value="Prescription Order & Delivery">Prescription Order & Delivery</option>
                      <option value="Health Devices & Monitors">Health Devices & Monitors</option>
                      <option value="Surgical & Hospital Equipment">Surgical & Hospital Equipment</option>
                      <option value="Baby & Senior Care Products">Baby & Senior Care Products</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Specific Medicine List
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type the medicines or healthcare products you are looking for..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  ⚡ Instant Response. Your message opens direct chat with our Jehanabad store team.
                </p>
              </form>
            </div>

          </div>

          {/* Full Width Google Map Section */}
          <div className="mt-16 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" /> Interactive Google Map Location
              </h3>
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Get Turn-By-Turn Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
              <iframe
                title="New Krishna Medical Hall Jehanabad Full Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
