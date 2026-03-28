import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Handshake, Trophy, Briefcase, Sparkles, Home, Zap, Star, Calendar, MapPin, ArrowRight, CheckCircle, Award, Target } from "lucide-react";
import abidjanImg from "../../../assets/img/abidjan.jpg";
import cotounouImg from "../../../assets/img/cotonou.jpg";
import accraImg from "../../../assets/img/accra.jpg";
import dakarImg from "../../../assets/img/dakar.jpg";
import lomeImg from "../../../assets/img/lome.jpg";
import heroImg from "../../../assets/img/hero-bg.jpg";

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
    { year: "2023", theme: "Innovation & Tech", participants: "500+", location: "Cotonou", img: cotounouImg },
    { year: "2022", theme: "Entrepreneuriat Social", participants: "350+", location: "Abidjan", img: abidjanImg },
    { year: "2021", theme: "Leadership Africain", participants: "200+", location: "Dakar", img: dakarImg },
  ];

  const advantages = [
    { icon: Award, title: "Expertise", desc: "10+ ans d'expérience en événementiel" },
    { icon: Users, title: "Équipe", desc: "20+ professionnels dédiés" },
    { icon: Target, title: "Résultats", desc: "98% de satisfaction client" },
    { icon: Zap, title: "Innovation", desc: "Technologies événementielles de pointe" },
  ];

  const hostessServices = [
    "Hôtesses d'accueil professionnelles",
    "Animateurs et modérateurs d'événements",
    "Personnel bilingue et multilingue",
    "Formation et briefing personnalisés",
    "Tenues et présentation soignées",
    "Disponibilité 24/7 pour vos événements",
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Dynamique */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary">
        <Link to="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 hover:bg-white/20 transition-all group border border-white/20">
          <Home size={20} className="text-white group-hover:scale-110 transition-transform" />
          <span className="text-white font-bold text-sm">Accueil</span>
        </Link>

        {/* Pattern de fond */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <Zap size={16} className="text-gold" />
              <span className="text-white font-semibold text-sm">Événementiel & Networking</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Connectez.
              <br />
              <span className="text-gold">Inspirez.</span>
              <br />
              Entreprenez.
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Des événements qui transforment les rencontres en opportunités et les idées en succès entrepreneurial.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link to="/events/african-conscience-chill" className="px-8 py-4 bg-gold text-primary rounded-2xl font-bold hover:bg-gold/90 transition-all hover:scale-105 shadow-lg">
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
                  <div className="text-4xl font-black text-gold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.nb}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Nos Services</span>
            <h2 className="text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Événements <span className="text-gold">Sur Mesure</span>
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
                  className="group bg-white rounded-3xl p-8 border-2 border-primary/10 hover:border-gold transition-all shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3">{service.titre}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                    <span>Découvrir</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Pourquoi Nous Choisir</span>
            <h2 className="text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notre <span className="text-gold">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary/5 rounded-3xl p-8 text-center border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Éditions Passées */}
      <section className="py-24 px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Nos Réalisations</span>
            <h2 className="text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Éditions <span className="text-gold">Précédentes</span>
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
                className="bg-white rounded-3xl overflow-hidden border-2 border-primary/10 hover:border-gold transition-all shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img src={event.img} alt={event.theme} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-gold" />
                    <span className="text-gold font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-primary mb-4">{event.theme}</h3>
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
        </div>
      </section>

      {/* Services Hôtesses */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-bold text-sm uppercase tracking-widest">Services Premium</span>
              <h2 className="text-4xl font-black text-primary mt-3 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hôtesses & <span className="text-gold">Animation</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Notre équipe d'hôtesses et animateurs professionnels apporte une touche d'élégance et de dynamisme à vos événements.
              </p>
              <ul className="space-y-3">
                {hostessServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[lomeImg, accraImg, dakarImg, heroImg].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={img} alt={`Service ${index + 1}`} className="w-full h-48 object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Prêt à créer l'événement de l'année ?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez l'écosystème entrepreneurial africain et faites partie de l'histoire.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-10 py-4 bg-white text-primary rounded-2xl font-black hover:scale-105 transition-all shadow-xl">
                Participer
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20">
                Devenir partenaire
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
