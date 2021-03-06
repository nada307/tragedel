
export class Ticket   {

  private   id:number; 
  private  support:String;
   private equipe: String;
   private description: String;
   private priorite:String ;
   private dateCreation:Date;
   private informer:String;
  private  pieceJointe :String;

  public getId():number {
    return	this.id;

    }
    public setId(id: number): void {
          this.id=id;

    }

    public getsupport():String {
        return	this.support;
  }
  public setsupport(support: String): void {
      this.support=support;
      
}

    public getequipe():String {
          return	this.equipe;
    }
    public setequipe(equipe: String): void {
        this.equipe=equipe;
        
  }

   public getpriorite():String {
            return	this.priorite;
      
            }
      public setpriorite(priorite: String): void {
            this.priorite=priorite;
            
      }
      public getdescription():String {
        return	this.description;
  
        }
  public setdescription(description: String): void {
        this.description=description;
        
  }

      public getdateCreatione():Date {
        return	this.dateCreation;
  
        }
  public setdateCreation(dateCreation: Date): void {
        this.dateCreation=dateCreation;
        
  }

  public getinformer():String {
    return	this.informer;

    }
public setinformer(informer: String): void {
    this.informer=informer;
    
}

public getpieceJointe():String {
    return	this.pieceJointe;

    }
public setpieceJointe(pieceJointe: String): void {
    this.pieceJointe=pieceJointe;
    
}

       
          }
    
    
   
