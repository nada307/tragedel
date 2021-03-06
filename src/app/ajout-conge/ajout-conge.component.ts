import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { CongeService } from '../conge.service';
import { Conge } from "../Conge";
import { AfficherCongeComponent } from '../afficher-conge/afficher-conge.component';


@Component({
  selector: 'app-ajout-conge',
  templateUrl: './ajout-conge.component.html',
  styleUrls: ['./ajout-conge.component.css']
})
export class AjoutCongeComponent implements OnInit {
  //ajout:FormGroup;

  ajoutinf :FormGroup;

  conge: Conge = new Conge();
  submitted = false;
  tabs = new Conge();
//Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  //-----------------------------------------------
ajoutob:object= {};
  msj: string;

  constructor(private AS: CongeService,private router: Router, private http:HttpClient,private fr:FormBuilder,private tab:AfficherCongeComponent) { 

  this.ajoutinf=this.fr.group({
    nomComplet:['',[Validators.required]],
    dateDebut:['',[Validators.required]],
    dateFin:['',[Validators.required]],
    nbrJour:['',[Validators.required ]],
    raison:['',[Validators.required]],
    adresse:['',[Validators.required]],
    telephone:['',[Validators.required]],
    interimaire:['',[Validators.required]],
    validateur:['',[Validators.required]],
    info:['',[Validators.required]],
    etat:['',[Validators.required]],

  })
      }
  
  // ---------- ADD METHOD ----------
  
  
  add(conge)
  {
    this.ajoutob=
    {
      "nomComplet":conge.nomComplet,
      "dateDebut":conge.dateDebut,
      "dateFin":conge.dateFin,
      "nbrJour":conge.nbrJour,
      "raison":conge.raison,
      "adresse":conge.raison,
      "telephone":conge.telephone,
      "interimaire":conge.interimaire,
      "validateur":conge.validateur,
      "info":conge.info,
      "etat":conge.etat

    }
    this.http.post("http://localhost:8083/examen/servlet/addConge",this.ajoutob).subscribe((res:Response)=>{
      this.msj="ajouter avec succ";
      console.log(this.ajoutinf.value);
      this.tab.getdata()

      
    })

    }
    
  
  // ----------------------------------- FIN METHOD -----------------------
    ngOnInit() {
    }
  
    get nomComplet()
  {
    return this.ajoutinf.get("nomComplet");
  }

    get dateDebut()
    {
      return this.ajoutinf.get("dateDebut");
    }
  
    get dateFin()
    {
      return this.ajoutinf.get("dateFin");
    }
  
    get nbrJour()
    {
      return this.ajoutinf.get("nbrJour");
    }
  
   
  
  get raison()
  {
    return this.ajoutinf.get("raison");
  }

  get adresse()
  {
    return this.ajoutinf.get("adresse");
  }
  
  get telephone()
  {
    return this.ajoutinf.get("telephone");
  }
  
  get interimaire()
  {
    return this.ajoutinf.get("interimaire");
  }
  
  get validateur()
  {
    return this.ajoutinf.get("validateur");
  }
  get info()
  {
    return this.ajoutinf.get("info");
  }
  get etat()
  {
    return this.ajoutinf.get("etat");
  }
    newConge(): void {
      this.submitted = false;
      this.conge = new Conge();
    }
  
    
  // add()
  // {
  //   this.tabs=this.ajout.value;
  //   this.AS.createAutorisation(this.tabs).subscribe(data => {
  //     console.log(data);
      
  //   })
  //   console.log(this.ajout.value);
  
  // }
  
    // save() {
    //   this.AS.createAutorisation(this.autorisation)
    //     .subscribe(data => console.log(data), error => console.log(error));
    //   this.autorisation = new Autorisation();
    //   this.gotoList();
    // }
  
   /* formatDate(dateSortie) {
      let month = dateSortie.getMonth() + 1;
      let day = dateSortie.getDate();
  
      if (month < 10) {
          month = '0' + month;
      }
  
      if (day < 10) {
          day = '0' + day;
      }
  
      return dateSortie.getFullYear() + '-' + month + '-' + day;
  }*/
  
    // onSubmit() {
    //   this.submitted = true;
    //   this.save();    
    // }
  
    gotoList() {
      this.router.navigate(['/conges']);
    }
  }