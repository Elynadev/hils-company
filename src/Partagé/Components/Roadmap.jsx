import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Roadmap = ({ steps }) => {
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-primary to-accent hidden md:block" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-start gap-6"
          >
            {/* Numéro */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-lg z-10">
              {index + 1}
            </div>

            {/* Contenu */}
            <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg border-2 border-primary/10 hover:border-gold transition-all">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {step.title}
                </h3>
                <CheckCircle size={24} className="text-gold flex-shrink-0" />
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {step.duration && (
                <div className="mt-3 inline-block px-4 py-1 bg-gold/10 rounded-full text-gold text-sm font-bold">
                  {step.duration}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
