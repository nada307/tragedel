import { Ticket } from '../Ticket';
import {TicketService } from '../ticket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { Conge } from '../Conge';
import {CongeService } from '../conge.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AjoutCongeComponent } from '../ajout-conge/ajout-conge.component';
import { AjoutTicketComponent } from '../ajout-ticket/ajout-ticket.component';

@Component({
  selector: 'app-afficher-ticket',
  templateUrl: './afficher-ticket.component.html',
  styleUrls: ['./afficher-ticket.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class AfficherTicketComponent implements OnInit {

  @ViewChild ("ajout",{static:false}) ajout :AjoutTicketComponent
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Ticket[];
  display: boolean = false;

  for: FormGroup
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: TicketService, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
    this.for = this.form.group({
      support: [''],
      equipe: [''],
      description:[''],
      priorite:[''],
      dateCreation:[''],
      informer:[''],
      pieceJointe:['']
      




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
    this.fin.getTicketList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }

  ngOnInit(): void {
    this.getdata();
    this.save();
  }

 
}
