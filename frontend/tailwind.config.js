/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ON GARDE TOUTES TES POLICES PRÉFÉRÉES
      fontFamily: {
        lora: ["Lora", "serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        libre: ["Libre Baskerville", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
      // AJOUT DES COULEURS ET ANIMATIONS POUR LE "PAQUET" VISUEL
      colors: {
        agency: {
          red: '#E11D48',   // Le rouge vif de tes captures
          dark: '#0F172A',  // Le bleu/noir profond pour le côté robuste
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}