import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Object> {
    const productsUrl: string = `${this.apiUrl}/products`;
    return this.http.get(productsUrl);
  }
}
