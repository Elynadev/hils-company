// components/tourisme/ContactCTA.jsx
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PopUpModal from "./PopUpModal";

const ContactCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants cohérents avec le reste du site
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          {...fadeInUp}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 p-8 sm:p-12 lg:p-16 shadow-2xl"
        >
          {/* Elegant pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
          
          {/* Decorative blur orbs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-slate-700/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles size={14} className="text-teal-300" />
              <span className="text-white text-sm font-bold tracking-wide uppercase">
                Planifiez votre voyage
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            >
              Prêt pour votre
              <br />
              <span className="text-teal-200">aventure africaine ?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Notre équipe d'experts est à votre disposition pour concevoir
              le voyage de vos rêves. Contactez-nous pour un devis
              personnalisé et gratuit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-all duration-300 hover:shadow-lg"
              >
                Demander un devis gratuit
                <ArrowRight size={18} />
              </button>
              <a 
                href="tel:+2290195416626"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone size={18} />
                Nous appeler
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center border-t border-white/10 pt-8"
            >
              {[
                { icon: <Mail size={16} className="text-teal-300" />, text: "hilscompany15@gmail.com" },
                { icon: <MapPin size={16} className="text-teal-300" />, text: "Godomey Togoudo, Bénin" },
                { icon: <Clock size={16} className="text-teal-300" />, text: "Lun - Sam, 8h - 18h" },
              ].map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  {info.icon}
                  <span>{info.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <PopUpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        destination="Devis Voyage"
      />
    </section>
  );
};

// Clock icon import added
import { Clock } from "lucide-react";

export default ContactCTA;