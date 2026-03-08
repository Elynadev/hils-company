import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/img/hero-bg.jpg';
import abidjanImg from '../assets/img/abidjan.jpg';
import cotounouImg from '../assets/img/cotonou.jpg';
import accraImg from '../assets/img/accra.jpg';
import dakarImg from '../assets/img/dakar.jpg';
import lomeImg from '../assets/img/lome.jpg';
import FlipCard from '../Partagé/Components/FlipCard';
import PartnershipForm from '../Partagé/Components/PartnershipForm';
import AppointmentForm from '../Partagé/Components/AppointmentForm';
import Roadmap from '../Partagé/Components/Roadmap';
import { Award, Users, Globe, Zap, Target, TrendingUp } from 'lucide-react';

// Import des logos partenaires
import logo1 from '../assets/logo partenaire/1767612442785.jpg';
import logo2 from '../assets/logo partenaire/531408246_2118735935289726_527838604249789845_n.jpg';
import logo3 from '../assets/logo partenaire/612429114_122164791500771014_4033363766878438935_n.jpg';
import logo4 from '../assets/logo partenaire/avi,,_031932.jpg';
import logo5 from '../assets/logo partenaire/brancom-Horizontal - White.png';
import logo6 from '../assets/logo partenaire/BYB_20250811_100749_0000.png';
import logo7 from '../assets/logo partenaire/FB_IMG_1739353056571.jpg';
import logo8 from '../assets/logo partenaire/IMG-20250201-WA0084.jpg';
import logo9 from '../assets/logo partenaire/IMG-20250206-WA0031.jpg';
import logo10 from '../assets/logo partenaire/Logo A-03.png';
import logo11 from '../assets/logo partenaire/LOGO PRINCIPAL DE LA MAIRIE DES JEUNES Abomey-Calavi.png';
import logo12 from '../assets/logo partenaire/PPP (1).jpg';
import logo13 from '../assets/logo partenaire/RESEAUPUB LOGO REDESIGNBY @300x.png';

