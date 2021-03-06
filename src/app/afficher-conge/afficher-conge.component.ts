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
import {AccordionModule} from 'primeng/accordion';

@Component({
  selector: 'app-afficher-conge',
  templateUrl: './afficher-conge.component.html',
  styleUrls: ['./afficher-conge.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AfficherCongeComponent implements OnInit {

  @ViewChild ("ajout",{static:false}) ajout :AjoutCongeComponent
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Conge[];
  display: boolean = false;
  

  for: FormGroup
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: CongeService, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
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
  openNew() {
    this.info = {};
    this.submitted = false;
    this.ajoutInf = true;

  }
  hideDialog() {
    this.infDialog = false;
    this.submitted = false;
  }
 
  get nomComplet()
  {
    return this.for.get("nomComplet");
  }

  showDialog() {
    this.display = true;
}


  getdata() {
    this.fin.getCongeList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }

  ngOnInit(): void {
    this.getdata();
    this.save();
  }

  
}
