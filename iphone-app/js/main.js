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
        {pos:0, id: 'iphone13-001', color:'#497d9e', image:'./assets/images/iphone-13-blue.png', stock:3},
        {pos:1, id: 'iphone13-002', color:'#2b323a', image:'./assets/images/iphone-13-midnight.png', stock:30},
        {pos:2, id: 'iphone13-003', color:'#c51b2c', image:'./assets/images/iphone-13-red.png', stock:0}
      ],

      // stock: ['en stock', 'plus de stock', 'pas d\'achat possible'],

      image : './assets/images/iphone-13-blue.png',
      caracteristique : iphone13,   
      Iphone13quantity : 9,
      cart : 0,
      product_pos : 0,

    }
  },
  // Insertion de methodes d'evenements
  methods: {
    addCart(){
      this.cart++;
      this.Iphone13quantity--;
    },
    updateImage(imageURL, product_pos){
      this.image = imageURL;

      let product = this.variants[product_pos].stock

      if (product < 1){
        console.log("pas d'achat possible")

      }
      else if ((product > 1) && (product < 5)){
        console.log("presque plus")
      }
      else {
        console.log("achat possible")
      }

    },
  },  
});

app.component('app-nav', {
  template: '<H1>New Iphone<h1>',
})

// Montage de l'application pour l'affichage
app.mount('#app');