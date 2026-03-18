import { useState, useEffect, useCallback } from "react";
import { evenementsService } from "../services/evenementsService";

export const useEvenements = () => {
  const [evenements, setEvenements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const loadEvenements = useCallback(() => {
    try {
      setIsLoading(true);
      const data = evenementsService.getAll();
      setEvenements(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEvenements();
  }, [loadEvenements]);

  const createEvenement = useCallback((evenementData) => {
    try {
      const newEvenement = evenementsService.create(evenementData);
      setEvenements((prev) => [...prev, newEvenement]);
      return { success: true, data: newEvenement };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  }, []);

  const updateEvenement = useCallback((id, evenementData) => {
    try {
      const updated = evenementsService.update(id, evenementData);
      setEvenements((prev) =>
        prev.map((evt) => (evt.id === id ? updated : evt))
      );
      return { success: true, data: updated };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  }, []);

  const deleteEvenement = useCallback((id) => {
    try {
      evenementsService.delete(id);
      setEvenements((prev) => prev.filter((evt) => evt.id !== id));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  }, []);

  const toggleComplet = useCallback((id) => {
    try {
      const updated = evenementsService.toggleComplet(id);
      setEvenements((prev) =>
        prev.map((evt) => (evt.id === id ? updated : evt))
      );
      return { success: true, data: updated };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  }, []);

  return {
    evenements,
    isLoading,
    error,
    createEvenement,
    updateEvenement,
    deleteEvenement,
    toggleComplet,
    reload: loadEvenements,
  };
};