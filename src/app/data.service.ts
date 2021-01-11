import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product: any;
  constructor(private http:HttpClient) { }
  getProductslist(): Observable<any>{
    return this.http.get('https://fakestoreapi.com/products')
  }
  
}
