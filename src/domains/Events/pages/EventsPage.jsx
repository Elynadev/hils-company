import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Handshake, Trophy, Briefcase, Sparkles, Home, Zap, Star, Calendar, MapPin, ArrowRight } from "lucide-react";

const EventsPage = () => {
  const services = [
    { icon: Users, titre: "Networking Events", description: "Événements de réseautage qui créent des connexions authentiques." },
    { icon: Lightbulb, titre: "Conférences & Talks", description: "Conférences inspirantes avec des leaders d'opinion." },
    { icon: Handshake, titre: "Matchmaking B2B", description: "Mise en relation stratégique entre entreprises." },
    { icon: Trophy, titre: "Compétitions Startup", description: "Concours et pitch sessions pour talents entrepreneuriaux." },
    { icon: Briefcase, titre: "Ateliers & Formations", description: "Sessions pratiques pour développer les compétences." },
    { icon: Sparkles, titre: "Événements Thématiques", description: "Soirées autour de thématiques spécifiques." },
  ];

  const pastEvents = [
    { year: "2023", theme: "Innovation & Tech", participants: "500+", location: "Cotonou" },
    { year: "2022", theme: "Entrepreneuriat Social", participants: "350+", location: "Abidjan" },
    { year: "2021", theme: "Leadership Africain", participants: "200+", location: "Dakar" },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Dynamique */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-event-primary/20 to-slate-900">
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 hover:bg-white/20 transition-all group border border-white/20">
          <Home size={20} className="text-white group-hover:scale-110 transition-transform" />
          <span className="text-white font-bold text-sm">Accueil</span>
        </Link>

        {/* Particules animées */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-2 h-2 bg-event-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-event-primary/20 backdrop-blur-sm border border-event-accent/30 rounded-full px-5 py-2 mb-8">
              <Zap size={16} className="text-event-accent" />
              <span className="text-white font-semibold text-sm">Événementiel & Networking</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Connectez.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-accent to-orange-400">Inspirez.</span>
              <br />
              Entreprenez.
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Des événements qui transforment les rencontres en opportunités et les idées en succès entrepreneurial.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link to="/events/african-conscience-chill" className="px-8 py-4 bg-event-primary text-white rounded-2xl font-bold hover:bg-event-secondary transition-all hover:scale-105 shadow-lg hover:shadow-event-accent/50">
                African Conscience Chill
              </Link>
              <Link to="/events/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20">
                Nos Services
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
              {[
                { nb: "50+", label: "Événements" },
                { nb: "1000+", label: "Entrepreneurs" },
                { nb: "20+", label: "Partenaires" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-black text-event-accent mb-2">{stat.nb}</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-event-accent font-bold text-sm uppercase tracking-widest">Nos Services</span>
            <h2 className="text-5xl font-black text-white mt-3 mb-5">
              Événements <span className="text-event-accent">Sur Mesure</span>
            </h2>
          </motion.div>

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
                  className="group bg-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-event-accent transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-event-primary to-event-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{service.titre}</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-event-accent font-semibold group-hover:gap-3 transition-all">
                    <span>Découvrir</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Éditions Passées */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-event-accent font-bold text-sm uppercase tracking-widest">Nos Réalisations</span>
            <h2 className="text-5xl font-black text-white mt-3 mb-5">
              Éditions <span className="text-event-accent">Précédentes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-event-accent transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-event-primary to-event-accent flex items-center justify-center">
                  <Star size={64} className="text-white/20" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-event-accent" />
                    <span className="text-event-accent font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-4">{event.theme}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-400">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-event-primary to-event-secondary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute w-32 h-32 bg-white/5 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Prêt à créer l'événement de l'année ?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Rejoignez l'écosystème entrepreneurial africain et faites partie de l'histoire.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-event-primary rounded-2xl font-black hover:scale-105 transition-all shadow-xl">
                  Participer
                </button>
                <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20">
                  Devenir partenaire
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
