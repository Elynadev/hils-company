// components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Megaphone, Compass, Calendar 
} from 'lucide-react';
import hilsLogo from '../assets/img/hils-logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand la route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-teal-900'
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
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                >
                  {item.icon && <item.icon size={18} className="text-teal-600" />}
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
              <Link 
                to="/contact" 
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
  );
}