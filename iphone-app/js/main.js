// Creation de l'application de base 

iphone13 = 
{
  ecran : "Ecran 240 Hz.",
  camera : "Camera mode ProRAW",
  performance : "Performance 6 Go de RAM. ",

}

const app = Vue.createApp({
  // Insertion de data pour la page
  data(){
    return {
      produit : 'Iphone13',
      slogan : 'Le meilleur Iphone de tous les temps',
      description_produit : 'Nous avons parcouru le design et tous les éléments constituant « l’extérieur » du futur smartphone d’Apple mais qu’en est-il de ses caractéristiques techniques ? ',
      image : './assets/images/iphone-13-blue.png',

      // ecran : "Plusieurs rumeurs circulent concernant les nouveaux écrans présents sur le futur iPhone 13. Ces derniers devraient proposer un taux de rafraichissent variable inédit sur des écrans ProMotion 120 Hz « always on » voire 240 Hz. En effet, un brevet a été déposé par la marque pour une technologie capable de faire varier la fréquence de rafraichissement en fonction du contenu affiché à l’écran.",

      // camera : "L’iPhone 12 Pro et Pro Max intégraient déjà de belles innovations en ce qui concerne la caméra, on pense bien sûr au Lidar et au mode ProRAW. Ces nouveautés devraient également être présentes sur les quatre prochains iPhone 13, pour garantir des photos et des vidéos d’une très haute qualité.",

      // touchId : "En 2021, Apple pourrait de nouveau intégrer Touch ID à ses smartphones mais différemment. En effet, concernant le déverrouillage par empreintes digitales, les analystes évoquent un capteur intégré directement sous l’écran (comme sur le OnePlus par exemple), permettant de libérer de l’espace et de profiter d’une bordure la plus fine possible.",

      // performance : "L’une des principales nouveautés de l’iPhone 13, et pas des moindres, est l’intégration d’une puce SoC A15 gravé en 5nm+ par TSMC. Ce processus offre des performances encore plus impressionnantes que le 5nm et une meilleure efficacité énergétique. Côté mémoire, le nouvel iPhone devrait ressembler à la précédente génération avec des modèles entrée de gamme à 4 Go de RAM. Les modèles Pro auront 6 Go de RAM. ",

      caracteristique : iphone13,

      

      Iphone13quantity : 3,
    }
  }
  
});

// Montage de l'application pour l'affichage
app.mount('#app');