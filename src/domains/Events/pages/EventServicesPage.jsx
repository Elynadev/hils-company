// pages/EventServicesPage.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Calendar, Users, Lightbulb, Settings, 
  BarChart, Megaphone, Camera, ArrowRight, Menu, X, 
  ChevronDown, Compass, Sparkles, Award, Target, 
  Mic2, Trophy, Building2, Globe, Music, Palette
} from "lucide-react";
import hilsLogo from "../../../assets/img/hils-logo.png";
import heroImg from "../../../assets/img/hero-bg.jpg";
import abidjanImg from "../../../assets/img/abidjan.jpg";
import cotounouImg from "../../../assets/img/cotonou.jpg";
import accraImg from "../../../assets/img/accra.jpg";

const EventServicesPage = () => {
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
    { icon: Mic2, title: "Conférences", desc: "Séminaires, colloques, symposiums" },
    { icon: Building2, title: "Événements Corporate", desc: "Team building, soirées d'entreprise" },
    { icon: Trophy, title: "Cérémonies", desc: "Remises de prix, inaugurations" },
    { icon: Palette, title: "Salons & Foires", desc: "Stands, expositions, showcases" },
    { icon: Music, title: "Spectacles", desc: "Concerts, galas, shows" },
    { icon: Globe, title: "Événements Publics", desc: "Festivals, manifestations culturelles" },
  ];

  // Animation variants cohérents
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
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
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm">
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

      {/* ===== HERO SECTION - GLAMOUR ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 pt-20">
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(ellipse at top, rgba(255,255,255,0.15) 0%, transparent 70%),
                           radial-gradient(ellipse at bottom, rgba(20,184,166,0.1) 0%, transparent 70%)`,
        }} />

        {/* Decorative glowing orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/30 rounded-full blur-3xl" />

        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }} />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl shadow-teal-900/50"
          >
            <Sparkles size={16} className="text-teal-300" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Hils Groupe · Services Événementiels
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Gestion d'Événements
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
              de A à Z
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/85 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            De la conception à la réalisation, nous prenons en charge l'intégralité de votre événement 
            pour une expérience mémorable et sans compromis.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Découvrir nos événements
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8 border-t border-white/10"
          >
            {[
              { nb: "50+", label: "Événements réalisés" },
              { nb: "98%", label: "Satisfaction client" },
              { nb: "24/7", label: "Support dédié" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {stat.nb}
                </div>
                <div className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Elegant scroll indicator */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-3">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>

      </section>

      {/* ===== PROCESS SECTION - PREMIUM CARDS ===== */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Notre Processus
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              6 Étapes pour un Événement Réussi
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre événement.
            </p>
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
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300"
                >
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="text-4xl font-black text-teal-200/60">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-teal-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle size={16} className="text-teal-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== EVENT TYPES - ELEGANT GRID ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Expertises
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Types d'Événements
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {eventTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Icon container with elegant hover */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-teal-200 group-hover:to-teal-100 transition-all duration-300">
                    <Icon size={30} className="text-teal-700 group-hover:text-teal-800 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-teal-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.desc}
                  </p>
                  
                  {/* Subtle arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-teal-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>En savoir plus</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== SHOWCASE SECTION - VISUAL IMPACT ===== */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Notre Signature
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-teal-900 mb-6">
                L'Excellence dans chaque Détail
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Chaque événement est une œuvre unique. Nous combinons créativité, rigueur 
                et expertise pour transformer votre vision en réalité exceptionnelle.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Équipe dédiée de 20+ professionnels",
                  "Réseau de 100+ prestataires premium",
                  "Technologies événementielles de pointe",
                  "Suivi personnalisé de A à Z",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle size={14} className="text-teal-700" />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-900 text-white font-bold rounded-lg hover:bg-teal-800 transition-all"
              >
                Discuter de votre projet
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Elegant frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-teal-400/20 rounded-3xl blur-xl" />
              
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                    <img src={heroImg} alt="Événement premium" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img src={abidjanImg} alt="Conférence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img src={cotounouImg} alt="Gala" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                    <img src={accraImg} alt="Networking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Award size={24} className="text-teal-700" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-900 text-sm">Prix Excellence</p>
                    <p className="text-slate-500 text-xs">Meilleure agence 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION - LUXURY FINALE ===== */}
      <section className="py-24 bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 relative overflow-hidden px-4 sm:px-6">
        {/* Elegant background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-slate-700/20 blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Votre événement nous attend
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            Prêt à organiser votre
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
              événement d'exception ?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Contactez-nous pour discuter de votre projet et recevoir un devis 
            personnalisé sous 24 heures.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Demander un devis gratuit
              <ArrowRight size={18} />
            </Link>
            <a 
              href="tel:+2290195416626"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              <Camera size={18} />
              Nous appeler
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default EventServicesPage;