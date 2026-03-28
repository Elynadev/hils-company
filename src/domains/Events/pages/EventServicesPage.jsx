import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Calendar, Users, Lightbulb, Settings, BarChart, Megaphone, Camera } from "lucide-react";

const EventServicesPage = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Conception & Stratégie",
      description: "Définition des objectifs, thématique, concept créatif et plan d'action détaillé.",
      items: ["Brief client", "Concept créatif", "Budget prévisionnel", "Timeline projet"]
    },
    {
      icon: Calendar,
      title: "Planification",
      description: "Organisation minutieuse de chaque étape avec calendrier et checklist complète.",
      items: ["Choix du lieu", "Sélection des dates", "Planning détaillé", "Gestion des invitations"]
    },
    {
      icon: Users,
      title: "Coordination",
      description: "Gestion des prestataires, fournisseurs et équipes pour une exécution parfaite.",
      items: ["Traiteurs & restauration", "Décoration & scénographie", "Technique & audiovisuel", "Sécurité & logistique"]
    },
    {
      icon: Megaphone,
      title: "Communication",
      description: "Promotion de l'événement et gestion de la communication avant, pendant et après.",
      items: ["Stratégie digitale", "Relations presse", "Réseaux sociaux", "Supports print"]
    },
    {
      icon: Settings,
      title: "Exécution",
      description: "Coordination le jour J avec équipe dédiée pour un déroulement sans accroc.",
      items: ["Montage & installation", "Accueil & hôtesses", "Animation & modération", "Gestion des imprévus"]
    },
    {
      icon: BarChart,
      title: "Suivi & Reporting",
      description: "Analyse post-événement avec rapport détaillé et recommandations.",
      items: ["Débriefing", "Rapport d'activité", "Analyse ROI", "Recommandations"]
    },
  ];

  const eventTypes = [
    { icon: "🎤", title: "Conférences", desc: "Séminaires, colloques, symposiums" },
    { icon: "🎉", title: "Événements Corporate", desc: "Team building, soirées d'entreprise" },
    { icon: "🏆", title: "Cérémonies", desc: "Remises de prix, inaugurations" },
    { icon: "🎪", title: "Salons & Foires", desc: "Stands, expositions, showcases" },
    { icon: "🎭", title: "Spectacles", desc: "Concerts, galas, shows" },
    { icon: "🌍", title: "Événements Publics", desc: "Festivals, manifestations culturelles" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
        <Link 
          to="/" 
          className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
            🏢
          </div>
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
              Hils Groupe · Services Événementiels
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gestion d'Événements
            <br />
            <span className="text-gold">de A à Z</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            De la conception à la réalisation, nous prenons en charge l'intégralité de votre événement pour une expérience mémorable.
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Processus</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              6 Étapes pour un <span className="text-gold">Événement Réussi</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <div className="text-3xl font-black text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-primary mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-gold flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types d'Événements */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Nos Expertises</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Types d'<span className="text-gold">Événements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 hover:border-gold transition-all duration-300 cursor-pointer text-center"
              >
                <div className="text-6xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-black text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Prêt à organiser votre
            <br />
            <span className="text-gold">événement ?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/events"
              className="px-10 py-4 bg-white text-secondary font-black rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Demander un devis
            </Link>
            <a 
              href="tel:+22900000000"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all duration-300"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventServicesPage;
