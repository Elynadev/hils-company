# 🚀 Guide de Déploiement - Hils Groupe

## Préparation avant déploiement

### 1. Vérifier que tout fonctionne localement

```bash
# Installer les dépendances
npm install

# Tester en développement
npm run dev

# Créer un build de production
npm run build

# Tester le build
npm run preview
```

### 2. Vérifier les fichiers

✅ Tous les fichiers de configuration sont présents :
- `vite.config.js` - Configuration Vite optimisée
- `vercel.json` - Configuration Vercel
- `netlify.toml` - Configuration Netlify
- `public/_redirects` - Redirections pour SPA
- `.gitignore` - Fichiers à ignorer

## 🌐 Option 1 : Déploiement sur Vercel (Recommandé)

### Via l'interface web

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "New Project"
4. Importez votre repository `hils-company`
5. Vercel détecte automatiquement Vite
6. Cliquez sur "Deploy"
7. ✅ Votre site est en ligne !

### Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration Vercel

- **Framework Preset** : Vite
- **Build Command** : `npm run build`
- **Output Directory** : `dist`
- **Install Command** : `npm install`

## 🌐 Option 2 : Déploiement sur Netlify

### Via l'interface web

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "Add new site" > "Import an existing project"
4. Sélectionnez votre repository
5. Configuration :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
6. Cliquez sur "Deploy site"
7. ✅ Votre site est en ligne !

### Via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy

# Déployer en production
netlify deploy --prod
```

## 🌐 Option 3 : GitHub Pages

### Configuration

1. Ajoutez dans `package.json` :

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

2. Installez gh-pages :

```bash
npm install --save-dev gh-pages
```

3. Modifiez `vite.config.js` :

```javascript
export default defineConfig({
  base: '/hils-company/', // Nom de votre repo
  // ... reste de la config
})
```

4. Déployez :

```bash
npm run deploy
```

5. Activez GitHub Pages dans les settings du repo :
   - Settings > Pages
   - Source : gh-pages branch
   - ✅ Site disponible sur : `https://username.github.io/hils-company/`

## 🌐 Option 4 : Hébergement traditionnel (cPanel, etc.)

### Étapes

1. Créez le build :

```bash
npm run build
```

2. Le dossier `dist/` contient tous les fichiers

3. Uploadez le contenu de `dist/` via FTP/SFTP

4. Configurez le serveur pour rediriger toutes les routes vers `index.html`

### Configuration Apache (.htaccess)

Créez un fichier `.htaccess` dans le dossier `dist/` :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Configuration Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🔧 Configuration du domaine personnalisé

### Vercel

1. Allez dans Project Settings > Domains
2. Ajoutez votre domaine : `www.hilsgroupe.com`
3. Configurez les DNS selon les instructions

### Netlify

1. Allez dans Site settings > Domain management
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions

### DNS Configuration type

```
Type    Name    Value
A       @       76.76.21.21 (exemple Vercel)
CNAME   www     cname.vercel-dns.com
```

## 📊 Après le déploiement

### Vérifications

✅ Le site se charge correctement
✅ Toutes les pages sont accessibles
✅ Les images s'affichent
✅ Les formulaires fonctionnent
✅ La navigation fonctionne
✅ Le site est responsive (mobile/tablette/desktop)

### Optimisations

1. **Activer HTTPS** (automatique sur Vercel/Netlify)
2. **Configurer le cache** (déjà configuré dans netlify.toml)
3. **Ajouter Google Analytics** (optionnel)
4. **Configurer un CDN** (automatique sur Vercel/Netlify)

## 🐛 Résolution de problèmes

### Les routes ne fonctionnent pas (404)

- Vérifiez que `_redirects` est dans `public/`
- Vérifiez la configuration du serveur
- Pour Vercel : vérifiez `vercel.json`
- Pour Netlify : vérifiez `netlify.toml`

### Les images ne s'affichent pas

- Vérifiez les chemins d'import
- Les images doivent être dans `src/assets/` ou `public/`
- Utilisez des imports relatifs

### Build échoue

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Performance lente

- Vérifiez la taille des images (optimisez-les)
- Activez la compression gzip
- Utilisez le lazy loading

## 📞 Support

Pour toute question :
- Email : contact@hilsgroupe.com
- Documentation Vite : https://vitejs.dev
- Documentation Vercel : https://vercel.com/docs
- Documentation Netlify : https://docs.netlify.com

---

✅ **Votre site est prêt à être déployé !**
