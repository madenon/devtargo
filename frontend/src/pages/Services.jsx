import React from 'react';
import { Link } from 'react-router-dom';
import SceneTroisD from "../componsnts/SceneTroisD";

const Services = () => {
  const mesServices = [
    {
      title: "E-Commerce MERN",
      description:
        "Boutiques en ligne complètes avec gestion de panier, paiements Stripe et tableau de bord administrateur.",
      modelType: "cart",
      color: "#007bff", // Bleu pur pour la 3D
      tech: "React, Node, MongoDB",
    },
    {
      title: "Applications SaaS",
      description:
        "Développement de plateformes logicielles sur mesure avec authentification sécurisée (JWT) et gestion de rôles.",
      modelType: "saas",
      color: "#8b5cf6", // Violet vif
      tech: "Express, Tailwind, Redux",
    },
    {
      title: "API REST & Backend",
      description:
        "Architecture serveur robuste, optimisée pour la performance et facilement intégrable à vos applications mobiles.",
      modelType: "api",
      color: "#10b981", // Vert émeraude
      tech: "Node.js, Express, NoSQL",
    },
    {
      title: "UI/UX Design React",
      description:
        "Interfaces utilisateur modernes, réactives (mobile-first) et ultra-rapides pour une expérience client optimale.",
      modelType: "design",
      color: "#f59e0b",
      tech: "Tailwind CSS, Framer Motion",
    },
  ];

  const topRealisations = [
    {
      name: "Flash Message App",
      link: "https://votre-lien.com",
      img: "/chate.png",
    },
    { name: "E-Shop Tech", link: "https://votre-lien.com", img: "/ecom.png" },
    {
      name: "Media Platform",
      link: "https://tv-media.onrender.com/",
      img: "/media.png",
    },
    {
      name: "Fintech Dashboard",
      link: "https://votre-lien.com",
      img: "/k.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white font-poppins">
      {" "}
      {/* Fond blanc pur pour plus de clarté */}
      <div className="max-w-7xl mx-auto px-4">
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-gray-900 mb-4">
            Parlez-nous de <span className="text-blue-600">vos projets</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto italic font-medium leading-relaxed">
            "Chaque grande réalisation commence par une discussion. Découvrez
            comment notre expertise peut transformer votre idée en un système
            robuste."
          </p>
        </div>

        {/* GRILLE DES SERVICES AVEC 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mesServices.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-full h-32 mb-6 bg-white rounded-2xl overflow-hidden shadow-inner">
                {" "}
                {/* Background blanc pour détacher l'objet 3D */}
                <SceneTroisD
                  modelType={service.modelType}
                  color={service.color}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-black text-blue-600 uppercase tracking-widest">
                <span>{service.tech}</span>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION RÉALISATIONS - COULEURS ET OPACITÉ CORRIGÉES */}
        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <h4 className="text-center text-xs font-black uppercase tracking-[4px] text-slate-400 mb-10">
            Aperçu de mes dernières réalisations
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRealisations.map((real, idx) => (
              <a
                key={idx}
                href={real.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-2xl h-44 bg-white block border border-slate-200 shadow-sm"
              >
                {/* Image : Opacité 100% et suppression du grayscale pour voir les vraies couleurs */}
                <img
                  src={real.img}
                  alt={real.name}
                  className="w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay : Apparaît uniquement au hover */}
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-white font-black text-[10px] uppercase tracking-widest mb-1">
                    Visiter
                  </span>
                  <span className="text-white font-bold text-xs">
                    {real.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* BOUTON PORTFOLIO */}
        <div className="mt-16 text-center">
          <Link
            to="/realisation"
            className="group relative inline-block px-12 py-5 bg-blue-600 text-white font-black rounded-2xl overflow-hidden transition-all shadow-xl shadow-blue-100"
          >
            <span className="relative z-10 uppercase tracking-wider">
              Explorer Nos Réalisations
            </span>
            <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;