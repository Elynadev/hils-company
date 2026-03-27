import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, MapPin, Calendar, Users, MessageSquare, Clock } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const ReservationDetailsModal = ({ isOpen, onClose, reservation }) => {
  if (!reservation) return null;

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "d MMMM yyyy", { locale: fr });
    } catch {
      return dateString;
    }
  };

  const formatDateTime = (dateString) => {
    try {
      return format(new Date(dateString), "d MMMM yyyy 'à' HH:mm", { locale: fr });
    } catch {
      return dateString;
    }
  };

  const getStatutBadge = (statut) => {
    switch (statut) {
      case "en_attente":
        return <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold border-2 border-yellow-200">En attente</span>;
      case "confirmee":
        return <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold border-2 border-green-200">Confirmée</span>;
      case "traitee":
        return <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold border-2 border-blue-200">Traitée</span>;
      default:
        return <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-bold">{statut}</span>;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Overlay */}
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
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            
            {/* Header */}
            <div className="sticky top-0 bg-primary text-white px-8 py-6 flex justify-between items-center rounded-t-3xl">
              <div>
                <h2 className="text-2xl font-black mb-1">Détails de la réservation</h2>
                <p className="text-white/70 text-sm">#{reservation.id}</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenu */}
            <div className="p-8 space-y-6">
              
              {/* Statut */}
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Statut</span>
                {getStatutBadge(reservation.statut)}
              </div>

              {/* Informations client */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  Informations client
                </h3>

                <div className="space-y-3 bg-gray-50 rounded-2xl p-6">
                  
                  {/* Nom */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <User size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Nom complet</p>
                      <p className="text-sm font-semibold text-gray-800">{reservation.nom}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Email</p>
                      <a
                        href={`mailto:${reservation.email}`}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        {reservation.email}
                      </a>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Téléphone</p>
                      <a
                        href={`tel:${reservation.telephone}`}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        {reservation.telephone}
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Détails du voyage */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  Détails du voyage
                </h3>

                <div className="space-y-3 bg-gray-50 rounded-2xl p-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Destination</p>
                      <p className="text-sm font-semibold text-gray-800">{reservation.destination}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <Calendar size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Dates</p>
                      <p className="text-sm font-semibold text-gray-800">
                        Du {formatDate(reservation.dateDebut)} au {formatDate(reservation.dateFin)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <Users size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Nombre de personnes</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {reservation.nombrePersonnes} personne{reservation.nombrePersonnes > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Message */}
              {reservation.message && (
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MessageSquare size={20} className="text-primary" />
                    Message du client
                  </h3>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {reservation.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Informations système */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={14} />
                  <span>Réservation reçue le {formatDateTime(reservation.createdAt)}</span>
                </div>

                {reservation.updatedAt && (
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <Clock size={14} />
                    <span>Dernière modification le {formatDateTime(reservation.updatedAt)}</span>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReservationDetailsModal;