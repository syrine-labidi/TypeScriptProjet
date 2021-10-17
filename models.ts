

export class Produit {
    //public libelle : string ;
    //public prix : number ;

    constructor (private libelle?:string , private prix?:number) {
        console.log("creation d'un nouveau produit ")
        this.libelle = libelle;
        this.prix = prix ;     
    }
        
    public info(){
        console.log(this.libelle + this.prix);
    }


        
}
//type fournisseur qui accept 3 attribut
export interface fournisseur {
    "nom" : string ,
    "email" : string , 
    "tel" : number 
}



