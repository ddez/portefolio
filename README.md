# Portfolio

Votre mission est de créer un portfolio en utilisant React et d'implémenter différentes sections essentielles, tout en pratiquant la manipulation de React avec Vite.js, l'utilisation de React Bootstrap, la création de composants fonctionnels, le passage de props, la structuration d’un projet React et l’intégration de librairies externes.

## Consigne

1. Commencez par initier un repository Gitlab/Github, puis initier un projet React en utilisant ViteJs
2. Création des composants
3. Dans le dossier ./src/components, créez les composants nécessaires pour chaque section du portfolio.
   Voici les composants à créer :

- Accueil.jsx : Introduction, nom, fonction, message d’accueil.
- Projets.jsx : Titre, description, technologies utilisées, lien vers le code ou une démo.
- APropos.jsx : Brève présentation personnelle, parcours, motivations.
- Formation.jsx : : Diplômes, certifications ou formations suivies.
- Competences.jsx : Liste de compétences techniques (langages, outils, frameworks, niveau…) 10 minimums.
- Contact : Informations de contact (email et/ou téléphone).

Importer l'ensemble dans le fichier App.js

Dans chaque composant, utilisez les éléments React appropriés pour structurer et afficher le contenu de chaque section. Vous pouvez utiliser des composants fonctionnels pour chaque section. Assurez-vous d'exporter ces composants pour pouvoir les utiliser ailleurs dans votre application.

---

## Initier un nouveau projet React

Créer un dépot vide github
Cloner le dépot en local

Création du nouveau projet Vite/React:

```bash
cd [NOM-DU-PROJET]
npm create vite@latest . -- --template react
npm i
```

## Nettoyer le projet de base

1. vider le dossier /public/
2. vider le dossier /src/assets/
3. dans src/
   - supprimer le fichier index.css
   - supprimer le fichier App.css
4. Remplacer le contenu de main.jsx par :

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
        <App /> {" "}
  </StrictMode>,
);
```

5. Remplacer le contenu de App.jsx par

```JSX
function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
```

6. Remplacer le contenu de index.html par :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/portefolio.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portefolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Installation de React-Bootstrap

```BASH
cd [NOM-DU-PROJET]
npm install react-bootstrap bootstrap
```

Importer le Bootstrap minifié dans le fichier main.jsx
(avant la ligne "import App from './App.jsx'")

```JSX
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
```
## Installation de Prettier

```BASH
cd [NOM-DU-PROJET]
npm install --save-dev --save-exact prettier
```
puis dans le fichier package.json , dans la section "scripts", ajouter l'entrée:
"format": "prettier --write ."

```BASH
cd [NOM-DU-PROJET]
npm run format
```
