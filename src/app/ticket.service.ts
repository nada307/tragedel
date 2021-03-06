import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './Ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl :string = "http://localhost:8083/examen/servlet/";

  constructor(private http: HttpClient) { }
  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

 
  createTicket(ticket: Ticket): Observable<Ticket> {
    const headers={'content-type':'application/json'};
    const body = JSON.stringify(Ticket);
    console.log(body);
    return this.http.post<Ticket>(this.baseUrl,body,{'headers':headers});
  }

  getTicketList(): Observable<any> {
    return this.http.get<Ticket[]>(this.baseUrl + '/getAllTicket');     
}



 // upload methode ( uload component )
 upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.baseUrl}+ '/uploadI'`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}
getFiles(): Observable<any> {
  return this.http.get(`${this.baseUrl} + '/get/'`);


}






}
