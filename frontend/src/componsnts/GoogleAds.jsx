import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, DollarSign, BarChart3, Rocket } from "lucide-react";

const services = [
  {
    title: "Campagnes Search",
    desc: "Touchez vos clients au moment exact où ils recherchent vos services sur Google.",
    icon: <Target size={28} />,
  },
  {
    title: "Publicités Rentables",
    desc: "Optimisation continue pour réduire votre coût par clic et maximiser vos conversions.",
    icon: <DollarSign size={28} />,
  },
  {
    title: "Analyse & Reporting",
    desc: "Suivi précis des performances avec des rapports clairs et exploitables.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Scaling & Croissance",
    desc: "Déploiement de campagnes avancées pour accélérer votre chiffre d’affaires.",
    icon: <Rocket size={28} />,
  },
];

const stats = [
  { value: "+300%", label: "ROI moyen" },
  { value: "-45%", label: "Coût par lead" },
  { value: "24/7", label: "Visibilité immédiate" },
];

const GoogleAds = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b_0%,transparent_60%)] opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
            <TrendingUp size={16} /> Google Ads Premium
          </span>

          <h1 className="font-anton text-4xl md:text-6xl uppercase tracking-tight mb-8">
            Multipliez vos <span className="text-yellow-500">ventes</span> avec Google Ads
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-xl mb-12">
            Des campagnes Google Ads rentables, optimisées pour attirer des clients prêts à acheter.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-yellow-500 text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition">
              Audit gratuit
            </button>
            <button className="px-10 py-5 border border-slate-300 rounded-2xl font-bold hover:bg-slate-100 transition">
              Notre stratégie
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
              <p className="text-5xl font-black text-yellow-500 mb-2">{stat.value}</p>
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
              Votre machine à <span className="text-yellow-500">clients</span>
            </h2>
            <p className="text-slate-500 mb-6 text-lg">
              Google Ads vous permet d’apparaître instantanément devant vos prospects les plus qualifiés.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">✅ Résultats immédiats</li>
              <li className="flex gap-4">✅ Budget maîtrisé</li>
              <li className="flex gap-4">✅ Croissance mesurable</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ rotate: 1, scale: 1.03 }}
            className="bg-white rounded-[3rem] shadow-2xl p-12 relative"
          >
            <div className="absolute inset-0 bg-yellow-100 opacity-30 rounded-[3rem]" />
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white mx-auto text-3xl shadow-xl">
                💰
              </div>
              <p className="font-anton uppercase">Votre business</p>
              <p className="text-yellow-500 font-bold">En croissance</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-anton text-4xl uppercase mb-16">
            Nos solutions Google Ads
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border hover:border-yellow-500 transition"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-500 mb-6">
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-slate-500">{s.desc}</p>
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
            className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-[3rem] p-16 text-center text-white shadow-2xl"
          >
            <h2 className="font-anton text-4xl uppercase mb-8">
              Prêt à lancer vos campagnes rentables ?
            </h2>
            <button className="bg-white text-yellow-500 px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition">
              Lancer ma campagne
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAds;