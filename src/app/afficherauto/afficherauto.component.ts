import { Component, OnInit, ViewChild } from '@angular/core';
import { Autorisation } from '../Autorisation';
import { AutorisationService } from '../AutorisationService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import {DialogModule} from 'primeng/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-afficherauto',
  templateUrl: './afficherauto.component.html',
  styleUrls: ['./afficherauto.component.css']
})
export class AfficherautoComponent implements OnInit {

 @ViewChild ("ajout",{static:false}) ajout :AjouterComponent
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Autorisation[];
  display: boolean = false;
  id:number;
  auto = new Autorisation();
  for: FormGroup
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: AutorisationService,private route: ActivatedRoute, private form: FormBuilder,private router: Router) {
    this.for = this.form.group({
      nomComplet: [''],
      dateSortie: [''],
      heureSortie:[''],
      heureRetour:[''],
      raison:[''],
      destination:[''],
      motif:[''],
      validateur:[''],
      etat:[''],



    })
  }

  
  
 /* openNew() {
    this.info = {};
    this.submitted = false;
    this.ajoutInf = true;

  }
  hideDialog() {
    this.infDialog = false;
    this.submitted = false;
  }*/
 
  get nomComplet()
  {
    return this.for.get("nomComplet");
  }



  getdata() {
    this.fin.getAutorisationList().subscribe(data => this.tabs = data);
  
  }
  
  save() {
    console.log(this.tabs.values);
    
  }
  showDialog() {
    this.display = true;
 //   this.updateAutorisation();
}
  ngOnInit(): void {
    this.auto = new Autorisation();

    this.id = this.route.snapshot.params['id'];
    
  

      this.getdata();
      this.save();
  }
  //onSubmit() {
    
   // this.updateAutorisation()  ;
    //this.updateAutorisationn(this.id);
    //  this.gotoList(); 
    //this.fin.updateAutorisation(this.id, this.auto)
    //}
 // updateAutorisation() {
   // this.fin.updateAutorisation(this.id, this.auto)
    //  .subscribe(data => console.log(data), error => console.log(error));
    //this.auto = new Autorisation();

  //}
 updateAutorisation(id: number){
   this.router.navigate(['update', id]);
  }
//updateAutorisation() {
 //  this.fin.updateAutorisation(this.id, this.auto)
  //   .subscribe(data => console.log(data), error => console.log(error));
   // this.auto = new Autorisation();
// }

  gotoList() {
    this.router.navigate(['/autos']);
  }
  }
 
 


