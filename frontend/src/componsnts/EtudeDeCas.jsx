import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EtudeDeCas = () => {
  // Données fictives des études de cas
  const cas = [
    {
      id: 1,
      title: "Plateforme e-commerce performante",
      description: "Développement d'une boutique en ligne rapide et optimisée pour la conversion.",
      image: "https://source.unsplash.com/600x400/?ecommerce,web",
      link: "#",
    },
    {
      id: 2,
      title: "Application mobile React Native",
      description: "Création d'une app cross-platform pour iOS et Android avec React Native.",
      image: "https://source.unsplash.com/600x400/?mobile,app",
      link: "#",
    },
    {
      id: 3,
      title: "Dashboard analytique MERN",
      description: "Développement d’un tableau de bord interactif pour la visualisation de données.",
      image: "https://source.unsplash.com/600x400/?analytics,data",
      link: "#",
    },
    {
      id: 4,
      title: "SEO et stratégie digitale",
      description: "Optimisation de la visibilité web et amélioration du trafic organique.",
      image: "https://source.unsplash.com/600x400/?seo,marketing",
      link: "#",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-anton text-gray-900 mb-12 text-center"
        >
          Études de Cas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {cas.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-anton text-2xl text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm flex-1 mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 mt-auto text-blue-600 font-bold hover:gap-3 transition-all text-sm uppercase"
                >
                  Voir le projet <ArrowRight size={16} />
                </a>
                {/*  deplouement */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EtudeDeCas;