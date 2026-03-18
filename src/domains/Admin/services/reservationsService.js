const STORAGE_KEY = 'hils_reservations';

const INITIAL_RESERVATIONS = [
  {
    id: 1,
    nom: "Jean Dupont",
    email: "jean.dupont@email.com",
    telephone: "+229 97 12 34 56",
    destination: "Ganvié",
    dateDebut: "2026-04-15",
    dateFin: "2026-04-17",
    nombrePersonnes: 4,
    message: "Nous souhaitons une visite guidée en français",
    statut: "en_attente", 
    createdAt: "2026-03-10T10:30:00.000Z",
  },
  {
    id: 2,
    nom: "Marie Martin",
    email: "marie.martin@email.com",
    telephone: "+33 6 12 34 56 78",
    destination: "Cotonou",
    dateDebut: "2026-05-01",
    dateFin: "2026-05-05",
    nombrePersonnes: 2,
    message: "Premier voyage au Bénin, besoin de conseils",
    statut: "confirmee",
    createdAt: "2026-03-12T14:20:00.000Z",
  },
];

export const reservationsService = {
  init: () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_RESERVATIONS));
    }
  },

  getAll: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  getById: (id) => {
    const reservations = reservationsService.getAll();
    return reservations.find((res) => res.id === parseInt(id));
  },

  create: (reservation) => {
    const reservations = reservationsService.getAll();
    
    const newReservation = {
      ...reservation,
      id: Date.now(),
      statut: "en_attente",
      createdAt: new Date().toISOString(),
    };
    
    reservations.push(newReservation);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    
    return newReservation;
  },

  updateStatut: (id, nouveauStatut) => {
    const reservations = reservationsService.getAll();
    const index = reservations.findIndex((res) => res.id === parseInt(id));
    
    if (index === -1) {
      throw new Error("Réservation non trouvée");
    }
    
    reservations[index].statut = nouveauStatut;
    reservations[index].updatedAt = new Date().toISOString();
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    
    return reservations[index];
  },

  delete: (id) => {
    const reservations = reservationsService.getAll();
    const filtered = reservations.filter((res) => res.id !== parseInt(id));
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    
    return { success: true, id };
  },

  getByStatut: (statut) => {
    const reservations = reservationsService.getAll();
    if (statut === "toutes") return reservations;
    return reservations.filter((res) => res.statut === statut);
  },
};

reservationsService.init();