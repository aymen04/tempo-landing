# 🚀 Optimisation de la Landing Page

## ✅ Déjà fait

1. **Logo optimisé** : 2MB → 52KB (40x plus léger !)
2. **Code mis à jour** pour supporter MP4 + fallback MOV
3. **Gestion d'erreur** : Si la vidéo ne charge pas, le site s'affiche quand même

---

## 📹 Étape suivante : Ajouter votre vidéo MP4

### 1. Convertissez votre vidéo en MP4

Placez votre fichier MP4 dans le dossier :
```
/Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets/
```

Nommez-le : **`logo-animation.mp4`**

### 2. Conseils pour optimiser la vidéo

Pour que la vidéo charge rapidement :

**Option A - En ligne (facile) :**
1. Allez sur https://www.freeconvert.com/video-compressor
2. Uploadez votre vidéo MOV
3. Choisissez "MP4" et compression "Medium"
4. Téléchargez le résultat
5. Renommez en `logo-animation.mp4`

**Option B - Avec ffmpeg (si installé) :**
```bash
cd /Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets/
ffmpeg -i logo-animation.mov -vcodec h264 -acodec aac -strict -2 -b:v 1M logo-animation.mp4
```

**Taille recommandée :** Max 1-2MB pour la vidéo

### 3. Vérifiez

Après avoir ajouté le MP4 :
```bash
cd /Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets/
ls -lh logo-animation.*
```

Vous devriez voir :
- `logo-animation.mov` (4.4MB) - garde comme backup
- `logo-animation.mp4` (idéalement < 2MB) - utilisé sur le site

---

## 🎯 Résultat attendu

Quand vous rechargez le site (http://localhost:5173) :

1. ✅ **Animation d'ouverture** : Vidéo du logo pendant 3-4 secondes
2. ✅ **Transition fluide** : Fondu vers la landing page
3. ✅ **Chargement rapide** : < 2 secondes

---

## 🐛 Dépannage

### La vidéo ne s'affiche toujours pas ?

1. **Vérifiez la console du navigateur** (F12 → Console)
   - S'il y a une erreur de chargement vidéo, elle apparaîtra

2. **Vérifiez que le fichier existe :**
   ```bash
   ls -la /Users/aymenadline/Desktop/TEMPO-LP/tempo-landing/public/assets/logo-animation.mp4
   ```

3. **Testez dans un autre navigateur**
   - Chrome, Firefox, Safari

4. **Relancez le serveur :**
   ```bash
   # CTRL+C pour arrêter
   npm run dev
   ```

### Le site est encore lent ?

1. **Vidéo trop lourde** : Compressez davantage (objectif < 1MB)
2. **Cache navigateur** : CMD+SHIFT+R (force refresh)
3. **Connexion internet** : Testez avec une meilleure connexion

---

## 📊 Performances actuelles

- Logo : ✅ 52KB (optimisé)
- Vidéo MOV : ⚠️ 4.4MB (à remplacer par MP4)
- Vidéo MP4 : ❌ Pas encore ajoutée

**Objectif :**
- Logo : ✅ < 100KB
- Vidéo : 🎯 < 2MB

---

## 💡 Alternative : Animation CSS sans vidéo

Si la vidéo reste trop lourde, on peut créer une belle animation avec juste le logo PNG + CSS :

- Zoom progressif
- Rotation subtile
- Effet de brillance

Voulez-vous cette option ? Dites-le moi !
