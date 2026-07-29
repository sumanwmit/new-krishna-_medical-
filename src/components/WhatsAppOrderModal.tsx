import React, { useState } from 'react';
import { X, Send, PhoneCall, Upload, CheckCircle2, Clock, MapPin, User, FileText, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicine, setMedicine] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [preferredTime, setPreferredTime] = useState('As soon as possible');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setHasPrescription('Yes');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !medicine.trim()) {
      setErrorMsg('Please fill in Customer Name, Phone Number, and Medicine details.');
      return;
    }

    const formattedText = `Hello *${BUSINESS_INFO.name}*,

*NEW MEDICINE ORDER REQUEST*
----------------------------------
👤 *Customer Name:* ${customerName.trim()}
📱 *Phone Number:* ${phone.trim()}
${email.trim() ? `✉️ *Email:* ${email.trim()}\n` : ''}📍 *Delivery Address:* ${address.trim() || 'Counter Pickup / Not provided'}
💊 *Medicine Required:* ${medicine.trim()}
📄 *Prescription Available:* ${hasPrescription}${prescriptionFile ? ` (${prescriptionFile.name})` : ''}
⏰ *Preferred Delivery Time:* ${preferredTime}
${message.trim() ? `💬 *Additional Notes:* ${message.trim()}\n` : ''}----------------------------------
Please confirm stock availability and pricing. Thank you!`;

    const encoded = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        id="whatsapp-modal-card"
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-6 relative">
          <button
            id="close-whatsapp-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/20 text-emerald-100 border border-emerald-300/30">
                  Direct WhatsApp Order
                </span>
                <span className="flex items-center gap-1 text-xs text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Instant Dispatch
                </span>
              </div>
              <h2 className="text-xl font-bold mt-1 text-white">Order Medicines via WhatsApp</h2>
              <p className="text-xs text-emerald-100/90 mt-0.5">
                Fill details below or attach doctor's prescription. Opens direct WhatsApp chat with {BUSINESS_INFO.name}.
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl flex items-center gap-2 text-sm text-red-700 dark:text-red-300">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none"
                />
              </div>
            </div>

            {/* Mobile Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <PhoneCall className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 7870726402"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="e.g. name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none appearance-none"
                >
                  <option value="As soon as possible">As soon as possible (Urgent)</option>
                  <option value="Today Morning (8 AM - 12 PM)">Today Morning (8 AM - 12 PM)</option>
                  <option value="Today Evening (4 PM - 8 PM)">Today Evening (4 PM - 8 PM)</option>
                  <option value="Tomorrow Morning">Tomorrow Morning</option>
                  <option value="Store Counter Pickup">Store Counter Pickup</option>
                </select>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address / Locality in Jehanabad
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="House No., Street, Landmark, Area in Jehanabad"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none"
              />
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name & Quantity Required <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <textarea
                required
                rows={2}
                placeholder="e.g. Dolo 650mg (2 Strips), Telma 40mg (1 Strip), Omron Digital BP Monitor"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none resize-none"
              />
            </div>
          </div>

          {/* Prescription Upload Option */}
          <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Do you have a Doctor's Prescription?
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHasPrescription('Yes')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    hasPrescription === 'Yes'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHasPrescription('No');
                    setPrescriptionFile(null);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    hasPrescription === 'No'
                      ? 'bg-slate-700 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            {hasPrescription === 'Yes' && (
              <div className="mt-3">
                <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-emerald-300 dark:border-emerald-700 rounded-xl cursor-pointer bg-white dark:bg-slate-800 hover:bg-emerald-50/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-300">
                    <Upload className="w-4 h-4" />
                    <span>{prescriptionFile ? prescriptionFile.name : 'Click to Select Prescription Photo / PDF'}</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  You can also attach prescription directly inside WhatsApp chat after opening.
                </p>
              </div>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Instructions / Allergy Notes <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Call before delivery / substitute brand acceptable"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              id="submit-whatsapp-order-btn"
              type="submit"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              id="direct-call-order-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 transition-all text-center transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Store Directly ({BUSINESS_INFO.phone})</span>
            </a>
          </div>

          <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 pt-1">
            🔒 Safe & Secure. Your medical information is handled directly by licensed pharmacists at New Krishna Medical Hall.
          </p>
        </form>
      </div>
    </div>
  );
};
