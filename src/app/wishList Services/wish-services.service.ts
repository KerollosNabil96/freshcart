import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class WishServicesService {
  headrsToken : any ={
    Token: localStorage.getItem('token')
  }

  constructor(private _HttpClient:HttpClient) { }


  addToWishList(id:string):Observable<any>{
    return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId: id 
    },
    {
      headers : this.headrsToken
    }
    )
  }

getWishList():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`
  
  ,{
    headers : this.headrsToken
  }
  )
}


wishListRemove(id:any):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` ,
  {
    headers:this.headrsToken
  }
  )
}

















}