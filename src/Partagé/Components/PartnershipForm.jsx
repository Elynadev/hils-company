import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Building, Mail, Phone, User, MessageSquare } from "lucide-react";

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership request:", formData);
    alert("Demande de partenariat envoyée avec succès !");
    setFormData({ company: "", name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary/10"
    >
      <h3 className="text-2xl font-black text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
        Devenir <span className="text-gold">Partenaire</span>
      </h3>

      <div className="space-y-4">
        <div className="relative">
          <Building size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nom de l'entreprise"
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom complet"
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email professionnel"
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Téléphone"
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <MessageSquare size={20} className="absolute left-4 top-4 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet de partenariat..."
            rows="4"
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Envoyer la demande
        </button>
      </div>
    </motion.form>
  );
};

export default PartnershipForm;
