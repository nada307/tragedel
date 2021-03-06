import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Dimensionnement } from 'src/app/models/Dimensionnement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DimensionnementService {
  private baseUrl :string = "http://localhost:8088/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

    createDimensionnement(dimensionnement: Dimensionnement): Observable<Dimensionnement> {
      const headers={'content-type':'application/json'};
      const body = JSON.stringify(Dimensionnement);
      console.log(body);
      return this.http.post<Dimensionnement>(this.baseUrl,body,{'headers':headers});
    }
  
    getDimensionnementList(): Observable<any> {
      return this.http.get<Dimensionnement[]>(this.baseUrl + '/getAll');     
  }
}
