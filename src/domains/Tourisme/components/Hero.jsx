// components/tourisme/Hero.jsx
import { useState, useEffect } from "react";
import { Search, MapPin, Calendar, Compass, X, ChevronDown, Menu, ArrowRight, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../../../assets/img/hero-bg.jpg";
import hilsLogo from "../../../assets/img/hils-logo.png";

const destinations = [
  { ville: "Ganvié", pays: "Bénin", type: "Culture" },
  { ville: "Cotonou", pays: "Bénin", type: "Plage" },
  { ville: "Abomey", pays: "Bénin", type: "Histoire" },
  { ville: "Dakar", pays: "Sénégal", type: "Culture" },
  { ville: "Accra", pays: "Ghana", type: "Histoire" },
  { ville: "Abidjan", pays: "Côte d'Ivoire", type: "Culture" },
  { ville: "Lomé", pays: "Togo", type: "Plage" },
];

const Hero = () => {
  // Navbar states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Search states
  const [searchQuery, setSearchQuery] = useState({
    destination: "",
    periode: "",
    type: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.destination || searchQuery.type) {
        setIsSearching(true);
        const results = destinations.filter((dest) => {
          const matchDestination = searchQuery.destination
            ? dest.ville.toLowerCase().includes(searchQuery.destination.toLowerCase()) ||
              dest.pays.toLowerCase().includes(searchQuery.destination.toLowerCase())
            : true;
          const matchType = searchQuery.type ? dest.type === searchQuery.type : true;
          return matchDestination && matchType;
        });
        setFilteredDestinations(results);
        setShowResults(true);
        setIsSearching(false);
      } else {
        setShowResults(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery.destination, searchQuery.type]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const closeResults = () => {
    setShowResults(false);
    setSearchQuery({ destination: "", periode: "", type: "" });
  };

  // Smooth scroll for anchor links
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    handleNavClick();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Navigation items
  const navItems = [
    { label: "Accueil", href: "/", isAnchor: false },
    { 
      label: "Services", 
      dropdown: [
        { label: "Communication", href: "/communication", icon: Megaphone, isAnchor: false },
        { label: "Tourisme", href: "/tourisme", icon: Compass, isAnchor: false },
        { label: "Événementiel", href: "/events", icon: Calendar, isAnchor: false },
      ]
    },
    { label: "À propos", href: "/about", isAnchor: false },
    { label: "Contact", href: "/contact", isAnchor: false },
  ];

  const mobileNavItems = [
    { label: "Accueil", href: "/", isAnchor: false },
    { label: "Communication", href: "/communication", icon: Megaphone, isAnchor: false },
    { label: "Tourisme", href: "/tourisme", icon: Compass, isAnchor: false },
    { label: "Événementiel", href: "/events", icon: Calendar, isAnchor: false },
    { label: "À propos", href: "/about", isAnchor: false },
    { label: "Contact", href: "/contact", isAnchor: false },
  ];

  // Render navigation link
  const renderNavLink = (item, isMobile = false) => {
    if (item.isAnchor) {
      return (
        <a
          href={`#${item.href}`}
          onClick={(e) => handleAnchorClick(e, item.href)}
          className={`flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors ${
            !isMobile ? 'text-sm font-semibold px-3 py-2' : ''
          }`}
        >
          {item.icon && <item.icon size={isMobile ? 18 : 16} className="text-teal-600" />}
          <span className={isMobile ? 'font-semibold' : ''}>{item.label}</span>
        </a>
      );
    }
    
    return (
      <Link
        to={item.href}
        onClick={handleNavClick}
        className={`flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors ${
          !isMobile ? 'text-sm font-semibold px-3 py-2' : ''
        }`}
      >
        {item.icon && <item.icon size={isMobile ? 18 : 16} className="text-teal-600" />}
        <span className={isMobile ? 'font-semibold' : ''}>{item.label}</span>
      </Link>
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900">
      
      {/* ===== NAVBAR ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
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
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                          scrolled 
                            ? 'text-slate-700 hover:text-teal-700' 
                            : 'text-white hover:text-white'
                        }`}
                      >
                        {item.label}
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
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
                    </>
                  ) : (
                    item.isAnchor ? (
                      <a
                        href={`#${item.href}`}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                          scrolled 
                            ? 'text-slate-700 hover:text-teal-700' 
                            : 'text-white hover:text-white'
                        }`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={handleNavClick}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                          scrolled 
                            ? 'text-slate-700 hover:text-teal-700' 
                            : 'text-white hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link 
                to="/contact" 
                onClick={handleNavClick}
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
                {mobileNavItems.map((item, index) => (
                  <div key={index}>
                    {renderNavLink(item, true)}
                  </div>
                ))}
                <Link 
                  to="/contact" 
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

      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src={heroBg}
          alt="Paysage Afrique de l'Ouest"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative blur orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-20">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
          <span className="text-white text-sm font-bold tracking-wide uppercase">
            Hils Company · Tourisme
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Découvrez l'Âme de
          <br />
          <span className="text-teal-200">l'Afrique de l'Ouest</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/85 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Des expériences authentiques, des cultures vibrantes et des paysages
          à couper le souffle — du lac Nokoué à la savane.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto shadow-2xl mb-12"
        >
          {/* Destination */}
          <div className="flex items-center gap-3 flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
            <MapPin size={18} className="text-teal-600 flex-shrink-0" />
            <div className="flex-1 text-left">
              <p className="text-xs text-slate-400 font-medium">Destination</p>
              <input
                type="text"
                value={searchQuery.destination}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, destination: e.target.value })
                }
                placeholder="Ganvié, Bénin..."
                className="text-sm text-slate-800 font-semibold w-full focus:outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Periode */}
          <div className="flex items-center gap-3 flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
            <Calendar size={18} className="text-teal-600 flex-shrink-0" />
            <div className="flex-1 text-left">
              <p className="text-xs text-slate-400 font-medium">Période</p>
              <input
                type="date"
                value={searchQuery.periode}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, periode: e.target.value })
                }
                className="text-sm text-slate-800 font-semibold w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Type */}
          <div className="flex items-center gap-3 flex-1 px-4 py-3">
            <Compass size={18} className="text-teal-600 flex-shrink-0" />
            <div className="flex-1 text-left">
              <p className="text-xs text-slate-400 font-medium">Type</p>
              <select
                value={searchQuery.type}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, type: e.target.value })
                }
                className="text-sm text-slate-800 font-semibold w-full focus:outline-none bg-transparent cursor-pointer"
              >
                <option value="">Tout type</option>
                <option value="Culture">Culture</option>
                <option value="Plage">Plage</option>
                <option value="Histoire">Histoire</option>
                <option value="Nature">Nature</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={() => {
              if (searchQuery.destination || searchQuery.type) {
                setShowResults(true);
              }
            }}
            className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 bg-teal-900 text-white rounded-lg hover:bg-teal-800 transition-all font-semibold text-sm"
          >
            {isSearching ? (
              <>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Recherche...
              </>
            ) : (
              <>
                <Search size={18} />
                <span className="hidden sm:inline">Rechercher</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8 border-t border-white/10"
        >
          {[
            { nb: "12+", label: "Destinations" },
            { nb: "200+", label: "Voyages organisés" },
            { nb: "98%", label: "Clients satisfaits" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
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

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-3">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>

      {/* Search Results Modal */}
      <AnimatePresence>
        {showResults && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-teal-950/70 backdrop-blur-sm"
              onClick={closeResults}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <div>
                  <h3 className="text-xl lg:text-2xl font-black text-teal-900">
                    Résultats de recherche
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {filteredDestinations.length} destination{filteredDestinations.length > 1 ? 's' : ''} trouvée{filteredDestinations.length > 1 ? 's' : ''}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeResults}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  aria-label="Fermer les résultats"
                >
                  <X size={20} className="text-slate-600" />
                </motion.button>
              </div>

              {/* Results */}
              <div className="p-6">
                {filteredDestinations.length > 0 ? (
                  <div className="space-y-3">
                    {filteredDestinations.map((dest, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/50 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                            <MapPin size={20} className="text-teal-700" />
                          </div>
                          <div>
                            <h4 className="font-bold text-teal-900">{dest.ville}</h4>
                            <p className="text-sm text-slate-500">{dest.pays}</p>
                          </div>
                        </div>
                        <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full font-medium">
                          {dest.type}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                      <Search size={24} className="text-slate-400" />
                    </div>
                    <p className="text-slate-500 text-lg font-medium">
                      Aucune destination trouvée
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      Essayez d'autres critères de recherche.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;