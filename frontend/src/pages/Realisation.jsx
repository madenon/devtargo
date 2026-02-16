import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "EcoShop Premium",
    category: "Web Design & Développement",
    image: "/ecomdahsbord.png",
    tags: ["React", "Tailwind", "Stripe"],
    type: "E-commerce"
  },
  {
    title: "Nova Health App",
    category: "UI/UX & React Native",
    image: "/mb.png",
    tags: ["Mobile", "HealthTech"],
    type: "Mobile"
  },
  {
    title: "SEO Master Dashboard",
    category: "SEO & Marketing Digital",
    image: "/elect.png",
    tags: ["Analytics", "Strategy"],
    type: "SEO"
  },
  {
    title: "Votre Identité",
    category: "Branding & Web",
    image: "/web.png",
    tags: ["Design", "Branding"],
    type: "Web Design"
  },
  {
    title: "SaaS Admin Portal",
    category: "Application Web",
    image: "/master.png",
    tags: ["React", "Firebase"],
    type: "Web App"
  },
  {
    title: "Conversion LP",
    category: "Conversion & Design",
    image: "/sl.png",
    tags: ["A/B Testing", "Copywriting"],
    type: "Marketing"
  }
];

// Catégories pour le filtre
const categories = ["Tous", "E-commerce", "Mobile", "SEO", "Web App"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const Realisation = () => {
  const [filter, setFilter] = useState("Tous");

  useEffect(() => {
    document.title = "Nos Réalisations | DevTargo Solution";
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(p => filter === "Tous" || p.type === filter);

  return (
    <div className="font-poppins bg-[#f8fafc] text-slate-900 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-6">
              Portfolio & Études de cas
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-10 text-slate-950">
              Nos <span className="text-blue-600 italic underline decoration-slate-200 underline-offset-8">Réalisations</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Nous fusionnons esthétique et performance. Chaque projet est une preuve de notre engagement envers l'excellence digitale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <section className="bg-white/80 border-y border-slate-100 py-6 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b-2 ${
                filter === cat ? "border-blue-600 text-blue-600" : "border-transparent text-slate-400 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= GRID PROJECTS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Container Image : Utilisation de object-contain pour afficher TOUTE l'image sans rognage */}
                  <div className="relative overflow-hidden rounded-[2.5rem] aspect-square bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-200/30">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Interactif */}
                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8 text-center">
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] text-white font-bold uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-blue-600">
                        Voir le projet →
                      </button>
                    </div>
                  </div>

                  {/* Infos Textuelles */}
                  <div className="mt-8 text-center px-2">
                    <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
                    <h3 className="text-2xl font-anton uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA REVISITÉ ================= */}
      <section className="py-5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-400 rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
            {/* Décoration de fond */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-anton text-2xl md:text-3xl uppercase tracking-tighter mb-2 leading-tight">
                Prêt à écrire votre <br /> <span className="italic text-blue-500">prochain succès ?</span>
              </h2>

              <p className="text-slate-400 mb-12 text-lg md:text-xl font-light max-w-xl mx-auto">
                Transformons vos idées en une solution digitale qui domine votre marché.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-block px-12 py-6 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-blue-900/40 hover:bg-white hover:text-blue-600 transition-all duration-500"
              >
                Lancer mon projet maintenant
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Realisation;