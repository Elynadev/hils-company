import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Handshake, Trophy, Briefcase, Sparkles, ArrowRight, Calendar, MapPin, Star, Home } from "lucide-react";

const EventsPage = () => {
  const services = [
    {
      icon: Users,
      titre: "Networking Events",
      description: "Événements de réseautage qui créent des connexions authentiques entre entrepreneurs et investisseurs.",
    },
    {
      icon: Lightbulb,
      titre: "Conférences & Talks",
      description: "Conférences inspirantes avec des leaders d'opinion et entrepreneurs à succès.",
    },
    {
      icon: Handshake,
      titre: "Matchmaking B2B",
      description: "Mise en relation stratégique entre entreprises pour des partenariats gagnants.",
    },
    {
      icon: Trophy,
      titre: "Compétitions Startup",
      description: "Concours et pitch sessions pour identifier et soutenir les talents entrepreneuriaux.",
    },
    {
      icon: Briefcase,
      titre: "Ateliers & Formations",
      description: "Sessions pratiques pour développer les compétences entrepreneuriales essentielles.",
    },
    {
      icon: Sparkles,
      titre: "Événements Thématiques",
      description: "Soirées et rencontres autour de thématiques spécifiques de l'écosystème africain.",
    },
  ];

  const pastEvents = [
    { year: "2023", theme: "Innovation & Tech", participants: "500+", location: "Cotonou" },
    { year: "2022", theme: "Entrepreneuriat Social", participants: "350+", location: "Abidjan" },
    { year: "2021", theme: "Leadership Africain", participants: "200+", location: "Dakar" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-event-primary via-event-accent to-event-secondary">
        {/* Logo Home Button */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all group"
        >
          <Home size={20} className="text-white group-hover:scale-110 transition-transform" />
          <span className="text-white font-bold text-sm">Accueil</span>
        </Link>

        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Hils Groupe · Événementiel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Connectez, Inspirez
            <br />
            <span className="text-gold">Entreprenez</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Organisation d'événements professionnels, networking entrepreneurial et services d'hôtesses pour des expériences mémorables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { nb: "50+", label: "Événements organisés" },
              { nb: "1000+", label: "Entrepreneurs connectés" },
              { nb: "20+", label: "Partenaires" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.nb}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* African Conscience Chill Highlight */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
              backgroundSize: "30px 30px",
            }} />
            <div className="relative z-10">
              <span className="text-gold font-bold text-sm uppercase tracking-widest">Événement Phare</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                African Conscience <span className="text-gold">Chill</span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Découvrez notre événement de networking entrepreneurial qui connecte et inspire l'écosystème africain.
              </p>
              <Link 
                to="/events/african-conscience-chill"
                className="inline-block px-10 py-4 bg-white text-primary font-black rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Découvrir l'événement
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-event-primary relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Ce que nous offrons</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nos Services <span className="text-gold">Événementiels</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Des expériences qui transforment les rencontres en opportunités et les idées en succès.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-3xl p-8 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300">
                    <Icon size={28} className="text-gold group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-white text-xl font-black mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.titre}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>En savoir plus</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galerie Éditions Passées */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Nos Réalisations</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Éditions <span className="text-gold">Précédentes</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Revivez les moments forts de nos événements African Conscience Chill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-primary/10 hover:border-gold hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl">
                  📸
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-gold" />
                    <span className="text-gold font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {event.theme}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-4xl cursor-pointer border-2 border-primary/10 hover:border-gold transition-all"
              >
                🎉
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Hôtesses */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold text-sm uppercase tracking-widest">Service Premium</span>
              <h2 className="text-4xl font-black text-primary mt-3 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Déploiement <span className="text-gold">d'Hôtesses</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre équipe d'hôtesses professionnelles assure l'accueil et l'accompagnement de vos invités lors de vos événements corporate, salons et conférences.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hôtesses d'accueil professionnelles",
                  "Service multilingue (Français, Anglais)",
                  "Formation et briefing personnalisé",
                  "Tenue élégante et professionnelle",
                  "Disponibilité 7j/7",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star size={20} className="text-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="aspect-square bg-gradient-to-br from-gold/20 to-primary/20 rounded-3xl flex items-center justify-center text-6xl border-2 border-primary/10 hover:border-gold transition-all cursor-pointer"
                >
                  👔
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
                Rejoignez-nous
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Prêt à connecter avec
              <br />
              <span className="text-gold">l'écosystème entrepreneurial ?</span>
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Participez à nos prochains événements ou organisez le vôtre avec notre équipe. Ensemble, construisons l'avenir de l'entrepreneuriat africain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-secondary font-black rounded-full hover:shadow-xl transition-all duration-300"
              >
                Participer aux événements
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+22900000000"
                className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all duration-300"
              >
                Nous appeler
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
