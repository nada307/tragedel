
export class Conge   {

     private  id:number; 
     private nomComplet: String;
     private   dateDebut:Date;
     private   dateFin:Date;
     private nbrJour:number;
     private  raison: String;
      private adresse: String;
    private  telephone:String ;
     private interimaire:String;
    private   validateur :String;
    private  info:String;
     private etat:String ;


      public getId():number {
            return	this.id;
      
            }
            public setId(id: number): void {
                  this.id=id;
      
            }
            public getnomComplet():String {
                  return	this.nomComplet;
            
                  }
            public setnomComplet(nomComplet: String): void {
                  this.nomComplet=nomComplet;
                  
            }
           
            public getdateDebut():Date {
                  return this.dateDebut;
            
                  }
            public setdateDebut(dateDebut: Date): void {
                  this.dateDebut=dateDebut;
                  
            }
            public getdateFin():Date {
                  return	this.dateFin;
            
                  }
            public setdateFin(dateFin: Date): void {
                  this.dateFin=dateFin;
                  
            }
      
            public getnbrJour():number {
                  return	this.nbrJour;
            
                  }
                  public setnbrJour(nbrJour: number): void {
                        this.nbrJour=nbrJour;
            
                  }

                  public getraison():String {
                        return	this.raison;
                  
                        }
                  public setraison(raison: String): void {
                        this.raison=raison;
                        
                  }
                 
            public getadresse():String {
                  return	this.adresse;
            
                  }
            public setadresse(adresse: String): void {
                  this.adresse=adresse;
                  
            }
      
            public gettelephone():String {
                  return	this.telephone;
            
                  }
            public settelephone(telephone: String): void {
                  this.telephone=telephone;
                  
            }
      
           
      
            public getinterimaire():String {
                  return	this.interimaire;
            
                  }
            public setinterimaire(interimaire: String): void {
                  this.interimaire=interimaire;
                  
            }

            public getvalidateur():String {
                  return	this.validateur;
            
                  }
            public setvalidateur(validateur: String): void {
                  this.validateur=validateur;
                  
            }
      
      
            public getinfo():String {
                  return	this.info;
            
                  }
            public setinfo(info: String): void {
                  this.info=info;
                  
            }
      
           
            public getetat():String {
                  return	this.etat;
            
                  }
            public setetat(etat: String): void {
                  this.etat=etat;
                  
            }
      
            
      }
