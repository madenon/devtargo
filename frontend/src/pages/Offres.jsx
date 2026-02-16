import React from 'react';
import { motion } from 'framer-motion';

const Offres = () => {
  const packs = [
    {
      name: "Starter Express",
      price: "250€ / 2 500 MAD",
      features: ["Landing Page", "Mobile Ready", "Mise en ligne 48h", "Support Mail"],
      target: "Tests de concept",
      color: "bg-white border-2 border-gray-100 shadow-sm"
    },
    {
      name: "Vitrine Standard",
      price: "500€ / 5 000 MAD",
      features: ["Site 3 pages", "Optimisation SEO", "Framer Motion", "Certificat SSL"],
      target: "Artisans & TPE",
      color: "bg-white border-2 border-gray-100 shadow-sm"
    },
    {
      name: "Vitrine Pro",
      price: "1 500€ / 15 000 MAD",
      features: ["Design Unique", "Copywriting", "Blog Intégré", "Dashboard Client"],
      target: "Consultants & PME",
      color: "bg-gray-50 border-2 border-blue-100"
    },
    {
      name: "E-Commerce MERN",
      price: "4 500€ / 48 000 MAD",
      features: ["Paiement Stripe", "Emails Automatisés", "Gestion Stock", "Admin Panel"],
      target: "Boutiques Pro",
      color: "bg-blue-600 text-white",
      popular: true
    },
    {
      name: "Startup & SaaS",
      price: "Sur Devis",
      features: ["Architecture MERN", "Accompagnement CTO", "Auth JWT", "Maintenance"],
      target: "Projets Complexes",
      color: "bg-[#1a233b] text-white"
    }
  ];

  return (
    <section id="offres" className="py-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-anton uppercase italic"
          >
            Toutes mes <span className="text-blue-600">Solutions</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto italic font-medium">
            Du service léger à l'accompagnement startup : une tarification
            transparente pour chaque étape de votre croissance.
          </p>
        </div>

        {/* GRILLE FLEXIBLE (S'adapte automatiquement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] shadow-lg relative overflow-hidden flex flex-col justify-between ${pack.color}`}
            >
              {pack.popular && (
                <div className="absolute top-6 right-[-35px] bg-yellow-400 text-black text-[10px] font-black px-10 py-1 rotate-45 uppercase">
                  Best Seller
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold mb-1 uppercase tracking-tighter">
                  {pack.name}
                </h3>
                <p className="text-xl font-anton mb-4">{pack.price}</p>
                <hr className="opacity-20 mb-6" />

                <ul className="space-y-3 mb-8">
                  {pack.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs font-semibold"
                    >
                      <span className="mr-2 text-blue-500">◈</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-widest opacity-60 mb-4 font-bold">
                  Cible : {pack.target}
                </p>
                <button
                  className={`w-full py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
                    pack.popular || pack.name === "Startup & SaaS"
                      ? "bg-white text-[#1a233b] hover:bg-gray-100" // Fond blanc pour les packs sombres
                      : pack.color.includes("blue-600")
                      ? "bg-white text-blue-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  } hover:shadow-lg`}
                >
                  Démarrer le projet
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offres;