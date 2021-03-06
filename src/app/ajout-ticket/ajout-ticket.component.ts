import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from "../Ticket";
import { Router } from '@angular/router';
import { AutorisationService } from '../AutorisationService';
import { Autorisation } from "../Autorisation";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse  } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Output } from '@angular/core';
import { AfficherTicketComponent } from '../afficher-ticket/afficher-ticket.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ajout-ticket',
  templateUrl: './ajout-ticket.component.html',
  styleUrls: ['./ajout-ticket.component.css']
})
export class AjoutTicketComponent implements OnInit {
  @Input() form
  @Output() saveEvent=new EventEmitter ()
 // ajout:FormGroup;
 selectedFile: File;
 retrievedImage: any;
 base64Data: any;
 retrieveResonse: any;
 message: string;
 imageName: any;
 ajoutinf :FormGroup;
  ticket: Ticket = new Ticket();
  submitted = false;
  tabs = new Ticket();
//Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
  //-----------------------------------------------
ajoutob:object= {};
  msj: string;

  constructor(private AS: TicketService,private router: Router, private http:HttpClient,private fr:FormBuilder,private tab:AfficherTicketComponent) { 

  this.ajoutinf=this.fr.group({
    support:['',[Validators.required]],
    equipe:['',[Validators.required]],
    description:['',[Validators.required]],
    priorite:['',[Validators.required ]],
    dateCreation:['',[Validators.required]],
    informer:['',[Validators.required]],
    pieceJointe:['',[Validators.required]],

  })
      }
  
  // ---------- ADD METHOD ----------
  
  
  add(ticket)
  {
    this.ajoutob=
    {
      "support":ticket.support,
      "equipe":ticket.equipe,
      "description":ticket.description,
      "priorite":ticket.priorite,
      "dateCreation":ticket.dateCreation,
      "informer":ticket.informer,
      "pieceJointe":ticket.pieceJointe
      

    }
    this.http.post("http://localhost:8083/examen/servlet/addTicket",this.ajoutob).subscribe((res:Response)=>{
      this.msj="ajouter avec succ";
      console.log(this.ajoutinf.value);
      this.tab.getdata()
    })
  
    }
    
  
  // ----------------------------------- FIN METHOD -----------------------
    ngOnInit() {
    }
  
    get support()
  {
    return this.ajoutinf.get("support");
  }

    get equipe()
    {
      return this.ajoutinf.get("equipe");
    }
  
    get description()
    {
      return this.ajoutinf.get("description");
    }
  
    get priorite()
    {
      return this.ajoutinf.get("priorite");
    }
  
   
  
  get dateCreation()
  {
    return this.ajoutinf.get("dateCreation");
  }

  get informer()
  {
    return this.ajoutinf.get("informer");
  }
  
  get pieceJointe()
  {
    return this.ajoutinf.get("pieceJointe");
  }
  
 
    newConge(): void {
      this.submitted = false;
      this.ticket = new Ticket();
    }
    onFileChange(event) {
  
      if (event.ticket.files.length > 0) {
        const file = event.ticket.files[0];
        this.ajoutinf.patchValue({
          fileSource: file
        });
      }
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
   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.http.post('http://localhost:8083/examen/servlet/image/uploadI', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get('http://localhost:8083/examen/servlet/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
    gotoList() {
      this.router.navigate(['/tickets']);
    }
  }