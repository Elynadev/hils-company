import { motion } from "framer-motion";
import { Megaphone, Palette, Video, Users, TrendingUp, Calendar, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    titre: "Stratégie de Communication",
    description: "Élaboration de stratégies sur mesure pour renforcer votre image de marque et atteindre vos objectifs.",
  },
  {
    icon: Palette,
    titre: "Identité Visuelle",
    description: "Création de logos, chartes graphiques et supports visuels qui reflètent l'essence de votre marque.",
  },
  {
    icon: Video,
    titre: "Production Audiovisuelle",
    description: "Réalisation de vidéos promotionnelles, documentaires et contenus multimédias percutants.",
  },
  {
    icon: Users,
    titre: "Relations Publiques",
    description: "Gestion de votre réputation et développement de relations stratégiques avec les médias.",
  },
  {
    icon: TrendingUp,
    titre: "Marketing Digital",
    description: "Campagnes digitales innovantes sur les réseaux sociaux et plateformes en ligne.",
  },
  {
    icon: Calendar,
    titre: "Événementiel",
    description: "Organisation d'événements corporate, lancements de produits et conférences mémorables.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Services = () => {
  return (
    <section className="py-24 bg-teal-900 relative overflow-hidden px-4 sm:px-6">
      {/* Pattern de fond subtil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 40px,
            rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 40px,
            rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px
          )`,
        }}
      />

      {/* Décorations floues */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-full mb-4 backdrop-blur-sm">
            Ce que nous offrons
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-3 mb-6">
            Nos Services <span className="text-teal-200">Communication</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            De la stratégie à l'exécution, nous créons des expériences de communication qui captivent et convertissent.
          </p>
        </motion.div>

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
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 rounded-xl p-8 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-800/50 flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors duration-300">
                  <Icon size={28} className="text-teal-300 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-white text-xl font-bold mb-3">
                  {service.titre}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
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