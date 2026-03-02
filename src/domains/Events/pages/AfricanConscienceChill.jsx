import { motion } from "framer-motion";
import { Users, Target, Calendar, Handshake } from "lucide-react";

const AfricanConscienceChill = () => {
  const editions = [
    { year: "2023", participants: "500+", theme: "Innovation & Tech" },
    { year: "2022", participants: "350+", theme: "Entrepreneuriat Social" },
    { year: "2021", participants: "200+", theme: "Leadership Africain" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
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
              Événement Phare · Hils Groupe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            African Conscience
            <br />
            <span className="text-gold">Chill</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            L'événement de networking entrepreneurial qui connecte, inspire et transforme l'écosystème africain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { nb: "1000+", label: "Entrepreneurs connectés" },
              { nb: "50+", label: "Speakers inspirants" },
              { nb: "20+", label: "Partenaires" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.nb}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Le Concept</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Un Événement <span className="text-gold">Unique</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                African Conscience Chill est bien plus qu'un simple événement de networking. C'est un mouvement qui célèbre l'entrepreneuriat africain, favorise les connexions authentiques et catalyse les opportunités de croissance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Chaque édition rassemble entrepreneurs, investisseurs, innovateurs et leaders d'opinion autour de thématiques clés pour l'avenir du continent.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Networking Premium" },
                  { icon: Target, label: "Opportunités Business" },
                  { icon: Calendar, label: "Éditions Régulières" },
                  { icon: Handshake, label: "Partenariats Stratégiques" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-primary/10">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <Icon size={20} className="text-gold" />
                      </div>
                      <span className="text-sm font-bold text-primary">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-primary rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-primary/5 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <p className="text-primary font-bold text-lg">Photos & Vidéos</p>
                  <p className="text-gray-500 text-sm">Éditions précédentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cible et Objectifs */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Mission</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cible & <span className="text-gold">Objectifs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10">
              <h3 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Notre Cible
              </h3>
              <ul className="space-y-3">
                {[
                  "Entrepreneurs et startups africaines",
                  "Investisseurs et business angels",
                  "Dirigeants d'entreprises établies",
                  "Innovateurs et créateurs de contenu",
                  "Professionnels en quête de networking",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-white text-xs font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gold/5 rounded-3xl p-8 border-2 border-gold/20">
              <h3 className="text-2xl font-black text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Nos Objectifs
              </h3>
              <ul className="space-y-3">
                {[
                  "Créer des connexions business durables",
                  "Faciliter l'accès au financement",
                  "Partager les meilleures pratiques",
                  "Célébrer les success stories africaines",
                  "Construire un écosystème entrepreneurial fort",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold mt-0.5">★</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Éditions Précédentes */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm uppercase tracking-widest">Notre Histoire</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mt-3 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Éditions <span className="text-gold">Précédentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editions.map((edition, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border-2 border-primary/10 hover:border-gold hover:shadow-2xl transition-all duration-300">
                <div className="text-6xl font-black text-gold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {edition.year}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{edition.participants}</div>
                <p className="text-gray-600 font-medium">{edition.theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
              Rejoignez-nous
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Participez à la prochaine
            <br />
            <span className="text-gold">édition</span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Que vous soyez entrepreneur, investisseur ou partenaire, rejoignez le mouvement African Conscience Chill.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-secondary font-black rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
              S'inscrire à l'événement
            </button>
            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all duration-300">
              Devenir partenaire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfricanConscienceChill;
