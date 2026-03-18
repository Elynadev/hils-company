const STORAGE_KEY = 'hils_evenements';


const INITIAL_EVENEMENTS = [
  {
    id: 1,
    nom: "Festival Vaudou",
    lieu: "Ouidah, Bénin",
    date: "2026-01-10",
    description: "Le plus grand festival vaudou d'Afrique de l'Ouest",
    type: "Culture",
    nbParticipants: "5000+",
    duree: "3 jours",
    image: "/assets/img/festival-vaudou.jpg",
    estComplet: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    nom: "Carnaval de Ouidah",
    lieu: "Ouidah, Bénin",
    date: "2026-02-15",
    description: "Célébration colorée avec défilés et musique traditionnelle",
    type: "Culture",
    nbParticipants: "3000+",
    duree: "2 jours",
    image: "/assets/img/carnaval.jpg",
    estComplet: false,
    createdAt: new Date().toISOString(),
  },
];

export const evenementsService = {
  init: () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_EVENEMENTS));
    }
  },

  getAll: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  getById: (id) => {
    const evenements = evenementsService.getAll();
    return evenements.find((evt) => evt.id === parseInt(id));
  },

  create: (evenement) => {
    const evenements = evenementsService.getAll();
    
    const newEvenement = {
      ...evenement,
      id: Date.now(), 
      createdAt: new Date().toISOString(),
      estComplet: false,
    };
    
    evenements.push(newEvenement);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evenements));
    
    return newEvenement;
  },

  update: (id, evenementData) => {
    const evenements = evenementsService.getAll();
    const index = evenements.findIndex((evt) => evt.id === parseInt(id));
    
    if (index === -1) {
      throw new Error("Événement non trouvé");
    }
    
    evenements[index] = {
      ...evenements[index],
      ...evenementData,
      updatedAt: new Date().toISOString(),
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evenements));
    
    return evenements[index];
  },

  delete: (id) => {
    const evenements = evenementsService.getAll();
    const filtered = evenements.filter((evt) => evt.id !== parseInt(id));
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    
    return { success: true, id };
  },

  toggleComplet: (id) => {
    const evenements = evenementsService.getAll();
    const index = evenements.findIndex((evt) => evt.id === parseInt(id));
    
    if (index === -1) {
      throw new Error("Événement non trouvé");
    }
    
    evenements[index].estComplet = !evenements[index].estComplet;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evenements));
    
    return evenements[index];
  },
};

evenementsService.init();