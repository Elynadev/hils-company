// components/tourisme/Destinations.jsx
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cotonou from "../../../assets/img/cotonou.jpg";
import abomey from "../../../assets/img/abomey.jpg";
import dakar from "../../../assets/img/dakar.jpg";
import accra from "../../../assets/img/accra.jpg";
import abidjan from "../../../assets/img/abidjan.jpg";
import lome from "../../../assets/img/lome.jpg";

const destinations = [
  {
    id: 1,
    pays: "Bénin",
    ville: "Cotonou",
    description: "La capitale économique, entre modernité et traditions vaudou. Marchés animés, plages et gastronomie locale.",
    image: cotonou,
    tags: ["Culture", "Plage", "Gastronomie"],
    duree: "3-5 jours",
  },
  {
    id: 2,
    pays: "Bénin",
    ville: "Abomey",
    description: "L'ancienne capitale du puissant Royaume du Danxomè, classée au patrimoine mondial de l'UNESCO.",
    image: abomey,
    tags: ["Histoire", "UNESCO", "Art"],
    duree: "2-3 jours",
  },
  {
    id: 3,
    pays: "Sénégal",
    ville: "Dakar",
    description: "Ville dynamique au bout du monde, berceau de la teranga et de la musique africaine.",
    image: dakar,
    tags: ["Musique", "Plage", "Mode"],
    duree: "4-7 jours",
  },
  {
    id: 4,
    pays: "Ghana",
    ville: "Accra",
    description: "La porte d'or de l'Afrique, entre histoire coloniale, art contemporain et innovation.",
    image: accra,
    tags: ["Histoire", "Art", "Business"],
    duree: "3-5 jours",
  },
  {
    id: 5,
    pays: "Côte d'Ivoire",
    ville: "Abidjan",
    description: "La perle des lagunes, capitale économique de la région avec une vie nocturne vibrante.",
    image: abidjan,
    tags: ["Business", "Culture", "Nuit"],
    duree: "3-5 jours",
  },
  {
    id: 6,
    pays: "Togo",
    ville: "Lomé",
    description: "La seule capitale africaine bordant l'Atlantique, charmante et authentique.",
    image: lome,
    tags: ["Marché", "Plage", "Artisanat"],
    duree: "2-4 jours",
  },
];

const Destinations = () => {
  // Animation variants cohérents avec le reste du site
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <section className="py-24 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
            Nos Destinations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
            Explorez l'Afrique <span className="text-teal-600">de l'Ouest</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Des destinations soigneusement sélectionnées pour vous offrir
            le meilleur de la culture, de l'histoire et de la nature.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.ville}, ${dest.pays}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                  <Clock size={12} className="text-teal-700" />
                  <span className="text-teal-900 text-xs font-semibold">{dest.duree}</span>
                </div>
                
                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                  <MapPin size={14} className="text-white" />
                  <span className="text-white text-sm font-medium">{dest.pays}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-2">
                  {dest.ville}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-teal-700 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Découvrir</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          {...fadeInUp}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-teal-900 text-white font-bold rounded-lg hover:bg-teal-800 transition-all duration-300 hover:shadow-lg">
            Voir toutes les destinations
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;