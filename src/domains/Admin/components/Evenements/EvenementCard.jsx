import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, Edit2, Trash2, CheckCircle, XCircle } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const EvenementCard = ({ evenement, onEdit, onDelete, onToggleComplet }) => {
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), "d MMMM yyyy", { locale: fr });
    } catch {
      return dateString;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-primary transition-all duration-300"
    >
      
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {evenement.image ? (
          <img
            src={evenement.image}
            alt={evenement.nom}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Calendar size={48} className="text-gray-300" />
          </div>
        )}
        
        
        <div className="absolute top-3 right-3">
          {evenement.estComplet ? (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Complet
            </span>
          ) : (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Disponible
            </span>
          )}
        </div>

        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
            {evenement.type}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-black text-gray-800 mb-3 line-clamp-2">
          {evenement.nom}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-primary shrink-0" />
            <span>{formatDate(evenement.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-primary shrink-0" />
            <span className="line-clamp-1">{evenement.lieu}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={16} className="text-primary shrink-0" />
            <span>{evenement.nbParticipants}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} className="text-primary shrink-0" />
            <span>{evenement.duree}</span>
          </div>
        </div>


        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {evenement.description}
        </p>


        <div className="flex gap-2 pt-4 border-t border-gray-100">
          <button
            onClick={() => onToggleComplet(evenement.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${
              evenement.estComplet
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-red-100 text-red-700 hover:bg-red-200"
            }`}
          >
            {evenement.estComplet ? (
              <>
                <CheckCircle size={16} />
                Réouvrir
              </>
            ) : (
              <>
                <XCircle size={16} />
                Marquer complet
              </>
            )}
          </button>

          <button
            onClick={() => onEdit(evenement)}
            className="w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl transition-colors"
          >
            <Edit2 size={18} />
          </button>

          <button
            onClick={() => onDelete(evenement.id)}
            className="w-10 h-10 flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-700 rounded-xl transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EvenementCard;