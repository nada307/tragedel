import { Component, OnInit, ViewChild } from '@angular/core';
import { Autorisation } from '../Autorisation';
import { AutorisationService } from '../AutorisationService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import {DialogModule} from 'primeng/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Conge } from '../Conge';
import { CongeService } from '../conge.service';

@Component({
  selector: 'app-validerconge',
  templateUrl: './validerconge.component.html',
  styleUrls: ['./validerconge.component.css']
})
export class ValidercongeComponent implements OnInit {

  id:number;
  conge = new Conge();
    constructor(private fin: CongeService,private route: ActivatedRoute,private router: Router) { }
  
    ngOnInit() {
      this.conge = new Conge();
  
      this.id = this.route.snapshot.params['id'];
      
      this.fin.getConge(this.id)
        .subscribe(data => {
          console.log(data)
          this.conge = data;
        }, error => console.log(error));
  
    }
  
    updateConge() {
      this.fin.updateConge(this.id, this.conge)
        .subscribe(data => console.log(data), error => console.log(error));
      this.conge = new Conge();
    }
  
    onSubmit() {
      this.updateConge();   
      this.gotoList(); 
    }
  
    gotoList() {
      this.router.navigate(['/congesad']);
    }
  
  }
  
