import { useState } from "react";
import { MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";
import ganvie1 from "../../../assets/img/ganvie-1.jpg";
import ganvie2 from "../../../assets/img/ganvie-2.jpg";
import ganvie3 from "../../../assets/img/ganvie-3.jpg";
import ganvie4 from "../../../assets/img/ganvie-4.jpg";
import ganvie5 from "../../../assets/img/ganvie-5.jpg";
import ganvie6 from "../../../assets/img/ganvie-6.jpg";
import PopUpModal from "./PopUpModal";

const Ganvie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              Destination phare
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-primary mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ganvié
              <span className="text-gold"> — La Venise</span>
              <br />
              de l'Afrique
            </h2>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} className="text-gold" />
              <span className="text-sm">Lac Nokoué, Bénin</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={16} className="text-gold" />
              <span className="text-sm">1 à 2 jours</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[600px] mb-12">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
            <img
              src={ganvie1}
              alt="Vue panoramique de Ganvié"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                Vue panoramique
              </span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden relative group">
            <img
              src={ganvie2}
              alt="Maisons sur pilotis" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-xs font-medium">Pilotis </span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden relative group">
            <img
              src={ganvie3}
              alt="Pirogues sur le lac"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <span className="text-white text-xs font-medium">Pirogues</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 h-64 mb-12">
          {[
            { src: ganvie4, label: "Habitants" },
            { src: ganvie5, label: "Vie quotidienne" },
            { src: ganvie6, label: "Coucher de soleil" },
          ].map((photo) => (
            <div key={photo.label} className="rounded-3xl overflow-hidden relative group cursor-pointer">
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-sm font-semibold">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="text-3xl font-black text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Une cité lacustre unique au monde
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              Ganvié est un village lacustre situé sur le lac Nokoué, à environ
              12 km de Cotonou. Surnommée la "Venise de l'Afrique", cette cité
              de plus de 20 000 habitants vit entièrement sur l'eau depuis le
              XVIIe siècle.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Une visite en pirogue vous plonge dans un mode de vie fascinant :
              marchés flottants, écoles sur pilotis, temples et maisons
              construits sur des roseaux — une expérience inoubliable.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Réserver cette visite
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="bg-gradient-to-br from-bg to-white rounded-3xl p-8 border-2 border-gold/20 shadow-lg">
            <h4 className="font-black text-primary text-lg mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Infos pratiques
            </h4>
            <div className="space-y-4">
              {[
                { icon: <MapPin size={18} className="text-gold" />, label: "Localisation", value: "Lac Nokoué, 12km de Cotonou" },
                { icon: <Clock size={18} className="text-gold" />, label: "Durée recommandée", value: "Demi-journée à 2 jours" },
                { icon: <Users size={18} className="text-gold" />, label: "Type de groupe", value: "Solo, couple, famille, groupe" },
                { icon: <Star size={18} className="text-gold" />, label: "Meilleure période", value: "Novembre à Février" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-gold/20">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{info.label}</p>
                    <p className="text-sm text-primary font-semibold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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