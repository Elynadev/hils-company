import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Calendar } from "lucide-react";

const AfricaMap = ({ locations, type = "travel" }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const getIcon = () => {
    switch (type) {
      case "travel":
        return Plane;
      case "event":
        return Calendar;
      default:
        return MapPin;
    }
  };

  const Icon = getIcon();

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carte SVG simplifiée de l'Afrique */}
      <svg
        viewBox="0 0 800 900"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Contour de l'Afrique */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M400,50 L450,80 L480,120 L500,180 L520,240 L540,300 L550,360 L560,420 L550,480 L530,540 L500,600 L460,650 L420,680 L380,700 L340,720 L300,730 L260,720 L220,700 L180,670 L150,630 L130,580 L120,520 L110,460 L100,400 L90,340 L100,280 L120,220 L150,170 L190,130 L240,100 L290,80 L340,70 L400,50 Z"
          fill="url(#africaGradient)"
          stroke="#C9A84C"
          strokeWidth="3"
          className="drop-shadow-lg"
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="africaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1B3A2D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2D6A4F" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Points de localisation */}
        {locations.map((location, index) => (
          <g key={index}>
            {/* Point pulsant */}
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="8"
              fill="#C9A84C"
              className="cursor-pointer"
              onClick={() => setSelectedLocation(location)}
              whileHover={{ scale: 1.5 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
            
            {/* Cercle extérieur */}
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="15"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
              opacity="0.5"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Tooltip pour la localisation sélectionnée */}
      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute top-4 right-4 bg-white rounded-2xl p-6 shadow-2xl border-2 border-gold max-w-xs z-10"
        >
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Icon size={20} className="text-gold" />
            </div>
            <div>
              <h3 className="text-lg font-black text-primary">{selectedLocation.name}</h3>
              <p className="text-sm text-gray-500">{selectedLocation.country}</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">{selectedLocation.description}</p>
          
          {selectedLocation.stats && (
            <div className="grid grid-cols-2 gap-2 text-xs">
              {selectedLocation.stats.map((stat, idx) => (
                <div key={idx} className="bg-primary/5 rounded-lg p-2">
                  <div className="font-bold text-gold">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Légende */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {locations.map((location, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedLocation(location)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-primary/10 hover:border-gold transition-all shadow-sm hover:shadow-md"
          >
            <Icon size={16} className="text-gold" />
            <span className="text-sm font-semibold text-primary">{location.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AfricaMap;
