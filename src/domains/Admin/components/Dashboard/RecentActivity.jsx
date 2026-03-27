import { motion } from "framer-motion";
import { User, Calendar, MapPin, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const RecentActivity = ({ reservations, evenements }) => {
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
        return "bg-yellow-100 text-yellow-700";
      case "confirmee":
        return "bg-green-100 text-green-700";
      case "traitee":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-black text-gray-800 flex items-center gap-2">
            <User size={20} className="text-primary" />
            Dernières réservations
          </h3>
          <span className="text-sm text-gray-400">
            {reservations.length} récente{reservations.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="space-y-3">
          {reservations.length === 0 ? (
            <p className="text-center text-gray-400 py-8">Aucune réservation récente</p>
          ) : (
            reservations.slice(0, 5).map((res, index) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">{res.nom}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin size={12} className="text-gray-400" />
                    <p className="text-xs text-gray-500">{res.destination}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getStatutColor(res.statut)}`}>
                  {res.statut === "en_attente" ? "En attente" : res.statut === "confirmee" ? "Confirmée" : "Traitée"}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-black text-gray-800 flex items-center gap-2">
            <Calendar size={20} className="text-primary" />
            Prochains événements
          </h3>
          <span className="text-sm text-gray-400">
            {evenements.length} à venir
          </span>
        </div>

        <div className="space-y-3">
          {evenements.length === 0 ? (
            <p className="text-center text-gray-400 py-8">Aucun événement à venir</p>
          ) : (
            evenements.slice(0, 3).map((evt, index) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">{evt.nom}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={12} className="text-gray-400" />
                    <p className="text-xs text-gray-500">{formatDate(evt.date)}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  evt.estComplet ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                }`}>
                  {evt.estComplet ? "Complet" : "Disponible"}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RecentActivity;