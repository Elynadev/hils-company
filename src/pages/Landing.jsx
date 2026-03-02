import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  const sectors = [
    {
      title: "Hils Company",
      subtitle: "Communication & Événementiel",
      description: "Stratégies de communication innovantes et organisation d'événements d'exception pour marquer les esprits.",
      icon: "📢",
      link: "/communication",
    },
    {
      title: "Hils Travel & Explore",
      subtitle: "Voyages & Tourisme",
      description: "Des expériences de voyage uniques, authentiques et responsables à travers le monde.",
      icon: "✈️",
      link: "/tourisme",
    },
    {
      title: "African Conscience Chill",
      subtitle: "Networking & Entrepreneuriat",
      description: "Événements entrepreneuriaux qui connectent, inspirent et accélèrent la croissance en Afrique.",
      icon: "🌍",
      link: "/events/african-conscience-chill",
    }
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
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              🚀 Écosystème d'excellence africaine
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Link 
                key={index} 
                to={sector.link} 
                className="group block"
              >
                <div className="bg-white rounded-3xl p-8 border-2 border-primary/10 hover:border-gold shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gold"></div>
                  
                  <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                    {sector.icon}
                  </div>
                  
                  <h3 
                    className="text-2xl font-black text-primary mb-2 group-hover:text-gold transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {sector.title}
                  </h3>
                  
                  <p className="text-sm font-bold text-gold mb-4 uppercase tracking-wide">
                    {sector.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                  
                  <span className="inline-flex items-center text-primary font-semibold group-hover:text-gold transition-colors">
                    En savoir plus 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Partenaires Section */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">
              Ils nous font confiance
            </span>
            <h2 
              className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Plus de <span className="text-gold">50+ Partenaires</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des entreprises, institutions et organisations qui ont choisi l'excellence avec Hils Groupe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border-2 border-primary/10 hover:border-gold hover:shadow-xl transition-all duration-300 flex items-center justify-center h-24 group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">🏢</div>
                  <p className="text-xs text-gray-400 font-medium">Logo {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg font-medium">
              Et bien d'autres partenaires à travers l'Afrique et le monde
            </p>
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
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl">
                    👤
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
              className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Organisation <span className="text-gold">Clé en Main</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              De la conception à la réalisation, nous gérons votre événement de A à Z.
            </p>
          </div>

          <Link to="/events/services" className="block group">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
                backgroundSize: "30px 30px",
              }} />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Gestion Complète d'Événements
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Conception & planification stratégique",
                      "Gestion logistique complète",
                      "Coordination des prestataires",
                      "Animation & déploiement d'hôtesses",
                      "Suivi post-événement & reporting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/90">
                        <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                    <span>Découvrir nos services</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {["🎯", "🎉", "🎬", "🎭"].map((emoji, index) => (
                    <div 
                      key={index} 
                      className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-6xl border-2 border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Vision</span>
              <h2 
                className="text-4xl font-black text-primary mt-3 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Une vision commune,
                <br />
                <span className="text-gold">trois expertises</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Le Groupe Hils rassemble des talents passionnés autour d'une mission commune : 
                valoriser l'excellence africaine à travers la communication, l'exploration 
                du monde et la connexion des entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Chaque entité conserve son identité propre tout en bénéficiant de la synergie 
                du groupe pour offrir des services d'excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/communication" 
                  className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-accent transition-colors"
                >
                  Démarrer un projet
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-primary rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 h-96 flex items-center justify-center border-2 border-primary/10">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <p className="text-primary font-bold text-lg">Notre écosystème</p>
                  <p className="text-gray-500">en action</p>
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
