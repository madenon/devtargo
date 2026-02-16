import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      label: "Email Professionnel",
      value: "nabinikone0@gmail.com",
      icon: "📧",
      link: "mailto:nabinikone0@gmail.com",
    },
    {
      label: "Ligne Directe",
      value: "+216 (0) 69 194 2109",
      icon: "📞",
      link: "tel:+216691942109",
    },
    {
      label: "Siège Social",
      value: "Maarif, Casablanca",
      icon: "📍",
      link: "https://goo.gl/maps/YourGoogleMapsLinkHere", // Optionnel : lien vers Google Maps
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITRE - Identité Agence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-gray-900 tracking-tight">
            Lancez votre <span className="text-blue-600">Projet</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto italic">
            "Une idée ? Un besoin technique ? Notre équipe analyse votre cahier
            des charges et vous répond sous 24h avec une solution chiffrée."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* INFOS GAUCHE ET MAP */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Canaux Directs
              </h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-blue-500/30 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="text-3xl mr-6 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[2px] mb-1">
                      {info.label}
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SECTION GOOGLE MAPS - MAARIF CASA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full h-72 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-gray-50 relative"
            >
              <iframe
                title="Google Maps Maarif"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13296.6343513221!2d-7.64165565!3d33.57529465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29323755497%3A0x6009139857908b83!2sMaarif%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
                <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">📍 Maarif, Casablanca</p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nabini-siaka-kone-98b986240/"
                className="flex-1 text-center px-8 py-4 bg-[#1a233b] text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/madenon"
                className="flex-1 text-center px-8 py-4 bg-gray-100 text-gray-800 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-all border border-gray-200"
              >
                GitHub Open Source
              </a>
            </div>
          </div>

          {/* FORMULAIRE - Style MERN Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#1a233b] p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden h-full"
          >
            {/* Décoration subtile en arrière-plan */}
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>

            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-blue-400 tracking-widest ml-1">
                    Identité
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-blue-400 tracking-widest ml-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:bg-white/10 outline-none transition duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* LE CHAMP SELECT AMÉLIORÉ */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-blue-400 tracking-widest ml-1">
                  Type de solution
                </label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:bg-white/10 outline-none transition appearance-none cursor-pointer text-sm">
                    <option className="bg-[#1a233b]" value="">
                      Sélectionner une expertise
                    </option>
                    <option className="bg-[#1a233b]" value="vitrine">
                      Site Vitrine / Landing Page
                    </option>
                    <option className="bg-[#1a233b]" value="ecommerce">
                      E-Commerce Fullstack (MERN)
                    </option>
                    <option className="bg-[#1a233b]" value="saas">
                      Application SaaS / Métier
                    </option>
                    <option className="bg-[#1a233b]" value="pfe">
                      Accompagnement PFE & Coaching Tech
                    </option>
                    <option className="bg-[#1a233b]" value="bug">
                      Audit, Maintenance & Debug
                    </option>
                    <option className="bg-[#1a233b]" value="autre">
                      Autre (Précisez dans la vision)
                    </option>
                  </select>

                  {/* Icône de flèche personnalisée */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-blue-400 tracking-widest ml-1">
                  Votre Vision
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:bg-white/10 outline-none transition"
                  placeholder="Décrivez les fonctionnalités clés de votre projet..."
                ></textarea>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 py-5 rounded-2xl font-black uppercase tracking-[3px] text-xs hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center space-x-3"
                >
                  <span>Transmettre le dossier</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
                <p className="text-[9px] text-center mt-4 text-white/40 uppercase tracking-widest">
                  RGPD : Vos données sont chiffrées et protégées.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;