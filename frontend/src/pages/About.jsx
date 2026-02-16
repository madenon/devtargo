import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  BrainCircuit,
  Layout,
  Smartphone,
  Layers
} from "lucide-react";

const About = () => {
  // Configuration des services pour mapper et éviter la répétition
  const services = [
    {
      title: "UI/UX & Web",
      desc: "Interfaces modernes en HTML, CSS et JavaScript.",
      icon: <Layout size={22} />,
      color: "group-hover:text-orange-500"
    },
    {
      title: "Fullstack MERN",
      desc: "Apps Web robustes avec MongoDB, Express, React, Node.",
      icon: <Layers size={22} />,
      color: "group-hover:text-green-500"
    },
    {
      title: "Mobile App",
      desc: "Solutions natives iOS & Android via React Native.",
      icon: <Smartphone size={22} />,
      color: "group-hover:text-blue-500"
    },
    {
      title: "IA & Python",
      desc: "Automatisation et intelligence de données avancée.",
      icon: <BrainCircuit size={22} />,
      color: "group-hover:text-purple-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* CÔTÉ VISUEL - CONCEPT ATLAS-EBONY */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-[#0f172a] aspect-square flex items-center justify-center p-12 group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

              {/* Cercle animé en arrière-plan */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border border-blue-500/20 rounded-full border-dashed"
              />

              <div className="relative flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="cursor-pointer"
                >
                  <BrainCircuit size={90} className="text-blue-500 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </motion.div>
                <h3 className="text-white text-4xl font-anton uppercase tracking-widest leading-none">
                  Synergie <br />
                  <span className="text-blue-500 font-poppins font-light italic text-2xl tracking-normal">
                    Atlas-Ebony
                  </span>
                </h3>
              </div>

              {/* Code Snippet Flottant */}
              <div className="absolute top-8 right-8 bg-white/5 backdrop-blur-md p-5 rounded-3xl border border-white/10 shadow-2xl">
                <p className="text-blue-400 font-mono text-[11px] leading-relaxed">
                  <span className="text-purple-400">const</span> Agency = {'{'} <br />
                  &nbsp;&nbsp;stack: <span className="text-yellow-400">"MERN"</span>, <br />
                  &nbsp;&nbsp;native: <span className="text-yellow-400">true</span>, <br />
                  &nbsp;&nbsp;ai: <span className="text-yellow-400">"Python"</span> <br />
                  {'}'};
                </p>
              </div>
            </div>

            {/* Badge Flottant */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -10 }}
              className="absolute -top-6 -left-6 z-20 bg-[#1a233b] text-white p-8 rounded-[2rem] shadow-2xl hidden md:block border border-blue-500/30"
            >
              <Users size={32} className="mb-3 mx-auto text-blue-500" />
              <p className="text-[10px] uppercase tracking-[3px] font-black text-blue-400 text-center">
                DevTargo <br/> Solution
              </p>
            </motion.div>
          </motion.div>

          {/* CÔTÉ TEXTE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-blue-600 text-xs font-black uppercase tracking-[6px] mb-5 block">
              Expertise Full-Stack & Innovation
            </span>
            <h2 className="text-2xl md:text-3xl font-anton uppercase leading-[0.9] text-gray-900 mb-10">
              Ingénierie de <br />
              <span className="text-blue-600 italic">Haute Précision</span>
            </h2>

            {/* GRID DES SERVICES AVEC HOVER ROBUSTE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -8, 
                    backgroundColor: "#f8fafc",
                    borderColor: "#3b82f6" 
                  }}
                  className="group flex items-start gap-4 p-5 bg-white rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 cursor-default"
                >
                  <div className={`mt-1 p-3 rounded-2xl bg-slate-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300 text-slate-600 ${service.color}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-sm uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 py-10 border-t border-gray-100 mb-10">
              {[
                { val: "MERN", label: "Architecture" },
                { val: "iOS/And", label: "Cross-Platform" },
                { val: "Python", label: "Data Core" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left border-l-2 border-blue-600 pl-4">
                  <p className="text-2xl font-anton text-gray-900 tracking-tighter">{stat.val}</p>
                  <p className="text-[9px] text-gray-400 uppercase font-black tracking-widest leading-none">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* BOUTON D'ACTION */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-block w-full md:w-auto bg-[#1a233b] text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 text-center uppercase text-xs tracking-[3px]"
              >
                Lancer votre projet maintenant
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;