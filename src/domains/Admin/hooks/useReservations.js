import { useState, useEffect, useCallback } from "react";
import { reservationsService } from "../services/reservationsService";

export const useReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtreStatut, setFiltreStatut] = useState("toutes");



  const loadReservations = useCallback(() => {
    try {
      setIsLoading(true);
      const data = reservationsService.getByStatut(filtreStatut);
      setReservations(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [filtreStatut]);

  useEffect(() => {
    loadReservations();
  }, [loadReservations]);

  
  const updateStatut = useCallback((id, nouveauStatut) => {
    try {
      const updated = reservationsService.updateStatut(id, nouveauStatut);
      setReservations((prev) =>
        prev.map((res) => (res.id === id ? updated : res))
      );
      return { success: true, data: updated };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  }, []);

  
  const deleteReservation = useCallback((id) => {
    try {
      reservationsService.delete(id);
      setReservations((prev) => prev.filter((res) => res.id !== id));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  }, []);

  return {
    reservations,
    isLoading,
    error,
    filtreStatut,
    setFiltreStatut,
    updateStatut,
    deleteReservation,
    reload: loadReservations,
  };
};