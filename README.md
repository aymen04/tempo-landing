# 🕐 TEMPO - Landing Page

Landing page moderne et optimisée pour TEMPO, la solution intelligente de gestion d'horaires propulsée par l'IA.

## ✨ Fonctionnalités

- 🎬 **Animation d'ouverture** avec votre logo
- 🌍 **Multi-devises automatique** (CAD, MAD, EUR, USD) selon la géolocalisation
- 🎨 **Design moderne** avec animations fluides (Framer Motion)
- 📱 **100% Responsive** - parfait sur mobile, tablette et desktop
- 🚀 **Optimisé SEO** - meta tags, structured data, Open Graph
- 🤖 **Section IA** mise en avant avec exemples concrets
- 💰 **Pricing dynamique** adapté à chaque région
- 📋 **Formulaire de contact** pour collecter les leads
- ⚡ **Performance optimale** avec React + Vite

## 🎯 Sections

1. **Hero** - Accroche principale avec CTA
2. **Fonctionnalités** - 6 features clés avec animations
3. **IA** - Mise en avant des capacités d'intelligence artificielle
4. **Pricing** - 3 plans (Gratuit, Pro, Business) avec multi-devises
5. **Contact** - Formulaire de collecte de leads
6. **Footer** - Navigation et réseaux sociaux

## 🛠 Technologies

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Styling moderne
- **Framer Motion** - Animations fluides
- **ipapi.co** - Détection géographique

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📦 Structure du projet

```
tempo-landing/
├── public/
│   └── assets/
│       ├── logo.png              # Logo TEMPO
│       └── logo-animation.mov    # Vidéo d'animation
├── src/
│   ├── components/
│   │   ├── OpeningAnimation.jsx  # Animation d'ouverture
│   │   ├── HeroSection.jsx       # Section hero
│   │   ├── FeaturesSection.jsx   # Fonctionnalités
│   │   ├── AISection.jsx         # Section IA
│   │   ├── PricingSection.jsx    # Tarifs multi-devises
│   │   ├── ContactSection.jsx    # Formulaire contact
│   │   └── Footer.jsx            # Footer
│   ├── hooks/
│   │   └── useGeolocation.js     # Hook de détection géo
│   ├── App.jsx                   # Composant principal
│   ├── main.jsx                  # Point d'entrée
│   └── index.css                 # Styles globaux
├── index.html                    # HTML avec SEO
└── tailwind.config.js            # Config Tailwind
```

## 🎨 Personnalisation

### Couleurs

Les couleurs de la marque sont définies dans `tailwind.config.js`:

```javascript
colors: {
  tempo: {
    primary: '#8B7D6B',   // Beige principal
    dark: '#3D3D3D',      // Gris foncé
    light: '#F5F3F0',     // Beige clair
    accent: '#D4A574',    // Accent doré
  }
}
```

### Pricing

Modifier les prix dans `src/hooks/useGeolocation.js`:

```javascript
export const PRICING = {
  free: { CAD: 0, MAD: 0, EUR: 0, USD: 0 },
  pro: { CAD: 39, MAD: 299, EUR: 29, USD: 35 },
  business: { CAD: 99, MAD: 899, EUR: 79, USD: 89 }
};
```

## 📊 SEO

La landing page est optimisée pour le référencement :

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Canonical URLs
- ✅ Alt tags sur les images
- ✅ Semantic HTML

## 🌍 Multi-régions

Le site détecte automatiquement la région via géolocalisation IP et adapte :

- 🇨🇦 **Canada** → Prix en CAD $
- 🇲🇦 **Maroc** → Prix en MAD dh
- 🇪🇺 **Europe** → Prix en EUR €
- 🌎 **Autres** → Prix en USD $

## 📝 Prochaines étapes

### Intégrations recommandées

1. **Analytics**
   ```bash
   npm install @vercel/analytics
   # ou Google Analytics
   ```

2. **Formulaire de contact**
   - Connecter à votre backend
   - Ou utiliser un service comme FormSpree, Netlify Forms
   - Ou intégrer directement avec votre CRM

3. **Newsletter**
   ```bash
   npm install @mailchimp/mailchimp_marketing
   # ou ConvertKit, Brevo (Sendinblue)
   ```

4. **Chat en direct**
   - Intercom, Crisp, Tawk.to

### Déploiement

**Vercel** (Recommandé - gratuit)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages**
```bash
npm run build
# Puis pusher le dossier dist/
```

## 🔧 Configuration du formulaire

Pour connecter le formulaire de contact à votre système, modifiez `src/components/ContactSection.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  // Remplacer par votre endpoint API
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};
```

## 📱 Applications mobiles

Le site mentionne des apps iOS et Android. Quand elles seront prêtes, ajoutez les liens dans le Footer.

## 🎥 Vidéo d'animation

Le site utilise votre vidéo `logo-animation.mov`. Si vous voulez :
- Changer la durée : modifiez le timeout dans `OpeningAnimation.jsx`
- Désactiver l'animation : commentez la ligne dans `App.jsx`

## 💡 Conseils marketing

1. **A/B Testing** - Testez différents CTA, titres, prix
2. **Heatmaps** - Utilisez Hotjar pour voir comment les visiteurs naviguent
3. **Vitesse** - Optimisez les images avec TinyPNG
4. **Social Proof** - Ajoutez des témoignages clients dès que possible
5. **Blog** - Créez du contenu SEO sur la gestion d'horaires

## 📞 Support

Pour toute question sur cette landing page, consultez :
- [Documentation React](https://react.dev)
- [Documentation Vite](https://vitejs.dev)
- [Documentation TailwindCSS](https://tailwindcss.com)
- [Documentation Framer Motion](https://www.framer.com/motion)

## 📄 License

© 2025 TEMPO. Tous droits réservés.

---

Créé avec ❤️ pour TEMPO
