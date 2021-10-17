"use strict";
exports.__esModule = true;
exports.Produit = void 0;
var Produit = /** @class */ (function () {
    //public libelle : string ;
    //public prix : number ;
    function Produit(libelle, prix) {
        this.libelle = libelle;
        this.prix = prix;
        console.log("creation d'un nouveau produit ");
        this.libelle = libelle;
        this.prix = prix;
    }
    Produit.prototype.info = function () {
        console.log(this.libelle + this.prix);
    };
    return Produit;
}());
exports.Produit = Produit;
