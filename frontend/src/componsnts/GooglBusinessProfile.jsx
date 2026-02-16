import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Optimisation complète de la fiche",
    desc: "Nous optimisons votre profil Google Business pour attirer plus d’appels et de visites.",
    icon: <MapPin size={28} />,
  },
  {
    title: "Gestion des avis clients",
    desc: "Stratégie d’acquisition d’avis positifs pour renforcer votre crédibilité.",
    icon: <Star size={28} />,
  },
  {
    title: "Posts & actualités Google",
    desc: "Publications régulières pour améliorer votre visibilité locale.",
    icon: <MessageCircle size={28} />,
  },
  {
    title: "Analyse & performance",
    desc: "Suivi précis des statistiques et optimisation continue.",
    icon: <TrendingUp size={28} />,
  },
];

const stats = [
  { value: "+200%", label: "Visibilité locale" },
  { value: "4.9★", label: "Note moyenne" },
  { value: "3x", label: "Appels entrants" },
];

const GooglBusinessProfile = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 text-slate-900">

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e_0%,transparent_60%)] opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 text-green-600 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
            <ShieldCheck size={16} /> Google Business Profile
          </span>

          <h1 className="font-anton text-4xl md:text-6xl uppercase tracking-tight mb-8">
            Devenez incontournable sur{" "}
            <span className="text-green-500">Google Maps</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-xl mb-12">
            Optimisez votre fiche Google Business Profile pour attirer plus de
            clients locaux et renforcer votre réputation.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-10 py-5 bg-green-500 text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition">
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
              <p className="text-5xl font-black text-green-500 mb-2">
                {stat.value}
              </p>
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
              Votre vitrine locale{" "}
              <span className="text-green-500">numéro 1</span>
            </h2>
            <p className="text-slate-500 mb-6 text-lg">
              Google Business Profile est le premier point de contact entre vous
              et vos clients locaux.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">✅ Plus d’appels entrants</li>
              <li className="flex gap-4">✅ Meilleure réputation</li>
              <li className="flex gap-4">✅ Visibilité continue</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ rotate: 1, scale: 1.03 }}
            className="bg-white rounded-[3rem] shadow-2xl p-12 relative"
          >
            <div className="absolute inset-0 bg-green-100 opacity-30 rounded-[3rem]" />
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto text-3xl shadow-xl">
                📍
              </div>
              <p className="font-anton uppercase">Votre entreprise</p>
              <p className="text-green-500 font-bold">Visible sur Maps</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-anton text-4xl uppercase mb-16">
            Nos services Google Business Profile
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border hover:border-green-500 transition"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-500 mb-6">
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
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-[3rem] p-16 text-center text-white shadow-2xl"
          >
            <h2 className="font-anton text-4xl uppercase mb-8">
              Prêt à dominer votre marché local ?
            </h2>
            <button className="bg-white text-green-500 px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition">
              Optimiser ma fiche Google
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GooglBusinessProfile;