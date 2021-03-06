import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AfficherComponent } from './afficher/afficher.component';
import { AfficherDimensionnementComponent } from './afficher-dimensionnement/afficher-dimensionnement.component';
import { AjouterDimensionnementComponent } from './ajouter-dimensionnement/ajouter-dimensionnement.component';



import { AjoutCongeComponent } from './ajout-conge/ajout-conge.component';
import { AfficherCongeComponent } from './afficher-conge/afficher-conge.component';
import { AjoutTicketComponent } from './ajout-ticket/ajout-ticket.component';
import { AfficherTicketComponent } from './afficher-ticket/afficher-ticket.component';



// PrimeNg Module
import {FieldsetModule} from 'primeng/fieldset';

import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AfficherautoComponent } from './afficherauto/afficherauto.component';
import { ValiderautoComponent } from './validerauto/validerauto.component';
import { ValidercongeComponent } from './validerconge/validerconge.component';
import { CongelistadminComponent } from './congelistadmin/congelistadmin.component';
import { TestComponent } from './test/test.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
//import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';




@NgModule({
  declarations: [
    AppComponent,
    AjouterComponent,
    AfficherComponent,
    AjoutCongeComponent,
    AfficherCongeComponent,
    AjoutTicketComponent,
    AfficherTicketComponent,
    AfficherautoComponent,
    ValiderautoComponent,
    ValidercongeComponent,
    CongelistadminComponent,
    TestComponent,
    UploadImageComponent,
    AfficherDimensionnementComponent,
    AjouterDimensionnementComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    AccordionModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  //  RxReactiveFormsModule,
    ConfirmDialogModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    TooltipModule,
    CardModule,
    ProgressBarModule,
    DialogModule,
    ContextMenuModule,
    SliderModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    FieldsetModule,
    
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
