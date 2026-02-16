import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, Code2, ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* TEXTE DE BIENVENUE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black tracking-[2px] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Ouvert aux projets — 2026
          </div>

          <h1 className="text-5xl md:text-8xl font-anton uppercase leading-[0.9] text-gray-900">
            Propulsez votre <br />
            <span className="text-blue-600">Vision Digitale</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-poppins max-w-2xl leading-relaxed">
            Experts en ingénierie{" "}
            <span className="font-bold text-gray-900 border-b-2 border-blue-500 pb-1">
              Fullstack MERN
            </span>
            . Nous concevons des écosystèmes web haute performance, scalables et
            sur-mesure pour transformer vos idées en succès commerciaux.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Link
              to="/offres"
              className="group px-10 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-3 active:scale-95 uppercase text-sm tracking-widest"
            >
              Démarrer un projet
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/services"
              className="px-10 py-5 border-2 border-gray-200 text-gray-800 font-bold rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95 uppercase text-sm tracking-widest"
            >
              Nos réalisations
            </Link>
          </div>
        </motion.div>

        {/* VISUEL TERMINAL (Côté Droit) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative group w-full"
        >
          {/* Effets de lumière dynamiques */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

          <div className="relative w-full h-[400px] md:h-[500px] bg-[#0B0F1A] rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col">
            {/* BARRE DE TITRE TERMINAL */}
            <div className="bg-[#161B29] px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] shadow-lg shadow-red-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] shadow-lg shadow-yellow-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#28C840] shadow-lg shadow-green-500/20"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase tracking-[2px]">
                <Terminal size={12} /> main-stack.config
              </div>
            </div>

            {/* ZONE DE CODE */}
            <div className="flex flex-1 p-8 font-mono text-sm md:text-lg leading-relaxed">
              <div className="text-gray-600 pr-8 text-right select-none border-r border-white/5 hidden sm:block">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </div>

              <div className="pl-8 space-y-1">
                <p>
                  <span className="text-purple-400">export default</span>{" "}
                  <span className="text-blue-400">function</span>{" "}
                  <span className="text-yellow-400">Agency()</span>{" "}
                  <span className="text-white">{"{"}</span>
                </p>
                <p className="pl-6">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-white">(</span>
                </p>
                <p className="pl-12 text-blue-200">
                  {"<"}
                  <span className="text-pink-400">MernStack</span>
                </p>
                <p className="pl-16">
                  team=<span className="text-green-400">"Kone & Co"</span>
                </p>
                <p className="pl-16">
                  status=
                  <span className="text-green-400">"Built_to_Scale"</span>
                </p>
                <p className="pl-16">
                  results=<span className="text-green-400">"Optimized"</span>
                </p>
                <p className="pl-12 text-blue-200">{" />"}</p>
                <p className="pl-6">
                  <span className="text-white">);</span>
                </p>
                <p>
                  <span className="text-white">{"}"}</span>
                </p>

                {/* Ligne d'exécution pulsante */}
                <div className="mt-6 flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl">
                  <span className="text-blue-400 animate-pulse text-xs">●</span>
                  <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                    Status: Deployment Success 100%
                  </p>
                </div>
              </div>
            </div>

            {/* ELEMENTS FLOTTANTS */}
            <div className="absolute top-20 right-[-20px] bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl rotate-6 hidden xl:block">
              <Code2 className="text-blue-500" size={32} />
            </div>

            {/* Badge Bas Droit */}
            <div className="absolute bottom-6 right-6 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 px-4 py-2 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter">
                99.9% Production Ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;