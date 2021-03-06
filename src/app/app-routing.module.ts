import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AfficherComponent } from './afficher/afficher.component';
import { AjoutCongeComponent } from './ajout-conge/ajout-conge.component';
import { AfficherCongeComponent } from './afficher-conge/afficher-conge.component';
import { AjoutTicketComponent } from './ajout-ticket/ajout-ticket.component';
import { AfficherTicketComponent } from './afficher-ticket/afficher-ticket.component';
import { AfficherautoComponent } from './afficherauto/afficherauto.component';
import { ValiderautoComponent } from './validerauto/validerauto.component';
import { CongelistadminComponent } from './congelistadmin/congelistadmin.component';
import { ValidercongeComponent } from './validerconge/validerconge.component';
import { TestComponent } from './test/test.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AjouterDimensionnementComponent } from './ajouter-dimensionnement/ajouter-dimensionnement.component';
import { AfficherDimensionnementComponent } from './afficher-dimensionnement/afficher-dimensionnement.component';

const routes: Routes = [ 
  { path: '', redirectTo: '', pathMatch: 'full' },
 { path: 'autorisations', component: AfficherComponent },
 { path: 'autos', component: AfficherautoComponent },
 { path: 'update/:id', component: ValiderautoComponent },
  { path: 'addauto', component: AjouterComponent },
  {path: 'addConge', component: AjoutCongeComponent},
  {path:'conges', component:AfficherCongeComponent},
  {path:'addTicket', component:AjoutTicketComponent},
  {path:'tickets', component:AfficherTicketComponent},
  {path:'congesad', component:CongelistadminComponent},
  {path:'dims', component:AfficherDimensionnementComponent},
  {path:'addDim', component:AjouterDimensionnementComponent},
 
  {path:'updateconge/:id' , component:ValidercongeComponent},
  {path:'uploadd', component:TestComponent},
  {path:'upload', component:UploadImageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
