// pages/EventsPage.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Users, Lightbulb, Handshake, Trophy, Briefcase, Sparkles, Home, 
  Zap, Star, Calendar, MapPin, ArrowRight, CheckCircle, Award, 
  Target, Menu, X, ChevronDown, Megaphone, Compass
} from "lucide-react";
import abidjanImg from "../../../assets/img/abidjan.jpg";
import cotounouImg from "../../../assets/img/cotonou.jpg";
import accraImg from "../../../assets/img/accra.jpg";
import dakarImg from "../../../assets/img/dakar.jpg";
import lomeImg from "../../../assets/img/lome.jpg";
import Hotesse1Img from "../../../assets/img/Hotesse1.jpg";
import hotesse2Img from "../../../assets/img/hotesse2.jpg";
import hotesse3Img from "../../../assets/img/hotesse3.jpg";
import hotesse4Img from "../../../assets/img/hotesse4.jpg";
import heroImg from "../../../assets/img/hero-bg.jpg";
import hilsLogo from "../../../assets/img/hils-logo.png";

const EventsPage = () => {
  // États pour la navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  const navItems = [
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
    { label: "Contact", href: "/contact" },
  ];

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
    { icon: Award, title: "Expertise", desc: "2 + ans d'expérience en événementiel" },
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

  const hostessImages = [
    { src: Hotesse1Img, label: "Hôtesses d'accueil" },
    { src: hotesse2Img, label: "Animation événementielle" },
    { src: hotesse3Img, label: "Interventions terrain" },
    { src: hotesse4Img, label: "Coordination & logistique" },
  ];

  // Animation variants cohérents avec le reste du site
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
      
      {/* ===== NAVBAR INTÉGRÉE ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
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
              {navItems.map((item, index) => (
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
                to="/contact" 
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
                aria-label="Toggle menu"
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
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                  >
                    {item.icon && <item.icon size={18} className="text-teal-600" />}
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
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
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />

        {/* Decorative blur circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
          >
            <Zap size={16} className="text-white" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Événementiel & Networking
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Connectez.
            <br />
            <span className="text-teal-200">Inspirez.</span>
            <br />
            Entreprenez.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Des événements qui transforment les rencontres en opportunités et les idées en succès entrepreneurial.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
          >
            <Link 
              to="/events/african-conscience-chill" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              African Conscience Chill
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/events/services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Nos Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8 border-t border-white/10"
          >
            {[
              { nb: "50+", label: "Événements" },
              { nb: "1000+", label: "Entrepreneurs" },
              { nb: "20+", label: "Partenaires" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.nb}
                </div>
                <div className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>

      </section>

      {/* ===== SERVICES CARDS ===== */}
      <section id="services" className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Services
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Événements Sur Mesure
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                    <Icon size={28} className="text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">{service.titre}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">{service.description}</p>
                  {/* <div className="flex items-center gap-2 text-teal-700 font-semibold group-hover:gap-3 transition-all">
                    <span>Découvrir</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div> */}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== AVANTAGES ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Pourquoi Nous Choisir
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Notre Excellence
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
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
        </div>
      </section>

      {/* ===== ÉDITIONS PASSÉES ===== */}
      {/* <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Réalisations
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Éditions Précédentes
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img src={event.img} alt={event.theme} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-teal-600" />
                    <span className="text-teal-600 font-bold">{event.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-4">{event.theme}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-teal-600" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-teal-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ===== SERVICES HÔTESSES ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Services Premium
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-teal-900 mt-3 mb-6">
                Hôtesses & Animation
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Notre équipe d'hôtesses et animateurs professionnels apporte une touche d'élégance et de dynamisme à vos événements.
              </p>
              <ul className="space-y-3">
                {hostessServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {hostessImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-xl overflow-hidden shadow-lg aspect-square"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                    <p className="text-white font-semibold text-sm sm:text-base">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-teal-900 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-slate-700/20 blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
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
            Prêt à créer l'événement de l'année ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Rejoignez l'écosystème entrepreneurial africain et faites partie de l'histoire.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all"
            >
              Participer
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Devenir partenaire
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default EventsPage;