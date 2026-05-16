import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Award, Users, Globe, Target, 
  TrendingUp, CheckCircle, Sparkles, 
  Facebook, Linkedin, Instagram, MapPin, Phone, Mail
} from 'lucide-react';
import heroImg from '../assets/img/hero-bg.jpg';
import abidjanImg from '../assets/img/abidjan.jpg';
import hilsLogo from '../assets/img/hils-logo.png';

export default function About() {
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

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous nous engageons à livrer la plus haute qualité dans chaque projet, sans compromis."
    },
    {
      icon: Target,
      title: "Stratégie",
      description: "Chaque initiative est pensée stratégiquement pour maximiser l'impact et les résultats."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nos partenaires et clients font partie de notre écosystème de succès partagé."
    },
    {
      icon: Globe,
      title: "Rayonnement Africain",
      description: "Nous portons haut les couleurs de l'Afrique et ses talents exceptionnels."
    },
  ];

  const team = [
    {
      role: "Directrice Générale",
      expertise: "Stratégie & Visionnaire",
      image: abidjanImg
    },
    {
      role: "Directeur Opérationnel",
      expertise: "Excellence & Innovation",
      image: abidjanImg
    },
    {
      role: "Responsable Communication",
      expertise: "Créativité & Digital",
      image: abidjanImg
    },
    {
      role: "Responsable Tourisme",
      expertise: "Expérience & Authenticité",
      image: abidjanImg
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-900 rounded flex items-center justify-center">
                <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl block leading-tight text-teal-900">HILS</span>
                <span className="text-xs font-medium tracking-widest text-teal-600">COMPANY</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/about" },
                { label: "Services", href: "/#secteurs" },
                { label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link 
              to="/contact" 
              className="px-6 py-3 text-sm font-bold bg-teal-900 text-white rounded hover:bg-teal-800 transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
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

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8"
          >
            À Propos de<br />
            <span className="text-teal-200">HILS COMPANY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Découvrez l'histoire, la vision et les valeurs qui animent notre écosystème d'excellence africaine.
          </motion.p>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Notre Histoire
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-teal-900 mt-3 mb-8 leading-tight">
                Nées de la passion pour l'Afrique
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                HILS Company est née de la conviction que l'Afrique possède des talents, des ressources 
                et un potentiel exceptionnels à offrir au monde. Fondée il y a 3 ans, notre groupe rassemble 
                trois entités complémentaires.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Chaque entité a été créée pour répondre à des besoins spécifiques : communiquer efficacement, 
                explorer authentiquement, et connecter les entrepreneurs africains. Ensemble, elles forment 
                un écosystème unique d'excellence et d'innovation.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                Aujourd'hui, nous sommes fiers d'avoir réalisé plus de 50 projets réussis, connecté 500+ 
                entrepreneurs et organisé 25+ événements d'envergure à travers l'Afrique.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-teal-900 text-white rounded-lg font-bold hover:bg-teal-800 transition-all inline-flex items-center gap-3"
                >
                  Savoir plus
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
              <div className="absolute inset-0 bg-teal-200 rounded-2xl transform -rotate-3" />
              <div className="relative bg-white rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-xl">
                <img src={heroImg} alt="Notre histoire" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos Valeurs
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-teal-900 mt-3 mb-6">
              Les Piliers de Notre Action
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-teal-700" />
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Notre Équipe
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-teal-900 mt-3 mb-6">
              Des Talents Passionnés
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              Découvrez les visages et les expertises qui font fonctionner HILS Company.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-teal-300 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.role} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-teal-900 mb-2">{member.role}</h3>
                  <p className="text-slate-600 text-sm">{member.expertise}</p>
                </div>
              </motion.div>
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
            {[
              { nb: "3+", label: "Années d'expérience", icon: Award },
              { nb: "50+", label: "Projets réussis", icon: CheckCircle },
              { nb: "500+", label: "Entrepreneurs", icon: Users },
              { nb: "25+", label: "Événements organisés", icon: Sparkles },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="text-center p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 mb-6">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.nb}</div>
                <div className="text-white/80 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-teal-900 relative overflow-hidden px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            Prêt à Collaborer ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Rejoignez les centaines d'organisations qui nous font confiance pour leurs projets.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-teal-900 font-bold rounded-lg hover:bg-slate-100 transition-all text-lg"
            >
              Nous contacter
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-teal-950 text-white/70 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                  <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <span className="font-bold text-2xl block leading-tight text-white">HILS</span>
                  <span className="text-xs font-medium tracking-widest text-teal-300">COMPANY</span>
                </div>
              </div>
              <p className="text-base leading-relaxed mb-6 max-w-md">
                Écosystème d'excellence africaine : communication, tourisme et événementiel.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=100083100673982" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <Facebook size={18} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/hervé-h-a-tognissou-hils-company-7bb9a2264" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-white" />
                </a>
                <a href="https://wa.me/message/TLW5YHAJ74CTH1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <Instagram size={18} className="text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/communication" className="hover:text-white">Communication</Link></li>
                <li><Link to="/tourisme" className="hover:text-white">Tourisme</Link></li>
                <li><Link to="/events" className="hover:text-white">Événementiel</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-teal-400 mt-1" />
                  <span className="text-sm">Godomey Togoudo, Bénin</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-teal-400" />
                  <span className="text-sm">+229 01 95 41 66 26</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-teal-400" />
                  <span className="text-sm">hilscompany15@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} HILS Company. Tous droits réservés.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#" className="hover:text-white">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
