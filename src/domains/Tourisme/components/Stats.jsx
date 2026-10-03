// components/tourisme/Stats.jsx
import { motion } from "framer-motion";
import { Award, Users, MapPin, Star, CheckCircle, Globe, Heart, Shield } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Globe, number: "10+", label: "Destinations", description: "À travers l'Afrique de l'Ouest" },
    { icon: Users, number: "150+", label: "Voyageurs", description: "Nous font confiance" },
    { icon: Award, number: "5+", label: "Années", description: "D'expertise terrain" },
    { icon: Star, number: "4.5/5", label: "Satisfaction", description: "Note moyenne clients" },
  ];

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
    <section className="py-20 bg-teal-900 relative overflow-hidden px-4 sm:px-6">
      
      {/* Elegant pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      
      {/* Decorative blur orbs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Optional header for context */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4">
            Nos Chiffres Clés
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            L'Excellence en Chiffres
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                {/* Icon container with hover effect */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-xl lg:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                  <Icon size={24} className="text-teal-300 lg:size-28" />
                </div>
                
                {/* Number */}
                <div className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-1 lg:mb-2">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-white/90 text-sm lg:text-base font-semibold mb-1">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-white/60 text-xs lg:text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Optional trust badges */}
        <motion.div 
          {...fadeInUp}
          className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 lg:gap-8"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <CheckCircle size={16} className="text-teal-400" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Shield size={16} className="text-teal-400" />
            <span>Assurance voyage incluse</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Heart size={16} className="text-teal-400" />
            <span>Tourisme responsable</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;