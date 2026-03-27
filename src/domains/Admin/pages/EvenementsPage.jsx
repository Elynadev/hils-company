import { useState } from "react";
import { Plus, Calendar } from "lucide-react";
import { useEvenements } from "../hooks/useEvenements";
import EvenementCard from "../components/Evenements/EvenementCard";
import EvenementFormModal from "../components/Evenements/EvenementFormModal";
import ConfirmModal from "../components/Common/ConfirmModal";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import EmptyState from "../components/Common/EmptyState";

const EvenementsPage = () => {
  const {
    evenements,
    isLoading,
    error,
    createEvenement,
    updateEvenement,
    deleteEvenement,
    toggleComplet,
  } = useEvenements();

  const [showFormModal, setShowFormModal] = useState(false);
  const [editingEvenement, setEditingEvenement] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // Ouvrir formulaire en mode ajout
  const handleAdd = () => {
    setEditingEvenement(null);
    setShowFormModal(true);
  };

  // Ouvrir formulaire en mode modification
  const handleEdit = (evenement) => {
    setEditingEvenement(evenement);
    setShowFormModal(true);
  };

  // Sauvegarder (ajout ou modif)
  const handleSave = (formData) => {
    if (editingEvenement) {
      updateEvenement(editingEvenement.id, formData);
    } else {
      createEvenement(formData);
    }
  };

  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setShowDeleteModal(true);
  };

  // Supprimer après confirmation
  const handleDeleteConfirm = () => {
    deleteEvenement(deletingId);
    setShowDeleteModal(false);
    setDeletingId(null);
  };

  const handleToggleComplet = (id) => {
    toggleComplet(id);
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-800 mb-2">
            Gestion des Événements
          </h1>
          <p className="text-gray-500">
            {evenements.length} événement{evenements.length > 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          <Plus size={20} />
          Nouvel événement
        </button>
      </div>

      {evenements.length === 0 ? (
        <EmptyState
          icon={Calendar}
          title="Aucun événement"
          message="Commencez par créer votre premier événement pour le rendre visible sur le site."
          actionLabel="Créer un événement"
          onAction={handleAdd}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evenements.map((evenement) => (
            <EvenementCard
              key={evenement.id}
              evenement={evenement}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              onToggleComplet={handleToggleComplet}
            />
          ))}
        </div>
      )}

      <EvenementFormModal
        isOpen={showFormModal}
        onClose={() => {
          setShowFormModal(false);
          setEditingEvenement(null);
        }}
        onSave={handleSave}
        evenement={editingEvenement}
      />

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeletingId(null);
        }}
        onConfirm={handleDeleteConfirm}
        title="Supprimer cet événement ?"
        message="Cette action est irréversible. L'événement sera définitivement supprimé et ne sera plus visible sur le site."
        confirmText="Supprimer"
        confirmColor="bg-red-500"
      />
    </div>
  );
};

export default EvenementsPage;