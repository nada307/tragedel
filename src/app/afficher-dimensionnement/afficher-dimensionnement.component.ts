import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import {DimensionnementService } from 'src/app/services/dimensionnement.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-afficher-dimensionnement',
  templateUrl: './afficher-dimensionnement.component.html',
  styleUrls: ['./afficher-dimensionnement.component.css']
})
export class AfficherDimensionnementComponent implements OnInit {
  submitted: boolean;
  loading: boolean;
  selectedCity1 = "has "
  public tabs :Dimensionnement[];
  display: boolean = false;

  for: FormGroup;
  info: {};
  infDialog: boolean;
  ajoutInf: boolean;
  constructor(private fin: DimensionnementService, private messageService: MessageService, private confirmationService: ConfirmationService, private form: FormBuilder) {
    this.for = this.form.group({
      canals: [''],
      namont: [''],
      naval:[''],
      debitunitaire:[''],
      surface:[''],
      largeurdecanal:[''],
      coefmanning:[''],
      pente:[''],
      talus:[''],
      y0:[''],
      revanche:['']
      




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
 

  showDialog() {
    this.display = true;
}


  getdata() {
    this.fin.getDimensionnementList().subscribe(data => this.tabs = data);
  }
  
  save() {
    console.log(this.tabs.values);
    
  }

  ngOnInit(): void {
    this.getdata();
    this.save();
  }

  
}
