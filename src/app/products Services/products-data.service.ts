import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private _HttpClient:HttpClient) { }
  getData():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products`)
  }
  getCatiegories():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
  getBrands():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }
  getDetails(id:any):Observable<any>{
    console.log(`https://route-ecommerce.onrender.com/api/v1/${{id}}`)
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }
  
}
