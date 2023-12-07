import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getdata() {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteItem(userId: number) {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
