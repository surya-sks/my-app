import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/';
  // apiUrl = 'http://localhost:8080/api/';

  //railway.app api url
  apiUrl = 'https://my-app-apiiiii-production.up.railway.app/api/';
  
  saveBill(bill: any): Observable<any> {
    let url = this.apiUrl + 'bill/saveBill';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, bill, { headers });
  }

  saveBillLineItems(billLineItems: any): Observable<any> {
    let url = this.apiUrl + 'bill/saveBillLineItems';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, billLineItems, { headers });
  }
}
