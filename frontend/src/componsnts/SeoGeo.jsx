import React from "react";
import { motion } from "framer-motion";
import { Map, Globe2, Search, TrendingUp, Target } from "lucide-react";

const features = [
  {
    title: "Ciblage par Pays & Régions",
    desc: "Atteignez vos clients dans des zones géographiques précises avec une stratégie SEO adaptée à chaque territoire.",
    icon: <Globe2 size={28} />,
  },
  {
    title: "Mots-clés Géo-stratégiques",
    desc: "Nous analysons les intentions de recherche locales pour capter un trafic qualifié.",
    icon: <Search size={28} />,
  },
  {
    title: "Pages Géolocalisées",
    desc: "Création de pages optimisées par ville, région ou pays pour dominer les résultats locaux.",
    icon: <Map size={28} />,
  },
  {
    title: "Analyse & Croissance",
    desc: "Suivi des performances et optimisation continue pour une visibilité durable.",
    icon: <TrendingUp size={28} />,
  },
];

const stats = [
  { value: "+250%", label: "Visibilité géographique" },
  { value: "3x", label: "Trafic ciblé" },
  { value: "98%", label: "Clients satisfaits" },
];

const SeoGeo = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6366f1_0%,transparent_60%)] opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
            <Target size={16} /> SEO GÉOGRAPHIQUE
          </span>

          <h1 className="font-anton text-3xl md:text-2xl uppercase tracking-tight mb-8">
            Développez votre visibilité <span className="text-indigo-600">dans chaque région</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-xl mb-12">
            Touchez vos clients là où ils se trouvent grâce à une stratégie SEO géographique puissante.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition">
              Audit gratuit
            </button>
            <button className="px-10 py-5 border border-slate-300 rounded-2xl font-bold hover:bg-slate-100 transition">
              Notre méthode
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-10 text-center shadow-lg border"
            >
              <p className="text-5xl font-black text-indigo-600 mb-2">{stat.value}</p>
              <p className="text-slate-500 uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-4xl uppercase mb-8">
              Une stratégie <span className="text-indigo-600">sans frontières</span>
            </h2>
            <p className="text-slate-500 mb-6 text-lg">
              Le SEO géographique permet d’atteindre vos prospects dans plusieurs villes, régions ou pays.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">✅ Trafic local et international</li>
              <li className="flex gap-4">✅ Visibilité multi-zones</li>
              <li className="flex gap-4">✅ Conversion plus élevée</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ rotate: 1, scale: 1.03 }}
            className="bg-white rounded-[3rem] shadow-2xl p-12 relative"
          >
            <div className="absolute inset-0 bg-indigo-100 opacity-30 rounded-[3rem]" />
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white mx-auto text-3xl shadow-xl">
                🌍
              </div>
              <p className="font-anton uppercase">Votre marque</p>
              <p className="text-indigo-600 font-bold">Visible partout</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-anton text-4xl uppercase mb-16">
            Nos solutions géographiques
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border hover:border-indigo-500 transition"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  {f.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-slate-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[3rem] p-16 text-center text-white shadow-2xl"
          >
            <h2 className="font-anton text-4xl uppercase mb-8">
              Prêt à conquérir de nouveaux marchés ?
            </h2>
            <button className="bg-white text-indigo-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition">
              Lancer ma stratégie SEO
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SeoGeo;