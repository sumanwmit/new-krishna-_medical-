import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - New Krishna Medical Hall"
        description="Privacy policy and data protection guidelines for New Krishna Medical Hall in Jehanabad, Bihar."
      />
      
      <div className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-800 dark:text-slate-200">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Last updated: July 2026</p>

          <p className="text-sm leading-relaxed">
            At <strong>{BUSINESS_INFO.name}</strong>, located at {BUSINESS_INFO.address}, we respect your personal privacy and are committed to safeguarding any medical information, phone numbers, or delivery addresses shared with us when placing orders or contacting our desk.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            When you use our WhatsApp order form or contact form, we collect your name, mobile phone number, delivery address, prescription image (if uploaded), and specific medicine requirements purely to fulfill your order and arrange local delivery in Jehanabad.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">2. Confidentiality of Prescriptions</h2>
          <p className="text-sm leading-relaxed">
            All medical prescriptions submitted to New Krishna Medical Hall are handled strictly by registered pharmacists. We do not sell, leak, or share your medical records or prescription images with third-party marketers or advertisers.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">3. Direct WhatsApp Communication</h2>
          <p className="text-sm leading-relaxed">
            Our online order feature redirects your submitted order information directly to our official WhatsApp account ({BUSINESS_INFO.displayPhone}). WhatsApp operates under end-to-end encryption.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">4. Contact Us</h2>
          <p className="text-sm leading-relaxed">
            If you have questions regarding our privacy practices, please contact us at {BUSINESS_INFO.displayPhone} or visit our store on Gaya - Patna Main Road, Jehanabad, Bihar 804408.
          </p>
        </div>
      </div>
    </>
  );
};
