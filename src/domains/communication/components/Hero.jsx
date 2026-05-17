// components/communication/Hero.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Menu, X, ChevronDown, 
  Megaphone, Compass, Calendar 
} from "lucide-react";


const Hero = () => {
  // États pour la navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au changement de route
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false);
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  // Données de navigation
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

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      {/* ===== NAVBAR INTÉGRÉE ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              {/* <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
              </div> */}
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
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 pt-20">
        
        {/* Background pattern subtil */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        {/* Decorative blur circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          
          {/* Badge d'introduction */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Hils Company · Communication
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Amplifiez Votre
            <br />
            <span className="text-teal-200">Message</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Stratégies de communication innovantes et organisation d'événements d'exception pour marquer les esprits.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16"
          >
            <Link 
              to="/communication#services" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              Découvrir nos services
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
            >
              Nous contacter
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8 border-t border-white/10"
          >
            {[
              { nb: "10+", label: "Projets réalisés" },
              { nb: "25+", label: "Événements organisés" },
              { nb: "98%", label: "Satisfaction client" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                variants={fadeInUp}
                custom={index}
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
    </>
  );
};

export default Hero;