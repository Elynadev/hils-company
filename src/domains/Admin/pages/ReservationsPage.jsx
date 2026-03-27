import { useState } from "react";
import { FileText, Filter } from "lucide-react";
import { useReservations } from "../hooks/useReservations";
import ReservationCard from "../components/Reservations/ReservationCard";
import ReservationDetailsModal from "../components/Reservations/ReservationDetailsModal";
import ConfirmModal from "../components/Common/ConfirmModal";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import EmptyState from "../components/Common/EmptyState";

const ReservationsPage = () => {
  const {
    reservations,
    isLoading,
    error,
    filtreStatut,
    setFiltreStatut,
    updateStatut,
    deleteReservation,
  } = useReservations();

  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // Ouvrir modal détails
  const handleViewDetails = (reservation) => {
    setSelectedReservation(reservation);
    setShowDetailsModal(true);
  };

  // Demander confirmation suppression
  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  // Supprimer après confirmation
  const handleDeleteConfirm = () => {
    deleteReservation(deletingId);
    setShowDeleteModal(false);
    setDeletingId(null);
  };

  // Changer le statut
  const handleUpdateStatut = (id, nouveauStatut) => {
    updateStatut(id, nouveauStatut);
  };

  // Compter par statut
  const countByStatut = (statut) => {
    if (statut === "toutes") return reservations.length;
    return reservations.filter((res) => res.statut === statut).length;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
        <p className="text-red-700 font-semibold">Erreur : {error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800 mb-2">
          Gestion des Réservations
        </h1>
        <p className="text-gray-500">
          {reservations.length} réservation{reservations.length > 1 ? "s" : ""} au total
        </p>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-2xl shadow-md border-2 border-gray-100 p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Filter size={20} className="text-primary" />
          <h3 className="font-bold text-gray-800">Filtrer par statut</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { value: "toutes", label: "Toutes", color: "bg-gray-100 text-gray-700 hover:bg-gray-200" },
            { value: "en_attente", label: "En attente", color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" },
            { value: "confirmee", label: "Confirmées", color: "bg-green-100 text-green-700 hover:bg-green-200" },
            { value: "traitee", label: "Traitées", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
          ].map((filtre) => (
            <button
              key={filtre.value}
              onClick={() => setFiltreStatut(filtre.value)}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                filtreStatut === filtre.value
                  ? `${filtre.color} ring-2 ring-offset-2 ${filtre.value === 'toutes' ? 'ring-gray-300' : filtre.value === 'en_attente' ? 'ring-yellow-300' : filtre.value === 'confirmee' ? 'ring-green-300' : 'ring-blue-300'}`
                  : filtre.color
              }`}
            >
              {filtre.label} ({countByStatut(filtre.value)})
            </button>
          ))}
        </div>
      </div>

      {/* Liste des réservations */}
      {reservations.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="Aucune réservation"
          message={
            filtreStatut === "toutes"
              ? "Aucune réservation n'a encore été reçue."
              : `Aucune réservation avec le statut "${filtreStatut === 'en_attente' ? 'En attente' : filtreStatut === 'confirmee' ? 'Confirmée' : 'Traitée'}".`
          }
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              onViewDetails={handleViewDetails}
              onDelete={handleDeleteClick}
              onUpdateStatut={handleUpdateStatut}
            />
          ))}
        </div>
      )}

      {/* Modal détails */}
      <ReservationDetailsModal
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedReservation(null);
        }}
        reservation={selectedReservation}
      />

      {/* Modal confirmation suppression */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeletingId(null);
        }}
        onConfirm={handleDeleteConfirm}
        title="Supprimer cette réservation ?"
        message="Cette action est irréversible. Toutes les informations de cette réservation seront définitivement supprimées."
        confirmText="Supprimer"
        confirmColor="bg-red-500"
      />
    </div>
  );
};

export default ReservationsPage;