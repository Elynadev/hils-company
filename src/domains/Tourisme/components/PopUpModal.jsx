import { X, MapPin, Calendar, Users, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PopUpModal = ({ isOpen, onClose, destination = "" }) => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    destination: destination,
    dateDebut: "",
    dateFin: "",
    nombrePersonnes: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de réservation :", formData);
    alert(`Merci ${formData.nom} ! Votre demande pour ${formData.destination} a été envoyée. Nous vous recontacterons sous 24h.`);
    onClose();
    
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      destination: destination,
      dateDebut: "",
      dateFin: "",
      nombrePersonnes: 1,
      message: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-primary text-white px-8 py-6 rounded-t-3xl flex justify-between items-center z-10">
              <div>
                <h2
                  className="text-2xl font-black"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Demande de Réservation
                </h2>
                <p className="text-white/70 text-sm mt-1">
                  Remplissez le formulaire et nous vous recontacterons
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                  <User size={16} />
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                  placeholder="Elon Musk"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                    <Mail size={16} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                    placeholder="monemail@gmail.com"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                    <Phone size={16} />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                  <MapPin size={16} />
                  Destination *
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                >
                  <option value="">Choisir une destination</option>
                  <option value="Ganvié">Ganvié, Bénin</option>
                  <option value="Cotonou">Cotonou, Bénin</option>
                  <option value="Abomey">Abomey, Bénin</option>
                  <option value="Dakar">Dakar, Sénégal</option>
                  <option value="Accra">Accra, Ghana</option>
                  <option value="Abidjan">Abidjan, Côte d'Ivoire</option>
                  <option value="Lomé">Lomé, Togo</option>
                  <option value="Autre">Autre destination</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                    <Calendar size={16} />
                    Date de début *
                  </label>
                  <input
                    type="date"
                    name="dateDebut"
                    value={formData.dateDebut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                    <Calendar size={16} />
                    Date de fin *
                  </label>
                  <input
                    type="date"
                    name="dateFin"
                    value={formData.dateFin}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                  <Users size={16} />
                  Nombre de personnes *
                </label>
                <input
                  type="number"
                  name="nombrePersonnes"
                  value={formData.nombrePersonnes}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                  <MessageSquare size={16} />
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                  placeholder="Dites-nous en plus sur vos attentes, préférences ou questions..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg"
                >
                  Envoyer la demande
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                >
                  Annuler
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopUpModal;