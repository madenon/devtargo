import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Ebooks = () => {
  // Données fictives pour les ebooks
  const ebooks = [
    {
      id: 1,
      title: "Guide complet du développement Web",
      author: "Nabini Siaka",
      description: "Apprenez HTML, CSS, JavaScript et les bases du MERN stack.",
      cover: "https://source.unsplash.com/400x500/?book,programming",
      download: "#",
    },
    {
      id: 2,
      title: "React Native pour débutants",
      author: "Nabini Siaka",
      description: "Développez des applications mobiles performantes sur iOS et Android.",
      cover: "https://source.unsplash.com/400x500/?mobile,app",
      download: "#",
    },
    {
      id: 3,
      title: "SEO et stratégie digitale",
      author: "Nabini Siaka",
      description: "Optimisez la visibilité de vos sites web et augmentez vos conversions.",
      cover: "https://source.unsplash.com/400x500/?seo,marketing",
      download: "#",
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
          Nos Ebooks
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ebooks.map((ebook) => (
            <motion.div
              key={ebook.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col"
            >
              <img
                src={ebook.cover}
                alt={ebook.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-anton text-xl md:text-2xl text-gray-900 mb-2">
                  {ebook.title}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                  {ebook.author}
                </p>
                <p className="text-gray-500 text-sm flex-1 mb-4">{ebook.description}</p>

                <a
                  href={ebook.download}
                  className="inline-flex items-center justify-center gap-2 mt-auto px-4 py-2 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all text-sm"
                  download
                >
                  <Download size={16} /> Télécharger
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ebooks;