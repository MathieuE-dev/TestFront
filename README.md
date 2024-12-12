Restaurant Booking System

Ce projet est un système de réservation de tables pour un restaurant, développé avec React, Next.js, et un API REST. Les utilisateurs peuvent effectuer des réservations via un formulaire convivial et recevoir des confirmations.

Fonctionnalités Principales: 

📝 Formulaire de réservation interactif avec validation dynamique

📧 Confirmation de réservation simulée via une API REST

🔥 Design personnalisé utilisant du CSS sur mesure

🌐 Backend API avec gestion des routes GET et POST

✈️Navigation interactive pour l'utilisateur au niveau de la navbar. Bouton de navigation fluide vers les sections de la page. Bouton de retour en haut de la page.

🖥️Implémentation d'une vidéo dans la classe Hero pour décrire l'ambiance du restaurant en plus de la section Gallery que l'utilisateur peut consulter. Carte affichant les images de la galerie avec un effet lightbox.

⏰Animation de chargement pour les sections en attente de données.

Technologies Utilisées: 

Frontend : React, TypeScript, Next.js

Backend : API REST intégrée avec Next.js

Styling : CSS personnalisé, Bootstrap

Installation du projet : 

1) Clonez le projet : git clone https => https://github.com/MathieuE-dev/TestFront.git
2) Accédez au dossier du projet => cd restaurant-booking
3) Installez les dépendances => npm install
4) Installer bootstrap, gliphtbox et swiper => npm i bootstrap bootstrap-icons glightbox swiper
5) Démarrez le serveur de développement => npm run dev
6) Accédez à l'application : Ouvrez http://localhost:3000 dans votre navigateur.


Comment l'utiliser ? 

Remplissez le formulaire de réservation :

Nom, email, téléphone, date, heure, nombre de personnes et le message personnalisé

Soumettre votre réservation : une confirmation de réservation ou un message d'erreur sera affiché lorsque le formulaire est restitué. Si le formualire est correctement écrit alors un message de validation va apparaitre. Toutefois si le formulaire n'est pas bien remplie alors un message d'erur demandant de le reremplir va s'afficher. 

Logs Serveur :

Vous pouvez vérifier les logs du serveur pour les demandes POST et GET. Lorsque vous soumettrez votre formulaire cela va créer une  nouvelle réservation sur votre serveur.
Vous pouvez retrouver cela en faisant avec => http://localhost:3000/api/booking par exemple après la soumission de votre réservation. 

API Endpoints : 

1. GET /api/bookings: Récupère toutes les réservations.

Réponse :
```javascript
[
  {
    "id": 1,
    "details": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "123456789",
      "date": "2024-12-12",
      "time": "19:00",
      "people": 4
    }
  }
]
```
2. POST /api/bookings : Création d'une nouvelle réservation.

```javascript
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "987654321",
  "date": "2024-12-12",
  "time": "19:30",
  "people": 2,
  "message": "Table près de la fenêtre, s'il vous plaît."
}
```
Réponse que l'on attend : 
```javascript
{
  "validate": "success",
  "createdBooking": {
    "id": 2,
    "details": {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "987654321",
      "date": "2024-12-12",
      "time": "19:30",
      "people": 2,
      "message": ""
    }
  }
}
```

Mes choix techniques et esthétiques : 

1°) Choix techniques : 

a) Navigation
  
- Défilement fluide: scrollIntoView

Raisons principales:

Améliore l'expérience utilisateur en permettant une transition fluide entre les sections et réduit l'utilisation de bibliothèques externes pour une fonctionnalité native du DOM.

- Activation automatique des sections:

Raisons principales:

  Fournit un retour visuel immédiat à l'utilisateur en indiquant la section active et utilisation du défilement pour détecter la position actuelle, créant un comportement interactif.

- Réactivité mobile:

Raisons principales:

  La navigation adaptative garantit une bonne apparence sur tous les écran et utilisation d'un menu déroulant qui améliore l'érgonomie sur les petits écrans. 

b) Gestion des données en locale avec Next

- Utilisation d'APIs REST simulées avec NextJs:

Raisons principales:

Elle va permettre une architecture évolutive et facile à connecter par la suite à un backend mais aussi va permettre de structurer les données de manière claire. 

  
- Données dynamiques:

Raisons principales:

Permet la mise à jour en temps réel des composants lors de la récupération des données et surtout améliore les performances en chargeant unqiuement ce qui a besoin d'être chargé. Le choix de useEffect et useState est important car ils permettent de simplifier la gestion des états de chargement. 

c) Choix des effets visuels : 

- Lightbox avec Glightbox:

Raison principales :

  Elle va améliorer la présentation des images avec un effet professionnel et interactif tout en évitant la création d'une solution personnalisée complexe. 
    

Des animations via AOS:

Raison principales :
 Va mettre en palce des animations modernes et accroitre ainsi l'interactivité et l'engagement des utilisateurs 
    Ajoute des animations modernes sans complexité supplémentaire.
    Accroît l'interactivité et l'engagement utilisateur.
    Personnalisable avec des délais et des types d'animation spécifiques à chaque composant.

Effets de défilement:

Raison principales :

Permet d'améliorer l'apparence visuelle lors de la navigation et apporte un certain dynamisme en rendant les sections plus vivantes au fur et à mesure que l'utilisateur va défiler. 

 En résumé, les choix techniques sont motivés par l'équilibre entre la simplicité d'implémentation, la performance et l'esthétique. Ces décisions garantissent un projet robuste, interactif et agréable à utiliser, avec un potentiel de développement backend important à l'avenir.





