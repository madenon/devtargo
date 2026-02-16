import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop
  const [mobileSubMenu, setMobileSubMenu] = useState(null); // Mobile (Accordéon)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Fonction pour basculer le sous-menu sur mobile
  const toggleMobileSub = (name) => {
    setMobileSubMenu(mobileSubMenu === name ? null : name);
  };

  const navLinks = [
    { name: "ACCUEIL", href: "/" },
    { 
      name: "SERVICES", 
      href: "#", // On met # pour que le parent serve de déclencheur sur mobile
      subLinks: [
        { name: "Création de site", href: "/services/creation-site" },
        { name: "Référencement local", href: "/services/seo-local" },
        { name: "Référencement GEO", href: "/services/seo-geo" },
        { name: "Google Ads", href: "/services/google-ads" },
        { name: "Social Ads", href: "/services/social-ads" },
        { name: "Google Business Profile", href: "/services/gmb" },
      ]
    },
    { name: "RÉALISATIONS", href: "/realisation" },
   
    { 
      name: "RESOURCES", 
      href: "#",
      subLinks: [
        { name: "Blog", href: "/resource/blog" },
        { name: "Études de cas", href: "/resource/etudes-de-cas" },
        { name: "E-books", href: "/resource/e-books" },
      ]
    },
    { name: "A PROPOS", href: "/a-propos" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR DESKTOP */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 font-poppins ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3 border-b border-slate-100" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-anton text-white text-xl">Dev</div>
              <div className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </div>
            </div>
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">
              DevTargo<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-7 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="text-[11px] font-bold tracking-[0.1em] text-slate-600 hover:text-blue-600 transition-all flex items-center uppercase"
                >
                  {link.name}
                  {link.subLinks && (
                    <svg className={`ml-1 w-3 h-3 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {link.subLinks && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl border border-slate-50 py-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-6 py-2.5 text-[11px] font-semibold text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
             <Link to="/contact" className="bg-slate-950 hover:bg-blue-600 text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all shadow-lg active:scale-95">
                Devis gratuit
             </Link>
          </div>

          {/* BURGER */}
          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-xl transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* SIDEBAR MOBILE */}
      <div className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)} />
      
      <aside className={`fixed top-0 left-0 h-full w-80 bg-white z-[60] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex justify-between items-center border-b border-slate-50">
          <div className="font-anton text-xl tracking-tighter text-slate-900">MENU</div>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-50 text-slate-400 hover:text-slate-800 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.subLinks ? (
                // Bouton parent pour les menus avec sous-liens
                <button 
                  onClick={() => toggleMobileSub(link.name)}
                  className={`flex justify-between items-center w-full px-5 py-4 text-sm font-bold rounded-2xl transition-all uppercase tracking-tight ${
                    mobileSubMenu === link.name ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubMenu === link.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                // Lien direct pour Accueil, Réalisations, etc.
                <Link 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-4 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-2xl transition-all uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              )}

              {/* SOUS-MENU MOBILE (ACCORDÉON) */}
              {link.subLinks && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileSubMenu === link.name ? "max-h-96 opacity-100 mt-1 mb-2" : "max-h-0 opacity-0"
                }`}>
                  <div className="ml-4 pl-4 border-l-2 border-slate-100 flex flex-col space-y-1">
                    {link.subLinks.map(sub => (
                      <Link 
                        key={sub.name} 
                        to={sub.href} 
                        onClick={() => setIsOpen(false)} 
                        className="py-3 px-4 text-[13px] text-slate-500 hover:text-blue-600 font-medium transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* FOOTER SIDEBAR */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-slate-50">
           <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-slate-900 text-white flex justify-center py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg"
           >
             Démarrer un projet
           </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;