import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/pharmacyData';
import { X, ZoomIn, ChevronLeft, ChevronRight, Filter, MessageSquare, MapPin } from 'lucide-react';

interface ContextType {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Gallery: React.FC = () => {
  const { onOpenWhatsAppModal } = useOutletContext<ContextType>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <>
      <SEOHead
        title="Store Gallery - New Krishna Medical Hall"
        description="View photo gallery of New Krishna Medical Hall store interior, medicine racks, cold chain storage, and health equipment in Jehanabad."
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=1600"
            alt="Pharmacy Storefront"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Clean & Well Stocked Facility
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Store & Facility Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our modern pharmacy counter, systematically organized medicine shelves, cold storage units, and medical devices.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter Photo Category:
            </span>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'storefront', label: 'Store Front & Counter' },
              { id: 'medicines', label: 'Medicine Shelves & Cold Storage' },
              { id: 'devices', label: 'Health Monitors & Devices' },
              { id: 'babycare', label: 'Baby & Personal Care' },
              { id: 'surgical', label: 'Surgical Equipment' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/40">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-md">
                    {photo.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 group-hover:text-emerald-600 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Popup Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            
            {/* Header controls */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {activePhoto.category} Photo View
              </span>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-2 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Photo & Navigation */}
            <div className="relative h-[60vh] max-h-[500px] bg-black flex items-center justify-center">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-all border border-white/20"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition-all border border-white/20"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & WhatsApp CTA */}
            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div>
                <h3 className="text-lg font-bold">{activePhoto.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activePhoto.description}</p>
              </div>

              <button
                onClick={() => {
                  const title = activePhoto.title;
                  setActivePhoto(null);
                  onOpenWhatsAppModal(`Inquiry about product in gallery: ${title}`);
                }}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shrink-0 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Inquire Product</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
