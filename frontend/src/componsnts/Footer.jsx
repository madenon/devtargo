import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-[#0f172a] text-white/70 font-poppins overflow-hidden">

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.04] backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/10 flex flex-col lg:flex-row justify-between items-center gap-12 mb-24 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-anton text-2xl md:text-3xl uppercase tracking-tighter mb-6 text-white leading-[0.5]">
              Prêt à faire passer <br />
              <span className="text-cyan-400 italic">votre business au niveau supérieur ?</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Construisons ensemble une stratégie digitale performante et durable.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold uppercase rounded-2xl transition-all shadow-xl shadow-cyan-500/20 tracking-wider"
          >
            Démarrer mon projet →
          </motion.a>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-white/5 pb-20 text-center sm:text-left">

          {/* BRAND */}
          <div className="space-y-6 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-anton text-2xl text-white shadow-lg">
                Dev
              </div>
              <h2 className="text-3xl font-anton tracking-tighter uppercase text-white">
                Targo<span className="text-cyan-400">.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed italic opacity-80">
              Experts en création web & marketing digital. Nous propulsons les marques vers la performance.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-white font-anton mb-8 uppercase text-xs tracking-[0.3em] opacity-50">Navigation</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              {["Services", "Réalisations", "À propos", "Contact"].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-white font-anton mb-8 uppercase text-xs tracking-[0.3em] opacity-50">Expertise</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              {["Création Web", "SEO", "Google Business", "Social Ads"].map((item) => (
                <li key={item} className="flex justify-center sm:justify-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-6">
            <h4 className="text-white font-anton mb-8 uppercase text-xs tracking-[0.3em] opacity-50">Social</h4>
            <div className="flex justify-center sm:justify-start gap-3">
              {["FB", "IG", "LI"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-11 h-11 bg-white/[0.04] border border-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 font-bold text-xs"
                >
                  {social}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Support client
              </p>
              <p className="text-slate-500 text-[10px] uppercase tracking-wider leading-tight">
                Lun–Ven · 9h00 – 18h00
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="py-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase gap-6 text-center opacity-70">
          <p>© {currentYear} DevTargo — Digital Growth Agency</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Mentions</a>
          </div>
        </div>
      </div>

      {/* Glow décoratif */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;