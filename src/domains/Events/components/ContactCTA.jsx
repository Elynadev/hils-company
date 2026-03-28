import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-[#f5f5f0] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-secondary p-12 md:p-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, white 1.5px, transparent 1.5px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
                Rejoignez la communauté
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prêt à connecter avec
              <br />
              <span className="text-gold">l'écosystème entrepreneurial ?</span>
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Participez à nos prochains événements ou organisez le vôtre avec notre équipe. Ensemble, construisons l'avenir de l'entrepreneuriat africain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="flex items-center justify-center gap-3 bg-white text-secondary font-black px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                Participer aux événements
                <ArrowRight size={18} />
              </button>
              <a 
                href="tel:+22900000000"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300"
              >
                <Phone size={18} />
                Nous appeler
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center border-t border-white/20 pt-8">
              {[
                { icon: <Mail size={16} />, text: "events@hilscompany.com" },
                { icon: <MapPin size={16} />, text: "Cotonou, Bénin" },
                { icon: <Phone size={16} />, text: "Lun - Sam, 8h - 18h" },
              ].map((info) => (
                <div
                  key={info.text}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  {info.icon}
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
