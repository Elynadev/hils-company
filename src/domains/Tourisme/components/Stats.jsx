import { motion } from "framer-motion";
import { Award, Users, MapPin, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: MapPin, number: "20+", label: "Destinations", color: "text-primary" },
    { icon: Users, number: "500+", label: "Voyageurs satisfaits", color: "text-secondary" },
    { icon: Award, number: "3+", label: "Années d'expérience", color: "text-gold" },
    { icon: Star, number: "4.9/5", label: "Note moyenne", color: "text-accent" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
        backgroundSize: "30px 30px",
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
