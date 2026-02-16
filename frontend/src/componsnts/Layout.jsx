import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    // On retire le bg-gray-50 pour ne pas créer de conflit de couleur
    // On retire le flex-col pour que le scroll soit plus fluide
    <div className="min-h-screen bg-[#050505]">
      <ScrollToTop />
      <Navbar />

      {/* IMPORTANT : 
          - On retire 'max-w-7xl' et 'mx-auto' pour que le rouge aille jusqu'au bord de l'écran.
          - On retire 'py-20' car tes pages gèrent déjà leurs propres paddings.
      */}
      <main className="w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;