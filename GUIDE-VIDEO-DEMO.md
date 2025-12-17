# 🎥 Guide : Ajouter votre vidéo de démo

## ✨ Ce qui a été créé

Une **section Démo professionnelle** avec :
- 📱 Mockup de téléphone réaliste (iPhone style)
- ▶️ Lecteur vidéo intégré avec bouton play/pause
- ✨ Animations fluides
- 📝 Liste des fonctionnalités mises en avant
- 🎨 Design moderne et responsive

---

## 📹 Étape 1 : Préparer votre vidéo

### Filmez votre démo

**Recommandations :**
- Format : Vertical (portrait 9:16) ou carré (1:1)
- Résolution : 1080x1920px (idéal) ou 720x1280px (min)
- Durée : 1-3 minutes max
- Montrez les fonctionnalités clés :
  - Connexion
  - Navigation
  - Création d'horaire
  - Demande de congé
  - IA en action
  - Notifications

### Outils pour enregistrer votre écran mobile

**Sur iPhone :**
1. Réglages → Centre de contrôle → Ajouter "Enregistrement d'écran"
2. Balayez vers le bas
3. Appuyez longuement sur le bouton d'enregistrement
4. Choisissez "Microphone" si vous voulez du son
5. Appuyez sur "Démarrer l'enregistrement"

**Sur Android :**
1. Panneau de notifications → Enregistreur d'écran
2. Ou téléchargez "AZ Screen Recorder"

**Alternative - Simulateur :**
- Utilisez l'émulateur sur votre Mac/PC
- Enregistrez avec QuickTime (Mac) ou OBS Studio

---

## 🎬 Étape 2 : Optimiser votre vidéo

### Convertir en MP4

**Option 1 - En ligne :**
1. https://www.freeconvert.com/video-compressor
2. Uploadez votre vidéo
3. Format : MP4
4. Qualité : Medium (équilibre poids/qualité)
5. Téléchargez

**Option 2 - Avec ffmpeg (terminal Mac) :**
```bash
# Installer ffmpeg si pas déjà fait
brew install ffmpeg

# Optimiser la vidéo
ffmpeg -i votre-video.mov \
  -vf "scale=720:1280:force_original_aspect_ratio=decrease,pad=720:1280:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -crf 28 -preset slow \
  -c:a aac -b:a 128k \
  demo-video.mp4
```

**Taille cible :** 5-10MB max

---

## 📂 Étape 3 : Ajouter la vidéo au projet

### 1. Placez votre vidéo

```bash
# Copiez votre vidéo dans le dossier assets
cp /chemin/vers/votre-video.mp4 /Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets/demo-video.mp4
```

Ou glissez-déposez votre fichier dans :
```
tempo-landing/public/assets/demo-video.mp4
```

### 2. (Optionnel) Créez une miniature

Créez une image de prévisualisation (avant que la vidéo se lance) :

```bash
# Extraire une frame de la vidéo comme thumbnail
ffmpeg -i demo-video.mp4 -ss 00:00:02 -vframes 1 demo-thumbnail.jpg
```

Ou prenez un screenshot de votre app et placez-le :
```
tempo-landing/public/assets/demo-thumbnail.jpg
```

### 3. Vérifiez

```bash
cd /Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets
ls -lh demo-*
```

Vous devriez voir :
- `demo-video.mp4` (5-10MB)
- `demo-thumbnail.jpg` (optionnel, <100KB)

---

## 🎨 Étape 4 : Personnaliser (optionnel)

### Changer les émojis par des icônes

Si vous voulez remplacer les émojis (📱📅✈️🤖🔔📊) dans la liste des fonctionnalités, modifiez le fichier :

[src/components/DemoSection.jsx](src/components/DemoSection.jsx:127-164)

Remplacez les `icon: '📱'` par des composants SVG depuis `Icons.jsx`

### Modifier la liste des fonctionnalités

Dans [DemoSection.jsx](src/components/DemoSection.jsx:127-164), ajustez le tableau :

```javascript
{
  title: 'Votre fonctionnalité',
  description: 'Description de la fonctionnalité',
  icon: '🎯'
}
```

---

## 🚀 Étape 5 : Tester

1. **Rechargez le site** : http://localhost:5173
2. **Scrollez jusqu'à la section "Découvrez l'application en vidéo"**
3. **Cliquez sur le bouton Play**
4. **Vérifiez** :
   - ✅ La vidéo se charge
   - ✅ Elle joue dans le mockup de téléphone
   - ✅ Le bouton pause fonctionne
   - ✅ Le design est responsive (testez sur mobile)

---

## 🐛 Dépannage

### La vidéo ne s'affiche pas

**Vérifiez que le fichier existe :**
```bash
ls -la /Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets/demo-video.mp4
```

**Vérifiez la console du navigateur** (F12 → Console)
- Erreur 404 ? → Le fichier n'est pas au bon endroit
- Erreur de codec ? → Reconvertissez en MP4 avec H.264

**Format vidéo incompatible :**
```bash
# Convertir avec codec compatible tous navigateurs
ffmpeg -i votre-video.mov -c:v libx264 -c:a aac demo-video.mp4
```

### La vidéo est trop grande (lente)

**Compressez davantage :**
```bash
ffmpeg -i demo-video.mp4 -vf "scale=720:-2" -c:v libx264 -crf 32 demo-video-compressed.mp4
```

### La vidéo ne rentre pas bien dans le téléphone

Ajustez dans [DemoSection.jsx](src/components/DemoSection.jsx:73), ligne `object-cover` :
- `object-cover` → remplit tout (peut rogner)
- `object-contain` → garde les proportions
- `object-fill` → étire

---

## 💡 Conseils pour une démo efficace

### Script de vidéo recommandé (2 min)

**Intro (10s) :**
- Écran d'accueil
- Connexion rapide

**Fonctionnalités principales (1m30) :**
- Navigation intuitive (15s)
- Créer un planning (20s)
- Soumettre une demande de congé (15s)
- IA : suggestions automatiques (20s)
- Notifications en temps réel (10s)
- Rapports visuels (10s)

**Conclusion (20s) :**
- Vue d'ensemble
- CTA vers l'essai gratuit

### Astuces de tournage

- 🎤 Ajoutez une voix off explicative
- ✨ Mettez en évidence les actions (cercles, flèches)
- 🎵 Musique de fond (optionnel, mais professionnel)
- 🎬 Transitions fluides entre les écrans
- 📱 Gardez l'interface propre (pas de notifications parasites)

---

## 🎬 Outils de montage recommandés

**Gratuits :**
- **CapCut** (mobile + desktop) - Très facile
- **DaVinci Resolve** (desktop) - Pro gratuit
- **iMovie** (Mac) - Simple et efficace

**Payants :**
- **Adobe Premiere Pro** - Standard industrie
- **Final Cut Pro** (Mac) - Excellent pour Mac

---

## 📍 Position de la section

La section Démo est placée **entre** :
- Section IA (sombre)
- Section Pricing

C'est stratégique : après avoir vu les capacités IA, on montre l'app en action !

---

## ✅ Checklist finale

- [ ] Vidéo filmée (1-3 min)
- [ ] Vidéo optimisée en MP4 (<10MB)
- [ ] Fichier placé : `public/assets/demo-video.mp4`
- [ ] Thumbnail créée (optionnel) : `public/assets/demo-thumbnail.jpg`
- [ ] Testé sur desktop
- [ ] Testé sur mobile
- [ ] Vidéo se lit correctement
- [ ] Pas d'émojis si vous voulez du pro

---

Besoin d'aide ? Dites-moi où vous bloquez ! 🚀
