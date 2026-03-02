import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Home Button */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              🏢
            </div>
            <div>
              <h1 className="text-xl font-black text-primary group-hover:text-gold transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                Groupe Hils
              </h1>
              <p className="text-xs text-gray-500">Excellence Africaine</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/communication" 
              className="text-gray-700 hover:text-gold font-semibold transition-colors"
            >
              Communication
            </Link>
            <Link 
              to="/tourisme" 
              className="text-gray-700 hover:text-gold font-semibold transition-colors"
            >
              Tourisme
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-gold font-semibold transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/" 
              className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-accent transition-colors flex items-center gap-2"
            >
              <Home size={16} />
              Accueil
            </Link>
          </div>

          {/* Mobile Home Button */}
          <Link 
            to="/" 
            className="md:hidden px-4 py-2 bg-primary text-white rounded-full font-bold hover:bg-accent transition-colors flex items-center gap-2"
          >
            <Home size={16} />
            Accueil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
