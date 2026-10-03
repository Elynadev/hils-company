import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, Briefcase } from "lucide-react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const services = [
    "Communication",
    "Événementiel",
    "Tourisme",
    "African Conscience Chill",
    "Autre",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment request:", formData);
    alert("Demande de rendez-vous envoyée avec succès !");
    setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "" });
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
        Prendre <span className="text-gold">Rendez-vous</span>
      </h3>

      <div className="space-y-4">
        <div className="relative">
          <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom complet"
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
            placeholder="Email"
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
          <Briefcase size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors appearance-none bg-white"
          >
            <option value="">Sélectionnez un service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Clock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold focus:outline-none transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          <Calendar size={20} />
          Confirmer le rendez-vous
        </button>
      </div>
    </motion.form>
  );
};

export default AppointmentForm;
