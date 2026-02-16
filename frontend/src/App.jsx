import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 

import Accueil from "./pages/Accueil";
import Services from "./pages/Services";

import CreationSite from "./pages/CreationSite";
import Layout from "./componsnts/Layout";
import SeoLocal from "./componsnts/SeoLocal";
import SeoGeo from "./componsnts/SeoGeo";
import GoogleAds from "./componsnts/GoogleAds";
import SocialAds from "./componsnts/SocialAds";
import GooglBusinessProfile from "./componsnts/GooglBusinessProfile";
import Realisation from "./pages/Realisation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./componsnts/Blog";
import EtudeDeCas from "./componsnts/EtudeDeCas";
import Ebooks from "./componsnts/Ebooks";

function App() {
  // Correctio
  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/creation-site" element={<CreationSite />} />
          <Route path="/services/seo-local" element={<SeoLocal />} />
          <Route path="/services/seo-geo" element={<SeoGeo />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/gmb" element={<GooglBusinessProfile />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource/blog" element={<Blog />} />
          {/* ok ok */}
          <Route path="/resource/etudes-de-cas" element={<EtudeDeCas />} />
          <Route path="/resource/e-books" element={<Ebooks />} />
        </Routes>
      </Layout>
    </HelmetProvider>
  );
}

export default App;