import { Conge } from '../Conge';
import {CongeService } from '../conge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Component, OnInit, ViewChild } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AjoutCongeComponent } from '../ajout-conge/ajout-conge.component';
@Component({
  selector: 'app-congelistadmin',
  templateUrl: './congelistadmin.component.html',
  styleUrls: ['./congelistadmin.component.css']
})
export class CongelistadminComponent implements OnInit {

//  @ViewChild ("ajout",{static:false}) ajout :AjoutCongeComponent
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Conge[];
  id:number;
  conge = new Conge();
  for: FormGroup
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  display: boolean = false;

  constructor(private fin: CongeService,private route: ActivatedRoute, private router: Router, private form: FormBuilder) {
    this.for = this.form.group({
      nomComplet: [''],
      dateDebut: [''],
      dateFin:[''],
      nbrJour:[''],
      raison:[''],
      adresse:[''],
      telephone:[''],
      interimaire:[''],
      validateur:[''],
      info:[''],
      etat:['']




    })
  }
/*  openNew() {
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
    this.fin.getCongeList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }
  onSubmit() {
    
    this.updateConge()  ;
    //this.updateAutorisationn(this.id);
    //  this.gotoList(); 
    //this.fin.updateAutorisation(this.id, this.auto)
    }
    showDialog() {
      this.display = true;
      this.updateConge();
  }
  updateConge() {
    this.fin.updateConge(this.id, this.conge)
      .subscribe(data => console.log(data), error => console.log(error));
    this.conge = new Conge();

  }

  ngOnInit(): void {
    this.getdata();
    this.save();
  }
//  updateConge(id: number){
 //   this.router.navigate(['updateconge', id]);
 
//}
//updateConge() {
 // this.fin.updateConge(this.id, this.conge)
  //  .subscribe(data => console.log(data), error => console.log(error));
  //this.conge = new Conge();

//}
}
