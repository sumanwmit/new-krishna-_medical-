import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, RefreshCw, Layers, ShieldCheck, Tag } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';

interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  composition: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  usage: string;
}

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderClick,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set(medicineStockData.map((item) => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineStockData as MedicineItem[]).filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.usage.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || med.category === selectedCategory;

      const matchesStatus =
        selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            In Stock
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 border border-red-200 dark:border-red-800">
            <XCircle className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div id="medicine-stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 md:p-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" /> Live Inventory System
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Medicine Stock Checker
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search live store availability for medicines, health devices & baby care items at New Krishna Medical Hall.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shrink-0">
          <RefreshCw className="w-4 h-4 text-emerald-600 animate-spin" />
          <span>Updated Daily • Instant Store Verification</span>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4 mb-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            id="medicine-search-input"
            type="text"
            placeholder="Search medicine name, brand (e.g. Cipla), composition (e.g. Paracetamol), or usage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1 mr-1">
            <Layers className="w-3.5 h-3.5" /> Status:
          </span>
          {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedStatus === status
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
        <span>
          Showing <strong className="text-slate-900 dark:text-white">{filteredMedicines.length}</strong> items found
        </span>
        <span>
          {selectedCategory !== 'All' && `Category: ${selectedCategory}`}
        </span>
      </div>

      {/* Grid of Medicine Cards */}
      {filteredMedicines.length > 0 ? (
        <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
          {filteredMedicines.slice(0, compact ? 6 : 30).map((med) => (
            <div
              key={med.id}
              className="p-5 bg-slate-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500/50 rounded-2xl transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded-md">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {med.name}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Brand: <span className="font-semibold text-slate-700 dark:text-slate-300">{med.brand}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 bg-white dark:bg-slate-900/60 p-2 rounded-xl border border-slate-100 dark:border-slate-800 font-mono text-[11px]">
                  <strong>Formula:</strong> {med.composition}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                  💡 {med.usage}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs text-slate-400">MRP Price</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    ₹{med.mrp.toFixed(2)}
                  </div>
                  {med.expiry !== 'N/A' && (
                    <div className="text-[10px] text-slate-400">Exp: {med.expiry}</div>
                  )}
                </div>

                <button
                  onClick={() => onOrderClick && onOrderClick(med.name)}
                  className="px-3.5 py-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-medium text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
          <Search className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">
            No medicine matching "{searchTerm}"
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Can't find what you need? We stock over 5000+ items at New Krishna Medical Hall. Send us a quick WhatsApp inquiry!
          </p>
          <button
            onClick={() => onOrderClick && onOrderClick(searchTerm || 'Medicine Inquiry')}
            className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
          >
            Inquire via WhatsApp (7870726402)
          </button>
        </div>
      )}

      {/* Notice Disclaimer */}
      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-6 text-center">
        * Medicine MRP prices and stock counts are subject to verified batch updates at store counter. Schedule H prescription drugs require valid doctor approval.
      </p>
    </div>
  );
};
