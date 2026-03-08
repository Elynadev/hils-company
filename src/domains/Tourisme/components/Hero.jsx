import { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Compass, X, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";
import heroBg from "../../../assets/img/hero-bg.jpg";

const destinations = [
  { ville: "Ganvié", pays: "Bénin", type: "Culture" },
  { ville: "Cotonou", pays: "Bénin", type: "Plage" },
  { ville: "Abomey", pays: "Bénin", type: "Histoire" },
  { ville: "Dakar", pays: "Sénégal", type: "Culture" },
  { ville: "Accra", pays: "Ghana", type: "Histoire" },
  { ville: "Abidjan", pays: "Côte d'Ivoire", type: "Culture" },
  { ville: "Lomé", pays: "Togo", type: "Plage" },
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState({
    destination: "",
    periode: "",
    type: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const debouncedDestination = useDebounce(searchQuery.destination, 500);

  useEffect(() => {
    if (debouncedDestination || searchQuery.type) {
      const results = destinations.filter((dest) => {
        const matchDestination = debouncedDestination
          ? dest.ville.toLowerCase().includes(debouncedDestination.toLowerCase()) ||
            dest.pays.toLowerCase().includes(debouncedDestination.toLowerCase())
          : true;
        const matchType = searchQuery.type ? dest.type === searchQuery.type : true;
        return matchDestination && matchType;
      });
      setFilteredDestinations(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [debouncedDestination, searchQuery.type]);

  const closeResults = () => {
    setShowResults(false);
    setSearchQuery({ destination: "", periode: "", type: "" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Logo Home Button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all group"
      >
        <Home size={20} className="text-white group-hover:scale-110 transition-transform" />
        <span className="text-white font-bold text-sm">Accueil</span>
      </Link>

      <img
        src={heroBg}
        alt="Ganvié - La Venise de l'Afrique"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
            Hils Company · Tourisme
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Découvrez l'Âme de
          <br />
          <span className="text-gold">l'Afrique de l'Ouest</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Des expériences authentiques, des cultures vibrantes et des paysages
          à couper le souffle — du lac Nokoué à la savane.
        </motion.p>

        {/* Barre de recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto shadow-2xl mb-12"
        >
          <div className="flex items-center gap-3 flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-400 font-medium">Destination</p>
              <input
                type="text"
                value={searchQuery.destination}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, destination: e.target.value })
                }
                placeholder="Ganvié, Bénin..."
                className="text-sm text-gray-700 font-semibold w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <Calendar size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-400 font-medium">Période</p>
              <input
                type="date"
                value={searchQuery.periode}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, periode: e.target.value })
                }
                className="text-sm text-gray-700 font-semibold w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 flex-1 px-4 py-2">
            <Compass size={18} className="text-primary shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-gray-400 font-medium">Type</p>
              <select
                value={searchQuery.type}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, type: e.target.value })
                }
                className="text-sm text-gray-700 font-semibold w-full focus:outline-none bg-transparent"
              >
                <option value="">Tout type</option>
                <option value="Culture">Culture</option>
                <option value="Plage">Plage</option>
                <option value="Histoire">Histoire</option>
                <option value="Nature">Nature</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center px-8 py-3 bg-gray-50 rounded-xl">
            {debouncedDestination !== searchQuery.destination ? (
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                Recherche...
              </div>
            ) : (
              <Search size={18} className="text-primary" />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { nb: "12+", label: "Destinations" },
            { nb: "200+", label: "Voyages organisés" },
            { nb: "98%", label: "Clients satisfaits" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black text-gold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.nb}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />
        </div>
      </div>

      <AnimatePresence>
        {showResults && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeResults}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h3
                  className="text-2xl font-black text-primary"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Résultats de recherche
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeResults}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {filteredDestinations.length > 0 ? (
                <div className="space-y-3">
                  {filteredDestinations.map((dest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-2xl hover:border-primary transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <MapPin size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary">{dest.ville}</h4>
                          <p className="text-sm text-gray-500">{dest.pays}</p>
                        </div>
                      </div>
                      <span className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full font-medium">
                        {dest.type}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">
                    Aucune destination trouvée. Essayez d'autres critères.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;