import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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
import { 
  Award, Users, Globe, Zap, Target, TrendingUp, 
  Menu, X, ChevronDown, ArrowRight, CheckCircle, 
  Sparkles, Compass, Megaphone, Calendar, Handshake, Star,
  MapPin, Phone, Mail, Linkedin, Facebook, Instagram
} from 'lucide-react';

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

// Logo HILS Company
import hilsLogo from '../assets/img/hils-logo.png';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

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
      icon: Megaphone,
      features: ["Branding", "Digital Marketing", "Production Vidéo", "Stratégie Contenu"]
    },
    {
      title: "Hils Travel & Explore",
      subtitle: "Tourisme",
      description: "Des expériences de voyage uniques, authentiques et responsables à travers l'Afrique et le monde entier.",
      image: cotounouImg,
      link: "/tourisme",
      icon: Compass,
      features: ["Séjours Sur-Mesure", "Écotourisme", "Voyages d'Affaires", "Immersion Culturelle"]
    },
    {
      title: "Hils Company",
      subtitle: "Événementiel",
      description: "Organisation complète d'événements professionnels, networking entrepreneurial et services d'hôtesses d'exception.",
      image: accraImg,
      link: "/events",
      icon: Calendar,
      features: ["Conférences", "Team Building", "Lancements Produit", "Gestion Logistique"]
    }
  ];

  const roadmapSteps = [
    { title: "Écoute & Analyse", description: "Compréhension approfondie de vos besoins et objectifs", duration: "1-2 jours", icon: Target },
    { title: "Stratégie", description: "Élaboration d'un plan d'action personnalisé et innovant", duration: "3-5 jours", icon: TrendingUp },
    { title: "Création", description: "Production de contenus et supports de haute qualité", duration: "1-2 semaines", icon: Sparkles },
    { title: "Déploiement", description: "Mise en œuvre et lancement de votre projet", duration: "Variable", icon: Zap },
    { title: "Suivi & Optimisation", description: "Analyse des résultats et amélioration continue", duration: "Continu", icon: Award },
  ];

  const flipCards = [
    {
      front: (
        <>
          <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-4">
            <Award size={32} className="text-teal-700" />
          </div>
          <h3 className="text-2xl font-bold text-teal-900 mb-2">Excellence</h3>
          <p className="text-slate-500 text-sm">3 ans d'expérience</p>
        </>
      ),
      back: (
        <>
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <Award size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Notre Expertise</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Plus de 50 projets réalisés avec succès pour des clients ambitieux à travers l'Afrique.
          </p>
          <ul className="text-left space-y-2">
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Stratégies sur mesure adaptées à votre marché</span>
            </li>
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Équipe pluridisciplinaire d'experts</span>
            </li>
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Méthodologie éprouvée et résultats garantis</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      front: (
        <>
          <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-4">
            <Users size={32} className="text-teal-700" />
          </div>
          <h3 className="text-2xl font-bold text-teal-900 mb-2">Équipe</h3>
          <p className="text-slate-500 text-sm">10+ professionnels</p>
        </>
      ),
      back: (
        <>
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <Users size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Talents Passionnés</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Une équipe pluridisciplinaire d'experts en communication, événementiel et tourisme.
          </p>
          <ul className="text-left space-y-2">
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Experts certifiés dans chaque domaine</span>
            </li>
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Formation continue et veille sectorielle</span>
            </li>
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Engagement et disponibilité totale</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      front: (
        <>
          <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-4">
            <Globe size={32} className="text-teal-700" />
          </div>
          <h3 className="text-2xl font-bold text-teal-900 mb-2">Présence</h3>
          <p className="text-slate-500 text-sm">5 pays africains</p>
        </>
      ),
      back: (
        <>
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
            <Globe size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Rayonnement</h3>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Présents au Bénin, Côte d'Ivoire, Ghana, Sénégal et Togo pour vous servir.
          </p>
          <ul className="text-left space-y-2">
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Réseau de partenaires locaux fiables</span>
            </li>
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Connaissance approfondie des marchés</span>
            </li>
            <li className="flex items-start gap-2 text-white/80 text-sm">
              <CheckCircle size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              <span>Intervention rapide sur toute la sous-région</span>
            </li>
          </ul>
        </>
      ),
    },
  ];

  const testimonials = [
    {
      text: "Je recommande cette agence. Ils sont très jeune, très dynamique et très patient. Je travaille avec eux depuis 2024.",
      author: "Austin AYENAN",
      role: "Manager, 3A Groupe",
      avatar: abidjanImg,
      rating: 5
    },
    {
      text: "HILS COMPANY a coordonné la récente édition de notre événement University Awards. De la négociation avec les prestataires passant par le déploiement des hôtesses et même la coordination le jour J ils étaient avec nous. Je les recommande les yeux fermés.",
      author: "Florentin SOGLONOU",
      role: "Promoteur, University Awards",
      avatar: cotounouImg,
      rating: 5
    },
    {
      text: "Je recommande totalement. Ils sont très bon.",
      author: "Charles DAGUE",
      role: "Le Kabiessi",
      avatar: accraImg,
      rating: 5
    },
    {
      text: "J'ai participé en tant que panelist à la récente édition de AFRICAN CONSCIOUS CHILL et j'ai apprécié l'évènement dans sa globalité. J'y serai cette année également.",
      author: "Cédric AKOFFODJI",
      role: "Manager, Uper Soft",
      avatar: dakarImg,
      rating: 5
    },
    {
      text: "Ils nous ont accompagné lors de la dernière édition des Students Talent Awards et j'étais aussi sur African Conscious Chill. Ce sont des jeunes très professionnels. Je les recommande.",
      author: "Arsène VIDO",
      role: "Responsable Art Survi Lab & Promoteur STA",
      avatar: lomeImg,
      rating: 5
    },
    {
      text: "Grâce à leur expertise, bien que je réside à Lyon, j'ai organisé facilement un anniversaire surprise à ma maman qui vit au Bénin. Ils ont tout fait de manière très professionnelle. Je les recommande.",
      author: "Polycarpe SODJINOU",
      role: "Résident Lyon",
      avatar: heroImg,
      rating: 5
    },
  ];

  const stats = [
    { nb: "3+", label: "Années d'expérience", icon: Award },
    { nb: "25+", label: "Événements organisés", icon: Calendar },
    { nb: "+5", label: "Destinations", icon: Globe },
    { nb: "500+", label: "Entrepreneurs connectés", icon: Users },
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
      
      {/* ===== NAVBAR ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-teal-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className={`font-bold text-xl block leading-tight ${scrolled ? 'text-teal-900' : 'text-white'}`}>
                  HILS
                </span>
                <span className={`text-xs font-medium tracking-widest ${scrolled ? 'text-slate-600' : 'text-teal-200'}`}>
                  COMPANY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: "Accueil", href: "/" },
                { 
                  label: "Services", 
                  dropdown: [
                    { label: "Communication", href: "/communication", icon: Megaphone },
                    { label: "Tourisme", href: "/tourisme", icon: Compass },
                    { label: "Événementiel", href: "/events", icon: Calendar },
                  ]
                },
                { label: "À propos", href: "/about" },
                { label: "Témoignages", href: "#temoignages" },
                { label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                      scrolled 
                        ? 'text-slate-700 hover:text-teal-700' 
                        : 'text-white hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            onClick={handleNavClick}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                          >
                            <subItem.icon size={16} className="text-teal-600" />
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link 
                to="/communication" 
                className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded transition-all ${
                  scrolled 
                    ? 'bg-teal-900 text-white hover:bg-teal-800' 
                    : 'bg-white text-teal-900 hover:bg-teal-50'
                }`}
              >
                Démarrer
                <ArrowRight size={16} />
              </Link>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-teal-900' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "Communication", href: "/communication", icon: Megaphone },
                  { label: "Tourisme", href: "/tourisme", icon: Compass },
                  { label: "Événementiel", href: "/events", icon: Calendar },
                  { label: "À propos", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={handleNavClick}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                  >
                    {item.icon && <item.icon size={18} className="text-teal-600" />}
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                ))}
                <Link 
                  to="/communication" 
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 bg-teal-900 text-white font-bold rounded-lg"
                >
                  Démarrer un projet
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }} />
        </div>
        
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <Zap size={16} className="text-white" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Écosystème d'excellence africaine
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8"
          >
            HILS
            <br />
            <span className="text-teal-200">
              COMPANY
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            HILS COMPANY est une agence spécialisée dans la communication, l’événementiel et les expériences de marque, basée au Bénin et active en Afrique de l’Ouest.
            <br />
            <span className="text-white/70 text-base md:text-lg">
              Nous accompagnons entreprises, institutions, marques et porteurs de projets vers des actions à fort impact.
            </span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#secteurs" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300 w-full sm:w-auto"
            >
              Découvrir nos services
              <ArrowRight size={18} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              À propos
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all w-full sm:w-auto"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </section>

      {/* ===== SECTORS SECTION ===== */}
      <section id="secteurs" className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos univers
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Trois Piliers Complémentaires
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Un impact maximal sur le continent africain et au-delà.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sectors.map((sector, index) => (
              <Link key={index} to={sector.link} className="group block">
                <motion.div 
                  variants={fadeInUp}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="h-1 bg-teal-600" />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                        <sector.icon size={28} className="text-teal-700" />
                      </div>
                      <div className="w-20 h-20 rounded-lg overflow-hidden ring-2 ring-slate-100 group-hover:ring-teal-200 transition-all">
                        <img src={sector.image} alt={sector.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-xs font-bold text-teal-600 mb-4 uppercase tracking-wider">
                      {sector.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {sector.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {sector.features.slice(0, 3).map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} className="text-teal-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <span className="inline-flex items-center text-sm font-bold text-teal-700 group-hover:text-teal-900 transition-colors">
                      En savoir plus 
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 bg-teal-900 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 mb-6">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.nb}
                </div>
                <div className="text-white/80 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== NOUVELLE SECTION PARTENAIRES ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Partenaires
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Ils Nous Font Confiance
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              Un réseau de partenaires stratégiques qui partagent notre vision 
              d'excellence et d'impact en Afrique.
            </p>
          </motion.div>

          {/* Partenaires Institutionnels */}
          <motion.div {...fadeInUp} className="mb-16">
            <h3 className="text-lg font-bold text-teal-900 mb-6 text-center">
              Partenaires Institutionnels
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[logo11, logo10, logo12, logo13].map((logo, index) => (
                <motion.div
                  key={`inst-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-50 rounded-xl p-6 flex items-center justify-center border border-slate-200 hover:border-teal-300 transition-all h-24"
                >
                  <img
                    src={logo}
                    alt={`Partenaire institutionnel ${index + 1}`}
                    className="w-full h-full object-contain max-h-16"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partenaires Entreprises */}
          <motion.div {...fadeInUp} className="mb-16">
            <h3 className="text-lg font-bold text-teal-900 mb-6 text-center">
              Partenaires Entreprises
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
                <motion.div
                  key={`corp-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-50 rounded-xl p-6 flex items-center justify-center border border-slate-200 hover:border-teal-300 transition-all h-24"
                >
                  <img
                    src={logo}
                    alt={`Partenaire entreprise ${index + 1}`}
                    className="w-full h-full object-contain max-h-16"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partenaires Médias & Communication */}
          <motion.div {...fadeInUp}>
            <h3 className="text-lg font-bold text-teal-900 mb-6 text-center">
              Partenaires Médias
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[logo7, logo8, logo9].map((logo, index) => (
                <motion.div
                  key={`media-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-50 rounded-xl p-6 flex items-center justify-center border border-slate-200 hover:border-teal-300 transition-all h-24"
                >
                  <img
                    src={logo}
                    alt={`Partenaire média ${index + 1}`}
                    className="w-full h-full object-contain max-h-16"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Devenir Partenaire */}
          <motion.div 
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-teal-50 rounded-2xl border border-teal-200">
              <div className="text-left">
                <h4 className="font-bold text-teal-900 mb-1">Vous souhaitez devenir partenaire ?</h4>
                <p className="text-slate-600 text-sm">Rejoignez notre réseau et développez votre impact.</p>
              </div>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors whitespace-nowrap"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="temoignages" className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Témoignages
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Ce qu'ils disent de nous
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
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-teal-600 fill-teal-600" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 italic text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-200">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-900 text-lg">{testimonial.author}</p>
                    <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EVENTS SECTION ===== */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Services Événementiels
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Organisation Clé en Main
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              Découvrez notre événement phare et nos services événementiels complets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link to="/events/african-conscience-chill" className="block group">
              <motion.div 
                {...fadeInUp}
                className="bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 rounded-xl p-10 relative overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }} />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Événement Phare</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                    African Conscience Chill
                  </h3>
                  
                  <p className="text-white/90 mb-8 leading-relaxed text-lg">
                    Le plus grand événement de networking entrepreneurial en Afrique. Connectez, inspirez, entreprenez.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {[
                      "1000+ Entrepreneurs connectés",
                      "50+ Speakers inspirants",
                      "Opportunités de financement",
                      "Networking premium",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-white/90 text-base">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={14} className="text-white" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center gap-3 text-white font-bold text-lg group-hover:gap-4 transition-all">
                    <span>Découvrir l'événement</span>
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link to="/events/services" className="block group">
              <motion.div 
                {...fadeInUp}
                className="bg-white rounded-xl p-10 border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Handshake size={32} className="text-teal-700" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-teal-900">
                    Gestion Complète d'Événements
                  </h3>
                </div>
                
                <ul className="space-y-5 mb-10">
                  {[
                    { label: "Conception & planification stratégique", icon: Target },
                    { label: "Gestion logistique complète", icon: Globe },
                    { label: "Coordination des prestataires", icon: Users },
                    { label: "Animation & déploiement d'hôtesses", icon: Sparkles },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon size={18} className="text-teal-600" />
                      </div>
                      <span className="text-slate-700 text-lg font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="inline-flex items-center gap-3 text-teal-700 font-bold text-lg group-hover:text-teal-900 transition-colors">
                  <span>Découvrir nos services</span>
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ROADMAP SECTION ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">Notre Méthode</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Comment Nous Travaillons
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              Un processus éprouvé pour garantir le succès de votre projet.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Roadmap steps={roadmapSteps} />
          </div>
        </div>
      </section>

      {/* ===== FLIP CARDS SECTION - CORRIGÉE ===== */}
      <section className="py-24 bg-teal-900 relative overflow-hidden px-4 sm:px-6">
        {/* Background decorative text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-8xl font-black text-white/5 select-none hidden lg:block">
            EXCELLENCE
          </div>
          <div className="absolute bottom-20 right-10 text-8xl font-black text-white/5 select-none hidden lg:block">
            INNOVATION
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-white/5 select-none hidden xl:block">
            ENGAGEMENT
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-full mb-4 backdrop-blur-sm">
              Pourquoi Nous
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-3 mb-6">
              Notre Différence
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
              Découvrez les valeurs et l'expertise qui font de HILS Company 
              un partenaire de confiance pour vos projets les plus ambitieux.
            </p>
          </motion.div>

          {/* FlipCards avec containment proper */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {flipCards.map((card, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="w-full max-w-sm mx-auto"
              >
                <div className="w-full aspect-[3/4]">
                  <FlipCard front={card.front} back={card.back} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom description */}
          <motion.div 
            {...fadeInUp}
            className="mt-16 text-center max-w-4xl mx-auto px-4"
          >
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Chez HILS Company, nous croyons en l'excellence opérationnelle et à l'innovation constante. 
              Notre approche sur mesure et notre connaissance approfondie du marché africain nous permettent 
              de délivrer des résultats exceptionnels.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-400" />
                <span>Expertise reconnue</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-400" />
                <span>Accompagnement personnalisé</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-400" />
                <span>Résultats mesurables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-teal-400" />
                <span>Réseau panafricain</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FORMS SECTION ===== */}
      <section id="formulaires" className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">Contactez-nous</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Passons à l'Action
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}><PartnershipForm /></motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}><AppointmentForm /></motion.div>
          </div>
        </div>
      </section>

      {/* ===== VISION SECTION ===== */}
      <section id="vision" className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">Notre Vision</span>
              <h2 className="text-4xl sm:text-5xl font-black text-teal-900 mt-3 mb-8 leading-tight">
                Une vision commune,
                <br />
                <span className="text-teal-600">trois expertises</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Le Groupe Hils rassemble des talents passionnés autour d'une mission commune : 
                valoriser l'excellence africaine à travers la communication, l'exploration 
                du monde et la connexion des entrepreneurs.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                Chaque entité conserve son identité propre tout en bénéficiant de la synergie 
                du groupe pour offrir des services d'excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/communication" 
                  className="px-8 py-4 bg-teal-900 text-white rounded-lg font-bold hover:bg-teal-800 transition-all inline-flex items-center gap-3"
                >
                  Démarrer un projet
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-teal-200 rounded-2xl transform rotate-3" />
              <div className="relative bg-white rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-xl">
                <img src={heroImg} alt="Notre écosystème" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-white font-black text-2xl">Notre écosystème</p>
                    <p className="text-white/80 text-lg font-medium">en action</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-red-900 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }} />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Rejoignez-nous
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            Prêt à collaborer ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Que vous cherchiez à communiquer, voyager ou connecter, 
            nous avons la solution adaptée à vos besoins.
          </motion.p>
          
            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-red-900 font-bold rounded-lg hover:bg-slate-100 transition-all duration-300 text-lg"
            >
              Contactez-nous maintenant
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-teal-950 text-white/70 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <span className="font-bold text-2xl block leading-tight text-white">
                    HILS
                  </span>
                  <span className="text-xs font-medium tracking-widest text-teal-300">
                    COMPANY
                  </span>
                </div>
              </div>
              <p className="text-base leading-relaxed mb-6 max-w-md">
                Écosystème d'excellence africaine : communication, tourisme et événementiel 
                pour connecter, inspirer et transformer.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=100083100673982" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Facebook size={18} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/hervé-h-a-tognissou-hils-company-7bb9a2264" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="https://wa.me/message/TLW5YHAJ74CTH1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Instagram size={18} className="text-white" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/communication" className="hover:text-white transition-colors">Communication</Link></li>
                <li><Link to="/tourisme" className="hover:text-white transition-colors">Tourisme</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Événementiel</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">Godomey Togoudo, Bénin</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-teal-400 flex-shrink-0" />
                  <span className="text-sm">+229 01 95 41 66 26 / +229 01 68 52 59 12</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-teal-400 flex-shrink-0" />
                  <span className="text-sm">htonissou92.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} HILS Company. Tous droits réservés.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}