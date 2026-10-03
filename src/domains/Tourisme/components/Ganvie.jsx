// components/tourisme/Ganvie.jsx
import { useState } from "react";
import { MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ganvie1 from "../../../assets/img/ganvie-1.jpg";
import ganvie2 from "../../../assets/img/ganvie-2.jpg";
import ganvie3 from "../../../assets/img/ganvie-3.jpg";
import ganvie4 from "../../../assets/img/ganvie-4.jpg";
import ganvie5 from "../../../assets/img/ganvie-5.jpg";
import ganvie6 from "../../../assets/img/ganvie-6.jpg";
import PopUpModal from "./PopUpModal";

const Ganvie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants cohérents avec le reste du site
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Destination phare
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-teal-900 leading-tight">
              Ganvié <span className="text-teal-600">— La Venise</span>
              <br />
              de l'Afrique
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={16} className="text-teal-600" />
              <span className="text-sm">Lac Nokoué, Bénin</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Clock size={16} className="text-teal-600" />
              <span className="text-sm">1 à 2 jours</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-teal-600 fill-teal-600" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Gallery Grid */}
        <motion.div 
          {...fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[450px] md:min-h-[550px] lg:min-h-[650px] mb-8"
        >
          {/* Large featured image */}
          <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
            <img
              src={ganvie1}
              alt="Vue panoramique de Ganvié"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/90 backdrop-blur-sm text-teal-900 text-xs font-bold px-3 py-1.5 rounded-full">
                Vue panoramique
              </span>
            </div>
          </div>

          {/* Secondary images */}
          <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
            <img
              src={ganvie2}
              alt="Maisons sur pilotis"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-xs font-medium bg-black/20 backdrop-blur-sm px-2 py-1 rounded">Pilotis</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
            <img
              src={ganvie3}
              alt="Pirogues sur le lac"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-xs font-medium bg-black/20 backdrop-blur-sm px-2 py-1 rounded">Pirogues</span>
            </div>
          </div>
        </motion.div>

        {/* Secondary Gallery Row */}
        <motion.div 
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-48 sm:h-56 lg:h-64 mb-12"
        >
          {[
            { src: ganvie4, label: "Habitants" },
            { src: ganvie5, label: "Vie quotidienne" },
            { src: ganvie6, label: "Coucher de soleil" },
          ].map((photo) => (
            <div key={photo.label} className="rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-sm font-semibold">{photo.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content & Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl lg:text-3xl font-black text-teal-900 mb-4">
              Une cité lacustre unique au monde
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ganvié est un village lacustre situé sur le lac Nokoué, à environ
              12 km de Cotonou. Surnommée la "Venise de l'Afrique", cette cité
              de plus de 20 000 habitants vit entièrement sur l'eau depuis le
              XVIIe siècle.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Une visite en pirogue vous plonge dans un mode de vie fascinant :
              marchés flottants, écoles sur pilotis, temples et maisons
              construits sur des roseaux — une expérience inoubliable.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-teal-900 hover:bg-teal-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Réserver cette visite
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-teal-200 shadow-sm"
          >
            <h4 className="font-black text-teal-900 text-lg mb-6">
              Infos pratiques
            </h4>
            <div className="space-y-4">
              {[
                { icon: <MapPin size={18} className="text-teal-600" />, label: "Localisation", value: "Lac Nokoué, 12km de Cotonou" },
                { icon: <Clock size={18} className="text-teal-600" />, label: "Durée recommandée", value: "Demi-journée à 2 jours" },
                { icon: <Users size={18} className="text-teal-600" />, label: "Type de groupe", value: "Solo, couple, famille, groupe" },
                { icon: <Star size={18} className="text-teal-600" />, label: "Meilleure période", value: "Novembre à Février" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-teal-100">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{info.label}</p>
                    <p className="text-sm text-teal-900 font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <PopUpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        destination="Ganvié"
      />
    </section>
  );
};

export default Ganvie;