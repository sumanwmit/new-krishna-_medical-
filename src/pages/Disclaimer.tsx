import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const Disclaimer: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Medical Disclaimer - New Krishna Medical Hall"
        description="Medical disclaimer and advisory information for New Krishna Medical Hall in Jehanabad."
      />
      
      <div className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-800 dark:text-slate-200">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Medical Disclaimer</h1>
          <p className="text-xs text-slate-500">Last updated: July 2026</p>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 rounded-2xl text-xs sm:text-sm font-medium">
            ⚠️ <strong>Important Advisory:</strong> Information on this website is provided for general informational and stock checking purposes only and is NOT a substitute for professional medical advice, diagnosis, or treatment.
          </div>

          <p className="text-sm leading-relaxed">
            Always seek the advice of your qualified physician or healthcare provider with any questions you may have regarding a medical condition or drug dosage. Never disregard professional medical advice or delay seeking treatment because of information read on this website.
          </p>

          <p className="text-sm leading-relaxed">
            <strong>{BUSINESS_INFO.name}</strong> operates strictly as a licensed retail pharmacy fulfilling prescribed medications. We do not prescribe medicines or diagnose health conditions online.
          </p>
        </div>
      </div>
    </>
  );
};
