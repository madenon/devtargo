import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Calendar, User } from 'lucide-react';

const Blog = () => {
  // Données fictives pour les articles
  const posts = [
    {
      id: 1,
      title: "Optimisez votre site web pour la conversion",
      excerpt: "Découvrez les meilleures pratiques pour transformer vos visiteurs en clients.",
      author: "Nabini Siaka",
      date: "15 Février 2026",
      image: "https://source.unsplash.com/600x400/?technology,website",
    },
    {
      id: 2,
      title: "Pourquoi React Native est l'avenir des apps mobiles",
      excerpt: "Apprenez comment développer des applications mobiles performantes et cross-platform.",
      author: "Nabini Siaka",
      date: "10 Février 2026",
      image: "https://source.unsplash.com/600x400/?mobile,app",
    },
    {
      id: 3,
      title: "MERN Stack : Développement full-stack moderne",
      excerpt: "Un guide complet pour maîtriser MongoDB, Express, React et Node.js.",
      author: "Nabini Siaka",
      date: "05 Février 2026",
      image: "https://source.unsplash.com/600x400/?code,programming",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-anton text-gray-900 mb-12 text-center"
        >
          Notre Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-anton text-xl md:text-2xl text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between mt-6 text-gray-400 text-xs">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-block text-blue-600 font-bold hover:underline uppercase text-xs"
                >
                  Lire l'article →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;