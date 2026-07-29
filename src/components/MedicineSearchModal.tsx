import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ShoppingBag, CheckCircle2, AlertTriangle, ArrowRight, Pill } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderMedicine: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onOrderMedicine
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return medicineStockData.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.composition.toLowerCase().includes(q) ||
        item.usage.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-6 h-6 text-emerald-600 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search medicine name, brand, or formula (e.g. Dolo, Paracetamol, Omron)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base sm:text-lg font-medium text-slate-900 dark:text-white placeholder-slate-400 outline-none"
          />
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {!query.trim() ? (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400">
              <Pill className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
              <p className="text-sm font-medium">Type to search 5000+ stocked medicines in Jehanabad</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
                <span className="text-slate-400">Popular Searches:</span>
                {['Dolo 650', 'Telma 40', 'Pan 40', 'BP Monitor', 'Pampers', 'Volini'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 text-slate-700 dark:text-slate-300 text-xs transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              {results.map((med) => (
                <div
                  key={med.id}
                  className="p-3.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {med.name}
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold">
                        {med.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {med.brand} • <span className="font-mono">{med.composition}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onOrderMedicine(med.name);
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-xl shadow-sm flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No direct matches for "{query}".
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOrderMedicine(query);
                }}
                className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md"
              >
                Inquire "{query}" on WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Footer Link */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/80 text-center border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => {
              onClose();
              navigate('/services');
            }}
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
          >
            Open Full Live Stock Checker Page <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
