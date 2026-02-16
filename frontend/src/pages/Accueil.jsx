import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Accueil = () => {
  useEffect(() => {
    document.title = "DEV-Targo | Agence de Croissance Digitale & SEO";
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="font-poppins bg-[#f8fafc] text-slate-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white via-slate-100 to-white">
        
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[35%] h-[35%] bg-cyan-200/20 blur-[140px] rounded-full"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-5xl text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="font-anton text-3xl md:text-2xl lg:text-4xl uppercase tracking-tight leading-[0.95] mb-8"
          >
            Votre site mérite <br />
            <span className="text-blue-600 italic">une vraie visibilité digitale</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Nous concevons des expériences web performantes, orientées croissance et conversion.
            Design moderne, SEO stratégique et technologies solides.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-blue-600 font-semibold text-base md:text-lg mb-12"
          >
            🚀 Plus de clients. Plus de visibilité. Plus de chiffre d’affaires.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-600 transition-all"
            >
              Démarrer un projet
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="/services"
              className="text-slate-900 font-bold border-b-2 border-blue-600 pb-1 flex items-center gap-2"
            >
              Découvrir nos services <span className="text-blue-600">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= TRUST BAR (NOUVEAU) ================= */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Ils nous font confiance pour leur stratégie</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
            {/* Remplace par tes vrais logos plus tard */}
            <span className="font-anton text-2xl">TECHCORP</span>
            <span className="font-anton text-2xl">SOLUTIONS+</span>
            <span className="font-anton text-2xl">NEXUS.WEB</span>
            <span className="font-anton text-2xl">GLOBAL-IT</span>
            <span className="font-anton text-2xl">AGENCY.K</span>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {[
            { value: "107+", label: "Projets réalisés" },
            { value: "9K+", label: "Visiteurs mensuels" },
            { value: "7", label: "Experts dédiés" },
            { value: "100%", label: "Satisfaction client" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h3 className="font-anton text-5xl text-slate-900">{item.value}</h3>
              <p className="text-xs uppercase tracking-widest text-blue-600 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-slate-50 py-36">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-2xl lg:text-3xl uppercase mb-8 leading-tight">
              Confiez votre croissance <br /> à des experts digitaux
            </h2>
            <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg space-y-6"
          >
            <p>
              Nous créons des plateformes web modernes et des stratégies digitales
              capables de transformer votre présence en ligne en un véritable levier de croissance.
            </p>
            <p className="italic border-l-4 border-blue-200 pl-6 text-slate-400">
              Chaque décision est pensée pour maximiser votre retour sur investissement. Nous ne faisons pas que du code, nous créons votre futur moteur de vente.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-anton text-3xl md:text-2xl uppercase mb-16"
          >
            Pourquoi nos clients nous font confiance
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                title: "Résultats concrets",
                icon: "📈",
                text: "Nous ne vendons pas de promesses, mais des KPIs. Augmentation du trafic organique et du taux de conversion mesurable."
              },
              {
                title: "Accompagnement humain",
                icon: "🤝",
                text: "Pas de ticket support anonyme. Un expert dédié suit votre projet de la conception à la maintenance 24/7."
              },
              {
                title: "Technologie moderne",
                icon: "⚡",
                text: "Utilisation de frameworks récents (React, Next.js) pour des sites ultra-rapides, sécurisés et scalables."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-[2.5rem] shadow-lg border border-slate-100 hover:border-blue-500/30 transition-all duration-500 text-left"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <a
              href="/contact"
              className="inline-block px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl hover:bg-slate-900 transition-all"
            >
              Obtenir un devis gratuit →
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= TESTIMONIALS (NOUVEAU) ================= */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-anton text-4xl uppercase mb-16 text-center tracking-tighter">Ils témoignent de <span className="text-blue-500 italic">notre impact</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
              <p className="text-lg text-slate-300 mb-8 italic">"Grâce à DevTargo, notre visibilité sur Google a bondi de 150% en seulement 4 mois. Une équipe ultra-réactive et pro."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest">Jean-Marc L.</p>
                  <p className="text-blue-400 text-[10px] font-black uppercase">Directeur Marketing - TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
              <p className="text-lg text-slate-300 mb-8 italic">"Un site web qui n'est pas seulement beau, mais qui convertit réellement. Notre meilleur investissement digital à ce jour."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-full"></div>
                <div>
                  <p className="font-bold uppercase text-xs tracking-widest">Sophie D.</p>
                  <p className="text-blue-400 text-[10px] font-black uppercase">Fondatrice - Boutique Luxe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CARD ================= */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 flex justify-center">

          <motion.div
            whileHover={{ y: -15 }}
            className="bg-slate-950 text-white p-16 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] text-center max-w-xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-7xl mb-8"
            >
              🚀
            </motion.div>

            <h3 className="font-anton text-4xl uppercase mb-6">
              Création Web & SEO
            </h3>

            <p className="text-slate-300 mb-4">
              Sites rapides, design premium, référencement optimisé pour la conversion. Nous ne créons pas de simples sites, nous créons vos succès futurs.
            </p>

            <p className="text-blue-400 font-semibold mb-10">
              Votre succès digital commence ici.
            </p>

            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="/services"
              className="inline-flex w-16 h-16 bg-blue-600 rounded-2xl items-center justify-center text-2xl shadow-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              →
            </motion.a>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Accueil;