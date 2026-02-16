import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const sections = [
    {
      title: "Collecte Intelligente & Limitée",
      content: "Nous appliquons le principe de minimisation des données. Seules les informations essentielles à l'étude de votre projet (identité, contact, cahier des charges) sont recueillies via nos protocoles sécurisés pour établir vos diagnostics digitaux."
    },
    {
      title: "Traitement & Finalité des Flux",
      content: "Vos données ne font l'objet d'aucune exploitation commerciale tierce. Elles sont exclusivement dédiées à la modélisation de vos solutions SaaS, à la gestion de notre collaboration et à l'optimisation technique de votre futur écosystème MERN."
    },
    {
      title: "Infrastructure de Sécurité (MERN Shield)",
      content: "Votre vie privée est protégée par une architecture robuste : chiffrement de bout en bout (SSL/TLS), hachage des données sensibles via Bcrypt, et protection contre les injections XSS/CSRF. Votre projet est hébergé sur des serveurs conformes aux plus hauts standards de sécurité informatique."
    },
    {
      title: "Souveraineté & Droits (RGPD)",
      content: "Vous restez maître de vos données. Conformément au RGPD, DevTargo Solution vous garantit un accès total, un droit de portabilité et une suppression définitive de vos fichiers sur simple demande. Notre transparence est le socle de votre confiance."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-poppins min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* EN-TÊTE */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-anton uppercase italic text-gray-900 mb-4">
              Confidentialité <span className="text-blue-600">&</span> Protection
            </h1>
            <p className="text-gray-500 font-medium italic">
              Dernière mise à jour : Janvier 2026
            </p>
          </motion.div>
        </div>

        {/* CONTENU SÉCURISÉ */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          
          {/* Badge de protection visuel (Rappel technique MERN) */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-8 py-2 rounded-bl-3xl flex items-center space-x-2 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zM10 5a2 2 0 00-2 2v2H7a1 1 0 000 2h1v2a1 1 0 102 0v-2h1a1 1 0 100-2h-1V7a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-widest">Protection Active 256-bit</span>
          </div>

          <div className="space-y-12">
            {sections.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base border-l-2 border-gray-50 pl-5">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SECTION COOKIES / LOCALSTORAGE (TECHNIQUE) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100"
          >
            <h3 className="text-blue-800 font-bold text-sm uppercase mb-2">Note sur les Cookies & LocalStorage</h3>
            <p className="text-blue-700/80 text-xs leading-relaxed">
              Pour assurer la persistance de vos sessions (Dashboard, Panier), nous utilisons le <b>LocalStorage</b> et des <b>HTTP-Only Cookies</b>. Ces outils ne servent qu'au bon fonctionnement technique de vos outils et ne sont jamais utilisés pour du tracking publicitaire.
            </p>
          </motion.div>

          {/* FOOTER DE PROTECTION */}
          <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400 italic text-center md:text-left">
              Pour toute question concernant vos droits, contactez notre équipe technique via la section <a href="/contact" className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors">Contact</a>.
            </p>
            <div className="flex space-x-4 opacity-30 grayscale">
               <img src="/shield-iso.png" alt="Secured" className="h-8 w-auto" />
               <img src="/rgpd-logo.png" alt="RGPD" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;