export default function Landing() {
  const partnerLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, 
    logo7, logo8, logo9, logo10, logo11, logo12, logo13
  ];

  const sectors = [
    {
      title: "Hils Company",
      subtitle: "Communication",
      description: "Stratégies de communication innovantes, identité visuelle, production audiovisuelle et marketing digital pour amplifier votre message.",
      image: abidjanImg,
      link: "/communication",
    },
    {
      title: "Hils Travel & Explore",
      subtitle: "Tourisme",
      description: "Des expériences de voyage uniques, authentiques et responsables à travers l'Afrique et le monde entier.",
      image: cotounouImg,
      link: "/tourisme",
    },
    {
      title: "Hils Company",
      subtitle: "Événementiel",
      description: "Organisation complète d'événements professionnels, networking entrepreneurial et services d'hôtesses d'exception.",
      image: accraImg,
      link: "/events",
    }
  ];

  const roadmapSteps = [
    { title: "Écoute & Analyse", description: "Compréhension approfondie de vos besoins et objectifs", duration: "1-2 jours" },
    { title: "Stratégie", description: "Élaboration d'un plan d'action personnalisé et innovant", duration: "3-5 jours" },
    { title: "Création", description: "Production de contenus et supports de haute qualité", duration: "1-2 semaines" },
    { title: "Déploiement", description: "Mise en œuvre et lancement de votre projet", duration: "Variable" },
    { title: "Suivi & Optimisation", description: "Analyse des résultats et amélioration continue", duration: "Continu" },
  ];

  const flipCards = [
    {
      front: (
        <>
          <Award size={40} className="text-gold mb-4" />
          <h3 className="text-xl font-black text-primary mb-2">Excellence</h3>
          <p className="text-gray-600 text-sm">10+ ans d'expérience</p>
        </>
      ),
      back: (
        <>
          <h3 className="text-xl font-black mb-4">Notre Expertise</h3>
          <p className="text-sm leading-relaxed">
            Plus de 200 projets réalisés avec succès pour des clients prestigieux à travers l'Afrique.
          </p>
        </>
      ),
    },
    {
      front: (
        <>
          <Users size={40} className="text-gold mb-4" />
          <h3 className="text-xl font-black text-primary mb-2">Équipe</h3>
          <p className="text-gray-600 text-sm">20+ professionnels</p>
        </>
      ),
      back: (
        <>
          <h3 className="text-xl font-black mb-4">Talents Passionnés</h3>
          <p className="text-sm leading-relaxed">
            Une équipe pluridisciplinaire d'experts en communication, événementiel et tourisme.
          </p>
        </>
      ),
    },
    {
      front: (
        <>
          <Globe size={40} className="text-gold mb-4" />
          <h3 className="text-xl font-black text-primary mb-2">Présence</h3>
          <p className="text-gray-600 text-sm">5 pays africains</p>
        </>
      ),
      back: (
        <>
          <h3 className="text-xl font-black mb-4">Rayonnement</h3>
          <p className="text-sm leading-relaxed">
            Présents au Bénin, Côte d'Ivoire, Ghana, Sénégal et Togo pour vous servir.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
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
            <Zap size={16} className="text-white/90" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Écosystème d'excellence africaine
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Groupe Hils
            <br />
            <span className="text-gold">Créer l'Extraordinaire</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Trois univers, une vision : connecter, communiquer et explorer 
            pour façonner l'avenir de l'entrepreneuriat africain.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#secteurs" 
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-black rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </div>

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

      {/* Secteurs Section */}
      <section id="secteurs" className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              Nos univers
            </span>
            <h2 
              className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Trois Piliers <span className="text-gold">Complémentaires</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un impact maximal sur le continent africain et au-delà.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sectors.map((sector, index) => (
              <Link 
                key={index} 
                to={sector.link} 
                className="group block"
              >
                <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-primary/10 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
                  
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300">
                    <img src={sector.image} alt={sector.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <h3 
                    className="text-xl md:text-2xl font-black text-primary mb-2 group-hover:text-gold transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {sector.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm font-bold text-gold mb-3 md:mb-4 uppercase tracking-wide">
                    {sector.subtitle}
                  </p>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                    {sector.description}
                  </p>
                  
                  <span className="inline-flex items-center text-sm md:text-base text-primary font-semibold group-hover:text-gold transition-colors">
                    En savoir plus 
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { nb: "10+", label: "Années d'expérience" },
              { nb: "500+", label: "Événements organisés" },
              { nb: "50+", label: "Destinations" },
              { nb: "1000+", label: "Entrepreneurs connectés" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="text-4xl md:text-5xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.nb}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires Section - Bande défilante */}
      <section className="py-8 bg-secondary overflow-hidden">
        {/* Bande défilante */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* Premier set de logos */}
            {partnerLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-20 mx-3 flex items-center justify-center partner-logo-container"
              >
                <img
                  src={logo}
                  alt={`Partenaire ${index + 1}`}
                  className="partner-logo w-full h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplication pour effet infini */}
            {partnerLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-20 mx-3 flex items-center justify-center partner-logo-container"
              >
                <img
                  src={logo}
                  alt={`Partenaire ${index + 1}`}
                  className="partner-logo w-full h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              Témoignages
            </span>
            <h2 
              className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ce qu'ils disent <span className="text-gold">de nous</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Hils Company a transformé notre stratégie de communication. Leur expertise et leur créativité sont exceptionnelles.",
                author: "Marie Kouassi",
                role: "CEO, TechStart Africa",
              },
              {
                text: "Un voyage inoubliable organisé par Hils Travel. Chaque détail était parfait, une expérience authentique de l'Afrique.",
                author: "Jean Dupont",
                role: "Entrepreneur",
              },
              {
                text: "African Conscience Chill m'a permis de rencontrer des investisseurs clés. Un événement incontournable pour tout entrepreneur.",
                author: "Amina Diallo",
                role: "Fondatrice, GreenTech",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="text-gold text-4xl mb-4">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={abidjanImg} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte Événements Section */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              Nos Services Événementiels
            </span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Organisation <span className="text-gold">Clé en Main</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Découvrez notre événement phare et nos services événementiels complets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card African Conscience Chill */}
            <Link to="/events/african-conscience-chill" className="block group">
              <div className="bg-gradient-to-br from-secondary via-accent to-primary rounded-3xl p-8 md:p-12 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                  backgroundSize: "30px 30px",
                }} />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-white font-bold text-xs md:text-sm">Événement Phare</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    African Conscience Chill
                  </h3>
                  
                  <p className="text-white/90 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                    Le plus grand événement de networking entrepreneurial en Afrique. Connectez, inspirez, entreprenez.
                  </p>
                  
                  <div className="space-y-3 mb-6 md:mb-8">
                    {[
                      "1000+ Entrepreneurs connectés",
                      "50+ Speakers inspirants",
                      "Opportunités de financement",
                      "Networking premium",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-white/90 text-xs md:text-sm">
                        <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all text-sm md:text-base">
                    <span>Découvrir l'événement</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Card Services Événementiels */}
            <Link to="/events/services" className="block group">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                  backgroundSize: "30px 30px",
                }} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Gestion Complète d'Événements
                  </h3>
                  <ul className="space-y-3 mb-6 md:mb-8">
                    {[
                      "Conception & planification stratégique",
                      "Gestion logistique complète",
                      "Coordination des prestataires",
                      "Animation & déploiement d'hôtesses",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/90 text-xs md:text-sm">
                        <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all text-sm md:text-base">
                    <span>Découvrir</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section avec Roadmap */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Méthode</span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Comment Nous <span className="text-gold">Travaillons</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Un processus éprouvé pour garantir le succès de votre projet.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Roadmap steps={roadmapSteps} />
          </div>
        </div>
      </section>

      {/* Flip Cards Section */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Pourquoi Nous</span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Notre <span className="text-gold">Différence</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-4">
              Survolez les cartes pour découvrir plus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flipCards.map((card, index) => (
              <FlipCard key={index} front={card.front} back={card.back} />
            ))}
          </div>
        </div>
      </section>

      {/* Formulaires Section */}
      <section id="formulaires" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Contactez-nous</span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Passons à <span className="text-gold">l'Action</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PartnershipForm />
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Vision</span>
              <h2 
                className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Une vision commune,
                <br />
                <span className="text-gold">trois expertises</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                Le Groupe Hils rassemble des talents passionnés autour d'une mission commune : 
                valoriser l'excellence africaine à travers la communication, l'exploration 
                du monde et la connexion des entrepreneurs.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Chaque entité conserve son identité propre tout en bénéficiant de la synergie 
                du groupe pour offrir des services d'excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/communication" 
                  className="px-6 md:px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-accent transition-colors"
                >
                  Démarrer un projet
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-primary rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden h-80 md:h-96 flex items-center justify-center border-2 border-primary/10">
                <img src={heroImg} alt="Notre écosystème" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">Notre écosystème</p>
                    <p className="text-white/80">en action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Rejoignez-nous
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prêt à <span className="text-gold">collaborer ?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Que vous cherchiez à communiquer, voyager ou connecter, 
            nous avons la solution adaptée à vos besoins.
          </p>
          <Link 
            to="/communication" 
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-secondary font-black rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Contactez-nous maintenant
          </Link>
        </div>
      </section>
    </div>
  );
}
