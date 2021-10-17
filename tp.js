"use strict";
/*console.log("hello world") ;
var x = "formation Angular" ;
console.log (x) ;*/
exports.__esModule = true;
/*declaration de la methode
function info (){
    for (let i =0 ; i<5 ; i++){
        console.log(i);
    }
    console.log("valeur finale : " + i);
}

info (); // appel de la methode

let tab:any[]= [12 , "formation", true]
let nom:string="amine";
let test :boolean= false ;
let val : any;
val="med";
val=100;
for (let i : number = 0 ; i<tab.length ; i++)
{
    console.log(tab[i]);
}*/
var models_1 = require("./models");
function getFournisseur(provider) {
    console.log(provider.nom + " " + provider.tel + " " + provider.email);
}
var myProduit = new models_1.Produit();
myProduit.info();
var myProduit2 = new models_1.Produit("PC", 2500);
myProduit2.info();
var myProduit3 = new models_1.Produit("PC 3 ");
myProduit3.info();
//passage variable en parame de type json qui s'appel provider de type fournisseur (interface)
getFournisseur({ "nom": "HP", "email": "hp@gmail.com", "tel": 3333 });
