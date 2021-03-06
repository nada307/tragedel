import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from './Conge';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private baseUrl :string = "http://localhost:8083/examen/servlet/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

 
  createConge(conge: Conge): Observable<Conge> {
    const headers={'content-type':'application/json'};
    const body = JSON.stringify(Conge);
    console.log(body);
    return this.http.post<Conge>(this.baseUrl,body,{'headers':headers});
  }

  getCongeList(): Observable<any> {
    return this.http.get<Conge[]>(this.baseUrl + '/getAllConge');     
}

getConge(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl+ '/getOneConge/'}/${id}`);
}

updateConge(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl + '/updateconge'}/${id}`, value);
}








}
