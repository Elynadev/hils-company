import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactCTA from "../components/ContactCTA";
import { motion } from "framer-motion";
import { Award, Users, Target, Zap, CheckCircle, TrendingUp, Briefcase, Star, ArrowRight } from "lucide-react";
import abidjanImg from "../../../assets/img/abidjan.jpg";
import cotounouImg from "../../../assets/img/cotonou.jpg";
import accraImg from "../../../assets/img/accra.jpg";
import dakarImg from "../../../assets/img/dakar.jpg";
import lomeImg from "../../../assets/img/lome.jpg";
import heroImg from "../../../assets/img/equipe.jpg";

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

  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <Services />

      {/* Notre Approche */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Notre Méthode
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Un Processus Éprouvé
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              De l'écoute à l'optimisation, nous vous accompagnons à chaque étape de votre projet.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all h-full">
                  <div className="text-4xl lg:text-5xl font-black text-teal-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-teal-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 lg:-right-3 w-4 lg:w-6 h-0.5 bg-teal-200" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Notre Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Pourquoi Nous Choisir
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-8 text-center border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="text-3xl font-black text-teal-900 mb-6">
                Une Expertise Reconnue
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Depuis plus de 2 ans, Hils Company accompagne les entreprises, institutions et organisations dans leur développement et leur rayonnement.
              </p>
              <ul className="space-y-4">
                {[
                  "Équipe pluridisciplinaire de 15+ experts",
                  "30+ projets réalisés avec succès",
                  "Présence dans 5 pays africains",
                  "Partenariats avec les plus grandes marques",
                  "Approche data-driven et orientée résultats",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-teal-200 rounded-2xl transform rotate-3" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-xl">
                <img src={heroImg} alt="Notre équipe" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent flex items-end p-6">
                  <p className="text-white font-bold">Notre équipe en action</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {/* <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Réalisations
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Portfolio Récent
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets qui ont marqué les esprits et généré des résultats concrets.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-900 mb-2">{project.title}</h3>
                  <p className="text-teal-600 text-sm font-semibold mb-3">{project.client}</p>
                  <p className="text-slate-600 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Témoignages */}
      {/* <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Témoignages
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Ils Nous Font Confiance
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-teal-600 fill-teal-600" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-teal-200">
                    <img src={abidjanImg} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <ContactCTA />
    </div>
  );
};

export default CommunicationPage;