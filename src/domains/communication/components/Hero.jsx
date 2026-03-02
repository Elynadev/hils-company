import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      
      {/* Logo Home Button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all group"
      >
        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
          🏢
        </div>
        <span className="text-white font-bold text-sm">Accueil</span>
      </Link>

      {/* Background pattern FIX */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />

          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
            Hils Company · Communication
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Amplifiez Votre
          <br />
          <span className="text-gold">Message</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stratégies de communication innovantes et organisation d'événements d'exception pour marquer les esprits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {[
            { nb: "200+", label: "Projets réalisés" },
            { nb: "50+", label: "Événements organisés" },
            { nb: "100%", label: "Satisfaction client" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              
              <div
                className="text-3xl font-black text-gold"
                style={{ fontFamily: "Playfair Display, serif" }}
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

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white/60 rounded-full"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;