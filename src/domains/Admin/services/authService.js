// Utilisateur admin par défaut
const ADMIN_CREDENTIALS = {
  email: "admin@hilscompany.com",
  password: "Hils2026!",
};

export const authService = {
  login: (email, password) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const user = {
        id: 1,
        email: email,
        nom: "Administrateur",
        role: "admin",
        loginAt: new Date().toISOString(),
      };
      localStorage.setItem("admin_user", JSON.stringify(user));
      localStorage.setItem("admin_token", "fake-jwt-token-" + Date.now());
      return { success: true, user };
    }
    return { success: false, error: "Identifiants incorrects" };
  },

  logout: () => {
    localStorage.removeItem("admin_user");
    localStorage.removeItem("admin_token");
  },

  // Vérifier si connecté
  isAuthenticated: () => {
    return !!localStorage.getItem("admin_token");
  },

  // Récupérer l'utilisateur actuel
  getCurrentUser: () => {
    const user = localStorage.getItem("admin_user");
    return user ? JSON.parse(user) : null;
  },
};