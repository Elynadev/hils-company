import { Users, Lightbulb, Handshake, Trophy, Briefcase, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Users,
    titre: "Networking Events",
    description: "Événements de réseautage qui créent des connexions authentiques entre entrepreneurs et investisseurs.",
  },
  {
    icon: Lightbulb,
    titre: "Conférences & Talks",
    description: "Conférences inspirantes avec des leaders d'opinion et entrepreneurs à succès.",
  },
  {
    icon: Handshake,
    titre: "Matchmaking B2B",
    description: "Mise en relation stratégique entre entreprises pour des partenariats gagnants.",
  },
  {
    icon: Trophy,
    titre: "Compétitions Startup",
    description: "Concours et pitch sessions pour identifier et soutenir les talents entrepreneuriaux.",
  },
  {
    icon: Briefcase,
    titre: "Ateliers & Formations",
    description: "Sessions pratiques pour développer les compétences entrepreneuriales essentielles.",
  },
  {
    icon: Sparkles,
    titre: "Événements Thématiques",
    description: "Soirées et rencontres autour de thématiques spécifiques de l'écosystème africain.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden px-6">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 40px,
            rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px
          ), repeating-linear-gradient(
            90deg, transparent, transparent 40px,
            rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-sm uppercase tracking-widest">
            Ce que nous offrons
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Services{" "}
            <span className="text-gold">Événementiels</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Des expériences qui transforment les rencontres en opportunités et les idées en succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition-all duration-300">
                  <Icon size={28} className="text-gold group-hover:text-white transition-colors duration-300" />
                </div>

                <h3
                  className="text-white text-xl font-black mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.titre}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
