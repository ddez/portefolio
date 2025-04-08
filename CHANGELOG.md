1) 2025-04-06
    - Diverses correction minimes
    - ajout dossier 
	    - components/
	    - styles/
    - Ajout components (uniquement la mise en place): 
	    - Accueil
		    - Banner
		- Header
		- Projets
		- APropos
		- Formation
		- Competences
		- Contact 
	- Ajout fichiers CSS
		- Accueil.css
		- colors.css
	- MAJ du fichier App.jsx
	- réorganisation du dossier public:
		- création du dossier img
		- création du dossier logos
	-  Ajout de quelques données fictives dans les components demandés.
2) 2025-04-07 #1
	-  components "Projets":
		-  "map" de la donnée
		- ajout d'illustrations  dans le dossier public
		- ajout du dossier + componant "cards" (pour plus tard)
		- fonctionnel, mais à améliorer (via component card)
 3) 2025-04-07 #2
	 - création du fichier src/data/siteData.json qui contiendra/centralisera les infos du site. Ce fichier sera chargé par App.jsx qui se chargera de dispatcher les données dans les différents components
	 - amélioration du component accueil pour intégrer les données du JSON.
4) 2025-04-07 #3
	- Mise en forme de base pour les components demandés 
5)  2025-04-07 #4
	- intégration d'une timeline pour le component formations.
	- ajout d'un css pour App.jsx
	- mise à jour du fichier siteData.json pour intégrer les données de Formations.
	- mise à jour de app.jsx pour diffuser le json vers Formations
6) 2025-04-07 #5
	- MAJ fichier roadmap
7) 2025-04-08 #1
	- Rapatriement des data vers le fichier siteData.json  et implémentation via des props