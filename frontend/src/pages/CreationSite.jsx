import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// --- COMPOSANT COUNTER (Réintégré tel quel avec suffixe dynamique) ---
const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Garde ton formatage exact d'origine
    return Math.round(latest).toLocaleString().replace(/\s/g, ' ') + suffix;
  });
  
  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const CreationSite = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordions = [
    { 
      title: "Des sites personnalisés pour répondre aux enjeux de votre métier", 
      content: "Chaque projet est unique. Nous concevons des plateformes sur mesure qui reflètent l'identité de votre marque tout en garantissant une expérience utilisateur optimale." 
    },
    { 
      title: "Une équipe digitale complète à votre service", 
      content: "Designers, développeurs et experts SEO travaillent main dans la main pour propulser votre visibilité en ligne." 
    },
    { 
      title: "Un beau site, oui, mais pas que ! Découvrez nos offres visibilité", 
      content: "Nous intégrons les meilleures pratiques de référencement naturel dès la conception pour que vous soyez trouvé par vos clients." 
    },
    { 
      title: "Des résultats mesurables grâce à nos outils de suivi", 
      content: "Suivez l'évolution de votre trafic et vos conversions en temps réel avec nos tableaux de bord personnalisés." 
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden relative font-poppins selection:bg-blue-600 selection:text-white">
      
      {/* --- RÉINTÉGRATION DES EFFETS DE FOND (Particules version Bleue) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/5 rounded-full blur-[80px]"
            style={{
              width: Math.random() * 300 + 150,
              height: Math.random() * 300 + 150,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32 relative z-10">
        
        {/* --- SECTION HERO --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="font-anton text-3xl md:text-2xl lg:text-3xl uppercase tracking-tighter leading-[0.95] mb-8">
              Créer un site web <br className="hidden md:block"/> c'est bien. <br/>
              <span className="text-blue-600 italic">Le rendre visible, <br className="hidden md:block"/> c'est mieux.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Votre professionnalisme est votre force, il doit être communiqué par des experts. Digitalisez votre entreprise avec <strong className="text-slate-900 font-bold">DevTargo</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="bg-slate-900 text-white hover:scale-105 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-slate-200">
                Rencontrons-nous
              </button>
              <button className="border-2 border-slate-100 hover:bg-slate-50 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group">
                Nos services <span className="group-hover:translate-x-2 transition-transform text-blue-600">→</span>
              </button>
            </div>
          </motion.div>

          {/* --- ILLUSTRATION FUSÉE (Animation réintégrée) --- */}
          <motion.div 
            className="relative flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute w-[80%] h-[80%] bg-blue-100/30 blur-[100px] rounded-full"></div>
            <motion.div
              animate={{ y: [0, -30, 0] }} // Retour à ton animation plus haute
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[380px]"
            >
              <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <path d="M100 20C100 20 140 80 140 140C140 162.091 122.091 180 100 180C77.9086 180 60 162.091 60 140C60 80 100 20 100 20Z" fill="#F1F5F9"/>
                <circle cx="100" cy="110" r="18" fill="white" stroke="#2563EB" strokeWidth="3"/>
                <path d="M60 140L30 190H60V140Z" fill="#94A3B8"/>
                <path d="M140 140L170 190H140V140Z" fill="#94A3B8"/>
                <rect x="85" y="180" width="30" height="15" rx="4" fill="#1E293B"/>
                <motion.path 
                  d="M90 195L100 230L110 195" 
                  stroke="#2563EB" strokeWidth="8" strokeLinecap="round"
                  animate={{ opacity: [0.4, 1, 0.4], scaleY: [1, 1.4, 1] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* --- SECTION CHIFFRES --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-8 mb-32 bg-slate-50/50 border border-slate-100 rounded-[3rem] text-center"
        >
          <div className="space-y-1">
            <h3 className="text-5xl lg:text-6xl font-anton text-slate-900 tracking-tighter">
              <Counter value={16000} />
            </h3>
            <p className="text-blue-600 uppercase text-[10px] font-black tracking-[0.3em]">Réalisations</p>
          </div>
          <div className="space-y-1 border-y md:border-y-0 md:border-x border-slate-200 py-8 md:py-0">
            <h3 className="text-5xl lg:text-6xl font-anton text-slate-900 tracking-tighter">
              <Counter value={30} suffix="+" />
            </h3>
            <p className="text-blue-600 uppercase text-[10px] font-black tracking-[0.3em]">Modèles Uniques</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-5xl lg:text-6xl font-anton text-slate-900 tracking-tighter">
              <Counter value={423000} />
            </h3>
            <p className="text-blue-600 uppercase text-[10px] font-black tracking-[0.3em]">Visites / mois</p>
          </div>
        </motion.div>

        {/* --- SECTION EXPERTISE --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100 relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-4xl font-anton uppercase mb-10 text-slate-900 leading-tight">L'expertise au service de votre croissance</h2>
            
            <div className="space-y-4">
              {accordions.map((item, index) => (
                <div key={index} className="border-b border-slate-50 last:border-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full py-6 flex justify-between items-center text-left group"
                  >
                    <span className={`text-lg font-bold transition-all ${openIndex === index ? 'text-blue-600 pl-2' : 'text-slate-600'}`}>
                      {item.title}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openIndex === index ? 'bg-blue-600 text-white rotate-[225deg]' : 'bg-slate-50 text-slate-400'}`}>
                      <span className="text-2xl font-light">+</span>
                    </div>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-slate-500 font-light leading-relaxed border-l-2 border-blue-100 pl-6 italic">
                      {item.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:pt-12 space-y-8"
          >
            <h2 className="font-anton text-4xl lg:text-5xl uppercase tracking-tighter leading-none text-slate-900">
              Des prestations uniques <br/> pour tisser votre toile
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Depuis 2009, plus de <strong className="text-slate-900">16 000 entreprises</strong> nous ont fait confiance. Nous bâtissons des vecteurs de croissance pensés pour la conversion.
            </p>
            <div className="p-8 bg-blue-50 border-l-8 border-blue-600 rounded-r-3xl">
                <p className="text-xs uppercase font-black tracking-[0.2em] text-blue-600 mb-2">Le + DevTargo :</p>
                <p className="text-xl font-anton uppercase text-slate-900">Des modèles SEO-Ready conçus pour la conversion.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default CreationSite;