# 🚀 Portfolio - Romain WIRTH

Mon portfolio professionnel en tant que développeur web freelance, créé avec **Next.js 15** et **React 19**. Ce site vitrine présente mes compétences, mes services et mes réalisations dans le développement web moderne.

**🌐 [Voir le portfolio en ligne](https://romainwirth.fr)**

---

## 📋 Table des matières

- [À propos du projet](#-à-propos-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technologique](#-stack-technologique)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)
- [Licence](#-licence)

---

## 📖 À propos du projet

Ce portfolio est une application web moderne qui met en avant :

- **Un profil professionnel** avec présentation et compétences
- **Une galerie de projets** filtrables (sites vitrines et applications sur-mesure)
- **Une section services** détaillant les domaines d'expertise
- **Une page de contact** avec formulaire d'email
- **Un design responsive** adapté à tous les appareils
- **Des animations fluides** avec Framer Motion
- **Des performances optimisées** avec Next.js et le Turbopack

---

## ✨ Fonctionnalités

✅ **Design moderne et responsive** – Adapté mobile, tablette et desktop  
✅ **Filtrage de projets** – Catégorisés par type (sites vitrines, applications)  
✅ **Formulaire de contact** – Validation Zod et envoi d'emails avec Resend  
✅ **Animations fluides** – Utilisation de Framer Motion et Intersection Observer  
✅ **SEO optimisé** – Métadonnées complètes et Open Graph  
✅ **Performance** – Utilisation de Next.js 15 et Turbopack  
✅ **Accessibilité** – Sémantique HTML et labels appropriés  
✅ **Styling moderne** – Tailwind CSS v4 avec utilitaires avancés

---

## 🛠 Stack technologique

### Frontend

- **Next.js** 15.5.9 – Framework React avec SSR/SSG
- **React** 19.1.0 – Librairie UI
- **React DOM** 19.1.0 – Rendu DOM
- **Tailwind CSS** v4 – Styling utility-first
- **Framer Motion** 12.23.12 – Animations

### Formulaires & Validation

- **React Hook Form** + **Resolvers** 5.2.2 – Gestion des formulaires
- **Zod** 4.1.12 – Validation de schémas

### Email & Communication

- **Resend** 6.4.0 – Service d'envoi d'emails
- **React Email** 4.3.2 – Composants email
- **@react-email/components** 0.5.7 – Templates email
- **@react-email/render** 1.4.0 – Rendu HTML email

### Icônes & Utilitaires

- **Lucide React** 0.542.0 – Icônes SVG
- **React Icons** 5.5.0 – Library d'icônes (Font Awesome, Feather, etc.)
- **React Spinners** 0.17.0 – Loaders animés
- **React Responsive** 10.0.1 – Media queries en React

### Build & Dev

- **ESLint** 9 + Config Next.js – Linting
- **Turbopack** – Build tool haute performance (intégré à Next.js 15)
- **PostCSS** 4 – Traitement CSS avancé

---

## 📦 Prérequis

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (ou `yarn`, `pnpm`, `bun`)

---

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/romainwirth/portfolio.git
cd portfolio-romain-wirth
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Resend (Service d'email)
NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key_here

# Email de destination pour les messages de contact
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

---

## 📝 Scripts disponibles

| Script          | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Lance le serveur de développement avec Turbopack |
| `npm run build` | Build pour production avec optimisations         |
| `npm start`     | Lance l'application en mode production           |
| `npm run lint`  | Vérifie le code avec ESLint                      |

---

## 📁 Structure du projet

```
portfolio-romain-wirth/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Layout root avec métadonnées
│   │   ├── page.jsx            # Page d'accueil principale
│   │   ├── globals.css         # Styles globaux
│   │   └── icon.svg            # Favicon
│   ├── components/
│   │   ├── Button/             # Composant bouton réutilisable
│   │   ├── CardObserver/       # Intersection Observer pour animations
│   │   ├── Contact/            # Section contact
│   │   ├── ContactEmail/       # Template email de contact
│   │   ├── ContactForm/        # Formulaire de contact
│   │   ├── Footer/             # Pied de page
│   │   ├── Header/             # En-tête / Hero section
│   │   ├── Label/              # Label pour formulaires
│   │   ├── Navbar/             # Barre de navigation
│   │   └── Sections/           # Sections principales
│   │       ├── About/          # Section À propos
│   │       ├── Advanced/       # Projets avancés
│   │       ├── Contact/        # Contact section
│   │       ├── Projects/       # Galerie de projets
│   │       ├── Services/       # Services proposés
│   │       ├── Stack/          # Stack technologique
│   │       └── Sections.module.css
│   ├── actions/
│   │   └── sendMail.js         # Action serveur pour envoi d'emails
│   └── libs/
│       ├── metadata.js         # Configuration des métadonnées
│       └── zod-schemas.js      # Schémas de validation
├── public/
│   ├── assets/
│   │   └── fonts/              # Polices personnalisées
│   └── projects/               # Images des projets
├── package.json
├── next.config.mjs
├── tailwind.config.js          # Configuration Tailwind CSS
├── postcss.config.mjs          # Configuration PostCSS
├── eslint.config.mjs           # Configuration ESLint
├── jsconfig.json               # Configuration JavaScript
└── README.md
```

---

## ⚙️ Configuration

### Tailwind CSS

Configuration trouvée dans `tailwind.config.js` avec :

- Variables de couleurs personnalisées
- Extensions d'espacements
- Polices customisées (Playfair Display, Raleway)

### Next.js

Configuration minimale dans `next.config.mjs` – Optimisée pour la performance avec Turbopack.

### ESLint

Configuration basée sur `eslint-config-next` pour garantir la qualité du code.

---

## 🌐 Déploiement

### Déploiement sur Vercel (recommandé)

1. **Pousser le code sur GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connecter le repository sur [Vercel](https://vercel.com)**
   - Importer le projet
   - Ajouter les variables d'environnement (`.env.local`)
   - Vercel déploiera automatiquement à chaque push

### Déploiement autre serveur

```bash
npm run build
npm start
```

L'application sera en écoute sur le port par défaut (3000) ou le port spécifié.

---

## 📧 Fonctionnalité d'Email

Le portfolio utilise **Resend** pour l'envoi d'emails :

1. Créer un compte sur [resend.com](https://resend.com)
2. Obtenir votre clé API
3. Ajouter à `.env.local` :
   ```env
   NEXT_PUBLIC_RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

Les emails sont envoyés via l'action serveur `src/actions/sendMail.js` avec validation Zod.

---

## 🎨 Personnalisation

### Modifier les informations personnelles

- **Métadonnées** : `src/app/layout.jsx`
- **Contenu des sections** : `src/components/Sections/*`
- **Projets** : `src/components/Sections/Projects/Projects.jsx`

### Modifier les couleurs

- Tailwind CSS : `tailwind.config.js`
- Styles globaux : `src/app/globals.css`

### Ajouter des polices

- Placer les fichiers `.ttf` dans `public/assets/fonts/`
- Importer dans `globals.css`

---

## 📱 Responsive Design

Le portfolio est entièrement responsive grâce à Tailwind CSS :

- **Mobile** : < 640px
- **Tablette** : ≥ 768px (md)
- **Desktop** : ≥ 1024px (lg)

---

## 🔒 SEO & Métadonnées

Le projet inclut :

- Métadonnées complètes (title, description)
- Open Graph pour réseaux sociaux
- Twitter Card
- Structure sémantique HTML
- Optimisation Core Web Vitals

---

## 🐛 Troubleshooting

### Problème : Port 3000 déjà utilisé

```bash
npm run dev -- -p 3001
```

### Problème : Erreurs Tailwind CSS

```bash
npm install
npm run dev
```

### Problème : Erreurs ESLint

```bash
npm run lint
```

---

## 📄 Licence

Ce projet est **privé**. Tous les droits sont réservés à Romain WIRTH.

---

## 📞 Contact

Pour toute question ou collaboration :

- 🌐 **Portfolio** : [romainwirth.fr](https://romainwirth.fr)
- 📧 **Email** : via le formulaire de contact du site
- 💼 **Domaines** : React, Next.js, JavaScript, WordPress

---

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) – Framework React moderne
- [Vercel](https://vercel.com) – Plateforme de déploiement
- [Tailwind CSS](https://tailwindcss.com/) – Styling utility-first
- [Framer Motion](https://www.framer.com/motion/) – Animations fluides
- [Resend](https://resend.com) – Service d'emails

---

**Fait avec 🔥 par Romain WIRTH**
