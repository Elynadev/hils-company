// components/tourisme/Services.jsx
import { motion } from "framer-motion";
import { Plane, Hotel, Landmark, Leaf, Camera, HeartHandshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    titre: "Voyages Organisés",
    description: "Des circuits clé en main soigneusement planifiés pour une expérience sans stress. Transport, hébergement et activités inclus.",
  },
  {
    icon: Hotel,
    titre: "Hébergement Premium",
    description: "Sélection des meilleurs hôtels, lodges et écolodges pour un séjour confortable au cœur de l'authenticité africaine.",
  },
  {
    icon: Landmark,
    titre: "Tourisme Culturel",
    description: "Immersion totale dans les traditions, festivals et cérémonies locales. Vivez l'Afrique de l'intérieur.",
  },
  {
    icon: Leaf,
    titre: "Éco-tourisme",
    description: "Découvrez la faune et la flore exceptionnelles de l'Afrique de l'Ouest dans le respect de l'environnement.",
  },
  {
    icon: Camera,
    titre: "Tourisme Événementiel",
    description: "Combinez voyage et événements : festivals, conférences, mariages et cérémonies traditionnelles.",
  },
  {
    icon: HeartHandshake,
    titre: "Sur Mesure",
    description: "Des expériences personnalisées selon vos envies, votre budget et votre calendrier. Votre voyage, vos règles.",
  },
];

const Services = () => {
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
            Ce que nous offrons
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
            Nos Services <span className="text-teal-600">Tourisme</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            De la planification à l'expérience sur le terrain, nous prenons
            soin de chaque détail de votre aventure africaine.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-100 group-hover:scale-105 transition-all duration-300">
                  <Icon size={28} className="text-teal-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-teal-900 mb-3">
                  {service.titre}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <div className="flex items-center gap-2 text-teal-700 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;