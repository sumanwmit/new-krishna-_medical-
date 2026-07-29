import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions - New Krishna Medical Hall"
        description="Terms and conditions for ordering medicines and services at New Krishna Medical Hall in Jehanabad."
      />
      
      <div className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-800 dark:text-slate-200">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Terms & Conditions</h1>
          <p className="text-xs text-slate-500">Last updated: July 2026</p>

          <p className="text-sm leading-relaxed">
            Welcome to the official website of <strong>{BUSINESS_INFO.name}</strong>. By accessing our services, placing orders via WhatsApp, or purchasing pharmaceuticals from our counter, you agree to comply with the following terms.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">1. Valid Doctor Prescription Required</h2>
          <p className="text-sm leading-relaxed">
            All Schedule H and Schedule H1 prescription medications (antibiotics, cardiac drugs, psychiatric medications, controlled substances) strictly require a valid, legibly signed doctor's prescription before dispensing. Our licensed pharmacists reserve the right to decline dispensing unprescribed prescription drugs.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">2. Pricing & Stock Availability</h2>
          <p className="text-sm leading-relaxed">
            All medicine prices listed on our live stock checker correspond to Maximum Retail Price (MRP) or store-discounted rates. Stock quantities are subject to physical verification at our Jehanabad counter.
          </p>

          <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">3. Returns & Replacements</h2>
          <p className="text-sm leading-relaxed">
            Refrigerated biopharmaceuticals (insulins, vaccines) and opened hygiene items cannot be returned once handed over to preserve cold-chain integrity. Standard unopened strip medicines with intact batch numbers may be exchanged with valid receipt within 7 days.
          </p>
        </div>
      </div>
    </>
  );
};
