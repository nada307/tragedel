import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import {DimensionnementService } from 'src/app/services/dimensionnement.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-dimensionnement',
  templateUrl: './ajouter-dimensionnement.component.html',
  styleUrls: ['./ajouter-dimensionnement.component.css']
})
export class AjouterDimensionnementComponent implements OnInit {
  ajoutinf :FormGroup;

  dimensionnement: Dimensionnement = new Dimensionnement();
  submitted = false;
  tabs = new Dimensionnement();
  ajoutob:object= {};
  msj: string;
  constructor(private DS: DimensionnementService,private router: Router, private http:HttpClient,private fr:FormBuilder,private tab:AjouterDimensionnementComponent) {
    this.ajoutinf=this.fr.group({
      Canals:['',[Validators.required]],
      NœudAmont:['',[Validators.required]],
      NœudAval:['',[Validators.required]],
      DebitUnitaire:['',[Validators.required ]],
      Surface:['',[Validators.required]],
      LargeurDeCanal:['',[Validators.required]],
      CoefManning:['',[Validators.required]],
      Pente:['',[Validators.required]],
      Talus:['',[Validators.required]],
      Y0:['',[Validators.required]],
      Revanche:['',[Validators.required]],
  
    })

   }
   add(dimensionnement)
  {
    this.ajoutob=
    {
      "canals":dimensionnement.canals,
      "namont":dimensionnement.namont,
      "naval":dimensionnement.naval,
      "debitunitaire":dimensionnement.debitunitaire,
      "surface":dimensionnement.surface,
      "largeurdecanal":dimensionnement.largeurdecanal,
      "coefmanning":dimensionnement.coefmanning,
      "pente":dimensionnement.pente,
      "talus":dimensionnement.talus,
      "y0":dimensionnement.y0,
      "revanche":dimensionnement.revanche

    }
    this.http.post("http://localhost:8088/addDim",this.ajoutob).subscribe((res:Response)=>{
      this.msj="ajouter avec succ";
      console.log(this.ajoutinf.value);
      this.tab.getdata()

      
    })

    }
    save()
    {
      this.submitted = true;
      console.log(this.ajoutinf.value);
  
    }
  
   
  
    getdata() {
      this.DS.getDimensionnementList().subscribe(data => this.tabs = data);
    }

  ngOnInit(): void {
  }
  get Canals()
  {
    return this.ajoutinf.get("canals");
  }

  get Nœudamont()
  {
    return this.ajoutinf.get("nœudamont");
  }

  get Nœudaval()
  {
    return this.ajoutinf.get("nœudaval");
  }

  get Debitunitaire()
  {
    return this.ajoutinf.get("debitunitaire");
  }

get Surface()
{
  return this.ajoutinf.get("surface");
}

get Largeurdecanal()
{
  return this.ajoutinf.get("largeurdecanal");
}

get Coefmanning()
{
  return this.ajoutinf.get("coefmanning");
}

get Pente()
{
  return this.ajoutinf.get("pente");
}

get Talus()
{
  return this.ajoutinf.get("talus");
}

get Y0()
{
  return this.ajoutinf.get("y0");
}

get Revanche()
{
  return this.ajoutinf.get("revanche");
}
  newDimensionnement(): void {
    this.submitted = false;
    this.dimensionnement = new Dimensionnement();
  }

  gotoList() {
    this.router.navigate(['/dims']);

  }

}
