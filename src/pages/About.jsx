// pages/About.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Award, Users, Globe, Target, Sparkles, ArrowRight, 
  CheckCircle, Heart, Lightbulb, Handshake, TrendingUp,
  Menu, X, ChevronDown, Megaphone, Compass, Calendar,
  MapPin, Phone, Mail, Linkedin, Facebook, Instagram
} from "lucide-react";
import { useState, useEffect } from "react";
import heroImg from "../assets/img/hero-bg.jpg";
import abidjanImg from "../assets/img/abidjan.jpg";
import cotounouImg from "../assets/img/cotonou.jpg";
import accraImg from "../assets/img/accra.jpg";
import hilsLogo from "../assets/img/hils-logo.png";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const values = [
    { icon: Heart, title: "Professionnalisme", desc: "Un accompagnement rigoureux à chaque étape, avec des solutions orientées résultats." },
    { icon: Lightbulb, title: "Créativité utile", desc: "Des idées efficaces et des contenus pensés pour votre public." },
    { icon: Target, title: "Impact", desc: "Des expériences qui renforcent la crédibilité des marques et génèrent de la valeur durable." },
    { icon: Handshake, title: "Collaboration", desc: "Un travail de proximité avec vos équipes, partenaires et publics." },
    { icon: Globe, title: "Responsabilité", desc: "Une approche responsable et adaptée aux contextes locaux et régionaux." },
  ];

  const activityPillars = [
    {
      icon: Megaphone,
      title: "Communication & marketing digital",
      description: "Conseil, stratégie éditoriale, contenus et campagnes digitales adaptables.",
      items: [
        "Conseil en communication",
        "Stratégie éditoriale et présence en ligne",
        "Création de contenus (visuels, textes, vidéos)",
        "Gestion de pages et campagnes digitales"
      ]
    },
    {
      icon: Calendar,
      title: "Événementiel & activation de marque",
      description: "Organisation d'événements sur mesure pour amplifier votre présence.",
      items: [
        "Conception et organisation d'événements",
        "Journées portes ouvertes, afterworks, masterclass",
        "Lancement de produits et activations de marque"
      ]
    },
    {
      icon: Users,
      title: "Déploiement d’hôtesses & équipes terrain",
      description: "Des équipes professionnelles pour accueillir et représenter votre marque.",
      items: [
        "Accueil, orientation et représentation de marque",
        "Équipes terrain qualifiées et formées",
        "Gestion de la relation visiteur"
      ]
    },
    {
      icon: Sparkles,
      title: "Production photo & vidéo",
      description: "Captation et production de contenus visuels pour valoriser vos actions.",
      items: [
        "Couverture événementielle",
        "Capsules vidéos et aftermovies",
        "Contenus créatifs pour digital et affichage"
      ]
    },
    {
      icon: Compass,
      title: "Tourisme & expériences (HILS Travel & Explore)",
      description: "Des voyages et expériences authentiques au Bénin et à l’international.",
      items: [
        "Visites touristiques",
        "Campings et voyages locaux ou internationaux",
        "Expériences de marque immersives"
      ]
    },
  ];

  const targetGroups = [
    "Entreprises et marques",
    "Institutions publiques et privées",
    "Banques et organisations financières",
    "Startups et entrepreneurs",
    "Acteurs culturels et créatifs",
  ];

  const methodology = [
    "Analyse des besoins",
    "Proposition stratégique",
    "Planification opérationnelle",
    "Exécution et supervision",
    "Évaluation et reporting",
  ];

  const stats = [
    { nb: "3+", label: "Années d'expérience", icon: Award },
    { nb: "50+", label: "Projets réussis", icon: CheckCircle },
    { nb: "5", label: "Pays couverts", icon: Globe },
    { nb: "500+", label: "Entrepreneurs accompagnés", icon: Users },
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
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm">
                <img src={hilsLogo} alt="HILS Company" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className={`font-bold text-xl block leading-tight ${scrolled ? 'text-teal-900' : 'text-white'}`}>HILS</span>
                <span className={`text-xs font-medium tracking-widest ${scrolled ? 'text-slate-600' : 'text-teal-200'}`}>COMPANY</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <button className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${
                    scrolled ? 'text-slate-700 hover:text-teal-700' : 'text-white hover:text-white'
                  }`}>
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="transition-transform" />}
                  </button>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/contact" className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded transition-all ${
                scrolled ? 'bg-teal-900 text-white hover:bg-teal-800' : 'bg-white text-teal-900 hover:bg-teal-50'
              }`}>
                Démarrer <ArrowRight size={16} />
              </Link>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-teal-900' : 'text-white'}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 pt-20">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
            <Sparkles size={16} className="text-white" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">Notre Histoire</span>
          </motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Une Vision, <span className="text-teal-200">Trois Univers</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            HILS COMPANY est une agence spécialisée dans la communication, l’événementiel et les expériences de marque, basée au Bénin et active en Afrique de l’Ouest.
            <br />
            Elle accompagne les entreprises, institutions, marques et porteurs de projets dans la conception, l’organisation et la valorisation de leurs actions à fort impact.
          </motion.p>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                Présentation générale
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-teal-900 mb-6">
                HILS COMPANY en quelques mots
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                HILS COMPANY est une agence spécialisée dans la communication, l’événementiel et les expériences de marque, basée au Bénin et active en Afrique de l’Ouest.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Elle accompagne les entreprises, institutions, marques et porteurs de projets dans la conception, l’organisation et la valorisation de leurs actions à fort impact.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Fondée et dirigée par TOGNISSOU Hervé, HILS COMPANY s’appuie sur une approche stratégique, créative et opérationnelle, avec une forte culture du terrain et des résultats mesurables.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-900 text-white font-bold rounded-lg hover:bg-teal-800 transition-all">
                Rejoindre l'aventure <ArrowRight size={18} />
              </Link>
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

      {/* ===== VISION & MISSION SECTION ===== */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Nos engagements
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Vision et mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Créer des expériences utiles, mémorables et professionnelles qui renforcent la crédibilité des marques, stimulent l’engagement des publics et génèrent de la valeur durable.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Concevoir et déployer des solutions de communication et d’événementiel adaptées aux objectifs réels des organisations, en combinant stratégie, créativité et exécution rigoureuse.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PÔLES D'ACTIVITÉS ===== */}
      <section className="py-24 bg-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              Pôles d’activités
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Nos domaines d'expertise
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Des services complémentaires au service de votre notoriété, vos événements et vos expériences de marque.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activityPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={index} {...fadeInUp} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-teal-100 mb-6">
                    <Icon size={28} className="text-teal-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-4">{pillar.title}</h3>
                  <p className="text-slate-600 mb-6">{pillar.description}</p>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    {pillar.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="mt-1 text-teal-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CIBLES ET APPROCHE ===== */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div {...fadeInUp} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">Cibles</h3>
              <ul className="space-y-3 text-slate-600">
                {targetGroups.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-teal-600">•</span>
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">Approche de travail</h3>
              <ol className="space-y-4 text-slate-600 list-decimal pl-5">
                {methodology.map((step, idx) => (
                  <li key={idx} className="leading-relaxed">{step}</li>
                ))}
              </ol>
              <div className="mt-10 rounded-3xl bg-teal-900 p-8 text-white">
                <h4 className="text-xl font-bold mb-3">Zone d'intervention</h4>
                <p className="text-white/80 leading-relaxed">
                  Bénin – Afrique de l’Ouest – Collaborations internationales selon les projets.
                </p>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Ce qui Nous Anime
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all text-center">
                  <div className="w-16 h-16 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 bg-teal-900 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={fadeInUp} className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/10 mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.nb}</div>
                  <div className="text-white/80 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-teal-900 mt-3 mb-6">
              Des Talents Passionnés
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Une équipe pluridisciplinaire unie par une même ambition : faire rayonner l'excellence africaine.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Hervé TOGNISSOU", role: "Fondateur & CEO", img: abidjanImg },
              { name: "Marie ADJOVI", role: "Directrice Communication", img: cotounouImg },
              { name: "Kossi MENSAH", role: "Responsable Événementiel", img: accraImg },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6 ring-4 ring-teal-100 group-hover:ring-teal-300 transition-all">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-1">{member.name}</h3>
                <p className="text-slate-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-teal-900 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 {...fadeInUp} className="text-4xl sm:text-5xl font-black text-white mb-8">
            Prêt à Écrire Votre Histoire ?
          </motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Rejoignez l'écosystème HILS et bénéficiez de notre expertise pour propulser votre projet.
          </motion.p>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all">
              Nous Contacter <ArrowRight size={18} />
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
                Écosystème d'excellence africaine : communication, tourisme et événementiel pour connecter, inspirer et transformer.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"><Facebook size={18} className="text-white" /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"><Linkedin size={18} className="text-white" /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"><Instagram size={18} className="text-white" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/communication" className="hover:text-white transition-colors">Communication</Link></li>
                <li><Link to="/tourisme" className="hover:text-white transition-colors">Tourisme</Link></li>
                <li><Link to="/events" className="hover:text-white transition-colors">Événementiel</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" /><span className="text-sm">Godomey Togoudo, Bénin</span></li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-teal-400 flex-shrink-0" /><span className="text-sm">+229 01 95 41 66 26 / +229 01 68 52 59 12</span></li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-teal-400 flex-shrink-0" /><span className="text-sm">htonissou92.com</span></li>
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
};

export default About;