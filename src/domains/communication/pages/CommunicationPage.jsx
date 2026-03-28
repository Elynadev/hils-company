import Hero from "../components/Hero";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { Award, Users, Target, Zap, CheckCircle, TrendingUp, Briefcase, Star } from "lucide-react";
import abidjanImg from "../../../assets/img/abidjan.jpg";
import cotounouImg from "../../../assets/img/cotonou.jpg";
import accraImg from "../../../assets/img/accra.jpg";
import dakarImg from "../../../assets/img/dakar.jpg";
import lomeImg from "../../../assets/img/lome.jpg";
import heroImg from "../../../assets/img/hero-bg.jpg";

const CommunicationPage = () => {
  const achievements = [
    { icon: Award, title: "Excellence", desc: "Prix de la meilleure agence 2023" },
    { icon: Users, title: "Équipe", desc: "15+ experts passionnés" },
    { icon: Target, title: "Précision", desc: "Stratégies sur mesure" },
    { icon: Zap, title: "Innovation", desc: "Technologies de pointe" },
  ];

  const portfolio = [
    { img: abidjanImg, title: "Campagne Digitale", client: "TechStart Africa", desc: "Stratégie digitale complète avec +200% d'engagement" },
    { img: cotounouImg, title: "Identité Visuelle", client: "GreenTech", desc: "Refonte complète de l'identité de marque" },
    { img: accraImg, title: "Événement Corporate", client: "Innovation Hub", desc: "Organisation d'un sommet de 500+ participants" },
    { img: dakarImg, title: "Production Vidéo", client: "AfriBank", desc: "Série de vidéos promotionnelles primées" },
    { img: lomeImg, title: "Relations Publiques", client: "StartupWeek", desc: "Couverture médiatique dans 20+ médias" },
    { img: heroImg, title: "Marketing Digital", client: "EcoMarket", desc: "Campagne qui a généré 5M+ d'impressions" },
  ];

  const process = [
    { step: "01", title: "Écoute", desc: "Analyse approfondie de vos besoins et objectifs" },
    { step: "02", title: "Stratégie", desc: "Élaboration d'un plan d'action sur mesure" },
    { step: "03", title: "Création", desc: "Production de contenus et supports percutants" },
    { step: "04", title: "Déploiement", desc: "Mise en œuvre et gestion de campagnes" },
    { step: "05", title: "Suivi", desc: "Analyse des résultats et optimisation continue" },
  ];

  const testimonials = [
    { name: "Marie Kouassi", role: "CEO, TechStart Africa", text: "Hils Company a transformé notre image de marque. Leur créativité et professionnalisme sont exceptionnels." },
    { name: "Jean Mensah", role: "Directeur Marketing, Innovation Hub", text: "Une équipe réactive et innovante. Nos événements n'ont jamais eu autant d'impact." },
    { name: "Fatou Diop", role: "Fondatrice, GreenTech", text: "Grâce à leur stratégie digitale, nous avons triplé notre visibilité en 6 mois." },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <Services />

      {/* Notre Approche */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Méthode</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Un Processus <span className="text-gold">Éprouvé</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              De l'écoute à l'optimisation, nous vous accompagnons à chaque étape de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-primary/5 rounded-3xl p-6 border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all h-full">
                  <div className="text-5xl font-black text-gold/20 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pourquoi <span className="text-gold">Nous Choisir</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Une Expertise <span className="text-gold">Reconnue</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Depuis plus de 10 ans, Hils Company accompagne les entreprises, institutions et organisations dans leur développement et leur rayonnement.
              </p>
              <ul className="space-y-4">
                {[
                  "Équipe pluridisciplinaire de 15+ experts",
                  "200+ projets réalisés avec succès",
                  "Présence dans 5 pays africains",
                  "Partenariats avec les plus grandes marques",
                  "Approche data-driven et orientée résultats",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-primary rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
                <img src={heroImg} alt="Notre équipe" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Nos Réalisations</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Portfolio <span className="text-gold">Récent</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets qui ont marqué les esprits et généré des résultats concrets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-primary/10 hover:border-gold"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-primary mb-2">{project.title}</h3>
                  <p className="text-gold text-sm font-bold mb-3">{project.client}</p>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ils Nous Font <span className="text-gold">Confiance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Users size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }} />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Prêt à transformer votre <span className="text-gold">communication ?</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-primary font-black rounded-full hover:scale-105 transition-all shadow-xl">
              Démarrer un projet
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all">
              Voir nos tarifs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationPage;
