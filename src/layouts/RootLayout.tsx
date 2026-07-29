import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { MedicineSearchModal } from '../components/MedicineSearchModal';

interface RootLayoutProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ darkMode, setDarkMode }) => {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Navbar Header */}
      <Navbar
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Page Outlet */}
      <main className="flex-grow">
        <Outlet context={{ onOpenWhatsAppModal: handleOpenWhatsAppModal }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActionButtons
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Quick Search Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onOrderMedicine={(medName) => handleOpenWhatsAppModal(medName)}
      />
    </div>
  );
};
