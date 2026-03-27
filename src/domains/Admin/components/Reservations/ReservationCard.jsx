import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Calendar, Users, Eye, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const ReservationCard = ({ reservation, onViewDetails, onDelete, onUpdateStatut }) => {
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "d MMM yyyy", { locale: fr });
    } catch {
      return dateString;
    }
  };

  const getStatutColor = (statut) => {
    switch (statut) {
      case "en_attente":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "confirmee":
        return "bg-green-100 text-green-700 border-green-200";
      case "traitee":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatutLabel = (statut) => {
    switch (statut) {
      case "en_attente":
        return "En attente";
      case "confirmee":
        return "Confirmée";
      case "traitee":
        return "Traitée";
      default:
        return statut;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl shadow-md border-2 border-gray-100 hover:border-primary transition-all duration-300 p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <User size={18} className="text-primary" />
            {reservation.nom}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Reçue le {format(new Date(reservation.createdAt), "d MMMM yyyy à HH:mm", { locale: fr })}
          </p>
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full border-2 ${getStatutColor(reservation.statut)}`}>
          {getStatutLabel(reservation.statut)}
        </span>
      </div>


      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail size={16} className="text-primary shrink-0" />
          <a href={`mailto:${reservation.email}`} className="hover:text-primary hover:underline">
            {reservation.email}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone size={16} className="text-primary shrink-0" />
          <a href={`tel:${reservation.telephone}`} className="hover:text-primary hover:underline">
            {reservation.telephone}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} className="text-primary shrink-0" />
          <span>{reservation.destination}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} className="text-primary shrink-0" />
          <span>
            {formatDate(reservation.dateDebut)} → {formatDate(reservation.dateFin)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users size={16} className="text-primary shrink-0" />
          <span>{reservation.nombrePersonnes} personne{reservation.nombrePersonnes > 1 ? "s" : ""}</span>
        </div>
      </div>


      {reservation.message && (
        <div className="bg-gray-50 rounded-xl p-3 mb-4">
          <p className="text-xs text-gray-400 mb-1 font-medium">Message :</p>
          <p className="text-sm text-gray-600 line-clamp-2">{reservation.message}</p>
        </div>
      )}

      <div className="flex gap-2 pt-4 border-t border-gray-100">
        <select
          value={reservation.statut}
          onChange={(e) => onUpdateStatut(reservation.id, e.target.value)}
          className="flex-1 px-3 py-2 text-sm border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-medium"
        >
          <option value="en_attente">En attente</option>
          <option value="confirmee">Confirmée</option>
          <option value="traitee">Traitée</option>
        </select>

        <button
          onClick={() => onViewDetails(reservation)}
          className="w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl transition-colors"
          title="Voir les détails"
        >
          <Eye size={18} />
        </button>

        <button
          onClick={() => onDelete(reservation.id)}
          className="w-10 h-10 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-700 rounded-xl transition-colors"
          title="Supprimer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ReservationCard;