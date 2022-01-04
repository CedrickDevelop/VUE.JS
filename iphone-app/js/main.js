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
      
      variants: [
        {id: 'iphone13-001', color:'blue', image:'./assets/images/iphone-13-blue.png'},
        {id: 'iphone13-002', color:'midnight', image:'./assets/images/iphone-13-midnight.png'},
        {id: 'iphone13-003', color:'red', image:'./assets/images/iphone-13-red.png'}
      ],

      
      image : './assets/images/iphone-13-blue.png',
      // image2 : './assets/images/iphone-13-midnight.png',
      // image3 : './assets/images/iphone-13-red.png',

      caracteristique : iphone13,      

      Iphone13quantity : 9,

      cart : 0,

      affichage_image : 1,

    }
  },
  // Insertion de methodes d'evenements
  methods: {
    addCart(){
      this.cart++;
      this.Iphone13quantity--;
      // alert('Ajouté au panier');
    },
    updateImage(imageURL){
      this.image = imageURL
    },
    // mouseOverImage1(){
    //   this.affichage_image = 1
    // },
    // mouseOverImage2(){
    //   this.affichage_image = 2
    // },
    // mouseOverImage3(){
    //   this.affichage_image = 3;
    // }
  }
  
});

// Montage de l'application pour l'affichage
app.mount('#app');