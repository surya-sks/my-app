import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlList } from '../models/url-model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/';
  apiUrl = 'http://localhost:8080/api/';
  async getItemsList(): Promise<any[]> {
    const data = await fetch(this.apiUrl + UrlList.GET_ITEMS_LIST);
    return (await data.json()) ?? [];
  }
}
