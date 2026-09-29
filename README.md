# Kasa - Application de location immobilière

Application web de location de logements développée avec React dans le cadre de ma formation.

## Prérequis

Avant de commencer, vérifiez que les éléments suivants sont bien installés :

* Node.js
* npm
* Docker Desktop

## Installation et démarrage

Afin de configurer le projet en local, suivez les instructions suivantes.

Dans un terminal :

1. Clonez le projet pour le récupérer :

```bash
git clone https://github.com/Kaliceh/Kasa-projet-8.git
```

2. Placez-vous dans le dossier du projet :

```bash
cd Kasa-projet-8
```

### Lancement du backend

3. Assurez-vous que **Docker Desktop est installé et démarré**.

4. Lancez le backend avec Docker :

```bash
docker compose up -d
```

> Cette commande démarre le backend de l'application.

### Lancement du frontend

5. Ouvrez un nouveau terminal et placez-vous dans le dossier frontend :

```bash
cd frontend
```

6. Installez les dépendances :

```bash
npm install
```

7. Démarrez l'application :

```bash
npm run dev
```

8. Ouvrez le lien indiqué dans le terminal, généralement :

```text
http://localhost:5173/
```

## Fonctionnalités

L'application permet notamment :

* de consulter les logements disponibles ;
* d'accéder à la fiche détaillée d'un logement ;
* de naviguer entre les différentes photos grâce au diaporama ;
* d'afficher et masquer les informations complémentaires ;
* de naviguer entre les différentes pages de l'application.

## Technologies utilisées

* React
* JavaScript
* HTML
* CSS
* Vite
* Docker

## Composants développés

Le projet comprend plusieurs composants React permettant de structurer et rendre l'application interactive.

Par exemple :

* Header
* Footer
* Slideshow
* Collapse
* Cards
* Pages de logements

## Objectif du projet

L'objectif était de développer une application web avec React en respectant une maquette fournie, en créant des composants réutilisables et en assurant une navigation fluide entre les différentes pages.
