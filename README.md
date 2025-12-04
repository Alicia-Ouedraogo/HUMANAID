# Portfolio - Ouedraogo Alicia Lise Marion

Ce projet est un portfolio professionnel construit avec React, Vite et Tailwind CSS.

## 🚀 Installation et Lancement Local

1.  **Installer les dépendances** :
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Le site sera accessible sur `http://localhost:5173`.

## 📦 Déploiement sur GitHub Pages

Pour mettre ce site en ligne gratuitement sur GitHub :

1.  Créez un nouveau dépôt sur GitHub (par exemple nommé `portfolio`).
2.  Dans le fichier `vite.config.ts`, assurez-vous que la ligne `base` correspond au nom de votre dépôt :
    ```typescript
    base: '/portfolio/', // Si votre dépôt s'appelle "portfolio"
    ```
3.  Initialisez git et liez votre projet (si ce n'est pas déjà fait) :
    ```bash
    git init
    git add .
    git commit -m "Premier commit"
    git branch -M main
    git remote add origin https://github.com/VOTRE-USERNAME/portfolio.git
    git push -u origin main
    ```
4.  **Déployez** en une seule commande :
    ```bash
    npm run deploy
    ```

Cette commande va construire le site et le pousser sur la branche `gh-pages`. Votre site sera visible après quelques minutes à l'adresse : `https://VOTRE-USERNAME.github.io/portfolio/`.

## 📁 Fichiers Importants

*   `constants.ts` : Contient tous les textes, expériences et projets. Modifiez ce fichier pour mettre à jour le contenu.
*   `public/` : Placez votre photo (`profile.jpg`) et votre CV (`cv.pdf`) ici.
