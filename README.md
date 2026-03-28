# Hils Company - Site Web Officiel

Site web professionnel pour Hils Company présentant nos trois domaines d'activité : Communication, Tourisme et Événementiel.

## 🚀 Technologies

- **React 19** - Framework UI
- **Vite** - Build tool ultra-rapide
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icônes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. Connectez votre repo GitHub à Vercel
2. Vercel détectera automatiquement Vite
3. Déployez en un clic !

Ou via CLI :
```bash
npm install -g vercel
vercel
```

### Netlify

1. Connectez votre repo à Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Déployez !

Ou via CLI :
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Déployer
npm run deploy
```

## 📁 Structure du Projet

```
hils-company/
├── src/
│   ├── assets/          # Images et ressources
│   ├── domains/         # Pages par domaine
│   │   ├── communication/
│   │   ├── Events/
│   │   └── Tourisme/
│   ├── Partagé/         # Composants partagés
│   ├── pages/           # Pages principales
│   └── routes/          # Configuration des routes
├── public/              # Fichiers statiques
└── dist/                # Build de production
```

## 🎨 Domaines

### 1. Communication
- Stratégies de communication
- Identité visuelle
- Production audiovisuelle
- Marketing digital

### 2. Tourisme
- Voyages organisés
- Expériences authentiques
- Destinations africaines

### 3. Événementiel
- Organisation d'événements
- African Conscience Chill
- Services d'hôtesses

## 🔧 Configuration

### Variables d'environnement (optionnel)

Créez un fichier `.env` :
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=contact@hilsCompany.com
```

### Personnalisation

- **Couleurs** : `tailwind.config.js`
- **Routes** : `src/routes/AppRoutes.jsx`
- **Images** : `src/assets/img/`

## 📱 Responsive

Le site est 100% responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance

- Code splitting automatique
- Lazy loading des images
- Minification CSS/JS
- Optimisation des assets

## 📄 License

© 2024 Hils Company. Tous droits réservés.

## 📞 Contact

- **Email** : contact@hilsCompany.com
- **Site** : www.hilsCompany.com
- **Téléphone** : +229 XX XX XX XX

---

Développé avec ❤️ par Hils Company
