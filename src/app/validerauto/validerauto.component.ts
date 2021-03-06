
import { Component, OnInit, ViewChild } from '@angular/core';
import { Autorisation } from '../Autorisation';
import { AutorisationService } from '../AutorisationService';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import {DialogModule} from 'primeng/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AfficherautoComponent } from '../afficherauto/afficherauto.component';
import { AfficherTicketComponent } from '../afficher-ticket/afficher-ticket.component';

@Component({
  selector: 'app-validerauto',
  templateUrl: './validerauto.component.html',
  styleUrls: ['./validerauto.component.css']
})
export class ValiderautoComponent implements OnInit {

  id:number;
auto = new Autorisation();
  constructor(private fin: AutorisationService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.auto = new Autorisation();

    this.id = this.route.snapshot.params['id'];
    
    this.fin.getAutoristion(this.id)
      .subscribe(data => {
        console.log(data)
        this.auto = data;
      }, error => console.log(error));
      
  }

  updateAutorisation() {
    this.fin.updateAutorisation(this.id, this.auto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.auto = new Autorisation();
  }

  onSubmit() {
    this.updateAutorisation();   
    this.gotoList(); 
    

  }

  gotoList() {
    this.router.navigate(['/autos']);
  }

}
