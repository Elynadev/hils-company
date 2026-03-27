import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save } from "lucide-react";
import ImageUploader from "../Common/ImageUploader";

const EvenementFormModal = ({ isOpen, onClose, onSave, evenement = null }) => {
  const [formData, setFormData] = useState({
    nom: "",
    lieu: "",
    date: "",
    description: "",
    type: "Culture",
    nbParticipants: "",
    duree: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  useEffect(() => {
    if (evenement) {
      setFormData({
        nom: evenement.nom || "",
        lieu: evenement.lieu || "",
        date: evenement.date || "",
        description: evenement.description || "",
        type: evenement.type || "Culture",
        nbParticipants: evenement.nbParticipants || "",
        duree: evenement.duree || "",
        image: evenement.image || null,
      });
    } else {
      // Réinitialiser si ajout
      setFormData({
        nom: "",
        lieu: "",
        date: "",
        description: "",
        type: "Culture",
        nbParticipants: "",
        duree: "",
        image: null,
      });
    }
    setErrors({});
  }, [evenement, isOpen]);

  const validate = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.lieu.trim()) newErrors.lieu = "Le lieu est requis";
    if (!formData.date) newErrors.date = "La date est requise";
    if (!formData.description.trim()) newErrors.description = "La description est requise";
    if (!formData.nbParticipants.trim()) newErrors.nbParticipants = "Le nombre de participants est requis";
    if (!formData.duree.trim()) newErrors.duree = "La durée est requise";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onSave(formData);
      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-primary text-white px-8 py-6 flex justify-between items-center rounded-t-3xl">
              <h2 className="text-2xl font-black">
                {evenement ? "Modifier l'événement" : "Nouvel événement"}
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'événement *
                </label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => handleChange("nom", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.nom
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                  placeholder="Festival Vaudou"
                />
                {errors.nom && (
                  <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lieu *
                </label>
                <input
                  type="text"
                  value={formData.lieu}
                  onChange={(e) => handleChange("lieu", e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.lieu
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                  placeholder="Ouidah, Bénin"
                />
                {errors.lieu && (
                  <p className="text-red-500 text-sm mt-1">{errors.lieu}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.date
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-primary"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="Culture">Culture</option>
                    <option value="Musique">Musique</option>
                    <option value="Sport">Sport</option>
                    <option value="Festival">Festival</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de participants *
                  </label>
                  <input
                    type="text"
                    value={formData.nbParticipants}
                    onChange={(e) => handleChange("nbParticipants", e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.nbParticipants
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-primary"
                    }`}
                    placeholder="5000+"
                  />
                  {errors.nbParticipants && (
                    <p className="text-red-500 text-sm mt-1">{errors.nbParticipants}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durée *
                  </label>
                  <input
                    type="text"
                    value={formData.duree}
                    onChange={(e) => handleChange("duree", e.target.value)}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.duree
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-primary"
                    }`}
                    placeholder="3 jours"
                  />
                  {errors.duree && (
                    <p className="text-red-500 text-sm mt-1">{errors.duree}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors resize-none ${
                    errors.description
                      ? "border-red-300 focus:border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                  placeholder="Décrivez l'événement..."
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              <ImageUploader
                value={formData.image}
                onChange={(base64) => handleChange("image", base64)}
                label="Image de l'événement"
              />

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  {isSubmitting ? "Enregistrement..." : evenement ? "Modifier" : "Créer"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EvenementFormModal;